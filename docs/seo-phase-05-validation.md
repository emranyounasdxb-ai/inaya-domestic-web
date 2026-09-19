# Phase 5 — measurement readiness and final local QA

2026-09-19. Repository: C:/Projects/inaya-domestic-web only.

## Safety gates and preserved checkpoints

Before mutation, branch seo/phase-04-trust-search-visibility, working tree completely clean and HEAD 3c2aee5822d1425feb19d3d08106790bd6d5561f. Phase 3: 0d4a804dd3c8c502e984ddb8ebfa68ed2e353617; Phase 2: 718ce7d75a17a0f36a80dbd4f236e4dfa756a1c5; Phase 1: 0ed4765b203c46748287873e89c6ac05d14c38f6; main: 021a5e0bf32c342b20fbf72127b4b25a02ee0393. All gates passed and were checked again before creating local branch seo/phase-05-measurement-final-qa from Phase 4.

Supplied repository Context7 instructions and all Phase 1–4 validation reports plus Phase 4 external-actions report were read. No local/parent AGENTS.md was found. Context7 resolved official Next.js documentation and queried build-time public environment configuration. The web-perf skill's DevTools workflow was blocked by unavailable MCP tools; no global server/configuration was installed. BeyondSEO and Lighthouse were not available in this session/local dependency inventory. Native browser timing was used transparently as fallback, not mislabeled as those tools or field CWV.

Previous branch tips/checkpoints, reports, source/editorial gains and main are preserved, not amended/rewritten/removed. No fetch, pull, push, PR, merge, deployment, production crawl/WAF probe or external account/listing/review/citation/backlink write. Public documentation and third-party images/maps loaded during localhost checks are read-only, not account operations. Only owned test servers on port 3195 were started/stopped; unrelated processes/state were untouched.

## Implemented versus pending measurement

No existing verified analytics/verification destination or consent integration was found. No IDs/tokens/credentials were invented. Added environment-driven collector readiness, not GA/GTM activation: default-disabled component; exact sitemap allowlist and production canonical context; explicit-consent API; seven fixed events; no DOM/field/href/referrer/query/hash enrichment; no provider script, request, storage or cookies. Listener cleanup, weak native-event/form identity and consecutive canonical-page deduplication retain legitimate new visits/clicks without suppressing them by arbitrary timing windows.

Enabled-build browser checks use a local CustomEvent receiver and prevent external protocol/navigation while retaining genuine trusted UI clicks. They verify EN/AR consent denial/grant/withdrawal, repeated grants, form start, phone/WhatsApp, language switch, service enquiry, contact CTA, canonical-only safe data and no provider requests. Provider destination/ownership, actual CMP/privacy approval, Search Console verification and real delivery remain PENDING. No form_success event exists: all three forms only validate locally. See seo-measurement-plan.md for exact event dictionary, payload keys, activation evidence and reviewed eight-action ALL-PENDING reputation plan.

## Exact changed-file inventory (11)

One existing file changed; ten new files. No previous report, snapshot, existing test, dependency/configuration, image asset, editorial dataset, route metadata/schema helper, robot/sitemap or popup/carousel file changed.

- C:/Projects/inaya-domestic-web/app/[locale]/layout.tsx — opt-in, non-rendering collector integration using existing sitemap paths
- C:/Projects/inaya-domestic-web/components/Measurement.tsx — trusted interaction listeners, consent bridge, local safe event sink
- C:/Projects/inaya-domestic-web/lib/measurement.ts — pure privacy/route/event/duplicate boundary
- C:/Projects/inaya-domestic-web/scripts/seo-phase05-lab.mjs — reproducible 20 localhost production lab samples
- C:/Projects/inaya-domestic-web/scripts/seo-phase05-measurement-check.mjs — enabled collector browser assertions without external destination
- C:/Projects/inaya-domestic-web/tests/e2e/seo-phase05.spec.ts — EN/AR disabled-state/PII/no-provider browser checks in both projects
- C:/Projects/inaya-domestic-web/tests/seo-phase05-unit.test.cjs — event/consent/payload/duplicate checks
- C:/Projects/inaya-domestic-web/tests/seo-phase05-export.test.mjs — checkpoint protection and all-route identity/content/link checks
- C:/Projects/inaya-domestic-web/docs/seo-measurement-plan.md
- C:/Projects/inaya-domestic-web/docs/seo-final-audit.md
- C:/Projects/inaya-domestic-web/docs/seo-phase-05-validation.md

