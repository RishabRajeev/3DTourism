/**
 * Static data for all available virtual tour destinations.
 * type: 'streetview' → opens the 360° viewer
 * type: 'detailpage' → opens a dedicated temple detail page
 */
export const tours = [
  {
    key: 'kapaleeshwarar',
    type: 'streetview',
    image: '/images/kapaleeshawarar.jpeg',
    alt: 'Kapaleeshwarar Temple',
    city: 'Chennai',
    title: 'Kapaleeshwarar Temple',
    cardDesc:
      'Experience the vibrant Dravidian architecture and the iconic 120-foot eastern gopuram of this historic Mylapore landmark.',
    location: 'Mylapore, Chennai',
    desc: 'A masterpiece of Dravidian architecture dedicated to Lord Shiva. The current magnificent structure was rebuilt in the 16th century by the Vijayanagara kings.',
    highlights: [
      {
        icon: '🗼',
        label: 'The Eastern Gopuram',
        detail: 'A towering 120-foot gateway.',
        colorClass: 'text-orange-500',
      },
      {
        icon: '💧',
        label: 'Theppakulam',
        detail: 'The massive temple tank to the west.',
        colorClass: 'text-teal-500',
      },
    ],
    iframeSrc:
      'https://www.google.com/maps/embed?pb=!4v1772027666205!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRDQzZmFFUmc.!2m2!1d13.03354017239041!2d80.26964168887673!3f139.15777901503506!4f-9.656949761627047!5f0.7820865974627469',
  },
  {
    key: 'brihadeeshwara',
    type: 'streetview',
    image: '/images/brihadeeshwara.jpg',
    alt: 'Brihadeeshwara Temple',
    city: 'Thanjavur',
    title: 'Brihadeeshwara Temple',
    cardDesc:
      'Walk through the grand courtyards of this 11th-century UNESCO World Heritage site, carved entirely from granite.',
    location: 'Thanjavur, Tamil Nadu',
    desc: 'A Chola architectural masterpiece built by Emperor Raja Raja Chola I in 1010 AD. It is one of the largest South Indian temples.',
    highlights: [
      {
        icon: '🗼',
        label: 'The Grand Vimana',
        detail: 'The imposing 216-foot temple tower.',
        colorClass: 'text-orange-500',
      },
      {
        icon: '🪨',
        label: 'Granite Marvel',
        detail: 'Carved from 130,000 tons of solid granite.',
        colorClass: 'text-gray-600',
      },
    ],
    iframeSrc:
      'https://www.google.com/maps/embed?pb=!4v1772029444694!6m8!1m7!1sIMzjQZOSyBUNwGu1l_0b2g!2m2!1d10.78321156333529!2d79.13154118507558!3f144.80510961097175!4f2.6431793479021195!5f0.7820865974627469',
  },
  {
    key: 'stgeorge',
    type: 'streetview',
    image: '/images/Fort-St.George-Museum.jpg',
    alt: 'Fort St. George Museum',
    city: 'Chennai',
    title: 'Fort St. George Museum',
    cardDesc:
      'Explore the first English fortress in India, housing a fascinating collection of colonial-era artifacts, weapons, and coins.',
    location: 'Chennai, Tamil Nadu',
    desc: 'Located within the historic Fort St. George, this museum showcases a fascinating collection of artifacts from the British East India Company and the colonial era.',
    highlights: [
      {
        icon: '🏛️',
        label: 'Colonial Fortress',
        detail: 'Built in 1644, representing the first English fortress in India.',
        colorClass: 'text-orange-500',
      },
      {
        icon: '⚔️',
        label: 'Armory & Artifacts',
        detail: 'Houses an extensive collection of weapons, uniforms, and rare coins.',
        colorClass: 'text-gray-600',
      },
    ],
    iframeSrc:
      'https://www.google.com/maps/embed?pb=!4v1772038130305!6m8!1m7!1s42ShDSkIUL-3RwVVGpwlvw!2m2!1d13.08069342814029!2d80.28772843713305!3f278.7962167153431!4f-7.9234383513458795!5f0.7820865974627469',
  },
  {
    key: 'gingee',
    type: 'streetview',
    image: '/images/gingeefort.jpg',
    alt: 'Gingee Fort',
    city: 'Villupuram',
    title: 'Gingee Fort',
    cardDesc:
      'Navigate the incredibly steep, impregnable walls of the "Troy of the East," spanning across three massive hillocks.',
    location: 'Villupuram, Tamil Nadu',
    desc: 'Known as the "Troy of the East," this massive, highly impregnable hilltop fortress spans across three hillocks and features incredibly steep defenses.',
    highlights: [
      {
        icon: '⛰️',
        label: 'Rajagiri Hill',
        detail: 'The highest of the three hills, featuring the main citadel and steep rocky steps.',
        colorClass: 'text-orange-500',
      },
      {
        icon: '🏰',
        label: 'Kalyana Mahal',
        detail: 'An impressive multi-story royal palace structure.',
        colorClass: 'text-gray-600',
      },
    ],
    iframeSrc:
      'https://www.google.com/maps/embed?pb=!4v1772038348922!6m8!1m7!1sUjj4DC8bwf9Z0blZkyLzvA!2m2!1d12.25031044991102!2d79.39495514941238!3f209.6994515921256!4f11.2545119721471!5f0.7820865974627469',
  },
  {
    key: 'meenakshi',
    type: 'detailpage',
    // Place meenakshi.jpg inside public/images/ to show the card image
    image: '/images/meenakshi.jpg',
    alt: 'Meenakshi Amman Temple',
    city: 'Madurai',
    title: 'Meenakshi Amman Temple',
    cardDesc:
      'Explore the grandeur of the iconic Dravidian temple complex with 14 towering gopurams, daily poojas, ancient festivals, and immersive virtual tours.',
  },
];
