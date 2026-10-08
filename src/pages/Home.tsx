import Hero from "../components/Hero";
import { Contact, Reviews } from "../components/Sections";
import { FullBleed, Pricing, Stacked, Work } from "../components/Showcase";
import { Marquee } from "../components/MotionBits";
import { RouteFX } from "../components/PageBits";

const MARQUEE_ITEMS = [
  "Drain Cleaning",
  "Water Heaters",
  "Leak Repair",
  "Sewer Lines",
  "Emergency 24/7",
  "Fixtures",
  "Phoenix",
  "Scottsdale",
  "Mesa",
  "Tempe",
  "Free Estimates",
];

export default function Home() {
  return (
    <>
      <RouteFX
        title="FlowRight Plumbing | Plumbers in Phoenix, AZ"
        description="FlowRight Plumbing — drain cleaning, water heaters, leak repair & 24/7 emergency plumbing across Phoenix, AZ. Free estimates."
      />
      <Hero />
      <Marquee items={MARQUEE_ITEMS} />
      <Stacked />
      <FullBleed />
      <Work />
      <Pricing />
      <Reviews />
      <Contact />
    </>
  );
}
