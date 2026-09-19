# SEO visual/content hierarchy remediation

Date: 2026-09-19. Scope: C:/Projects/inaya-domestic-web only. Local branch: `seo/visual-content-remediation`.

## Safety and scope

Before mutation, branch `seo/final-remediation`, HEAD `0cc89c4ca6d5621a6ed08818b799b2bdeb71a5af` and a completely clean tree were verified. The new local branch was created from that exact checkpoint. No previous checkpoint is amended or rewritten.

| Preserved reference | SHA |
| --- | --- |
| main | 021a5e0bf32c342b20fbf72127b4b25a02ee0393 |
| seo/phase-01-critical-foundation | 0ed4765b203c46748287873e89c6ac05d14c38f6 |
| seo/phase-02-website-optimization | 718ce7d75a17a0f36a80dbd4f236e4dfa756a1c5 |
| seo/phase-03-content-architecture | 0d4a804dd3c8c502e984ddb8ebfa68ed2e353617 |
| seo/phase-04-trust-search-visibility | 3c2aee5822d1425feb19d3d08106790bd6d5561f |
| seo/phase-05-measurement-final-qa | 3e8e673f43df6f7f39fe3d64b340a5139520e754 |
| seo/final-remediation / parent | 0cc89c4ca6d5621a6ed08818b799b2bdeb71a5af |

## Cause and narrow correction

`components/RouteSeo.tsx` combined JSON-LD with a breadcrumb nav, 16 paired preparation notes and a related-guide nav. Route layouts/pages placed it before their children/Hero. Consequently all 140 pages received standalone related-link rows, 138 received pre-Hero breadcrumbs and 32 received preparation paragraphs before the actual page design.

RouteSeo now renders only its unchanged JSON-LD graph. Both strip markers (`data-seo="related-guides"`, `data-content="page-purpose"`) are absent from the rendered HTML, not hidden with CSS. The underlying content/relationship datasets remain unchanged but the notes are no longer rendered here.

`PageBreadcrumbs` renders the existing Phase 2 hierarchy after the complete Hero, with localized labels, relative local-preview-compatible links, explicit LTR/RTL direction, wrapping, and `aria-current="page"`. Homepage breadcrumbs remain intentionally absent, matching its unchanged schema exclusion. Introductory guide/policy pages without a separate Hero section place the nav after their existing title/lead/CTA and before body cards/sections. The legacy `why-choose-inaya` content identifier maps to the existing public `inaya-advantages` route; no URL or schema ID changes.

Manual review caught FAQ tabs overlapping the new nav because of their original negative margin. The FAQ nav reserves 28px below itself; the service-area nav similarly reserves 24px/32px for the original filter overlap. The existing tabs, filters, Hero padding and section classes remain unchanged. Geometry tests prevent recurrence.

Four relevant contextual paths replace the orphan-prevention links from the strip:

- About: existing “Our team” / “فريقنا” phrase links to careers.
- About: existing “Client feedback” / “ملاحظات العملاء” phrase links to reviews.
- About: the existing INAYA Difference heading links to inaya-advantages.
- How It Works: one localized sentence inside the existing next-step content links to blog/service guides before contacting INAYA.

Other service cards, country/location content, practical guides and navigation already provide their required paths. No replacement global link strip, hidden links, duplicate preparation paragraphs, new page section or keyword padding was added.

## Exact changed-file inventory (27)

Paths are relative to the repository root above; 23 existing files and four new files.

| File | Change |
| --- | --- |
| app/[locale]/[locationSlug]/page.tsx | Post-Hero breadcrumbs |
| app/[locale]/about/page.tsx | Post-Hero breadcrumbs; three contextual links in existing content |
| app/[locale]/blog/page.tsx | Post-Hero breadcrumbs |
| app/[locale]/booking/page.tsx | Post-Hero breadcrumbs |
| app/[locale]/careers/page.tsx | Post-Hero breadcrumbs |
| app/[locale]/contact/page.tsx | Post-Hero breadcrumbs |
| app/[locale]/faq/page.tsx | Post-Hero breadcrumbs with overlap reservation |
| app/[locale]/how-it-works/page.tsx | Post-Hero breadcrumbs; contextual guide link in existing CTA content |
| app/[locale]/maid-source-countries/[slug]/page.tsx | Post-Hero breadcrumbs |
| app/[locale]/pricing/page.tsx | Post-Hero breadcrumbs |
| app/[locale]/refund-policy/page.tsx | Post-Hero breadcrumbs |
| app/[locale]/service-areas/page.tsx | Post-Hero breadcrumbs with overlap reservation |
| app/[locale]/service-guidelines/page.tsx | Post-introduction breadcrumbs |
| app/[locale]/services/page.tsx | Post-Hero breadcrumbs |
| app/[locale]/support-process/page.tsx | Post-introduction breadcrumbs |
| components/CountrySourcePage.tsx | Post-Hero country-hub breadcrumbs |
| components/PageBreadcrumbs.tsx (new) | Shared localized compact breadcrumb rendering |
| components/RouteSeo.tsx | Remove visible strip; retain JSON-LD only |
| components/ServiceDetailTemplate.tsx | Post-Hero breadcrumbs for all service spokes |
| components/TrustSupportPage.tsx | Post-introduction breadcrumbs; public route mapping |
| tests/e2e/seo-phase02.spec.ts | Removed-strip assertions, localized existing links, real modal dismissal before breadcrumb navigation |
| tests/e2e/seo-phase03.spec.ts | Follow contextual blog/careers links; reject removed strip; exact unchanged careers heading |
| tests/e2e/seo-visual-content.spec.ts (new) | 36 desktop/mobile EN/AR hierarchy, direction, overlap and overflow cases |
| tests/seo-phase03-export.test.mjs | Assert removed nav/paragraph absence instead of requiring the old strip |
| tests/seo-phase05-export.test.mjs | Exact verified token total and improved two-hop expectation; other guards retained |
| tests/seo-visual-content-export.test.mjs (new) | All-route strip absence, post-Hero order/schema breadcrumb parity, source/technical SEO and original Hero protection |
| docs/seo-visual-content-remediation.md (new) | This inventory, findings and validation |

