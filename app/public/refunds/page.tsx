import type { Metadata } from "next";
import { PublicInformationPage } from "@/components/shared/public-information-page";

export const metadata: Metadata = {
  title: "Refund policy",
  description: "Marketplace refund information is awaiting approved legal content.",
  robots: { index: false, follow: false },
};

export default function RefundsPage() {
  return <PublicInformationPage kind="refunds" />;
}

