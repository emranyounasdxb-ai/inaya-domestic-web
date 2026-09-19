# SEO Phase 3 validation

Date: 2026-09-19. Repository: C:/Projects/inaya-domestic-web only. Scope: visible content quality/deduplication and page relationships.

## Safety and preserved checkpoints

All pre-work gates passed before mutation: seo/phase-02-website-optimization; completely clean tree; HEAD 718ce7d75a17a0f36a80dbd4f236e4dfa756a1c5; Phase 1 branch 0ed4765b203c46748287873e89c6ac05d14c38f6; main 021a5e0bf32c342b20fbf72127b4b25a02ee0393. Repository instructions and both preceding validation reports were read. Local branch seo/phase-03-content-architecture was created from that Phase 2 checkpoint.

Previous checkpoints are preserved, not amended, rewritten or removed. Phase 1 URL helpers/robots/sitemap/configuration, Phase 2 metadata/schema helpers and both reports are unchanged. Every title/description and schema @id is compared with the frozen Phase 2 export snapshot. No fetch, pull, push, PR, merge, deploy or production operation occurred.

## Findings and editorial improvements

The 140-route audit identified repeated service-guide and FAQ prose, generic process and country copy, nationality-based strengths/suitability labels, repeated city/country cross-link lists, three short informational pages and 10 orphan URLs. Word counts diagnose context; they are not minimum targets.

- All 31 services have paired English/Arabic scope and preparation briefs grounded in existing role definitions. These clarify cleaning versus management, residence versus working pattern, regular nanny versus occasional babysitting, practical care versus clinical promises, cooking versus preparation, recruitment versus documents and specialist add-on duties. Titles, metadata, factual duty lists and pricing data remain intact.
- The generic secondary service guide and duplicate supplementary FAQs are replaced with concise role comparisons. Related services are curated to three relevant alternatives instead of padded fallback lists. Service FAQs add actual alternative-role definitions and retain relevant existing questions; repeated generic availability/fixed-price questions are removed from this section.
- Generic competitor comparisons are replaced with neutral household-detail/clarification checklists in the existing styled section, without inventing competitor facts.
- All 12 country guides have individual-profile review guidance. Nationality-based strengths/suitability labels become review questions and preparation criteria. Shared process explanations link to recruitment/documents/how-it-works; comparison returns to the country hub instead of six repeated cross-country cards. An existing Myanmar “best way” question is neutrally rephrased; its answer remains unchanged.
- All seven location guides get practical enquiry guidance using existing area names and office facts. A visible FAQ clarifies that an area listing does not confirm a worker, visit or start date. Repeated local-needs blocks and six-city grids are replaced by preparation/hub links. No invented local statistics, travel times, demographic patterns or city-specific availability are added.
- Sixteen informational/functional routes get purpose-specific reading/preparation notes and curated next steps. Service guidelines/support process gain useful role, preparation and agreement-review sections. Guidelines H1 accurately says guidelines, not policy, without URL/metadata changes.
- Blog remains forthcoming: coming-soon labels are plain text, not misleading contact links. Three existing live guides provide useful reading now; no articles were fabricated.

Grounding: lib/services.ts, existing service copy/polish layers, service-presentation role definitions, country-source-pages, location-service-pages, trust-support-pages, site-config and existing forms/informational pages. No external facts were needed. Tests reject new numeric claims, positive rankings, licence/award assertions and approval/safety guarantees; explicit negative disclaimers are reviewed separately.

New English/Arabic pairs were reviewed for aligned meaning and natural wording. Tests verify paired fields, equivalent roles/links and current visible FAQ objects in each locale. This is not independent translator certification. Existing prices, functional forms, assets and protected reviews/offers are preserved.

## Reproducible duplication method

scripts/seo-content-audit.mjs reads every sitemap canonical and its exported HTML. It extracts the outer locale main (including nested page mains), excludes scripts/styles/header/footer/nav blocks, decodes common entities, strips tags and normalizes whitespace/Unicode letter-number tokens.

1. Exact paragraph metric: p text with >= eight tokens and >= 60 normalized characters, lowercased. A paragraph repeats if present on more than one same-language page. All its occurrences and token weights are counted. Repetition within just one page alone is not included.
2. Near pairs: Jaccard similarity of five-token shingle sets over main text, within each language, threshold >= 0.65. No name substitution, stemming, translation matching or embeddings.

Baseline came from a fresh static export of validated Phase 2 before content editing, using this same new algorithm. tests/fixtures/seo-phase03-baseline.json freezes counts and all 140 route metadata/schema-ID/price identities. Detailed ignored runtime evidence remains in .next/seo-phase03-baseline.json and .next/seo-phase03-after.json.

Reproduce after: static-export build, then node scripts/seo-content-audit.mjs .next/seo-phase03-after.json. The same script can audit a fresh export of the recorded Phase 2 checkpoint for baseline reproduction; no reset/checkout of this working tree was performed. Snapshot export tests provide repeatable comparisons.

