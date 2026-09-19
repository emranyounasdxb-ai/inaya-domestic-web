# Final repository-controlled SEO remediation

2026-09-19. Scope: C:/Projects/inaya-domestic-web only. Local changes and localhost checks, not production activation or external-account work.

## Safety, continuation and preserved checkpoints

The original pre-work gates passed: clean seo/phase-05-measurement-final-qa at 3e8e673f43df6f7f39fe3d64b340a5139520e754. The dedicated seo/final-remediation branch was created from that checkpoint. All Phase 1–5 reports and the final audit were read before remediation.

An accidentally supplied, unrelated TL prompt interrupted verification; no TL work was performed and the owned preview server was stopped. On resumption, the repeated original branch/clean-tree gates correctly failed because this branch already contained the remediation. Work stopped without changing anything. The owner then explicitly approved a narrow exception: resume seo/final-remediation at the same base, preserving five modified files and three untracked entries. A read-only full diff and all untracked-file contents confirmed that all eight entries were exclusively the authorized INAYA remediation; no unrelated change was found.

| Preserved reference | Exact SHA |
| --- | --- |
| main | 021a5e0bf32c342b20fbf72127b4b25a02ee0393 |
| seo/phase-01-critical-foundation | 0ed4765b203c46748287873e89c6ac05d14c38f6 |
| seo/phase-02-website-optimization | 718ce7d75a17a0f36a80dbd4f236e4dfa756a1c5 |
| seo/phase-03-content-architecture | 0d4a804dd3c8c502e984ddb8ebfa68ed2e353617 |
| seo/phase-04-trust-search-visibility | 3c2aee5822d1425feb19d3d08106790bd6d5561f |
| seo/phase-05-measurement-final-qa / remediation parent | 3e8e673f43df6f7f39fe3d64b340a5139520e754 |

No reset, stash, discard, checkout, cleanup, amend or checkpoint rewrite. Earlier validation reports retain their historical results; this report and the narrowly updated final audit supersede the two remaining repository findings, not the external blockers. The checkpoint message is `fix(seo): resolve final local readiness gaps`; its final SHA is reported after creation, not embedded circularly in this document.

## Exact changed-file inventory (10)

Six existing files and four new files; all paths below are relative to C:/Projects/inaya-domestic-web. The eight resumed entries are preserved; the only additional files are the requested reports.

| File | Change |
| --- | --- |
| lib/page-seo.ts | Exactly four booking/careers descriptions, EN/AR; no title, route or metadata architecture change |
| tests/fixtures/seo-phase03-baseline.json | Exactly the matching four description expectations, manually reviewed; no snapshot regeneration |
| tests/e2e/home.spec.ts | One helper import and three modal-dismiss setup calls; all original carousel assertions unchanged |
| tests/e2e/helpers/dismiss-offer.ts (new) | Visible modal/backdrop assertions, accessible close, removal assertions and natural pointer exit |
| tests/seo-final-remediation-expectations.cjs (new) | Exact old/new four-string and three-setup allowlist shared by checkpoint guards |
| tests/seo-final-remediation-unit.test.cjs (new) | Two focused tests protecting exact corrections, original assertions, forms, measurement and popup/carousel source |
| tests/seo-phase04-unit.test.cjs | Precisely approved exceptions incorporated into otherwise exact earlier-checkpoint comparisons |
| tests/seo-phase05-export.test.mjs | Precisely approved exceptions incorporated into exact source protection; all route/content/schema checks retained |
| docs/seo-final-remediation.md (new) | Scope, findings, complete validation and external readiness boundaries |
| docs/seo-final-audit.md | Only statuses changed by verified final remediation; Phase 5 history and performance limitations retained |

No production popup/carousel component, CSS, form, measurement component/library, localization layout, route, robot/sitemap, schema helper, content dataset, asset, dependency or deployment configuration was changed. Existing offer behavioral tests are unchanged. No protected production behavior exception was used.

## Four truthful localized descriptions

Booking EN previously invited users to send requirements and promised team follow-up; booking AR made the equivalent sending/follow-up claim. Careers EN invited sharing experience and promised contact when an opportunity became available; careers AR made the corresponding availability/contact claim. Those statements were unsupported by the local-only forms.

Exact reviewed replacements:

