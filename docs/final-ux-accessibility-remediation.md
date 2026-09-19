# Final form and navigation accessibility remediation

Scope: local INAYA repository only, 2026-09-19.

## Safety

Initial gates passed: `seo/visual-content-remediation`, exact HEAD
`f45a93dc0b8274ad6a792420cfa3e4bcbb828103`, completely clean working tree.
`main`, Phase 1–5 and final-remediation refs matched the exact SHA table in
`docs/seo-visual-content-remediation.md`. The owned port-3195 preview was stopped
through its existing execution session before creating
`seo/final-ux-accessibility-remediation`. No checkpoint was amended or rewritten.

## Narrow implementation

- Careers button: “Check Career Enquiry Details” / “مراجعة بيانات استفسار العمل”.
- Contact Hero CTA: “Check Enquiry Details” / “راجع بيانات الاستفسار”.
- Contact form heading: “Prepare your enquiry details locally” /
  “جهز بيانات استفسارك محلياً”.
- Contact's existing lower CTA uses the same neutral local-check wording and
  explicitly says the form does not send details. Booking's preparation heading
  now says “Before checking your details” / “قبل مراجعة البيانات”.
- Shared confirmation schedules focus and centering in the next animation frame
  after the tall form is replaced, avoiding immediate scroll/layout coordination.
  It focuses with `preventScroll`, then centers itself using
  `scrollIntoView`; reduced motion uses instant instead of smooth scrolling.
  Status semantics, polite announcement and a programmatically focusable target
  are added. Existing localized non-delivery confirmation messages and styling
  are unchanged. The original integrated visibility assertion is unchanged.
- All Booking (8), Careers (7), and both Contact variants (7 each) have unique
  React `useId`-based IDs and matching localized `label/htmlFor`. Existing
  Booking/Contact inline errors have IDs, `aria-describedby` and `aria-invalid`.
  Contact privacy help is associated with its form. Existing Careers native
  required/type/min validation is preserved.
- Arabic mobile menu's visible and accessible name is “القائمة”; English remains
  “Menu”. Navigation logic and styles are unchanged.

All submit handlers are identical to the approved base: no external submission,
form-success measurement, network client or new provider configuration.
Technical SEO, metadata snapshots, schema, routes, breadcrumbs, original Hero
markup, pricing/review content, popup/carousel sources and behavioral tests,
measurement defaults, global styles and deployment configuration are untouched.

## Exact changed-file inventory (19)

1. app/[locale]/booking/page.tsx
2. app/[locale]/contact/page.tsx
3. components/BookingForm.tsx
4. components/CareersForm.tsx
5. components/ContactForm.tsx
6. components/LocalFormConfirmation.tsx (new)
7. components/Navbar.tsx
8. components/PhaseOneSeoSection.tsx
9. messages/en.json
10. messages/ar.json
11. tests/e2e/final-ux-accessibility.spec.ts (new)
12. tests/final-ux-accessibility-unit.test.cjs (new)
13. tests/final-ux-accessibility-export.test.mjs (new)
14. tests/form-accessibility-preservation.cjs (new)
15. tests/seo-final-remediation-unit.test.cjs
16. tests/seo-phase04-unit.test.cjs
17. tests/seo-phase05-export.test.mjs
18. tests/seo-visual-content-export.test.mjs
19. docs/final-ux-accessibility-remediation.md (new)

Existing form whole-file guards are replaced by exact validation-handler,
field-attribute/order, service-option and styling comparisons. Separate exact
base comparisons permit only the reviewed messages, navbar and page/CTA copy
replacements. Technical SEO and protected popup/carousel guards remain exact.
No metadata snapshot was changed or regenerated. Only the measured paragraph
token expectation changes from 27,787 to 27,811: two new CTA disclaimer paragraphs
cross the audit's minimum length threshold and add 24 counted tokens. Repetition,
near-pair, orphan and locale-depth guards are unchanged.

## Validation executed

| Command | Result |
| --- | --- |
| npm run lint | PASS |
| node node_modules/typescript/bin/tsc --noEmit --incremental false | PASS |
| npm run build | PASS; final ordinary production build completes after export build |
| NEXT_PUBLIC_STATIC_EXPORT=true; npm run build (process-local PowerShell env, removed afterward) | PASS; 145 framework outputs, 140 indexable routes |
| Unit compilation and command below | 23 PASS, zero skipped |
| Export command below | 9 PASS, zero skipped |
| PLAYWRIGHT_PORT=3195; node node_modules/@playwright/test/cli.js test tests/e2e/final-ux-accessibility.spec.ts --output .next/ux-focused-final-results | 32 PASS, zero skipped, 44.6 seconds |
| PLAYWRIGHT_PORT=3195; node node_modules/@playwright/test/cli.js test --output .next/ux-full-results | Original run: 233 PASS, 1 FAIL, zero skipped; 3.7 minutes |
| PLAYWRIGHT_PORT=3195; node node_modules/@playwright/test/cli.js test tests/e2e/final-ux-accessibility.spec.ts --project chromium --grep 'en booking:.*\(reduce\)' --output .next/ux-scroll-reduced-results | Corrected original failing case: 1 PASS, zero skipped |
| PLAYWRIGHT_PORT=3195; node node_modules/@playwright/test/cli.js test tests/e2e/final-ux-accessibility.spec.ts --output .next/ux-scroll-focused-final-results | Corrected focused suite: 32 PASS, zero skipped; 46.8 seconds |
| PLAYWRIGHT_PORT=3195; node node_modules/@playwright/test/cli.js test --output .next/ux-scroll-full-final-results | Authorized single full rerun: 234 PASS, zero failed/skipped; 3.7 minutes |
| git diff --check | PASS |

