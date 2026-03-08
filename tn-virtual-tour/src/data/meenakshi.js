/**
 * All static content for the Meenakshi Amman Temple detail page.
 *
 * Sections marked with ⚠️ TODO contain placeholder data —
 * replace them once you have the official values.
 */

export const templeInfo = {
  name: 'Arulmigu Meenakshi Sundaraswarar Temple',
  shortName: 'Meenakshi Amman Temple',
  location: 'Madurai - 625001, Tamil Nadu',
  deity: 'Sri Meenakshi Amman & Sri Sundareswarar',
  district: 'Madurai',
  managedBy: 'HR & CE Department, Government of Tamil Nadu',
  timings: [
    { session: 'Morning', open: '5:00 AM', close: '12:30 PM' },
    { session: 'Evening', open: '4:00 PM', close: '10:00 PM' },
  ],
  closedNote: 'Temple is closed between 12:30 PM – 4:00 PM. Timings may vary during festivals.',
  // Official HR & CE virtual tour for Meenakshi Amman Temple.
  // If this shows a blank frame, the server may be blocking cross-origin iframes —
  // in that case replace with a Google Maps Street View embed URL.
  iframeSrc:
    'https://maduraimeenakshi.hrce.tn.gov.in/resources/docs/virtualtour/31962/index.html',
};

/**
 * Six official daily poojas — timings from the HR & CE portal.
 * Source: maduraimeenakshi.hrce.tn.gov.in (action=pooja_info)
 */
export const poojas = [
  {
    id: 1,
    name: 'Thiruvanandal Pooja',
    tamil: 'திருவனந்தல் பூஜை',
    subtitle: 'Mahashodashi',
    time: '05:30 AM – 05:45 AM',
    description: 'The first pooja of the day. The presiding deities are awakened with hymns, flowers, and sacred lamps.',
    icon: '🌅',
  },
  {
    id: 2,
    name: 'Vila Pooja',
    tamil: 'விளா பூஜை',
    subtitle: 'Balai',
    time: '06:30 AM – 07:15 AM',
    description: 'Morning pooja with elaborate rituals and deepa aradhana. Recitation of Thirugnana Sambanda hymns.',
    icon: '🪔',
  },
  {
    id: 3,
    name: 'Kaala Sandhi Pooja',
    tamil: 'காலசந்தி பூஜை',
    subtitle: 'Gowri',
    time: '10:30 AM – 11:20 AM',
    description: 'Midday pooja performed before the temple closes. Special prasadam is distributed to devotees.',
    icon: '☀️',
  },
  {
    id: 4,
    name: 'Malai Pooja',
    tamil: 'மாலை பூஜை',
    subtitle: 'Panchadasi',
    time: '04:30 PM – 05:15 PM',
    description: 'Evening pooja marking the reopening of the temple. Includes procession of the utsava deities.',
    icon: '🌇',
  },
  {
    id: 5,
    name: 'Ardhajama Pooja',
    tamil: 'அர்த்தஜாம பூஜை',
    subtitle: 'Mathangi',
    time: '07:30 PM – 08:15 PM',
    description: 'The grand evening aradhana with deepa, flowers, and sacred hymn recitations.',
    icon: '🌙',
  },
  {
    id: 6,
    name: 'Palliyarai Pooja',
    tamil: 'பள்ளியறை பூஜை',
    subtitle: 'Shodashi',
    time: '09:30 PM – 10:00 PM',
    description: 'The final pooja of the day. The deities are ceremonially put to rest with sacred rituals.',
    icon: '🌟',
  },
];

/** Major annual festivals celebrated at the temple. */
export const festivals = [
  {
    name: 'Chithirai Thiruvizha',
    month: 'April – May',
    duration: '10 days',
    highlight: 'The celestial wedding of Meenakshi and Sundareswarar re-enacted in grand procession.',
    icon: '👑',
    color: 'bg-orange-50 border-orange-200',
    badge: 'bg-orange-100 text-orange-800',
  },
  {
    name: 'Navaratri',
    month: 'September – October',
    duration: '9 nights',
    highlight: 'Nine nights of Goddess worship with special alankaram (adornment) each day.',
    icon: '🪆',
    color: 'bg-pink-50 border-pink-200',
    badge: 'bg-pink-100 text-pink-800',
  },
  {
    name: 'Aadi Pooram',
    month: 'July – August',
    duration: '1 day',
    highlight: 'Birth star festival of Goddess Meenakshi celebrated with grand abhishekam.',
    icon: '⭐',
    color: 'bg-yellow-50 border-yellow-200',
    badge: 'bg-yellow-100 text-yellow-800',
  },
  {
    name: 'Karthigai Deepam',
    month: 'November – December',
    duration: '1 day',
    highlight: 'Festival of lamps illuminating the entire temple complex with thousands of diyas.',
    icon: '🪔',
    color: 'bg-amber-50 border-amber-200',
    badge: 'bg-amber-100 text-amber-800',
  },
  {
    name: 'Aavani Moolam',
    month: 'August – September',
    duration: '1 day',
    highlight: 'Birth star of Lord Sundareswarar celebrated with elaborate abhishekam and procession.',
    icon: '🌿',
    color: 'bg-green-50 border-green-200',
    badge: 'bg-green-100 text-green-800',
  },
  {
    name: 'Thaipusam',
    month: 'January – February',
    duration: '1 day',
    highlight: 'Devotees carry Kavadi in procession honouring Lord Murugan within the temple complex.',
    icon: '🏮',
    color: 'bg-blue-50 border-blue-200',
    badge: 'bg-blue-100 text-blue-800',
  },
];

