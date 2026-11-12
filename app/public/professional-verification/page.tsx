import type { Metadata } from "next";
import { PublicInformationPage } from "@/components/shared/public-information-page";

export const metadata: Metadata = {
  title: "Professional verification policy",
  description: "Marketplace professional verification information is awaiting approved legal content.",
  robots: { index: false, follow: false },
};

export default function ProfessionalVerificationPage() {
  return <PublicInformationPage kind="professionalVerification" />;
}

