import type { Metadata } from "next";
import { PublicInformationPage } from "@/components/shared/public-information-page";

export const metadata: Metadata = {
  title: "Escrow and payment policy",
  description: "Marketplace escrow and payment information is awaiting approved legal content.",
  robots: { index: false, follow: false },
};

export default function EscrowAndPaymentsPage() {
  return <PublicInformationPage kind="escrowPayments" />;
}

