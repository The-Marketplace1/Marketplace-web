import Link from "next/link";
import styles from "@/components/marketplace.module.css";

export function MarketplaceEarthMark({ large = false }: { large?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={large ? styles.heroEarth : styles.brandEarth}>
      <circle cx="12" cy="12" r="9.1" stroke="currentColor" strokeWidth={large ? ".1" : "1.45"} />
      <path d="M3.2 12h17.6M9 3.5C6.4 5.7 5 8.6 5 12s1.4 6.3 4 8.5m6-17C17.6 5.7 19 8.6 19 12s-1.4 6.3-4 8.5" stroke="currentColor" strokeWidth={large ? ".09" : "1.1"} strokeLinecap="round" />
      <path d="M5 16.6c2.1-1.8 4.4-3 7.1-3.8 2.1-.6 4.2-1.7 6.7-3.7" stroke="var(--teal)" strokeWidth={large ? ".14" : "1.45"} strokeLinecap="round" />
      <circle cx="5" cy="16.6" r={large ? ".2" : ".9"} fill="var(--teal)" />
      <circle cx="18.8" cy="9.1" r={large ? ".2" : ".9"} fill="var(--teal)" />
    </svg>
  );
}

export function MarketplaceBrand() {
  return (
    <Link className={styles.brand} href="/" aria-label="Marketplace home">
      <span className={styles.brandMark}><MarketplaceEarthMark /></span>
      <span>marketplace</span>
    </Link>
  );
}

