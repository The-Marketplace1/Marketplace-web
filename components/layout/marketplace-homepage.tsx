import { ArrowRight, ArrowUpRight, CreditCard, HeartHandshake, Search, ShieldCheck, Star } from "lucide-react";
import { MarketplaceEarthMark } from "@/components/branding/marketplace-brand";
import { MarketplaceButtonLink } from "@/components/buttons/marketplace-button";
import { PublicLayout } from "@/components/layout/public-layout";
import styles from "@/components/marketplace.module.css";

export function MarketplaceHomepage() {
  return (
    <PublicLayout>
      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>A more connected way to get things done</p>
            <h1>Every Service You Need. <em>One Marketplace.</em></h1>
            <p className={styles.heroLead}>Find trusted professionals, compare services, and get the work done with confidence. Everything you need, all in one place.</p>
            <form className={styles.searchPanel} role="search" aria-label="Search Marketplace">
              <label className={styles.searchLabel} htmlFor="marketplace-search">Search services or professionals</label>
              <div className={styles.searchRow}>
                <div className={styles.searchInputWrap}>
                  <Search size={18} aria-hidden="true" />
                  <input
                    id="marketplace-search"
                    name="query"
                    type="search"
                    placeholder="Try a service, category, or name"
                    aria-describedby="marketplace-search-status"
                    disabled
                  />
                </div>
                <button className={styles.searchAction} type="submit" disabled>Search</button>
              </div>
              <p className={styles.searchHelp} id="marketplace-search-status">
                Live search is not connected yet. No search request will be sent.
              </p>
            </form>
            <div className={styles.heroButtons}>
              <MarketplaceButtonLink href="/explore">Explore Marketplace <ArrowUpRight size={15} /></MarketplaceButtonLink>
              <MarketplaceButtonLink href="/signup/professional" secondary>Join as a professional</MarketplaceButtonLink>
            </div>
            <div className={styles.heroNote}><span className={styles.noteDot} />For customers and independent professionals</div>
          </div>
          <div className={styles.artStage} aria-label="Marketplace connected Earth globe" role="img">
            <span className={styles.artIndex}>PEOPLE, CONNECTED · 01</span>
            <MarketplaceEarthMark large />
            <div className={styles.artTag}><span>One place to find help</span><strong>People, connected.</strong></div>
          </div>
        </section>

        <section className={styles.section} aria-label="Explore Marketplace">
          <div className={styles.serviceStates}>
            <article className={styles.serviceStateCard} aria-labelledby="popular-categories-title">
              <p className={styles.eyebrow}>Discover</p>
              <h2 id="popular-categories-title">Popular service categories</h2>
              <div className={styles.dataState}>
                <span className={styles.dataStateIcon}><Search size={19} aria-hidden="true" /></span>
                <div>
                  <strong>Service categories are not connected</strong>
                  <p>Categories will appear here when the approved Marketplace catalog is available.</p>
                </div>
              </div>
            </article>
            <article className={styles.serviceStateCard} aria-labelledby="featured-professionals-title">
              <p className={styles.eyebrow}>Meet the professionals</p>
              <h2 id="featured-professionals-title">Featured professionals</h2>
              <div className={styles.dataState}>
                <span className={styles.dataStateIcon}><HeartHandshake size={19} aria-hidden="true" /></span>
                <div>
                  <strong>No live profiles to show yet</strong>
                  <p>Profiles and verification status will come from Marketplace services, not sample listings.</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="how-it-works" className={`${styles.section} ${styles.sectionTint}`}>
          <div className={styles.sectionHead}>
            <div><p className={styles.eyebrow}>How Marketplace works</p><h2>Find help and get things moving, one clear step at a time.</h2></div>
            <p>Marketplace is designed to make discovery and hiring simple. Live booking and payment actions depend on approved Gateway services.</p>
          </div>
          <div className={styles.steps}>
            <article className={styles.stepFeature}>
              <span className={styles.stepNo}>01 — DISCOVER</span>
              <h3>Start with the right professional.</h3>
              <p>Search services and compare real profiles once Marketplace discovery is connected.</p>
            </article>
            <div className={styles.stepStack}>
              <article className={styles.stepTile}><Search size={22} /><div><h3>Agree on the work</h3><p>Choose a service, price, and time before sending a booking request.</p></div></article>
              <article className={styles.stepTile}><HeartHandshake size={22} /><div><h3>Complete with confidence</h3><p>Booking updates, payment status, escrow, and reviews rely on backend confirmation.</p></div></article>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.split}>
            <div className={styles.splitCopy}>
              <p className={styles.eyebrow}>Trust, by design</p>
              <h2>Confidence should be backed by real information.</h2>
              <p>Identity checks, reviews, booking status, and payment state must come from approved Marketplace services. This website will not label a professional verified or a payment complete without backend confirmation.</p>
              <a className={styles.inlineLink} href="/about">Learn about our standards <ArrowRight size={15} /></a>
            </div>
            <aside className={styles.trustPanel} aria-label="Marketplace trust standards">
              <div className={styles.trustItem}><ShieldCheck size={20} aria-hidden="true" /><div><strong>Verification is backend-confirmed</strong><span>No professional is marked verified by the website alone.</span></div></div>
              <div className={styles.trustItem}><Star size={20} aria-hidden="true" /><div><strong>Reviews follow completed bookings</strong><span>Customer ratings appear only when linked to a real service.</span></div></div>
              <div className={styles.trustItem}><CreditCard size={20} aria-hidden="true" /><div><strong>Payments stay in the payment service</strong><span>Transaction records and escrow status are never simulated here.</span></div></div>
            </aside>
          </div>
        </section>

        <section className={styles.closing}>
          <p className={styles.eyebrow}>Your next step</p>
          <h2>One place for customers and professionals to get started.</h2>
          <div className={styles.heroButtons}><MarketplaceButtonLink href="/signup/customer">Join as a customer</MarketplaceButtonLink><MarketplaceButtonLink href="/signup/professional" secondary>Join as a professional</MarketplaceButtonLink></div>
        </section>
      </main>
    </PublicLayout>
  );
}

