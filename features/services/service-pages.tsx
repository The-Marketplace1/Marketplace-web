import { BriefcaseBusiness, Compass, Info } from "lucide-react";
import { ConnectionNotice } from "@/components/feedback/connection-notice";
import { InformationCard } from "@/components/cards/information-card";
import { PublicLayout } from "@/components/layout/public-layout";
import { PageIntro } from "@/components/shared/page-intro";
import styles from "@/components/marketplace.module.css";

export function ExplorePage() {
  return (
    <PublicLayout>
      <main>
        <PageIntro
          eyebrow="Explore"
          title="The right work begins with the right introduction."
          copy="Discover independent professionals and their services as Marketplace grows. For now, the directory is not connected and no provider listings are displayed."
        />
        <section id="categories" className={styles.content}>
          <ConnectionNotice
            title="Professional and service listings are not connected yet."
            copy="There are no sample professionals or services in this directory. Search and filtering will be available when real Marketplace listings are connected."
          />
          <div className={styles.contentGrid} style={{ marginTop: 18 }}>
            <InformationCard icon={<Compass size={22} />} title="For customers">
              <p>Browse service offerings, compare what matters to you, and choose who to contact when listings are available.</p>
              <span className={styles.disabledHint}>Discovery is unavailable while listings are disconnected.</span>
            </InformationCard>
            <InformationCard icon={<BriefcaseBusiness size={22} />} title="For professionals">
              <p>Build a profile and shape your services for customers looking for independent expertise.</p>
              <span className={styles.disabledHint}>Professional listings are not connected yet.</span>
            </InformationCard>
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}

export function ServiceDetailPage() {
  return (
    <PublicLayout>
      <main>
        <PageIntro eyebrow="Service details" title="Understand the work before it begins." copy="Service information will appear here when Marketplace listings are connected." />
        <section className={styles.content}>
          <ConnectionNotice title="Service details are not connected yet." copy="There is no service record associated with this page. Details and actions will remain unavailable until real Marketplace data is connected." />
          <p className={styles.disabledHint}><Info size={14} style={{ verticalAlign: "middle", marginRight: 5 }} />No service details or booking actions are available in this preview.</p>
        </section>
      </main>
    </PublicLayout>
  );
}

