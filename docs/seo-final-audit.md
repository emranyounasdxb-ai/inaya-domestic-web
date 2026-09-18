# Final local SEO audit — Phases 1–5

2026-09-19. Scope: all 140 exported EN/AR canonical pages, repository-controlled behavior and representative production-build lab loads. No live production crawl, deployment, account login or external write.

## Decision

NOT complete production readiness. Technical export/SEO foundations pass locally, but six pre-existing popup/carousel interaction failures, absent form delivery, four inherited form-related metadata descriptions, owner/consent/provider verification and hosting/field-performance checks remain unresolved. The Phase 5 checkpoint is local measurement readiness/final evidence, not analytics activation or approval to deploy. No ranking/traffic/AI-citation guarantee, “100% SEO”, field-CWV pass or external rich-result certification is claimed.

BeyondSEO was not available in the active tools/skills inventory. Chrome DevTools MCP and local Lighthouse were unavailable. No replacement tool was presented as BeyondSEO/Lighthouse; native Playwright/PerformanceObserver lab checks were used with explicit limitations. Nothing was installed or added to global MCP configuration.

## Route coverage

Every sitemap route was independently parsed from fresh exported HTML, not just sampled for SEO. Exact 140-path identity is checked against the preserved Phase 3 fixture and Phase 4 source protection. The complete unchanged route-by-route matrix is in seo-phase-03-validation.md; this audit covers every row in both languages.

| Family | EN | AR | Total | Coverage |
| --- | --- | --- | --- | --- |
| Home/informational/hubs/functional | 20 | 20 | 40 | Canonical/alternates, metadata/headings, graphs, links, alt and identity checks; four descriptions have semantic concern below |
| Service spokes | 31 | 31 | 62 | All existing service slugs, paired scope/preparation, FAQs/schema, service/provider identity and related links |
| Country/nationality guides | 12 | 12 | 24 | All existing source-country slugs; individual-profile guidance, qualifications and exact visible FAQs |
| Location guides | 7 | 7 | 14 | Ajman, Dubai, Sharjah, Abu Dhabi, Ras Al Khaimah, Fujairah, Umm Al Quwain; localized hierarchy/FAQ/service graph |
| Total | 70 | 70 | 140 | No URL renamed, deleted or redirected |

Functional/information paths per locale: home, about, services, contact, how-it-works, service-areas, services/countries-we-source-from, booking, careers, pricing, blog, faq, documents-required, inaya-advantages, reviews, privacy-policy, terms, refund-policy, service-guidelines, support-process. Dynamic routes are enumerated by preserved sitemap/datasets, not an invented country-service-city cross-product. Root language redirect, framework errors/icon/robots/sitemap are intentionally not indexable-page entries.

## Final audit matrix

| Area | Local result / evidence | Unresolved limit |
| --- | --- | --- |
| Crawlability/robots | Public EN/AR routes allowed; correct production sitemap; existing robot test passes | Deployed Apache/CDN/WAF behavior unavailable; 406 and Googlebot blocking unverified |
| Sitemap/indexability | Exactly 140 distinct indexable production canonicals; redirects/errors/duplicates excluded; no invented lastmod | Actual Google indexing requires Search Console/live evidence |
| Canonical/hreflang | Exact absolute self-canonicals; reciprocal en/ar; equivalent-route English x-default; all 140 | No live deployed-header inspection |
| Metadata | 140 unique titles and descriptions; OG/Twitter consistent; route-aware system unchanged | Four booking/careers descriptions imply delivery/follow-up; see below |
| Headings/images | One H1 per page; existing hierarchy and alt-presence/localized service-description checks pass | Not independent full WCAG certification or human verification of every old image's factual identity |
| Entity/schema | Organization, LocalBusiness, WebSite, WebPage: 140 each; Service 76; BreadcrumbList 138; FAQPage 112; stable production IDs and safe serialization | Real-world NAP/listing/review evidence pending; no hours, aggregate rating, invented reviews/prices/guarantees added |
| FAQ/breadcrumbs | All 100 dynamic pages share exact visible FAQ data with schema; existing interactive EN/AR category checks retained; visible breadcrumb hierarchy matches graph | Informational answer sections are intentionally not duplicate FAQPage blocks; home has no breadcrumb |
| Content/claims | Phase 3/4 briefs, neutral claims and displayed prices unchanged; existing positive-claim corpus checks pass | Genuine attributed opinions preserved, not corporate rankings; dormant legacy copy remains inactive; independent business certification unavailable |
| Duplication | 651 repeated long paragraphs; 8,258 repeated tokens / 28,745 measured tokens (28.73%); zero near pairs at existing >=0.65 threshold | Lexical method is not complete semantic uniqueness; justified/shared service/policy/process prose remains |
| Internal graph | Zero orphans; each locale 70/70 reachable within 3 hops; minimum one other-page inbound link; 1,586 non-self edges per locale | Local graph excludes external contact/map destinations; no third-party availability guarantee |
| Localization | Localized navigation/content/links and paired schema/FAQ data retained; only explicit language switch crosses locales | Natural-language/semantic review is not independent translator certification |
| Measurement/privacy | Default disabled; explicit-consent boundary; allowlisted known canonicals; queries/hash/inputs/PII excluded; native-event/form/page-view dedup checks | No provider destination, GA/GTM ID, CMP, ownership verification or actual conversion/reporting active |
| Form delivery | Local validation accurately disclosed; no form_success emitter exists | Delivery/backend receipt absent; client done state cannot justify conversion |
| Export/local routes | Static and ordinary production builds pass; all existing internal-route/export assertions retained | cPanel generated-image/Apache deployment needs separately authorized deployed verification |
| Browser regression | Full unfiltered result documented in Phase 5 validation | Existing carousel/modal interception remains; no test filtering/weakening or protected behavior change |
| Performance | 20 initial-load samples: five page families × EN/AR × desktop/mobile; native production-build timing | Unthrottled localhost, short observation, one sample each; not Lighthouse, INP, field p75, CrUX or Search Console |
| Reputation/backlinks | Eight distinct, realistically prioritized Phase 4 actions reviewed with completion evidence in measurement plan | ALL PENDING; no contact/login/listing/citation/review/backlink action performed |