No snapshots were regenerated or changed. All popup/carousel production files and behavioral tests, forms, global styles/navigation/footer, localization messages, metadata/schema helpers, robots/sitemap, measurement sources, assets, data and deployment configuration are unchanged.

## All-route coverage and before/after evidence

| Family | EN | AR | Total |
| --- | --- | --- | --- |
| Information/hub/functional | 20 | 20 | 40 |
| Services | 31 | 31 | 62 |
| Countries | 12 | 12 | 24 |
| Locations | 7 | 7 | 14 |
| Total | 70 | 70 | 140 |

The unchanged route matrix in `docs/seo-phase-03-validation.md` identifies the complete URL inventory. Every exported sitemap route is checked. Existing tests retain valid internal destinations, unique localized titles/descriptions, one H1, canonical/hreflang reciprocity, robots/sitemap correctness, image alt presence, schema identity, FAQ agreement and visible breadcrumb names.

| Finding / metric | Parent checkpoint | Corrected export |
| --- | --- | --- |
| Standalone related-guide strips | 140 | 0 |
| Pre-Hero preparation paragraphs | 32 | 0 |
| Breadcrumbs | 138 before content | 138 after Hero/introduction |
| Unique titles / descriptions | 140 / 140 | 140 / 140 |
| Reachable per language | 70 / 70 | 70 / 70 |
| Maximum homepage link hops, per language | 3 | 2 |
| Minimum other-page inbound links | 1 | 1 |
| Orphans | 0 | 0 |
| Non-self per-source edges, per language | 1,586 | 1,542 |
| Measured paragraph tokens | 28,745 | 27,787 |
| Repeated paragraph occurrences | 651 | 651 |
| Repeated paragraph tokens | 8,258 | 8,258 |
| Same-language near pairs at >=0.65 | 0 | 0 |

The unchanged audit algorithm normalizes same-language paragraphs >=8 tokens and >=60 characters, and compares five-token shingles using Jaccard >=0.65, excluding nav/header/footer/scripts/styles. Removing unique preparation paragraphs reduces total prose, not the repeated-token count. Phase 3 gains remain intact; no new duplication improvement or complete uniqueness is claimed. Graphs use only same-language edges and include existing global navigation/footer; no new hidden SEO links were added.

Schema counts remain Organization/LocalBusiness/WebSite/WebPage 140 each, Service 76, BreadcrumbList 138 and FAQPage 112. Source guards verify exact preservation of technical SEO, trust, prices, messages, measurement, protected UI and the original Hero markup/styles against the parent checkpoint.

Reproduce detailed final route/graph/duplication evidence with `node scripts/seo-content-audit.mjs .next/seo-visual-content-after.json` after static export. Runtime evidence stays ignored under .next/out and is not part of the commit.

## Commands and results

No dependencies were installed. Installed local tools were used. Temporary environment flags were removed from their command processes. Final runtime uses default-disabled measurement.