/**
 * Special entry passes — prices from the official HR & CE ticketing portal.
 * Source: maduraimeenakshi.hrce.tn.gov.in/ticketing (tid=31962)
 */
export const passes = [
  {
    type: 'Special Entry — Amman & Swami',
    price: '₹100',
    description: 'Priority special entry darshan for both Sri Meenakshi Amman and Sri Sundareswarar sanctums.',
    note: 'சிறப்பு நுழைவு அம்மன் மற்றும் ஸ்வாமி — book via official HR & CE portal.',
    icon: '🎫',
    available: true,
  },
  {
    type: 'Special Entry — Amman or Swami',
    price: '₹50',
    description: 'Priority special entry darshan for either Sri Meenakshi Amman or Sri Sundareswarar (one sanctum).',
    note: 'சிறப்பு நுழைவு அம்மன் அல்லது ஸ்வாமி — book via official HR & CE portal.',
    icon: '🎟️',
    available: true,
  },
];

/**
 * Complete official temple service fees.
 * Source: maduraimeenakshi.hrce.tn.gov.in (action=pooja_info) — 16 services.
 */
export const tickets = [
  {
    type: 'General Darshan',
    tamil: '',
    price: 'Free',
    description: 'Standard entry to the main sanctum. No ticket required — open to all devotees.',
    icon: '🙏',
    highlight: true,
    category: 'Entry',
  },
  {
    type: 'Special Entry — Amman & Swami',
    tamil: 'சிறப்பு நுழைவு அம்மன் மற்றும் சுவாமி',
    price: '₹100',
    description: 'Priority special darshan entry to both Sri Meenakshi Amman and Sri Sundareswarar sanctums.',
    icon: '🎫',
    highlight: false,
    category: 'Entry',
  },
  {
    type: 'Special Entry — Amman or Swami',
    tamil: 'சிறப்பு நுழைவு அம்மன் அல்லது சுவாமி',
    price: '₹50',
    description: 'Priority special darshan entry to either Sri Meenakshi Amman or Sri Sundareswarar (one sanctum).',
    icon: '🎟️',
    highlight: false,
    category: 'Entry',
  },
  {
    type: 'Archanai',
    tamil: 'அர்ச்சனை',
    price: '₹5',
    description: 'Personal prayer and archanai performed by temple priests in your name.',
    icon: '🪔',
    highlight: false,
    category: 'Prayer',
  },
  {
    type: 'Annai Tamil Archanai',
    tamil: 'அன்னை தமிழ் அர்ச்சனை',
    price: '₹5',
    description: 'Archanai recited in Tamil in the name of the Goddess.',
    icon: '🪔',
    highlight: false,
    category: 'Prayer',
  },
  {
    type: 'Abhirami Andhadhi',
    tamil: 'அபிராமி அந்தாதி',
    price: '₹10',
    description: 'Recitation of the 100-verse Abhirami Andhadhi hymn in honour of Goddess Meenakshi.',
    icon: '📿',
    highlight: false,
    category: 'Prayer',
  },
  {
    type: 'Thiruvilakku Pooja',
    tamil: 'திருவிளக்கு பூஜை',
    price: '₹200',
    description: 'Sacred lamp-lighting pooja offered in dedication to the presiding deity.',
    icon: '🕯️',
    highlight: false,
    category: 'Prayer',
  },
  {
    type: 'Maavilakku',
    tamil: 'மாவிளக்கு',
    price: '₹2',
    description: 'Traditional lamp offering made from rice flour (maa), lit before the deity.',
    icon: '🔆',
    highlight: false,
    category: 'Prayer',
  },
  {
    type: 'Siddhar Pushpa Koodaram',
    tamil: 'சித்தர் புஷ்ப கூடாரம்',
    price: '₹500',
    description: 'Decorative flower canopy offering at the Siddhar shrine within the temple complex.',
    icon: '🌸',
    highlight: false,
    category: 'Offering',
  },
  {
    type: 'Ubaya Thirukalyanam',
    tamil: 'உபய திருக்கல்யாணம்',
    price: '₹1,501',
    description: 'Sponsor the celestial wedding ceremony of Goddess Meenakshi and Lord Sundareswarar.',
    icon: '👑',
    highlight: false,
    category: 'Seva',
  },
  {
    type: 'Ubaya Thangaratham',
    tamil: 'உபய தங்கரதம்',
    price: '₹1,501',
    description: 'Sponsor the golden chariot (Thangaratham) procession of the presiding deities.',
    icon: '🏆',
    highlight: false,
    category: 'Seva',
  },
  {
    type: 'Kalyanam',
    tamil: 'கல்யாணம்',
    price: '₹100',
    description: 'Register a wedding ceremony to be conducted within the temple premises.',
    icon: '💍',
    highlight: false,
    category: 'Marriage',
  },
  {
    type: 'Kalyanam Thamboolam',
    tamil: 'கல்யாணம் தாம்பூலம்',
    price: '₹50',
    description: 'Thamboolam (betel leaf offering) as part of the Kalyanam ceremony.',
    icon: '🌿',
    highlight: false,
    category: 'Marriage',
  },
  {
    type: 'Marriage Application Form',
    tamil: 'திருமண விண்ணப்ப படிவம்',
    price: '₹10',
    description: 'Application form for scheduling a marriage ceremony at the temple.',
    icon: '📋',
    highlight: false,
    category: 'Marriage',
  },
  {
    type: 'Cloak Room',
    tamil: 'பொருட்கள் பாதுகாப்பு அறை கட்டணம்',
    price: '₹2',
    description: 'Secure storage for belongings and luggage within the temple premises.',
    icon: '🧳',
    highlight: false,
    category: 'Facility',
  },
  {
    type: 'Mobile Phone Storage',
    tamil: 'கைபேசி பாதுகாப்பு கட்டணம்',
    price: '₹5',
    description: 'Secure deposit for mobile phones before entering the main sanctum.',
    icon: '📱',
    highlight: false,
    category: 'Facility',
  },
];

