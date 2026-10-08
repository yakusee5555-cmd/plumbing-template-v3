export const BUSINESS = {
  name: "FlowRight Plumbing",
  phone: "(602) 555-0143",
  phoneHref: "tel:+16025550143",
  address: "Serving Phoenix, AZ",
  hours: "Mon–Sat 7am–7pm",
  emergency: "24/7 emergency plumbing",
  rating: "5.0",
  reviewCount: "120+",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/* Stacked headline words (section 2) */
export const STACK_WORDS = ["Repair.", "Install.", "Unclog.", "Maintain."];

export interface FloatCard {
  img: string;
  title: string;
  meta: string;
  rotate: string;
  offset: string;
}

export const FLOAT_CARDS: FloatCard[] = [
  {
    img: "/img/plumbing/float1.jpg",
    title: "Drain cleaning",
    meta: "Clogs cleared · Same day",
    rotate: "rotate-[4deg]",
    offset: "md:translate-y-10",
  },
  {
    img: "/img/plumbing/float2.webp",
    title: "Water heaters",
    meta: "Tank & tankless · Sized right",
    rotate: "rotate-[-3deg]",
    offset: "md:-translate-y-6",
  },
  {
    img: "/img/plumbing/float3.jpg",
    title: "Leak repair",
    meta: "Found fast · Fixed right",
    rotate: "rotate-[2.5deg]",
    offset: "md:translate-y-16",
  },
];

/* Dark numbered list (section 3) */
export interface ListRow {
  img: string;
  title: string;
  desc: string;
}

export const LIST_ROWS: ListRow[] = [
  {
    img: "/img/plumbing/card1.jpg",
    title: "Drain cleaning",
    desc: "Clogs cleared fast, drains flowing like new",
  },
  {
    img: "/img/plumbing/card2.jpg",
    title: "Water heater install & repair",
    desc: "Tank and tankless, sized for your home",
  },
  {
    img: "/img/plumbing/card3.webp",
    title: "Leak detection & repair",
    desc: "Find it fast, fix it right",
  },
  {
    img: "/img/plumbing/card4.jpg",
    title: "Fixture installation",
    desc: "Faucets, toilets, showers installed clean",
  },
  {
    img: "/img/plumbing/card5.webp",
    title: "Sewer line services",
    desc: "Camera inspection, cleaning, and repair",
  },
  {
    img: "/img/plumbing/card6.jpg",
    title: "Emergency plumbing",
    desc: "24/7. Burst pipes, backups, no hot water",
  },
];

/* Glass cards on full-bleed image (section 4) */
export interface GlassCard {
  title: string;
  desc: string;
  pos: string;
}

export const GLASS_CARDS: GlassCard[] = [
  {
    title: "Free estimates",
    desc: "Upfront flat pricing, usually same-day.",
    pos: "left-[6%] top-[16%]",
  },
  {
    title: "Licensed & insured",
    desc: "Full coverage on every single job.",
    pos: "right-[8%] top-[24%]",
  },
  {
    title: "Maintenance plans",
    desc: "Two tune-ups a year, no surprises.",
    pos: "left-[10%] bottom-[20%]",
  },
  {
    title: "5.0 ★★★★★",
    desc: "120+ Google reviews from Phoenix neighbors.",
    pos: "right-[10%] bottom-[14%]",
  },
];

/* Real work gallery (section 5) — actual plumbing job photos */
export interface WorkShot {
  img: string;
  title: string;
  location: string;
}

export const WORK_SHOTS: WorkShot[] = [
  { img: "/img/plumbing/work1.jpg", title: "Under-sink rebuild, new supply lines", location: "Scottsdale, AZ" },
  { img: "/img/plumbing/work2.jpg", title: "Copper repipe rough-in", location: "Mesa, AZ" },
  { img: "/img/plumbing/work3.jpg", title: "Toilet replacement, sealed and tested", location: "Tempe, AZ" },
  { img: "/img/plumbing/work4.jpg", title: "Water heater service call", location: "Chandler, AZ" },
  { img: "/img/plumbing/work5.jpg", title: "Stocked truck, ready for anything", location: "Glendale, AZ" },
  { img: "/img/plumbing/work6.jpg", title: "Bathroom fixture upgrade", location: "Peoria, AZ" },
];

export interface Service {
  img: string;
  title: string;
  desc: string;
}

export const SERVICES: Service[] = [
  {
    img: "/img/plumbing/card1.jpg",
    title: "Drain cleaning",
    desc: "Clogs cleared fast, drains flowing like new.",
  },
  {
    img: "/img/plumbing/card2.jpg",
    title: "Water heater install & repair",
    desc: "Tank and tankless, sized for your home.",
  },
  {
    img: "/img/plumbing/card3.webp",
    title: "Leak detection & repair",
    desc: "Find it fast, fix it right, no drywall surprises.",
  },
  {
    img: "/img/plumbing/card4.jpg",
    title: "Fixture installation",
    desc: "Faucets, toilets, showers installed clean.",
  },
  {
    img: "/img/plumbing/card5.webp",
    title: "Sewer line services",
    desc: "Camera inspection, cleaning, and repair.",
  },
  {
    img: "/img/plumbing/card6.jpg",
    title: "Emergency plumbing",
    desc: "24/7. Burst pipes, backups, no hot water.",
  },
];

export interface Review {
  name: string;
  town: string;
  text: string;
}

export const REVIEWS: Review[] = [
  {
    name: "Jessica M.",
    town: "Scottsdale",
    text: "Water heater died on a Sunday morning and they had a new one installed by dinner. Flat price quoted upfront, not a dollar more. Unreal service.",
  },
  {
    name: "Robert H.",
    town: "Mesa",
    text: "Two other companies snaked my main line and it clogged again in a month. FlowRight ran the camera, showed me the roots, and jetted it clean. Six months, no issues.",
  },
  {
    name: "Dana W.",
    town: "Tempe",
    text: "Found a leak under my kitchen sink they could have upsold into a repipe. Instead they fixed the fitting for the quoted price and were gone in an hour. Honest people.",
  },
  {
    name: "Marcus L.",
    town: "Chandler",
    text: "They answer the phone at 11pm — an actual human. Burst supply line contained in 40 minutes. I'll never call anyone else.",
  },
];

export const TOWNS = [
  "Phoenix",
  "Scottsdale",
  "Mesa",
  "Tempe",
  "Chandler",
  "Glendale",
  "Peoria",
  "Surprise",
  "Gilbert",
  "Avondale",
  "Goodyear",
  "Fountain Hills",
];

export interface ServiceCard {
  img: string;
  from: string;
  title: string;
  desc: string;
}

export const SERVICE_CARDS: ServiceCard[] = [
  {
    img: "/img/plumbing/card1.jpg",
    from: "$99",
    title: "Drain cleaning",
    desc: "Kitchen, bath, and main lines cleared fast — with a 90-day clog-free warranty.",
  },
  {
    img: "/img/plumbing/card2.jpg",
    from: "$1,199",
    title: "Water heater install & repair",
    desc: "Tank and tankless units sized for your home, most replacements done same-day.",
  },
  {
    img: "/img/plumbing/card3.webp",
    from: "$149",
    title: "Leak detection & repair",
    desc: "Acoustic and thermal detection pinpoints leaks without tearing walls apart.",
  },
  {
    img: "/img/plumbing/card4.jpg",
    from: "$129",
    title: "Fixture installation",
    desc: "Faucets, toilets, showers, and disposals set level, sealed, and tested.",
  },
  {
    img: "/img/plumbing/card5.webp",
    from: "$299",
    title: "Sewer line services",
    desc: "Camera inspection with footage you keep, cleaning, and trenchless repair.",
  },
  {
    img: "/img/plumbing/card6.jpg",
    from: "$199",
    title: "Emergency plumbing",
    desc: "24/7 live answer. Burst pipes, backups, and no-hot-water calls handled fast.",
  },
];