```powershell
node node_modules/typescript/bin/tsc lib/json-ld.ts lib/structured-data.ts lib/image-alt.ts lib/content-architecture.ts lib/guide-content.ts lib/buyer-answers.ts lib/measurement.ts --outDir .next/phase-02-unit --rootDir . --module commonjs --target es2020 --esModuleInterop --skipLibCheck
node --test tests/seo-phase02-unit.test.cjs tests/seo-phase03-unit.test.cjs tests/seo-phase04-unit.test.cjs tests/seo-phase05-unit.test.cjs tests/seo-final-remediation-unit.test.cjs tests/final-ux-accessibility-unit.test.cjs
node --test tests/seo-export.test.mjs tests/seo-phase02-export.test.mjs tests/seo-phase03-export.test.mjs tests/seo-phase04-export.test.mjs tests/seo-phase05-export.test.mjs tests/seo-visual-content-export.test.mjs tests/final-ux-accessibility-export.test.mjs
```

All 140 exported EN/AR routes retain unique titles/descriptions, canonical and
hreflang reciprocity, one H1, valid JSON-LD, links and no top SEO strip. Zero
orphans; all 70 routes per language remain reachable within two homepage hops.
Repeated tokens remain 8,258; repeated occurrences 651; near pairs zero.

Diagnostics are not waived: the first export run was 7/8 (only the old prose-token
expectation). The first focused browser run was 29/32 because a new guard counted
unchanged Google Maps iframe RPCs as form POSTs. The corrected guard forbids
main-frame submissions, all-frame analytics and QA field values in any request
URL/body, while recognizing iframe map RPCs are not form delivery. Final focused
rerun passed all 32. No skip, forced click, arbitrary wait or retry was added.

Manual computer-use review at 390x844 completed all six localized Booking,
Careers and Contact forms with synthetic local-only QA values. Confirmation
screenshots show truthful messages centered and visible. Associated localized
controls are exposed in the accessibility tree. Arabic “القائمة” was actually
opened; the localized navigation rendered correctly. Captures were displayed
inline, not saved into repository assets. No WhatsApp, telephone or mail link was
activated. Viewport override was reset and the temporary QA tab closed.

## Authorized continuation and readiness

The original integrated desktop EN Booking/reduced-motion test found the focused
confirmation partly below the viewport. The owner authorized a narrow correction
and exactly one additional full unfiltered run. Existing 13 modified and six
untracked files were preserved. Only the new confirmation component and this
report changed during continuation; the browser test is unchanged.

The former effect focused/scrolled immediately after replacing a tall form.
The correction coordinates that operation with the next browser frame and cancels
the callback on unmount. No timed wait, retry, observer loop, CSS change or
assertion relaxation was introduced. This addresses scroll/layout sequencing;
the exact browser-internal cause of the original failure was not instrumented.
The original case and all 24 EN/AR desktop/mobile confirmation cases pass in the
final focused run, including full viewport bounds and both motion preferences.

Failure: Chromium desktop, `/en/booking/`, reduced-motion preference. Dismiss
the offer popup, complete valid local details and check them. Focus reaches the
confirmation, but the whole confirmation does not fit within the viewport after
the eight-second visibility assertion. Expected: focused confirmation entirely
visible below the header. Screenshot:
`.next/ux-full-results/final-ux-accessibility-en--b6406-isible-confirmation-reduce--chromium/test-failed-1.png`.
This is the original failure evidence, not a waived result. No assertion was weakened.

Continuation diagnostics: an accidental build overlap with the first focused
attempt hit an EBUSY lock on a Playwright video in `.next`. That focused run was
interrupted and is not counted as passing. A subsequent export check was 8/9
because the build cleared its compiled buyer-answers helper. Builds were then
completed, the documented helper compilation rerun, and final unit/export checks
passed 23/23 and 9/9. No test or application assertion was changed for these
environment/sequencing issues. Final focused run completed after builds; the full
rerun starts only after focused success, with no concurrent build.

Final readiness: PASS for the requested local code/UX scope. The authorized
single full rerun passed all 234 tests, including the original failing case and
all desktop/mobile confirmation assertions. Final lint, TypeScript, production
and static-export builds, unit (23), export (9), focused browser (32), and diff
checks pass. Earlier unsuccessful attempts are documented above, not erased.

Owned port-3195 validation preview stopped after the successful full run. All
19 inventory files are saved in one local checkpoint with message
`fix(a11y): resolve final form and navigation gaps`. Its SHA is provided by Git
and the handoff rather than embedding a self-referential hash in this document.
`main`, Phases 1–5, final-remediation and visual-content-remediation refs remain
unchanged. No previous checkpoint was amended or rewritten.

Real form delivery and external production/account readiness remain outside this
task. No fetch, pull, push, PR, merge, rebase, deployment or production operation.
