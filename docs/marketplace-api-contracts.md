# Marketplace API and Gateway contract overview

This repository intentionally does not make live Marketplace requests. The service contracts exist as interface boundaries with explicit unavailable-state checks so the UI stays honest until an approved Gateway and contract are in place.

## Gateway boundary

The contract boundary is defined in:

- `services/gateway/errors.ts`
- `services/gateway/status.ts`
- `services/gateway/adapter.ts`
- `services/gateway/config.ts`

The root contract states:

- no approved API Gateway adapter is configured
- no request is sent
- each domain is tracked as a separate integration

## Integration domains

The repository defines the following domains in `MarketplaceIntegration`:

1. `api-gateway`
2. `authentication`
3. `customers`
4. `professionals`
5. `services`
6. `bookings`
7. `payments`
8. `notifications`
9. `realtime`
10. `communication`
11. `reviews`
12. `storage`
13. `location`
14. `security`
15. `analytics`
16. `monitoring`

## Domain contracts currently represented

### Authentication
- `services/types.ts` defines login, signup, password recovery, and email verification methods.

### Customer and professional data
- customer and professional service ports are defined as app-facing interfaces only; they must be mapped to approved Marketplace shared types before live integration.

### Catalog / services
- discovery and service detail operations are declared but explicitly unavailable until the backend contract exists.

### Bookings and payments
- booking lifecycle and payment operations are represented as ports; the UI remains disabled until the backend is available.

### Communication, reviews, and realtime
- message and notification flows are represented as typed ports and are intentionally not connected.

### Storage and location
- file/media uploads and address lookup are represented as adapter boundaries with explicit unavailable errors.

### Security, analytics, and monitoring
- monitoring and analytics capabilities are defined, but they are not connected to a live backend.

## Important rule

The app uses a fail-closed pattern:

- if the Gateway is not registered, `getMarketplaceGatewayAdapter()` throws `IntegrationUnavailableError`
- if a location provider is absent, a location-specific unavailable error is thrown
- all UI messages explain the unavailability instead of claiming connected data

## Recommended next step

Once the Marketplace backend contract is approved, each domain should be implemented via a single Gateway adapter, then registered in the app and surfaced through the existing integration status UI.
