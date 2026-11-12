import { ConnectionNotice } from "@/components/feedback/connection-notice";
import { PublicLayout } from "@/components/layout/public-layout";
import { PageIntro } from "@/components/shared/page-intro";
import styles from "@/components/marketplace.module.css";

export function PublicProfessionalProfilePage() {
  return (
    <PublicLayout>
      <main>
        <PageIntro eyebrow="Professional profile" title="A profile with a person behind it." copy="Professional profiles will appear here when Marketplace listings are connected." />
        <section className={styles.content}>
          <ConnectionNotice title="Professional profiles are not connected yet." copy="There is no professional record associated with this page. Profile details and contact actions will remain unavailable until real Marketplace data is connected." />
        </section>
      </main>
    </PublicLayout>
  );
}

