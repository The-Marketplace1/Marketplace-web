import { ArrowRight } from "lucide-react";
import styles from "@/components/marketplace.module.css";

export function UnavailableAction({
  label,
  explanation,
}: {
  label: string;
  explanation: string;
}) {
  return (
    <div>
      <button className={`${styles.button} ${styles.primary}`} type="button" disabled title={explanation}>
        {label} <ArrowRight size={15} />
      </button>
      <span className={styles.disabledHint}>{explanation}</span>
    </div>
  );
}
	
