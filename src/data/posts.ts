export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  img: string;
  body: string[];
}

export const POSTS: Post[] = [
  {
    slug: "water-heater-repair-or-replace",
    title: "Water Heater: Repair It or Replace It?",
    excerpt:
      "The honest math we use on every call — when a repair is smart money and when it's throwing good money after bad.",
    date: "September 12, 2026",
    readTime: "3 min read",
    img: "/img/plumbing/post1.jpg",
    body: [
      "The number one question we get on water heater calls is 'can't you just fix it?' Sometimes yes. Here's how we decide, and it's the same math we'd use in our own homes.",
      "Under 8 years old with a single failed part — a thermostat, an element, a pilot assembly — repair almost always wins. The tank itself has years left, and the fix is a few hundred dollars versus a full replacement.",
      "Over 10 years old, or any sign of tank failure — rusty water, water pooling at the base, rumbling and popping sounds — replacement is the smart money. A leaking tank can't be patched reliably, and a 12-year-old heater is living on borrowed time even if today's repair holds.",
      "The gray zone is 8–10 years. That's where we look at repair cost versus replacement cost. Our rule of thumb: if the repair is more than a third of a new unit, replace it. You'll get the efficiency gains and a fresh 6-year warranty instead of nursing an old tank along.",
      "Tank or tankless on replacement? Tankless costs more upfront but lasts roughly twice as long and cuts energy use. For most Phoenix households with hard water, we recommend a tankless with a scale filter — or a tank with annual flushing on our maintenance plan.",
      "When in doubt, have us look. The assessment is free, and we'd rather tell you 'just needs an element' than sell you a heater you don't need yet.",
    ],
  },
  {
    slug: "signs-sewer-line-problem",
    title: "7 Signs Your Sewer Line Is in Trouble",
    excerpt:
      "Sewer problems announce themselves badly. Here's what to watch for before a backup makes the decision for you.",
    date: "August 28, 2026",
    readTime: "4 min read",
    img: "/img/plumbing/post2.jpg",
    body: [
      "Nobody thinks about their sewer line until it's thinking about them. These are the warning signs we see on every camera inspection that turned up real damage.",
      "1. Multiple drains backing up at once. One slow sink is a clog. The tub, toilet, and shower all misbehaving together means the problem is downstream — in the main line.",
      "2. Gurgling sounds. Toilets or drains that gurgle when you run water elsewhere are gasping for air past a partial blockage.",
      "3. Sewage odors in the yard or house. A healthy line is sealed. Smells mean a break or a dried-out trap — and breaks don't fix themselves.",
      "4. Lush green patches in the yard. Sewage is fertilizer. A suspiciously thriving strip of grass over the line's path is a classic tell.",
      "5. Slow drains that keep coming back. If snaking clears it for a month and it returns, you're treating a symptom. Roots or a collapsed section need the camera, not another snake.",
      "6. Foundation cracks or sinkholes near the line. Water escaping underground erodes soil. Small settlement now becomes structural later.",
      "7. Your home is 30+ years old with original clay or cast iron pipe. Those materials have a lifespan, and in Phoenix soil they've often hit it. A preventive camera inspection is cheap insurance.",
      "One or two of these? Get a camera inspection — many of these lines can be jetted or lined instead of dug up. Waiting for a full backup is the most expensive option on the list.",
    ],
  },
  {
    slug: "prevent-frozen-burst-pipes",
    title: "Stop Pipe Leaks Before They Start: A Homeowner Checklist",
    excerpt:
      "Most emergency calls we run are preventable. Fifteen minutes twice a year beats a 2am flood.",
    date: "August 8, 2026",
    readTime: "3 min read",
    img: "/img/plumbing/post3.jpg",
    body: [
      "Ask any plumber what their most common emergency call is, and it's some version of 'water where it shouldn't be.' Most of those floods were preventable. Here's the checklist we give our own neighbors.",
      "Know your main shutoff. Right now, today, go find it and make sure it turns. In an emergency, the minutes you spend hunting for it are the minutes water spends destroying drywall.",
      "Look under every sink twice a year. Slow supply-line drips and corroded valves announce themselves as green crust, damp cabinets, or musty smells long before they let go.",
      "Replace rubber washing machine hoses. They burst — it's not a question of if. Braided stainless hoses cost a few dollars and eliminate the single most common indoor flood we see.",
      "Flush your water heater annually. Phoenix hard water bakes sediment into every tank. Annual flushing doubles heater life and keeps efficiency up. It's included in our HomeCare plan, which is the point.",
      "Watch your water bill. A sudden spike with no change in habits is a leak until proven otherwise. Slab leaks in particular run silently for months.",
      "Don't ignore small drips. A faucet dripping once a second wastes thousands of gallons a year, and a 'small' supply leak inside a wall is never small for long.",
      "Fifteen minutes in spring and fall. That's the whole program — and it's the difference between a maintenance visit and an emergency call.",
    ],
  },
];
