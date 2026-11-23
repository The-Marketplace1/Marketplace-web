# Marketplace API and Gateway contract overview

## Current integration status

Marketplace-web has typed service ports and a fail-closed Gateway registration boundary. It has no verified production adapter, reachable configured Gateway, or live connected Marketplace API. `MARKETPLACE_API_GATEWAY_URL` is server-only; its presence alone proves neither reachability nor implementation. Keep the unavailable UI states until real API responses are tested.

## Verified related-repository evidence

- `api-gateway` registers `/api/auth/*`, dedicated payment/realtime/notification routers, and a catch-all proxy to `BACKEND_API_URL`. The route registry does not prove customer/profile endpoints exist.
- Gateway configuration requires auth/backend/payment/realtime/notification service URLs, JWT/Redis settings and allowed origins.
- `auth-service` source includes register, login, refresh, email verification, password reset, logout, current-user lookup, sessions and 2FA routes. Gateway path mapping and deployed reachability must be verified before web use.
- `shared-types` includes `ProfessionalClient`, professional DTOs/schemas and a generic `UserClient`. The inspected auth-service user routes are admin-only; they do not establish a customer self-service profile API. No customer-specific profile DTO/client was found in the inspected SDK paths.
- `backend-api` is private and its contents were inaccessible in the inspection. Customer, catalog, booking and service API routes remain unverified.

This repository evidence is not a claim that those services are deployed or operational.

## Adapter requirements

Obtain an approved versioned Gateway OpenAPI contract or equivalent. For every operation confirm public path/method, request/response schema, auth/role requirements, error envelope, pagination, rate limit, idempotency, timeout/retry and service owner. Map wire DTOs into UI view types. Do not guess paths, call internal services directly from browsers, or treat credentials as proof of health.

## Integration count

The web code tracks 16 integration entries: Gateway plus 15 domains (authentication, customers, professionals, services, bookings, payments, notifications, realtime, communication, reviews, storage, location, security, analytics, monitoring). This is a domain count, not an endpoint count. No live integration is approved without observed end-to-end evidence.

See [`remediation-register.md`](remediation-register.md) for status and exact dependencies across all 20 audit sections.
