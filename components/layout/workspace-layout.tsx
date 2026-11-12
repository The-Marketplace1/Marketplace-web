import type { ReactNode } from "react";
import { MarketplaceBrand } from "@/components/branding/marketplace-brand";
import { WorkspaceNavigation } from "@/components/navigation/workspace-navigation";
import type { MarketplaceRole, WorkspaceSection } from "@/components/shared/marketplace-types";
import styles from "@/components/marketplace.module.css";

export function WorkspaceLayout({
  role,
  active,
  children,
}: {
  role: MarketplaceRole;
  active: WorkspaceSection;
  children: ReactNode;
}) {
  const label = role === "customer" ? "Customer" : "Professional";
  return (
    <div className={`${styles.page} ${styles.workspace}`}>
      <header className={styles.workspaceTop}>
        <MarketplaceBrand />
        <div className={styles.workspaceTopRight}>
          <span className={styles.workspaceGreeting}>{label} workspace</span>
          <span className={styles.tag}><span className={styles.noteDot} />Preview</span>
        </div>
      </header>
      <div className={styles.workspaceLayout}>
        <WorkspaceNavigation role={role} active={active} />
        <main className={styles.workspaceContent}>{children}</main>
      </div>
    </div>
  );
}

