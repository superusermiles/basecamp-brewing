# Basecamp Brewing Co. — Development Handoff

## Tech Setup
- **Framework:** Next.js 14 App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel project `basecamp-brewing`
- **SEO:** Metadata API, canonical URLs, `robots.ts`, `sitemap.ts`, Open Graph tags, LocalBusiness/Restaurant-style JSON-LD adapted for brewery/taproom

### Google Fonts
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Source+Serif+4:wght@400;600&display=swap" rel="stylesheet">
```

### Tailwind Tokens
```ts
// tailwind.config.ts
extend: {
  colors: {
    primary: '#2D5016',
    secondary: '#B87333',
    accent: '#6E8B3D',
    background: '#FFF8E7',
    text: '#1A1A1A',
    muted: '#D8CDB8',
  },
  fontFamily: {
    heading: ['Oswald', 'sans-serif'],
    body: ['"Source Serif 4"', 'serif'],
  },
  borderRadius: {
    sm: '6px',
    md: '12px',
    lg: '20px',
    xl: '32px',
  },
  boxShadow: {
    soft: '0 8px 24px rgba(26,26,26,0.08)',
    medium: '0 16px 40px rgba(26,26,26,0.14)',
    hard: '0 24px 64px rgba(26,26,26,0.22)',
  },
  maxWidth: {
    content: '72rem',
    prose: '48rem',
  },
}
```

### Additional npm Packages
- `clsx` or `classnames` for conditional class composition
- `lucide-react` for lightweight icons
- `next-seo` optional if team prefers helper utilities, though Next metadata API is enough
- `framer-motion` optional for scroll reveals and page fades

## Component Breakdown

### 1. `SiteHeader`
- **Purpose:** Main navigation and top-level CTA
- **Props:** `currentPath?: string`
- **Layout:** Transparent absolute header over hero; becomes solid cream sticky bar on scroll
- **Responsive:** Desktop horizontal nav; mobile uses slide-down or drawer menu with stacked links

### 2. `SiteFooter`
- **Purpose:** Persistent footer with contact info, nav, social, and legal
- **Props:** none
- **Layout:** Dark band, 3 columns desktop, stacked mobile
- **Responsive:** Columns collapse to single stack under `md`

### 3. `PageHero`
- **Purpose:** Reusable hero for inner pages
- **Props:** `eyebrow`, `title`, `body`, `imageUrl`, `imageAlt`, `variant?: 'banner' | 'split' | 'dark'`
- **Layout:** Supports wide banner or split media/text
- **Responsive:** Split layouts stack on mobile

### 4. `HomeHero`
- **Purpose:** Home-specific cinematic hero
- **Props:** `title`, `body`, `primaryCta`, `secondaryCta`, `statusCard`
- **Layout:** Full-bleed image with dark gradient, text left, floating card right/below
- **Responsive:** Floating card drops below content on mobile

### 5. `BeerCard`
- **Purpose:** Display a beer profile in grid/list formats
- **Props:** `name`, `style`, `abv`, `tastingNotes`, `availability`, `imageUrl?`
- **Layout:** Parchment card with copper top border and structured metadata
- **Responsive:** Full-width on mobile, equal height in desktop grid

### 6. `BeerFeature`
- **Purpose:** Larger beer profile with media
- **Props:** `name`, `style`, `abv`, `copy`, `imageUrl`, `imageAlt`, `reverse?: boolean`
- **Layout:** Two-column media/text split
- **Responsive:** Stacks vertically below `md`

### 7. `EventCard`
- **Purpose:** Promote a single event
- **Props:** `date`, `month`, `title`, `description`, `time`, `ctaLabel`, `href`
- **Layout:** Date chip, event info, text link/button
- **Responsive:** Works in grid or horizontal scroller

### 8. `AmenityGrid`
- **Purpose:** Show taproom amenities
- **Props:** `items: { icon: ReactNode; title: string; body: string }[]`
- **Layout:** 2x2 or 4-column icon grid
- **Responsive:** Two columns mobile, four desktop

### 9. `ContactCards`
- **Purpose:** Phone, email, Instagram methods
- **Props:** `items`
- **Layout:** Card row with icons and quick links
- **Responsive:** Single column on mobile

### 10. `ContactForm`
- **Purpose:** Inquiry capture form
- **Props:** optional `submitLabel`
- **Layout:** Single-column form card with clear labels and button
- **Responsive:** Full-width mobile, optional side image hidden below `lg`

### 11. `FAQAccordion`
- **Purpose:** Expand/collapse common questions
- **Props:** `items: { question: string; answer: string }[]`
- **Layout:** Vertical bordered list
- **Responsive:** Same behavior across breakpoints

### 12. `SectionIntro`
- **Purpose:** Standardize eyebrow, heading, intro paragraph combinations
- **Props:** `eyebrow`, `title`, `body`, `align?: 'left' | 'center'`
- **Layout:** Compact content block above sections
- **Responsive:** Centered sections remain readable with max width

## Page Routes

### `/`
- **Title:** Basecamp Brewing Co. | Craft Beer for the Trail Back
- **Meta description:** Rugged, welcoming craft brewery in Bend, Oregon serving alpine-inspired beers, a warm taproom, and community events.
- **Sections:** HomeHero, Featured Beers, Taproom Story, Upcoming Events, Visit CTA

### `/our-beers`
- **Title:** Our Beers | Basecamp Brewing Co.
- **Meta description:** Explore Basecamp Brewing Co.’s core lineup and rotating seasonal releases, from trail-ready lagers to hop-forward alpine IPAs.
- **Sections:** PageHero, Core Lineup, Seasonal Releases, Brewing Philosophy, Beer Finder CTA

### `/the-taproom`
- **Title:** The Taproom | Basecamp Brewing Co.
- **Meta description:** See the Basecamp taproom in Bend — a warm mountain-lodge brewery space with fresh pours, shareable food, and outdoor-friendly hospitality.
- **Sections:** PageHero, Atmosphere Gallery, Food & Pairings, Amenities, Visit Details

### `/events`
- **Title:** Events | Basecamp Brewing Co.
- **Meta description:** Join Basecamp Brewing Co. for release nights, live music, trail-club meetups, and private gatherings in Bend, Oregon.
- **Sections:** PageHero, Featured Event, Event Calendar Grid, Community Nights, Private Events CTA

### `/contact`
- **Title:** Contact & Visit | Basecamp Brewing Co.
- **Meta description:** Get in touch with Basecamp Brewing Co., find taproom hours, plan your visit, or ask about events and private bookings.
- **Sections:** PageHero, Contact Methods, Visit Info + Map, Contact Form, FAQ

## Content

### Global Navigation
- Home
- Our Beers
- The Taproom
- Events
- Contact
- CTA button: `Plan Your Stop`

### Footer
- **Brand line:** `Basecamp Brewing Co.`
- **Closing statement:** `Fresh pours. Pine air. Good people.`
- **Address:** `742 Summit Creek Road, Bend, OR 97703`
- **Phone:** `(541) 555-0148`
- **Email:** `hello@basecampbrewing.co`
- **Hours label:** `Taproom Hours`
- **Hours:**
  - Mon–Thu: `2pm–9pm`
  - Fri: `2pm–10pm`
  - Sat: `12pm–10pm`
  - Sun: `12pm–8pm`
- **Instagram label:** `@basecampbrewingco`
- **Legal:** `© 2026 Basecamp Brewing Co. All rights reserved.`

### Home Page Copy
#### Hero
- **Eyebrow:** `Bend, Oregon`
- **Heading:** `Craft beer for the trail back.`
- **Body:** `Built for mountain-town regulars and road-worn visitors, Basecamp Brewing Co. pours alpine-inspired beers in a taproom that feels like the best part of the day after the summit.`
- **Primary CTA:** `Explore the Beers`
- **Secondary CTA:** `Visit the Taproom`
- **Status card heading:** `Today at Basecamp`
- **Status card lines:**
  - `8 rotating taps`
  - `Heated patio + firepit`
  - `Open until 10pm Friday & Saturday`

#### Featured Beers
- **Section eyebrow:** `Pour Highlights`
- **Section heading:** `Flagship beers with mountain character.`
- **Section body:** `Balanced, unpretentious, and brewed with real range — from crisp post-ride lagers to resinous IPAs and darker seasonal pours worth lingering over.`

**Beer 1**
- Name: `Summit Haze IPA`
- Style: `Hazy IPA`
- ABV: `6.8%`
- Tasting notes: `Citrus peel, pine resin, soft tropical finish`
- Availability: `Year-round`

**Beer 2**
- Name: `Trailhead Lager`
- Style: `Mountain Lager`
- ABV: `5.1%`
- Tasting notes: `Clean malt, alpine herbs, crisp snap`
- Availability: `Year-round`

**Beer 3**
- Name: `Campfire Porter`
- Style: `Robust Porter`
- ABV: `6.2%`
- Tasting notes: `Roasted cocoa, toasted walnut, dry finish`
- Availability: `Cold-season favorite`

#### Taproom Story
- **Section eyebrow:** `The Taproom`
- **Section heading:** `A lodge-minded space built for staying awhile.`
- **Body paragraph 1:** `Inside, you’ll find timber textures, warm light, and enough room for muddy boots, date nights, post-shift pints, and slow afternoons that turn into one more round.`
- **Body paragraph 2:** `Expect a rotating draft board, thoughtful snacks, and staff who can point you toward the right pour whether you want bright and hoppy, dark and malty, or easy-drinking after a long ride.`
- **Amenities bullets:**
  - `Dog-friendly patio with firepit seating`
  - `Bike racks and easy parking`
  - `Rotating food specials and pairing boards`

#### Upcoming Events
- **Section eyebrow:** `What’s On`
- **Section heading:** `Good reasons to come back this week.`
- **Event 1:** `Trail Club Tuesday` — `Group meet-up for runners, riders, and hikers. First pint discount after the loop.` — `Tuesdays · 6:30pm`
- **Event 2:** `Firline Folk Night` — `Acoustic sets from local musicians in the taproom.` — `Friday, April 18 · 7pm`
- **Event 3:** `Copper Kettle Release Party` — `First pour of our spring amber with brewer tasting notes.` — `Saturday, April 26 · 5pm`
- **CTA label:** `See All Events`

#### Visit CTA
- **Heading:** `Find your way in.`
- **Body:** `Just outside central Bend, the taproom is an easy stop after the trail, before dinner, or whenever the group needs one place everyone agrees on.`
- **Address:** `742 Summit Creek Road, Bend, OR 97703`
- **Hours:** `Open daily. Extended hours Friday and Saturday.`
- **Button:** `Get in Touch`

### Our Beers Page Copy
#### Hero
- **Eyebrow:** `Our Beers`
- **Heading:** `Built with range. Poured with confidence.`
- **Body:** `The list stays balanced: hop-forward staples, clean lagers, darker seasonal pours, and limited runs that reward repeat visits.`

#### Core Lineup Intro
- **Heading:** `Core lineup`
- **Body:** `These are the beers that define Basecamp — reliable, character-driven, and brewed to meet the moment after the day outside.`

**Feature 1**
- Name: `Summit Haze IPA`
- Style / ABV: `Hazy IPA · 6.8%`
- Copy: `A soft-bodied IPA layered with orange zest, pine lift, and enough bitterness to keep it grounded.`

**Feature 2**
- Name: `Trailhead Lager`
- Style / ABV: `Mountain Lager · 5.1%`
- Copy: `Bright, snappy, and quietly complex — the kind of lager that disappears fast for the right reasons.`

**Feature 3**
- Name: `Ridgeline Pale`
- Style / ABV: `Pale Ale · 5.6%`
- Copy: `Citrus and wildflower aroma with a dry finish that keeps it easy from first sip to last.`

**Feature 4**
- Name: `Campfire Porter`
- Style / ABV: `Robust Porter · 6.2%`
- Copy: `Roast, cocoa husk, and subtle smoke notes for colder nights and slower pours.`

#### Seasonal Releases
- **Heading:** `Rotating releases`
- **Body:** `Limited pours tied to weather, ingredients, and whatever our brewers are chasing next.`
- `Alpenglow Amber` — `Spring seasonal · Toasted biscuit, tangerine peel, copper malt depth`
- `High Pass Pils` — `Summer release · Floral noble hop snap, bright finish`
- `First Snow Stout` — `Winter release · Espresso aromatics, dark chocolate, velvet body`

#### Brewing Philosophy
- **Heading:** `Beer that earns the setting.`
- **Body:** `We brew with restraint where it matters and character where it counts. Nothing overloaded for effect. Nothing watered down for broad appeal. Just intentional beer shaped by mountain weather, long days outside, and the people who come in wanting something honest.`
- **Pull quote:** `“Make it clean enough to crave twice and distinctive enough to remember.”`

#### CTA
- **Heading:** `See what’s pouring now.`
- **Body:** `Stop in for the current tap list and seasonal releases before they rotate out.`
- **Button:** `Visit the Taproom`

### The Taproom Page Copy
#### Hero
- **Eyebrow:** `The Taproom`
- **Heading:** `Warm light, cold pours, no pretense.`
- **Body:** `Basecamp is built to feel lived-in from day one — rugged enough for trail gear, comfortable enough for long conversations.`

#### Atmosphere Gallery Intro
- **Heading:** `The room sets the tone.`
- **Body:** `Think timber, steel, old maps, flickering warmth, and a bar team that knows when to guide and when to simply pour.`

#### Food & Pairings
- **Heading:** `Food that knows its role.`
- **Body:** `The menu leans savory, sharable, and beer-friendly: pretzel boards, smoked wings, cast-iron nachos, seasonal flatbreads, and rotating specials tied to new releases.`
- **Highlights:**
  - `House pretzel with alpine mustard`
  - `Smoked wings with copper glaze`
  - `Trail mix brownie with porter caramel`

#### Amenities
- **Heading:** `Easy to settle into.`
- **Items:**
  - `Dog-friendly patio` — `Bring the trail companion. Water bowls and shaded seating outside.`
  - `Bike racks` — `Secure parking for riders rolling straight in.`
  - `Firepit seating` — `Stay outside after sunset without rushing the night.`
  - `Private bookings` — `Reserve a section for launch parties, birthdays, or group hangs.`

#### Visit Details
- **Heading:** `Plan your visit.`
- **Body:** `Walk-ins are welcome. Small groups can drop in anytime. Reach out ahead for larger gatherings or private event questions.`

### Events Page Copy
#### Hero
- **Eyebrow:** `Events`
- **Heading:** `A brewery with something going on.`
- **Body:** `From release nights to local music and trail-club meetups, the calendar gives people more reasons to make Basecamp part of the week.`

#### Featured Event
- **Heading:** `Featured this month: Copper Kettle Release Party`
- **Body:** `Join the brewers for the first pour of Alpenglow Amber, paired bites from the kitchen, and live acoustic music that keeps the room buzzing without drowning it out.`
- **Date:** `Saturday, April 26`
- **Time:** `5pm–9pm`
- **Button:** `Ask About This Event`

#### Calendar Intro
- **Heading:** `Upcoming events`
- **Body:** `Recurring local favorites and one-off nights worth planning around.`

**Event cards**
- `Trail Club Tuesday` — `Every Tuesday` — `6:30pm` — `Meet at the taproom, loop the route, come back for the first-pint special.`
- `Firline Folk Night` — `Friday, April 18` — `7pm` — `Local acoustic artists, intimate sets, and a full tap lineup.`
- `Trivia by the Fire` — `Wednesday, April 23` — `7pm` — `Mountain lore, beer knowledge, and good-natured competition.`
- `Copper Kettle Release Party` — `Saturday, April 26` — `5pm` — `Seasonal release launch with brewer tasting notes.`
- `Sunday Slow Session` — `Sunday, April 27` — `4pm` — `Low-key vinyl, porter pours, and mellow close-out energy.`
- `Basecamp Anniversary Night` — `Friday, May 9` — `6pm` — `Throwback pours, special merch, and live local sets.`

#### Community Nights
- **Heading:** `The recurring stuff locals count on.`
- **Trail Club:** `A social meet-up for runners, mountain bikers, and hikers who want the route and the reward in one place.`
- **Live Music Fridays:** `Small-format live sets that add energy without turning the room into a shout-over-the-table venue.`
- **Trivia by the Fire:** `A weekly reason to claim a table early and stay longer than planned.`

#### Private Events CTA
- **Heading:** `Need a place for your group?`
- **Body:** `We host private corners, partial taproom bookings, and brewery-centered gatherings with food and drink packages.`
- **Button:** `Contact Us About Private Events`

### Contact Page Copy
#### Hero
- **Eyebrow:** `Contact & Visit`
- **Heading:** `Come by. Reach out. Stay awhile.`
- **Body:** `Whether you’re planning a first stop, checking hours, or asking about an event, we’ll point you the right way.`

#### Contact Methods
- `Call the taproom` — `(541) 555-0148`
- `Email the team` — `hello@basecampbrewing.co`
- `Follow on Instagram` — `@basecampbrewingco`

#### Visit Info
- **Address heading:** `Visit Basecamp Brewing Co.`
- **Address:** `742 Summit Creek Road, Bend, OR 97703`
- **Hours:**
  - `Monday–Thursday: 2pm–9pm`
  - `Friday: 2pm–10pm`
  - `Saturday: 12pm–10pm`
  - `Sunday: 12pm–8pm`
- **Parking note:** `Parking available on site. Extra bike racks near the patio entrance.`
- **Accessibility note:** `Ground-level entry, accessible restroom, and patio path access.`

#### Contact Form Labels
- `Name`
- `Email`
- `Phone`
- `Reason for inquiry`
- `Message`
- **Reason options:** `General question`, `Private event`, `Live music`, `Group visit`, `Press`
- **Submit button:** `Send Message`
- **Success state copy:** `Thanks. We’ll get back to you soon.`

#### FAQ
- `Do you take reservations?` — `Most seating is first come, first served. Contact us for large groups or private bookings.`
- `Is the patio dog-friendly?` — `Yes. Well-behaved dogs are welcome on the patio.`
- `Do you host private events?` — `Yes. We offer partial buyouts and reserved sections depending on date and group size.`
- `Is there parking for bikes?` — `Yes. Bike racks are available near the main entrance.`
- `Do you sell merchandise or to-go beer?` — `Yes. Ask in the taproom for current merch drops and packaged beer availability.`

## Image References
- Home hero — `https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?w=1600&h=1100&fit=crop` — `1600x1100` — Mountain lodge exterior at dusk in a forested setting
- Home beers feature — `https://images.unsplash.com/photo-1563379091339-03246963d96c?w=1200&h=800&fit=crop` — `1200x800` — Freshly poured craft beers lined up on a wooden bar
- Home beer inset — `https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=800&h=900&fit=crop` — `800x900` — Close-up of beer being poured into a glass
- Home taproom — `https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&h=1000&fit=crop` — `1200x1000` — Warm brewery interior with patrons gathered at tables
- Home events band — `https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&h=700&fit=crop` — `1400x700` — Rustic food and drinks spread on a communal table
- Home visit CTA — `https://images.unsplash.com/photo-1528825871115-3581a5387919?w=1200&h=900&fit=crop` — `1200x900` — Friends gathered outdoors with mountain scenery nearby
- Beers hero — `https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1600&h=900&fit=crop` — `1600x900` — Hand holding a cold craft beer against a dark backdrop
- Beers lineup 1 — `https://images.unsplash.com/photo-1571767454098-246b94fbcf70?w=1000&h=900&fit=crop` — `1000x900` — Assorted craft beer glasses on a tasting flight
- Beers lineup 2 — `https://images.unsplash.com/photo-1544145945-f90425340c7e?w=1000&h=900&fit=crop` — `1000x900` — Bartender serving beer from tap handles
- Beers seasonal — `https://images.unsplash.com/photo-1567696911980-2c5c4f2a9f81?w=1200&h=900&fit=crop` — `1200x900` — Dark beer poured beside brewing ingredients
- Beers philosophy — `https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=800&fit=crop` — `1200x800` — Brewing tanks inside a craft brewery production space
- Beers CTA texture — `https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1000&h=700&fit=crop` — `1000x700` — Pine forest with filtered light
- Taproom hero — `https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&h=1400&fit=crop` — `1200x1400` — Stylish rustic restaurant and bar interior with warm lighting
- Taproom gallery 1 — `https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=900&h=1100&fit=crop` — `900x1100` — Friends talking across a table in a warmly lit bar
- Taproom gallery 2 — `https://images.unsplash.com/photo-1532635241-17e820acc59f?w=900&h=900&fit=crop` — `900x900` — Beer taps and bar counter detail
- Taproom gallery 3 — `https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=900&h=1200&fit=crop` — `900x1200` — Outdoor patio dining area under string lights
- Taproom food — `https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&h=900&fit=crop` — `1200x900` — Elevated pub food served on wooden table with drinks
- Taproom visit — `https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=800&fit=crop` — `1200x800` — Pine-covered mountain landscape at golden hour
- Events hero — `https://images.unsplash.com/photo-1511578314322-379afb476865?w=1600&h=900&fit=crop` — `1600x900` — Live event crowd under warm string lights
- Events feature — `https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1200&h=900&fit=crop` — `1200x900` — Acoustic musician performing in a small venue
- Events calendar — `https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop` — `1200x800` — Stage setup with instruments and lights
- Events community 1 — `https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1000&h=800&fit=crop` — `1000x800` — Group of friends at an indoor concert or social event
- Events community 2 — `https://images.unsplash.com/photo-1521334884684-d80222895322?w=1000&h=800&fit=crop` — `1000x800` — People clinking drinks in a dimly lit venue
- Events private CTA — `https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1400&h=700&fit=crop` — `1400x700` — Long communal table set for a private gathering
- Contact hero — `https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&h=800&fit=crop` — `1600x800` — Scenic mountain road leading toward a forested horizon
- Contact inset — `https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&h=700&fit=crop` — `900x700` — Forest trail through tall evergreen trees
- Contact form side image — `https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&h=1000&fit=crop` — `900x1000` — Coffee and journal on a wood table near a window

