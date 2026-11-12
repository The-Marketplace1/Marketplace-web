import { BriefcaseBusiness, CircleHelp, FileText, HeartHandshake, Info, LockKeyhole, Mail, Search, ShieldCheck } from "lucide-react";
import { InformationCard } from "@/components/cards/information-card";
import { UnavailableMessageForm } from "@/components/forms/unavailable-message-form";
import { PublicLayout } from "@/components/layout/public-layout";
import { PageIntro } from "@/components/shared/page-intro";
import styles from "@/components/marketplace.module.css";
import type { ReactNode } from "react";

export type PublicInfoKind =
  | "about"
  | "contact"
  | "terms"
  | "privacy"
  | "cookies"
  | "refunds"
  | "cancellations"
  | "escrowPayments"
  | "disputes"
  | "professionalVerification";

const pageContent: Record<PublicInfoKind, {
  eyebrow: string;
  title: string;
  copy: string;
  cards: { title: string; copy: string; icon: ReactNode }[];
}> = {
  about: {
    eyebrow: "About Marketplace",
    title: "Independent work, with people at the centre.",
    copy: "Marketplace is being shaped as a thoughtful place for customers to discover independent professionals, and for professionals to manage the work they do.",
    cards: [
      { title: "Make discovery feel clearer", copy: "Give customers a considered way to understand services and the people who provide them.", icon: <Search size={22} /> },
      { title: "Give professionals room to grow", copy: "A home for independent professionals to present their services and manage their practice.", icon: <BriefcaseBusiness size={22} /> },
      { title: "Keep the human part visible", copy: "Design the experience around useful information, clear expectations, and thoughtful exchange.", icon: <HeartHandshake size={22} /> },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "We’d like to hear what matters to you.",
    copy: "A contact channel has not been configured for Marketplace yet. We won't invent an email address or imply that a message can be delivered.",
    cards: [
      { title: "Customer questions", copy: "Customer support contact details will be published here when a verified channel is available.", icon: <CircleHelp size={22} /> },
      { title: "Professional enquiries", copy: "Professional support details will be added here once a real contact channel is configured.", icon: <BriefcaseBusiness size={22} /> },
      { title: "Not connected yet", copy: "The message form is intentionally disabled. Nothing entered here would be sent.", icon: <Mail size={22} /> },
    ],
  },
  terms: {
    eyebrow: "Policy",
    title: "Terms of service",
    copy: "Marketplace terms have not been supplied. This page is a placeholder, not a legal agreement.",
    cards: [
      { title: "No terms published", copy: "Do not rely on this page as an agreement or as legal guidance. Terms must be provided and reviewed before publication.", icon: <FileText size={22} /> },
      { title: "Before using Marketplace", copy: "The applicable terms, service rules, and responsibilities will be described here after they are formally established.", icon: <Info size={22} /> },
    ],
  },
  privacy: {
    eyebrow: "Policy",
    title: "Privacy notice",
    copy: "Marketplace privacy information has not been supplied. This page is a placeholder, not a statement of data practices.",
    cards: [
      { title: "No privacy notice published", copy: "This page does not describe collection, use, or retention of information. A reviewed privacy notice must be supplied before publication.", icon: <ShieldCheck size={22} /> },
      { title: "Questions about privacy", copy: "A verified privacy contact channel has not been configured. No contact details are fabricated here.", icon: <LockKeyhole size={22} /> },
    ],
  },
  cookies: unpublishedPolicy("Cookie information", "cookie notice"),
  refunds: unpublishedPolicy("Refund policy", "refund policy"),
  cancellations: unpublishedPolicy("Cancellation policy", "cancellation policy"),
  escrowPayments: unpublishedPolicy("Escrow and payment policy", "escrow and payment policy"),
  disputes: unpublishedPolicy("Dispute resolution", "dispute resolution policy"),
  professionalVerification: unpublishedPolicy(
    "Professional verification policy",
    "professional verification policy",
  ),
};

function unpublishedPolicy(title: string, policyName: string) {
  return {
    eyebrow: "Policy status",
    title,
    copy: `The approved ${policyName} from Marketplace’s legal materials is not available here. This notice is not a policy or legal guidance.`,
    cards: [
      {
        title: "Approved content is required",
        copy: `No reviewed ${policyName} was provided. Do not infer rules, eligibility, timeframes, or guarantees from this placeholder.`,
        icon: <FileText size={22} />,
      },
      {
        title: "Publication is pending",
        copy: "Replace this status notice with the current approved Marketplace text before enabling related customer or professional workflows.",
        icon: <Info size={22} />,
      },
    ],
  };
}

export function PublicInformationPage({ kind }: { kind: PublicInfoKind }) {
  const content = pageContent[kind];
  return (
    <PublicLayout>
      <main>
        <PageIntro eyebrow={content.eyebrow} title={content.title} copy={content.copy} />
        <section className={styles.content}>
          <div className={styles.contentGrid}>
            {content.cards.map((card) => (
              <InformationCard key={card.title} icon={card.icon} title={card.title}><p>{card.copy}</p></InformationCard>
            ))}
            {kind === "contact" && (
              <InformationCard title="Leave a message" wide>
                <p>Messaging is not connected, so this form is presented as unavailable.</p>
                <UnavailableMessageForm />
              </InformationCard>
            )}
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}

