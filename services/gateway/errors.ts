export type MarketplaceIntegration =
  | "api-gateway"
  | "authentication"
  | "customers"
  | "professionals"
  | "services"
  | "bookings"
  | "payments"
  | "notifications"
  | "realtime"
  | "communication"
  | "reviews"
  | "storage"
  | "location"
  | "security"
  | "analytics"
  | "monitoring";

export class IntegrationUnavailableError extends Error {
  readonly integration: MarketplaceIntegration;

  constructor(integration: MarketplaceIntegration, message?: string) {
    super(
      message ??
        `${integration} is not connected. No request was sent. Configure an approved API Gateway adapter before enabling this operation.`,
    );
    this.name = "IntegrationUnavailableError";
    this.integration = integration;
  }
}

