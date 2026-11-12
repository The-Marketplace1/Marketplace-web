# Marketplace-web

This repository is the root Next.js application for the Marketplace web experience. It is the authoritative app for the product UI, while `my-next-app/` is a separate starter scaffold and should not be treated as the production app unless the team explicitly adopts it.

## Repository purpose

`Marketplace-web` is a marketplace frontend preview for customers and professionals. It intentionally avoids claiming live data or real account actions while the approved Marketplace API Gateway and service contracts are not in place.

## Authoritative app

- Root app: `app/`, `components/`, `features/`, `services/`, `types/`, `validation/`
- Secondary starter scaffold: `my-next-app/`

The root app is the active product code. `my-next-app/` is a generated Next.js starter and is not the live storefront implementation.

## Current API integration status

The repo explicitly tracks the integration state through `services/gateway/status.ts` and prevents requests from being sent until a Gateway adapter is registered.

The web app currently has these integration domains:

1. api-gateway
2. authentication
3. customers
4. professionals
5. services
6. bookings
7. payments
8. notifications
9. realtime
10. communication
11. reviews
12. storage
13. location
14. security
15. analytics
16. monitoring

Status: `api-gateway` is `not-configured`; all service domains are `waiting-for-contract`.

## Route alignment

The app exposes public routes as:

- `/`
- `/explore`
- `/login`
- `/forgot-password`
- `/verify-email`
- `/signup`
- `/signup/customer`
- `/signup/professional`

The path aliases under `app/authentication/*` still exist, but the canonical public routes are the top-level aliases above so the Playwright tests and production navigation align.

## Development

```bash
pnpm install
pnpm dev
```

## Notes

- `.env.example` defines the server-side `MARKETPLACE_API_GATEWAY_URL` and public `NEXT_PUBLIC_SITE_URL` placeholders.
- No real API calls are made unless an approved adapter is registered.
