# Basecamp Brewing Co. — Design Spec

## Color Palette
```css
--primary: #2D5016;     /* alpine green / core brand, buttons, logo, active states */
--secondary: #B87333;   /* copper / highlights, dividers, badges, icon accents */
--accent: #6F7C4B;      /* glacier moss / secondary fills, filter chips, subtle overlays */
--background: #FFF8E7;  /* cream / primary page background, cards on dark sections */
--text: #1A1A1A;        /* charcoal / main text, footer base, overlays */
--muted: #D9D1BF;       /* weathered oat / soft panels, borders, skeleton states */
```

Palette direction: alpine lodge without feeling old-fashioned. Cream keeps it hospitable. Charcoal gives weight. Alpine green owns the brand. Copper adds warmth like taps, kettles, and sunset on rock. Moss lets filter states and supporting UI feel outdoorsy without adding noise.

## Typography
- **Heading font:** Oswald 700
- **Body font:** Source Serif 4 400/600

### Font Scale
- **h1:** 4.5rem / 72px, 700, 0.92 line-height
- **h2:** 3.25rem / 52px, 700, 0.98 line-height
- **h3:** 2.25rem / 36px, 700, 1.02 line-height
- **h4:** 1.5rem / 24px, 700, 1.12 line-height
- **body:** 1.125rem / 18px, 400, 1.7 line-height
- **small:** 1rem / 16px, 400, 1.6 line-height
- **caption:** 0.8125rem / 13px, 600, 0.12em tracking, uppercase

Typography direction: bold condensed headings feel like trail signage and can labels. The serif body copy brings warmth and craft credibility. The pairing makes the site feel sturdy, literate, and regional rather than slick-tech.

## Spacing & Tokens
- **Border radius system**
  - `sm: 6px`
  - `md: 12px`
  - `lg: 20px`
  - `xl: 32px`
- **Shadow system**
  - `soft: 0 8px 24px rgba(26, 26, 26, 0.08)`
  - `medium: 0 18px 42px rgba(26, 26, 26, 0.14)`
  - `hard: 0 28px 72px rgba(26, 26, 26, 0.22)`
- **Section padding rhythm**
  - Mobile: `py-16`
  - Tablet: `md:py-20`
  - Desktop: `lg:py-28`
- **Container system**
  - Standard: `max-w-6xl`
  - Narrow editorial: `max-w-3xl`
  - Wide media rail: `max-w-7xl`

## Layout Architecture
- **Hero style:** Full-bleed mountain-and-taproom image with a charcoal-to-transparent gradient, oversized stacked headline, short body copy, twin CTAs, and a floating “Today at Basecamp” status panel. The panel feels like a hut noticeboard card.
- **Navigation:** Transparent top bar over hero. On scroll it becomes a cream sticky bar with a thin charcoal border and subtle blur. Desktop nav uses compact pill-style links. Mobile uses a full-width dropdown panel with copper CTA.
- **Section rhythm:** Alternates between cream content blocks, dark charcoal feature bands, and image-led breaks. Home uses a cinematic intro then settles into card-based storytelling. Inner pages mix editorial splits, filter controls, gallery rails, and dense info cards.
- **Footer:** Dark contrasting band with cream text, copper dividers, quick links, practical visit info, newsletter field, and a short closing line.
- **Overall density:** Medium-dense. Plenty of visual breathing room in the hero and gallery sections, but information-rich cards where users need practical details.

## Page-by-Page Layout

### Home
**Section order:** Hero → Featured Beers Carousel → Sustainability Strip → Upcoming Events Preview → Taproom Snapshot → Newsletter Signup → Footer

1. **Hero**
   - Full-bleed image with left-aligned content block and right-lower floating status card
   - Content: eyebrow “Queenstown, New Zealand”, H1, supporting paragraph, primary CTA, secondary CTA
   - Floating card: open hours prompt, weekend live music note, rotating taps count
   - Mobile: content stacks; floating card drops below CTAs and spans full width
   - Image: `https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1600&h=1100&fit=crop`

2. **Featured Beers Carousel**
   - Horizontal snap carousel on mobile, 3 visible cards with partial next-card reveal on desktop
   - Each card includes label-art placeholder block, beer name, style, ABV, tasting notes, and filter chip color
   - Small section intro on left, carousel controls on right desktop
   - Supporting image rail behind intro edge for texture
   - Images: `https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=900&h=700&fit=crop`, `https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=800&h=900&fit=crop`

3. **Sustainability Strip**
   - Full-width charcoal band with three icon-backed columns
   - Content: local ingredients, water-conscious brewing, spent grain donated to local farms
   - Mobile: stack cards with copper dividers
   - Background texture image: `https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&h=700&fit=crop`

