import type { Metadata } from "next";
import { PublicInformationPage } from "@/components/shared/public-information-page";

export const metadata: Metadata = {
  title: "Dispute resolution",
  description: "Marketplace dispute resolution information is awaiting approved legal content.",
  robots: { index: false, follow: false },
};

export default function DisputesPage() {
  return <PublicInformationPage kind="disputes" />;
}

