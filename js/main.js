/* ============================================================
   Bear Hole — site logic (renders from config.js)
   You normally don't need to edit this file.
   ============================================================ */

(function () {
  "use strict";

  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const esc = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  /* ---------- Fill in text content ---------- */
  function fillText() {
    $$("[data-brand]").forEach((el) => (el.textContent = SITE.houseName));
    $$("[data-house-name]").forEach((el) => (el.textContent = SITE.houseName));
    $$("[data-tagline]").forEach((el) => (el.textContent = SITE.tagline));
    $$("[data-location]").forEach((el) => (el.textContent = SITE.location));
    $$("[data-footer-name]").forEach((el) => (el.textContent = SITE.houseName));
    $$("[data-year]").forEach((el) => (el.textContent = "2026"));

    const hero = $("[data-hero-bg]");
    if (hero) hero.style.backgroundImage = `url("${SITE.heroImage}")`;

    $("[data-about-heading]").textContent = SITE.about.heading;
    $("[data-about-text]").textContent = SITE.about.text;
    $("[data-highlights]").innerHTML = SITE.about.highlights
      .map((h) => `<li>${esc(h)}</li>`).join("");

    $("[data-shared-heading]").textContent = SITE.publicAreas.heading;
    $("[data-shared-text]").textContent = SITE.publicAreas.text;

    $("[data-floorplan-heading]").textContent = SITE.floorplan.heading;
    $("[data-floorplan-text]").textContent = SITE.floorplan.text;

    $("[data-contact-heading]").textContent = SITE.contact.heading;
    $("[data-contact-text]").textContent = SITE.contact.text;

    document.title = `${SITE.houseName} — Rooms for Rent`;
  }

  /* ---------- Rooms ---------- */
  function roomCard(room, i) {
      const status = (room.status || "").toLowerCase();
      const cover = (room.photos && room.photos[0]) || "";

      // Unavailable: greyed out, no price/details, not clickable.
      if (status === "unavailable") {
        return `
        <article class="room room--unavailable">
          <div class="room__media">
            <span class="room__badge room__badge--unavailable">Not available</span>
            <img src="${esc(cover)}" alt="${esc(room.name)}" loading="lazy" />
          </div>
          <div class="room__body">
            <div class="room__top">
              <h3 class="room__name">${esc(room.name)}</h3>
            </div>
            <p class="room__desc">This room is currently not available.</p>
          </div>
        </article>`;
      }

      const available = status !== "rented";
      const badge = available
        ? `<span class="room__badge room__badge--available">Available</span>`
        : `<span class="room__badge room__badge--rented">Rented</span>`;
      const features = (room.features || [])
        .map((f) => `<li>${esc(f)}</li>`).join("");
      const photoCount = (room.photos || []).length;
      const hint = photoCount > 1
        ? `<span class="room__gallery-hint">⊞ ${photoCount} photos</span>` : "";
      const videoBtn = room.video
        ? `<button class="room__btn room__btn--solid" data-video="${i}">▶ Watch video</button>` : "";

      return `
      <article class="room" data-reveal>
        <div class="room__media" data-room-gallery="${i}">
          ${badge}
          <img src="${esc(cover)}" alt="${esc(room.name)}" loading="lazy" />
          ${hint}
        </div>
        <div class="room__body">
          <div class="room__top">
            <h3 class="room__name">${esc(room.name)}</h3>
            <div class="room__price">${esc(room.price)} <small>${esc(room.period || "")}</small></div>
          </div>
          <div class="room__meta">
            ${room.size ? `<span>⌗ ${esc(room.size)}</span>` : ""}
            ${room.beds ? `<span>☐ ${esc(room.beds)}</span>` : ""}
          </div>
          <p class="room__desc">${esc(room.description)}</p>
          ${features ? `<ul class="room__features">${features}</ul>` : ""}
          <div class="room__actions">
            <button class="room__btn" data-room-gallery="${i}">View photos</button>
            ${videoBtn}
            <a class="room__btn ${videoBtn ? "" : "room__btn--solid"}" href="#contact" data-enquire="${esc(room.name)}">Enquire</a>
          </div>
        </div>
      </article>`;
  }

  function renderRooms() {
    const wrap = $("[data-rooms]");

    // Group rooms by floor, then show floors in descending order (Floor 2 first).
    const floors = {};
    SITE.rooms.forEach((room, i) => {
      const f = room.floor != null ? room.floor : "";
      (floors[f] = floors[f] || []).push({ room, i });
    });
    const floorKeys = Object.keys(floors).sort((a, b) => Number(b) - Number(a));

    wrap.innerHTML = floorKeys.map((f) => {
      const cards = floors[f].map(({ room, i }) => roomCard(room, i)).join("");
      const heading = f === "" ? "" :
        `<div class="rooms__floor-head">
           <h3 class="rooms__floor-title">Floor ${esc(f)}</h3>
           <span class="rooms__floor-count">${floors[f].length} rooms</span>
         </div>`;
      return `<div class="rooms__floor" data-reveal>${heading}<div class="rooms__grid">${cards}</div></div>`;
    }).join("");

    // gallery openers
    $$("[data-room-gallery]").forEach((el) => {
      el.addEventListener("click", () => {
        const room = SITE.rooms[+el.getAttribute("data-room-gallery")];
        openLightbox(room.photos.map((src) => ({ type: "image", src })), 0, room.name);
      });
    });
    // video openers
    $$("[data-video]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        const room = SITE.rooms[+el.getAttribute("data-video")];
        openLightbox([{ type: "video", src: room.video }], 0, room.name);
      });
    });
    // enquire -> prefill form room field
    $$("[data-enquire]").forEach((el) => {
      el.addEventListener("click", () => {
        const field = $('#contactForm input[name="room"]');
        if (field) field.value = el.getAttribute("data-enquire");
      });
    });
  }

  /* ---------- Shared spaces ---------- */
  function renderShared() {
    const wrap = $("[data-shared]");
    const items = SITE.publicAreas.items || [];
    wrap.innerHTML = items.map((it, i) => `
      <div class="shared__card" data-shared-item="${i}" data-reveal>
        <img src="${esc(it.photo)}" alt="${esc(it.title)}" loading="lazy" />
        <span>${esc(it.title)}</span>
      </div>`).join("");

    $$("[data-shared-item]").forEach((el) => {
      el.addEventListener("click", () => {
        const slides = items.map((it) => ({ type: "image", src: it.photo, caption: it.title }));
        openLightbox(slides, +el.getAttribute("data-shared-item"));
      });
    });
  }

  /* ---------- Floor plan ---------- */
  function renderFloorplan() {
    const wrap = $("[data-floorplan]");
    wrap.innerHTML = `<img src="${esc(SITE.floorplan.image)}" alt="Floor plan of ${esc(SITE.houseName)}" loading="lazy" />`;
    wrap.addEventListener("click", () =>
      openLightbox([{ type: "image", src: SITE.floorplan.image, caption: "Floor plan" }], 0));
  }

  /* ---------- Contact ---------- */
  function renderContact() {
    const c = SITE.contact;
    const direct = $("[data-contact-direct]");
    let html = "";
    if (c.email && c.showEmailLink) {
      html += `<div class="contact__row">
          <a href="mailto:${esc(c.email)}"><span class="ico">✉</span>${esc(c.email)}</a>
          <button type="button" class="contact__copy" data-copy="${esc(c.email)}" title="Copy email">Copy</button>
        </div>`;
    }
    if (c.phone) {
      const tel = c.phone.replace(/[^\d+]/g, "");
      html += `<a href="tel:${esc(tel)}"><span class="ico">☎</span>${esc(c.phone)}</a>`;
    }
    direct.innerHTML = html;

    // Copy-to-clipboard for the email address.
    $$("[data-copy]", direct).forEach((btn) => {
      btn.addEventListener("click", async () => {
        const value = btn.getAttribute("data-copy");
        try {
          await navigator.clipboard.writeText(value);
        } catch (e) {
          const t = document.createElement("textarea");
          t.value = value; document.body.appendChild(t); t.select();
          try { document.execCommand("copy"); } catch (_) {}
          document.body.removeChild(t);
        }
        const old = btn.textContent;
        btn.textContent = "Copied!";
        btn.classList.add("is-copied");
        setTimeout(() => { btn.textContent = old; btn.classList.remove("is-copied"); }, 1600);
      });
    });

    const form = $("#contactForm");
    const status = $("[data-form-status]");
    const hasFormspree = c.formspreeId && c.formspreeId !== "YOUR_FORM_ID";
    if (hasFormspree) form.action = `https://formspree.io/f/${c.formspreeId}`;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      status.className = "contact__status";
      status.textContent = "";

      if (!hasFormspree) {
        // Open the Gmail web composer with the message prefilled.
        const fd = new FormData(form);
        const subject = encodeURIComponent(`Room enquiry — ${fd.get("room") || SITE.houseName}`);
        const body = encodeURIComponent(
          `Name: ${fd.get("name")}\nEmail: ${fd.get("email")}\nRoom: ${fd.get("room")}\n\n${fd.get("message")}`
        );
        const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=" +
          encodeURIComponent(c.email) + "&su=" + subject + "&body=" + body;
        const mailtoUrl = `mailto:${c.email}?subject=${subject}&body=${body}`;
        // Primary: Gmail composer in a new tab.
        window.open(gmailUrl, "_blank", "noopener");
        status.classList.add("is-ok");
        status.innerHTML = "Opening Gmail with your message ready to send… " +
          `Prefer your own email app? <a href="${mailtoUrl}">Open it instead</a>.`;
        return;
      }

      try {
        const res = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });
        if (res.ok) {
          form.reset();
          status.classList.add("is-ok");
          status.textContent = "Thanks! Your message has been sent. I'll be in touch soon.";
        } else {
          throw new Error("send failed");
        }
      } catch (err) {
        status.classList.add("is-err");
        status.textContent = "Sorry, something went wrong. Please email me directly.";
      }
    });
  }

  /* ---------- Lightbox ---------- */
  const lb = {
    el: $("#lightbox"),
    stage: $("[data-lb-stage]"),
    caption: $("[data-lb-caption]"),
    slides: [],
    index: 0,
  };

  function youtubeEmbed(url) {
    const m = url.match(/(?:youtube\.com\/.*[?&]v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{6,})/);
    return m ? `https://www.youtube.com/embed/${m[1]}?autoplay=1` : null;
  }

  function renderSlide() {
    const s = lb.slides[lb.index];
    let inner = "";
    if (s.type === "video") {
      const yt = youtubeEmbed(s.src);
      inner = yt
        ? `<iframe src="${yt}" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>`
        : `<video src="${esc(s.src)}" controls autoplay playsinline></video>`;
    } else {
      inner = `<img src="${esc(s.src)}" alt="" />`;
    }
    lb.stage.innerHTML = inner;
    lb.caption.textContent = s.caption || "";
    const multi = lb.slides.length > 1;
    $("[data-lb-prev]").style.display = multi ? "" : "none";
    $("[data-lb-next]").style.display = multi ? "" : "none";
  }

  function openLightbox(slides, index, caption) {
    lb.slides = slides.map((s) => ({ ...s, caption: s.caption || caption || "" }));
    lb.index = index || 0;
    renderSlide();
    lb.el.classList.add("is-open");
    lb.el.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    lb.el.classList.remove("is-open");
    lb.el.setAttribute("aria-hidden", "true");
    lb.stage.innerHTML = "";
    document.body.style.overflow = "";
  }
  function step(dir) {
    lb.index = (lb.index + dir + lb.slides.length) % lb.slides.length;
    renderSlide();
  }

  $("[data-lb-close]").addEventListener("click", closeLightbox);
  $("[data-lb-prev]").addEventListener("click", () => step(-1));
  $("[data-lb-next]").addEventListener("click", () => step(1));
  lb.el.addEventListener("click", (e) => { if (e.target === lb.el) closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (!lb.el.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });

  /* ---------- Nav: scroll state + mobile toggle ---------- */
  function initNav() {
    const nav = $("#nav");
    const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const toggle = $("#navToggle");
    const links = $("#navLinks");
    toggle.addEventListener("click", () => links.classList.toggle("is-open"));
    $$("#navLinks a").forEach((a) =>
      a.addEventListener("click", () => links.classList.remove("is-open")));
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); obs.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    $$("[data-reveal]").forEach((el) => obs.observe(el));
  }

  /* ---------- Boot ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    fillText();
    renderRooms();
    renderShared();
    renderFloorplan();
    renderContact();
    initNav();
    initReveal();
  });
})();
