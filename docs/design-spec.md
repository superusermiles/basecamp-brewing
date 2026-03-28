# Basecamp Brewing Co. — Design Spec

## Color Palette
```css
--primary: #2D5016;     /* alpine green / primary brand color, buttons, logo mark, emphasis */
--secondary: #B87333;   /* copper / accent metal tone for highlights, rules, badges, hover states */
--accent: #6E8B3D;      /* moss ridge / secondary accent for beer tags, subtle gradients, icons */
--background: #FFF8E7;  /* camp cream / main page background, warm and lightly aged */
--text: #1A1A1A;        /* charcoal / primary text, footer background, high-contrast UI */
--muted: #D8CDB8;       /* weathered parchment / cards, borders, quiet sections */
```

Palette direction: warm alpine lodge. The cream base keeps the site welcoming. The charcoal grounds it. Alpine green carries the outdoor identity. Copper adds brewery craft, taps, kettles, and campfire warmth.

## Typography
- **Heading font:** Oswald 700
- **Body font:** Source Serif 4 400/600

### Font Scale
- **h1:** 4rem / 64px, 700, 0.95 line-height
- **h2:** 3rem / 48px, 700, 1.0 line-height
- **h3:** 2rem / 32px, 700, 1.05 line-height
- **h4:** 1.5rem / 24px, 700, 1.15 line-height
- **body:** 1.125rem / 18px, 400, 1.7 line-height
- **small:** 1rem / 16px, 400, 1.6 line-height
- **caption:** 0.8125rem / 13px, 600, 1.4 line-height, uppercase with 0.08em tracking

Typography direction: condensed headers feel sturdy and trail-sign direct. The serif body copy softens the experience and gives the brewery a more handcrafted, story-rich feel.

## Spacing & Tokens
- **Border radius**
  - `--radius-sm: 6px`
  - `--radius-md: 12px`
  - `--radius-lg: 20px`
  - `--radius-xl: 32px`
- **Shadow system**
  - `--shadow-soft: 0 8px 24px rgba(26, 26, 26, 0.08)`
  - `--shadow-medium: 0 16px 40px rgba(26, 26, 26, 0.14)`
  - `--shadow-hard: 0 24px 64px rgba(26, 26, 26, 0.22)`
- **Section padding rhythm**
  - Mobile: `py-16`
  - Tablet: `md:py-20`
  - Desktop: `lg:py-28`
- **Container widths**
  - Standard content: `max-w-6xl`
  - Editorial text blocks: `max-w-3xl`
  - Full cinematic media bands: `max-w-none`

## Layout Architecture
- **Hero style:** Full-bleed alpine photo with dark gradient overlay, oversized stacked heading, compact intro copy, and a floating trail-map-style info card showing “On Tap / Bend, OR / Open Today.”
- **Navigation:** Transparent overlay on the hero that solidifies into a cream bar with a charcoal border on scroll. Wordmark left, pill-style links center/right, copper primary CTA.
- **Section rhythm:** Alternating immersive photo bands and structured content blocks. Home uses a lodge-journal flow: cinematic intro, beer cards, taproom story, events strip, then practical visit CTA. Inner pages use bold page headers followed by mixed two-column and card-grid sections.
- **Footer:** Deep charcoal band with cream text, copper dividers, stacked contact details, quick links, social line, and a compact trail-inspired closing statement.
- **Overall density:** Medium density. Strong imagery and roomy hero, then information-rich but still breathable content blocks.

## Page-by-Page Layout

### Home
**Section order:** Hero → Featured Beers → Taproom Story → Upcoming Events → Visit CTA → Footer

1. **Hero**
   - Two-layer layout: full-bleed background image, left-aligned text block, lower-right floating status card
   - Content: eyebrow “Bend, Oregon”, H1, short brand statement, two CTAs (“Explore the Beers”, “Visit the Taproom”)
   - Mobile: image remains full-bleed, content stacks with shorter line length, floating card moves below CTAs
   - Image: `https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?w=1600&h=1100&fit=crop`

