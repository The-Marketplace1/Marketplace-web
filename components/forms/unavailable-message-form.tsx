import styles from "@/components/marketplace.module.css";

export function UnavailableMessageForm() {
  return (
    <div>
      <label className={styles.formField} style={{ marginTop: 18 }}>
        Message
        <textarea className={styles.input} placeholder="Message entry is unavailable" disabled rows={4} />
      </label>
      <p className={styles.disabledHint}>Disabled: no message delivery service is connected. Nothing entered here will be sent.</p>
      <button className={`${styles.button} ${styles.primary}`} type="button" disabled title="Contact messaging is not connected yet">
        Send message
      </button>
    </div>
  );
}

