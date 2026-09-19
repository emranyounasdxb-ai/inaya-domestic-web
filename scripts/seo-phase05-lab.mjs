import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { chromium, devices } from '@playwright/test';

const base = process.env.PLAYWRIGHT_BASE_URL || 'http://127.0.0.1:3195';
if (!/^http:\/\/(127\.0\.0\.1|localhost):\d+$/.test(base)) throw new Error('Local production server only');
const browser = await chromium.launch();
const results = [];
try {
  for (const device of ['desktop', 'mobile']) for (const locale of ['en', 'ar']) for (const route of ['', 'services/live-in-maid/', 'maid-services-ajman/', 'service-guidelines/', 'contact/']) {
    const context = await browser.newContext(device === 'mobile' ? devices['Pixel 5'] : { viewport: { width: 1440, height: 900 } });
    const page = await context.newPage();
    const failed = [];
    page.on('requestfailed', (request) => failed.push({ url: request.url().split('?')[0], error: request.failure()?.errorText }));
    await page.addInitScript(() => {
      window.phase05Lab = { lcp: null, lcpElement: null, cls: 0, longestTask: 0, blockingTime: 0 };
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          window.phase05Lab.lcp = entry.startTime;
          window.phase05Lab.lcpElement = entry.element?.tagName || null;
        }
      }).observe({ type: 'largest-contentful-paint', buffered: true });
      let start = 0, last = 0, sum = 0;
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.hadRecentInput) continue;
          if (entry.startTime - last > 1000 || entry.startTime - start > 5000) { start = entry.startTime; sum = 0; }
          sum += entry.value; last = entry.startTime;
          window.phase05Lab.cls = Math.max(window.phase05Lab.cls, sum);
        }
      }).observe({ type: 'layout-shift', buffered: true });
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          window.phase05Lab.longestTask = Math.max(window.phase05Lab.longestTask, entry.duration);
          window.phase05Lab.blockingTime += Math.max(0, entry.duration - 50);
        }
      }).observe({ type: 'longtask', buffered: true });
    });
    const response = await page.goto(`${base}/${locale}/${route}`, { waitUntil: 'load' });
    assert.equal(response?.status(), 200);
    await page.waitForTimeout(5000);
    const measurements = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0];
      return { ...window.phase05Lab, fcp: performance.getEntriesByName('first-contentful-paint')[0]?.startTime ?? null,
        ttfb: navigation.responseStart, domContentLoaded: navigation.domContentLoadedEventEnd,
        resourceCount: performance.getEntriesByType('resource').length,
        localTransferredBytes: performance.getEntriesByType('resource').filter((r) => r.name.startsWith(location.origin)).reduce((sum, r) => sum + r.transferSize, 0) };
    });
    results.push({ device, locale, route: `/${locale}/${route}`, ...measurements, failedRequests: failed });
    console.log(JSON.stringify(results.at(-1)));
    await context.close();
  }
} finally { await browser.close(); }
await mkdir('.next', { recursive: true });
await writeFile('.next/seo-phase05-lab.json', JSON.stringify({ method: 'Fresh browser contexts; local normal production build; unthrottled; five seconds after load; one initial-load sample each; no user interactions; not Lighthouse, field CWV, INP or standard Lighthouse TBT', results }, null, 2));
