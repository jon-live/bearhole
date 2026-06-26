/* =============================================================
   EDIT THIS FILE to update your website.
   No coding needed — just change the text between the quotes,
   the prices, and the image filenames. Save, then refresh.
   ============================================================= */

const SITE = {
  /* ---- Top of the page ---- */
  houseName: "2387 Cedar St",
  tagline: "A warm, spacious home, with rooms for rent in the Northside of Berkeley, walking distance to UC Berkeley",
  location: "The Northside, Berkeley",
  heroImage: "assets/images/public/cover.png", // landing page background

  /* ---- About section ---- */
  about: {
    heading: "Welcome home",
    text:
      "A comfortable, light-filled house with private rooms and shared " +
      "living spaces. Fully furnished, safe neighborhood, and everything " +
      "you need to settle in from day one. Browse the rooms below — each " +
      "has its own price and photos — then send me a message.",
    highlights: [
      "Fully furnished rooms",
      "Wi-Fi provided",
      "Huge kitchen & lounge",
      "In-unit free laundry",
      "Safe neighborhood",
      "Flexible move-in dates",
    ],
  },

  /* ---- ROOMS ----
     Add or remove rooms by copying a { ... } block.
     - floor: which floor the room is on (rooms are grouped by floor)
     - price / period: shown like "$650 / month"
     - status: "available" or "rented"
     - photos: list of image files (first one is the cover)
     - video: a file path OR a YouTube link OR "" for none           */
  rooms: [
    {
      name: "Room 1",
      floor: 2,
      price: "$1,650",
      period: "/ month",
      status: "available",
      beds: "1 double bed",
      description:
        "Available starting Aug 1st 2026. " +
        "Spacious master bedroom with fireplace, 2 wardrobes, huge windows, " +
        "and direct access to balcony and garden.",
      features: ["Double bed", "Fireplace", "2 wardrobes", "Huge windows", "Balcony & garden access"],
      photos: [
        "assets/images/rooms/room1photo.png",
        "assets/images/rooms/room1.png",
      ],
      video: "assets/videos/IMG_8425.mp4",
    },
    {
      name: "Room 2",
      floor: 2,
      price: "$1,450",
      period: "/ month",
      status: "rented",
      beds: "1 double bed",
      description:
        "Available starting Aug 1st 2026. " +
        "Cozy room with sloped ceiling, with access to balcony and garden.",
      features: ["Double bed", "Sloped ceiling", "Balcony & garden access"],
      photos: [
        "assets/images/rooms/room2photo.png",
        "assets/images/rooms/room2.png",
      ],
      video: "assets/videos/IMG_8422.mp4",
    },
    {
      name: "Room 3",
      floor: 2,
      price: "$1,650",
      period: "/ month",
      status: "available",
      beds: "1 double bed",
      description:
        "Available starting Aug 1st 2026. " +
        "Huge room with a wardrobe and an enclosed studio for additional " +
        "working or meditation space.",
      features: ["Double bed", "Wardrobe", "Enclosed studio", "Work/meditation space"],
      photos: [
        "assets/images/rooms/room3photo.png",
        "assets/images/rooms/room3.png",
      ],
      video: "assets/videos/IMG_8431.mp4",
    },
    {
      name: "Room 4",
      floor: 2,
      price: "$1,450",
      period: "/ month",
      status: "available",
      beds: "1 double bed",
      description:
        "Available starting Aug 1st 2026. " +
        "Cozy upstairs room with wardrobe and huge windows for great value.",
      features: ["Double bed", "Wardrobe", "Huge windows", "Great value"],
      photos: [
        "assets/images/rooms/room4photo.png",
        "assets/images/rooms/room4.png",
      ],
      video: "assets/videos/IMG_8427.mp4",
    },
    {
      name: "Room 5",
      floor: 1,
      price: "$1,450",
      period: "/ month",
      status: "available",
      beds: "1 double bed",
      description:
        "Available starting Aug 16th 2026. " +
        "Spacious ground-floor room with an en-suite bathroom and a " +
        "walk-in closet.",
      features: ["Double bed", "En-suite bathroom", "Walk-in closet", "Ground floor"],
      photos: [
        "assets/images/rooms/room5photo.png",
        "assets/images/rooms/room5.png",
      ],
      video: "assets/videos/IMG_8432.mp4",
    },
    {
      name: "Room 6",
      floor: 1,
      price: "$1,250",
      period: "/ month",
      status: "rented",
      beds: "1 double bed",
      description:
        "Snug ground-floor room close to the kitchen and living room — " +
        "convenient and easy to settle into.",
      features: ["Double bed", "Near kitchen & living room", "Ground floor"],
      photos: [
        "assets/images/rooms/room6photo.png",
        "assets/images/rooms/room6.png",
      ],
      video: "",
    },
  ],

  /* ---- PUBLIC / SHARED AREAS ---- */
  publicAreas: {
    heading: "Shared spaces",
    text: "Spaces everyone enjoys together.",
    items: [
      { title: "Balcony", photo: "assets/images/public/balcony.png" },
      { title: "Kitchen", photo: "assets/images/public/kitchen.png" },
      { title: "Garden", photo: "assets/images/public/garden.png" },
    ],
  },

  /* ---- FLOOR PLAN ---- */
  floorplan: {
    heading: "Floor plan",
    text: "See how the house is laid out.",
    image: "assets/images/public/floor_plans.png",
  },

  /* ---- CONTACT ---- */
  contact: {
    heading: "Get in touch",
    text:
      "Interested in a room or have a question? Send me a message and I'll " +
      "get back to you soon.",
    // Where the contact form sends to. Also shown on the page so visitors can
    // copy it and email manually (showEmailLink: true).
    email: "ljonathon666@gmail.com",
    showEmailLink: true, // set false to hide the address from the page
    phone: "", // optional, e.g. "+1 555 123 4567" — leave "" to hide
    // To make the form actually send email, create a free form at
    // https://formspree.io and paste your form ID here (looks like "xayzwkdb").
    formspreeId: "YOUR_FORM_ID",
  },
};
