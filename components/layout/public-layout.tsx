import type { ReactNode } from "react";
import { SiteFooter, SiteNavigation } from "@/components/navigation/site-navigation";
import styles from "@/components/marketplace.module.css";

export function PublicLayout({ children }: { children: ReactNode }) {
  return <div className={styles.page}><SiteNavigation />{children}<SiteFooter /></div>;
}