- /en/booking/: Prepare household service requirements with INAYA guidance. This form checks details locally only; contact the office by phone or WhatsApp to discuss your enquiry.
- /ar/booking/: جهز متطلبات الخدمة المنزلية مع إرشادات عناية. يتحقق هذا النموذج من البيانات محلياً فقط؛ تواصل مع المكتب بالهاتف أو واتساب لمناقشة استفسارك.
- /en/careers/: Prepare a domestic-work application with INAYA guidance. This form checks details locally only; contact the office by phone or WhatsApp to discuss your experience.
- /ar/careers/: جهز طلباً للعمل في الخدمات المنزلية مع إرشادات عناية. يتحقق هذا النموذج من البيانات محلياً فقط؛ تواصل مع المكتب بالهاتف أو واتساب لمناقشة خبرتك.

Semantic review: both booking versions concern preparing household service requirements and discussing an enquiry; both careers versions concern preparing a domestic-work application and discussing experience. All four explicitly state local-only checking and direct the user to existing phone/WhatsApp channels. None promises submission, receipt, follow-up, vacancies or availability. Existing repository links are tel:+97167400128 and wa.me/971502036767; these checks do not certify live operator availability or form delivery.

The existing reusable page metadata system propagates the same descriptions to meta description, Open Graph, Twitter and WebPage schema. Export checks confirm identical values, unique localized titles/descriptions across all 140 routes, and preserved canonical/hreflang/schema IDs. A separate export inspection found zero old descriptions and confirmed these four pages' social/schema parity and repository contact links. No other metadata expectations changed.

## Six carousel failures: cause and resolution

The three formerly failing tests run in both chromium and mobile-chrome, accounting for six cases:

| Original test | Root cause | Final setup correction |
| --- | --- | --- |
| Autoplay pauses for hover/focus, then resumes | Scrolling triggers the offer; attempting to hover/focus background content while its backdrop is present is not the real modal flow | Assert and dismiss the visible modal, verify removal, leave the close-button pointer position before the original unhovered-autoplay checks |
| Controls, dots and seamless loop remain functional | Modal backdrop intercepts review-control clicks | Same visible accessible dismissal, then unchanged original controls/loop/dot/swipe assertions |
| Reduced motion disables autoplay/animation | Modal backdrop intercepts the next-review click | Same dismissal, then unchanged reduced-motion, transition and next-review assertions |

The popup explicitly declares role=dialog and aria-modal=true, with a full-screen backdrop. Background pointer blocking is intentional. The helper asserts the modal/backdrop are visible and the approved Candidate Profiles copy remains; clicks the visible button named Close Sierra Leone offer; asserts both modal and backdrop are absent; then moves the pointer to (1, 1). There is no forced click, programmatic removal, fake storage dismissal or added wait.

The first diagnostic run, with dismissal but no pointer exit, had 26/28 pass and two initial-autoplay failures. A separate DOM/geometry check showed the close button's center (approximately 882, 317) lies inside the scrolled desktop carousel; after removal, the browser legitimately hovers the exposed carousel and data-autoplay-paused becomes true. Moving the real pointer out changes it to false and the original index-1 autoplay expectation passes. This is correct hover behavior, not a production defect; no source fix was made or concealed. The final focused run covers all six former failures, all 12 unchanged offer cases and disabled measurement checks.

Exact whole-file guards require home.spec.ts to equal the preserved checkpoint plus only its helper import and three setup calls. All original autoplay/hover/focus timing, controls, dots, loop, swipe and reduced-motion assertions remain verbatim. Existing waits that observe autoplay suppression are retained, not newly introduced. Tests are not skipped, filtered in the full run, retried to obtain a pass or weakened.

## Measurement safety

Measurement production sources are identical to Phase 5. Default build omits the collector/API; browser checks in EN/AR and both projects confirm no provider scripts, requests or events. An explicitly enabled local test build still starts consent-denied and has only a local CustomEvent sink, not a provider. Its 24 assertions pass for consent denial/grant/withdrawal, repeated grants, native-interaction/form/page-view deduplication and the seven allowed event names.

