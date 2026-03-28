import type { Metadata } from "next";
import { ContactCards, ContactForm, FAQAccordion, LocationMapCard, StructuredData, VisitFacts } from "@/components/ui";
import { businessSchema, primaryKeywords, siteUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact Basecamp Brewing Co. | Book Brewery Visits in Queenstown",
  description:
    "Contact Basecamp Brewing Co. to plan a brewery visit in Queenstown, check hours, get directions, or ask about bookings and events.",
  keywords: ["contact Queenstown brewery", "book brewery visit Queenstown", "Queenstown taproom contact", ...primaryKeywords],
  alternates: {
    canonical: `${siteUrl}/contact/`,
  },
  openGraph: {
    title: "Contact Basecamp Brewing Co. | Book Brewery Visits in Queenstown",
    description:
      "Get in touch with Basecamp Brewing Co. for taproom hours, directions, bookings, and event enquiries in Queenstown.",
    url: `${siteUrl}/contact/`,
    images: [
      {
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&h=800&fit=crop",
        width: 1600,
        height: 800,
        alt: "Scenic route toward Basecamp Brewing Co. in Queenstown",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Basecamp Brewing Co. | Book Brewery Visits in Queenstown",
    description:
      "Get in touch with Basecamp Brewing Co. for taproom hours, directions, bookings, and event enquiries in Queenstown.",
  },
};

export default function ContactPage() {
  return (
    <>
      <StructuredData data={{ ...businessSchema, url: `${siteUrl}/contact/` }} />
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&h=800&fit=crop"
          alt="Scenic drive toward the Basecamp Brewing Co. taproom in Queenstown"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-text/88 via-text/70 to-text/46" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 text-background sm:px-6 md:py-28 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-secondary">Contact</p>
            <h1 className="mt-5 font-heading text-5xl uppercase leading-[0.92] sm:text-6xl lg:text-[4.5rem]">Contact Basecamp Brewing Co. to plan your Queenstown brewery visit.</h1>
            <p className="mt-6 text-lg leading-8 text-background/84">If you need hours, directions, booking help, or a quick answer before heading over, this is the page that gets it done.</p>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContactCards />
        </div>
      </section>

      <section className="bg-[#f7efdd] py-16 md:py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">Visit Basecamp Brewing Co.</p>
              <h2 className="mt-4 font-heading text-4xl uppercase leading-[0.98] text-text sm:text-5xl">Everything you need before you head over.</h2>
            </div>
            <VisitFacts />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[32px] border border-text/8 shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&h=700&fit=crop"
                  alt="Queenstown walking route near Basecamp Brewing Co."
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-[32px] border border-text/8 shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=900&h=700&fit=crop"
                  alt="Mountain views near the Basecamp Brewing Co. Queenstown brewery"
                  className="h-48 w-full object-cover"
                />
              </div>
            </div>
          </div>
          <LocationMapCard title="Visit Basecamp Brewing Co." note="On-site parking available. Extra bike parking near the side entrance." />
        </div>
      </section>

      <section className="bg-background py-16 md:py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <ContactForm />
          <div className="hidden overflow-hidden rounded-[32px] border border-text/8 shadow-soft lg:block">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&h=1000&fit=crop"
              alt="Booking enquiry workspace for a Queenstown brewery visit"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f7efdd] py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">FAQ</p>
            <h2 className="mt-4 font-heading text-4xl uppercase leading-[0.98] text-text sm:text-5xl">Quick answers before your first round.</h2>
          </div>
          <FAQAccordion
            items={[
              {
                question: "Do you take bookings?",
                answer: "Yes. Small walk-ins are always welcome, but larger groups should get in touch first.",
              },
              {
                question: "Is there live music every weekend?",
                answer: "Most weekends, yes. Check the Events page or Instagram for the current schedule.",
              },
              {
                question: "Do you have food?",
                answer: "Yes. We serve a focused food menu designed to work with the beer list.",
              },
              {
                question: "Can I bring kids?",
                answer: "Yes. The taproom is welcoming for casual group visits and mixed-age gatherings.",
              },
              {
                question: "Do you offer takeaway beer?",
                answer: "Yes, subject to current packaged availability in the taproom.",
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