## Commands and repository-controlled results

All generated outputs are ignored local artifacts under .next/out. No new package or global configuration was installed.

- git branch --show-current; git status --porcelain=v1 --untracked-files=all; git rev-parse HEAD seo/phase-03-content-architecture seo/phase-02-website-optimization seo/phase-01-critical-foundation main: PASS exact safety gates.
- git switch -c seo/phase-05-measurement-final-qa: PASS.
- npm run lint: PASS exit 0, including final source/scripts/tests.
- npx tsc --noEmit --incremental false: PASS exit 0.
- PowerShell $env:NEXT_PUBLIC_STATIC_EXPORT='true'; npm run build; Remove-Item Env:NEXT_PUBLIC_STATIC_EXPORT: PASS final static export, 145 framework outputs including 140 indexable EN/AR pages. Expected static-runtime warning remains; no API/middleware requirement added.
- PowerShell $env:NEXT_PUBLIC_MEASUREMENT_ENABLED='true'; npm run build; Remove-Item Env:NEXT_PUBLIC_MEASUREMENT_ENABLED: PASS enabled normal production build for collector checks. No ID/destination was configured.
- npm run start -- --port 3195; node scripts/seo-phase05-measurement-check.mjs: 24 assertions PASS, two locales, zero provider requests and zero form-success events. Owned enabled server stopped before final builds.
- npm run build: PASS final ordinary production build with measurement default-disabled; 145 outputs.
- npx tsc lib/json-ld.ts lib/structured-data.ts lib/image-alt.ts lib/content-architecture.ts lib/guide-content.ts lib/buyer-answers.ts lib/measurement.ts --outDir .next/phase-02-unit --rootDir . --module commonjs --target es2020 --esModuleInterop --skipLibCheck: PASS after final build.
- node --test tests/seo-phase02-unit.test.cjs tests/seo-phase03-unit.test.cjs tests/seo-phase04-unit.test.cjs tests/seo-phase05-unit.test.cjs: 18 PASS, zero failed/skipped/cancelled; four new + 14 existing; final 1.03s.
- node --test tests/seo-export.test.mjs tests/seo-phase02-export.test.mjs tests/seo-phase03-export.test.mjs tests/seo-phase04-export.test.mjs tests/seo-phase05-export.test.mjs: six PASS, zero failed/skipped/cancelled; one new + five existing; final 33.93s.
- node scripts/seo-content-audit.mjs .next/seo-phase05-after.json: PASS all 140, 70 per locale; graph/duplication metrics below.
- Get-Content out/robots.txt and sitemap XML count check: Allow:/; production host and sitemap; 140 entries, zero lastmod fields (no legitimate route dates available).
- npm run start -- --port 3195: final default production server for lab and browser runs, stopped after checks.

The first enabled collector script run failed because its test locator expected a slashless homepage contact href; it was corrected to accept the actual existing trailing slash without changing the event expectation or UI behavior. Final complete 24-assertion run passed. A provisional lab run overlapping enabled-browser checks was stopped and excluded; the final 20 samples use default production configuration without simultaneous validation workloads. No blind snapshot regeneration, assertion weakening, forced protected-carousel clicks or filtered full-suite run.

## 140-route SEO and architecture results

20 information/hub + 31 services + 12 countries + seven locations per locale. All 140 pass structural/export identity, exact self-canonical/reciprocal en/ar/x-default, unique title/description, OG/Twitter, one H1/hierarchy, alt behavior, graph/provider/ID/URL, internal-route and breadcrumb/FAQ checks. Organization/LocalBusiness/WebSite/WebPage 140 each; Service 76; BreadcrumbList 138; FAQPage 112. Visible FAQ data equality covers all 100 dynamic pages, and existing interactive category tests remain intact. Exclusions (no home breadcrumbs, selective FAQ sections, no unsupported hours/aggregate rating) remain unchanged.

Exact previous-checkpoint source equality checks protect robot/sitemap/configuration, metadata/schema/content datasets, fixture and popup/carousel components/styles/tests. No route/content/price/asset/UI change. Existing keyword scans reject selected positive unsupported claims; genuine attributed opinions and negative guarantee disclaimers are deliberately retained. Four inherited booking/careers descriptions imply delivery/follow-up despite local-only forms; structural uniqueness/identity PASS does not certify their factual accuracy. They are explicitly unresolved in seo-final-audit.md, not hidden by new metadata tests.