2. **Featured Beers**
   - 3-column card grid on desktop, single column on mobile
   - Each card includes beer name, style, ABV, tasting note, availability badge
   - Cards use muted parchment background with copper top rule
   - Supporting image above grid: `https://images.unsplash.com/photo-1563379091339-03246963d96c?w=1200&h=800&fit=crop`
   - Secondary inset image on mobile/desktop edge: `https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=800&h=900&fit=crop`

3. **Taproom Story**
   - Split layout: large image left, text and amenity list right
   - Content: atmosphere copy, lodge-inspired details, food pairing note
   - Mobile: image on top, text below
   - Image: `https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&h=1000&fit=crop`

4. **Upcoming Events**
   - Horizontal timeline cards with dates in copper boxes
   - Desktop: 3-up row, mobile: swipeable stacked cards
   - Includes event name, one-line description, time, CTA
   - Background image band behind section header: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&h=700&fit=crop`

5. **Visit CTA**
   - Asymmetric block with map/info card on left and image on right
   - Content: hours, address, parking note, CTA to contact page
   - Mobile: info first, image second
   - Image: `https://images.unsplash.com/photo-1528825871115-3581a5387919?w=1200&h=900&fit=crop`

### Our Beers
**Section order:** Page Hero → Core Lineup → Seasonal Releases → Brewing Philosophy → Beer Finder CTA

1. **Page Hero**
   - Wide banner with charcoal overlay, title left, short intro right
   - Mobile: stack title over intro
   - Image: `https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1600&h=900&fit=crop`

2. **Core Lineup**
   - 2-column grid of featured beer profiles, each with text left and bottle/can/glass image right
   - Mobile: vertical cards
   - Image references: `https://images.unsplash.com/photo-1571767454098-246b94fbcf70?w=1000&h=900&fit=crop`, `https://images.unsplash.com/photo-1544145945-f90425340c7e?w=1000&h=900&fit=crop`

3. **Seasonal Releases**
   - Bento grid with larger feature release and smaller rotating cards
   - Includes “available now” tags and tasting descriptors
   - Image: `https://images.unsplash.com/photo-1567696911980-2c5c4f2a9f81?w=1200&h=900&fit=crop`

4. **Brewing Philosophy**
   - Editorial single-column text with pull quote and supportive brewhouse image
   - Image: `https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=800&fit=crop`

5. **Beer Finder CTA**
   - Compact centered CTA panel with copper button and dark background
   - Optional supporting texture image: `https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1000&h=700&fit=crop`

### The Taproom
**Section order:** Page Hero → Atmosphere Gallery → Food & Pairings → Amenities → Visit Details

1. **Page Hero**
   - Split hero with intro copy and tall portrait image
   - Image: `https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&h=1400&fit=crop`

2. **Atmosphere Gallery**
   - Masonry-inspired 3-image layout with varying aspect ratios
   - Images: `https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=900&h=1100&fit=crop`, `https://images.unsplash.com/photo-1532635241-17e820acc59f?w=900&h=900&fit=crop`, `https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=900&h=1200&fit=crop`

3. **Food & Pairings**
   - Two-column text + menu-highlight cards
   - Supporting image: `https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&h=900&fit=crop`

4. **Amenities**
   - Icon grid: dog-friendly patio, bike racks, firepit seating, private bookings
   - Background texture or subtle topo pattern, no large image required

5. **Visit Details**
   - Practical info band with hours, address, map embed placeholder, accessibility note
   - Mobile: stacked cards
   - Image: `https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=800&fit=crop`

### Events
**Section order:** Page Hero → Featured Event → Event Calendar Grid → Community Nights → Private Events CTA

1. **Page Hero**
   - Dark, moody background with copper date motif
   - Image: `https://images.unsplash.com/photo-1511578314322-379afb476865?w=1600&h=900&fit=crop`

2. **Featured Event**
   - Large two-column spotlight card with image and event details
   - Image: `https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1200&h=900&fit=crop`

3. **Event Calendar Grid**
   - 3-column card layout desktop, single column mobile
   - Date chip, title, body, time, CTA link
   - Supporting image on section intro: `https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop`

4. **Community Nights**
   - Alternating media/text rows for trivia, live music, trail club
   - Images: `https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1000&h=800&fit=crop`, `https://images.unsplash.com/photo-1521334884684-d80222895322?w=1000&h=800&fit=crop`

