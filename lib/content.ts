export const wedding = {
  couple: {
    groomsName: "Libin",
    groomsFullName: "Libin Benny",
    bridesName: "Sneha",
    bridesFullName: "Sneha Johnson",
    monogram: "L S",
  },
  groom: {
    role: "The Groom",
    name: "Libin Benny",
    firstName: "Libin",
    lastName: "Benny",
    father: "KU Benny",
    mother: "Leena Benny",
    house: "Kochupurackal House",
    place: "Edapookulam",
    district: "Idukki",
  },
  bride: {
    role: "The Bride",
    name: "Sneha Johnson",
    firstName: "Sneha",
    lastName: "Johnson",
    father: "KO Johnson",
    mother: "Mini Johnson",
    house: "Kaniyampuram House",
    place: "Alakode",
    district: "Kannur",
  },
  location: {
    name: "Marian Center",
    mapsUrl: "https://maps.app.goo.gl/6k7cHdM6PRZCfGZz5?g_st=ic",
    mapsEmbedUrl:
      "https://maps.google.com/maps?q=Marian+Center,+Marykulam,+Kerala+685507&z=15&output=embed",
  },
  event: {
    /** ISO 8601 ceremony date & time in India Standard Time (UTC+05:30). */
    dateTime: "2026-09-26T11:30:00+05:30",
    displayDate: "Saturday, 26 September 2026",
    displayTime: "11:30 AM",
  },
  contact: {
    phoneDisplay: "+91 95390 61358",
    phoneTel: "+919539061358",
  },
} as const;

const photos = [
  {
    src: "/images/dsc01950.jpg",
    alt: "Libin and Sneha — a tender moment together",
    caption: "A quiet moment",
  },
  {
    src: "/images/dsc02172.jpg",
    alt: "Libin and Sneha — smiling among the trees",
    caption: "Together in the woods",
  },
  {
    src: "/images/dsc02140.jpg",
    alt: "Libin and Sneha — walking hand in hand",
    caption: "Walking on together",
  },
  {
    src: "/images/wa207301.jpg",
    alt: "Libin and Sneha — walking beneath the hills",
    caption: "Beneath the hills",
  },
  {
    src: "/images/wa20731.jpg",
    alt: "Libin and Sneha — held close among the trees",
    caption: "Held close",
  },
] as const;

export const images = {
  hero: photos.map(({ src, alt }) => ({ src, alt })),
  gallery: photos.slice(1),
  familyMeeting: [
    {
      src: "/images/family-meeting-1.jpg",
      alt: "Libin and Sneha with their families at their first meeting",
      caption: "A warm welcome",
    },
    {
      src: "/images/family-meeting-2.jpg",
      alt: "Libin and Sneha standing together as their families came together",
      caption: "Two families, one joy",
    },
  ],
} as const;

export const familyMeeting = {
  label: "A cherished memory",
  heading: "When our families first came together",
  subheading:
    "Before the vows and the celebration, our families met — sharing smiles, blessings, and the quiet joy of two homes finding one another.",
} as const;

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#invitation", label: "Invite" },
  { href: "#couple", label: "Couple" },
  { href: "#place", label: "Place" },
  { href: "#contact", label: "Contact" },
] as const;
