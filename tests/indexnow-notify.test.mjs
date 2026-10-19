import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { endpoint, host, key, maxUrls, meaningfulContent, notify, origin, pageUrl, payloadFor,
  selectUrls, submitUrls } from '../.github/scripts/indexnow-notify.mjs';
import { selectFiles, snapshot } from '../.github/scripts/cpanel-incremental.mjs';

// Fixture deployments and deliberate errors must not write real CI summaries
// or step outputs. These environment changes are confined to this test process.
delete process.env.GITHUB_STEP_SUMMARY;
delete process.env.GITHUB_OUTPUT;

function html(route, content = 'Home cleaning', extra = '') {
  return `<!doctype html><html><head><link rel="canonical" href="${origin}/${route}/">` +
    `<meta name="description" content="Book a service"><title>INAYA</title>${extra}</head>` +
    `<body><main><h1>${content}</h1><a href="/en/contact/">Contact</a></main></body></html>`;
}

async function fixture(t, old, uploaded) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'inaya-indexnow-'));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const baseline = path.join(root, 'baseline');
  const staging = path.join(root, 'uploaded');
  await fs.mkdir(path.join(baseline, 'export'), { recursive: true });
  await fs.mkdir(staging);
  for (const [directory, files] of [[path.join(baseline, 'export'), old], [staging, uploaded]]) {
    for (const [relative, body] of Object.entries(files)) {
      await fs.mkdir(path.dirname(path.join(directory, relative)), { recursive: true });
      await fs.writeFile(path.join(directory, relative), body);
    }
  }
  await fs.writeFile(path.join(baseline, 'baseline.json'), JSON.stringify({ version: 1, files: Object.keys(old).sort() }));
  return { root, baseline, staging };
}

test('selects only changed/new public uploaded EN/AR pages and never source-only removals', async t => {
  const old = {
    'en/index.html': html('en'),
    'en/services/removed/index.html': html('en/services/removed'),
    'en/services/monthly-maid/index.html': html('en/services/monthly-maid', 'Old package'),
  };
  const uploaded = {
    'en/index.html': html('en', 'Home cleaning', '<script src="/_next/static/new-hash.js"></script>'),
    'en/services/monthly-maid/index.html': html('en/services/monthly-maid', 'Updated package'),
    'ar/services/monthly-maid/index.html': html('ar/services/monthly-maid', 'خادمة شهرية'),
    'index.html': '<html>Redirecting</html>',
    '404.html': '<html>Not found</html>',
    'en/private/index.html': html('en/private', 'Private', '<meta name="robots" content="noindex, follow">'),
    '_next/static/asset.js': 'build asset',
  };
  const { staging, baseline } = await fixture(t, old, uploaded);
  assert.deepEqual(await selectUrls(staging, baseline), {
    urls: [`${origin}/ar/services/monthly-maid/`, `${origin}/en/services/monthly-maid/`],
    unchangedContent: 1, excludedHtml: 3,
  });
});

test('uses the actual cPanel helper baseline and uploaded staging format', async t => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'inaya-indexnow-integration-'));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const source = path.join(root, 'out');
  const baseline = path.join(root, 'inaya-ftp-restored-baseline');
  const staging = path.join(root, 'inaya-ftp-selected');
  await fs.mkdir(path.join(source, 'en'), { recursive: true });
  await fs.writeFile(path.join(source, 'en/index.html'), html('en'));
  await snapshot(source, baseline);
  await fs.writeFile(path.join(source, 'en/index.html'), html('en', 'Updated services'));
  await fs.mkdir(path.join(source, 'ar'));
  await fs.writeFile(path.join(source, 'ar/index.html'), html('ar', 'الخدمات'));
  const deployment = await selectFiles(source, baseline, staging, true);
  assert.equal(deployment.selected_files, 2);
  assert.deepEqual((await selectUrls(staging, baseline)).urls, [`${origin}/ar/`, `${origin}/en/`]);
});

test('requires an exact self-canonical public route and respects noindex', () => {
  assert.equal(pageUrl('en/index.html', html('en')), `${origin}/en/`);
  assert.equal(pageUrl('en/about/index.html', html('en/other')), null);
  assert.equal(pageUrl('en/about/index.html', html('en/about').replace(origin, 'https://other.example')), null);
  assert.equal(pageUrl('en/../admin/index.html', html('admin')), null);
  assert.equal(pageUrl('_not-found/index.html', html('_not-found')), null);
  assert.equal(pageUrl('ar/private/index.html', html('ar/private', 'x', '<meta name="bingbot" content="none">')), null);
});

