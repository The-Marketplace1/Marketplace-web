import type { ReactNode } from "react";
import styles from "@/components/marketplace.module.css";

export function MarketplaceButtonLink({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <a className={`${styles.button} ${secondary ? styles.secondary : styles.primary}`} href={href}>
      {children}
    </a>
  );
}

