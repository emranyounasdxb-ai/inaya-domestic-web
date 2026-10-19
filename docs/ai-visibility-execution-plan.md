# Existing-content discovery plan — 19 October 2026

## Goal and scope

Make INAYA's existing English and Arabic service information easier for customers and search systems to find and understand. Recommendation positions vary by query, language, platform, session and date. This change does not promise placement or submit content directly into a model's training data.

## First implementation

- Expand the existing Ajman page's service questions in both languages: recruitment, monthly live-in maid, live-out nanny/babysitting, hourly/part-time visits, non-medical elderly support, visa enquiries, Filipino profiles and home cooking.
- Link each answer to existing localized service, country, pricing or contact pages.
- Improve the part-time page's booking, quotation, minimum-duration, supplies/transport and duty-scope questions. Preserve the approved commercial paragraph exactly.
- Add specific Ajman questions to the monthly package, nanny, babysitting and housekeeping pages in both languages, preserving the existing approved prices and contract terms.
- Record 19 October 2026 as the substantive modification date for these six route pairs. Keep other sitemap entries undated until reliable modification dates are recorded.
- After a successful cPanel upload, notify IndexNow of newly deployed or meaningfully changed canonical English/Arabic pages. Verify the public key first, exclude build-only changes, and retain the notification outcome and URL list as a deployment artifact. The existing FTP workflow preserves removed paths, so it does not report them as deleted URLs.
- Reuse the current metadata/FAQ pipeline so structured questions and answers match the visible page content. FAQ markup is not a promise of a rich result or an AI recommendation.
- Retain existing prices, contract terms, company identity, route structure, canonical URLs, language alternatives, crawler policy and sitemap inventory.

Family-driver availability is not established by the current service data. No driver service, price, candidate availability, qualification or new commercial promise is introduced. The cooking answer covers only the existing cooking service.

## Release checks

1. Lint and TypeScript checks.
2. Production static export.
3. Existing CI unit/export checks, including 194 localized sitemap routes, metadata, canonicals, language alternatives, approved commercial-copy placement and visible FAQ/schema consistency.
4. Added exported-page regression: every link in an Ajman answer resolves to an indexable canonical destination in the same language.
5. Existing pull-request browser regression before production merge.

## Following work

| Stage | Action | Completion evidence |
| --- | --- | --- |
| Publish | Release the reviewed change through the existing cPanel workflow | Successful deployment for the exact merged commit and a live check of all six changed routes in both languages |
| Discovery | Inspect the priority URLs in Search Console; request a crawl when the recorded crawl predates meaningful changes | Recorded inspected URL, index/canonical status, crawl date and accepted request if submitted; a request is not a completed crawl |
| Content facts | Ask operations for approved hourly rates or quotation examples, minimum visit duration, supplies/transport rules and current service availability | Approved factual details before publication; no invented values or public placeholders |
| Coverage | Review existing nanny, monthly, visa, care and source-country pages against actual customer questions | Specific useful answers and links; preserve applicable service limitations and existing commercial terms |
| Local identity | Compare existing business listings against current approved site identity | Verified exact listing and evidence of any authorized correction; avoid duplicate listings |
| Measurement | Repeat the same service questions in fresh chats, separately, in English and Arabic; use multiple runs | Date, platform/mode, question, cited pages, mention and observed position; blocked/refused answers excluded |

Recommended measurement intervals are approximately one week and one month after publication, with crawl status recorded alongside results. These are suggested review points, not a scheduled automation or a ranking deadline. Google Search Console measures Google visibility; it does not provide a universal LLM rank.

## References

- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: asking for a recrawl](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)

Google's AI Search guidance is specific to Google Search, not a documented ranking formula for every chatbot. Existing public-page crawl access already permits discovery; do not add special crawler rules or an AI text file simply to claim a ranking benefit.
