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
      "Wi-Fi included",
      "Shared kitchen & lounge",
      "In-unit free laundry",
      "Quiet, safe neighbourhood",
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
        "Bright corner room with morning sun, a large wardrobe and a cozy " +
        "reading nook by the window.",
      features: ["Double bed", "Work desk", "Wardrobe", "Lots of light"],
      photos: [
        "assets/images/rooms/room-1.svg",
        "assets/images/rooms/room-1.svg",
      ],
      video: "", // e.g. "https://www.youtube.com/watch?v=XXXX" or "assets/videos/room1.mp4"
    },
    {
      name: "Room 2",
      floor: 2,
      price: "$1,450",
      period: "/ month",
      status: "available",
      beds: "1 double bed",
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
      name: "Room 3",
      floor: 2,
      price: "$1,650",
      period: "/ month",
      status: "available",
      beds: "1 double bed",
      description:
        "Comfortable room with a generous wardrobe and a dedicated study " +
        "corner — great for working from home.",
      features: ["Double bed", "Study corner", "Wardrobe"],
      photos: [
        "assets/images/rooms/room-3.svg",
        "assets/images/rooms/room-3.svg",
      ],
      video: "",
    },
    {
      name: "Room 4",
      floor: 2,
      price: "$1,450",
      period: "/ month",
      status: "available",
      beds: "1 double bed",
      description:
        "Cozy upstairs room with sloped ceilings and a skylight — peaceful " +
        "and full of character.",
      features: ["Skylight", "Single bed", "Extra storage"],
      photos: [
        "assets/images/rooms/room-4.svg",
        "assets/images/rooms/room-4.svg",
      ],
      video: "",
    },
    {
      name: "Room 5",
      floor: 1,
      price: "$1,450",
      period: "/ month",
      status: "available",
      beds: "1 double bed",
      description:
        "Spacious ground-floor room with an en-suite bathroom and direct " +
        "access to the garden.",
      features: ["En-suite bathroom", "Queen bed", "Garden access"],
      photos: [
        "assets/images/rooms/room-5.svg",
        "assets/images/rooms/room-5.svg",
      ],
      video: "",
    },
    {
      name: "Room 6",
      floor: 1,
      price: "$1,450",
      period: "/ month",
      status: "rented",
      beds: "1 double bed",
      description:
        "Snug ground-floor room close to the kitchen and living room — " +
        "convenient and easy to settle into.",
      features: ["Single bed", "Near kitchen", "Wardrobe"],
      photos: [
        "assets/images/rooms/room-6.svg",
        "assets/images/rooms/room-6.svg",
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
