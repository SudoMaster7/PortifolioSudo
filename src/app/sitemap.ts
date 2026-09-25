import type { MetadataRoute } from "next";
import { getDict, locales } from "@/content";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://leonardobrito.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({ url: `${BASE}/${locale}`, changeFrequency: "monthly", priority: 1 });
    for (const project of getDict(locale).projects) {
      entries.push({
        url: `${BASE}/${locale}/projetos/${project.slug}`,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
