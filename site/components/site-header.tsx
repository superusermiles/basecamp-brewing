"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { LogoMark } from "@/components/logo-mark";
import { navItems } from "@/lib/site-data";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 36);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-all duration-200",
        isScrolled
          ? "border-b border-text/10 bg-background/95 shadow-soft backdrop-blur"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Basecamp Brewing Co. home" className="shrink-0">
          <LogoMark reversed={!isScrolled} />
        </Link>

        <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "rounded-full border px-4 py-2 text-sm font-semibold tracking-[0.12em] uppercase transition duration-200 hover:-translate-y-0.5",
                isScrolled
                  ? "border-text/10 bg-background text-text hover:border-secondary hover:text-primary"
                  : "border-white/15 bg-white/8 text-background hover:border-secondary hover:bg-white/12",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold tracking-[0.12em] text-background uppercase shadow-soft transition duration-200 hover:-translate-y-0.5 hover:bg-[#c9854d]"
          >
            Plan Your Visit
          </Link>
        </nav>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((value) => !value)}
          className={clsx(
            "inline-flex items-center justify-center rounded-full border p-3 transition lg:hidden",
            isScrolled
              ? "border-text/10 bg-background text-text"
              : "border-white/15 bg-white/10 text-background",
          )}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen ? (
        <div
          id="mobile-nav"
          className="border-t border-text/10 bg-background px-4 pb-5 pt-3 shadow-medium lg:hidden"
        >
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl border border-text/10 px-4 py-3 text-sm font-semibold tracking-[0.12em] text-text uppercase transition hover:border-secondary hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-2xl bg-secondary px-4 py-3 text-center text-sm font-semibold tracking-[0.12em] text-background uppercase shadow-soft transition hover:bg-[#c9854d]"
            >
              Plan Your Visit
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
