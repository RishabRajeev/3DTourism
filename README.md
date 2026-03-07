# 🏛️ TN Tourism — Virtual Tours

An interactive virtual tour web application for heritage and historic sites across **Tamil Nadu, India**. Built with **React 19 + Vite + Tailwind CSS v4**.

---

## ✨ Features

### Landing Page
- Featured card for Meenakshi Amman Temple (full detail page experience)
- Grid of 360° Street View tours for 4 heritage sites

### Meenakshi Amman Temple — Full Detail Page
A dedicated page with **10 tabs** modelled after the official [HR & CE portal](https://maduraimeenakshi.hrce.tn.gov.in/hrcehome/index_temple.php?tid=31962):

| Tab | Contents |
|---|---|
| 🏛️ About | History, literary background, temple timings, references |
| 🗼 Structures | 12 Gopurams, Key Structures, Sacred Tanks, Shrines & Deities |
| 🌐 360° Tour | Official HR & CE virtual tour embed |
| 🪔 Poojas | 6 daily pooja schedule with timings |
| 🎊 Festivals | Annual overview + detailed schedule (29 events, 9 festival groups) |
| 🎫 Passes | Special darshan & heritage passes |
| 🎟️ Tickets | Entry ticket types |
| 💳 Payments | UPI, bank transfer, and other payment methods |
| 🙏 Seva | Undiyal Seva (charity box) & Annadhanam Seva (free meals) |
| 🏥 Facilities | Parking, restrooms, wheelchair access, and more |

### 360° Street View Tours
| Destination | City |
|---|---|
| Kapaleeshwarar Temple | Mylapore, Chennai |
| Brihadeeshwara Temple | Thanjavur |
| Fort St. George Museum | Chennai |
| Gingee Fort | Villupuram |

---

## 🛠️ Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| Vite | 7 | Build tool & dev server |
| Tailwind CSS | 4 | Utility-first styling |
| @tailwindcss/vite | latest | Tailwind v4 Vite plugin |
| Google Maps Embed | — | Street View iframes (no API key needed) |

---

## 🚀 Getting Started

```bash
# 1. Navigate into the React app
cd tn-virtual-tour

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
3DTourism/
├── 3D/
│   └── 3d.html                        # Original HTML prototype (kept for reference)
└── tn-virtual-tour/                   # React + Vite application
    ├── public/
    │   └── images/                    # Tour destination images
    │       ├── kapaleeshawarar.jpeg
    │       ├── brihadeeshwara.jpg
    │       ├── Fort-St.George-Museum.jpg
    │       ├── gingeefort.jpg
    │       └── meenakshi.jpg          # Add this image to show on the featured card
    └── src/
        ├── data/
        │   ├── tours.js               # All 360° tour destinations
        │   └── meenakshi.js           # All Meenakshi Temple data
        ├── pages/
        │   └── MeenakshiPage.jsx      # Full temple detail page
        ├── components/
        │   ├── Navbar.jsx
        │   ├── HeroSection.jsx
        │   ├── TourCard.jsx
        │   ├── LandingPage.jsx
        │   ├── TourViewer.jsx
        │   ├── InfoPopup.jsx
        │   └── meenakshi/
        │       ├── MeenakshiHero.jsx
        │       ├── MeenakshiTabNav.jsx
        │       └── sections/
        │           ├── AboutSection.jsx
        │           ├── StructuresSection.jsx
        │           ├── TourSection.jsx
        │           ├── PoojaSection.jsx
        │           ├── FestivalsSection.jsx
        │           ├── PassesSection.jsx
        │           ├── TicketsSection.jsx
        │           ├── PaymentsSection.jsx
        │           ├── SevaSection.jsx
        │           └── FacilitiesSection.jsx
        ├── App.jsx                    # Root component & view state management
        └── main.jsx
```

---

## ➕ Adding a New 360° Tour

1. Add the destination image to `public/images/`
2. Add a new entry to `src/data/tours.js`:

```js
{
  key: 'your-key',
  type: 'streetview',
  image: '/images/your-image.jpg',
  alt: 'Alt text',
  city: 'City Name',
  title: 'Temple / Site Name',
  cardDesc: 'Short description for the card.',
  location: 'City, Tamil Nadu',
  desc: 'Longer description shown in the info popup.',
  highlights: [
    { icon: '🏛️', label: 'Feature', detail: 'Detail text.', colorClass: 'text-orange-500' },
  ],
  iframeSrc: 'https://www.google.com/maps/embed?pb=...',  // Street View embed URL
}
```

> **Getting a Street View URL:** Open Google Maps → navigate to the location → drag the yellow pegman to enter Street View → click **Share** → **Embed a map** → copy the `src` URL from the iframe code.

---

## 📝 Data To Complete

The following fields in `src/data/meenakshi.js` are marked `⚠️ TODO` and need to be filled in with official values:

- **Pooja timings** — verify the 6 daily pooja times with the temple
- **Pass prices** — Special Darshan, Rooftop, Museum, VIP package
- **Ticket prices** — Photography & Video permits
- **UPI ID** — official temple donation UPI
- **Bank details** — account name, bank, account number, IFSC, branch
- **Annadhanam timings** — breakfast/lunch serving times, sponsorship cost, contact number
- **Undiyal Seva portal link** — online donation URL
- **Meenakshi Temple image** — add `meenakshi.jpg` to `public/images/`

---

## 📜 Data Sources

- [HR & CE Department, Govt. of Tamil Nadu](https://maduraimeenakshi.hrce.tn.gov.in)
- [Official 360° Virtual Tour](https://maduraimeenakshi.hrce.tn.gov.in/resources/docs/virtualtour/31962/index.html)
- South Indian Inscriptions, Volumes IV–VIII, XXII
- Annual Reports on Indian Epigraphy (1890–1964)
- S. Sathianatha Ayer, *History of Nayaks of Madurai*, Madras, 1924
- D. Devakunjari, *Madurai through the Ages*, SAHER, Madurai, 1985

---

## 📄 License

This project is for educational and tourism promotion purposes.
