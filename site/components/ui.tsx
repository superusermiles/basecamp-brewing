"use client";

import Link from "next/link";
import { ReactNode, useMemo, useState } from "react";
import { clsx } from "clsx";
import {
  Beer,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Droplets,
  Leaf,
  MapPin,
  Music2,
  ParkingCircle,
  PhoneCall,
  Trees,
  Users,
  UtensilsCrossed,
  Wheat,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import type { Beer as BeerItem, EventItem } from "@/lib/site-data";
import { StructuredData as StructuredDataScript } from "@/components/structured-data";

export function StructuredData({ data }: { data: Record<string, unknown> | Array<Record<string, unknown>> }) {
  return <StructuredDataScript data={data} />;
}

export function SectionIntro({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={clsx("space-y-4", align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl")}>
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">{eyebrow}</p> : null}
      <h2 className="font-heading text-4xl uppercase leading-[0.98] text-text sm:text-5xl lg:text-[3.25rem]">{title}</h2>
      {body ? <p className="text-lg leading-8 text-text/78">{body}</p> : null}
    </div>
  );
}

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1600&h=1100&fit=crop"
        alt="Queenstown craft brewery setting with snow-dusted alpine mountains behind Basecamp Brewing Co."
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative mx-auto grid min-h-[88svh] max-w-7xl items-end gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.7fr] lg:px-8 lg:py-28">
        <div className="max-w-3xl pb-2 text-background lg:pb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Queenstown, New Zealand</p>
          <h1 className="prose-balance mt-5 font-heading text-5xl uppercase leading-[0.92] sm:text-6xl lg:text-[4.5rem]">Queenstown craft brewery for alpine beer and taproom sessions.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-background/86">
            Basecamp Brewing Co. brews small-batch beer inspired by the Southern Alps and pours it in a Queenstown taproom built for locals, visitors, and anyone coming down from a day outside.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/our-beers/" className="rounded-full bg-secondary px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.14em] text-background shadow-soft transition hover:-translate-y-0.5 hover:bg-[#c9854d]">
              Explore Our Beers
            </Link>
            <Link href="/the-taproom/" className="rounded-full border border-background/25 bg-white/8 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.14em] text-background transition hover:-translate-y-0.5 hover:border-secondary hover:bg-white/12">
              See the Taproom
            </Link>
          </div>
        </div>
        <aside className="w-full rounded-[32px] border border-white/12 bg-background p-6 text-text shadow-hard lg:mb-10 lg:justify-self-end">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">Today at Basecamp</p>
          <ul className="mt-5 space-y-4">
            {["10 taps pouring now", "Live music every weekend", "Mountain views from the taproom"].map((item) => (
              <li key={item} className="flex items-start gap-3 border-b border-text/8 pb-4 last:border-none last:pb-0">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                <span className="text-base leading-7 text-text/80">{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

function beerTone(style: string) {
  switch (style) {
    case "Lager":
      return "from-secondary/75 to-background";
    case "Pale Ale":
      return "from-accent to-background";
    case "IPA":
      return "from-primary to-accent";
    case "Stout":
      return "from-text to-secondary/60";
    default:
      return "from-secondary to-accent";
  }
}

export function BeerCard({ beer }: { beer: BeerItem }) {
  return (
    <article className="flex h-full flex-col rounded-[20px] border border-text/8 bg-background p-5 shadow-soft transition duration-200 hover:-translate-y-1 hover:shadow-medium">
      <div className={clsx("relative h-40 overflow-hidden rounded-[20px] bg-gradient-to-br", beerTone(beer.style))}>
        <div className="absolute inset-5 rounded-[18px] border border-background/45" />
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
          <span className="rounded-full border border-background/50 bg-text/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-background">{beer.style}</span>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-background/80">{beer.abv}</span>
        </div>
      </div>
      <div className="mt-5 flex flex-1 flex-col">
        <h3 className="font-heading text-3xl uppercase leading-none text-text">{beer.name}</h3>
        <p className="mt-3 text-base leading-7 text-text/78">{beer.notes}</p>
        <div className="mt-5 space-y-2 text-sm text-text/70">
          <p>
            <span className="font-semibold text-primary">Best after:</span> {beer.moment}
          </p>
          {beer.availability ? (
            <p>
              <span className="font-semibold text-primary">Availability:</span> {beer.availability}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function BeerCarousel({ items }: { items: BeerItem[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false, dragFree: true });

  return (
    <div className="space-y-6">
      <div className="hidden justify-end gap-3 md:flex">
        <button type="button" onClick={() => emblaApi?.scrollPrev()} className="rounded-full border border-text/10 p-3 transition hover:border-secondary hover:text-primary" aria-label="Previous beers">
          <ChevronLeft />
        </button>
        <button type="button" onClick={() => emblaApi?.scrollNext()} className="rounded-full border border-text/10 p-3 transition hover:border-secondary hover:text-primary" aria-label="Next beers">
          <ChevronRight />
        </button>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5">
          {items.map((beer) => (
            <div key={beer.name} className="min-w-0 flex-[0_0_88%] sm:flex-[0_0_55%] lg:flex-[0_0_32%]">
              <BeerCard beer={beer} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function EventPreviewCard({ event }: { event: EventItem }) {
  return (
    <article className="rounded-[20px] border border-text/8 bg-background p-5 shadow-soft">
      <div className="flex items-start gap-4">
        <div className="rounded-2xl bg-secondary px-4 py-3 text-center text-background shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.16em]">{event.date}</p>
          <p className="mt-1 text-sm">{event.time}</p>
        </div>
        <div className="space-y-2">
          <h3 className="font-heading text-2xl uppercase leading-none">{event.title}</h3>
          <p className="text-base leading-7 text-text/75">{event.description}</p>
        </div>
      </div>
    </article>
  );
}

export function EventListItem({ event }: { event: EventItem }) {
  return (
    <article className="rounded-[20px] border border-text/8 bg-background p-5 shadow-soft transition duration-200 hover:-translate-y-1 hover:shadow-medium">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-4">
          <div className="min-w-[118px] rounded-2xl bg-secondary px-4 py-3 text-background">
            <p className="text-xs font-semibold uppercase tracking-[0.16em]">{event.date}</p>
            <p className="mt-2 text-sm">{event.time}</p>
          </div>
          <div>
            <h3 className="font-heading text-2xl uppercase leading-none text-text">{event.title}</h3>
            <p className="mt-3 max-w-2xl text-base leading-7 text-text/76">{event.description}</p>
          </div>
        </div>
        {event.category ? <span className="w-fit rounded-full border border-secondary/40 bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{event.category}</span> : null}
      </div>
    </article>
  );
}

export function HoursCard({ title = "Taproom Hours", body, entries }: { title?: string; body?: string; entries: { label: string; value: string }[] }) {
  return (
    <div className="rounded-[32px] border border-text/8 bg-background p-6 shadow-soft">
      <h3 className="font-heading text-3xl uppercase leading-none">{title}</h3>
      {body ? <p className="mt-4 text-base leading-7 text-text/76">{body}</p> : null}
      <ul className="mt-6 space-y-3">
        {entries.map((entry) => (
          <li key={entry.label} className="flex items-center justify-between gap-4 border-b border-text/8 pb-3 text-sm text-text/76 last:border-none last:pb-0">
            <span>{entry.label}</span>
            <span className="font-semibold text-primary">{entry.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FoodHighlightCard({ title, body, pairing }: { title: string; body: string; pairing: string }) {
  return (
    <article className="rounded-[20px] border border-text/8 bg-background p-5 shadow-soft">
      <h3 className="font-heading text-2xl uppercase leading-none">{title}</h3>
      <p className="mt-3 text-base leading-7 text-text/76">{body}</p>
      <p className="mt-4 text-sm text-primary">
        <span className="font-semibold uppercase tracking-[0.14em]">Pairing:</span> {pairing}
      </p>
    </article>
  );
}

export function AmenityGrid() {
  const items = [
    { title: "Mountain-view seating", body: "Big-window tables and sightlines that keep Queenstown front and center.", icon: <MapPin className="h-5 w-5" /> },
    { title: "Weekend live music", body: "Small-format performances that lift the room without overwhelming it.", icon: <Music2 className="h-5 w-5" /> },
    { title: "Walk-in friendly", body: "Great for spontaneous drop-ins after a ride, ski day, or scenic drive.", icon: <Users className="h-5 w-5" /> },
    { title: "Group-ready spaces", body: "Ideal for birthday hangs, team catch-ups, and informal gatherings.", icon: <UtensilsCrossed className="h-5 w-5" /> },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <article key={item.title} className="rounded-[20px] border border-text/8 bg-background p-5 shadow-soft">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary/12 text-secondary">{item.icon}</div>
          <h3 className="mt-4 font-heading text-2xl uppercase leading-none">{item.title}</h3>
          <p className="mt-3 text-base leading-7 text-text/76">{item.body}</p>
        </article>
      ))}
    </div>
  );
}

export function MapPlaceholder({ label, note }: { label: string; note: string }) {
  return (
    <div className="relative min-h-[340px] overflow-hidden rounded-[32px] border border-text/10 bg-text p-6 text-background shadow-medium">
      <div className="absolute inset-0 opacity-35">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=800&fit=crop" alt="Queenstown mountain landscape near the Basecamp Brewing Co. taproom" className="h-full w-full object-cover" />
      </div>
      <div className="relative flex h-full flex-col justify-between gap-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">Map placeholder</p>
          <h3 className="mt-4 font-heading text-4xl uppercase leading-none">{label}</h3>
          <p className="mt-4 max-w-md text-base leading-7 text-background/84">Interactive map embed to be added here. For now, show branded placeholder block with address and wayfinding note.</p>
        </div>
        <div className="rounded-[20px] border border-background/15 bg-background/10 p-5 backdrop-blur-sm">
          <p className="flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-secondary">
            <MapPin className="h-4 w-4" /> 14 Shotover View Road, Queenstown 9300, New Zealand
          </p>
          <p className="mt-3 text-base leading-7 text-background/80">{note}</p>
        </div>
      </div>
    </div>
  );
}

export function ContactCards() {
  const cards = [
    { title: "Call the taproom", value: "+64 3 441 0284", detail: "For same-day questions and practical info.", href: "tel:+6434410284", icon: <PhoneCall className="h-5 w-5" /> },
    { title: "Email the team", value: "hello@basecampbrewing.co.nz", detail: "For bookings, events, and general enquiries.", href: "mailto:hello@basecampbrewing.co.nz", icon: <Beer className="h-5 w-5" /> },
    { title: "Follow on Instagram", value: "@basecampbrewingco", detail: "Tap updates, live music, and seasonal releases.", href: "https://instagram.com/basecampbrewingco", icon: <Trees className="h-5 w-5" /> },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map((card) => (
        <a key={card.title} href={card.href} target={card.href.startsWith("http") ? "_blank" : undefined} rel={card.href.startsWith("http") ? "noreferrer" : undefined} className="rounded-[20px] border border-text/8 bg-background p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-medium">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary/12 text-secondary">{card.icon}</div>
          <h3 className="mt-4 font-heading text-2xl uppercase leading-none">{card.title}</h3>
          <p className="mt-3 text-lg font-semibold text-primary">{card.value}</p>
          <p className="mt-2 text-base leading-7 text-text/76">{card.detail}</p>
        </a>
      ))}
    </div>
  );
}

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  return (
    <form action="https://formsubmit.co/hello@basecampbrewing.co.nz" method="POST" onSubmit={() => setLoading(true)} className="rounded-[32px] border border-text/8 bg-background p-6 shadow-soft">
      <input type="hidden" name="_subject" value="Basecamp Brewing contact form" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://basecamp-brewing.vercel.app/contact/" />
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold uppercase tracking-[0.14em] text-primary">Name</label>
          <input id="name" name="name" required className="w-full rounded-2xl border border-text/10 bg-background px-4 py-3 outline-none transition focus:border-secondary" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold uppercase tracking-[0.14em] text-primary">Email</label>
          <input id="email" type="email" name="email" required className="w-full rounded-2xl border border-text/10 bg-background px-4 py-3 outline-none transition focus:border-secondary" />
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-semibold uppercase tracking-[0.14em] text-primary">Message</label>
          <textarea id="message" name="message" required rows={6} className="w-full rounded-2xl border border-text/10 bg-background px-4 py-3 outline-none transition focus:border-secondary" />
        </div>
        <button type="submit" className="inline-flex items-center gap-3 rounded-full bg-secondary px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-background transition hover:-translate-y-0.5 hover:bg-[#c9854d]">
          {loading ? <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-background/40 border-t-background" /> : null}
          {loading ? "Sending..." : "Send Message"}
        </button>
        <p className="text-sm text-text/60">Thanks. We’ll be in touch soon.</p>
      </div>
    </form>
  );
}

export function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const open = index === openIndex;
        return (
          <div key={item.question} className="rounded-[20px] border border-text/8 bg-background shadow-soft">
            <button type="button" className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left" onClick={() => setOpenIndex(open ? null : index)} aria-expanded={open}>
              <span className="font-heading text-2xl uppercase leading-none">{item.question}</span>
              <ChevronDown className={clsx("h-5 w-5 text-secondary transition", open && "rotate-180")} />
            </button>
            <div className={clsx("grid transition-all duration-200", open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-70")}>
              <div className="overflow-hidden px-5 pb-5 text-base leading-7 text-text/76">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function BeerFilterGrid({ beers }: { beers: BeerItem[] }) {
  const filters = ["All", "Lager", "Pale Ale", "IPA", "Stout", "Seasonal"];
  const [activeFilter, setActiveFilter] = useState("All");
  const filtered = useMemo(() => (activeFilter === "All" ? beers : beers.filter((beer) => beer.style === activeFilter)), [activeFilter, beers]);

  return (
    <div className="space-y-8">
      <div className="sticky top-[82px] z-30 -mx-4 overflow-x-auto border-y border-text/8 bg-background/95 px-4 py-4 backdrop-blur sm:mx-0 sm:rounded-full sm:border sm:px-5">
        <div className="flex w-max gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={clsx(
                "rounded-full border px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] transition",
                activeFilter === filter ? "border-secondary bg-primary text-background" : "border-text/10 bg-background text-text hover:border-secondary hover:text-primary",
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((beer) => (
          <BeerCard key={beer.name} beer={beer} />
        ))}
      </div>
    </div>
  );
}

export function SustainabilityIcons() {
  const items = [
    { title: "Local ingredients first", body: "We source as close to home as possible and build seasonal releases around what fits the region.", icon: <Wheat className="h-5 w-5" /> },
    { title: "Brewing with intention", body: "Water and process decisions are handled carefully so quality and efficiency rise together.", icon: <Droplets className="h-5 w-5" /> },
    { title: "Spent grain to local farms", body: "Our spent grain is donated to nearby farms instead of heading to waste.", icon: <Leaf className="h-5 w-5" /> },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="rounded-[20px] border border-background/12 bg-background/6 p-6 backdrop-blur-sm">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-secondary/35 bg-secondary/12 text-secondary">{item.icon}</div>
          <h3 className="mt-4 font-heading text-2xl uppercase leading-none text-background">{item.title}</h3>
          <p className="mt-3 text-base leading-7 text-background/80">{item.body}</p>
        </article>
      ))}
    </div>
  );
}

export function VisitFacts() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {[
        { icon: <Clock3 className="h-5 w-5" />, title: "Hours", body: "Monday–Thursday: 12pm–9pm · Friday: 12pm–10pm · Saturday: 11am–10pm · Sunday: 11am–8pm" },
        { icon: <UtensilsCrossed className="h-5 w-5" />, title: "Food", body: "Smoked brisket sliders, loaded hand-cut fries, and charred seasonal flatbread." },
        { icon: <ParkingCircle className="h-5 w-5" />, title: "Parking", body: "On-site parking available. Extra bike parking near the side entrance." },
        { icon: <MapPin className="h-5 w-5" />, title: "Views", body: "Instagram: @basecampbrewingco · Scenic outlooks from the Queenstown taproom seating." },
      ].map((item) => (
        <article key={item.title} className="rounded-[20px] border border-text/8 bg-background p-5 shadow-soft">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary/12 text-secondary">{item.icon}</div>
          <h3 className="mt-4 font-heading text-2xl uppercase leading-none">{item.title}</h3>
          <p className="mt-3 text-base leading-7 text-text/76">{item.body}</p>
        </article>
      ))}
    </div>
  );
}