test('build-only changes are ignored but text, metadata, links and structured data count', () => {
  const base = html('en', 'Cleaning', '<style>.old{color:red}</style><script>self.__next_f.push(["build-1"])</script>');
  const build = base.replace('color:red', 'color:blue').replace('build-1', 'build-2').replace('<main>', '<main class="new-class">');
  assert.equal(meaningfulContent(base), meaningfulContent(build));
  for (const changed of [base.replace('Cleaning', 'Babysitting'),
    base.replace('Book a service', 'Monthly maid service'), base.replace('/en/contact/', '/en/pricing/'),
    base.replace('</head>', '<script type="application/ld+json">{"name":"INAYA"}</script></head>')]) {
    assert.notEqual(meaningfulContent(base), meaningfulContent(changed));
  }
});

test('rejects broken baseline rather than declaring all pages new', async t => {
  const { staging, baseline } = await fixture(t, { 'en/index.html': html('en') }, { 'en/index.html': html('en', 'Changed') });
  await fs.unlink(path.join(baseline, 'export/en/index.html'));
  await assert.rejects(selectUrls(staging, baseline), /ENOENT/);
  await fs.writeFile(path.join(baseline, 'baseline.json'), JSON.stringify({ version: 2, files: [] }));
  await assert.rejects(selectUrls(staging, baseline), /verified deployment baseline/);
});

test('payload stays on the verified public host and is bounded', async () => {
  const urls = [`${origin}/en/`, `${origin}/ar/`];
  assert.deepEqual(payloadFor(urls), { host, key, keyLocation: `${origin}/${key}.txt`, urlList: urls });
  for (const invalid of [[], Array(maxUrls + 1).fill(urls[0]), [urls[0], urls[0]],
    ['https://other.example/en/'], [`${origin}/en/?preview=1`], [`${origin}/en/#section`], [`${origin}/_next/static/a.js`]]) {
    assert.throws(() => payloadFor(invalid));
  }
  assert.match(key, /^[a-zA-Z0-9-]{8,128}$/);
  assert.equal((await fs.readFile(new URL(`../public/${key}.txt`, import.meta.url), 'utf8')).trim(), key);
});

test('verifies live key before one POST, distinguishes pending validation and skips unchanged runs', async () => {
  const calls = [];
  const fetcher = async (url, options) => {
    calls.push({ url, options });
    return calls.length === 1 ? { status: 200, text: async () => key } : { status: 202 };
  };
  assert.deepEqual(await submitUrls([`${origin}/en/`], fetcher), {
    status: 'received_pending_key_validation', httpStatus: 202, count: 1,
  });
  assert.equal(calls.length, 2);
  assert.equal(calls[0].url, `${origin}/${key}.txt`);
  assert.equal(calls[1].url, endpoint);
  assert.equal(calls[1].options.method, 'POST');
  assert.deepEqual(JSON.parse(calls[1].options.body).urlList, [`${origin}/en/`]);
  assert.equal((await submitUrls([], () => { throw new Error('must not request'); })).status, 'skipped');
});

test('does not submit with a missing/mismatched public key or retry an unsuccessful POST', async () => {
  let count = 0;
  await assert.rejects(submitUrls([`${origin}/en/`], async () => {
    count++; return { status: 200, text: async () => 'wrong-key' };
  }), /key is not available or does not match/);
  assert.equal(count, 1);
  count = 0;
  await assert.rejects(submitUrls([`${origin}/en/`], async () => {
    count++; return count === 1 ? { status: 200, text: async () => key } : { status: 429 };
  }), /HTTP 429/);
  assert.equal(count, 2);
});

test('saves failed URL list for review without claiming receipt', async t => {
  const warnings = [];
  t.mock.method(console, 'warn', message => warnings.push(message));
  const { root, staging, baseline } = await fixture(t,
    { 'en/index.html': html('en') }, { 'en/index.html': html('en', 'Updated information') });
  const resultFile = path.join(root, 'result.json');
  await assert.rejects(notify(staging, baseline, resultFile, async () => { throw new Error('Network unavailable'); }), /Network unavailable/);
  const result = JSON.parse(await fs.readFile(resultFile, 'utf8'));
  assert.equal(result.status, 'failed');
  assert.deepEqual(result.urls, [`${origin}/en/`]);
  assert.equal(result.httpStatus, undefined);
  assert.equal(warnings.length, 1);
  assert.match(warnings[0], /Site deployment remains successful/);
});