/**
 * Online payment and donation options.
 * ⚠️ TODO: Replace with the temple's actual UPI ID, bank account details, and portal link.
 */
export const payments = {
  upiId: 'meenakshitemple@sbi',        // ⚠️ TODO: Replace with actual UPI ID
  portalLink: 'https://maduraimeenakshi.hrce.tn.gov.in',
  bankDetails: {
    accountName: 'Arulmigu Meenakshi Sundaraswarar Temple',
    bank: '⚠️ TODO: Bank name',
    accountNo: '⚠️ TODO: Account number',
    ifsc: '⚠️ TODO: IFSC code',
    branch: '⚠️ TODO: Branch name',
  },
  methods: [
    { label: 'UPI / GPay / PhonePe', icon: '📱', note: 'Scan QR at the Donation Counter' },
    { label: 'Online Portal', icon: '💻', note: 'Donate via the official HR&CE portal' },
    { label: 'Bank Transfer (NEFT/RTGS)', icon: '🏦', note: 'Use the bank details above' },
    { label: 'Cash at Counter', icon: '💵', note: 'Available at all temple donation counters' },
    { label: 'DD / Cheque', icon: '📝', note: 'Payable to the temple trust — contact office' },
  ],
};

/** Seva (devotional service) offerings at the temple. */
export const sevas = {
  undiyal: {
    title: 'Undiyal Seva (Temple Charity Box)',
    description:
      'The Undiyal (charity box / hundi) is the sacred donation box placed inside the temple. Devotees drop cash offerings as a direct contribution to the temple\'s maintenance and activities.',
    howTo: [
      'Drop cash directly into the Undiyal boxes placed throughout the temple complex.',
      'All amounts are accepted — no minimum donation required.',
      'A receipt can be obtained at the office for donations above ₹100.',
    ],
    // ⚠️ TODO: Add any special Undiyal campaign details if available
    note: '⚠️ Online Undiyal Seva portal link — please provide the official URL.',
    icon: '🪣',
  },
  annadhanam: {
    title: 'Annadhanam Seva (Sacred Free Meal)',
    description:
      'Annadhanam (gift of food) is one of the most meritorious sevas. The temple serves free meals daily to pilgrims, devotees, and the needy — continuing an unbroken tradition of charity.',
    schedule: [
      // ⚠️ TODO: Confirm actual meal serving timings
      { meal: 'Morning Breakfast', time: '⚠️ TODO: Time' },
      { meal: 'Afternoon Lunch', time: '⚠️ TODO: Time' },
    ],
    howToParticipate: [
      'Individuals or organisations can sponsor a day\'s Annadhanam in memory of loved ones.',
      'Contact the temple office to book a date and confirm the donation amount.',
      // ⚠️ TODO: Add sponsorship cost per day
      'Sponsorship cost per day: ⚠️ TODO — please provide amount.',
    ],
    contact: '⚠️ TODO: Provide the Annadhanam office phone number.',
    icon: '🍚',
  },
};

/** Available facilities inside and around the temple. */
export const facilities = [
  { icon: '🅿️', name: 'Parking', detail: 'Designated parking areas available near all four gopurams.' },
  { icon: '👟', name: 'Footwear Counter', detail: 'Secure footwear deposit counters at every entrance.' },
  { icon: '🚿', name: 'Changing Rooms', detail: 'Separate changing rooms for men and women near the East Gopuram.' },
  { icon: '💧', name: 'Drinking Water', detail: 'RO drinking water stalls available throughout the complex.' },
  { icon: '🏥', name: 'First Aid / Medical', detail: 'Medical aid post available inside the temple premises.' },
  { icon: '♿', name: 'Wheelchair Access', detail: 'Wheelchair assistance available on request at the main entrance.' },
  { icon: '🧳', name: 'Cloak Room', detail: 'Luggage and belongings can be deposited at the cloak room.' },
  { icon: '📿', name: 'Prasadam Counter', detail: 'Official temple prasadam (sacred offerings) available for purchase.' },
  { icon: '🏛️', name: 'Art Museum', detail: 'Temple Art Museum with bronze idol collection — open daily.' },
  { icon: '📖', name: 'Information Centre', detail: 'Temple information desk for visitor guidance and schedules.' },
  { icon: '🚻', name: 'Restrooms', detail: 'Clean restroom facilities maintained near all major entrances.' },
  { icon: '📷', name: 'Photography Zone', detail: 'Designated areas for photography inside the complex (permit required).' },
];

/**
 * Detailed festival schedule with exact dates and pooja timings.
 * All three groups (Prathosam, Brahmotsavam/Krittigai/Margazhi, Navarathri) are combined here.
 */
