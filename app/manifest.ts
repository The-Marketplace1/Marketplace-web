import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Marketplace",
    short_name: "Marketplace",
    description: "Discover independent professionals and services.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f5ef",
    theme_color: "#203543",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
