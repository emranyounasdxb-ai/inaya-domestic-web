const assert = require('node:assert/strict');
const path = require('node:path');
const test = require('node:test');
const baseline = require('./fixtures/blog-guide-order-20261028.json');
const additions = require('./four-guides-addition-expectations.cjs');
const compiledRoot = process.env.INAYA_TEST_COMPILED_ROOT || path.resolve(__dirname, '../.next/phase-02-unit');
const { BLOG_PAGE_SIZE, blogPageCount, blogArchiveRoutes, blogPageRoute, getBlogPage, getBlogPageNumber } = require(path.join(compiledRoot, 'lib/blog-pagination.js'));

test('six archive pages partition all69 guides once, preserving the original65 relative order after the four new guides', () => {
  assert.equal(BLOG_PAGE_SIZE, 12);
  assert.equal(blogPageCount, 6);
  assert.equal(baseline.slugs.length, 65);
  const pages = Array.from({ length: 6 }, (_, index) => getBlogPage(index + 1));
  assert.deepEqual(pages.map(page => page.guides.length), [12, 12, 12, 12, 12, 10]);
  const slugs = pages.flatMap(page => page.guides.map(guide => guide.slug));
  assert.deepEqual(slugs, additions.blogOrderSlugs);
  assert.deepEqual(slugs.filter(slug => !additions.newSlugs.includes(slug)), baseline.slugs, 'every original guide keeps its established relative position');
  assert.equal(new Set(slugs).size, 70);
  assert.deepEqual(pages.map(page => [page.first, page.last]), [[1, 12], [13, 24], [25, 36], [37, 48], [49, 60], [61, 70]]);
  assert.ok(pages.every(page => page.total === 70 && page.count === 6));
});

test('page1 keeps the original URL and only pages2through6 gain canonical archive paths', () => {
  assert.equal(blogPageRoute(1), 'blog');
  assert.deepEqual(blogArchiveRoutes, ['blog/page/2', 'blog/page/3', 'blog/page/4', 'blog/page/5', 'blog/page/6']);
  assert.equal(getBlogPageNumber('blog'), 1);
  for (let page = 2; page <= 6; page++) assert.equal(getBlogPageNumber(blogPageRoute(page)), page);
  for (const route of ['blog/page/1', 'blog/page/0', 'blog/page/02', 'blog/page/7', 'blog/page/-1', 'blog/page/2.5', 'blog/page/2/more', 'blog/some-article']) {
    assert.equal(getBlogPageNumber(route), undefined, route);
  }
  for (const page of [0, -1, 1.5, 7, NaN, Infinity]) assert.equal(getBlogPage(page), undefined);
});