export const festivalSchedule = [
  // ── Prathosam ──
  {
    festival: 'Prathosam',
    thithiType: 'Theipirai',
    festivalDate: '16/01/2026',
    festivalDetail: 'Pradhosham',
    poojaTimings: ['04:30 AM – 06:00 AM', '04:31 PM – 06:30 PM'],
  },
  {
    festival: 'Prathosam',
    thithiType: 'Valarpirai / Theipirai',
    festivalDate: '30/01/2026',
    festivalDetail: 'Pradhosham / Thai Velli Mahapradosam',
    poojaTimings: ['05:30 AM – 06:30 AM', '04:30 PM – 06:00 PM', '04:30 PM – 06:30 PM'],
  },
  {
    festival: 'Prathosam',
    thithiType: 'Pournami',
    festivalDate: '10/02/2026',
    festivalDetail: 'Prathosam',
    poojaTimings: ['05:00 AM – 07:30 AM'],
  },
  {
    festival: 'Prathosam',
    thithiType: 'Valarpirai / Theipirai',
    festivalDate: '14/02/2026',
    festivalDetail: 'Mahaprathosam / Sani Maha Pradhosham',
    poojaTimings: ['05:30 AM – 06:30 AM', '04:30 PM – 06:00 PM', '04:30 PM – 06:30 PM'],
  },
  {
    festival: 'Prathosam',
    thithiType: 'Valarpirai',
    festivalDate: '01/03/2026',
    festivalDetail: 'Pradhosham',
    poojaTimings: ['04:30 AM – 06:00 AM', '04:30 PM – 06:00 PM'],
  },

  // ── Brahmotsavam ──
  {
    festival: 'Brahmotsavam',
    thithiType: 'Valarpirai',
    festivalDate: '17/01/2026',
    festivalDetail: 'Kodi Yetram / Dwajarohanam',
    poojaTimings: ['07:30 AM – 09:30 AM'],
  },
  {
    festival: 'Brahmotsavam',
    thithiType: 'Valarpirai',
    festivalDate: '18/01/2026',
    festivalDetail: 'Simha Vahanam',
    poojaTimings: ['07:30 AM – 09:30 AM'],
  },
  {
    festival: 'Brahmotsavam',
    thithiType: 'Valarpirai',
    festivalDate: '19/01/2026',
    festivalDetail: 'Hanumantha Vahanam',
    poojaTimings: ['07:30 AM – 09:30 AM'],
  },
  {
    festival: 'Brahmotsavam',
    thithiType: 'Valarpirai',
    festivalDate: '20/01/2026',
    festivalDetail: 'Surya Prabha Vahanam',
    poojaTimings: ['07:30 AM – 09:30 AM'],
  },
  {
    festival: 'Brahmotsavam',
    thithiType: 'Valarpirai',
    festivalDate: '21/01/2026',
    festivalDetail: 'Chandra Prabha Vahanam',
    poojaTimings: ['07:30 AM – 09:30 AM'],
  },
  {
    festival: 'Brahmotsavam',
    thithiType: 'Valarpirai',
    festivalDate: '22/01/2026',
    festivalDetail: 'Rishaba Vahanam',
    poojaTimings: ['07:30 AM – 09:30 AM'],
  },
  {
    festival: 'Brahmotsavam',
    thithiType: 'Valarpirai',
    festivalDate: '23/01/2026',
    festivalDetail: 'Ther / Car Festival',
    poojaTimings: ['07:30 AM – 09:30 AM'],
  },
  {
    festival: 'Brahmotsavam',
    thithiType: 'Valarpirai',
    festivalDate: '24/01/2026',
    festivalDetail: 'Theerthavari / Festival Closing',
    poojaTimings: ['07:30 AM – 09:30 AM'],
  },

  // ── Krittigai ──
  {
    festival: 'Krittigai',
    thithiType: 'Theipirai',
    festivalDate: '27/01/2026',
    festivalDetail: 'Krittigai',
    poojaTimings: ['07:00 AM – 08:00 AM'],
  },

  // ── Margazhi Festival ──
  {
    festival: 'Margazhi Festival',
    thithiType: 'Valarpirai',
    festivalDate: '21/12/2025',
    festivalDetail: 'Margazhi Utsavam',
    poojaTimings: ['07:00 AM – 08:00 AM'],
  },
  {
    festival: 'Margazhi Festival',
    thithiType: 'Theipirai',
    festivalDate: '30/12/2025',
    festivalDetail: 'Ekadasi',
    poojaTimings: ['06:00 AM – 08:00 AM'],
  },
  {
    festival: 'Margazhi Festival',
    thithiType: 'Theipirai',
    festivalDate: '10/01/2026',
    festivalDetail: 'Ashtami',
    poojaTimings: ['05:00 AM – 06:00 PM'],
  },

  // ── Navarathri ──
  {
    festival: 'Navarathri',
    thithiType: 'Valarpirai',
    festivalDate: '11/10/2026',
    festivalDetail: 'Navarathri Festival',
    poojaTimings: ['06:00 AM – 07:00 AM'],
  },
  {
    festival: 'Navarathri',
    thithiType: 'Valarpirai',
    festivalDate: '11/10/2026',
    festivalDetail: 'Kolu Pooja / Golu Utsavam',
    poojaTimings: ['06:30 AM – 07:30 AM'],
  },
  {
    festival: 'Navarathri',
    thithiType: 'Valarpirai',
    festivalDate: '11/10/2026',
    festivalDetail: 'Navarathri Special',
    poojaTimings: ['07:30 AM – 08:30 AM'],
  },
  {
    festival: 'Navarathri',
    thithiType: 'Valarpirai',
    festivalDate: '11/10/2026',
    festivalDetail: 'Navarathri Festival',
    poojaTimings: ['08:00 AM – 09:00 AM'],
  },

  // ── Aavani Festival ──
  {
    festival: 'Aavani Festival',
    thithiType: 'Valarpirai',
    festivalDate: '23/08/2026',
    festivalDetail: 'Aavani Thiruvizha',
    festivalPeriod: '23/08/2026 – 02/09/2026',
    poojaTimings: ['06:00 AM – 06:00 PM'],
  },

  // ── Thirukalyanam ──
  {
    festival: 'Thirukalyanam',
    thithiType: '',
    festivalDate: '31/01/2026',
    festivalDetail: 'Thirukalyanam',
    poojaTimings: ['12:00 AM – 03:00 PM'],
  },
  {
    festival: 'Thirukalyanam',
    thithiType: '',
    festivalDate: '01/04/2026',
    festivalDetail: 'Thirukalyanam',
    poojaTimings: ['09:00 AM – 10:00 AM'],
  },

  // ── Maha Sivarathiri ──
  {
    festival: 'Maha Sivarathiri',
    thithiType: 'Theipirai',
    festivalDate: '15/02/2026',
    festivalDetail: 'Maha Sivarathiri',
    festivalPeriod: '15/02/2026 – 16/02/2026',
    poojaTimings: ['04:00 AM – 11:00 AM'],
  },
  {
    festival: 'Maha Sivarathiri',
    thithiType: '',
    festivalDate: '16/02/2026',
    festivalDetail: 'Maha Sivarathiri',
    festivalPeriod: '15/02/2026 – 16/02/2026',
    poojaTimings: ['06:00 AM – 11:00 AM', '12:00 PM – 11:00 PM'],
  },
  {
    festival: 'Maha Sivarathiri',
    thithiType: 'Theipirai',
    festivalDate: '24/02/2026',
    festivalDetail: 'Maha Sivarathiri',
    poojaTimings: ['06:00 AM – 09:45 AM'],
  },
  {
    festival: 'Maha Sivarathiri',
    thithiType: 'Theipirai',
    festivalDate: '06/03/2027',
    festivalDetail: 'சிவராத்திரி / Maha Sivarathiri',
    poojaTimings: ['12:00 AM – 05:00 AM', '06:00 AM – 11:00 AM'],
  },

  // ── Aarudhra Dharisanam ──
  {
    festival: 'Aarudhra Dharisanam',
    thithiType: '',
    festivalDate: '24/12/2026',
    festivalDetail: 'Arudhra Festival / ஆருத்ரா அபிஷேகம்',
    festivalPeriod: '15/12/2026 – 24/12/2026',
    poojaTimings: ['12:00 AM – 10:00 AM', '06:00 AM – 09:00 AM', '09:00 AM – 11:00 AM'],
  },
];

