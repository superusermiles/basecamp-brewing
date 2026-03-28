# Basecamp Brewing Co. — Development Handoff

## Tech Setup
- **Framework:** Next.js 14 App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel project `basecamp-brewing`
- **SEO:** Next Metadata API, canonical metadata, `robots.ts`, `sitemap.ts`, Open Graph metadata, `LocalBusiness` + `Brewery`-focused JSON-LD on key pages
- **Build target:** Mobile-first responsive site with accessible semantic sections and reusable components

### Google Fonts import URLs
Use either `next/font/google` or a standard import. If using CSS import/link, use:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Source+Serif+4:wght@400;600&display=swap" rel="stylesheet">
```

### Tailwind config tokens
```ts
// tailwind.config.ts
extend: {
  colors: {
    primary: '#2D5016',
    secondary: '#B87333',
    accent: '#6F7C4B',
    background: '#FFF8E7',
    text: '#1A1A1A',
    muted: '#D9D1BF',
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
    medium: '0 18px 42px rgba(26,26,26,0.14)',
    hard: '0 28px 72px rgba(26,26,26,0.22)',
  },
  maxWidth: {
    content: '72rem',
    prose: '48rem',
    wide: '80rem',
  },
}
```

### Additional npm packages needed
- `clsx` for class composition
- `lucide-react` for icons
- `embla-carousel-react` for featured beers carousel
- `framer-motion` optional for scroll reveals and micro-motion
- `@tailwindcss/forms` optional for cleaner form defaults

## Component Breakdown

### 1. `SiteHeader`
- **Purpose:** Global navigation with primary CTA
- **Props:** `currentPath?: string`
- **Layout:** Transparent over hero, sticky cream bar on scroll, wordmark left, links center/right, CTA button far right
- **Responsive behavior:** Desktop horizontal nav; mobile toggles full-width dropdown/drawer panel

### 2. `MobileNavPanel`
- **Purpose:** Mobile navigation container
- **Props:** `isOpen: boolean`, `links: NavItem[]`, `onClose: () => void`
- **Layout:** Full-width cream panel beneath header with stacked links and CTA
- **Responsive behavior:** Hidden on desktop

### 3. `SiteFooter`
- **Purpose:** Footer with links, contact info, newsletter field, and legal copy
- **Props:** none
- **Layout:** Dark band with 3 content columns plus legal row
- **Responsive behavior:** Stacks into one column below `md`

### 4. `HomeHero`
- **Purpose:** Home-only cinematic hero
- **Props:** `eyebrow`, `title`, `body`, `primaryCta`, `secondaryCta`, `statusItems`, `imageUrl`, `imageAlt`
- **Layout:** Full-bleed background image, overlay, text left, floating card right/lower
- **Responsive behavior:** Floating card moves below CTAs on mobile

### 5. `SectionIntro`
- **Purpose:** Shared eyebrow + heading + paragraph pattern
- **Props:** `eyebrow?`, `title`, `body?`, `align?: 'left' | 'center'`
- **Layout:** Compact intro block above sections
- **Responsive behavior:** Centered option stays max-width constrained

### 6. `BeerCarousel`
- **Purpose:** Featured beers carousel on home
- **Props:** `items: Beer[]`
- **Layout:** Embla-based horizontal slider with cards and controls
- **Responsive behavior:** Snap scroll on mobile, multi-card viewport on desktop

### 7. `BeerCard`
- **Purpose:** Individual beer card for grids and carousel
- **Props:** `name`, `style`, `abv`, `notes`, `availability`, `moment?`, `labelArtVariant?`
- **Layout:** Illustrated placeholder panel on top, metadata and notes below, style chip, ABV row
- **Responsive behavior:** Equal-height card in grid, full-width in mobile stack

### 8. `BeerFilterBar`
- **Purpose:** Style filter controls on beers page
- **Props:** `filters: string[]`, `activeFilter: string`, `onChange: (filter: string) => void`
- **Layout:** Horizontal chip row with optional sticky behavior
- **Responsive behavior:** Horizontal scroll on mobile

### 9. `PageHero`
- **Purpose:** Reusable inner-page hero
- **Props:** `eyebrow`, `title`, `body`, `imageUrl`, `imageAlt`, `variant?: 'banner' | 'split' | 'dark'`
- **Layout:** Supports scenic banner, split media/text, or moody dark event style
- **Responsive behavior:** Split layouts collapse vertically on mobile

### 10. `EventPreviewCard`
- **Purpose:** Compact home event preview card
- **Props:** `date`, `title`, `time`, `description`, `href`
- **Layout:** Small card with copper date block and body text
- **Responsive behavior:** Stacks vertically on small screens

### 11. `EventListItem`
- **Purpose:** Event row for events page
- **Props:** `date`, `title`, `time`, `description`, `category`
- **Layout:** Horizontal row with date block, main content, category chip
- **Responsive behavior:** Converts to stacked card layout on mobile

### 12. `SustainabilityStrip`
- **Purpose:** Showcase brewery sustainability commitments
- **Props:** `items: { title: string; body: string; icon: ReactNode }[]`
- **Layout:** Three-column dark band with icon-led cards
- **Responsive behavior:** Single-column stack on mobile

### 13. `GalleryRail`
- **Purpose:** Taproom photo gallery
- **Props:** `images: { src: string; alt: string }[]`
- **Layout:** Staggered desktop gallery with varying aspect ratios
- **Responsive behavior:** Swipeable/stacked cards on mobile

### 14. `HoursCard`
- **Purpose:** Opening-hours block
- **Props:** `hours: { label: string; value: string }[]`
- **Layout:** Card with heading and list rows
- **Responsive behavior:** Full width on mobile

### 15. `FoodHighlightCard`
- **Purpose:** Food item + pairing note card
- **Props:** `title`, `body`, `pairing`
- **Layout:** Compact bordered card
- **Responsive behavior:** Grid on desktop, stack on mobile

### 16. `AmenityGrid`
- **Purpose:** Taproom amenities overview
- **Props:** `items: { title: string; body: string; icon: ReactNode }[]`
- **Layout:** 2x2 card grid desktop
- **Responsive behavior:** Single column or 2-column mobile/tablet

### 17. `MapPlaceholder`
- **Purpose:** Static placeholder block for future map embed
- **Props:** `label`, `addressLines`, `heightClass?`
- **Layout:** Bordered panel with pin icon and note that interactive map will be embedded later
- **Responsive behavior:** Maintains width and fixed min-height across breakpoints

### 18. `ContactCards`
- **Purpose:** Quick contact method cards
- **Props:** `items: { title: string; value: string; detail?: string; href?: string }[]`
- **Layout:** 3-up card row
- **Responsive behavior:** Single-column stack on mobile

### 19. `ContactForm`
- **Purpose:** User inquiry form
- **Props:** `submitLabel?: string`
- **Layout:** Single-column card with labels above fields and full-width button
- **Responsive behavior:** Optional side image hidden below `lg`

### 20. `FAQAccordion`
- **Purpose:** Expand/collapse FAQ list
- **Props:** `items: { question: string; answer: string }[]`
- **Layout:** Bordered accordion list with copper chevrons
- **Responsive behavior:** Same behavior on all breakpoints

### 21. `NewsletterSignup`
- **Purpose:** Email signup section on home and footer
- **Props:** `heading`, `body`, `placeholder`, `buttonLabel`
- **Layout:** Input + button layout with small privacy note
- **Responsive behavior:** Stacks input and button on mobile

### 22. `StructuredData`
- **Purpose:** Inject schema JSON-LD in layout or pages
- **Props:** `data: Record<string, unknown>`
- **Layout:** Script tag only
- **Responsive behavior:** N/A

## Page Routes

### `/`
- **Title:** Basecamp Brewing Co. | Small-Batch Alpine Beer in Queenstown
- **Meta description:** Queenstown craft brewery and taproom serving alpine-inspired small-batch beer, hearty food, mountain views, and live music on weekends.
- **Section breakdown:** HomeHero → Featured Beers Carousel → Sustainability Strip → Upcoming Events Preview → Taproom Snapshot → Newsletter Signup

### `/our-beers`
- **Title:** Our Beers | Basecamp Brewing Co.
- **Meta description:** Explore Basecamp Brewing Co.’s lagers, pale ales, IPAs, stouts, and seasonal releases with accessible tasting notes and ABV details.
- **Section breakdown:** PageHero → Filter Bar + Beer Grid → Seasonal Spotlight → Brewing Approach → Visit CTA

### `/the-taproom`
- **Title:** The Taproom | Basecamp Brewing Co.
- **Meta description:** See the Basecamp Brewing Co. taproom in Queenstown — mountain views, food highlights, opening hours, and a welcoming lodge-style brewery atmosphere.
- **Section breakdown:** PageHero → Photo Gallery → Opening Hours + Food Highlights → Amenities + Map Placeholder → Closing CTA

### `/events`
- **Title:** Events | Basecamp Brewing Co.
- **Meta description:** Check upcoming live music, release nights, and community events at Basecamp Brewing Co. in Queenstown, New Zealand.
- **Section breakdown:** PageHero → Featured Event → Upcoming Events List → Weekend Rhythm Strip → Private Bookings CTA

### `/contact`
- **Title:** Contact | Basecamp Brewing Co.
- **Meta description:** Contact Basecamp Brewing Co., find opening hours, get directions, or ask about bookings, live music, and group visits in Queenstown.
- **Section breakdown:** PageHero → Quick Contact Cards → Visit Details + Map Placeholder → Contact Form → FAQ

## Content

### Global Navigation
- Home
- Our Beers
- The Taproom
- Events
- Contact
- CTA button: `Plan Your Visit`

### Footer Text
- **Brand line:** `Basecamp Brewing Co.`
- **Closing line:** `Small-batch alpine beer. Poured at the edge of adventure.`
- **Address:** `14 Shotover View Road, Queenstown 9300, New Zealand`
- **Phone:** `+64 3 441 0284`
- **Email:** `hello@basecampbrewing.co.nz`
- **Hours label:** `Taproom Hours`
- **Hours:**
  - Mon–Thu: `12pm–9pm`
  - Fri: `12pm–10pm`
  - Sat: `11am–10pm`
  - Sun: `11am–8pm`
- **Social label:** `Instagram`
- **Social handle:** `@basecampbrewingco`
- **Newsletter label:** `Get release drops, weekend music, and tap updates.`
- **Legal:** `© 2026 Basecamp Brewing Co. All rights reserved.`

### Home Page Content
#### Hero
- **Eyebrow:** `Queenstown, New Zealand`
- **Heading:** `Craft beer with a summit view.`
- **Body:** `Basecamp Brewing Co. brews small-batch beer inspired by the Southern Alps and pours it in a Queenstown taproom built for locals, visitors, and anyone coming down from a day outside.`
- **Primary CTA:** `Explore Our Beers`
- **Secondary CTA:** `See the Taproom`
- **Status card heading:** `Today at Basecamp`
- **Status items:**
  - `10 taps pouring now`
  - `Live music every weekend`
  - `Mountain views from the taproom`

#### Featured Beers Carousel
- **Section eyebrow:** `On Pour`
- **Section heading:** `Small-batch beers with real range.`
- **Section body:** `Easy-drinking where it should be. Characterful where it counts. Every pour is written for post-hike refresh, long-table hangs, and Queenstown weather swings.`

**Beer cards**
1. `Trail Marker Lager` — `Lager` — `4.9% ABV` — `Crisp malt, alpine herb snap, dry finish` — `Best after a lake loop` — `Year-round`
2. `Ridgeline Pale Ale` — `Pale Ale` — `5.4% ABV` — `Mandarin zest, biscuit malt, light pine` — `Built for easy second rounds` — `Core pour`
3. `Summit Drop IPA` — `IPA` — `6.7% ABV` — `Passionfruit, grapefruit peel, resin lift` — `For hop drinkers who still want balance` — `Core pour`
4. `Night Track Stout` — `Stout` — `5.8% ABV` — `Dark cocoa, roast, velvet texture` — `A colder-night taproom favorite` — `Seasonal return`
5. `Alpenglow Red` — `Seasonal` — `5.9% ABV` — `Toffee edge, orange peel, warming finish` — `Made for shoulder-season evenings` — `Limited release`

#### Sustainability Strip
- **Heading:** `Brewed with respect for the place around us.`
- **Item 1 title:** `Local ingredients first`
- **Item 1 body:** `We source as close to home as possible and build seasonal releases around what fits the region.`
- **Item 2 title:** `Brewing with intention`
- **Item 2 body:** `Water and process decisions are handled carefully so quality and efficiency rise together.`
- **Item 3 title:** `Spent grain to local farms`
- **Item 3 body:** `Our spent grain is donated to nearby farms instead of heading to waste.`

#### Upcoming Events Preview
- **Section eyebrow:** `This Week`
- **Section heading:** `Music, releases, and reasons to swing back in.`
- **Intro body:** `Weekends bring local music. Midweek keeps the room moving with community nights and fresh pours.`
- **CTA label:** `See All Events`
- **Event 1:** `Friday Fireside Sessions` — `Friday · 7:30pm` — `Acoustic sets, fuller tap list, and the sunset crowd rolling in.`
- **Event 2:** `Seasonal Release Night` — `Saturday · 5pm` — `First pours of the latest small-batch release with brewer notes.`
- **Event 3:** `Trail Club Meet-Up` — `Wednesday · 6pm` — `A relaxed post-ride gathering with specials for the crew.`

#### Taproom Snapshot
- **Section eyebrow:** `The Taproom`
- **Section heading:** `Lodge warmth. Brewery edge.`
- **Body paragraph 1:** `The room balances timber, steel, big windows, and a bar team that knows how to guide without overselling.`
- **Body paragraph 2:** `Come for a quick pint, settle in with food, or catch a live set while the light drops over the mountains.`
- **Hours heading:** `Open today`
- **Hours lines:**
  - `Mon–Thu · 12pm–9pm`
  - `Fri · 12pm–10pm`
  - `Sat · 11am–10pm`
  - `Sun · 11am–8pm`
- **Food highlights:**
  - `Smoked brisket sliders`
  - `Loaded hand-cut fries`
  - `Charred seasonal flatbread`
- **Button:** `See the Taproom`

#### Newsletter Signup
- **Heading:** `Get the next release before your group chat does.`
- **Body:** `Join the list for tap updates, weekend music announcements, and limited seasonal drops.`
- **Field placeholder:** `Your email address`
- **Button:** `Join the List`
- **Privacy note:** `No spam. Just the useful stuff.`

### Our Beers Page Content
#### Hero
- **Eyebrow:** `Our Beers`
- **Heading:** `Made for mountain weather and good company.`
- **Body:** `Browse the current lineup by style. Tasting notes stay clear, useful, and easy to read whether you know beer deeply or just know what you like.`

#### Filter Labels
- `All`
- `Lager`
- `Pale Ale`
- `IPA`
- `Stout`
- `Seasonal`

#### Beer Grid Intro
- **Heading:** `Current lineup`
- **Body:** `Core pours keep the list grounded. Seasonal releases bring a little weather, mood, and experimentation to the board.`

#### Beer Grid Items
1. **Trail Marker Lager**
   - Style: `Lager`
   - ABV: `4.9%`
   - Notes: `Crisp malt, alpine herb snap, dry finish`
   - Moment: `Post-hike reset`
2. **Ridgeline Pale Ale**
   - Style: `Pale Ale`
   - ABV: `5.4%`
   - Notes: `Mandarin zest, biscuit malt, light pine`
   - Moment: `Easy first pour`
3. **Summit Drop IPA**
   - Style: `IPA`
   - ABV: `6.7%`
   - Notes: `Passionfruit, grapefruit peel, resin lift`
   - Moment: `Hop-forward without overload`
4. **Night Track Stout**
   - Style: `Stout`
   - ABV: `5.8%`
   - Notes: `Dark cocoa, roast, velvet texture`
   - Moment: `Cold-night comfort`
5. **Lake Edge Lager**
   - Style: `Lager`
   - ABV: `4.6%`
   - Notes: `Light cracker malt, lemon zest, quick finish`
   - Moment: `Patio pint`
6. **Switchback Pale**
   - Style: `Pale Ale`
   - ABV: `5.1%`
   - Notes: `Stone fruit aroma, soft bitterness, dry close`
   - Moment: `Long-table sharer`
7. **Peakline IPA**
   - Style: `IPA`
   - ABV: `7.1%`
   - Notes: `Pine, orange marmalade, clean bitter backbone`
   - Moment: `For the hop regulars`
8. **First Frost Stout**
   - Style: `Stout`
   - ABV: `6.2%`
   - Notes: `Espresso, bittersweet chocolate, subtle smoke`
   - Moment: `Late set, last round`
9. **Alpenglow Red**
   - Style: `Seasonal`
   - ABV: `5.9%`
   - Notes: `Toffee edge, orange peel, warming finish`
   - Moment: `Autumn release`
10. **Southern Pass Pils**
    - Style: `Seasonal`
    - ABV: `5.0%`
    - Notes: `Noble hop spice, bright body, clean snap`
    - Moment: `Summer seasonal`

#### Seasonal Spotlight
- **Heading:** `Seasonals shaped by the time of year.`
- **Body:** `Queenstown changes fast. The seasonal board should feel like it noticed.`
- **Feature release:** `Alpenglow Red` — `Toffee malt, orange peel, and a warming finish built for cooling evenings.`
- **Supporting release 1:** `Southern Pass Pils` — `Bright, crisp, and floral with a high-sun finish.`
- **Supporting release 2:** `First Chair Dark Ale` — `Roast, dried fruit, and a little extra weight for winter.`

#### Brewing Approach
- **Heading:** `Straightforward brewing. Thoughtful detail.`
- **Body:** `Basecamp brews for balance and repeat drinkability. Local ingredients inform the seasonal board. Spent grain goes to nearby farms. The aim is simple: make beer that feels connected to Queenstown, not disconnected from it.`
- **Callout heading:** `Sustainability in practice`
- **Callout body:** `Spent grain donated locally. Seasonal releases informed by regional ingredients. Process decisions made to reduce waste without compromising quality.`

#### CTA
- **Heading:** `See what’s pouring right now.`
- **Body:** `Drop into the taproom for the freshest list and staff recommendations.`
- **Button:** `Visit the Taproom`

### The Taproom Page Content
#### Hero
- **Eyebrow:** `The Taproom`
- **Heading:** `Built for the after part of the adventure.`
- **Body:** `Basecamp’s taproom brings together small-batch beer, mountain views, solid food, and a crowd that ranges from post-trail locals to first-time visitors who found the right stop.`

#### Gallery Intro
- **Heading:** `A room that feels good immediately.`
- **Body:** `Timber, copper accents, soft lighting, open views, and just enough brewery edge to keep it honest.`

#### Opening Hours Section
- **Heading:** `Hours that work for locals and visitors.`
- **Body:** `Lunch drift-ins, post-ride pints, sunset rounds, and weekend evenings with live music all fit comfortably here.`
- **Hours:**
  - `Monday–Thursday: 12pm–9pm`
  - `Friday: 12pm–10pm`
  - `Saturday: 11am–10pm`
  - `Sunday: 11am–8pm`

#### Food Highlights
- **Heading:** `Food that belongs next to good beer.`
- **Body:** `The menu leans hearty, shareable, and tap-friendly rather than fussy.`
- **Food cards:**
  - `Smoked brisket sliders` — `Soft buns, sharp pickles, copper glaze` — `Best with Ridgeline Pale Ale`
  - `Loaded hand-cut fries` — `Herb salt, cheese sauce, smoked aioli` — `Best with Trail Marker Lager`
  - `Charred seasonal flatbread` — `Rotating toppings built around local produce` — `Best with Southern Pass Pils`

#### Amenities
- **Heading:** `Easy to settle into.`
- **Amenity 1:** `Mountain-view seating` — `Big-window tables and sightlines that keep Queenstown front and center.`
- **Amenity 2:** `Weekend live music` — `Small-format performances that lift the room without overwhelming it.`
- **Amenity 3:** `Walk-in friendly` — `Great for spontaneous drop-ins after a ride, ski day, or scenic drive.`
- **Amenity 4:** `Group-ready spaces` — `Ideal for birthday hangs, team catch-ups, and informal gatherings.`

#### Map Placeholder Area
- **Heading:** `Find us in Queenstown.`
- **Body:** `Interactive map embed to be added here. For now, show branded placeholder block with address and wayfinding note.`
- **Wayfinding note:** `Easy to reach from central Queenstown with on-site parking nearby.`

#### Closing CTA
- **Heading:** `Come in for one. Stay for longer.`
- **Body:** `Beer, food, views, and the right kind of noise level make this an easy yes.`
- **Button:** `Plan Your Visit`

### Events Page Content
#### Hero
- **Eyebrow:** `Events`
- **Heading:** `Weekends sound better here.`
- **Body:** `The calendar keeps things active without feeling overprogrammed — live music, release nights, and community meet-ups that fit the taproom naturally.`

#### Featured Event
- **Heading:** `Featured: Southern Alps Sessions`
- **Body:** `A Saturday night live-music series with rotating local artists, fresh seasonal pours, and a room that stays lively without losing the conversation.`
- **Date:** `Saturday, 18 April`
- **Time:** `7pm–10pm`
- **Button:** `Ask About This Event`

#### Upcoming Events Intro
- **Heading:** `Upcoming events`
- **Body:** `Clear, practical, and easy to scan. This page should help people decide fast.`

#### Upcoming Events List
1. `Trail Club Meet-Up` — `Wednesday, 15 April` — `6pm` — `Post-ride catch-up for runners, riders, and hikers.` — `Community`
2. `Friday Fireside Sessions` — `Friday, 17 April` — `7:30pm` — `Acoustic live music with the full tap list running.` — `Live Music`
3. `Southern Alps Sessions` — `Saturday, 18 April` — `7pm` — `Featured weekend live set with guest local artist.` — `Live Music`
4. `Seasonal Release Night` — `Thursday, 23 April` — `6:30pm` — `First pours of the new seasonal with brewer walk-through.` — `Release`
5. `Long Table Sunday` — `Sunday, 26 April` — `4pm` — `Shared plates, mellow playlist, slower end-of-week energy.` — `Taproom`
6. `Brewery Birthday Social` — `Friday, 1 May` — `6pm` — `Anniversary pours, throwback favorites, and special merch.` — `Special`

#### Weekend Rhythm Strip
- **Card 1 heading:** `Live Music Fridays`
- **Card 1 body:** `Acoustic-forward sets that suit the room and the view.`
- **Card 2 heading:** `Release Nights`
- **Card 2 body:** `Fresh seasonal pours introduced by the brewers themselves.`
- **Card 3 heading:** `Community Meet-Ups`
- **Card 3 body:** `Outdoor crowd energy, local regulars, and easy reasons to come back.`

#### Private Bookings CTA
- **Heading:** `Need space for your own gathering?`
- **Body:** `Talk to us about casual group bookings, celebrations, and brewery-centered private events.`
- **Button:** `Contact Us`

### Contact Page Content
#### Hero
- **Eyebrow:** `Contact`
- **Heading:** `Find the taproom. Send a note. Make a plan.`
- **Body:** `If you need hours, directions, booking help, or a quick answer before heading over, this is the page that gets it done.`

#### Quick Contact Cards
- `Call the taproom` — `+64 3 441 0284` — `For same-day questions and practical info.`
- `Email the team` — `hello@basecampbrewing.co.nz` — `For bookings, events, and general enquiries.`
- `Follow on Instagram` — `@basecampbrewingco` — `Tap updates, live music, and seasonal releases.`

#### Visit Details
- **Heading:** `Visit Basecamp Brewing Co.`
- **Address:** `14 Shotover View Road, Queenstown 9300, New Zealand`
- **Hours:**
  - `Monday–Thursday: 12pm–9pm`
  - `Friday: 12pm–10pm`
  - `Saturday: 11am–10pm`
  - `Sunday: 11am–8pm`
- **Phone:** `+64 3 441 0284`
- **Parking note:** `On-site parking available. Extra bike parking near the side entrance.`
- **Social line:** `Instagram: @basecampbrewingco`
- **Map placeholder note:** `Show a branded map embed placeholder here until live map is connected.`

#### Contact Form Labels
- `Name`
- `Email`
- `Message`
- **Optional hidden-ready fields if desired later:** `Phone`, `Reason for enquiry`
- **Submit button:** `Send Message`
- **Success message:** `Thanks. We’ll be in touch soon.`

#### FAQ
- `Do you take bookings?` — `Yes. Small walk-ins are always welcome, but larger groups should get in touch first.`
- `Is there live music every weekend?` — `Most weekends, yes. Check the Events page or Instagram for the current schedule.`
- `Do you have food?` — `Yes. We serve a focused food menu designed to work with the beer list.`
- `Can I bring kids?` — `Yes. The taproom is welcoming for casual group visits and mixed-age gatherings.`
- `Do you offer takeaway beer?` — `Yes, subject to current packaged availability in the taproom.`

## Image References
- Home hero — `https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1600&h=1100&fit=crop` — `1600x1100` — Snow-dusted mountain range under warm evening light — Home hero background
- Home beers support — `https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=900&h=700&fit=crop` — `900x700` — Stainless brewery tanks inside a working craft brewery — Featured beers section texture/support
- Home pour detail — `https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=800&h=900&fit=crop` — `800x900` — Beer being poured into a glass with foam rising — Featured beers visual accent
- Home sustainability — `https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&h=700&fit=crop` — `1400x700` — Layered mountain ridges with deep green valleys — Sustainability strip background
- Home events preview — `https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop` — `1200x800` — Crowd gathered at an intimate live music event — Events preview section
- Home taproom food — `https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&h=900&fit=crop` — `1200x900` — Shareable food plates and drinks on a timber table — Taproom snapshot
- Home taproom social — `https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&h=1000&fit=crop` — `1200x1000` — Warm bar interior with people talking over drinks — Taproom snapshot supporting image
- Home newsletter scenic — `https://images.unsplash.com/photo-1464822759844-d150ad6d1d07?w=900&h=700&fit=crop` — `900x700` — Alpine lake and mountain landscape under crisp light — Newsletter side image
- Beers hero — `https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1600&h=900&fit=crop` — `1600x900` — Hand holding a craft beer in moody light — Our Beers hero
- Beers grid support — `https://images.unsplash.com/photo-1571767454098-246b94fbcf70?w=1000&h=900&fit=crop` — `1000x900` — Beer tasting flight with several styles in glasses — Beer grid intro/support
- Beers seasonal — `https://images.unsplash.com/photo-1567696911980-2c5c4f2a9f81?w=1200&h=900&fit=crop` — `1200x900` — Dark beer poured beside malt and brewing ingredients — Seasonal spotlight
- Beers brewery action — `https://images.unsplash.com/photo-1544145945-f90425340c7e?w=1000&h=900&fit=crop` — `1000x900` — Bartender or brewer pouring from taps — Brewing approach support
- Beers brewhouse — `https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=800&fit=crop` — `1200x800` — Brewing tanks in a craft brewery production room — Brewing approach image
- Taproom hero — `https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&h=1400&fit=crop` — `1200x1400` — Rustic-modern restaurant and bar interior with warm lighting — Taproom hero
- Taproom gallery 1 — `https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=900&h=1100&fit=crop` — `900x1100` — Friends sitting together in a warmly lit bar — Taproom gallery
- Taproom gallery 2 — `https://images.unsplash.com/photo-1532635241-17e820acc59f?w=900&h=900&fit=crop` — `900x900` — Beer taps and bar counter close-up — Taproom gallery
- Taproom gallery 3 — `https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=900&h=1200&fit=crop` — `900x1200` — Outdoor patio dining area under hanging lights — Taproom gallery
- Taproom food — `https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&h=900&fit=crop` — `1200x900` — Elevated pub food with drinks on a wood table — Food highlights section
- Taproom region inset — `https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=800&fit=crop` — `1200x800` — Forested mountain landscape in golden light — Amenities/map section accent
- Events hero — `https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1600&h=900&fit=crop` — `1600x900` — Stage with instruments and concert lighting — Events hero
- Events feature — `https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1200&h=900&fit=crop` — `1200x900` — Acoustic musician performing in a small venue — Featured event
- Events list support — `https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop` — `1200x800` — Crowd at a live event under warm lighting — Upcoming events list support
- Events strip 1 — `https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1000&h=800&fit=crop` — `1000x800` — Group of friends at a concert or social gathering — Weekend rhythm card accent
- Events strip 2 — `https://images.unsplash.com/photo-1521334884684-d80222895322?w=1000&h=800&fit=crop` — `1000x800` — People raising drinks in a dimly lit venue — Weekend rhythm card accent
- Events private CTA — `https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1400&h=700&fit=crop` — `1400x700` — Long communal dining table prepared for a private gathering — Private bookings CTA background
- Contact hero — `https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&h=800&fit=crop` — `1600x800` — Scenic mountain road leading toward forest and peaks — Contact hero
- Contact inset forest — `https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&h=700&fit=crop` — `900x700` — Forest path through tall evergreen trees — Visit details inset
- Contact inset mountain — `https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=900&h=700&fit=crop` — `900x700` — Mountain range at sunset with layered ridgelines — Visit details scenic support
- Contact form image — `https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&h=1000&fit=crop` — `900x1000` — Coffee and notebook on a wooden table by a window — Contact form side image

