import type { Metadata } from "next";
import { PublicInformationPage } from "@/components/shared/public-information-page";

export const metadata: Metadata = {
  title: "Cancellation policy",
  description: "Marketplace cancellation information is awaiting approved legal content.",
  robots: { index: false, follow: false },
};

export default function CancellationsPage() {
  return <PublicInformationPage kind="cancellations" />;
}

