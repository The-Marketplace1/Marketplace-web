import type { MetadataRoute } from "next";

/**
 * Sitemap includes only public pages that currently exist and disclose the
 * disconnected preview state. Policy placeholders are intentionally omitted.
 * Listing URLs must be added only when real catalog pages and data exist.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (!siteUrl) return [];

  const lastModified = new Date();
  return ["/", "/explore"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "daily",
    priority: path === "/" ? 1 : 0.8,
  }));
}
