import type { Metadata } from "next";
import { Oswald, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { businessSchema } from "@/lib/site-data";

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
  metadataBase: new URL("https://basecamp-brewing.vercel.app"),
  title: {
    default: "Basecamp Brewing Co. | Small-Batch Alpine Beer in Queenstown",
    template: "%s",
  },
  description:
    "Queenstown craft brewery and taproom serving alpine-inspired small-batch beer, hearty food, mountain views, and live music on weekends.",
  applicationName: "Basecamp Brewing Co.",
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Basecamp Brewing Co. | Small-Batch Alpine Beer in Queenstown",
    description:
      "Queenstown craft brewery and taproom serving alpine-inspired small-batch beer, hearty food, mountain views, and live music on weekends.",
    url: "https://basecamp-brewing.vercel.app",
    siteName: "Basecamp Brewing Co.",
    locale: "en_NZ",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1600&h=1100&fit=crop",
        width: 1600,
        height: 1100,
        alt: "Snow-dusted mountain range under warm evening light",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Basecamp Brewing Co. | Small-Batch Alpine Beer in Queenstown",
    description:
      "Queenstown craft brewery and taproom serving alpine-inspired small-batch beer, hearty food, mountain views, and live music on weekends.",
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