Unchanged duplication method: exact same-language long paragraphs >=8 tokens/>=60 chars, plus five-token-shingle Jaccard >=0.65, excluding navigation/header/footer/scripts/styles. Phase 4 → Phase 5: repeated paragraphs 651 → 651; repeated tokens 8,258 → 8,258; measured paragraph tokens 28,745 → 28,745; share 28.73% → 28.73%; near pairs 0 → 0. No new content uniqueness gain or complete semantic uniqueness claimed.

Both locale graphs: 70/70 reachable, maximum three hops, minimum one other-page inbound link, 1,586 unique non-self per-source destination edges; zero orphan pages. Localized content/navigation/FAQ/breadcrumb/related-link data remain unchanged; explicit language switching is the intended cross-locale exception. This is not independent translator/business certification. Main and prior checkpoint tips remain at the gated SHAs.

## Performance method and limitations

node scripts/seo-phase05-lab.mjs against local ordinary production build. Fresh Chromium context per page; desktop 1440×900 and Pixel 5 viewport/device emulation; EN/AR home, live-in-maid, Ajman, service-guidelines and contact. One initial-load sample per combination, five seconds after load, unthrottled workstation CPU/network; no scroll/input. Latest LCP candidate and session-window CLS, FCP/navigation timing, longest task and local transferred resources are collected. Blocking time is a five-second long-task sum, NOT standard Lighthouse TBT. INP and field percentiles are not measured. Missing external timing permission excludes some third-party bytes from transfer totals.