5. **Private Events CTA**
   - Centered band with short copy and button to Contact
   - Background image: `https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1400&h=700&fit=crop`

### Contact
**Section order:** Page Hero → Contact Methods → Visit Info + Map → Contact Form → FAQ

1. **Page Hero**
   - Compact hero with title, intro, and scenic background crop
   - Image: `https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&h=800&fit=crop`

2. **Contact Methods**
   - 3-up cards for call, email, Instagram
   - Mobile: stack cards
   - No photo needed

3. **Visit Info + Map**
   - Two-column card layout with address/hours on left and map placeholder on right
   - Supporting image as small scenic inset: `https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&h=700&fit=crop`

4. **Contact Form**
   - Single-column form in cream card with charcoal labels and copper submit button
   - Fields: name, email, phone, reason for inquiry, message
   - Optional side image desktop only: `https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&h=1000&fit=crop`

5. **FAQ**
   - Accordion list for parking, reservations, dog policy, private events, merchandise pickup
   - Mobile: full-width stacked accordions
   - Background texture only

## Logo Design
- **Concept:** Icon + wordmark. A mountain peak silhouette forms the top line. A simplified hop cone is cut into the summit so the negative space reads as both alpine ridge and brewing ingredient.

### SVG code
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

### Color variants
- **Primary (on light):** Alpine green icon, charcoal wordmark, copper subline
- **Reversed (on dark):** Cream icon/wordmark with copper subline on charcoal or green backgrounds
- **Monochrome:** Single-color charcoal or cream for stamps, embossing, and small-format print use

### Usage
- Minimum full logo width: `120px`
- Minimum icon-only width: `24px`
- Clear space: at least the height of the hop cone on all sides
- Avoid placing over busy image zones without a dark overlay or cream badge

## Favicon Design
- **Concept:** Simplified hop cone only, geometric and bold enough to read at 16×16. No wordmark.

### SVG code
```svg
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Basecamp Brewing Co. favicon">
  <path d="M32 10C26 16 22 22 22 31C22 40 27 47 32 54C37 47 42 40 42 31C42 22 38 16 32 10Z" fill="#2D5016"/>
  <path d="M26 27C29 25 35 25 38 27" stroke="#FFF8E7" stroke-width="3" stroke-linecap="round"/>
  <path d="M25 34C28 32 36 32 39 34" stroke="#FFF8E7" stroke-width="3" stroke-linecap="round"/>
  <path d="M28 41C30 40 34 40 36 41" stroke="#FFF8E7" stroke-width="3" stroke-linecap="round"/>
</svg>
```

### Colors
- Alpine green `#2D5016` on transparent background with cream line detail

## Image Plan
All images should feel outdoorsy, tactile, and warm. Favor natural light, rich amber tones, pine greens, mountain textures, and documentary-style brewery moments.

### Home
- Hero: `https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?w=1600&h=1100&fit=crop`
  - Alt: Mountain lodge exterior at dusk in a forested setting
  - Mood: cinematic, rugged, welcoming
- Beer section feature: `https://images.unsplash.com/photo-1563379091339-03246963d96c?w=1200&h=800&fit=crop`
  - Alt: Freshly poured craft beers lined up on a wooden bar
  - Mood: amber tones, social, textured
- Beer detail inset: `https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=800&h=900&fit=crop`
  - Alt: Close-up of beer being poured into a glass
  - Mood: tactile, foamy, intimate
- Taproom story: `https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&h=1000&fit=crop`
  - Alt: Warm brewery interior with patrons gathered at tables
  - Mood: convivial, lodge-like
- Events band: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&h=700&fit=crop`
  - Alt: Rustic food and drinks spread on a communal table
  - Mood: communal, celebratory
- Visit CTA: `https://images.unsplash.com/photo-1528825871115-3581a5387919?w=1200&h=900&fit=crop`
  - Alt: Friends gathered outdoors with mountain scenery nearby
  - Mood: destination-driven, relaxed

### Our Beers
- Header: `https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1600&h=900&fit=crop`
  - Alt: Hand holding a cold craft beer against a dark backdrop
  - Mood: bold, focused
