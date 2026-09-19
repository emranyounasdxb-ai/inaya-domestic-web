# SEO Phase 2 validation

Date: 2026-09-19. Scope: metadata/on-page SEO and structured data only, inside C:/Projects/inaya-domestic-web.

## Safety and checkpoint preservation

Before editing, all gates passed: branch seo/phase-01-critical-foundation; completely clean working tree; HEAD 0ed4765b203c46748287873e89c6ac05d14c38f6; main 021a5e0bf32c342b20fbf72127b4b25a02ee0393. Repository instructions and docs/seo-phase-01-validation.md were read. Work was created on seo/phase-02-website-optimization from the validated Phase 1 checkpoint.

Phase 1's commit and branch remain preserved, not amended, rewritten or removed. main is unchanged. Phase 1 URL helpers, robots, sitemap, deployment/proxy configuration and validation report remain unchanged. No fetch, pull, push, PR, merge, deployment or production operation occurred.

## Metadata and on-page findings and changes

The baseline export showed eight pages per locale inheriting homepage metadata: homepage, booking, careers, pricing, blog, FAQ, service guidelines and support process. The inherited homepage description included an unsupported ranking/first-choice claim. Every exported page already had one H1.

lib/page-seo.ts now provides one route-aware source for static routes and the existing service, country, location and trust/support datasets. Effective leaf metadata uses absolute localized titles, unique descriptions, exact Phase 1 self-canonicals and reciprocal en/ar/x-default alternates. Parent services and locale layouts no longer leak route-inaccurate descriptions or title templates into descendants.

All indexable pages receive matching Open Graph/Twitter titles and descriptions, canonical production OG URLs, and correct social locale/alternate locale. Actual existing service images are used for service social previews; other pages use a summary card without an invented image. Blog metadata describes upcoming guide topics rather than claiming published articles.

Visible localized breadcrumbs and relevant guide links are generated from the same route data as schema. Links use localized relative paths to preserve local-preview navigation; schema URLs remain absolute production canonicals. Existing service/location/country links are preserved. Pricing package names are section headings while decorative price labels are paragraphs, with existing styling/text unchanged. There is no major content rewrite or new service, price, statistic, award, approval, licence or customer claim.

Image alt changes describe the actual home/about illustrations, localize flags and brand-logo alt text, use reusable localized service illustration text, and give the generic service fallback its actual scene description. Redundant linked service-card images use empty alt because adjacent text labels the link. No image assets were changed. English proper names in protected carousel/marquee content and existing visible copy outside these targeted changes remain unchanged.

## Route and schema coverage

Coverage: 140 canonical indexable routes, 70 English and 70 Arabic. Per locale: 20 static/index/informational routes, 31 service detail routes, 12 source-country guides and seven location routes.

| Validation/structured entity | Export coverage |
| --- | --- |
| Unique nonempty title / description / primary H1 | 140 / 140 / 140 |
| One self-canonical and reciprocal en/ar/x-default | 140 |
| Matching OG/Twitter metadata | 140 |
| Organization and LocalBusiness | 140, one shared multi-typed business entity per graph |
| WebSite / WebPage | 140 / 140 |
| Service | 76: 31 services + seven location guides per locale |
| BreadcrumbList | 138, every non-home route |
| FAQPage | 112: 110 dataset-backed routes + two interactive FAQ pages |

The business entity uses only existing site-config/contact details: INAYA name, production URL, telephone +971 6 740 0128, email info@inayadomestic.ae, existing logo and Grand Mall/Ajman/AE address. Repository verification is not an independent government/business-registration verification. No inferred hours, coordinates, postcode or licence data is added.

One route JSON-LD graph connects stable /#organization and /#website IDs to canonical #webpage, #service, #breadcrumb and #faq IDs. The legacy location Service/FAQ scripts were consolidated to avoid duplicate business and FAQ entities and unsafe serialization. Visible breadcrumb names/order and schema items share one source.

WebSite declares both languages; WebPage and FAQPage declare the current en/ar locale. Business, Service and breadcrumb names/descriptions are localized. inLanguage is used on applicable creative-work entities, not forced onto Organization/Service/BreadcrumbList. Service references the shared provider; location areaServed uses only the existing city name.

