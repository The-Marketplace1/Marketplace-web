import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { MarketplaceBrand } from "@/components/branding/marketplace-brand";
import styles from "@/components/marketplace.module.css";

export function SiteNavigation() {
  return (
    <header className={styles.nav}>
      <MarketplaceBrand />
      <nav className={styles.navLinks} aria-label="Main navigation">
        <a href="/explore">Explore services</a>
        <a href="/explore#categories">Categories</a>
        <Link href="/#how-it-works">How it works</Link>
        <a href="/signup/professional">Become a professional</a>
        <a href="/contact">Help</a>
      </nav>
      <div className={styles.navActions}>
        <a className={`${styles.button} ${styles.secondary}`} href="/login">Log in</a>
        <a className={`${styles.button} ${styles.primary}`} href="/signup/customer">Get started <ArrowRight size={15} /></a>
        <details className={styles.navMenu}>
          <summary>Menu</summary>
          <nav className={styles.mobileMenuLinks} aria-label="More pages">
            <a href="/explore">Explore services</a>
            <a href="/explore#categories">Categories</a>
            <Link href="/#how-it-works">How it works</Link>
            <a href="/signup/professional">Become a professional</a>
            <a href="/contact">Help and support</a>
            <a href="/login">Sign in</a>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <MarketplaceBrand />
      <nav className={styles.footerLinks} aria-label="Footer navigation">
        <a href="/about">About</a>
        <a href="/contact">Help and support</a>
        <a href="/terms">Terms</a>
        <a href="/privacy">Privacy</a>
        <a href="/cookies">Cookies</a>
        <a href="/refunds">Refunds</a>
        <a href="/cancellations">Cancellations</a>
        <a href="/escrow-and-payments">Escrow and payments</a>
        <a href="/disputes">Disputes</a>
        <a href="/professional-verification">Professional verification</a>
      </nav>
      <small>Independent work, thoughtfully found.</small>
    </footer>
  );
}

