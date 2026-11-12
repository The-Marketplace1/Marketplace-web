import type { ReactNode } from "react";
import styles from "@/components/marketplace.module.css";

export function InformationCard({
  icon,
  title,
  children,
  wide = false,
}: {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <article className={`${styles.infoCard} ${wide ? styles.wideCard : ""}`}>
      {icon}
      <h2>{title}</h2>
      {children}
    </article>
  );
}