## Logo & Favicon SVG

### Logo
```svg
<svg width="220" height="52" viewBox="0 0 220 52" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Basecamp Brewing Co.">
  <path d="M18 36L34 14L45 28L57 10L76 36H18Z" fill="#2D5016"/>
  <path d="M52 16C49 19 47 22 47 26C47 31 50 34 54 36C58 34 61 31 61 26C61 22 59 19 56 16L54 19L52 16Z" fill="#FFF8E7"/>
  <path d="M50 26H58" stroke="#2D5016" stroke-width="2" stroke-linecap="round"/>
  <path d="M52 30H56" stroke="#2D5016" stroke-width="2" stroke-linecap="round"/>
  <text x="88" y="24" fill="#1A1A1A" font-family="Oswald, sans-serif" font-size="22" font-weight="700" letter-spacing="0.04em">BASECAMP</text>
  <text x="88" y="43" fill="#B87333" font-family="Source Serif 4, serif" font-size="12" font-weight="600" letter-spacing="0.12em">BREWING CO.</text>
</svg>
```

### Favicon
```svg
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Basecamp Brewing Co. favicon">
  <path d="M32 10C26 16 22 22 22 31C22 40 27 47 32 54C37 47 42 40 42 31C42 22 38 16 32 10Z" fill="#2D5016"/>
  <path d="M26 27C29 25 35 25 38 27" stroke="#FFF8E7" stroke-width="3" stroke-linecap="round"/>
  <path d="M25 34C28 32 36 32 39 34" stroke="#FFF8E7" stroke-width="3" stroke-linecap="round"/>
  <path d="M28 41C30 40 34 40 36 41" stroke="#FFF8E7" stroke-width="3" stroke-linecap="round"/>
</svg>
```

## Responsive Notes
- **Mobile (<768px):** All split sections stack vertically. Home hero status card drops below CTAs. Event cards become horizontal scroll or single-column stack. Contact form side image hides. Navigation collapses to hamburger/drawer.
- **Tablet (768px–1023px):** Two-column sections begin to reappear. Grids can shift to 2 columns. Hero copy should remain max-width constrained so text stays punchy.
- **Desktop (1024px+):** Full hero composition with floating card. Beer/event/taproom cards align into 3-column structures. Footer uses multi-column layout. Masonry-style gallery becomes visually staggered.
- Keep headings from exceeding 8–10 words per line. Preserve generous vertical rhythm on all pages. Watch image cropping carefully so mountain and taproom focal points survive at smaller sizes.
