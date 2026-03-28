export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { lastModified, siteUrl } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const modified = new Date(lastModified);

  return [
    {
      url: siteUrl,
      lastModified: modified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/our-beers/`,
      lastModified: modified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/the-taproom/`,
      lastModified: modified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/events/`,
      lastModified: modified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact/`,
      lastModified: modified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
