import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import styles from "@/components/marketplace.module.css";

export function EmptyWorkspace({
  icon,
  title,
  copy,
  actionLabel,
}: {
  icon: ReactNode;
  title: string;
  copy: string;
  actionLabel: string;
}) {
  return (
    <section className={styles.workspacePanel} aria-label={`${title} unavailable`}>
      <div>
        <div className={styles.emptyIcon}>{icon}</div>
        <h2>{title}</h2>
        <p>{copy}</p>
        <button className={`${styles.button} ${styles.secondary}`} type="button" disabled title="This action is unavailable while Marketplace data is disconnected">
          {actionLabel} <ChevronRight size={15} />
        </button>
        <span className={styles.disabledHint}>Unavailable until the relevant Marketplace service is connected.</span>
      </div>
    </section>
  );
}