4. **Upcoming Events Preview**
   - Two-column layout: intro and CTA left, stacked event cards right
   - Event cards show date block, event name, time, one-line description
   - Mobile: intro first, cards in vertical list
   - Image: `https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop`

5. **Taproom Snapshot**
   - Asymmetric split with tall gallery image on left and practical details on right
   - Content: opening hours, food highlights, mountain-view note, “See the Taproom” CTA
   - Mobile: image above; practical info becomes bordered cards
   - Images: `https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&h=900&fit=crop`, `https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&h=1000&fit=crop`

6. **Newsletter Signup**
   - Centered copper-outlined panel over cream background with scenic image crop to one side on desktop
   - Includes heading, short value proposition, email field, submit button, privacy note
   - Mobile: single column, no side image crop
   - Image: `https://images.unsplash.com/photo-1464822759844-d150ad6d1d07?w=900&h=700&fit=crop`

### Our Beers
**Section order:** Page Hero → Filter Bar + Beer Grid → Seasonal Spotlight → Brewing Approach → Visit CTA

1. **Page Hero**
   - Wide banner with dark overlay and left-aligned heading block
   - Includes short page intro and note about accessibility of tasting notes
   - Mobile: tighter crop and shorter text width
   - Image: `https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1600&h=900&fit=crop`

2. **Filter Bar + Beer Grid**
   - Sticky chip filter row below hero: All, Lager, Pale Ale, IPA, Stout, Seasonal
   - Responsive grid: 1 column mobile, 2 tablet, 3 desktop
   - Each beer card includes label-art placeholder illustration block, style chip, ABV, tasting notes, and short “best after” serving moment
   - Mobile: filters scroll horizontally
   - Images inside cards are placeholders; page supporting image near intro: `https://images.unsplash.com/photo-1571767454098-246b94fbcf70?w=1000&h=900&fit=crop`

3. **Seasonal Spotlight**
   - Two-column split: feature release card left, stacked supporting seasonals right
   - Emphasis on scarcity and Queenstown seasonality
   - Mobile: feature on top, stacked cards below
   - Image: `https://images.unsplash.com/photo-1567696911980-2c5c4f2a9f81?w=1200&h=900&fit=crop`

4. **Brewing Approach**
   - Editorial text block with brewhouse image and sustainability callout card
   - Content: local ingredients, mountain water story, spent grain donation
   - Mobile: image first, then text and callout
   - Images: `https://images.unsplash.com/photo-1544145945-f90425340c7e?w=1000&h=900&fit=crop`, `https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=800&fit=crop`

5. **Visit CTA**
   - Dark charcoal band with centered heading, short body copy, copper button
   - Optional topo-line pattern background
   - No additional large image required

### The Taproom
**Section order:** Page Hero → Photo Gallery → Opening Hours + Food Highlights → Amenities + Map Placeholder → Closing CTA

1. **Page Hero**
   - Split layout with text left and tall image right
   - Content focuses on mountain views, relaxed energy, and live-music weekends
   - Mobile: image collapses above text
   - Image: `https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&h=1400&fit=crop`

2. **Photo Gallery**
   - Three-image staggered gallery with one large landscape and two stacked portraits
   - Captures bar warmth, food, and social atmosphere
   - Mobile: transforms into swipeable stacked cards
   - Images: `https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=900&h=1100&fit=crop`, `https://images.unsplash.com/photo-1532635241-17e820acc59f?w=900&h=900&fit=crop`, `https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=900&h=1200&fit=crop`

3. **Opening Hours + Food Highlights**
   - Two-column layout with timetable card left and menu highlights right
   - Includes 3 food cards with pairing notes
   - Mobile: hours first, food cards below
   - Image: `https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&h=900&fit=crop`

4. **Amenities + Map Placeholder**
   - Left side amenity icon grid, right side boxed embed placeholder for map/location
   - Supporting text mentions walking access, parking, and views
   - Mobile: map box below amenities
   - Image inset: `https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=800&fit=crop`

5. **Closing CTA**
   - Cream card over charcoal background with “Come in after the climb” message and button to Contact
   - No large image

### Events
**Section order:** Page Hero → Featured Event → Upcoming Events List → Weekend Rhythm Strip → Private Bookings CTA

1. **Page Hero**
   - Dark, moody image with copper date-chip motif layered over it
   - Short intro about live music, releases, and community nights
   - Mobile: simplified composition, single text column
   - Image: `https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1600&h=900&fit=crop`

2. **Featured Event**
   - Large horizontal feature card with event image left and details right
   - Includes date, time, description, and CTA
   - Mobile: image top, details below
   - Image: `https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1200&h=900&fit=crop`

3. **Upcoming Events List**
   - Clean vertical list rather than a busy grid
   - Each row: date block, event title, summary, time, and optional category tag
   - Mobile: rows stack into cards with date chip at top left
   - Supporting image: `https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop`