| Metric | Before | After |
| --- | --- | --- |
| Localized routes | 140 | 140 |
| Repeated long-paragraph occurrences | 981 | 651 |
| Repeated paragraph tokens | 13,141 | 8,258 |
| All measured paragraph tokens | 33,526 | 28,116 |
| Repeated-token share | 39.20% | 29.37% |
| Same-language near pairs at >= 0.65 | 86 | 0 |
| Orphan routes | 10 | 0 |

Repeated occurrences fell 33.64%; repeated token weight fell 37.16%. Total prose shrank rather than being padded. These lexical measurements do NOT establish complete uniqueness or distinct business facts for every page.

| Language/cluster | Pages | Repeated paragraphs before → after | Repeated tokens before → after |
| --- | --- | --- | --- |
| en:information/hub | 20 | 12 → 12 | 223 → 223 |
| ar:information/hub | 20 | 12 → 12 | 220 → 220 |
| en:service | 31 | 613 → 452 | 7905 → 5155 |
| ar:service | 31 | 258 → 99 | 3396 → 1248 |
| en:country | 12 | 36 → 24 | 643 → 439 |
| ar:country | 12 | 36 → 24 | 544 → 364 |
| en:location | 7 | 7 → 14 | 133 → 364 |
| ar:location | 7 | 7 → 14 | 77 → 245 |

Location repetition intentionally increases because the same truthful availability qualification appears in each location FAQ. Country criteria, some existing service process/pricing/benefit text and informational FAQs remain shared where subjects overlap. Legal terms, price facts and protected reviews/offers were not rewritten to manufacture uniqueness. Existing marketing/factual copy was not independently business-verified; this report does not certify it. New nationality stereotypes or local promises were not fabricated.

## Architecture and crawlable link coverage

Homepage connects services, source countries, locations and process. Services hub links existing groups/spokes and country/location/guide hubs. Country hub links all 12 guides; country spokes link relevant roles, recruitment, documents and process. Location hub links all seven guides; spokes link relevant services/preparation. Informational routes link appropriate booking/document/support/policy steps.

Curated related nav has two to four destinations, no self-links/duplicates/invalid routes and no service-city-country cross-product. Visible breadcrumbs still use unchanged Phase 2 names/order/canonicals and match BreadcrumbList. New links use localized relative trailing-slash URLs.

The normalized graph is crawled separately from /en/ and /ar/, WITHOUT cross-language edges. Each language reaches 70/70 routes within three hops. Every route has at least one incoming link from another same-language page. Each graph has 1,585 unique per-source non-self destination edges, including global navigation/footer: these are not all newly added links. Canonical normalization accommodates existing slashless links; root redirects/external/contact links are outside this page graph.

Formerly orphaned careers, blog, inaya-advantages, reviews and support-process in both locales now have relevant inbound paths. Every internal content link stays in its locale; only the existing explicit English/العربية language switcher crosses locales.

## Route/content matrix: every indexable EN/AR route

All 140 paths below use https://inayadomestic.ae and are unchanged. Intent comes from existing localized metadata. Codes identify shared families, not that every pair is near-duplicate. Required-treatment column records the implemented improvement. Words/repetition use the method above.

S-* = service role family; C-profile = nationality preference/profile/process; L-area = location enquiry/process; G-short = short informational baseline; F-form = functional enquiry/application; H-hub = index/hub; I-guide = other information/policy. Short forms/policies are not automatically poor because they are short.

