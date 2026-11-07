const assert = require('node:assert/strict');
const { createHash } = require('node:crypto');
const sourcePin = require('./fixtures/november-sitemap-source-20261107.json');
const origin = 'https://inayadomestic.ae';

// Independently enumerated from a996fd8 (citation repairs), 4683756/018c29a
// (rendered copy/navigation) and the eight verified background-guidance cards.
// Unchanged English translations of two Arabic-only citation fixes stay undated here.
const pairs = {
  '2026-11-04': [
    'terms', 'refund-policy', 'service-guidelines',
    'blog/domestic-worker-hiring-costs-uae', 'blog/agreeing-domestic-worker-household-duties',
    'blog/domestic-worker-leave-travel-planning', 'blog/four-hour-eight-hour-maid-visit-plan',
    'blog/maid-visit-frequency-planner', 'blog/new-maid-first-week-checklist',
    'blog/maid-home-access-keys-privacy', 'blog/maid-help-family-guests-gathering',
    'blog/maid-duties-family-holiday', 'blog/one-maid-two-helpers-workload',
    'blog/maid-daily-instructions-handover-template'
  ],
  '2026-11-05': [
    '', 'services/live-out-maid', 'services/part-time-maid', 'services/monthly-maid-contract',
    'services/full-time-maid', 'maid-services-ajman', 'maid-services-dubai', 'maid-services-sharjah'
  ],
  '2026-11-07': ['services', 'services/recruitment', 'services/maid-visa', 'services/experienced-maid', 'services/executive-nannies']
};
const lastmods = Object.fromEntries(Object.entries(pairs).flatMap(([date, routes]) =>
  routes.flatMap(route => ['en', 'ar'].map(locale => [`${origin}/${locale}/${route ? route + '/' : ''}`, date]))));
for (const route of ['choosing-domestic-worker-agency-ajman', 'domestic-worker-hiring-stages-timelines']) {
  lastmods[`${origin}/ar/blog/${route}/`] = '2026-11-04';
}
assert.equal(Object.keys(lastmods).length, 56, 'exactly 30 citation, 16 copy/navigation, eight guidance-card and two executive-matching URLs');
function dateForUrl(url, previous) { return lastmods[url] ?? previous; }
function unchangedUrl(url) { return !Object.hasOwn(lastmods, url); }
function assertRecentLastmods(entries) {
  for (const date of Object.keys(pairs)) {
    assert.deepEqual(entries.filter(entry => entry.lastmod === date).map(entry => entry.url).sort(),
      Object.keys(lastmods).filter(url => lastmods[url] === date).sort(), `${date}: exact affected locale/URL scope`);
  }
}
function historicalSitemap(source) {
  source = require('./november-clarity-expectations.cjs').historicalSource('app/sitemap.ts', source);
  source = source.replace(/\r\n/g, '\n');
  const sha = value => createHash('sha256').update(value).digest('hex');
  if (!source.includes('const recentContentUpdatedAt:')) return source;
  assert.equal(sha(source), sourcePin.afterSha256, 'exact reviewed November sitemap source changes');
  for (const { before, after } of sourcePin.changes) {
    assert.equal(source.split(after).length, 2, 'each reviewed sitemap source edit occurs once');
    source = source.replace(after, before);
  }
  assert.equal(sha(source), sourcePin.beforeSha256, 'all prior sitemap source remains protected');
  return source;
}
module.exports = { lastmods, dateForUrl, unchangedUrl, assertRecentLastmods, historicalSitemap };