- Lineup image 1: `https://images.unsplash.com/photo-1571767454098-246b94fbcf70?w=1000&h=900&fit=crop`
  - Alt: Assorted craft beer glasses on a tasting flight
  - Mood: exploratory, artisanal
- Lineup image 2: `https://images.unsplash.com/photo-1544145945-f90425340c7e?w=1000&h=900&fit=crop`
  - Alt: Bartender serving beer from tap handles
  - Mood: authentic, in-action
- Seasonal releases: `https://images.unsplash.com/photo-1567696911980-2c5c4f2a9f81?w=1200&h=900&fit=crop`
  - Alt: Dark beer poured beside brewing ingredients
  - Mood: seasonal, rich
- Brewing philosophy: `https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=800&fit=crop`
  - Alt: Brewing tanks inside a craft brewery production space
  - Mood: serious craft, behind-the-scenes
- CTA texture: `https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1000&h=700&fit=crop`
  - Alt: Pine forest with filtered light
  - Mood: alpine, grounding

### The Taproom
- Hero: `https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&h=1400&fit=crop`
  - Alt: Stylish rustic restaurant and bar interior with warm lighting
  - Mood: lodge warmth, premium casual
- Gallery 1: `https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=900&h=1100&fit=crop`
  - Alt: Friends talking across a table in a warmly lit bar
  - Mood: social, candid
- Gallery 2: `https://images.unsplash.com/photo-1532635241-17e820acc59f?w=900&h=900&fit=crop`
  - Alt: Beer taps and bar counter detail
  - Mood: tactile, polished rustic
- Gallery 3: `https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=900&h=1200&fit=crop`
  - Alt: Outdoor patio dining area under string lights
  - Mood: relaxed, inviting
- Food section: `https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&h=900&fit=crop`
  - Alt: Elevated pub food served on wooden table with drinks
  - Mood: hearty, shareable
- Visit details: `https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=800&fit=crop`
  - Alt: Pine-covered mountain landscape at golden hour
  - Mood: scenic, regional sense of place

### Events
- Hero: `https://images.unsplash.com/photo-1511578314322-379afb476865?w=1600&h=900&fit=crop`
  - Alt: Live event crowd under warm string lights
  - Mood: energetic, intimate
- Featured event: `https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1200&h=900&fit=crop`
  - Alt: Acoustic musician performing in a small venue
  - Mood: local, atmospheric
- Calendar intro: `https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop`
  - Alt: Stage setup with instruments and lights
  - Mood: anticipation, live music
- Community nights 1: `https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1000&h=800&fit=crop`
  - Alt: Group of friends at an indoor concert or social event
  - Mood: lively, communal
- Community nights 2: `https://images.unsplash.com/photo-1521334884684-d80222895322?w=1000&h=800&fit=crop`
  - Alt: People clinking drinks in a dimly lit venue
  - Mood: celebratory, welcoming
- Private events CTA: `https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1400&h=700&fit=crop`
  - Alt: Long communal table set for a private gathering
  - Mood: hosted, warm

### Contact
- Hero: `https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&h=800&fit=crop`
  - Alt: Scenic mountain road leading toward a forested horizon
  - Mood: directional, adventurous
- Visit inset: `https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&h=700&fit=crop`
  - Alt: Forest trail through tall evergreen trees
  - Mood: calm, local texture
- Form side image: `https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&h=1000&fit=crop`
  - Alt: Coffee and journal on a wood table near a window
  - Mood: approachable, conversational

## Interaction & Motion
- Buttons lift by 2px on hover with slightly deeper shadow; copper buttons brighten to `#C9854D`
- Navigation solidifies on scroll and adds subtle backdrop blur
- Beer cards animate in with short upward fade on scroll; stagger by 80ms
- Event cards reveal a copper date border on hover
- Image blocks use slow scale-to-102 hover on desktop only
- FAQ accordion uses smooth height + opacity transition
- Page transitions should be quick fades, under 250ms, to preserve snappy feel
- Loading states: skeleton bars in muted parchment with soft pulse
- Micro-interactions: rotating compass-arrow icon on CTA hover, tap list badges that invert colors when selected
