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
    mapsUrl: "https://share.google/FrFwA8MDCbTPmOxkY",
  },
  contact: {
    phoneDisplay: "+91 95390 61358",
    phoneTel: "+919539061358",
  },
} as const;

export const images = {
  hero: [
    { src: "/images/hero-1.jpg", alt: "Wedding rings on soft light" },
    { src: "/images/hero-2.jpg", alt: "Floral wedding bouquet" },
    { src: "/images/hero-3.jpg", alt: "Elegant wedding celebration" },
  ],
} as const;

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#invitation", label: "Invite" },
  { href: "#couple", label: "Couple" },
  { href: "#place", label: "Place" },
  { href: "#contact", label: "Contact" },
] as const;
