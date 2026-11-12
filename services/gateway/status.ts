import type { MarketplaceIntegration } from "./errors";

export type IntegrationState = "not-configured" | "waiting-for-contract";

export interface IntegrationStatus {
  id: MarketplaceIntegration;
  label: string;
  state: IntegrationState;
  note: string;
}

const labels: Record<MarketplaceIntegration, string> = {
  "api-gateway": "Marketplace API Gateway",
  authentication: "Authentication",
  customers: "Customer accounts",
  professionals: "Professional accounts",
  services: "Services and discovery",
  bookings: "Bookings",
  payments: "Payments and escrow",
  notifications: "Notifications",
  realtime: "Real-time updates",
  communication: "Customer-professional communication",
  reviews: "Reviews and ratings",
  storage: "File and media storage",
  location: "Maps and location",
  security: "Security controls",
  analytics: "Analytics",
  monitoring: "Monitoring",
};

const integrationIds = Object.keys(labels) as MarketplaceIntegration[];

/**
 * These are intentionally disconnected status records, not health checks.
 * Status must not be inferred from the presence of a URL or credential.
 */
export function getIntegrationStatuses(): IntegrationStatus[] {
  return integrationIds.map((id) => ({
    id,
    label: labels[id],
    state: id === "api-gateway" ? "not-configured" : "waiting-for-contract",
    note:
      id === "api-gateway"
        ? "No approved Gateway adapter is configured. Requests are not being sent."
        : "Waiting for an approved Gateway contract and adapter.",
  }));
}

export function getIntegrationStatus(id: MarketplaceIntegration): IntegrationStatus {
  return (
    getIntegrationStatuses().find((status) => status.id === id) ?? {
      id,
      label: labels[id],
      state: "waiting-for-contract",
      note: "Waiting for an approved Gateway contract and adapter.",
    }
  );
}

