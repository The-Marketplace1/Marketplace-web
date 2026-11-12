import { MarketplaceBrand } from "@/components/branding/marketplace-brand";
import styles from "@/components/marketplace.module.css";

export function AuthenticationIntro({ audience }: { audience: "customer" | "professional" | "general" }) {
  const copy = audience === "professional"
    ? "Bring your independent practice into a space built around the work you do."
    : audience === "customer"
      ? "A considered place to find independent services, when listings are ready."
      : "A thoughtful starting point for independent work.";
  return (
    <aside className={styles.authAside}>
      <MarketplaceBrand />
      <div>
        <p className={styles.eyebrow}>Marketplace</p>
        <h2>Good work is built on good introductions.</h2>
        <p>{copy}</p>
      </div>
    </aside>
  );
}