| Route | Type / intent | Duplicate cluster | Required improvement / treatment | Words before → after | Repeated paragraphs before → after |
| --- | --- | --- | --- | --- | --- |
| /en/ | information/hub: Maid & Domestic Worker Services in UAE | H-hub | Connect existing service, country, location and guide hubs | 682 → 682 | 0 → 0 |
| /ar/ | information/hub: خدمات الخادمات والعمالة المنزلية في الإمارات | H-hub | Connect existing service, country, location and guide hubs | 644 → 644 | 0 → 0 |
| /en/about/ | information/hub: About INAYA Domestic Workers | I-guide | Reading note + contextual next steps; preserve factual/policy body | 652 → 690 | 0 → 0 |
| /ar/about/ | information/hub: عن عناية للعمالة المنزلية | I-guide | Reading note + contextual next steps; preserve factual/policy body | 559 → 585 | 0 → 0 |
| /en/services/ | information/hub: Domestic Worker Services in UAE | H-hub | Connect existing service, country, location and guide hubs | 436 → 436 | 0 → 0 |
| /ar/services/ | information/hub: خدمات العمالة المنزلية في الإمارات | H-hub | Connect existing service, country, location and guide hubs | 418 → 418 | 0 → 0 |
| /en/contact/ | information/hub: Contact INAYA Domestic Workers | I-guide | Reading note + contextual next steps; preserve factual/policy body | 638 → 675 | 0 → 0 |
| /ar/contact/ | information/hub: اتصل بعناية للعمالة المنزلية | I-guide | Reading note + contextual next steps; preserve factual/policy body | 535 → 564 | 0 → 0 |
| /en/how-it-works/ | information/hub: How INAYA Services Work | I-guide | Reading note + contextual next steps; preserve factual/policy body | 667 → 706 | 0 → 0 |
| /ar/how-it-works/ | information/hub: كيف تعمل خدمات عناية | I-guide | Reading note + contextual next steps; preserve factual/policy body | 539 → 565 | 0 → 0 |
| /en/service-areas/ | information/hub: Domestic Service Areas in UAE | H-hub | Connect existing service, country, location and guide hubs | 389 → 389 | 0 → 0 |
| /ar/service-areas/ | information/hub: مناطق الخدمات المنزلية في الإمارات | H-hub | Connect existing service, country, location and guide hubs | 348 → 348 | 0 → 0 |
| /en/services/countries-we-source-from/ | information/hub: Domestic Worker Source Countries | H-hub | Connect existing service, country, location and guide hubs | 818 → 811 | 12 → 12 |
| /ar/services/countries-we-source-from/ | information/hub: دول مصدر العمالة المنزلية | H-hub | Connect existing service, country, location and guide hubs | 773 → 734 | 12 → 12 |
| /en/booking/ | information/hub: Request a Domestic Worker Service | F-form | Request/application preparation + relevant next steps | 168 → 208 | 0 → 0 |
| /ar/booking/ | information/hub: طلب خدمة عمالة منزلية | F-form | Request/application preparation + relevant next steps | 163 → 189 | 0 → 0 |
| /en/careers/ | information/hub: Domestic Worker Opportunities | F-form | Request/application preparation + relevant next steps | 158 → 191 | 0 → 0 |
| /ar/careers/ | information/hub: فرص العمل في الخدمات المنزلية | F-form | Request/application preparation + relevant next steps | 158 → 183 | 0 → 0 |
| /en/pricing/ | information/hub: Domestic Worker Packages & Pricing | I-guide | Reading note + contextual next steps; preserve factual/policy body | 313 → 350 | 0 → 0 |
| /ar/pricing/ | information/hub: باقات وأسعار العمالة المنزلية | I-guide | Reading note + contextual next steps; preserve factual/policy body | 281 → 306 | 0 → 0 |
| /en/blog/ | information/hub: Domestic Service Guides | G-short | Practical sections + real guide links; accurate purpose | 71 → 205 | 0 → 0 |
| /ar/blog/ | information/hub: أدلة الخدمات المنزلية | G-short | Practical sections + real guide links; accurate purpose | 64 → 168 | 0 → 0 |
| /en/faq/ | information/hub: Frequently Asked Questions | I-guide | Reading note + contextual next steps; preserve factual/policy body | 555 → 589 | 0 → 0 |
| /ar/faq/ | information/hub: الأسئلة الشائعة | I-guide | Reading note + contextual next steps; preserve factual/policy body | 475 → 500 | 0 → 0 |
| /en/documents-required/ | information/hub: Documents Required for Maid Services in UAE | I-guide | Reading note + contextual next steps; preserve factual/policy body | 358 → 393 | 0 → 0 |
| /ar/documents-required/ | information/hub: المستندات المطلوبة لخدمات الخادمات في الإمارات | I-guide | Reading note + contextual next steps; preserve factual/policy body | 326 → 352 | 0 → 0 |
| /en/inaya-advantages/ | information/hub: Why Choose INAYA Domestic Workers | I-guide | Reading note + contextual next steps; preserve factual/policy body | 303 → 333 | 0 → 0 |
| /ar/inaya-advantages/ | information/hub: لماذا تختار عناية للعمالة المنزلية | I-guide | Reading note + contextual next steps; preserve factual/policy body | 268 → 288 | 0 → 0 |
| /en/reviews/ | information/hub: Google Reviews & Client Feedback | I-guide | Reading note + contextual next steps; preserve factual/policy body | 277 → 316 | 0 → 0 |
| /ar/reviews/ | information/hub: آراء جوجل وتجارب العملاء | I-guide | Reading note + contextual next steps; preserve factual/policy body | 254 → 281 | 0 → 0 |
| /en/privacy-policy/ | information/hub: Privacy Policy | I-guide | Reading note + contextual next steps; preserve factual/policy body | 280 → 311 | 0 → 0 |
| /ar/privacy-policy/ | information/hub: سياسة الخصوصية | I-guide | Reading note + contextual next steps; preserve factual/policy body | 252 → 277 | 0 → 0 |
| /en/terms/ | information/hub: Terms & Conditions | I-guide | Reading note + contextual next steps; preserve factual/policy body | 288 → 325 | 0 → 0 |
| /ar/terms/ | information/hub: الشروط والأحكام | I-guide | Reading note + contextual next steps; preserve factual/policy body | 273 → 298 | 0 → 0 |
| /en/refund-policy/ | information/hub: Refund & Replacement Policy | I-guide | Reading note + contextual next steps; preserve factual/policy body | 497 → 532 | 0 → 0 |
| /ar/refund-policy/ | information/hub: سياسة الاسترداد والاستبدال | I-guide | Reading note + contextual next steps; preserve factual/policy body | 440 → 462 | 0 → 0 |
| /en/service-guidelines/ | information/hub: Domestic Worker Service Guidelines | G-short | Practical sections + real guide links; accurate purpose | 51 → 211 | 0 → 0 |
| /ar/service-guidelines/ | information/hub: إرشادات خدمات العمالة المنزلية | G-short | Practical sections + real guide links; accurate purpose | 42 → 164 | 0 → 0 |
| /en/support-process/ | information/hub: Service Support Process | G-short | Practical sections + real guide links; accurate purpose | 53 → 221 | 0 → 0 |
| /ar/support-process/ | information/hub: إجراءات دعم الخدمات | G-short | Practical sections + real guide links; accurate purpose | 41 → 163 | 0 → 0 |
| /en/services/live-in-maid/ | service: Live-in Maid Services in UAE for Daily Home Support | S-core | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 942 → 735 | 2 → 0 |
| /ar/services/live-in-maid/ | service: خدمات خادمة مقيمة في الإمارات لدعم المنزل اليومي | S-core | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 816 → 623 | 2 → 0 |
| /en/services/live-out-maid/ | service: Live-out Maid Services in UAE for Scheduled Home Support | S-core | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 989 → 802 | 2 → 0 |
| /ar/services/live-out-maid/ | service: خدمات خادمة غير مقيمة في الإمارات لدعم منزلي مجدول | S-core | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 879 → 702 | 2 → 0 |
| /en/services/housemaid/ | service: Housemaid Services in UAE | S-core | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 1042 → 759 | 28 → 20 |
| /ar/services/housemaid/ | service: خدمات عاملات المنازل في الإمارات | S-core | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 926 → 681 | 13 → 5 |
| /en/services/housekeeping/ | service: Cleaning & Housekeeping Services in UAE | S-core | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 1056 → 766 | 28 → 20 |
| /ar/services/housekeeping/ | service: خدمات التنظيف وترتيب المنزل في الإمارات | S-core | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 936 → 681 | 13 → 5 |
| /en/services/full-time-maid/ | service: Full-time Maid Hiring in UAE for Complete Daily Support | S-core | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 951 → 766 | 2 → 0 |
| /ar/services/full-time-maid/ | service: توظيف خادمة بدوام كامل في الإمارات لدعم يومي متكامل | S-core | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 860 → 681 | 2 → 0 |
| /en/services/part-time-maid/ | service: Part-time Maid Services in UAE for Flexible Home Cleaning | S-core | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 930 → 761 | 2 → 0 |
| /ar/services/part-time-maid/ | service: خدمات خادمة بدوام جزئي في الإمارات لتنظيف مرن | S-core | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 836 → 667 | 2 → 0 |
| /en/services/monthly-maid-contract/ | service: Monthly Maid Contract in UAE for Regular Home Support | S-core | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 862 → 689 | 5 → 2 |
| /ar/services/monthly-maid-contract/ | service: عقد خادمة شهري في الإمارات لدعم منزلي منتظم | S-core | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 773 → 613 | 2 → 0 |
| /en/services/on-demand-domestic-help/ | service: On-demand Domestic Help in UAE | S-core | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 1066 → 772 | 28 → 20 |
| /ar/services/on-demand-domestic-help/ | service: مساعدة منزلية عند الطلب في الإمارات | S-core | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 938 → 685 | 13 → 5 |
| /en/services/nanny/ | service: Nanny Services in UAE for Childcare and Family Routines | S-childcare | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 872 → 691 | 5 → 2 |
| /ar/services/nanny/ | service: خدمات المربيات في الإمارات لرعاية الأطفال وروتين الأسرة | S-childcare | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 808 → 634 | 2 → 0 |
| /en/services/executive-nannies/ | service: Executive Nannies in UAE | S-childcare | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 1030 → 745 | 28 → 20 |
| /ar/services/executive-nannies/ | service: مربيات تنفيذيات في الإمارات | S-childcare | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 912 → 660 | 13 → 5 |
| /en/services/babysitting/ | service: Babysitting Services in UAE for Flexible Childcare | S-childcare | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 951 → 733 | 20 → 16 |
| /ar/services/babysitting/ | service: خدمات جليسات أطفال في الإمارات لرعاية مرنة | S-childcare | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 863 → 653 | 7 → 3 |
| /en/services/newborn-care/ | service: Newborn Care Services in UAE | S-childcare | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 1061 → 769 | 27 → 20 |
| /ar/services/newborn-care/ | service: خدمات رعاية المواليد في الإمارات | S-childcare | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 940 → 675 | 12 → 5 |
| /en/services/home-cooking/ | service: Home Cooking Services in UAE for Family Meals | S-household | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 928 → 740 | 20 → 16 |
| /ar/services/home-cooking/ | service: خدمات الطبخ المنزلي في الإمارات لوجبات الأسرة | S-household | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 834 → 651 | 7 → 3 |
| /en/services/private-chefs/ | service: Private Chefs in UAE | S-household | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 1039 → 757 | 28 → 20 |
| /ar/services/private-chefs/ | service: طهاة خاصون في الإمارات | S-household | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 916 → 668 | 13 → 5 |
| /en/services/personal-chef/ | service: Private Chef and Personal Cook Hiring in UAE | S-household | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 949 → 753 | 20 → 16 |
| /ar/services/personal-chef/ | service: توظيف شيف خاص أو طباخ شخصي في الإمارات | S-household | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 850 → 662 | 7 → 3 |
| /en/services/kitchen-helper/ | service: Kitchen Helper Services in UAE for Home Meal Routines | S-household | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 941 → 741 | 20 → 16 |
| /ar/services/kitchen-helper/ | service: خدمات مساعد المطبخ في الإمارات لروتين الوجبات المنزلية | S-household | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 840 → 653 | 7 → 3 |
| /en/services/house-managers/ | service: House Managers in UAE | S-household | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 1035 → 756 | 28 → 20 |
| /ar/services/house-managers/ | service: مديرو المنازل في الإمارات | S-household | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 910 → 676 | 13 → 5 |
| /en/services/elder-care/ | service: Elder Care Services in UAE for Respectful Home Support | S-care | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 958 → 752 | 20 → 16 |
| /ar/services/elder-care/ | service: خدمات رعاية كبار السن في الإمارات لدعم منزلي محترم | S-care | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 877 → 681 | 7 → 3 |
| /en/services/patient-care/ | service: Patient Care Services at Home in UAE for Daily Support | S-care | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 974 → 755 | 20 → 16 |
| /ar/services/patient-care/ | service: خدمات رعاية المرضى في المنزل في الإمارات للدعم اليومي | S-care | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 889 → 685 | 7 → 3 |
| /en/services/companion-care/ | service: Companion Care Services in UAE for Friendly Home Support | S-care | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 929 → 734 | 20 → 16 |
| /ar/services/companion-care/ | service: خدمات رعاية المرافقة في الإمارات لدعم منزلي ودي | S-care | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 839 → 658 | 7 → 3 |
| /en/services/recruitment/ | service: Domestic Worker Recruitment in UAE with Profile Matching | S-support | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 931 → 720 | 20 → 16 |
| /ar/services/recruitment/ | service: توظيف العمالة المنزلية في الإمارات مع مطابقة الملفات | S-support | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 839 → 650 | 7 → 3 |
| /en/services/maid-visa/ | service: Maid Visa Assistance in UAE with Clear Document Guidance | S-support | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 944 → 739 | 20 → 16 |
| /ar/services/maid-visa/ | service: مساعدة تأشيرة الخادمة في الإمارات مع إرشاد واضح للمستندات | S-support | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 847 → 641 | 7 → 3 |
| /en/services/maid-replacement/ | service: Maid Replacement Services in UAE with Clear Follow-up | S-support | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 916 → 720 | 20 → 16 |
| /ar/services/maid-replacement/ | service: خدمات استبدال الخادمة في الإمارات مع متابعة واضحة | S-support | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 825 → 634 | 7 → 3 |
| /en/services/sponsorship-transfer/ | service: Maid Sponsorship Transfer in UAE with Document Guidance | S-support | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 929 → 721 | 20 → 16 |
| /ar/services/sponsorship-transfer/ | service: نقل كفالة الخادمة في الإمارات مع إرشاد المستندات | S-support | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 832 → 631 | 7 → 3 |
| /en/services/experienced-maid/ | service: Experienced Maid Hiring in UAE for Skilled Household Support | S-support | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 940 → 726 | 20 → 16 |
| /ar/services/experienced-maid/ | service: توظيف خادمة ذات خبرة في الإمارات لدعم منزلي ماهر | S-support | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 868 → 656 | 7 → 3 |
| /en/services/background-verification/ | service: Maid Background Verification Services in UAE for Safer Hiring | S-support | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 916 → 715 | 20 → 16 |
| /ar/services/background-verification/ | service: خدمات التحقق من خلفية الخادمة في الإمارات لاختيار أكثر أماناً | S-support | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 849 → 652 | 7 → 3 |
| /en/services/bespoke-household-management/ | service: Bespoke Household Management in UAE | S-household | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 1043 → 756 | 28 → 20 |
| /ar/services/bespoke-household-management/ | service: إدارة منزلية مخصصة في الإمارات | S-household | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 920 → 674 | 13 → 5 |
| /en/services/floral-styling/ | service: Floral Styling in UAE | S-lifestyle | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 1015 → 729 | 28 → 20 |
| /ar/services/floral-styling/ | service: تنسيق الزهور في الإمارات | S-lifestyle | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 890 → 638 | 13 → 5 |
| /en/services/relocation-support/ | service: Relocation Support in UAE | S-lifestyle | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 1017 → 747 | 28 → 20 |
| /ar/services/relocation-support/ | service: دعم الانتقال في الإمارات | S-lifestyle | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 894 → 656 | 13 → 5 |
| /en/services/pet-care-specialists/ | service: Pet Care Specialists in UAE | S-lifestyle | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 1029 → 751 | 28 → 20 |
| /ar/services/pet-care-specialists/ | service: متخصصو رعاية الحيوانات الأليفة في الإمارات | S-lifestyle | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 910 → 667 | 13 → 5 |
| /en/services/event-staffing/ | service: Event Staffing in UAE | S-lifestyle | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 1015 → 755 | 28 → 20 |
| /ar/services/event-staffing/ | service: طاقم للمناسبات في الإمارات | S-lifestyle | Clarify scope; replace generic guide/FAQ; relevant role comparisons | 890 → 651 | 13 → 5 |
| /en/maid-source-countries/philippines-maid-uae/ | country: Filipino Maid in UAE | C-profile | Individual criteria, not nationality skills; shared process hub | 318 → 287 | 3 → 2 |
| /ar/maid-source-countries/philippines-maid-uae/ | country: خادمة فلبينية في الإمارات | C-profile | Individual criteria, not nationality skills; shared process hub | 296 → 260 | 3 → 2 |
| /en/maid-source-countries/sri-lankan-maid-uae/ | country: Sri Lankan Maid in UAE | C-profile | Individual criteria, not nationality skills; shared process hub | 311 → 284 | 3 → 2 |
| /ar/maid-source-countries/sri-lankan-maid-uae/ | country: خادمة سريلانكية في الإمارات | C-profile | Individual criteria, not nationality skills; shared process hub | 282 → 246 | 3 → 2 |
| /en/maid-source-countries/nepali-maid-uae/ | country: Nepali Maid in UAE | C-profile | Individual criteria, not nationality skills; shared process hub | 301 → 278 | 3 → 2 |
| /ar/maid-source-countries/nepali-maid-uae/ | country: خادمة نيبالية في الإمارات | C-profile | Individual criteria, not nationality skills; shared process hub | 270 → 240 | 3 → 2 |
| /en/maid-source-countries/indian-maid-uae/ | country: Indian Maid in UAE | C-profile | Individual criteria, not nationality skills; shared process hub | 311 → 288 | 3 → 2 |
| /ar/maid-source-countries/indian-maid-uae/ | country: خادمة هندية في الإمارات | C-profile | Individual criteria, not nationality skills; shared process hub | 277 → 251 | 3 → 2 |
| /en/maid-source-countries/bangladeshi-maid-uae/ | country: Bangladeshi Maid in UAE | C-profile | Individual criteria, not nationality skills; shared process hub | 288 → 279 | 3 → 2 |
| /ar/maid-source-countries/bangladeshi-maid-uae/ | country: خادمة بنغلاديشية في الإمارات | C-profile | Individual criteria, not nationality skills; shared process hub | 265 → 248 | 3 → 2 |
| /en/maid-source-countries/ethiopian-maid-uae/ | country: Ethiopian Maid in UAE | C-profile | Individual criteria, not nationality skills; shared process hub | 291 → 268 | 3 → 2 |
| /ar/maid-source-countries/ethiopian-maid-uae/ | country: خادمة إثيوبية في الإمارات | C-profile | Individual criteria, not nationality skills; shared process hub | 265 → 233 | 3 → 2 |
| /en/maid-source-countries/kenyan-maid-uae/ | country: Kenyan Maid in UAE | C-profile | Individual criteria, not nationality skills; shared process hub | 294 → 274 | 3 → 2 |
| /ar/maid-source-countries/kenyan-maid-uae/ | country: خادمة كينية في الإمارات | C-profile | Individual criteria, not nationality skills; shared process hub | 282 → 249 | 3 → 2 |
| /en/maid-source-countries/ugandan-maid-uae/ | country: Ugandan Maid in UAE | C-profile | Individual criteria, not nationality skills; shared process hub | 289 → 272 | 3 → 2 |
| /ar/maid-source-countries/ugandan-maid-uae/ | country: خادمة أوغندية في الإمارات | C-profile | Individual criteria, not nationality skills; shared process hub | 275 → 250 | 3 → 2 |
| /en/maid-source-countries/ghanaian-maid-uae/ | country: Ghanaian Maid in UAE | C-profile | Individual criteria, not nationality skills; shared process hub | 296 → 277 | 3 → 2 |
| /ar/maid-source-countries/ghanaian-maid-uae/ | country: خادمة غانية في الإمارات | C-profile | Individual criteria, not nationality skills; shared process hub | 267 → 239 | 3 → 2 |
| /en/maid-source-countries/sierra-leone-maid-uae/ | country: Sierra Leone Maid in UAE | C-profile | Individual criteria, not nationality skills; shared process hub | 289 → 286 | 3 → 2 |
| /ar/maid-source-countries/sierra-leone-maid-uae/ | country: خادمة من سيراليون في الإمارات | C-profile | Individual criteria, not nationality skills; shared process hub | 268 → 249 | 3 → 2 |
| /en/maid-source-countries/indonesian-maid-uae/ | country: Indonesian Maid in UAE | C-profile | Individual criteria, not nationality skills; shared process hub | 304 → 286 | 3 → 2 |
| /ar/maid-source-countries/indonesian-maid-uae/ | country: خادمة إندونيسية في الإمارات | C-profile | Individual criteria, not nationality skills; shared process hub | 274 → 249 | 3 → 2 |
| /en/maid-source-countries/myanmar-maid-uae/ | country: Myanmar Maid in UAE | C-profile | Individual criteria, not nationality skills; shared process hub | 288 → 277 | 3 → 2 |
| /ar/maid-source-countries/myanmar-maid-uae/ | country: خادمة من ميانمار في الإمارات | C-profile | Individual criteria, not nationality skills; shared process hub | 265 → 244 | 3 → 2 |
| /en/maid-services-ajman/ | location: Maid Services in Ajman | L-area | Enquiry context; remove repeated needs/city lists; qualify availability | 383 → 349 | 1 → 2 |
| /ar/maid-services-ajman/ | location: خدمات خادمات في عجمان | L-area | Enquiry context; remove repeated needs/city lists; qualify availability | 318 → 282 | 1 → 2 |
| /en/maid-services-dubai/ | location: Maid Services in Dubai | L-area | Enquiry context; remove repeated needs/city lists; qualify availability | 368 → 343 | 1 → 2 |
| /ar/maid-services-dubai/ | location: خدمات خادمات في دبي | L-area | Enquiry context; remove repeated needs/city lists; qualify availability | 314 → 280 | 1 → 2 |
| /en/maid-services-sharjah/ | location: Maid Services in Sharjah | L-area | Enquiry context; remove repeated needs/city lists; qualify availability | 345 → 319 | 1 → 2 |
| /ar/maid-services-sharjah/ | location: خدمات خادمات في الشارقة | L-area | Enquiry context; remove repeated needs/city lists; qualify availability | 298 → 267 | 1 → 2 |
| /en/maid-services-abu-dhabi/ | location: Maid Services in Abu Dhabi | L-area | Enquiry context; remove repeated needs/city lists; qualify availability | 355 → 341 | 1 → 2 |
| /ar/maid-services-abu-dhabi/ | location: خدمات خادمات في أبوظبي | L-area | Enquiry context; remove repeated needs/city lists; qualify availability | 295 → 273 | 1 → 2 |
| /en/maid-services-ras-al-khaimah/ | location: Maid Services in Ras Al Khaimah | L-area | Enquiry context; remove repeated needs/city lists; qualify availability | 343 → 336 | 1 → 2 |
| /ar/maid-services-ras-al-khaimah/ | location: خدمات خادمات في رأس الخيمة | L-area | Enquiry context; remove repeated needs/city lists; qualify availability | 280 → 265 | 1 → 2 |
| /en/maid-services-fujairah/ | location: Maid Services in Fujairah | L-area | Enquiry context; remove repeated needs/city lists; qualify availability | 330 → 315 | 1 → 2 |
| /ar/maid-services-fujairah/ | location: خدمات خادمات في الفجيرة | L-area | Enquiry context; remove repeated needs/city lists; qualify availability | 283 → 260 | 1 → 2 |
| /en/maid-services-umm-al-quwain/ | location: Maid Services in Umm Al Quwain | L-area | Enquiry context; remove repeated needs/city lists; qualify availability | 345 → 335 | 1 → 2 |
| /ar/maid-services-umm-al-quwain/ | location: خدمات خادمات في أم القيوين | L-area | Enquiry context; remove repeated needs/city lists; qualify availability | 289 → 271 | 1 → 2 |

