import { ConnectionNotice } from "@/components/feedback/connection-notice";
import { PublicLayout } from "@/components/layout/public-layout";
import { PageIntro } from "@/components/shared/page-intro";
import styles from "@/components/marketplace.module.css";

export function BookingDetailPage() {
  return (
    <PublicLayout>
      <main>
        <PageIntro eyebrow="Booking details" title="A clear view of the work in progress." copy="Booking records are not connected. No booking status or activity is available here." />
        <section className={styles.content}>
          <ConnectionNotice title="Booking details are not connected yet." copy="There is no booking record associated with this page. Details and actions will remain unavailable until real Marketplace data is connected." />
        </section>
      </main>
    </PublicLayout>
  );
}

