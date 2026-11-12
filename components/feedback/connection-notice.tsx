import { Info } from "lucide-react";
import styles from "@/components/marketplace.module.css";

export function ConnectionNotice({
  title = "Marketplace data is not connected yet.",
  copy = "This area will become available when the Marketplace data connection is in place. No records or actions are being shown as complete.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <div className={styles.connectedState} role="status">
      <Info className={styles.bannerIcon} size={18} aria-hidden="true" />
      <strong>{title}</strong><p>{copy}</p>
    </div>
  );
}

