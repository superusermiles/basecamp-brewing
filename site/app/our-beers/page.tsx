import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Droplets, Leaf, Wheat } from "lucide-react";
import { BeerFilterGrid, SectionIntro, StructuredData } from "@/components/ui";
import { beerLineup, businessSchema, primaryKeywords, siteUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Craft Beer in Queenstown | Basecamp Brewing Co.",
  description:
    "Explore craft beer in Queenstown with Basecamp Brewing Co. lagers, pale ales, IPAs, stouts, and seasonal small-batch releases.",
  keywords: ["craft beer Queenstown", "Queenstown brewery beers", "small-batch beer Queenstown", ...primaryKeywords],
  alternates: {
    canonical: `${siteUrl}/our-beers/`,
  },
  openGraph: {
    title: "Craft Beer in Queenstown | Basecamp Brewing Co.",
    description:
      "Browse Basecamp Brewing Co. lagers, pale ales, IPAs, stouts, and seasonal releases from our Queenstown craft brewery.",
    url: `${siteUrl}/our-beers/`,
    images: [
      {
        url: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1600&h=900&fit=crop",
        width: 1600,
        height: 900,
        alt: "Craft beer tasting at Basecamp Brewing Co. in Queenstown",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Craft Beer in Queenstown | Basecamp Brewing Co.",
    description:
      "Browse lagers, pale ales, IPAs, stouts, and seasonal releases from Basecamp Brewing Co. in Queenstown.",
  },
};

const beersPageSchema = {
  ...businessSchema,
  url: `${siteUrl}/our-beers/`,
};

export default function OurBeersPage() {
  return (
    <>
      <StructuredData data={beersPageSchema} />
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1600&h=900&fit=crop"
          alt="Craft beer glass from Basecamp Brewing Co. in Queenstown"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-text/88 via-text/70 to-text/35" />
        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 md:py-32 lg:px-8 lg:py-36">
          <div className="max-w-3xl text-background">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-secondary">Our Beers</p>
            <h1 className="mt-5 font-heading text-5xl uppercase leading-[0.92] sm:text-6xl lg:text-[4.5rem]">Craft beer in Queenstown brewed for mountain weather and good company.</h1>
            <p className="mt-6 text-lg leading-8 text-background/84">Browse the current lineup by style. Tasting notes stay clear, useful, and easy to read whether you know beer deeply or just know what you like.</p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionIntro title="Current lineup" body="Core pours keep the list grounded. Seasonal releases bring a little weather, mood, and experimentation to the board." />
            <div className="overflow-hidden rounded-[32px] border border-text/8 shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1571767454098-246b94fbcf70?w=1000&h=900&fit=crop"
                alt="Queenstown craft beer tasting flight with several Basecamp Brewing Co. styles"
                className="h-80 w-full object-cover"
              />
            </div>
          </div>
          <BeerFilterGrid beers={beerLineup} />
        </div>
      </section>

      <section className="bg-[#f5eddb] py-16 md:py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <article className="overflow-hidden rounded-[32px] border border-text/8 bg-text text-background shadow-medium">
            <img
              src="https://images.unsplash.com/photo-1567696911980-2c5c4f2a9f81?w=1200&h=900&fit=crop"
              alt="Seasonal dark beer release from a Queenstown brewery with malt ingredients"
              className="h-80 w-full object-cover"
            />
            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">Feature release</p>
              <h2 className="mt-4 font-heading text-4xl uppercase leading-[0.98]">Seasonals shaped by the time of year.</h2>
              <p className="mt-4 text-lg leading-8 text-background/82">Queenstown changes fast. The seasonal board should feel like it noticed.</p>
              <div className="mt-8 rounded-[20px] border border-background/12 bg-background/8 p-5 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Alpenglow Red</p>
                <p className="mt-3 text-base leading-7 text-background/82">Toffee malt, orange peel, and a warming finish built for cooling evenings.</p>
              </div>
            </div>
          </article>
          <div className="space-y-4">
            {[
              ["Southern Pass Pils", "Bright, crisp, and floral with a high-sun finish."],
              ["First Chair Dark Ale", "Roast, dried fruit, and a little extra weight for winter."],
            ].map(([name, body]) => (
              <article key={name} className="rounded-[24px] border border-text/8 bg-background p-6 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Supporting seasonal</p>
                <h3 className="mt-3 font-heading text-3xl uppercase leading-none text-text">{name}</h3>
                <p className="mt-4 text-base leading-7 text-text/76">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[32px] border border-text/8 shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1544145945-f90425340c7e?w=1000&h=900&fit=crop"
                alt="Beer pouring at the Basecamp Brewing Co. taproom in Queenstown"
                className="h-full min-h-[280px] w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[32px] border border-text/8 shadow-soft sm:mt-12">
              <img
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=800&fit=crop"
                alt="Brewing tanks inside the Basecamp Brewing Co. Queenstown brewery"
                className="h-full min-h-[280px] w-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-6">
            <SectionIntro title="Straightforward brewing. Thoughtful detail." body="Basecamp brews for balance and repeat drinkability. Local ingredients inform the seasonal board. Spent grain goes to nearby farms. The aim is simple: make beer that feels connected to Queenstown, not disconnected from it." />
            <div className="rounded-[24px] border border-secondary/20 bg-[#f7efdd] p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Sustainability in practice</p>
              <p className="mt-3 text-base leading-7 text-text/76">Spent grain donated locally. Seasonal releases informed by regional ingredients. Process decisions made to reduce waste without compromising quality.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: <Wheat className="h-5 w-5" />,
                  title: "Local ingredients",
                  body: "Seasonal releases are informed by regional ingredients and what fits the region best.",
                },
                {
                  icon: <Droplets className="h-5 w-5" />,
                  title: "Mountain water story",
                  body: "Process decisions are made carefully so quality and efficiency rise together.",
                },
                {
                  icon: <Leaf className="h-5 w-5" />,
                  title: "Spent grain donation",
                  body: "Spent grain donated locally so quality brewing stays connected to the wider region.",
                },
              ].map((item) => (
                <article key={item.title} className="rounded-[20px] border border-text/8 bg-[#f7efdd] p-5 shadow-soft">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary/12 text-secondary">{item.icon}</div>
                  <h3 className="mt-4 font-heading text-2xl uppercase leading-none text-text">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-text/76">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="topo-pattern bg-text py-16 text-background md:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl uppercase leading-[0.98] sm:text-5xl">See what’s pouring right now.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-background/82">Drop into the taproom for the freshest list and staff recommendations.</p>
          <Link href="/the-taproom/" className="mt-8 inline-flex items-center gap-3 rounded-full bg-secondary px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-background transition hover:-translate-y-0.5 hover:bg-[#c9854d]">
            Visit the Taproom
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