## Commands and complete final test totals

- git branch --show-current; git status --porcelain=v1; git rev-parse HEAD seo/phase-01-critical-foundation main: initial gates PASS; Phase 2 branch checked again before checkpoint.
- git switch -c seo/phase-03-content-architecture: PASS.
- npm run lint: PASS, exit 0.
- npx tsc --noEmit --incremental false: PASS, exit 0, no incremental cache generated.
- npm run build: PASS, final normal production build, 145 framework outputs including 140 localized indexable routes.
- PowerShell: $env:NEXT_PUBLIC_STATIC_EXPORT='true'; npm run build; Remove-Item Env:NEXT_PUBLIC_STATIC_EXPORT: PASS, final static/cPanel-compatible export. Expected framework warning: middleware/API runtime does not execute on static hosts; no API route was added.
- node scripts/seo-content-audit.mjs .next/seo-phase03-baseline.json: baseline captured before editing. node scripts/seo-content-audit.mjs .next/seo-phase03-after.json: final metrics and graph above.
- npx tsc lib/json-ld.ts lib/structured-data.ts lib/image-alt.ts lib/content-architecture.ts lib/guide-content.ts --outDir .next/phase-02-unit --rootDir . --module commonjs --target es2020 --esModuleInterop --skipLibCheck: PASS.
- node --test tests/seo-phase02-unit.test.cjs tests/seo-phase03-unit.test.cjs: 10 PASS, zero failed/skipped (five existing + five new), 0.36s.
- node --test tests/seo-export.test.mjs tests/seo-phase02-export.test.mjs tests/seo-phase03-export.test.mjs: four PASS, zero failed/skipped (three existing + one new), final 2.47s.
- npm run start -- --port 3193: local production browser-test server; stopped after validation.
- PowerShell: $env:PLAYWRIGHT_PORT='3193'; npx playwright test tests/e2e/seo-phase03.spec.ts --output .next/phase03-focused-final-results: 20 PASS, zero failed/skipped, 27.3s (10 cases × desktop/mobile).
- PowerShell: $env:PLAYWRIGHT_PORT='3193'; npx playwright test --output .next/phase03-full-results: 146 total, 140 PASS, six known unrelated FAIL, zero skipped/excluded, 3.3m, exit 1. Includes all 20 Phase 3 cases passing again. Final command totals are reported per run; the separate focused run repeats those 20 cases rather than adding new distinct cases.
- git diff --check and git diff --cached --check: checked before checkpoint.