/** Visual config for each festival group used in the schedule view. */
export const festivalGroupConfig = {
  Prathosam:            { icon: '🌙', color: 'bg-violet-50 border-violet-200', badge: 'bg-violet-100 text-violet-800' },
  Brahmotsavam:         { icon: '🎺', color: 'bg-orange-50 border-orange-200', badge: 'bg-orange-100 text-orange-800' },
  Krittigai:            { icon: '⭐', color: 'bg-amber-50 border-amber-200',   badge: 'bg-amber-100 text-amber-800'  },
  'Margazhi Festival':  { icon: '🌸', color: 'bg-blue-50 border-blue-200',     badge: 'bg-blue-100 text-blue-800'    },
  Navarathri:           { icon: '🪆', color: 'bg-pink-50 border-pink-200',     badge: 'bg-pink-100 text-pink-800'    },
  'Aavani Festival':    { icon: '🌿', color: 'bg-green-50 border-green-200',   badge: 'bg-green-100 text-green-800'  },
  Thirukalyanam:        { icon: '👑', color: 'bg-yellow-50 border-yellow-200', badge: 'bg-yellow-100 text-yellow-800'},
  'Maha Sivarathiri':   { icon: '🔱', color: 'bg-slate-50 border-slate-200',   badge: 'bg-slate-100 text-slate-800'  },
  'Aarudhra Dharisanam':{ icon: '💫', color: 'bg-teal-50 border-teal-200',     badge: 'bg-teal-100 text-teal-800'    },
};

