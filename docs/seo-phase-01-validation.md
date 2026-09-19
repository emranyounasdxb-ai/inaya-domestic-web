# SEO Phase 1 local validation

## Scope and starting gate

- Repository: C:/Projects/inaya-domestic-web only.
- Starting branch: main; clean working tree.
- Starting HEAD: 021a5e0bf32c342b20fbf72127b4b25a02ee0393.
- Implementation branch: seo/phase-01-critical-foundation.
- No fetch, pull, push, PR, merge, deployment or production mutation.
- UI, content, translations, assets and forms were not edited.

## Implemented foundations

- robots.txt allows all existing public pages and assets. No existing administrative/private/API routes were found, so the obsolete API disallow was removed. This is crawl guidance, not access control.
- Robots, sitemap and metadata consistently use the repository's production origin https://inayadomestic.ae, not an arbitrary build environment URL.
- Sitemap includes all 140 indexable localized routes (70 English, 70 Arabic), including booking, careers, pricing and blog previously omitted. Root language redirect, errors and duplicates are excluded.
- Removed synthetic build-time lastmod; no reliable route-level modification dates exist in the source.
- Every localized page has one absolute self-canonical and reciprocal en/ar links. x-default points to its exact English equivalent, matching the default locale and avoiding the redirect root.
- Dynamic service, country-source and emirate/location pages retain existing route generation and content.
- Removed inherited homepage alternates; corrected inaya-advantages metadata that incorrectly pointed to nonexistent why-choose-inaya.
- Disabled next-intl automatic hreflang HTTP headers to avoid conflicting host-derived alternatives/root x-default alongside explicit metadata.
- Production server and cPanel export use trailing-slash canonical routes. Removed forced dynamic rendering (already stripped by deployment) and added an environment-controlled local export build without replacing tracked configuration files.
- Context7 Next.js and next-intl guidance informed metadata replacement, localized sitemap generation and disabling automatic alternate headers.

## Commands and results

- npm run lint: PASS (final source/test changes).
- npx tsc --noEmit --incremental false: PASS.
- npm run build: PASS (fresh final production build).
- PowerShell: $env:NEXT_PUBLIC_STATIC_EXPORT='true'; npm run build: PASS. Framework warning notes middleware/API routes do not execute on static hosts; no API routes exist here.
- node --test tests/seo-export.test.mjs: 2 PASS, 0 FAIL. Export sitemap matches all 140 localized HTML directory indexes exactly; all canonicals/alternates are absolute, reciprocal and resolve to generated files; no duplicate URLs, unsupported lastmod, HTML noindex or refresh redirects.
- Local production server: npm run start -- --port 3191.
- PowerShell: $env:PLAYWRIGHT_PORT='3191'; npx playwright test --project=chromium --grep-invert 'carousel autoplay|carousel controls|carousel disables' --output=.next/phase-01-final-test-results: 50 PASS, 0 FAIL (31.3s). Includes every sitemap route returning 200 without redirects, canonical/hreflang checks, EN/AR homepage, services, locations, informational pages, direction/viewport checks and offer controls.
- git diff --check: PASS using repository Git settings. Git reports expected Windows LF/CRLF conversion warnings, not diff-check errors.

### Validation limitations and earlier failures

Initial tests exposed slashless-link assertions and a case-sensitive hrefLang parser; those Phase 1 assertions were corrected. Full-route checks exposed the real inaya-advantages canonical defect, fixed and revalidated.

A broader 47-test run had 43 passes and four failures: the now-fixed canonical issue and three unmodified homepage carousel interaction tests. Those three time out because the existing Sierra Leone offer modal backdrop intercepts hover/click actions. They are excluded explicitly from the final scoped run; no claim of a fully green unfiltered suite is made. Homepage and offer components/tests remain unchanged. Earlier failure artifacts are retained locally under .next/phase-01-earlier-test-results; final results under .next/phase-01-final-test-results. Neither is committed.

## Unresolved hosting/WAF checks

Inspection of proxy.ts, Next.js configurations, vercel.json and the cPanel workflow-generated .htaccess found no repository-controlled 406 response, bot deny rule, ModSecurity rule or content-negotiation restriction explaining the audit concern. The non-production host noindex header is intentional and preserved. It is not a Googlebot block.

Server/hosting access is required to correlate the audit's exact failing URL, timestamp, method, request headers and user agent with Apache/cPanel/ModSecurity/CDN WAF logs, inspect effective server configuration (including inherited rules), and verify production robots/sitemap and localized page responses. No live production crawl or WAF probe was performed. A spoofed user agent alone would not verify genuine Googlebot access. Googlebot blockage is unverified and is not claimed.

## Exact changed files (30)

- C:/Projects/inaya-domestic-web/app/[locale]/[locationSlug]/page.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/about/layout.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/blog/layout.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/booking/layout.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/careers/layout.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/contact/layout.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/faq/layout.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/how-it-works/layout.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/inaya-advantages/page.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/layout.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/maid-source-countries/[slug]/page.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/page.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/pricing/layout.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/refund-policy/page.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/service-areas/layout.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/service-guidelines/layout.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/services/[slug]/page.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/services/countries-we-source-from/page.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/services/layout.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/support-process/layout.tsx
- C:/Projects/inaya-domestic-web/app/robots.ts
- C:/Projects/inaya-domestic-web/app/sitemap.ts
- C:/Projects/inaya-domestic-web/docs/seo-phase-01-validation.md
- C:/Projects/inaya-domestic-web/lib/seo.ts
- C:/Projects/inaya-domestic-web/lib/trust-support-metadata.ts
- C:/Projects/inaya-domestic-web/next.config.js
- C:/Projects/inaya-domestic-web/proxy.ts
- C:/Projects/inaya-domestic-web/tests/e2e/service-pages.spec.ts
- C:/Projects/inaya-domestic-web/tests/e2e/technical-seo.spec.ts
- C:/Projects/inaya-domestic-web/tests/seo-export.test.mjs

## Local checkpoint

Commit message: feat(seo): establish crawl and locale foundations.

The checkpoint SHA and final clean Git status are reported in the task's final response after committing. main remains at the starting SHA. All changes are local only.