4. **Weekend Rhythm Strip**
   - Three equal cards: Live Music Fridays, Release Nights, Community Meetups
   - Background uses charcoal with subtle gradient and copper icon rings
   - Mobile: swipeable cards
   - Image accents: `https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1000&h=800&fit=crop`, `https://images.unsplash.com/photo-1521334884684-d80222895322?w=1000&h=800&fit=crop`

5. **Private Bookings CTA**
   - Centered panel with button to contact page
   - Scenic background image faded under overlay
   - Image: `https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1400&h=700&fit=crop`

### Contact
**Section order:** Page Hero → Quick Contact Cards → Visit Details + Map Placeholder → Contact Form → FAQ

1. **Page Hero**
   - Compact scenic hero with title and practical intro copy
   - Mobile: reduced height with strong overlay
   - Image: `https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&h=800&fit=crop`

2. **Quick Contact Cards**
   - Three cards for phone, email, Instagram
   - Each card includes icon, primary text, supporting line
   - Mobile: single column stack
   - No photo required

3. **Visit Details + Map Placeholder**
   - Two-column card block: address/hours/social left, map embed placeholder right
   - Scenic inset tucked into lower edge on desktop
   - Mobile: stack cards and keep map placeholder full-width
   - Images: `https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&h=700&fit=crop`, `https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=900&h=700&fit=crop`

4. **Contact Form**
   - Single-column form card with clear labels and generous field spacing
   - Optional side image on desktop only for warmth
   - Mobile: form only
   - Image: `https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&h=1000&fit=crop`

5. **FAQ**
   - Simple accordion list with copper chevrons
   - Covers dogs, bookings, parking, takeaways, live music
   - Background texture only

## Logo Design
- **Concept:** Icon + wordmark. A mountain silhouette forms the upper shape while a simplified hop cone is cut into the summit, making the mark read as both alpine peak and brewing ingredient.

### SVG code
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

### Color variants
- **Primary (on light):** Alpine green icon, charcoal wordmark, copper subline
- **Reversed (on dark):** Cream icon and wordmark with copper subline on charcoal background
- **Monochrome:** Single-color alpine green or cream for embossing, stamps, and favicon-adjacent uses

### Usage
- Minimum full logo width: `120px`
- Minimum icon-only width: `24px`
- Clear space: at least the width of the hop cone body around all sides
- Avoid low-contrast placement over detailed photography unless a dark overlay or cream badge sits behind it

## Favicon Design
- **Concept:** Simplified hop cone. No text. Bold enough to stay legible at 16×16.

### SVG code
```svg
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Basecamp Brewing Co. favicon">
  <path d="M32 10C26 16 22 23 22 32C22 41 27 48 32 54C37 48 42 41 42 32C42 23 38 16 32 10Z" fill="#2D5016"/>
  <path d="M26 28C29 26 35 26 38 28" stroke="#FFF8E7" stroke-width="3" stroke-linecap="round"/>
  <path d="M25 35C28 33 36 33 39 35" stroke="#FFF8E7" stroke-width="3" stroke-linecap="round"/>
  <path d="M28 42C30 41 34 41 36 42" stroke="#FFF8E7" stroke-width="3" stroke-linecap="round"/>
</svg>
```

### Colors
- Alpine green `#2D5016` with cream line detail on transparent background

## Image Plan
Image direction: real Queenstown-adjacent alpine mood, warm natural light, textured wood, amber beer tones, and social scenes that feel relaxed instead of nightlife-club polished.

### Home
- Hero: `https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1600&h=1100&fit=crop`
  - Alt: Snow-dusted mountain range under warm evening light
  - Mood/style: expansive Southern Alps energy, cinematic, high-altitude calm
- Featured beers texture: `https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=900&h=700&fit=crop`
  - Alt: Stainless brewery tanks inside a working craft brewery
  - Mood/style: real production credibility, cool metal against warm palette
- Pour detail: `https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=800&h=900&fit=crop`
  - Alt: Beer being poured into a glass with foam rising
  - Mood/style: tactile, close-up, appetizing
- Sustainability strip background: `https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&h=700&fit=crop`
  - Alt: Layered mountain ridges with deep green valleys
  - Mood/style: regional, natural, grounded
- Events preview: `https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop`
  - Alt: Crowd gathered at an intimate live music event
  - Mood/style: warm, social, weekend energy
- Taproom food highlight: `https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&h=900&fit=crop`
  - Alt: Shareable food plates and drinks on a timber table
  - Mood/style: hearty, communal, welcoming
- Taproom social image: `https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&h=1000&fit=crop`
  - Alt: Warm bar interior with people talking over drinks
  - Mood/style: lodge-like, lived-in, friendly
