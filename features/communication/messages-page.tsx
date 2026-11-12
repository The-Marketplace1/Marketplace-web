import type { MarketplaceRole } from "@/components/shared/marketplace-types";
import { WorkspacePage } from "@/components/layout/workspace-page";

export function MessagesPage({ role }: { role: MarketplaceRole }) {
  return <WorkspacePage role={role} section="messages" />;
}