| Command | Result |
| --- | --- |
| git branch --show-current; git rev-parse HEAD; git status --porcelain=v1 --untracked-files=all; git for-each-ref | Safety gates passed; preserved refs exact |
| git switch -c seo/visual-content-remediation | Created from the exact validated parent |
| npm run lint | PASS, exit 0 |
| node node_modules/typescript/bin/tsc --noEmit --incremental false | PASS, exit 0 |
| NEXT_PUBLIC_STATIC_EXPORT=true; npm run build (PowerShell env, removed in finally) | PASS, 145 framework outputs including 140 indexable routes |
| npm run build (no opt-in flags) | PASS, 145 framework outputs; static/cPanel configuration unchanged |
| Unit compilation below | PASS after final builds |
| Unit command below | 20/20 PASS, zero failed/skipped/cancelled/todo |
| Export command below | 8/8 PASS, zero failed/skipped/cancelled/todo; all 140 routes |
| node scripts/seo-content-audit.mjs .next/seo-visual-content-after.json | PASS, final metrics above |
| npm run start -- --port 3195 | Owned production-style local preview, no deployment |
| PLAYWRIGHT_PORT=3195; node node_modules/@playwright/test/cli.js test --output .next/visual-content-final-results | 202/202 PASS (101 per project), zero failed/skipped, 2.9 minutes; no filter or retry |
| git diff --check; git diff --cached --check | PASS before checkpoint |

```powershell
node node_modules/typescript/bin/tsc lib/json-ld.ts lib/structured-data.ts lib/image-alt.ts lib/content-architecture.ts lib/guide-content.ts lib/buyer-answers.ts lib/measurement.ts --outDir .next/phase-02-unit --rootDir . --module commonjs --target es2020 --esModuleInterop --skipLibCheck
node --test tests/seo-phase02-unit.test.cjs tests/seo-phase03-unit.test.cjs tests/seo-phase04-unit.test.cjs tests/seo-phase05-unit.test.cjs tests/seo-final-remediation-unit.test.cjs
node --test tests/seo-export.test.mjs tests/seo-phase02-export.test.mjs tests/seo-phase03-export.test.mjs tests/seo-phase04-export.test.mjs tests/seo-phase05-export.test.mjs tests/seo-visual-content-export.test.mjs
```

Diagnostics are not concealed: the first build found the legacy why-choose-inaya identifier rather than its public route; its breadcrumb mapping was corrected. The first export run had 6/8 pass: production rebuild removed compiled test modules, and the old three-hop expectation failed because the graph improved to two. Dependencies were recompiled after builds, and exact verified expectations were manually updated. A subsequent export run passed 8/8. The first unfiltered browser run had 196/198 pass: both failures were the new incorrect Arabic substring assertion (العمل versus للعمل), not changed page content. It now asserts the exact existing localized H1. No skip, forced click, arbitrary new wait, snapshot regeneration or reduced carousel assertion was used.

The expected static-export API/middleware warning and NO_COLOR/FORCE_COLOR runner warning are informational. No final unrelated failure is being waived.

## Manual visual review

Using the computer-use browser review path, 1440x1000 desktop and 390x844 mobile captures were manually inspected for both locales: homepage, live-in-maid service, Philippines country guide, Ajman location, contact, booking, careers and FAQ. Service-area hub was additionally reviewed in both viewports/locales after the overlap correction. Thus nine route families x two locales x two viewports were covered; this does not claim manual inspection of all 140 pages.

Native screenshot captures are displayed inline in the task: desktop/mobile route batches, final FAQ/service-area batches, and the Arabic mobile service Hero-boundary capture. They show the restored header-to-Hero layout, unchanged Hero design, compact wrapping breadcrumbs and correct RTL alignment. No screenshot URLs or files were fabricated; capture bytes were not saved into the repository. Arabic mobile breadcrumb Home navigation was actually clicked and reached /ar/. Browser error/warning logs were empty in inspected captures. No form data was submitted externally, telephone dialled or WhatsApp message sent.

The browser-review findings from the preceding read-only QA unrelated to this scope remain: sending-oriented careers/contact labels, completion-message scroll visibility, missing form label associations and Arabic mobile Menu wording. Forms/global navigation are deliberately unchanged. The misleading pre-Hero booking preparation note is no longer rendered; no broader wording or accessibility remediation is claimed.

## Local checkpoint and readiness boundary

All final validation passes: 20 unit tests, eight export tests and 202 unfiltered browser cases, with zero skipped. The 36 new hierarchy/overlap cases and four default-disabled measurement browser cases are included in the 202, not separate additive runs. All 140 route checks pass. No final unrelated test failure remains. Original Hero designs and technical SEO are preserved; no wider form/accessibility remediation or production approval is implied.

The owned localhost preview was stopped and port 3195 has no listener. The temporary browser tab was closed and viewport override reset. Only one local checkpoint is created after validation, message `fix(seo): restore page hierarchy and contextual links`. Its SHA and clean post-commit status are reported in the hand-off, not embedded circularly here.

No fetch, pull, push, PR, merge, rebase, deploy, external-account action or production modification. main and all earlier branches/checkpoints remain unchanged. External form delivery, analytics/CMP/Search Console configuration, business/review confirmation, hosting/WAF investigation, field performance and external SEO actions remain outside this local task and pending; no production-readiness or Googlebot-blocking claim is made.