FAQ data comes from the same exact questions/answers visibly rendered by service, location, country and trust pages. The interactive FAQ page has a second, non-conflicting native script reflecting ONLY the active visible category; all five categories were tested after switching in both languages. All other routes have one JSON-LD script. Safe serialization escapes script-breaking characters, including angle brackets, ampersand and Unicode line/paragraph separators.

Intentional exclusions: no homepage breadcrumb; no Service entity on country guides, indexes or informational pages; no invented SearchAction for a nonexistent search; no Article schema for upcoming blog topics; no ratings, reviews, offers, prices, availability, statistics, awards, approvals or certifications. Supplementary FAQ sections in PhaseOneSeoSection/ServiceSeoContent and contact/pricing/refund sections are not additionally marked up, avoiding conflicting or duplicated FAQ blocks. This is deliberate partial FAQ-section coverage, not a claim that every question on the website has schema.

Documentation checked through Context7 for Next.js Metadata/native JSON-LD, with primary references [Next.js JSON-LD](https://nextjs.org/docs/app/guides/json-ld), [Schema.org Service](https://schema.org/Service), [LocalBusiness](https://schema.org/LocalBusiness), [inLanguage](https://schema.org/inLanguage), [BreadcrumbList](https://schema.org/BreadcrumbList) and [FAQPage](https://schema.org/FAQPage). Validation below is local structural/semantic validation, not an external Rich Results certification or guarantee of search-feature eligibility.

## Commands and results

Commands were run from C:/Projects/inaya-domestic-web. Build/test artifacts remain ignored local output; the untracked tsconfig.tsbuildinfo produced by the final TypeScript check was removed because it was generated during this work and was not a source change.

- git branch --show-current; git status --porcelain=v1; git rev-parse HEAD seo/phase-01-critical-foundation main: gates passed before branching and preservation confirmed before checkpoint.
- git switch -c seo/phase-02-website-optimization: PASS.
- npm run lint: PASS, exit 0.
- npx tsc --noEmit: PASS, exit 0.
- npm run build: PASS, normal production build, including static page generation.
- PowerShell: $env:NEXT_PUBLIC_STATIC_EXPORT='true'; npm run build; Remove-Item Env:NEXT_PUBLIC_STATIC_EXPORT: PASS, cPanel-compatible out directory generated. Normal production build was then run again successfully for browser validation.
- npx tsc lib/json-ld.ts lib/structured-data.ts lib/image-alt.ts --outDir .next/phase-02-unit --rootDir . --module commonjs --target es2020 --esModuleInterop --skipLibCheck: PASS.
- node --test tests/seo-phase02-unit.test.cjs: five PASS, zero failed/skipped. Covers safe JSON-LD serialization, exact Phase 1 locale URLs/stable IDs, invalid legacy-route exclusion, faithful localized FAQ data and meaningful/fallback image alt behavior.
- node --test tests/seo-export.test.mjs tests/seo-phase02-export.test.mjs: three PASS, zero failed/skipped. Final rerun 1.76s.
- npm run start -- --port 3192: local production server used for browser validation and stopped afterwards.
- PowerShell: $env:PLAYWRIGHT_PORT='3192'; $env:PLAYWRIGHT_JSON_OUTPUT_NAME='.next/phase-02-e2e-report.json'; npx playwright test --output=.next/phase-02-e2e-final-results --reporter=json: unfiltered run completed, 120 PASS and six known unrelated FAIL across chromium and mobile-chrome, 2.9m, exit 1. Terminal results were used; no JSON report file was produced. Zero tests skipped or excluded.
- All 20 new Phase 2 browser cases PASS within that full run: representative EN/AR booking, service, location and country routes; local breadcrumb navigation; exact FAQ schema updates across all visible categories. Existing location assertions were strengthened from two-script counts to graph/entity/provider/canonical/locale validation. Unrelated tests were not changed.
- git diff --check and staged git diff --cached --check: PASS before checkpoint.

Export checks inspect every canonical EN/AR HTML file and sitemap entry: exactly one title/description/H1, no duplicate title/description/primary heading, no H1-H3 level jumps, correct localized social metadata, real social-image files, alt attributes and localized flags, valid internal route targets, matching visible breadcrumbs, parseable non-conflicting graphs, stable production IDs, required entities/provider links, visible FAQ questions/answers and no unsupported schema claims. Existing Phase 1 export tests independently confirm generated robots/sitemap, exact route coverage and reciprocal alternates. Error and redirect pages are not indexable routes and are intentionally outside this coverage.

An initial full browser attempt was stopped after exposing the obsolete location two-script assertion, which was updated with stronger relevant schema checks. The final run above included every test without filters; none of the known carousel failures were hidden.

## Known unrelated failures and unresolved items

The same three pre-existing homepage carousel interaction tests fail in both browser projects (six failures total), at tests/e2e/home.spec.ts:61, :92 and :117: hover/focus autoplay, controls/dots/loop, and reduced-motion next-button behavior. Existing Sierra Leone offer modal/backdrop intercepts pointer hover/click actions and causes timeouts. This matches Phase 1's documented issue. Offer-popup/carousel sources and their tests remain unchanged; the existing offer tests pass. The full suite is therefore NOT green, while Phase 2-focused checks are green.

Ignored browser failure evidence is retained under .next/phase-02-e2e-final-results. No attempts were made to weaken assertions, disable the popup, skip carousel tests or repair this unrelated behavior.

Hosting/cPanel/CDN/WAF checks from Phase 1 remain unresolved and require server access: correlate exact audit 406 requests with Apache/ModSecurity/CDN logs, inspect effective inherited rules and verify deployed production responses. No production crawl, WAF probe or server operation was performed. Googlebot blockage is unverified and not claimed. Static export was validated locally, not deployed to cPanel. No search ranking or rich-result eligibility guarantee is made.

## Exact changed-file inventory

50 files: 35 existing files changed and 15 new files including this report. No source assets, content datasets, translations, dependency manifests or deployment configuration changed.

- C:/Projects/inaya-domestic-web/app/[locale]/[locationSlug]/page.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/about/layout.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/about/page.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/blog/layout.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/booking/layout.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/careers/layout.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/contact/layout.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/documents-required/layout.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/documents-required/page.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/faq/layout.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/faq/page.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/how-it-works/layout.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/inaya-advantages/layout.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/inaya-advantages/page.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/layout.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/maid-source-countries/[slug]/page.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/page.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/pricing/layout.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/pricing/page.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/privacy-policy/layout.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/privacy-policy/page.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/refund-policy/layout.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/refund-policy/page.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/reviews/layout.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/reviews/page.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/service-areas/layout.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/service-guidelines/layout.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/services/[slug]/page.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/services/countries-we-source-from/layout.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/services/countries-we-source-from/page.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/services/layout.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/services/page.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/support-process/layout.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/terms/layout.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/terms/page.tsx
- C:/Projects/inaya-domestic-web/components/CountrySourcePage.tsx
- C:/Projects/inaya-domestic-web/components/Footer.tsx
- C:/Projects/inaya-domestic-web/components/HomeCountryAvailability.tsx
- C:/Projects/inaya-domestic-web/components/Navbar.tsx
- C:/Projects/inaya-domestic-web/components/RouteSeo.tsx
- C:/Projects/inaya-domestic-web/components/ServiceDetailTemplate.tsx
- C:/Projects/inaya-domestic-web/docs/seo-phase-02-validation.md
- C:/Projects/inaya-domestic-web/lib/image-alt.ts
- C:/Projects/inaya-domestic-web/lib/json-ld.ts
- C:/Projects/inaya-domestic-web/lib/page-seo.ts
- C:/Projects/inaya-domestic-web/lib/structured-data.ts
- C:/Projects/inaya-domestic-web/tests/e2e/location-pages.spec.ts
- C:/Projects/inaya-domestic-web/tests/e2e/seo-phase02.spec.ts
- C:/Projects/inaya-domestic-web/tests/seo-phase02-export.test.mjs
- C:/Projects/inaya-domestic-web/tests/seo-phase02-unit.test.cjs

## Local checkpoint

Checkpoint message: feat(seo): optimize metadata and structured data.

The final checkpoint SHA and clean Git status are reported after committing. Phase 1 and main remain at their validated SHAs. The checkpoint includes only the inventory above; all work is saved locally with no remote or production operation.
