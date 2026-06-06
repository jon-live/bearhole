/* =============================================================
   EDIT THIS FILE to update your website.
   No coding needed — just change the text between the quotes,
   the prices, and the image filenames. Save, then refresh.
   ============================================================= */

const SITE = {
  /* ---- Top of the page ---- */
  houseName: "Bear Hole",
  tagline: "A warm, cozy home — rooms for rent",
  location: "Your City, Country",
  heroImage: "assets/images/hero.svg", // replace with assets/images/hero.jpg

  /* ---- About section ---- */
  about: {
    heading: "Welcome home",
    text:
      "A comfortable, light-filled house with private rooms and shared " +
      "living spaces. Fully furnished, friendly neighbours, and everything " +
      "you need to settle in from day one. Browse the rooms below — each " +
      "has its own price and photos — then send me a message.",
    highlights: [
      "Fully furnished rooms",
      "Fast Wi-Fi included",
      "Shared kitchen & lounge",
      "Bills included",
      "Quiet, safe neighbourhood",
      "Flexible move-in dates",
    ],
  },

  /* ---- ROOMS ----
     Add or remove rooms by copying a { ... } block.
     - price / period: shown like "$650 / month"
     - status: "available" or "rented"
     - photos: list of image files (first one is the cover)
     - video: a file path OR a YouTube link OR "" for none           */
  rooms: [
    {
      name: "The Sunrise Room",
      price: "$650",
      period: "/ month",
      status: "available",
      size: "14 m²",
      beds: "1 double bed",
      description:
        "Bright corner room with morning sun, a large wardrobe and a cozy " +
        "reading nook by the window.",
      features: ["Private balcony", "Double bed", "Work desk", "Wardrobe"],
      photos: [
        "assets/images/rooms/room-1.svg",
        "assets/images/rooms/room-1.svg",
      ],
      video: "", // e.g. "https://www.youtube.com/watch?v=XXXX" or "assets/videos/room1.mp4"
    },
    {
      name: "The Garden Room",
      price: "$580",
      period: "/ month",
      status: "available",
      size: "12 m²",
      beds: "1 single bed",
      description:
        "Quiet room overlooking the garden. Perfect for a student or anyone " +
        "who loves a calm, green view.",
      features: ["Garden view", "Single bed", "Built-in shelves"],
      photos: [
        "assets/images/rooms/room-2.svg",
        "assets/images/rooms/room-2.svg",
      ],
      video: "",
    },
    {
      name: "The Loft Room",
      price: "$720",
      period: "/ month",
      status: "rented",
      size: "18 m²",
      beds: "1 queen bed",
      description:
        "Spacious upstairs room with sloped ceilings, extra storage and an " +
        "en-suite bathroom.",
      features: ["En-suite bathroom", "Queen bed", "Extra storage", "Skylight"],
      photos: [
        "assets/images/rooms/room-3.svg",
        "assets/images/rooms/room-3.svg",
      ],
      video: "",
    },
  ],

  /* ---- PUBLIC / SHARED AREAS ---- */
  publicAreas: {
    heading: "Shared spaces",
    text: "Spaces everyone enjoys together.",
    items: [
      { title: "Living room", photo: "assets/images/public/public-1.svg" },
      { title: "Kitchen", photo: "assets/images/public/public-2.svg" },
      { title: "Garden & patio", photo: "assets/images/public/public-3.svg" },
    ],
  },

  /* ---- FLOOR PLAN ---- */
  floorplan: {
    heading: "Floor plan",
    text: "See how the house is laid out.",
    image: "assets/images/floorplan.svg", // replace with your plan image
  },

  /* ---- CONTACT ---- */
  contact: {
    heading: "Get in touch",
    text:
      "Interested in a room or have a question? Send me a message and I'll " +
      "get back to you soon.",
    email: "lee.leon0519@gmail.com",
    phone: "", // optional, e.g. "+1 555 123 4567" — leave "" to hide
    // To make the form actually send email, create a free form at
    // https://formspree.io and paste your form ID here (looks like "xayzwkdb").
    formspreeId: "YOUR_FORM_ID",
  },
};