Export validation covers all 140 EN/AR routes: exact prior metadata, unique titles/descriptions/primary H1, no heading jumps, OG/Twitter, sitemap/canonical/hreflang reciprocity, stable schema IDs/URLs and safe JSON-LD, unchanged displayed-price tokens, valid localized links, breadcrumb/schema agreement and exact revised visible FAQ/schema agreement for all 100 dynamic pages. Schema coverage remains Organization/LocalBusiness/WebSite/WebPage 140 each, Service 76, BreadcrumbList 138, FAQPage 112. Existing interactive FAQ category tests remain unchanged and run in both projects.

The first focused attempt was interrupted after the existing global popup intercepted FAQ clicks on internal pages. New Phase 3 cases explicitly verify and dismiss it via its visible close button before continuing, as a user would. No force-click, CSS hiding, injected storage, popup disablement or assertion weakening was used. Each FAQ is opened and the visible answer checked. Protected existing carousel/offer tests remain untouched.

## Known unrelated failures, exclusions and unresolved items

The unfiltered suite reproduces exactly the three pre-existing homepage carousel interaction failures in each project (six total), tests/e2e/home.spec.ts:61, :92 and :117: hover/focus autoplay, controls/dots/loop and reduced-motion next button. Existing Sierra Leone offer backdrop/modal intercepts pointer hover/click actions and causes timeouts, matching Phase 1/2. All protected offer tests pass; no existing test was changed and no failure was filtered. The full suite is NOT green; Phase 3 checks are green with these explicitly documented unrelated exceptions. Failure screenshots/videos/context remain ignored local artifacts under .next/phase03-full-results.

