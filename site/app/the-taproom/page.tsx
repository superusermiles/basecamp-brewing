import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { AmenityGrid, FoodHighlightCard, HoursCard, MapPlaceholder, SectionIntro, StructuredData } from "@/components/ui";
import { businessSchema, siteUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "The Taproom | Basecamp Brewing Co.",
  description:
    "See the Basecamp Brewing Co. taproom in Queenstown — mountain views, food highlights, opening hours, and a welcoming lodge-style brewery atmosphere.",
  alternates: {
    canonical: `${siteUrl}/the-taproom/`,
  },
  openGraph: {
    title: "The Taproom | Basecamp Brewing Co.",
    description:
      "See the Basecamp Brewing Co. taproom in Queenstown — mountain views, food highlights, opening hours, and a welcoming lodge-style brewery atmosphere.",
    url: `${siteUrl}/the-taproom/`,
    images: [
      {
        url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&h=1400&fit=crop",
        width: 1200,
        height: 1400,
        alt: "Rustic-modern restaurant and bar interior with warm lighting",
      },
    ],
  },
};

const taproomSchema = {
  ...businessSchema,
  url: `${siteUrl}/the-taproom/`,
};

export default function TaproomPage() {
  return (
    <>
      <StructuredData data={taproomSchema} />
      <section className="bg-background py-16 md:py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
          <div className="order-2 space-y-6 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">The Taproom</p>
            <h1 className="font-heading text-5xl uppercase leading-[0.92] text-text sm:text-6xl lg:text-[4.5rem]">Built for the after part of the adventure.</h1>
            <p className="text-lg leading-8 text-text/78">Basecamp’s taproom brings together small-batch beer, mountain views, solid food, and a crowd that ranges from post-trail locals to first-time visitors who found the right stop.</p>
            <Link href="/contact/" className="inline-flex items-center gap-3 rounded-full bg-secondary px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-background transition hover:-translate-y-0.5 hover:bg-[#c9854d]">
              Plan Your Visit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="order-1 overflow-hidden rounded-[32px] border border-text/8 shadow-medium lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&h=1400&fit=crop"
              alt="Rustic-modern restaurant and bar interior with warm lighting"
              className="h-[520px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f7efdd] py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro title="A room that feels good immediately." body="Timber, copper accents, soft lighting, open views, and just enough brewery edge to keep it honest." />
          <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="overflow-hidden rounded-[32px] border border-text/8 shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=900&h=1100&fit=crop"
                alt="Friends sitting together in a warmly lit bar"
                className="h-full min-h-[460px] w-full object-cover transition duration-200 hover:scale-[1.02]"
              />
            </div>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-[32px] border border-text/8 shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1532635241-17e820acc59f?w=900&h=900&fit=crop"
                  alt="Beer taps and bar counter close-up"
                  className="h-[220px] w-full object-cover transition duration-200 hover:scale-[1.02] sm:h-[260px]"
                />
              </div>
              <div className="overflow-hidden rounded-[32px] border border-text/8 shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=900&h=1200&fit=crop"
                  alt="Outdoor patio dining area under hanging lights"
                  className="h-[220px] w-full object-cover transition duration-200 hover:scale-[1.02] sm:h-[260px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
          <div className="space-y-6">
            <SectionIntro title="Hours that work for locals and visitors." body="Lunch drift-ins, post-ride pints, sunset rounds, and weekend evenings with live music all fit comfortably here." />
            <HoursCard
              entries={[
                { label: "Monday–Thursday", value: "12pm–9pm" },
                { label: "Friday", value: "12pm–10pm" },
                { label: "Saturday", value: "11am–10pm" },
                { label: "Sunday", value: "11am–8pm" },
              ]}
            />
          </div>
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[32px] border border-text/8 shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&h=900&fit=crop"
                alt="Elevated pub food with drinks on a wood table"
                className="h-72 w-full object-cover"
              />
            </div>
            <SectionIntro title="Food that belongs next to good beer." body="The menu leans hearty, shareable, and tap-friendly rather than fussy." />
            <div className="grid gap-4 md:grid-cols-3">
              <FoodHighlightCard title="Smoked brisket sliders" body="Soft buns, sharp pickles, copper glaze" pairing="Best with Ridgeline Pale Ale" />
              <FoodHighlightCard title="Loaded hand-cut fries" body="Herb salt, cheese sauce, smoked aioli" pairing="Best with Trail Marker Lager" />
              <FoodHighlightCard title="Charred seasonal flatbread" body="Rotating toppings built around local produce" pairing="Best with Southern Pass Pils" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7efdd] py-16 md:py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="space-y-6">
            <SectionIntro title="Easy to settle into." body="Big-window tables, easy walking access, and practical details all make the stop feel straightforward from the first pint onward." />
            <AmenityGrid />
          </div>
          <div className="space-y-6">
            <MapPlaceholder label="Find us in Queenstown." note="Easy to reach from central Queenstown with on-site parking nearby." />
            <div className="overflow-hidden rounded-[32px] border border-text/8 shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=800&fit=crop"
                alt="Forested mountain landscape in golden light"
                className="h-56 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-text py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] bg-background p-8 text-center shadow-medium sm:p-10">
            <h2 className="font-heading text-4xl uppercase leading-[0.98] text-text sm:text-5xl">Come in for one. Stay for longer.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-text/78">Beer, food, views, and the right kind of noise level make this an easy yes.</p>
            <Link href="/contact/" className="mt-8 inline-flex items-center gap-3 rounded-full bg-secondary px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-background transition hover:-translate-y-0.5 hover:bg-[#c9854d]">
              Plan Your Visit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
