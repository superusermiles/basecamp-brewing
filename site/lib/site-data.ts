export type NavItem = {
  label: string;
  href: string;
};

export type Beer = {
  name: string;
  style: string;
  abv: string;
  notes: string;
  moment: string;
  availability?: string;
};

export type EventItem = {
  title: string;
  date: string;
  time: string;
  description: string;
  category?: string;
};

export const siteUrl = "https://basecamp-brewing.vercel.app";
export const lastModified = "2026-03-28T00:00:00.000Z";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Our Beers", href: "/our-beers/" },
  { label: "The Taproom", href: "/the-taproom/" },
  { label: "Events", href: "/events/" },
  { label: "Contact", href: "/contact/" },
];

export const hours = [
  { label: "Mon–Thu", value: "12pm–9pm" },
  { label: "Fri", value: "12pm–10pm" },
  { label: "Sat", value: "11am–10pm" },
  { label: "Sun", value: "11am–8pm" },
];

export const footerData = {
  brandLine: "Basecamp Brewing Co.",
  closingLine: "Small-batch alpine beer. Poured at the edge of adventure.",
  address: "14 Shotover View Road, Queenstown 9300, New Zealand",
  phone: "+64 3 441 0284",
  email: "hello@basecampbrewing.co.nz",
  socialHandle: "@basecampbrewingco",
  hoursLabel: "Taproom Hours",
  newsletterLabel: "Get release drops, weekend music, and tap updates.",
  legal: "© 2026 Basecamp Brewing Co. All rights reserved.",
};

export const featuredBeers: Beer[] = [
  {
    name: "Trail Marker Lager",
    style: "Lager",
    abv: "4.9% ABV",
    notes: "Crisp malt, alpine herb snap, dry finish",
    moment: "Best after a lake loop",
    availability: "Year-round",
  },
  {
    name: "Ridgeline Pale Ale",
    style: "Pale Ale",
    abv: "5.4% ABV",
    notes: "Mandarin zest, biscuit malt, light pine",
    moment: "Built for easy second rounds",
    availability: "Core pour",
  },
  {
    name: "Summit Drop IPA",
    style: "IPA",
    abv: "6.7% ABV",
    notes: "Passionfruit, grapefruit peel, resin lift",
    moment: "For hop drinkers who still want balance",
    availability: "Core pour",
  },
  {
    name: "Night Track Stout",
    style: "Stout",
    abv: "5.8% ABV",
    notes: "Dark cocoa, roast, velvet texture",
    moment: "A colder-night taproom favorite",
    availability: "Seasonal return",
  },
  {
    name: "Alpenglow Red",
    style: "Seasonal",
    abv: "5.9% ABV",
    notes: "Toffee edge, orange peel, warming finish",
    moment: "Made for shoulder-season evenings",
    availability: "Limited release",
  },
];

export const beerLineup: Beer[] = [
  { name: "Trail Marker Lager", style: "Lager", abv: "4.9%", notes: "Crisp malt, alpine herb snap, dry finish", moment: "Post-hike reset" },
  { name: "Ridgeline Pale Ale", style: "Pale Ale", abv: "5.4%", notes: "Mandarin zest, biscuit malt, light pine", moment: "Easy first pour" },
  { name: "Summit Drop IPA", style: "IPA", abv: "6.7%", notes: "Passionfruit, grapefruit peel, resin lift", moment: "Hop-forward without overload" },
  { name: "Night Track Stout", style: "Stout", abv: "5.8%", notes: "Dark cocoa, roast, velvet texture", moment: "Cold-night comfort" },
  { name: "Lake Edge Lager", style: "Lager", abv: "4.6%", notes: "Light cracker malt, lemon zest, quick finish", moment: "Patio pint" },
  { name: "Switchback Pale", style: "Pale Ale", abv: "5.1%", notes: "Stone fruit aroma, soft bitterness, dry close", moment: "Long-table sharer" },
  { name: "Peakline IPA", style: "IPA", abv: "7.1%", notes: "Pine, orange marmalade, clean bitter backbone", moment: "For the hop regulars" },
  { name: "First Frost Stout", style: "Stout", abv: "6.2%", notes: "Espresso, bittersweet chocolate, subtle smoke", moment: "Late set, last round" },
  { name: "Alpenglow Red", style: "Seasonal", abv: "5.9%", notes: "Toffee edge, orange peel, warming finish", moment: "Autumn release" },
  { name: "Southern Pass Pils", style: "Seasonal", abv: "5.0%", notes: "Noble hop spice, bright body, clean snap", moment: "Summer seasonal" },
];

