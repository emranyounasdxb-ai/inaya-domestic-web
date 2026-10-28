# Country-page image preview correction — 28 October 2026

The supplied screenshot is the Search Console Insights **Your content** card. It
does not establish which image appears in a public Google search result.

## Current production evidence

The bounded public HTTP audit started from `e43ae79` and checked `/`, `/en/`,
`/ar/`, and the Arabic Nepal and Uganda guides. The root redirected to `/en/`;
all final responses were 200. Home already advertised its visible 1672×941 hero
through Open Graph, Twitter and `primaryImageOfPage`, with image sitemap coverage.
The country guides advertised a shared service photo through social metadata,
but their visible content contained only a small flag and the header/footer
logos. They had no page-primary image or image-sitemap entry.

All 21 image URLs sampled in that audit returned valid image responses without
an `X-Robots-Tag` restriction. Robots allowed public content and pages permitted
large image previews. A single BeyondSEO HTTP scrape of the Arabic Nepal guide
also succeeded with robots respected and the one-page cap retained.

The live metadata therefore does **not** support a claim that Home still uses a
logo as its preferred image. A stale Google selection is possible but remains
unverified; no authenticated indexed-page or last-crawl data was inspected.

## Change

- Add a visible, captioned illustration to the 12 country guides and the country
  overview in both languages: 26 canonical URLs.
- Reuse the six existing country portraits where an approved matching guide
  asset exists; use the existing domestic-service scene elsewhere. Descriptions
  describe visible scenes rather than asserting nationality or availability.
- Match each page's Open Graph/Twitter image, primary-image schema and image
  sitemap to its actual visible photo. Preserve canonical image filenames.
- Date only those 26 substantively changed pages to 28 October in the sitemap.

The export retains 274 canonical pages and 111 unchanged original photos. It
now describes 226 visible primary images; 48 other text/index pages retain
social-only preview hints. The image sitemap covers 228 pictured pages. Existing
Home/other primary-image assignments, metadata, favicons and protected hero
markup remain covered by the prior regression fingerprints.

## Validation

- Node 22.23.4, Next.js 16.4.2: TypeScript and the production static export pass.
- The local shared-dependency junction cannot be resolved by Turbopack's workspace
  boundary, so the local export used the supported `--webpack` compiler. No
  production build configuration changed; PR CI uses its normal build.
- ESLint: zero errors; the existing `SiteImageGallery.tsx` image-element warning
  remains outside this change.
- Image/sitemap, canonical metadata, historical route/schema and protected UI
  checks: 24 passed.
- Desktop/mobile English/Arabic country images, layout and technical SEO checks
  against the export: 54 passed. The local Python server does not emulate
  Apache's RSC-prefetch rewrites; it is not a hosting-equivalence test.

## Release and Google processing

This branch is not a production deployment. After owner release approval, merge
only the reviewed head after required CI passes, then verify the actual existing
incremental cPanel deployment and the live affected pages. Do not manually resend
unchanged indexing notifications.

[Google's image guidance](https://developers.google.com/search/docs/appearance/google-images)
supports visible HTML images, representative image metadata and image sitemaps.
Its preview selection is automated: this change supplies better candidates,
not a guarantee that every Insights row or search result will display a photo,
and no refresh deadline is established.
