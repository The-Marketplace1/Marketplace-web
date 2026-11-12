import type { Metadata } from "next";
import { PublicInformationPage } from "@/components/shared/public-information-page";

export const metadata: Metadata = {
  title: "Cookie information",
  description: "Marketplace cookie information is awaiting approved legal content.",
  robots: { index: false, follow: false },
};

export default function CookiesPage() {
  return <PublicInformationPage kind="cookies" />;
}

