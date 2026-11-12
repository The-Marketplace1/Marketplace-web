import {
  ArrowUpRight,
  Bell,
  BriefcaseBusiness,
  CalendarDays,
  Compass,
  CreditCard,
  LockKeyhole,
  MessageCircle,
  Search,
  Settings2,
  Sparkles,
  Star,
  WalletCards,
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import type { MarketplaceRole, WorkspaceSection } from "@/components/shared/marketplace-types";
import styles from "@/components/marketplace.module.css";

const items: Record<MarketplaceRole, { key: WorkspaceSection; label: string; href: string; icon: ReactNode }[]> = {
  customer: [
    { key: "dashboard", label: "Overview", href: "/customer/dashboard", icon: <Compass size={16} /> },
    { key: "bookings", label: "My bookings", href: "/customer/bookings", icon: <CalendarDays size={16} /> },
    { key: "payments", label: "Payments", href: "/customer/payments", icon: <CreditCard size={16} /> },
    { key: "reviews", label: "Reviews", href: "/customer/reviews", icon: <Star size={16} /> },
    { key: "messages", label: "Messages", href: "/customer/messages", icon: <MessageCircle size={16} /> },
    { key: "notifications", label: "Notifications", href: "/customer/notifications", icon: <Bell size={16} /> },
    { key: "settings", label: "Settings", href: "/customer/settings", icon: <Settings2 size={16} /> },
  ],
  professional: [
    { key: "dashboard", label: "Overview", href: "/professional/dashboard", icon: <Compass size={16} /> },
    { key: "onboarding", label: "Get started", href: "/professional/onboarding", icon: <Sparkles size={16} /> },
    { key: "services", label: "My services", href: "/professional/services", icon: <BriefcaseBusiness size={16} /> },
    { key: "bookings", label: "Bookings", href: "/professional/bookings", icon: <CalendarDays size={16} /> },
    { key: "earnings", label: "Earnings", href: "/professional/earnings", icon: <WalletCards size={16} /> },
    { key: "reviews", label: "Reviews", href: "/professional/reviews", icon: <Star size={16} /> },
    { key: "messages", label: "Messages", href: "/professional/messages", icon: <MessageCircle size={16} /> },
    { key: "notifications", label: "Notifications", href: "/professional/notifications", icon: <Bell size={16} /> },
    { key: "settings", label: "Settings", href: "/professional/settings", icon: <Settings2 size={16} /> },
  ],
};

export function WorkspaceNavigation({ role, active }: { role: MarketplaceRole; active: WorkspaceSection }) {
  const label = role === "customer" ? "Customer" : "Professional";
  return (
    <aside className={styles.sidebar}>
      <p className={styles.sideLabel}>{label} workspace</p>
      <nav className={styles.sideLinks} aria-label={`${label} navigation`}>
        {items[role].map((item) => (
          <a
            key={item.key}
            className={`${styles.sideLink} ${active === item.key ? styles.sideActive : ""}`}
            href={item.href}
            aria-current={active === item.key ? "page" : undefined}
          >
            {item.icon}<span>{item.label}</span>
          </a>
        ))}
      </nav>
      <p className={styles.sideLabel}>Marketplace</p>
      <nav className={styles.sideLinks} aria-label="Marketplace navigation">
        <a className={styles.sideLink} href="/explore"><Search size={16} /><span>Explore</span></a>
        <Link className={styles.sideLink} href="/"><ArrowUpRight size={16} /><span>Public site</span></Link>
      </nav>
      <a className={styles.sideLink} href="/login"><LockKeyhole size={16} /><span>Account access</span></a>
      <span className={styles.disabledHint}>Sign-in is not connected.</span>
      <span className={styles.disabledHint}><a href={`/${role}/settings`}>Account settings</a></span>
    </aside>
  );
}

