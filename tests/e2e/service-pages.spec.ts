import { expect, test } from '@playwright/test';
import { allServices } from '../../lib/service-helpers';
import { serviceGroups } from '../../lib/service-presentation';

test('all localized service detail routes respond successfully', async ({ request }) => {
  const routes = allServices
    .filter((service) => service.slug !== 'countries-we-source-from')
    .flatMap((service) => [`/en/services/${service.slug}`, `/ar/services/${service.slug}`]);

  const responses = await Promise.all(routes.map((route) => request.get(route)));

  for (const [index, response] of responses.entries()) {
    expect(response.status(), routes[index]).toBeLessThan(400);
  }
});

test('services index lists every grouped service in English and Arabic', async ({ page }) => {
  for (const locale of ['en', 'ar'] as const) {
    const response = await page.goto(`/${locale}/services`);
    expect(response?.status()).toBeLessThan(400);
    await expect(page.locator('html')).toHaveAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');

    for (const group of serviceGroups) {
      await expect(page.getByRole('heading', { name: group.title[locale] })).toBeVisible();
      for (const slug of group.slugs) {
        expect(await page.locator(`a[href="/${locale}/services/${slug}"]`).count(), `${locale}/${slug}`).toBeGreaterThan(0);
      }
    }
  }
});

test('service template renders the required content sections and labeled related links', async ({ page }) => {
  await page.goto('/en/services/full-time-maid');

  await expect(page.locator('h1')).toContainText('Full-time Maid');
  await expect(page.getByRole('heading', { name: 'Why Families Choose INAYA' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'What Full-time Maid Support Can Include' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Perfect For' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Full-time Maid Pricing Guidance' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Full-time Maid FAQs' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Related Maid Services' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Why Choose INAYA for Full-time Maid Hiring?' })).toBeVisible();
  await expect(page.getByText('Helpful Service Guide', { exact: true })).toBeVisible();

  const relatedHeading = page.getByRole('heading', { name: 'Related Maid Services' });
  const relatedSection = page.locator('section').filter({ has: relatedHeading });
  await expect(relatedSection.locator('a').filter({ hasText: /Maid|Housekeeping|Domestic/i }).first()).toBeVisible();
});

test('Arabic service template is localized and RTL', async ({ page }) => {
  await page.goto('/ar/services/full-time-maid');

  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  await expect(page.locator('h1')).toContainText('خادمة');
  await expect(page.getByRole('heading', { name: 'لماذا تختار الأسر عناية؟' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'ما الذي يمكن أن يشمله الدعم؟' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'أسئلة خادمة بدوام كامل' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'خدمات خادمات ذات صلة' })).toBeVisible();
});