- Newsletter scenic image: `https://images.unsplash.com/photo-1464822759844-d150ad6d1d07?w=900&h=700&fit=crop`
  - Alt: Alpine lake and mountain landscape under crisp light
  - Mood/style: fresh air, destination feel

### Our Beers
- Hero: `https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1600&h=900&fit=crop`
  - Alt: Hand holding a craft beer in moody light
  - Mood/style: bold, intimate, product-forward
- Grid support image: `https://images.unsplash.com/photo-1571767454098-246b94fbcf70?w=1000&h=900&fit=crop`
  - Alt: Beer tasting flight with several styles in glasses
  - Mood/style: variety, discovery, approachable craft
- Seasonal spotlight: `https://images.unsplash.com/photo-1567696911980-2c5c4f2a9f81?w=1200&h=900&fit=crop`
  - Alt: Dark beer poured beside malt and brewing ingredients
  - Mood/style: rich, seasonal, sensory
- Brewery action: `https://images.unsplash.com/photo-1544145945-f90425340c7e?w=1000&h=900&fit=crop`
  - Alt: Bartender or brewer pouring from taps
  - Mood/style: active service, authentic brewery scene
- Brewhouse: `https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=800&fit=crop`
  - Alt: Brewing tanks in a craft brewery production room
  - Mood/style: serious process, polished but real

### The Taproom
- Hero: `https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&h=1400&fit=crop`
  - Alt: Rustic-modern restaurant and bar interior with warm lighting
  - Mood/style: lodge bar meets contemporary brewery
- Gallery image 1: `https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=900&h=1100&fit=crop`
  - Alt: Friends sitting together in a warmly lit bar
  - Mood/style: candid, relaxed, social
- Gallery image 2: `https://images.unsplash.com/photo-1532635241-17e820acc59f?w=900&h=900&fit=crop`
  - Alt: Beer taps and bar counter close-up
  - Mood/style: tactile, polished, detail-rich
- Gallery image 3: `https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=900&h=1200&fit=crop`
  - Alt: Outdoor patio dining area under hanging lights
  - Mood/style: welcoming, evening-ready, scenic hospitality
- Food section: `https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&h=900&fit=crop`
  - Alt: Elevated pub food with drinks on a wood table
  - Mood/style: satisfying, shareable, premium-casual
- Map/region inset: `https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=800&fit=crop`
  - Alt: Forested mountain landscape in golden light
  - Mood/style: place-driven, scenic, local identity

### Events
- Hero: `https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1600&h=900&fit=crop`
  - Alt: Stage with instruments and concert lighting
  - Mood/style: anticipatory, atmospheric, intimate music energy
- Featured event: `https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1200&h=900&fit=crop`
  - Alt: Acoustic musician performing in a small venue
  - Mood/style: local, genuine, taproom-scale performance
- Events list support: `https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop`
  - Alt: Crowd at a live event under warm lighting
  - Mood/style: community, movement, low-key buzz
- Rhythm strip 1: `https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1000&h=800&fit=crop`
  - Alt: Group of friends at a concert or social gathering
  - Mood/style: communal, energetic, youthful-adult
- Rhythm strip 2: `https://images.unsplash.com/photo-1521334884684-d80222895322?w=1000&h=800&fit=crop`
  - Alt: People raising drinks in a dimly lit venue
  - Mood/style: celebratory, warm, evening atmosphere
- Private bookings CTA: `https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1400&h=700&fit=crop`
  - Alt: Long communal dining table prepared for a private gathering
  - Mood/style: hosted, convivial, polished rustic

### Contact
- Hero: `https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&h=800&fit=crop`
  - Alt: Scenic mountain road leading toward forest and peaks
  - Mood/style: directional, adventurous, journey-driven
- Visit inset: `https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&h=700&fit=crop`
  - Alt: Forest path through tall evergreen trees
  - Mood/style: grounded, outdoorsy, local texture
- Additional scenic inset: `https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=900&h=700&fit=crop`
  - Alt: Mountain range at sunset with layered ridgelines
  - Mood/style: alpine identity, dramatic but clean
- Form side image: `https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&h=1000&fit=crop`
  - Alt: Coffee and notebook on a wooden table by a window
  - Mood/style: approachable, conversational, human

## Interaction & Motion
- Buttons lift `-2px` on hover and deepen shadow slightly; copper buttons brighten to `#C9854D`
- Navigation background transitions from transparent to cream with a subtle blur after the hero scroll threshold
- Beer filter chips invert from cream to green with copper outline on active state
- Carousel cards use snap scrolling on mobile and gentle translate-on-hover on desktop
- Event rows animate in with short upward fades as they enter viewport
- Gallery images scale to `1.02` on hover desktop only
- FAQ accordion uses fast height and opacity transitions with rotating chevron
- Newsletter submit button shows inline loading spinner with muted-to-copper pulse
- Page transitions should stay under 250ms and feel clean, not theatrical