/** Full history & background for the About section. */
export const history = {
  summary: `Commonly known as the Meenakshi Amman Temple, the Arulmigu Meenakshi Sundaraswarar 
  Temple is one of the most celebrated Hindu temples in India, situated at the heart of Madurai on 
  the southern bank of the Vaigai River. The presiding deities are Arulmigu Meenakshi — an aspect 
  of Goddess Parvati — and Arulmigu Sundareswarar — an aspect of Lord Shiva.`,
  details: [
    {
      heading: 'Ancient Origins & Legend',
      text: 'According to legend, the sacred Suyambulingam discovered by the King of Indira Logam at Kadambavanam was later enshrined by him in Madurai. The fact that the Lord is seen on Indra\'s vehicle in this temple is said to be proof of this. Many historical and literary evidences of the temple date back from early A.D. The Hindu Saint Thirugnanasambandar mentioned the temple in his songs going back to the early 7th century, referring to the Lord as "Alavai Annal."',
    },
    {
      heading: 'Destruction & Restoration',
      text: 'The temple was almost completely destroyed in 1310 following the invasion of the Islamic conqueror Malikkapur, which destroyed most of the ancient sculptures. The temple was restored to its pristine glory in the late 14th century when the Hindu kings returned to power in Madurai — marking a new beginning in the temple\'s history. King Thirumalai Naicker played an important role in constructing the new form of the temple.',
    },
    {
      heading: 'Architectural Grandeur',
      text: 'The reconstructed temple complex is encircled by 14 towering gopurams (gateway towers). The South Gopuram, at 160.9 feet, is the tallest, adorned with 1,511 mythological figures. Together the towers house thousands of intricately carved stucco sculptures spanning multiple centuries of Pandya and Nayak craftsmanship.',
    },
    {
      heading: 'Thousand Pillar Hall',
      text: 'The Ayirakkal Mandapam is a huge edifice located in the north-east corner of the Aadi Street, occupying 60,000 square feet. It houses 985 pillars, with each pillar individually carved. The central nave leads to the Sabhapathi shrine containing a large image of Nataraja dancing on a Kurma Peetam. The mandapam was built by Ariyanaatha Mudali, the great general and minister of four Nayak rulers of Madurai.',
    },
    {
      heading: 'Golden Lotus Tank (Porthamarai Kulam)',
      text: 'The sacred temple tank, known also as Adhi Theertham, Sivaganga, and Uthama Theertham, is believed to have been created by Lord Sivaperuman by thrusting his trident into the earth. It was here that the plank of Sangam appeared and established the greatness of the moral text Thirukkural. Uniquely, no fish or other life is found in this miraculous pond to this day.',
    },
    {
      heading: 'Temple Specialty — Thirukalyanam',
      text: 'The temple attracts over a million pilgrims during the annual 10-day Meenakshi Tirukalyanam (Chithirai festival), celebrated with festivity, fervour, and a ratha (chariot) procession during the Tamil month of Chittirai (April–May). This festival re-enacts the celestial wedding of Goddess Meenakshi and Lord Sundareswarar.',
    },
  ],
  literaryBackground: `The ancient Tamils divided Tamilagam into five natural regions (thinais): Kurinji (hills), Palai (dry waterless region), Mullai (wooded land), Marudam (river valleys), and Neydal (coastal tracts). The Pandya dynasty ruled the Madurai country, which covers all five thinais. Of these, the most important is Marudam — the river valley region. Madurai is situated in the heart of the Marudam region and was ideally suited to become both the cultural centre and capital of the ancient Pandya kingdom.`,
  quickFacts: [
    { label: 'Deity', value: 'Sri Meenakshi & Sri Sundareswarar' },
    { label: 'Location', value: 'Madurai, Tamil Nadu' },
    { label: 'Style', value: 'Dravidian Architecture' },
    { label: 'Gopurams', value: '14 Towers' },
    { label: 'Tallest Tower', value: '160.9 ft (South Gopuram)' },
    { label: 'Managed By', value: 'HR & CE Dept, Govt of Tamil Nadu' },
  ],
};

/**
 * Bookable Abhishekam (ritual bathing) services — from the official HR & CE ticketing portal.
 * Source: maduraimeenakshi.hrce.tn.gov.in/ticketing (tid=31962)
 */
export const abhishekams = [
  {
    type: 'Amman Swami Abhishekam',
    tamil: 'அருள்மிகு அம்மன் சுவாமி அபிஷேகம்',
    deity: 'Sri Meenakshi Amman & Sri Sundareswarar',
    price: '₹1,300',
    icon: '🪷',
    description: 'Sacred ritual bathing (abhishekam) performed for both the presiding deities — Sri Meenakshi Amman and Sri Sundareswarar.',
    availability: '11/03/2026 – 06/04/2026',
  },
  {
    type: 'Agni Veerabadrar Abhishekam',
    tamil: 'அருள்மிகு அக்னி வீரபத்ரர் அபிஷேகம்',
    deity: 'Sri Agni Veerabadrar',
    price: '₹1,000',
    icon: '🔥',
    description: 'Abhishekam performed for Sri Agni Veerabadrar, the fierce form of Lord Shiva.',
    availability: '10/03/2026 – 06/04/2026',
  },
  {
    type: 'Aghora Veerabadrar Abhishekam',
    tamil: 'அருள்மிகு அகோரவீரபத்ரர் அபிஷேகம்',
    deity: 'Sri Aghora Veerabadrar',
    price: '₹1,000',
    icon: '⚡',
    description: 'Abhishekam performed for Sri Aghora Veerabadrar, the auspicious and powerful manifestation.',
    availability: '11/03/2026 – 06/04/2026',
  },
  {
    type: 'Bhadrakali Amman Abhishekam',
    tamil: 'அருள்மிகு பத்ரகாளி அம்மன் அபிஷேகம்',
    deity: 'Sri Bhadrakali Amman',
    price: '₹1,000',
    icon: '🌺',
    description: 'Abhishekam for Sri Bhadrakali Amman, the protective goddess enshrined within the temple complex.',
    availability: '11/03/2026 – 06/04/2026',
  },
  {
    type: 'Durgai Amman Abhishekam',
    tamil: 'அருள்மிகு துர்கை அம்மன் அபிஷேகம்',
    deity: 'Sri Durgai Amman',
    price: '₹550',
    icon: '⚔️',
    description: 'Abhishekam for Sri Durgai Amman, the invincible goddess of strength and protection.',
    availability: '10/03/2026 – 06/04/2026',
  },
  {
    type: 'Saraswati Amman Abhishekam',
    tamil: 'அருள்மிகு சரஸ்வதி அம்மன் அபிஷேகம்',
    deity: 'Sri Saraswati Amman',
    price: '₹550',
    icon: '🎵',
    description: 'Abhishekam for Sri Saraswati Amman, the goddess of knowledge, arts, and wisdom.',
    availability: '11/03/2026 – 06/04/2026',
  },
  {
    type: 'Anukkai Vinayagar Abhishekam',
    tamil: 'அருள்மிகு அனுக்கை விநாயகர் அபிஷேகம்',
    deity: 'Sri Anukkai Vinayagar',
    price: '₹550',
    icon: '🐘',
    description: 'Abhishekam for Sri Anukkai Vinayagar, the auspicious elephant-headed deity of beginnings.',
    availability: '10/03/2026 – 06/04/2026',
  },
];

