export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  img: string;
  description: string[];
  included: string[];
  steps: { title: string; desc: string }[];
  pricingHint: string;
  faqs: { q: string; a: string }[];
  meta: string;
}

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "drain-cleaning",
    title: "Drain Cleaning",
    tagline: "Clogs cleared fast.",
    img: "/img/plumbing/card1.jpg",
    description: [
      "Slow drains turn into stopped drains turn into water where it should not be. We clear kitchen sinks, bathroom drains, tubs, and main lines with pro-grade augers and hydro jetting — not a bottle of chemicals that eats your pipes.",
      "Every clearing includes a flow test before we leave, so you know it is actually fixed and not just poked through.",
    ],
    included: [
      "Kitchen, bath & laundry drains",
      "Main line clearing",
      "Hydro jetting for tough buildup",
      "Camera check on repeat clogs",
      "90-day clog-free warranty",
      "Upfront flat pricing",
    ],
    steps: [
      { title: "Diagnose",
        desc: "We find where the clog is and what is causing it.", },
      { title: "Clear",
        desc: "Auger or hydro jet, matched to the blockage.", },
      { title: "Verify",
        desc: "Flow test and camera check on stubborn lines.", },
      { title: "Prevent",
        desc: "We tell you what caused it so it does not come back.", },
    ],
    pricingHint: "Drain clearing from $99 with upfront flat pricing. Free estimates on bigger line work.",
    faqs: [
      {
        q: "How much does drain cleaning cost?",
        a: "Most single-drain clears run $99–$189 flat. Main lines depend on access and length — we quote free before any big work.",
      },
      {
        q: "Do you guarantee the clog won't come back?",
        a: "Yes. Every clearing carries a 90-day clog-free warranty on that drain.",
      },
      {
        q: "Should I try chemical drain cleaner first?",
        a: "We recommend against it. It rarely clears the real blockage and it can damage pipes and seals.",
      },
    ],
    meta: "Drain cleaning in Phoenix, AZ. Clogs cleared fast with 90-day warranty. Free estimates.",
  },
  {
    slug: "water-heater-install-repair",
    title: "Water Heater Install & Repair",
    tagline: "Hot water, guaranteed.",
    img: "/img/plumbing/card2.jpg",
    description: [
      "Cold showers and rusty water mean your heater is telling you something. We repair all major brands and install tank and tankless units sized for your home's actual hot water demand — not a guess.",
      "Most replacements are done same-day. We haul the old unit away, set the new one to code, and you have hot water by dinner.",
    ],
    included: [
      "Tank & tankless installs",
      "All major brands serviced",
      "Same-day replacement",
      "Haul-away of old unit",
      "Code-compliant hookup & venting",
      "6-year warranty on new tanks",
    ],
    steps: [
      { title: "Assess",
        desc: "We check age, capacity, and whether repair or replacement makes sense.", },
      { title: "Size",
        desc: "Tank or tankless matched to your household's hot water use.", },
      { title: "Install",
        desc: "Old unit out, new unit in, everything to code.", },
      { title: "Test",
        desc: "Full heat-up cycle and safety check before we leave.", },
    ],
    pricingHint: "New 50-gallon tank installed from $1,199 including haul-away. Repairs quoted flat before work starts.",
    faqs: [
      {
        q: "Repair or replace my water heater?",
        a: "Under 8 years old with a minor part failure, repair usually wins. Over 10 years or a leaking tank, replacement is the smart money.",
      },
      {
        q: "How long does installation take?",
        a: "Most tank swaps take 2–3 hours. Tankless conversions take a full day.",
      },
      {
        q: "Tank or tankless?",
        a: "Tankless saves space and energy for most households, but costs more upfront. We size both options and let you decide.",
      },
    ],
    meta: "Water heater install & repair in Phoenix, AZ. Tank and tankless, same-day replacement. Free estimates.",
  },
  {
    slug: "leak-detection-repair",
    title: "Leak Detection & Repair",
    tagline: "Find it fast, fix it right.",
    img: "/img/plumbing/card3.webp",
    description: [
      "A mystery water bill or a damp spot that was not there last week — small leaks do big damage quietly. We use acoustic and thermal detection to pinpoint leaks without tearing your walls apart looking.",
      "Once found, we fix it right: proper fittings, pressure-tested, and the area left clean. No drywall surprises on your invoice.",
    ],
    included: [
      "Acoustic & thermal detection",
      "Slab leak location",
      "Pipe repair & repiping",
      "Fixture & supply line leaks",
      "Pressure testing after repair",
      "Upfront flat pricing",
    ],
    steps: [
      { title: "Detect",
        desc: "Acoustic and thermal gear pinpoints the leak's location.", },
      { title: "Expose",
        desc: "Minimal opening — we cut only what we need.", },
      { title: "Repair",
        desc: "Proper fittings and pipe, pressure-tested.", },
      { title: "Restore",
        desc: "Area cleaned and ready for patch-up.", },
    ],
    pricingHint: "Leak detection from $149. Repairs quoted flat once we know what we're dealing with.",
    faqs: [
      {
        q: "How do I know I have a leak?",
        a: "Unexplained water bill spikes, damp spots, musty smells, or the sound of running water when nothing is on.",
      },
      {
        q: "Will you have to tear up my walls?",
        a: "We open the smallest area possible. Detection gear means we cut once, in the right place.",
      },
      {
        q: "Do you handle slab leaks?",
        a: "Yes. We locate slab leaks precisely and give you repair vs. reroute options with honest pricing.",
      },
    ],
    meta: "Leak detection & repair in Phoenix, AZ. Pinpoint accuracy, minimal damage. Free estimates.",
  },
  {
    slug: "fixture-installation",
    title: "Fixture Installation",
    tagline: "Installed clean, working perfect.",
    img: "/img/plumbing/card4.jpg",
    description: [
      "New faucet, toilet, or shower valve — fixtures are where cheap installs show. We set every fixture level, sealed, and tested, with supply lines and shutoffs done right so the next repair is easy, not a nightmare.",
      "Bring your own fixture or have us supply it. Either way it gets installed like it is our own house.",
    ],
    included: [
      "Faucets & shower valves",
      "Toilet install & replacement",
      "Garbage disposals",
      "New shutoff valves",
      "Supply line upgrades",
      "Caulked, sealed & tested",
    ],
    steps: [
      { title: "Shut off",
        desc: "Water off, area protected, old fixture out.", },
      { title: "Set",
        desc: "New fixture leveled and secured.", },
      { title: "Connect",
        desc: "Supply lines, valves, and seals done right.", },
      { title: "Test",
        desc: "Full pressure test, no drips, no wobbles.", },
    ],
    pricingHint: "Fixture installs from $129 plus the fixture. Whole-bathroom fixture packages quoted free.",
    faqs: [
      {
        q: "Can I buy my own fixture?",
        a: "Absolutely. We install customer-supplied fixtures all the time — just keep the receipt in case of a manufacturer defect.",
      },
      {
        q: "How long does a toilet install take?",
        a: "About an hour for a straightforward swap. We test the flush and check for leaks before we go.",
      },
      {
        q: "Do you install garbage disposals?",
        a: "Yes, including the electrical and dishwasher hookup.",
      },
    ],
    meta: "Fixture installation in Phoenix, AZ. Faucets, toilets, showers installed clean. Free estimates.",
  },
  {
    slug: "sewer-line-services",
    title: "Sewer Line Services",
    tagline: "Camera to curb, handled.",
    img: "/img/plumbing/card5.webp",
    description: [
      "Sewer problems announce themselves badly: backups, gurgling, sewage smells. We run a camera down the line so you see exactly what is wrong — roots, breaks, bellies — before anyone talks about digging.",
      "From trenchless repair to full replacement, you get the footage, the options, and flat pricing. No scare tactics.",
    ],
    included: [
      "Camera inspection with footage",
      "Hydro jetting & descaling",
      "Root intrusion removal",
      "Trenchless pipe repair",
      "Full line replacement",
      "City permit handling",
    ],
    steps: [
      { title: "Camera",
        desc: "We scope the line and show you the footage.", },
      { title: "Options",
        desc: "Cleaning, trenchless repair, or replacement — priced flat.", },
      { title: "Work",
        desc: "Scheduled fast, with permits handled.", },
      { title: "Verify",
        desc: "Post-work camera run proves the line is clear.", },
    ],
    pricingHint: "Camera inspections from $299. Cleaning and repairs quoted flat after we see the footage.",
    faqs: [
      {
        q: "How do I know if my sewer line is the problem?",
        a: "Multiple drains backing up at once, gurgling toilets, or sewage odors in the yard are classic signs.",
      },
      {
        q: "What is trenchless repair?",
        a: "We fix the pipe from the inside with a liner — no trench across your yard. Not every line qualifies, and we'll tell you straight.",
      },
      {
        q: "Do I get to see the camera footage?",
        a: "Yes. You watch it with us and keep a copy. No mysteries.",
      },
    ],
    meta: "Sewer line services in Phoenix, AZ. Camera inspection, cleaning, trenchless repair. Free estimates.",
  },
  {
    slug: "emergency-plumbing",
    title: "Emergency Plumbing",
    tagline: "24/7. We answer.",
    img: "/img/plumbing/card6.jpg",
    description: [
      "Burst pipe at 2am, sewage backing into the tub, no hot water with guests coming — plumbing does not wait for business hours. Our emergency line is answered around the clock by a real person, and a tech rolls fast.",
      "We stabilize first: water stopped, damage contained. Then we fix it right and price it flat, even at midnight.",
    ],
    included: [
      "24/7 live answer",
      "Burst pipe repair",
      "Sewage backup response",
      "Water shutoff & containment",
      "No-hot-water calls",
      "Flat emergency pricing",
    ],
    steps: [
      { title: "Call",
        desc: "A real person answers, 24/7. We talk you through shutting off water if needed.", },
      { title: "Dispatch",
        desc: "Nearest tech rolls with a stocked truck.", },
      { title: "Stabilize",
        desc: "Stop the water, contain the damage.", },
      { title: "Repair",
        desc: "Fixed right and priced flat — no midnight surprises.", },
    ],
    pricingHint: "Emergency calls from $199. Flat price confirmed before work starts, day or night.",
    faqs: [
      {
        q: "Do you really answer at 3am?",
        a: "Yes. The emergency line is staffed 24/7 by a real person, not a voicemail.",
      },
      {
        q: "What should I do while I wait?",
        a: "Shut off the main water valve if you can. We'll walk you through it on the call.",
      },
      {
        q: "Is emergency service more expensive?",
        a: "There is an emergency dispatch fee, but the repair itself is flat-priced like any other job.",
      },
    ],
    meta: "24/7 emergency plumber in Phoenix, AZ. Burst pipes, backups, no hot water. Call now.",
  },
];
