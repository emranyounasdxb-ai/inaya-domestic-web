# INAYA release handoff — 20 October 2026

The owner is moving from a borrowed PC. All implementation changes are saved in this branch and PR #44. Continue from this PR rather than recreating the changes. Do not assume local browser sessions, local evidence files or Codex chat history are available on another PC.

## Current release

- PR: https://github.com/emranyounasdxb-ai/inaya-domestic-web/pull/44
- Branch: `codex/form-email-delivery-20261020`.
- Production has NOT received this form-delivery release. Do not claim live form delivery until deployment and inbox verification finish.
- Contact, booking and careers forms in English and Arabic now use a same-origin PHP endpoint, fixed recipient `info@inayadomestic.ae`, server validation, origin/size/rate limits, private receipts and retry deduplication. Existing fields, local validation, options, labels, styling and focused confirmation are preserved. Failure keeps entered details. Submission does not confirm a booking, job or interview.
- Relevant FAQ, privacy, website terms, guides, calls to action and booking/careers meta descriptions explain actual delivery. Unrelated content is protected by exact regression guards.
- PHP syntax, TypeScript, ESLint, static Webpack export and 54 required unit/export checks passed on the private hosting checkout BEFORE the final four metadata corrections. The final metadata corrections and their exact baseline/test updates are saved in this PR; inspect the latest-head CI rather than relying on the earlier passing count.
- Eleven isolated PHP HTTP checks capture mail locally without sending email: method, origin, content type, malformed/oversized payload, required fields, email validation, rate limit, valid acceptance, duplicate same reference and changed data with reused ID.
- A separate authorized synthetic hosting test reached the real info mailbox: `INAYA-20261020-150045-887AB3`. Retrying that request returned the same reference without a second email. This proves the hosting mail transport/inbox, not the still-unreleased production UI.
- Browser regression tests mock the PHP endpoint for successful EN/AR submissions, accessible confirmation, and failed-delivery retry. Static-only Vercel previews do not execute PHP. Production cPanel must execute the endpoint.

## Finish this release

1. Use the owner's official LOCAL Chrome connection. Verify existing tabs. If unavailable, guide Settings → Computer Use → Chrome. Do not switch to a cloud browser without asking. Pause for passwords, OTP or CAPTCHA; do not store credentials in code or this document.
2. Inspect latest-head PR checks and existing Codex review; fix genuine failures without weakening unrelated assertions. Earlier CI run 39449085588 had passed lint, TypeScript, static export, unit/export and four responsive pricing checks, and was still running full browser regression when this handoff was prepared.
3. After required checks pass, merge this already-authorized release. The owner explicitly requested publishing the forms and finishing the prepared audit work; no repeat permission is needed for that scope.
4. Watch the existing cPanel deployment. Preserve `.github/scripts/cpanel-incremental.mjs` and the successful remote baseline. Upload ONLY byte-changed/new necessary files, never blindly deploy the whole site. Shared CTA/JS changes can legitimately change multiple generated files; report actual selected/skipped counts honestly.
5. Inspect the existing automatic semantic-diff IndexNow result after successful FTP. Do not manually resend unchanged pages or duplicate the same release notification. Google/Bing indexing are being handled separately.
6. On the LIVE website, send clearly synthetic no-service/no-job QA enquiries through contact, booking and careers in both EN and AR. Record all six displayed references and confirm corresponding messages in the info mailbox. Respect the endpoint limit of 10 submissions per 15 minutes per actual client IP. Do not claim a booking/application outcome.
7. Report in Roman Urdu: platform, account/setup, accepted submissions, indexing actually observed, remaining work and exact external blockers. Close only task-created finished tabs; preserve unrelated user tabs/accounts.

## Search platform evidence already established

- Yandex: correct INAYA account and ownership verified; public verification file `yandex_d2f1bc5db72663d8.html` is live. Sitemap Add and recrawl Send remained disabled with the service in read-only mode at the final recheck. NO accepted sitemap or recrawl request is claimed. Resume only when the platform restores those functions; do not bypass disabled controls.
- Brave: 228 unique sitemap URLs (114 EN / 114 AR) have historical visible DOM Success receipts. Twenty have independently verified acceptance screenshots; 208 rely on recorded DOM confirmations. This distinction is evidence quality, not a reason to repeat unchanged submissions. The coverage query showed eight exact current sitemap URLs (five EN / three AR), plus a working www variant and legacy results. It does not establish full-site indexing.
- Brave removed-page re-fetch requests were accepted for five confirmed 404 URLs: `/maid-salary-uae-2025/`, `/privacy-policy/`, `/candidate-profiles/`, `/domestic-worker-services-uae/`, `/domestic-staff-hiring-ajman/`. Actual disappearance from results remains unconfirmed. Working redirects were excluded.
- Brave Maps/images/favicon: the owner authorized the public business report and the form returned Thank you for your feedback. No ticket number was shown. Maps publication, image coverage and cached favicon refresh remain Brave-side work. The current website icon and hero image were independently rendered; locale icon links are present. Do not confuse the official Chrome automation tab badge injection with a website favicon defect.
- ChatGPT Search, Perplexity, Apple: actual hosting access logs were checked against CURRENT official published IP ranges, not user-agent strings alone. Verified totals across current/October archived logs: OAI-SearchBot 397, PerplexityBot 279, Applebot 157. On 20 October: OAI five 200 and three 301; Perplexity two 200; Apple one 200 and one 404 for `/feed/`. No verified same-day 403/406/429 indexing block was found. Actual indexing/ranking is NOT proved by bot visits. Do not create chatbot accounts to claim indexing. Another task was separately handling Apple business setup; do not duplicate or disturb it.
- IndexNow already existed and was inspected. Earlier releases: #78 HTTP200/42 selected; #79 skipped/228 unchanged; #80 HTTP200/90 selected; #81 HTTP200/2 selected; #82 and #83 skipped/228 unchanged. These are notifications, not unique indexed-page counts. No manual duplicate notification was sent.
- Earlier favicon metadata release was deployed successfully at main `bc2c4fa2983f242965fd282783fc7a0d843fb984`. Brave result refresh is external.

## Hosting workspace if needed

A private checkout exists on the authorized hosting account at `/home/inayadomestic/tmp/inaya-form-release-20261020`. No production files were replaced manually. The host requires the Webpack/WASM fallback for a private build; the normal GitHub Ubuntu CI can use its existing build. Do not commit private build-only config/layout changes. Its `app/api` folder was moved to private `api-build-backup` for static export. Local compilation output is cleared by a build, so recompile focused unit helpers before running unit/export tests. The PHP test server was terminated after testing. Passwords, session URLs and raw access logs are intentionally absent from this handoff.