## Logo & Favicon SVG

### Logo
```svg
<svg width="240" height="56" viewBox="0 0 240 56" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Basecamp Brewing Co.">
  <path d="M18 38L36 16L48 27L61 11L82 38H18Z" fill="#2D5016"/>
  <path d="M56 16C53 19 50 23 50 28C50 33 53 37 58 39C63 37 66 33 66 28C66 23 63 19 60 16L58 19L56 16Z" fill="#FFF8E7"/>
  <path d="M54 27H62" stroke="#2D5016" stroke-width="2" stroke-linecap="round"/>
  <path d="M55 31H61" stroke="#2D5016" stroke-width="2" stroke-linecap="round"/>
  <text x="94" y="25" fill="#1A1A1A" font-family="Oswald, sans-serif" font-size="24" font-weight="700" letter-spacing="0.04em">BASECAMP</text>
  <text x="94" y="46" fill="#B87333" font-family="Source Serif 4, serif" font-size="12" font-weight="600" letter-spacing="0.18em">BREWING CO.</text>
</svg>
```

### Favicon
```svg
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Basecamp Brewing Co. favicon">
  <path d="M32 10C26 16 22 23 22 32C22 41 27 48 32 54C37 48 42 41 42 32C42 23 38 16 32 10Z" fill="#2D5016"/>
  <path d="M26 28C29 26 35 26 38 28" stroke="#FFF8E7" stroke-width="3" stroke-linecap="round"/>
  <path d="M25 35C28 33 36 33 39 35" stroke="#FFF8E7" stroke-width="3" stroke-linecap="round"/>
  <path d="M28 42C30 41 34 41 36 42" stroke="#FFF8E7" stroke-width="3" stroke-linecap="round"/>
</svg>
```

## Responsive Notes
- **Mobile (<768px):** All split sections stack. Header becomes hamburger + drawer/dropdown. Beer filters scroll horizontally. Home beer carousel uses snap scrolling. Contact form side image hides. Event list rows convert to cards.
- **Tablet (768px–1023px):** Two-column layouts begin to appear. Beer grid runs 2 columns. Gallery may use staggered 2-column compromise. Footer becomes 2 columns + full-width legal row.
- **Desktop (1024px+):** Full hero compositions appear with floating info card. Beer grid expands to 3 columns. Gallery uses layered composition. Events page list stays spacious with date blocks aligned left.
- Keep heading wraps tight. Preserve visible mountain focal points in hero crops. Avoid over-compressing cards; this brand should feel premium-casual, not crowded.

## Structured Data Notes
Use JSON-LD with:
- `@type: LocalBusiness`
- Additional type/value indicating brewery or food-and-drink establishment
- Name, address, geo placeholder if needed, phone, opening hours, sameAs social links
- Home page can include core business schema
- Events page may include `Event` schema for featured/upcoming items if implemented dynamically