/** The 12 gopurams (gateway towers) of the temple complex. */
export const gopurams = [
  {
    name: 'South Gopuram',
    constructor: 'Siramalai Sevanthi Murthy Chetti',
    century: '14th Century (built 1559 AD)',
    tiers: 9,
    kalasam: 9,
    sculptures: 1511,
    height: '160.9 feet',
    base: '108 ft × 57 ft',
    lightningArrester: true,
    description: 'The tallest of all temple towers. 1,511 mythological figures adorn it.',
  },
  {
    name: 'West Tower',
    constructor: 'Sadayavarman Parakkrama Pandiyan',
    century: '13th Century (1315–1347 AD)',
    tiers: 9,
    kalasam: 9,
    sculptures: 1124,
    height: '154.6 feet',
    base: '101 ft × 63.6 ft',
    lightningArrester: true,
    description: 'Houses 1,124 sculptures of mythological importance.',
  },
  {
    name: 'East Tower',
    constructor: 'Maravarman Sundara Pandiyan',
    century: '12th Century (1216–1238 AD)',
    tiers: 9,
    kalasam: 9,
    sculptures: 1011,
    height: '153.3 feet',
    base: '111.3 ft × 65.6 ft',
    lightningArrester: true,
    description: 'Tower over the sanctum sanctorum. Also called Sundarapandian Tower. Bears 1,011 episodes from Puranams.',
  },
  {
    name: 'North Tower',
    constructor: 'Krishnappa Nayakkar',
    century: '15th Century (started 1564 AD)',
    tiers: 9,
    kalasam: 9,
    sculptures: 404,
    height: '152 feet',
    base: '111 ft × 66 ft',
    lightningArrester: true,
    description: 'Remained unfinished for years and was called "Mottai Gopuram" (tower without roof). The Nattukottai Chettiyars completed it in the late 19th century.',
  },
  {
    name: 'Amman Sannathi — 3-Tier East Gopuram',
    constructor: 'Ananda Thandava Nambi (Vembathur)',
    century: '12th Century (built 1227 AD)',
    tiers: 3,
    kalasam: 3,
    sculptures: 496,
    height: '40 feet',
    base: '27 ft × 20 ft',
    lightningArrester: false,
    description: 'Junction tower on the way to the Amman shrine from Kilikoondu Mandapam. Also known as Vembathurar Tower.',
  },
  {
    name: 'Amman Sannathi — 7-Tier East Gopuram',
    constructor: 'Kalathiyappa Mudaliar',
    century: '12th–13th Century (built 1569 AD)',
    tiers: 7,
    kalasam: 7,
    sculptures: 730,
    height: '117 feet',
    base: '78 ft × 38 ft',
    lightningArrester: false,
    description: 'Tallest of the Amman shrine towers. Located at the entrance from Meenakshi Nayak Hall. 730 sculptures give it its name.',
  },
  {
    name: 'Amman West Adi Veedhi — 5-Tier Gopuram',
    constructor: 'Veerathummasi',
    century: '15th–16th Century (built 1570 AD)',
    tiers: 5,
    kalasam: 5,
    sculptures: 228,
    height: '64 feet',
    base: '50 ft × 28 ft',
    lightningArrester: false,
    description: 'Gate was walled shut until 1963 for security reasons. Reopened during 1960–63 restoration with new doors installed.',
  },
  {
    name: 'Swamy Sannathi — North Adi Veedhi 5-Tier Gopuram',
    constructor: 'Sevvanthi Veelappa Chetti',
    century: '15th Century (built 1560 AD)',
    tiers: 5,
    kalasam: 5,
    sculptures: 184,
    height: '71 feet',
    base: '45 ft × 34 ft',
    lightningArrester: false,
    description: 'Named for its fish-carving logo. Located in the northern hemisphere of the complex.',
  },
  {
    name: 'Swamy Sannathi — East Adi Veedhi 5-Tier Gopuram',
    constructor: 'Vasuvappan',
    century: '13th Century (built 1372 AD)',
    tiers: 5,
    kalasam: 5,
    sculptures: 280,
    height: '66 feet',
    base: '42 ft × 33 ft',
    lightningArrester: false,
    description: 'Located directly opposite the Sundarapandian tower on the east side of the temple.',
  },
  {
    name: 'Mukurunia Vinayagar South Side — 5-Tier Gopuram',
    constructor: 'Siramalai Sevvanthi Moorthy Chettiar',
    century: '15th Century (built 1559 AD)',
    tiers: 5,
    kalasam: 5,
    sculptures: 112,
    height: '69 feet',
    base: '44 ft × 33 ft',
    lightningArrester: false,
    description: 'Connects the prakaram sections. Built by the same constructor as the South Gopuram.',
  },
  {
    name: 'Swamy Sannathi — West Adi Veedhi 5-Tier Gopuram',
    constructor: 'Mallappan',
    century: '13th Century (built 1374 AD)',
    tiers: 5,
    kalasam: 5,
    sculptures: 340,
    height: '72 feet',
    base: '48 ft × 31 ft',
    lightningArrester: false,
    description: 'Located on the west side of the second section of the Swami Temple. Houses 340 stucco sculptures.',
  },
  {
    name: 'Swamy Sannathi Entrance — 3-Tier Gopuram',
    constructor: 'Kulasekhara Pandyan',
    century: '11th Century (built 1168 AD)',
    tiers: 3,
    kalasam: 3,
    sculptures: 36,
    height: '41 feet',
    base: '31 ft × 18 ft',
    lightningArrester: false,
    description: 'Junction tower at the entrance to the first prakaram from Kambathadi Hall. One of the oldest gopurams in the complex.',
  },
];

