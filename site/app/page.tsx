import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HomeHero, BeerCarousel, EventPreviewCard, HoursCard, SectionIntro, SustainabilityIcons } from "@/components/ui";
import { StructuredData } from "@/components/structured-data";
import { businessSchema, featuredBeers, homeEvents, hours } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <StructuredData data={businessSchema} />
      <HomeHero />

      <section className="bg-background py-16 md:py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
          <div className="space-y-8 lg:sticky lg:top-28">
            <SectionIntro
              eyebrow="On Pour"
              title="Small-batch beers with real range."
              body="Easy-drinking where it should be. Characterful where it counts. Every pour is written for post-hike refresh, long-table hangs, and Queenstown weather swings."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="overflow-hidden rounded-[32px] border border-text/8 shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=900&h=700&fit=crop"
                  alt="Stainless brewery tanks inside a working craft brewery"
                  className="h-56 w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-[32px] border border-text/8 shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=800&h=900&fit=crop"
                  alt="Beer being poured into a glass with foam rising"
                  className="h-56 w-full object-cover"
                />
              </div>
            </div>
          </div>
          <BeerCarousel items={featuredBeers} />
        </div>
      </section>

      <section className="relative overflow-hidden bg-text py-16 text-background md:py-20 lg:py-28">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&h=700&fit=crop"
          alt="Layered mountain ridges with deep green valleys"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="texture-overlay absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">Brewed locally</p>
            <h2 className="mt-4 font-heading text-4xl uppercase leading-[0.98] sm:text-5xl lg:text-[3.25rem]">Brewed with respect for the place around us.</h2>
          </div>
          <div className="mt-10">
            <SustainabilityIcons />
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="space-y-6">
            <SectionIntro
              eyebrow="This Week"
              title="Music, releases, and reasons to swing back in."
              body="Weekends bring local music. Midweek keeps the room moving with community nights and fresh pours."
            />
            <div className="overflow-hidden rounded-[32px] border border-text/8 shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop"
                alt="Crowd gathered at an intimate live music event"
                className="h-72 w-full object-cover"
              />
            </div>
            <Link href="/events/" className="inline-flex items-center gap-3 rounded-full bg-secondary px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-background transition hover:-translate-y-0.5 hover:bg-[#c9854d]">
              See All Events
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {homeEvents.map((event) => (
              <EventPreviewCard key={`${event.title}-${event.date}`} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7efdd] py-16 md:py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div className="grid gap-4 sm:grid-cols-[1.05fr_0.95fr] lg:min-h-[680px]">
            <div className="overflow-hidden rounded-[32px] border border-text/8 shadow-medium">
              <img
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&h=900&fit=crop"
                alt="Shareable food plates and drinks on a timber table"
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[32px] border border-text/8 shadow-soft sm:mt-12 lg:mt-20">
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&h=1000&fit=crop"
                alt="Warm bar interior with people talking over drinks"
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-6">
            <SectionIntro
              eyebrow="The Taproom"
              title="Lodge warmth. Brewery edge."
              body="The room balances timber, steel, big windows, and a bar team that knows how to guide without overselling."
            />
            <p className="max-w-2xl text-lg leading-8 text-text/78">
              Come for a quick pint, settle in with food, or catch a live set while the light drops over the mountains.
            </p>
            <HoursCard
              title="Open today"
              entries={hours}
            />
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                "Smoked brisket sliders",
                "Loaded hand-cut fries",
                "Charred seasonal flatbread",
              ].map((item) => (
                <div key={item} className="rounded-[20px] border border-text/8 bg-background px-4 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-primary shadow-soft">
                  {item}
                </div>
              ))}
            </div>
            <Link href="/the-taproom/" className="inline-flex items-center gap-3 rounded-full border border-text/12 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-text transition hover:-translate-y-0.5 hover:border-secondary hover:text-primary">
              See the Taproom
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-[32px] border-2 border-secondary/60 bg-background shadow-medium lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">Stay in the loop</p>
              <h2 className="mt-4 font-heading text-4xl uppercase leading-[0.98] text-text sm:text-5xl">Get the next release before your group chat does.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-text/78">Join the list for tap updates, weekend music announcements, and limited seasonal drops.</p>
              <form action="https://formsubmit.co/hello@basecampbrewing.co.nz" method="POST" className="mt-8 space-y-4 sm:max-w-xl">
                <input type="hidden" name="_subject" value="Basecamp Brewing newsletter signup" />
                <input type="hidden" name="_captcha" value="false" />
                <div className="flex flex-col gap-3 sm:flex-row">
                  <label htmlFor="home-newsletter" className="sr-only">Your email address</label>
                  <input
                    id="home-newsletter"
                    type="email"
                    name="email"
                    required
                    placeholder="Your email address"
                    className="w-full rounded-full border border-text/10 bg-background px-5 py-3 outline-none transition focus:border-secondary"
                  />
                  <button type="submit" className="rounded-full bg-secondary px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-background transition hover:-translate-y-0.5 hover:bg-[#c9854d]">
                    Join the List
                  </button>
                </div>
                <p className="text-sm text-text/60">No spam. Just the useful stuff.</p>
              </form>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1464822759844-d150ad6d1d07?w=900&h=700&fit=crop"
                alt="Alpine lake and mountain landscape under crisp light"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
