import Link from "next/link";
import { Camera, Mail, MapPin, Phone } from "lucide-react";
import { footerData, hours, navItems } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-text text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_1fr] lg:px-8">
        <div className="space-y-5">
          <p className="font-heading text-3xl uppercase leading-none text-background">
            {footerData.brandLine}
          </p>
          <p className="max-w-md text-base leading-7 text-background/80">
            {footerData.closingLine}
          </p>
          <div className="space-y-3 text-sm text-background/80">
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-secondary" />
              <span>{footerData.address}</span>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-secondary" />
              <a href={`tel:${footerData.phone.replace(/\s+/g, "")}`}>{footerData.phone}</a>
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-secondary" />
              <a href={`mailto:${footerData.email}`}>{footerData.email}</a>
            </p>
            <p className="flex items-center gap-3">
              <Camera className="h-4 w-4 text-secondary" />
              <a href="https://instagram.com/basecampbrewingco" target="_blank" rel="noreferrer">
                {footerData.socialHandle}
              </a>
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
              Quick Links
            </p>
            <div className="mt-4 grid gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-background/80 transition hover:text-background">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
              {footerData.hoursLabel}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-background/80">
              {hours.map((entry) => (
                <li key={entry.label} className="flex justify-between gap-3 border-b border-background/10 pb-2 last:border-none">
                  <span>{entry.label}</span>
                  <span>{entry.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-[32px] border border-background/12 bg-background/5 p-6 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
            Newsletter
          </p>
          <p className="mt-4 text-sm leading-7 text-background/80">{footerData.newsletterLabel}</p>
          <form action="https://formsubmit.co/hello@basecampbrewing.co.nz" method="POST" className="mt-5 space-y-3">
            <input type="hidden" name="_subject" value="Basecamp Brewing footer newsletter signup" />
            <input type="hidden" name="_captcha" value="false" />
            <label className="block text-sm text-background/80" htmlFor="footer-email">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              name="email"
              required
              placeholder="Your email address"
              className="w-full rounded-full border border-background/15 bg-background px-4 py-3 text-text outline-none transition focus:border-secondary"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-secondary px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-background transition hover:-translate-y-0.5 hover:bg-[#c9854d]"
            >
              Join the List
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-background/10 px-4 py-5 text-center text-xs uppercase tracking-[0.18em] text-background/55 sm:px-6 lg:px-8">
        {footerData.legal}
      </div>
    </footer>
  );
}
