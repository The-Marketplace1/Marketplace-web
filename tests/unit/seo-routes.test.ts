import type { MetadataRoute } from "next";
import sitemap from "@/app/sitemap";
import robots from "@/app/robots";
import { describe, expect, it, vi } from "vitest";

describe("SEO metadata routes", () => {
  it("does not emit sitemap URLs before the canonical origin is configured", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "");
    expect(sitemap()).toEqual([]);
    vi.unstubAllEnvs();
  });

  it("emits only public routes when the canonical origin is configured", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://example.test/");
    expect(sitemap().map(({ url }) => url)).toEqual([
      "https://example.test/",
      "https://example.test/explore",
    ]);
    vi.unstubAllEnvs();
  });

  it("does not advertise a sitemap without a configured canonical origin", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "");
    expect(robots()).not.toHaveProperty("sitemap");
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://example.test");
    expect(robots()).toHaveProperty("sitemap", "https://example.test/sitemap.xml");
    vi.unstubAllEnvs();
  });
});