Browser totals: 166 unfiltered cases, 160 passed and six known home.spec.ts failures (61/92/117 in desktop/mobile), zero skipped; all 12 existing offer cases and all four new Phase 5 cases passed. Separate focused run four passed; unit 18 passed; export six passed; enabled collector script 24 assertions passed. Lint, TypeScript, normal/static builds and whitespace checks pass. These are per-run totals; focused cases also occur in the full suite. The suite is not wholly green.

The same reproducible duplication algorithm is scripts/seo-content-audit.mjs: same-language exact p normalization (>=8 tokens and >=60 chars) and five-token-shingle Jaccard >=0.65, excluding nav/header/footer/scripts/styles. Phase 2 baseline 981 paragraphs/13,141 repeated tokens/86 near pairs; Phase 3 and Phase 4 improvements remain preserved. No new deduplication gain is claimed in Phase 5.

## Unresolved repository finding: inherited descriptions

`/en/booking/`, `/ar/booking/`, `/en/careers/`, `/ar/careers/`: current descriptions in lib/page-seo.ts speak of sending/sharing details and team follow-up. The current forms have no delivery integration. Phone/WhatsApp are real alternatives, but the descriptions should explicitly distinguish them from local form checking. These four descriptions and corresponding social/schema summaries need a separately reviewed correction or a genuinely delivered-form integration. Existing strict identity/snapshot checks pass because they preserve these inherited values, not because those values prove delivery. No snapshot was regenerated or loosened in Phase 5.

## External evidence still required

Final production lab observations: 20/20 completed, zero failed requests; latest LCP candidates 312–1,036 ms and session-window CLS 0–0.03790. Arabic desktop homepage longest task 462 ms; Arabic desktop contact 403 ms. These unthrottled localhost samples warrant deeper profiling, not a field-CWV pass or a proven component/asset fix. The complete route/device timings and repeat method are in seo-phase-05-validation.md. Lighthouse/DevTools workflow and field data remain unavailable.

Owner: verified NAP/hours/Place ID and review provenance; actual consent/privacy policy and analytics destination ownership; Search Console verification. Form owner: authenticated delivery contract, receipt/error/retry tests before form_success. Hosting: exact 406 request/log correlation and effective Apache/ModSecurity/CDN rules; cache/compression/security/deployed redirects and generated images. Performance owner: deployed throttled/repeated Lighthouse diagnostics and real-user/CrUX/Search Console field evidence where accessible. Reputation actions: separately authorized submissions/responses and dated published proof, not proposed-opportunity lists.

Do not infer a Googlebot block from a 406 mention or spoofed user agent. No production/WAF probe, external rich-results submission or external account action occurred. See seo-measurement-plan.md for event/activation/privacy rules and completion evidence, and seo-phase-05-validation.md for exact inventory, commands, totals and lab samples.
