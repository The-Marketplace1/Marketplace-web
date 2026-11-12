import "server-only";

import { IntegrationUnavailableError } from "./errors";
import type {
  AuthenticationServicePort,
  AnalyticsServicePort,
  BookingServicePort,
  CommunicationServicePort,
  CustomerServicePort,
  MarketplaceLocationService,
  MarketplaceGatewayAdapter,
  MediaStorageServicePort,
  MonitoringServicePort,
  NotificationServicePort,
  PaymentServicePort,
  ProfessionalServicePort,
  RealtimeServicePort,
  ReviewServicePort,
  SecurityServicePort,
  ServiceCatalogPort,
} from "../types";

/**
 * These ports are Marketplace-web-facing interfaces, not upstream API
 * contracts. An adapter must be implemented only after reviewing the approved
 * shared-types and Gateway contract.
 */
export type { MarketplaceGatewayAdapter } from "../types";

let adapter: MarketplaceGatewayAdapter | undefined;

export function registerMarketplaceGatewayAdapter(
  nextAdapter: MarketplaceGatewayAdapter,
): void {
  adapter = nextAdapter;
}

export function getMarketplaceGatewayAdapter(): MarketplaceGatewayAdapter {
  if (!adapter) {
    throw new IntegrationUnavailableError("api-gateway");
  }
  return adapter;
}

export function getServicePorts(): {
  authentication: AuthenticationServicePort;
  customers: CustomerServicePort;
  professionals: ProfessionalServicePort;
  services: ServiceCatalogPort;
  bookings: BookingServicePort;
  payments: PaymentServicePort;
  notifications: NotificationServicePort;
  realtime: RealtimeServicePort;
  communication: CommunicationServicePort;
  reviews: ReviewServicePort;
  storage: MediaStorageServicePort;
  location: MarketplaceLocationService;
  security: SecurityServicePort;
  analytics: AnalyticsServicePort;
  monitoring: MonitoringServicePort;
} {
  const gateway = getMarketplaceGatewayAdapter();
  return {
    authentication: gateway.authentication,
    customers: gateway.customers,
    professionals: gateway.professionals,
    services: gateway.services,
    bookings: gateway.bookings,
    payments: gateway.payments,
    notifications: gateway.notifications,
    realtime: gateway.realtime,
    communication: gateway.communication,
    reviews: gateway.reviews,
    storage: gateway.storage,
    location: gateway.location,
    security: gateway.security,
    analytics: gateway.analytics,
    monitoring: gateway.monitoring,
  };
}