The ordinary Next production server/image optimizer is not deployed cPanel: exported images, generated deployment variants, Apache caching/compression, CDN/WAF and real network conditions can differ. Static-export compatibility is separately tested; local performance samples do not certify deployed static-host performance. Core Web Vitals are fundamentally field metrics; see [Google Web Vitals guidance](https://web.dev/articles/vitals) and [field performance debugging](https://web.dev/articles/debug-performance-in-the-field).

No safe, attributed pre-existing repository bottleneck was established from these samples alone; no asset/style/animation/font or protected behavior change was made. The new collector is omitted when disabled to avoid unnecessary path serialization/listeners. This is not a quantified performance improvement claim. Longer AR homepage/contact tasks and resource costs require proper trace/throttled repeat profiling before a targeted change. Hosting/CDN/cache/compression and deployed optimized-image checks remain external PENDING; no production score/CrUX/Search Console data exists here.

### Final 20 production-build lab samples

Times in milliseconds, CLS unitless, local transferred resources rounded to KiB. LCP range 312–1,036 ms; observed CLS 0–0.03790; zero failed requests in these samples. These ranges do NOT certify field CWV or real-phone performance. First homepage request includes a colder local server/cache state; single samples cannot establish a before/after improvement. Raw ignored evidence: .next/seo-phase05-lab.json; reproduce with the final normal production server and node scripts/seo-phase05-lab.mjs.

| Viewport | Route | LCP | CLS | FCP | TTFB | Longest task | Local KiB |
| --- | --- | --- | --- | --- | --- | --- | --- |
| desktop | /en/ | 836 | 0.00046 | 836 | 217 | 63 | 1416 |
| desktop | /en/services/live-in-maid/ | 392 | 0.00046 | 392 | 41 | 95 | 815 |
| desktop | /en/maid-services-ajman/ | 416 | 0.00046 | 416 | 33 | 121 | 759 |
| desktop | /en/service-guidelines/ | 336 | 0.00046 | 336 | 28 | 77 | 697 |
| desktop | /en/contact/ | 592 | 0.00046 | 592 | 23 | 290 | 684 |
| desktop | /ar/ | 1036 | 0.00027 | 1036 | 20 | 462 | 1516 |
| desktop | /ar/services/live-in-maid/ | 476 | 0.00027 | 476 | 21 | 163 | 866 |
| desktop | /ar/maid-services-ajman/ | 464 | 0.00027 | 464 | 19 | 160 | 826 |
| desktop | /ar/service-guidelines/ | 516 | 0.00027 | 516 | 20 | 140 | 781 |
| desktop | /ar/contact/ | 888 | 0.03790 | 888 | 24 | 403 | 761 |
| mobile | /en/ | 580 | 0.00000 | 580 | 17 | 267 | 1295 |
| mobile | /en/services/live-in-maid/ | 364 | 0.00000 | 364 | 17 | 98 | 689 |
| mobile | /en/maid-services-ajman/ | 344 | 0.00000 | 344 | 16 | 122 | 646 |
| mobile | /en/service-guidelines/ | 312 | 0.00000 | 312 | 15 | 81 | 630 |
| mobile | /en/contact/ | 448 | 0.00000 | 448 | 24 | 305 | 646 |
| mobile | /ar/ | 616 | 0.00000 | 616 | 13 | 304 | 1393 |
| mobile | /ar/services/live-in-maid/ | 440 | 0.00000 | 440 | 16 | 160 | 738 |
| mobile | /ar/maid-services-ajman/ | 388 | 0.00000 | 388 | 17 | 154 | 709 |
| mobile | /ar/service-guidelines/ | 332 | 0.00000 | 332 | 11 | 114 | 689 |
| mobile | /ar/contact/ | 512 | 0.00000 | 512 | 26 | 318 | 720 |

The custom five-second long-task blocking sum ranged 13–483 ms; it is deliberately not labeled/rated as Lighthouse TBT. No meaningful INP workload/field result was obtained. Highest local transfer observation is the Arabic desktop homepage at 1,516 KiB. Data highlight follow-up profiling, not proof that a specific font/image/component is unused or that a particular compression change is safe.

## Complete browser totals, exclusions and checkpoint decision

- PowerShell $env:PLAYWRIGHT_PORT='3195'; npx playwright test tests/e2e/seo-phase05.spec.ts --output .next/phase05-focused-results: four PASS, zero failed/skipped, 8.9s, exit 0 (two locales × desktop/mobile).
- PowerShell $env:PLAYWRIGHT_PORT='3195'; npx playwright test --output .next/phase05-full-results: 166 total; 160 PASS, six FAIL, zero skipped/excluded, 3.7m, exit 1. All four Phase 5 cases pass again. All 12 existing offer cases pass. Focused run repeats those four full-suite cases; do not sum them as additional unique cases.
- git grep -l -E 'gtag|GTM-|google-site-verification|googletagmanager|google-analytics' 3c2aee5822d1425feb19d3d08106790bd6d5561f: package-lock.json matched tostringtag dependency names only; inspected matches contain no integration or IDs. Complementary call-specific gtag[(] search found no tracked-checkpoint integration matches, alongside current source/config searches.
- rg -l 'intercepts pointer events' .next/phase05-full-results -g error-context.md: exactly six existing carousel failure contexts confirm popup/backdrop interception.
- git diff --check and git diff --cached --check: PASS before checkpoint; expected Git LF/CRLF notices are not whitespace errors.

Known unchanged failures: tests/e2e/home.spec.ts:61 autoplay hover/focus, :92 controls/dots/seamless loop and :117 reduced motion, in both chromium and mobile-chrome. The Sierra Leone modal/backdrop intercepts pointer actions. Failure contexts/screenshots/videos remain ignored under .next/phase05-full-results. The full suite is NOT green. No failure was skipped, repaired, force-clicked, weakened or classified as unrelated without existing checkpoint/report and current context evidence. Protected source/styles/tests and prior reports are unchanged.

Scoped Phase 5 readiness/unit/export/focused checks pass with explicit pre-existing full-suite exceptions. Local checkpoint message: feat(seo): add measurement and complete final audit. Final SHA and post-commit Git status are reported after committing; no amend/rewrite of any prior checkpoint.

Deployment-readiness decision: NOT complete production readiness and no deployment authorized/performed. Remaining blockers: six known interaction failures; actual form delivery and conversion receipt; four inherited booking/careers descriptions; verified analytics destination/CMP/privacy/provider settings; Search Console ownership; owner NAP/hours/listing/review evidence; exact 406/WAF/server/CDN correlation; deployed/static-host performance and field CWV evidence; every external reputation/citation/editorial action still PENDING. No Googlebot block, ranking improvement, analytics activation or independent translator/business certification claimed. All 11 Phase 5 files are saved locally; main and Phases 1–4 remain unchanged.