/** Key architectural structures inside the temple complex. */
export const structures = [
  {
    name: 'Thousand Pillar Hall (Ayirakkal Mandapam)',
    icon: '🏛️',
    summary: 'The grandest part of the entire temple, located in the north-east corner of Aadi Street.',
    details: `Occupying 60,000 square feet with 985 individually carved pillars, the mandapam faces south. The central nave leads to the Sabhapathi shrine housing a large image of Nataraja dancing on a Kurma Peetam. Yalli pillars flank the shrine's approaches. The first and second rows of entrance pillars feature masterpiece carvings including Angam Vettina Shiva, Kannappar, Kankaalamurthi, Harischandran, Gandesar, Subrahmanyar, and others. Built by Ariyanaatha Mudali, the great general and minister of four Nayak rulers — his equestrian statue stands on one of the front pillars.`,
  },
  {
    name: 'First Prakara (Outer Enclosure)',
    icon: '🧱',
    summary: 'The outermost enclosure of the Swami Temple accessed via the South Gopuram or East entrance.',
    details: `To enter the Swami Temple from the South Gopuram or East entrance of the Ashta Sidhi Mandapam, one must cross the Kilikootu Mandapam and pass through the doorway at its northern end. Above this doorway stands the 5-storey Nadu Katty Gopuram — 69 feet high with a 44×33 ft base and 112 figures. It was built by Siramalai Sevvandhimoorthy Chettiar in 1559 and completely renovated during 1960–1963. The outer walls (Sundara Pandian Mathil) enclose an area of 420×301 feet while the inner walls (Kapali Mathil) measure 250×156 feet.`,
  },
  {
    name: 'Second Prakara (Inner Enclosure)',
    icon: '⛩️',
    summary: 'The inner enclosure of the Swami Temple, guarded by two 12-foot Dwarabalagar statues.',
    details: `At the entrance stand two Dwarabalagaras, each 12 feet tall and carved from a single stone, on a raised 4.5-foot platform. Above the entrance is the 3-storey Swami Gopuram — 41 feet high, 31×18 ft base, with 36 sculptured figures. Built by Kulasekhara Pandyan in 1168 AD and renovated in 1960–63. Beyond the entrance stand the Adhikara Nandi and Chamundi, and the Six Pillared Peedam where the Thiruvilayadal Puranam of Paranjothi Munivar was inaugurated. On two pillars facing this peedam are the images of sages Patanjali and Viyagra Pathar. The copper Dwarabalagaras in the mandapam were installed by Thirumalai Nayakkar.`,
  },
];

/** The two sacred tanks associated with the temple. */
export const tanks = [
  {
    name: 'Porthamarai Kulam (Golden Lotus Tank)',
    icon: '🪷',
    type: 'Inside Temple',
    area: '14,530 sq. ft.',
    depth: '0.75 Metre',
    compoundWall: true,
    handRailing: true,
    details: `Also known as Adhi Theertham, Sivaganga, and Uthama Theertham, this sacred pond lies within the temple complex. Legend says Lord Sivaperuman created this theertham by thrusting his trident (Soolam) into the earth at the request of Nandhi Devar and other deities. It was here that the plank of Sangam appeared and established the greatness of the Thirukkural. Uniquely, no fish or other life is found in this pond to this day, honouring boons granted by the Lord to a stork. It is also called Mukthi Theertham (grants heavenly abode), Gnana Theertham (confers prosperity), and Parama Theertham (most sacred).`,
    floatFestival: 'Punarpoosam / Thai',
    theerthavari: 'Punarpoosam / Thai',
  },
  {
    name: 'Vandiyur Mariamman Teppakulam',
    icon: '🌊',
    type: 'Outside Temple (5 km away)',
    area: '9,50,000 sq. ft.',
    depth: '12 Feet',
    lastRenovated: '08/05/2023',
    compoundWall: true,
    handRailing: true,
    details: `Located near the Vandiyur Mariamman Temple, about 5 km from Meenakshi Amman Temple, this is the largest temple tank in Tamil Nadu. Approximately 305 m long and 290 m wide, it was built in 1645 AD by King Thirumalai Nayak. The pit was formed when he excavated soil to make bricks for his palace. Connected to the Vaigai River through underground channels, it has 12 long granite staircases on all four sides. At the centre stands the Maiya Mandapam (Central Mandapam) with a Vinayakar temple and garden. The 7-foot Mukuruny Vinayakar idol in Meenakshi Amman Temple is believed to have been found during excavation of this pond.`,
    floatFestival: 'Thaipusam (full moon, Thai month)',
    theerthavari: null,
    specialty: 'Famous for the Float Festival (Thaipusam) — idols of Goddess Meenakshi and Lord Sundareshwarar float in colourful procession on a full moon night.',
  },
];
