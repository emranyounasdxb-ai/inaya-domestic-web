import { expect, test } from '@playwright/test';

test('sitemap includes service, country and location SEO pages', async ({ request }) => {
  const response = await request.get('/sitemap.xml');
  expect(response.ok()).toBeTruthy();

  const xml = await response.text();

  expect(xml).toContain('/en/services/live-in-maid');
  expect(xml).toContain('/ar/services/live-in-maid');
  expect(xml).toContain('/en/maid-source-countries/philippines-maid-uae');
  expect(xml).toContain('/ar/maid-source-countries/philippines-maid-uae');
  expect(xml).toContain('/en/maid-services-dubai');
  expect(xml).toContain('/ar/maid-services-dubai');
  expect(xml).toContain('/en/service-areas');
  expect(xml).toContain('/ar/service-areas');
  expect(xml).toContain('xhtml:link');
});

test('robots.txt exposes the production sitemap and allows public routes', async ({ request }) => {
  const response = await request.get('/robots.txt');
  expect(response.ok()).toBeTruthy();

  const robots = await response.text();

  expect(robots).toContain('User-Agent: *');
  expect(robots).toContain('Allow: /');
  expect(robots).not.toContain('Disallow:');
  expect(robots).toContain('Sitemap: https://inayadomestic.ae/sitemap.xml');
});

test('every sitemap route has one self-canonical and reciprocal locale alternates', async ({ request }) => {
  test.setTimeout(240_000);
  const xml = await (await request.get('/sitemap.xml')).text();
  expect(xml).not.toContain('<lastmod>');
  const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)];
  const urls = entries.map((entry) => entry[1].match(/<loc>(.*?)<\/loc>/)![1]);
  expect(urls.length).toBeGreaterThan(100);
  expect(new Set(urls).size).toBe(urls.length);
  for (const locale of ['en', 'ar']) {
    for (const path of ['', 'booking/', 'careers/', 'pricing/', 'blog/', 'faq/']) {
      expect(urls).toContain(`https://inayadomestic.ae/${locale}/${path}`);
    }
  }

  for (const [index, url] of urls.entries()) {
    const parsed = new URL(url);
    expect(parsed.origin).toBe('https://inayadomestic.ae');
    expect(parsed.pathname).toMatch(/^\/(en|ar)\/(.*\/)?$/);
    const response = await request.get(parsed.pathname, { maxRedirects: 0 });
    expect(response.status(), url).toBe(200);
    expect(response.headers()['link'] || '').not.toContain('hreflang');
    const html = await response.text();
    expect(html).not.toMatch(/<meta[^>]+name="robots"[^>]+noindex/);
    const links = [...html.matchAll(/<link\b[^>]*>/g)].map((match) => match[0].replace(/hrefLang/gi, 'hreflang'));
    const canonical = links.filter((link) => link.includes('rel="canonical"'));
    expect(canonical, url).toHaveLength(1);
    expect(canonical[0]).toContain(`href="${url}"`);
    const alternates = links.filter((link) => link.includes('hreflang='));
    expect(alternates, url).toHaveLength(3);
    const path = parsed.pathname.replace(/^\/(en|ar)\//, '');
    for (const language of ['en', 'ar', 'x-default']) {
      const target = `https://inayadomestic.ae/${language === 'ar' ? 'ar' : 'en'}/${path}`;
      expect(urls).toContain(target);
      expect(alternates.filter((link) => link.includes(`hreflang="${language}"`) && link.includes(`href="${target}"`)), url).toHaveLength(1);
      expect(entries[index][1]).toContain(`hreflang="${language}" href="${target}"`);
    }
  }
});
