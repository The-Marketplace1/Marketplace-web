import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/explore"],
      disallow: [
        "/customer/",
        "/professional/",
        "/booking/",
        "/login",
        "/authentication/",
        "/signup/",
        "/forgot-password",
        "/verify-email",
      ],
    },
    ...(siteUrl ? { sitemap: `${siteUrl}/sitemap.xml` } : {}),
  };
}