No route rename/delete/redirect, factual-price edit, image replacement, new article/testimonial/rating, invented timeline/availability/licence/approval or regulatory claim was introduced. Phase 2 schema exclusions remain intentional. No external Rich Results certification, search-ranking guarantee, independent business/legal verification or deployment is claimed.

Hosting/cPanel/Apache/ModSecurity/CDN WAF checks remain unresolved as in Phase 1/2; logs, effective server rules and deployed responses require server access. No Googlebot block is claimed and no production crawl/probe occurred.

## Exact changed-file inventory

22 files: 11 existing changed and 11 new including this report. No previous report/test, metadata/schema helper, robots/sitemap, dependency/deployment config, asset or protected popup/carousel source/test changed.

- C:/Projects/inaya-domestic-web/app/[locale]/[locationSlug]/page.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/blog/page.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/maid-source-countries/[slug]/page.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/service-guidelines/page.tsx
- C:/Projects/inaya-domestic-web/app/[locale]/support-process/page.tsx
- C:/Projects/inaya-domestic-web/components/GuideContent.tsx
- C:/Projects/inaya-domestic-web/components/RouteSeo.tsx
- C:/Projects/inaya-domestic-web/components/ServiceDetailTemplate.tsx
- C:/Projects/inaya-domestic-web/components/ServiceSeoBlock.tsx
- C:/Projects/inaya-domestic-web/docs/seo-phase-03-validation.md
- C:/Projects/inaya-domestic-web/lib/content-architecture.ts
- C:/Projects/inaya-domestic-web/lib/country-source-pages.ts
- C:/Projects/inaya-domestic-web/lib/guide-content.ts
- C:/Projects/inaya-domestic-web/lib/location-service-pages.ts
- C:/Projects/inaya-domestic-web/lib/profile-content-briefs.ts
- C:/Projects/inaya-domestic-web/lib/service-content-briefs.ts
- C:/Projects/inaya-domestic-web/lib/service-page-copy-all.ts
- C:/Projects/inaya-domestic-web/scripts/seo-content-audit.mjs
- C:/Projects/inaya-domestic-web/tests/e2e/seo-phase03.spec.ts
- C:/Projects/inaya-domestic-web/tests/fixtures/seo-phase03-baseline.json
- C:/Projects/inaya-domestic-web/tests/seo-phase03-export.test.mjs
- C:/Projects/inaya-domestic-web/tests/seo-phase03-unit.test.cjs

## Local checkpoint

Message: feat(seo): strengthen content and page architecture.

Final SHA/clean Git status are reported after committing. Phases 1/2 and main remain at their validated SHAs. Only this Phase 3 inventory is included; all work is local, with no remote or production operation.
