# Phase 5 measurement plan

2026-09-19. Local repository work only. No analytics account, external profile or production configuration was accessed or changed.

## Existing integration audit and implementation boundary

Source/configuration searches found no GA4, GTM, Search Console verification, conversion destination or consent manager. No verified provider ID or credential was available. No ID, account, verification token, Google tag, destination or consent choice was invented.

Implemented: provider-independent, consent-gated browser event pipeline and focused checks. NOT implemented/activated: transmission to GA4/GTM or another analytics destination, Search Console ownership verification, production consent UI, attribution/reporting or delivered-form conversions. Browser CustomEvents are an integration boundary, not proof of recorded analytics or conversions.

`NEXT_PUBLIC_MEASUREMENT_ENABLED=true` enables the collector at BUILD time. Otherwise the component is not rendered, its path inventory is not serialized and no consent API/listeners/provider request is installed. Rebuild both ordinary and static-export artifacts after configuration changes. Public environment variables are not suitable for credentials. No server runtime is required by this pipeline; cPanel/static export remains supported. See [Next.js environment-variable documentation](https://nextjs.org/docs/app/guides/environment-variables).

When enabled, an owner-approved consent manager can call `window.inayaMeasurementConsent(true)` ONLY after an explicit, valid analytics-consent choice, and `false` on withdrawal. Default is denied on every full document load. No cookies/localStorage, assumed consent, pre-consent queue or retrospective interaction replay is added. An in-memory consent choice survives client-side route changes. No banner/CMP or provider adapter is supplied; that integration remains PENDING and requires separate review/authorization. Enabling the flag alone does not send data anywhere.

An approved adapter may subscribe to `inaya:measurement` and receive `CustomEvent.detail`. It must not enrich events with DOM text, input values, hrefs, referrers, full browser URLs or identity. Use the allowlisted payload unchanged. An adapter error must not disrupt UI behavior. The collector is not a security boundary against unrelated third-party scripts; privacy review must cover every deployed provider/script and setting.

## Event dictionary

All emitted objects have exactly event, page_location, language and page_type, plus the explicitly permitted optional fields below. page_location uses the existing production origin and exact sitemap-allowlisted canonical pathname. Query/hash data are stripped; unknown routes are rejected. Language is en/ar. page_type is home/service/country/location/information. No arbitrary parameter object is accepted.

| Event | Technically valid trigger | Additional data / interpretation |
| --- | --- | --- |
| page_view | Consent granted on current known route; consented client navigation | No extra fields; consecutive identical canonical paths suppressed; a later genuine return visit remains countable |
| contact_cta | Trusted click from another page to localized contact/booking route | No href/anchor text; navigation intent, not enquiry delivery |
| phone_click | Trusted tel-link click | No number; intent only, not a completed call |
| whatsapp_click | Trusted wa.me/api.whatsapp.com link click | No number/message/href; intent only, not sent/delivered conversation |
| form_start | First trusted input/change on contact/booking/careers form after consent | form_id fixed enum; no field name/value; once per actual rendered form object |
| language_switch | Trusted internal link to known opposite-language route | target_language en/ar only |
| service_enquiry | Trusted contact/booking link click originating on a service spoke | Public source canonical identifies service; no selected form values; not a confirmed booking |
| form_success — EXCLUDED | No delivery integration exists | Local React done/setDone is NEVER success evidence; no emitter/API for this event |

The same native event object cannot emit twice. Form objects are weakly retained for first-interaction deduplication. Listener cleanup and a document-level controller prevent route-effect/Strict Mode page-view duplication. No time-window suppression hides genuine repeated clicks. Events dropped while disabled/denied are not queued. Unknown event names, form IDs and languages are rejected.

## Privacy and activation evidence

Never send names, telephone/email values, messages, candidate details, documents, user-entered service/nationality/area fields, query/hash strings or referrers. A public allowlisted route is context, not a field value. No user ID, session ID, fingerprint, cookie, storage record or external request is created here.

Before separately authorized activation, require:

1. Owner provides a verified destination/property and authorized build configuration; do not infer ID ownership from its syntax.
2. Approve actual consent/privacy wording, purpose, retention, access and withdrawal flow; integrate a real CMP. Test default-denied, grant, withdrawal, reload and navigation behavior.
3. Review provider automatic/enhanced measurement and disable automatic history/form/click collection that could bypass this allowlist or duplicate events. GA4 can send history pageviews through enhanced measurement even with send_page_view:false; see [Google pageview guidance](https://developers.google.com/analytics/devguides/collection/ga4/views).
4. Review complete network payloads/cookies with synthetic local data and an approved test destination; verify no PII or duplicate events and prove withdrawn consent stops every provider request. The current tests prove the repository boundary, NOT a future provider's behavior.
5. Confirm actual delivery contract/backend receipt before adding form_success. Validate successful receipt versus validation errors, network errors, retry/idempotency and duplicates. Do not count UI local completion.
6. Owner verifies Search Console separately and supplies approved verification method/token; retain verification evidence. No Search Console or CrUX access/result is claimed now.

Form delivery remains a P0 blocker: BookingForm, ContactForm and CareersForm have local validation/state only. Existing phone/WhatsApp remain contact alternatives. Four inherited booking/careers descriptions imply sending/follow-up; see final audit. No provider or delivered-form conversion is production-ready.

## External action review: all PENDING

The eight Phase 4 actions are distinct; business-detail approval is a prerequisite to listing/citation edits, not a duplicate of those edits. Citation correction and editorial opportunity evaluation are separate. Review-source verification differs from requesting future honest feedback and from responding to existing feedback. No unsupported named directory, invented membership, speculative affiliate or paid-link opportunity was added. Prior reports/plans are unchanged.

| Priority | Pending action | Completion evidence required after separate authorization |
| --- | --- | --- |
| P0 | Real-world NAP/hours approval | Dated owner-approved EN/AR sheet; registration/signage/office contact and ordinary/holiday hours evidence |
| P0 | Place ID and six curated review provenance checks | Dated real listing/source links or screenshots matching attribution, wording and individual values; approval records |
| P0 | Exact audit 406/WAF investigation | URL/timestamp/method/headers correlated with effective Apache/ModSecurity/CDN logs and identified response layer; verified crawler identity if relevant |
| P1 | Existing GBP field audit; propose authorized corrections | Approved NAP comparison, owner decision, and dated post-edit evidence only if edits separately authorized |
| P1 | Neutral honest-feedback request workflow | Approved wording/real interaction selection; no incentive, rating threshold or satisfied-customer filtering; authorized communication evidence |
| P1 | Correct inaccurate existing citations first | Exact existing source URL, before/approved-after values, separate correction authorization and dated published verification |
| P2 | Relevant legitimate editorial/community opportunities | Actual relationship/membership evidence where claimed; relevance review; separately identify proposed/submitted/published; independently accessible published URL, no fabricated authority metric |
| P2 | Genuine feedback themes and respectful response proposals | Owner-approved proposals/privacy review and real response records after separate authorization; no fabricated review/response |

No outreach, account login, feedback request, listing/citation submission, backlink acquisition or review response was performed. Publication, search visibility, rankings and reputation outcomes cannot be certified locally.