export const homeEvents: EventItem[] = [
  { title: "Friday Fireside Sessions", date: "Friday", time: "7:30pm", description: "Acoustic sets, fuller tap list, and the sunset crowd rolling in." },
  { title: "Seasonal Release Night", date: "Saturday", time: "5pm", description: "First pours of the latest small-batch release with brewer notes." },
  { title: "Trail Club Meet-Up", date: "Wednesday", time: "6pm", description: "A relaxed post-ride gathering with specials for the crew." },
];

export const upcomingEvents: EventItem[] = [
  { title: "Trail Club Meet-Up", date: "Wednesday, 15 April", time: "6pm", description: "Post-ride catch-up for runners, riders, and hikers.", category: "Community" },
  { title: "Friday Fireside Sessions", date: "Friday, 17 April", time: "7:30pm", description: "Acoustic live music with the full tap list running.", category: "Live Music" },
  { title: "Southern Alps Sessions", date: "Saturday, 18 April", time: "7pm", description: "Featured weekend live set with guest local artist.", category: "Live Music" },
  { title: "Seasonal Release Night", date: "Thursday, 23 April", time: "6:30pm", description: "First pours of the new seasonal with brewer walk-through.", category: "Release" },
  { title: "Long Table Sunday", date: "Sunday, 26 April", time: "4pm", description: "Shared plates, mellow playlist, slower end-of-week energy.", category: "Taproom" },
  { title: "Brewery Birthday Social", date: "Friday, 1 May", time: "6pm", description: "Anniversary pours, throwback favorites, and special merch.", category: "Special" },
];

export const primaryKeywords = [
  "Queenstown craft brewery",
  "Queenstown brewery",
  "Queenstown taproom",
  "craft beer Queenstown",
  "brewery Queenstown NZ",
  "small-batch beer Queenstown",
  "Queenstown beer tasting",
  "live music Queenstown brewery",
];

export const longTailKeywords = [
  "small-batch brewery in Queenstown",
  "taproom with mountain views in Queenstown",
  "craft beer and food in Queenstown",
  "Queenstown brewery with live music",
  "best taproom in Queenstown NZ",
  "Queenstown brewery near me",
  "brewery with seasonal beer in Queenstown",
  "where to drink craft beer in Queenstown",
];

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["FoodEstablishment", "Brewery"],
  "@id": `${siteUrl}/#business`,
  name: "Basecamp Brewing Co.",
  description:
    "Basecamp Brewing Co. is a Queenstown craft brewery and taproom pouring small-batch alpine beer with hearty food, mountain views, and weekend live music.",
  image: [
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1600&h=1100&fit=crop",
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&h=1400&fit=crop",
  ],
  url: siteUrl,
  telephone: "+64 3 441 0284",
  email: "hello@basecampbrewing.co.nz",
  priceRange: "$$",
  servesCuisine: ["Craft Beer", "Taproom Fare"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "14 Shotover View Road",
    addressLocality: "Queenstown",
    addressRegion: "Otago",
    postalCode: "9300",
    addressCountry: "NZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -45.0212,
    longitude: 168.739,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "12:00", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "12:00", closes: "22:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "11:00", closes: "22:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "11:00", closes: "20:00" },
  ],
  areaServed: [
    { "@type": "City", name: "Queenstown" },
    { "@type": "AdministrativeArea", name: "Otago" },
    { "@type": "Place", name: "Southern Alps" },
  ],
  sameAs: ["https://instagram.com/basecampbrewingco"],
};

const monthMap: Record<string, string> = {
  April: "04",
  May: "05",
};

function eventStartDate(date: string, time: string) {
  const day = date.match(/\d+/)?.[0]?.padStart(2, "0") ?? "15";
  const monthName = Object.keys(monthMap).find((month) => date.includes(month)) ?? "April";
  const month = monthMap[monthName];
  const isPm = time.includes("pm");
  const [rawHour, rawMinute = "00"] = time.replace("am", "").replace("pm", "").split(":");
  let hour = Number(rawHour);

  if (isPm && hour < 12) hour += 12;
  if (!isPm && hour === 12) hour = 0;

  return `2026-${month}-${day}T${String(hour).padStart(2, "0")}:${rawMinute}:00+12:00`;
}

export const eventSchema = upcomingEvents.map((event) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: event.title,
  startDate: eventStartDate(event.date, event.time),
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Basecamp Brewing Co.",
    address: footerData.address,
  },
  image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop",
  description: event.description,
  organizer: {
    "@type": "Organization",
    name: "Basecamp Brewing Co.",
    url: siteUrl,
  },
}));
