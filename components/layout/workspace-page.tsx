import {
  BadgeCheck,
  Bell,
  BriefcaseBusiness,
  CalendarDays,
  CircleHelp,
  CreditCard,
  Leaf,
  MessageCircle,
  Settings2,
  ShieldCheck,
  Star,
  WalletCards,
  Check,
} from "lucide-react";
import { ConnectionNotice } from "@/components/feedback/connection-notice";
import { EmptyWorkspace } from "@/components/feedback/empty-workspace";
import { WorkspaceLayout } from "@/components/layout/workspace-layout";
import type { MarketplaceRole, WorkspaceSection } from "@/components/shared/marketplace-types";
import styles from "@/components/marketplace.module.css";

const descriptions: Record<WorkspaceSection, { title: string; description: string; panelTitle: string; panelCopy: string; action: string }> = {
  dashboard: { title: "Your workspace", description: "A clear place to keep your Marketplace activity in view.", panelTitle: "Your workspace is ready for you.", panelCopy: "When Marketplace is connected, your activity and next steps will appear here. Until then, no records are shown.", action: "Get started" },
  bookings: { title: "Bookings", description: "Keep track of the work you have arranged.", panelTitle: "No booking records are connected.", panelCopy: "Booking details and status updates will appear here when real Marketplace booking data is available.", action: "View bookings" },
  payments: { title: "Payments", description: "Review payment, refund, and escrow status confirmed by Marketplace.", panelTitle: "Payment records are not connected.", panelCopy: "No transactions, refunds, or escrow states are available. Payment actions stay disabled until the Gateway and payment-service contracts are approved.", action: "View transactions" },
  settings: { title: "Settings", description: "Manage the details associated with your Marketplace account.", panelTitle: "Account settings are not connected.", panelCopy: "Profile details, preferences, and account controls will become available when account services are connected.", action: "Edit account details" },
  services: { title: "Your services", description: "Shape the offerings customers can discover.", panelTitle: "No service records are connected.", panelCopy: "There are no saved services to display. Creating, editing, or publishing services is unavailable until Marketplace data is connected.", action: "Add a service" },
  onboarding: { title: "Getting started", description: "Set up your professional presence thoughtfully.", panelTitle: "Professional setup is not connected.", panelCopy: "Profile creation and verification steps cannot be saved yet. No onboarding progress is being recorded.", action: "Save progress" },
  earnings: { title: "Earnings", description: "A clear view of income and payouts, when available.", panelTitle: "Earnings data is not connected.", panelCopy: "No amounts, transactions, or payout information are displayed. Payment services are not connected.", action: "View payout details" },
  reviews: { title: "Reviews & ratings", description: "Feedback should be grounded in a real completed experience.", panelTitle: "No review records are connected.", panelCopy: "When available, reviews will be shown with clear context and verification. No sample ratings or review records are used.", action: "Write a review" },
  messages: { title: "Messages", description: "Keep conversations about your work in one place.", panelTitle: "Messaging is not connected.", panelCopy: "No conversations or message records are displayed. Messaging and delivery are unavailable.", action: "Start a conversation" },
  notifications: { title: "Notifications", description: "Stay oriented as your Marketplace activity changes.", panelTitle: "Notifications are not connected.", panelCopy: "No notification records are available. This space will update only when real Marketplace events are connected.", action: "Mark all as read" },
};

function SettingsPreferences() {
  return (
    <>
      <p className={styles.sectionLabel}>Account preferences</p>
      <div className={styles.settingsGrid}>
        <div className={styles.settingsRow}><div><strong>Profile information</strong><span>Not available yet</span></div><Check size={17} color="var(--secondary-text)" /></div>
        <div className={styles.settingsRow}><div><strong>Notifications</strong><span>Preferences are not connected</span></div><Bell size={17} color="var(--secondary-text)" /></div>
        <div className={styles.settingsRow}><div><strong>Privacy and security</strong><span>Account controls are not connected</span></div><ShieldCheck size={17} color="var(--secondary-text)" /></div>
        <div className={styles.settingsRow}><div><strong>Help</strong><span>Contact channel not configured</span></div><CircleHelp size={17} color="var(--secondary-text)" /></div>
      </div>
    </>
  );
}

function SectionIcon({ section }: { section: WorkspaceSection }) {
  const iconProps = { size: 23 };
  if (section === "reviews") return <Star {...iconProps} />;
  if (section === "settings") return <Settings2 {...iconProps} />;
  if (section === "earnings") return <WalletCards {...iconProps} />;
  if (section === "messages") return <MessageCircle {...iconProps} />;
  if (section === "notifications") return <Bell {...iconProps} />;
  if (section === "services") return <BriefcaseBusiness {...iconProps} />;
  if (section === "bookings") return <CalendarDays {...iconProps} />;
  if (section === "payments") return <CreditCard {...iconProps} />;
  return <Leaf {...iconProps} />;
}

export function WorkspacePage({
  role,
  section,
  detail = false,
}: {
  role: MarketplaceRole;
  section: WorkspaceSection;
  detail?: boolean;
}) {
  const content = descriptions[section];
  const title = detail ? "Booking details" : content.title;
  const description = detail ? "A closer look at a booking and its next steps." : content.description;
  const panelTitle = detail ? "This booking is not connected." : content.panelTitle;
  const panelCopy = detail
    ? "There is no booking record to display. No status, schedule, or action can be confirmed here."
    : content.panelCopy;

  return (
    <WorkspaceLayout role={role} active={section}>
      <div className={styles.workspaceTitle}>
        <div><p className={styles.eyebrow}>{role === "customer" ? "Customer" : "Professional"} space</p><h1>{title}</h1><p>{description}</p></div>
      </div>
      <ConnectionNotice title="Marketplace data is not connected yet." copy="Unavailable actions are disabled. This preview does not create, update, or send data." />
      {section === "reviews" && (
        <p className={styles.reviewNote}>
          <BadgeCheck size={15} style={{ verticalAlign: "middle", marginRight: 5, color: "var(--forest)" }} />
          Reviews are intended to be linked to a verified Marketplace experience. Only genuine, connected records will be shown; there are no review records available now.
        </p>
      )}
      <EmptyWorkspace
        icon={<SectionIcon section={section} />}
        title={panelTitle}
        copy={panelCopy}
        actionLabel={content.action}
      />
      {section === "settings" && <SettingsPreferences />}
    </WorkspaceLayout>
  );
}

