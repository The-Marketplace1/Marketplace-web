# Marketplace-web

The root Next.js application is the Marketplace web product. `my-next-app/` is an independent starter scaffold and is not the authoritative storefront.

The current application provides Marketplace UI and explicit disconnected states. It must not be treated as a live marketplace until Gateway APIs, credentials, legal content, deployment configuration, and end-to-end journeys are verified.

## Develop

```bash
pnpm install
pnpm dev
```

## Checks

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm test:e2e
pnpm build
```

## Configuration

- `MARKETPLACE_API_GATEWAY_URL`: server-only Gateway origin. Its presence does not prove that the Gateway is reachable or its contracts are available.
- `NEXT_PUBLIC_SITE_URL`: canonical origin for metadata, robots and sitemap. Set only to a domain controlled by the deployment owner. `https://Marketplace.com` is intended, not verified as registered or deployed.

See [`docs/remediation-register.md`](docs/remediation-register.md) and [`docs/marketplace-api-contracts.md`](docs/marketplace-api-contracts.md) for repository evidence, current integration state, blockers and verification results. No production deployment or real provider/payment integration is claimed.