Payloads accept only known canonical paths, language, page type and fixed optional form/target-language identifiers. No inputs, DOM copy, names, email, telephone, candidate attributes, href/query/hash/referrer or arbitrary free text enter events. No provider destination/GA4/GTM/CMP/Search Console value was invented or enabled. No form_success event exists while delivery is absent. Withdrawal stops future emission; duplicate protection preserves legitimate new interactions/visits. Test-only flags were removed from their process environments; final builds use default-disabled measurement.

## Commands and results

Installed local tools were used; no dependency installation or fetch. Commands are run from the repository root. Build environments below were set only for the named command and then removed. Direct installed TypeScript/Playwright entry points were used alongside npm scripts for the final checks.

| Command / run | Verified result |
| --- | --- |
| git branch --show-current; git status --porcelain=v1; git rev-parse HEAD; git for-each-ref --format='%(refname:short) %(objectname)' refs/heads | Original gates passed; resumed eight-entry exception audited; all prior references exact |
| git diff -- followed by all eight paths; git ls-files --others --exclude-standard; Get-Content of all three untracked files | All eight approved; no unrelated files |
| npm run lint | PASS exit 0, including final pointer-exit helper |
| node node_modules/typescript/bin/tsc --noEmit --incremental false | PASS exit 0 |
| NEXT_PUBLIC_MEASUREMENT_ENABLED=true; npm run build (PowerShell environment; removed afterward) | PASS enabled ordinary production build, 145 framework outputs |
| npm run start -- --port 3195; node scripts/seo-phase05-measurement-check.mjs | 24 assertions PASS, two locales, zero provider requests, zero form-success events |
| NEXT_PUBLIC_STATIC_EXPORT=true; npm run build (PowerShell environment; removed afterward) | PASS static export, 145 framework outputs including 140 indexable routes |
| npm run build with no opt-in flags | PASS final ordinary production build, measurement disabled by default |
| Unit compilation below | PASS exit 0 |
| Unit command below | 20 PASS, zero failed/skipped/cancelled/todo |
| Export command below | Six PASS, zero failed/skipped/cancelled/todo; all 140 routes |
| node scripts/seo-content-audit.mjs .next/seo-final-remediation-after.json | PASS preserved duplication/link metrics below |
| Export inspection of four corrections using auditExport/attrs and the exact correction allowlist | All 140 inspected; four reviewed descriptions/social/schema match; zero legacy descriptions; existing contact links present |
| Get-Content out/robots.txt; parsed out/sitemap.xml and counted lastmod tags | Allow:/, accurate production host/sitemap; 140 entries; zero lastmod values (no legitimate dates supplied) |
| PLAYWRIGHT_PORT=3195; node node_modules/@playwright/test/cli.js test tests/e2e/home.spec.ts tests/e2e/sierra-leone-offer-controls.spec.ts tests/e2e/seo-phase05.spec.ts --output .next/final-remediation-focused-results | 32 PASS (16 per project), zero failed/skipped; 1.1 minutes |
| PLAYWRIGHT_PORT=3195; node node_modules/@playwright/test/cli.js test --output .next/final-remediation-full-results | 166/166 PASS (83 per project), zero failed/skipped; 2.6 minutes; no grep/skip/filter |
| git diff --check | PASS; checked again before checkpoint |

Unit compilation:

```powershell
node node_modules/typescript/bin/tsc lib/json-ld.ts lib/structured-data.ts lib/image-alt.ts lib/content-architecture.ts lib/guide-content.ts lib/buyer-answers.ts lib/measurement.ts --outDir .next/phase-02-unit --rootDir . --module commonjs --target es2020 --esModuleInterop --skipLibCheck
```

Complete unit and export commands:

```powershell
node --test tests/seo-phase02-unit.test.cjs tests/seo-phase03-unit.test.cjs tests/seo-phase04-unit.test.cjs tests/seo-phase05-unit.test.cjs tests/seo-final-remediation-unit.test.cjs
node --test tests/seo-export.test.mjs tests/seo-phase02-export.test.mjs tests/seo-phase03-export.test.mjs tests/seo-phase04-export.test.mjs tests/seo-phase05-export.test.mjs
```

