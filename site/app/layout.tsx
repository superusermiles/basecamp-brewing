import type { Metadata } from "next";
import { Oswald, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { businessSchema, primaryKeywords, longTailKeywords, siteUrl } from "@/lib/site-data";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Queenstown Craft Brewery | Basecamp Brewing Co.",
  description:
    "Basecamp Brewing Co. is a Queenstown craft brewery and taproom pouring small-batch beer, hearty food, mountain views, and live music.",
  applicationName: "Basecamp Brewing Co.",
  keywords: [...primaryKeywords, ...longTailKeywords],
  icons: {
    icon: "/favicon.ico",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Queenstown Craft Brewery | Basecamp Brewing Co.",
    description:
      "Visit Basecamp Brewing Co. for small-batch alpine beer, a Queenstown taproom, hearty food, mountain views, and weekend live music.",
    url: siteUrl,
    siteName: "Basecamp Brewing Co.",
    locale: "en_NZ",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1600&h=1100&fit=crop",
        width: 1600,
        height: 1100,
        alt: "Queenstown craft brewery backdrop with alpine mountain views near Basecamp Brewing Co.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Queenstown Craft Brewery | Basecamp Brewing Co.",
    description:
      "Small-batch alpine beer, a Queenstown taproom, hearty food, mountain views, and live music at Basecamp Brewing Co.",
    images: [
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1600&h=1100&fit=crop",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ" className={`${oswald.variable} ${sourceSerif.variable}`}>
      <body className="min-h-screen bg-background text-text">
        <StructuredData data={businessSchema} />
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
