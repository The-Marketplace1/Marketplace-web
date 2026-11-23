# Marketplace-web Remediation Register

**Branch:** `remediation/complete-audit-fixes`  
**Scope:** Marketplace-web only; no merge or deployment.  
**Evidence policy:** Repository inspection is not proof of runtime behavior. Test/build results are listed only after they have actually been executed.

## Status definitions

- **FIXED AND VERIFIED** — implementation and behavior independently exercised.
- **FIXED BUT NOT VERIFIED** — code change made; runtime/test verification remains.
- **PARTIALLY FIXED** — only part is implemented.
- **BLOCKED BY EXTERNAL DEPENDENCY** — provider credentials, external account, domain, or access is required.
- **BLOCKED BY ANOTHER REPOSITORY** — API/contract/persistence is owned elsewhere.
- **NOT FIXED** — actionable item remains.
- **NOT APPLICABLE** — outside web-client responsibility.
- **DEFERRED BY PRODUCT SCOPE** — excluded from initial launch.

## 20-section findings register

| # | Area | Findings and repository evidence | Status | Required next action |
|---|---|---|---|---|
| 1 | API Gateway | Gateway adapter registration fails closed; no production adapter, reachable URL, endpoint contract, or health test was verified. | BLOCKED BY ANOTHER REPOSITORY | Obtain approved versioned Gateway API contract, error envelope, auth rules, and deployed environment; then implement and test server adapter. |
| 2 | Authentication | Auth forms are unavailable-state UI. Auth-service has internal routes but Gateway routing/path mapping and secure browser session design are not verified. | BLOCKED BY ANOTHER REPOSITORY | Approve Gateway/auth routes, cookie/session strategy, OAuth callback origins, and token rotation behavior. |
| 3 | Customer experience | Customer profile/dashboard/settings are placeholder states; no customer self-service API contract verified. | BLOCKED BY ANOTHER REPOSITORY | Backend must provide authenticated self-profile read/update, dashboard and upload operations with ownership enforcement. |
| 4 | Professional experience | Professional profile, onboarding, verification, service management, availability and earnings are not wired. | BLOCKED BY ANOTHER REPOSITORY | Confirm backend professional APIs and verification authorization/state contract. |
| 5 | Search/discovery | Search is disabled; explore page states no live listings. SDK professional search exists, but Gateway exposure and live backend route are unverified. | BLOCKED BY ANOTHER REPOSITORY | Verify catalog/search contract, filters, pagination, sorting and public listing policy. |
| 6 | Booking | No live booking create/list/transition operations in UI. | BLOCKED BY ANOTHER REPOSITORY | Backend must define availability conflict checks, idempotency, actor ownership, state transitions and cancellation/dispute rules. |
| 7 | Payments | Payment UI is disconnected. No provider initiation/verification/webhook/escrow contract or sandbox credentials are verified. | BLOCKED BY ANOTHER REPOSITORY | Payment service must own payment truth, 5/95 calculation, provider signatures, idempotency, refund/dispute/release rules. |
| 8 | Communication/realtime | Typed ports only; no verified transport, route, event schema or authorization. Voice/video deferred. | BLOCKED BY ANOTHER REPOSITORY | Approve Gateway/socket protocol, event auth, message delivery and reconnect behavior. |
| 9 | Location | Provider-neutral location wrapper exists but no selected provider or credentials. | BLOCKED BY EXTERNAL DEPENDENCY | Select provider, provision restricted credentials and approve location/privacy handling. |
| 10 | Storage | Upload ports exist; signed upload, authorization, scan, retention and deletion are unverified. | BLOCKED BY ANOTHER REPOSITORY | Storage/backend owner supplies signed upload/download, content restrictions and malware scan contract. |
| 11 | Security | Client schemas and fail-closed UI exist; they do not prove server authorization, secure session, CSRF/CSP or upload/payment security. | PARTIALLY FIXED | Backend and deployment owners verify server-enforced controls; run web security review against configured environment. |
| 12 | Shared contracts | Web uses app view models. Shared SDK has professional and generic user clients, but package consumption and live API parity are not established. | BLOCKED BY ANOTHER REPOSITORY | Publish approved shared package and Gateway schemas; add response mapping and contract compatibility tests. |
| 13 | Database/persistence | Browser must not access the database; durable data paths cannot be verified in this frontend repository. | NOT APPLICABLE | Backend/database owner validates constraints, migrations, backup, Redis and recovery. |
| 14 | Branding | Existing palette was present. Branch standardizes the wordmark/Earth symbol and adds matching favicon. Visual contrast and browser rendering are not executed here. | FIXED BUT NOT VERIFIED | Run screenshot, viewport, accessibility and design approval checks. |
| 15 | SEO/metadata | Sitemap, manifest, consistent brand metadata and favicon were missing. Added environment-gated canonical metadata/sitemap; only home and explore included to avoid indexing placeholder legal/private pages. | FIXED BUT NOT VERIFIED | Run route/build tests; configure canonical origin only after domain control is verified. Dynamic listings depend on catalog API. |
| 16 | Deployment | No production env, DNS/SSL/domain, hosting, CORS or rollback evidence. No deployment performed. | BLOCKED BY EXTERNAL DEPENDENCY | Deployment owner configures secrets, origin, health checks and rollback. Verify Marketplace.com ownership before claiming live status. |
| 17 | Monitoring | Error capture port exists but no provider configuration or credential evidence. | BLOCKED BY EXTERNAL DEPENDENCY | Select approved monitor and privacy-safe schema, then verify ingestion and alerts. |
| 18 | Legal/trust | Policy routes intentionally state approved content/contact is unavailable; legal source content and support contact have not been supplied. | BLOCKED BY ANOTHER REPOSITORY | Legal owner supplies reviewed, versioned policy text and dates; support owner confirms working contact channel. |
| 19 | Testing | Vitest/Playwright scripts and tests exist. New sitemap/robots tests were added in this branch but have not been run in this tool environment. | FIXED BUT NOT VERIFIED | Execute lint, typecheck, unit/e2e, and production build in a dependency-enabled environment; document actual outcomes. |
| 20 | Release blockers | No verified live API flows, secrets, provider credentials, domain, legal approval, payment sandbox or production operation. | NOT FIXED | Do not release until dependency owners provide evidence and critical journeys pass end-to-end. |

## Product-scope decisions

- Root Next.js app remains the product app; `my-next-app/` remains an untouched starter scaffold.
- No admin app is added.
- Voice/video is deferred.
- No fake API successes, fabricated listings, ratings, testimonials, verification or earnings are allowed.
- `Marketplace.com` is the intended domain, not evidence of registration, ownership, DNS, SSL, or deployment.
- Tests and build commands are not reported as passing unless actually run.

## Verification log

| Check | Result |
|---|---|
| Repository branch | `remediation/complete-audit-fixes`; created from `main` at `b23e0b63ea5303a37baec321c832a844b651bbd3` |
| Git working-tree status | Not available through current GitHub API-only tool session |
| Unit tests / lint / typecheck / e2e / build | Not run in this session |
| Browser console / server logs / API connectivity | Not run; no runnable environment or credentials provided |
| Domain / SSL / deployment | Not verified; no deployment performed |
