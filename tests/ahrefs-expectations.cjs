const assert = require('node:assert/strict');
const { createHash } = require('node:crypto');

const src = 'https://analytics.ahrefs.com/analytics.js';
const dataKey = '2EXv77rohxGm3Dfl3xH7Gw';
const privacyUrls = ['en', 'ar'].map(locale => `https://inayadomestic.ae/${locale}/privacy-policy/`);
const head = `      <head>\n        <script src="${src}" data-key="${dataKey}" async />\n      </head>\n`;
const browserImport = "import { expect, test, type Page } from '../browser-fixture';\n";
const oldImport = "import { expect, test, type Page } from '@playwright/test';\n";
const baselineHashes = {
  'app/[locale]/layout.tsx': '3ce18a3f58080b658703903013ac3aa3be4e6dc68563442616c3d912ceed1ddd',
  'tests/e2e/home.spec.ts': '038505c42d34853e3bf165839d346b7c5272ea4b75aa8c1ca715458b0d0eea84'
};

function beforeAhrefsSource(file, current) {
  current = require('./page-clarity-expectations.cjs').historicalSource(file, current);
  current = current.replace(/\r\n/g, '\n');
  if (file === 'app/[locale]/layout.tsx') {
    assert.equal(current.split(src).length, 2, 'exactly one owner-approved Ahrefs source');
    assert.equal(current.split(dataKey).length, 2, 'exactly one owner-approved Ahrefs project key');
    assert.equal(current.split(head).length, 2, 'one exact native async head insertion');
    current = current.replace(head, '');
  } else if (file === 'tests/e2e/home.spec.ts') {
    assert.ok(current.startsWith(browserImport), 'only the exact shared browser-fixture import changes');
    assert.equal(current.split(browserImport).length, 2, 'one browser-fixture import');
    current = current.replace(browserImport, oldImport);
  } else return current;
  assert.equal(createHash('sha256').update(current).digest('hex'), baselineHashes[file], `${file}: all pre-Ahrefs09432 source bytes and assertions remain exact`);
  return current;
}

module.exports = { src, dataKey, privacyUrls, beforeAhrefsSource };
