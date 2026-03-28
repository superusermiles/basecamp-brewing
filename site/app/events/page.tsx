import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Music2, Sparkles, Users } from "lucide-react";
import { EventListItem, StructuredData } from "@/components/ui";
import { businessSchema, eventSchema, siteUrl, upcomingEvents } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Events | Basecamp Brewing Co.",
  description:
    "Check upcoming live music, release nights, and community events at Basecamp Brewing Co. in Queenstown, New Zealand.",
  alternates: {
    canonical: `${siteUrl}/events/`,
  },
  openGraph: {
    title: "Events | Basecamp Brewing Co.",
    description:
      "Check upcoming live music, release nights, and community events at Basecamp Brewing Co. in Queenstown, New Zealand.",
    url: `${siteUrl}/events/`,
    images: [
      {
        url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1600&h=900&fit=crop",
        width: 1600,
        height: 900,
        alt: "Stage with instruments and concert lighting",
      },
    ],
  },
};

export default function EventsPage() {
  return (
    <>
      <StructuredData data={[{ ...businessSchema, url: `${siteUrl}/events/` }, ...eventSchema]} />
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1600&h=900&fit=crop"
          alt="Stage with instruments and concert lighting"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-text/90 via-text/76 to-text/52" />
        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 md:py-32 lg:px-8 lg:py-36">
          <div className="max-w-3xl text-background">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-secondary">Events</p>
            <h1 className="mt-5 font-heading text-5xl uppercase leading-[0.92] sm:text-6xl lg:text-[4.5rem]">Weekends sound better here.</h1>
            <p className="mt-6 text-lg leading-8 text-background/84">The calendar keeps things active without feeling overprogrammed — live music, release nights, and community meet-ups that fit the taproom naturally.</p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <article className="grid overflow-hidden rounded-[32px] border border-text/8 bg-[#f7efdd] shadow-medium lg:grid-cols-[1.05fr_0.95fr]">
            <img
              src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1200&h=900&fit=crop"
              alt="Acoustic musician performing in a small venue"
              className="h-full min-h-[320px] w-full object-cover"
            />
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">Featured: Southern Alps Sessions</p>
              <h2 className="mt-4 font-heading text-4xl uppercase leading-[0.98] text-text">A Saturday night live-music series with rotating local artists, fresh seasonal pours, and a room that stays lively without losing the conversation.</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[20px] border border-text/8 bg-background p-4 shadow-soft">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Date</p>
                  <p className="mt-2 text-lg font-semibold text-primary">Saturday, 18 April</p>
                </div>
                <div className="rounded-[20px] border border-text/8 bg-background p-4 shadow-soft">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Time</p>
                  <p className="mt-2 text-lg font-semibold text-primary">7pm–10pm</p>
                </div>
              </div>
              <Link href="/contact/" className="mt-8 inline-flex items-center gap-3 rounded-full bg-secondary px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-background transition hover:-translate-y-0.5 hover:bg-[#c9854d]">
                Ask About This Event
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#f8f1e1] py-16 md:py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="space-y-6 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">Upcoming events</p>
            <h2 className="font-heading text-4xl uppercase leading-[0.98] text-text sm:text-5xl">Clear, practical, and easy to scan.</h2>
            <p className="text-lg leading-8 text-text/78">This page should help people decide fast.</p>
            <div className="overflow-hidden rounded-[32px] border border-text/8 shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop"
                alt="Crowd at a live event under warm lighting"
                className="h-80 w-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <EventListItem key={`${event.title}-${event.date}`} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-text py-16 text-background md:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Live Music Fridays",
                body: "Acoustic-forward sets that suit the room and the view.",
                image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1000&h=800&fit=crop",
                alt: "Group of friends at a concert or social gathering",
                icon: <Music2 className="h-5 w-5" />,
              },
              {
                title: "Release Nights",
                body: "Fresh seasonal pours introduced by the brewers themselves.",
                image: "https://images.unsplash.com/photo-1521334884684-d80222895322?w=1000&h=800&fit=crop",
                alt: "People raising drinks in a dimly lit venue",
                icon: <Sparkles className="h-5 w-5" />,
              },
              {
                title: "Community Meet-Ups",
                body: "Outdoor crowd energy, local regulars, and easy reasons to come back.",
                image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1000&h=800&fit=crop",
                alt: "Group of friends at a concert or social gathering",
                icon: <Users className="h-5 w-5" />,
              },
            ].map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[28px] border border-background/12 bg-background/6 shadow-soft backdrop-blur-sm">
                <img src={item.image} alt={item.alt} className="h-52 w-full object-cover" />
                <div className="p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-secondary/35 bg-secondary/12 text-secondary">{item.icon}</div>
                  <h3 className="mt-4 font-heading text-3xl uppercase leading-none">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-background/80">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 md:py-20 lg:py-24">
        <img
          src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1400&h=700&fit=crop"
          alt="Long communal dining table prepared for a private gathering"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-text/72" />
        <div className="relative mx-auto max-w-4xl px-4 text-center text-background sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl uppercase leading-[0.98] sm:text-5xl">Need space for your own gathering?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-background/84">Talk to us about casual group bookings, celebrations, and brewery-centered private events.</p>
          <Link href="/contact/" className="mt-8 inline-flex items-center gap-3 rounded-full bg-secondary px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-background transition hover:-translate-y-0.5 hover:bg-[#c9854d]">
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
