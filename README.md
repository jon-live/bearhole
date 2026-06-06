# Bear Hole — Rental House Website

A warm, elegant single-page site to showcase your rooms for rent: room photos,
prices, video, shared spaces, floor plan, and a contact form. Pure HTML/CSS/JS —
no build step — designed to host **free on GitHub Pages**.

---

## 📁 What's here

```
index.html              the page
css/style.css           the look (warm & cozy theme)
js/config.js            ← EDIT THIS: your rooms, prices, photos, contact
js/main.js              site logic (you rarely touch this)
assets/images/          your photos go here
  hero.svg              big top photo
  rooms/                room photos
  public/               shared-area photos
  floorplan.svg         floor plan
```

---

## ✏️ How to update your website (no coding)

Open **`js/config.js`** in any text editor. Change the text between the quotes,
the prices, and the image filenames. Save, then refresh the page.

- **Add a room:** copy one `{ ... }` block inside `rooms: [ ]` and edit it.
- **Mark a room rented:** set `status: "rented"`.
- **Set the price:** e.g. `price: "$650"`, `period: "/ month"`.

### Adding your real photos
1. Drop your photo files into the right folder, e.g.
   `assets/images/rooms/sunrise-1.jpg`.
2. In `config.js`, point to them, e.g.:
   ```js
   photos: [
     "assets/images/rooms/sunrise-1.jpg",
     "assets/images/rooms/sunrise-2.jpg"
   ],
   ```
   The first photo is the cover. Add as many as you like.
3. For the big top image, set `heroImage: "assets/images/hero.jpg"`.

### Adding a video
In a room, set `video` to either a YouTube link or a local file:
```js
video: "https://www.youtube.com/watch?v=XXXXXXXX",
// or
video: "assets/videos/sunrise-tour.mp4",
```
Leave it as `""` for no video.

### Making the contact form actually send email
On GitHub Pages there's no server, so the form uses a free service:
1. Go to **https://formspree.io**, sign up, create a form.
2. Copy your form ID (looks like `xayzwkdb`).
3. In `config.js` set `formspreeId: "xayzwkdb"`.

Until you do that, the form falls back to opening the visitor's email app
addressed to you — so it still works.

---

## 👀 Preview it on your computer

Just double-click `index.html` to open it in your browser. (Videos and the
form behave best when served — see below — but the page will display fine.)

To run a quick local server (optional):
```bash
cd bearhole
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## 🚀 Publish free on GitHub Pages

1. Create a GitHub account at https://github.com (if you don't have one).
2. Create a new **public** repository. For a personal site at
   `https://YOURNAME.github.io`, name it exactly **`YOURNAME.github.io`**.
   (Any other repo name works too — the site will live at
   `https://YOURNAME.github.io/REPONAME/`.)
3. Upload these files: click **Add file → Upload files**, drag in everything
   from this folder (including the `assets`, `css`, `js` folders), and commit.
4. Go to **Settings → Pages**. Under "Build and deployment", set
   **Source: Deploy from a branch**, **Branch: `main`**, folder **`/ (root)`**.
   Save.
5. Wait ~1 minute, then visit your URL. Done! 🎉

### Or via command line
```bash
cd bearhole
git init
git add .
git commit -m "Bear Hole rental site"
git branch -M main
git remote add origin https://github.com/YOURNAME/YOURNAME.github.io.git
git push -u origin main
```
Then enable Pages in Settings as in step 4 above.

---

## 🎨 Tweak the colors (optional)

In `css/style.css`, the palette lives at the top under `:root`. Change
`--terracotta` for a different accent color, `--cream` for the background, etc.