The unit run took 1.61 seconds after compilation; the export run 39.23 seconds. Focused cases are repeated in the full suite, so separate run totals must not be added as distinct coverage. The earlier diagnostic 26/28 result is disclosed above; final readiness depends on the final complete runs, not excluding those failures. Only owned localhost servers on port 3195 are started/stopped. Generated output remains ignored under .next/out. The expected Next static-export warning about server API/middleware availability is unchanged; no new runtime dependency was introduced. Existing LF/CRLF Git warnings are informational, not whitespace-check errors.

## All 140 routes and preserved content/trust gains

| Family | EN | AR | Total |
| --- | --- | --- | --- |
| Information/hub/functional | 20 | 20 | 40 |
| Services | 31 | 31 | 62 |
| Country/nationality | 12 | 12 | 24 |
| Locations | 7 | 7 | 14 |
| Total | 70 | 70 | 140 |

Every exported sitemap page passes robots/indexable route identity, self-canonical, reciprocal en/ar and equivalent English x-default, absolute production URLs, metadata uniqueness/social parity, one H1/heading hierarchy, image alt presence/localization, schema identity/URL/safe serialization, FAQ/breadcrumb consistency and valid crawlable internal links. No redirect, duplicate, error or non-indexable route was added to the sitemap. All 100 dynamic pages retain shared visible FAQ/schema data; interactive informational FAQ tabs are covered by unchanged browser tests.

Schema counts remain Organization/LocalBusiness/WebSite/WebPage 140 each, Service 76, BreadcrumbList 138 and FAQPage 112. Stable entity and canonical IDs, no homepage breadcrumb, selective FAQ coverage, no unsupported opening hours or aggregate ratings, and static/cPanel architecture remain unchanged.

Both graphs retain 70/70 routes reachable within three hops, minimum one other-page inbound link and 1,586 non-self per-source destination edges: zero orphans. EN links remain EN and AR links AR except explicit language switching. The complete preserved route matrix is docs/seo-phase-03-validation.md; no URL or hierarchy changed.

Reproducible duplication method is the unchanged scripts/seo-content-audit.mjs: exact normalized same-language paragraphs >=8 tokens and >=60 characters, plus five-token-shingle Jaccard >=0.65, excluding nav/header/footer/scripts/styles. Phase 2 baseline: 981 repeated long paragraphs, 13,141 repeated tokens and 86 near pairs. Final: 651 repeated paragraphs, 8,258 repeated tokens / 28,745 measured tokens (28.73%) and zero near pairs, identical to Phases 4/5. Phase 3 gains are retained; no additional visible-content gain or complete semantic uniqueness is claimed.

Phase 4 neutral identity, approval/ranking/statistic corrections, prices, genuine attributed review opinions and Candidate Profiles / ملفات المرشحات remain intact. Forms still clearly disclose local checking, not sending; unchanged browser tests exercise that state. No new numeric fact, approval, ranking, guarantee, review, price, availability or delivery claim was introduced.

## Code readiness versus external production blockers

Code-readiness decision: PASS for the requested repository-controlled scope. All 20 unit tests, six export tests, 24 measurement assertions, 32 focused browser cases and 166 unfiltered browser cases pass with zero skipped. All 140 route checks pass. The four misleading descriptions and six modal-flow failures are resolved without production behavior changes. No production readiness or permission to deploy is implied. The final commit SHA and post-checkpoint Git status are provided in the hand-off after creating the single local checkpoint.

The following remain PENDING and were neither implemented nor marked complete:

- Real authenticated form-delivery integration, receipt/error/retry evidence before any form-success event.
- Verified analytics destination/ownership, approved consent manager/privacy policy and real provider activation.
- Search Console ownership, configuration, indexing and field evidence.
- Owner confirmation of business details/hours, Place ID and curated-review provenance.
- Hosting/Apache/ModSecurity/CDN/WAF investigation with exact 406 request/log evidence; Googlebot blocking remains unverified, not claimed.
- Deployed repeated/throttled Lighthouse, CrUX/INP and real-user performance verification, plus static-host caching/compression/generated-image checks.
- Separately authorized external local SEO listings, citations, review actions and backlinks with dated published evidence.

The Phase 5 localhost lab samples remain historical, not new deployed evidence or a field-CWV pass. No external rich-results certification, ranking/traffic/citation guarantee or complete SEO claim. No fetch, pull, push, PR, merge, deployment, external-account action, production operation or modification of main.
