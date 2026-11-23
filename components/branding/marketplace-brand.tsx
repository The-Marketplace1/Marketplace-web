import Link from "next/link";
import styles from "@/components/marketplace.module.css";

export function MarketplaceEarthMark({ large = false }: { large?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" fill="none" className={large ? styles.heroEarth : styles.brandEarth} focusable="false">
      <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="2.5" />
      <path d="M10 32h44M32 10c-7 6-10 13-10 22s3 16 10 22m0-44c7 6 10 13 10 22s-3 16-10 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 43c7-6 14-9 22-12 5-2 9-5 13-9" stroke="var(--teal)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="16" cy="43" r="3" fill="var(--teal)" />
      <circle cx="51" cy="22" r="3" fill="var(--teal)" />
    </svg>
  );
}

export function MarketplaceBrand() {
  return (
    <Link className={styles.brand} href="/" aria-label="The Marketplace home">
      <span className={styles.brandMark}><MarketplaceEarthMark /></span>
      <span>The Marketplace</span>
    </Link>
  );
}
