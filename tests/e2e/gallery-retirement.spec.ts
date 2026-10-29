import { expect, test } from '../browser-fixture';
import galleryCatalog from '../../content/site-image-gallery.json';
import { analyticsConsentKey } from '../../lib/analytics-consent';

const entries = galleryCatalog.images;
const displayedSource = (image: typeof entries[number]) => `${image.src}?v=${image.cacheVersion}`;

test.beforeEach(async ({ page }) => {
  // This suite tests the gallery, with analytics kept disabled and its separate
  // consent controls out of the keyboard/lightbox interaction being exercised.
  await page.addInitScript(key => localStorage.setItem(key, 'denied'), analyticsConsentKey);
});

for (const locale of ['en', 'ar'] as const) {
  test(`${locale}: current gallery has one card per photo while retired files stay absent and office details remain useful`, async ({ page, request }) => {
    const gallery = await page.goto(`/${locale}/gallery/`);
    expect(gallery?.status()).toBe(200);
    await expect(page.locator('main h1')).toHaveCount(1);
    await expect(page.locator('[data-site-gallery]')).toHaveCount(1);
    const cards = page.locator('[data-site-image-id]');
    await expect(cards).toHaveCount(111);
    expect(await cards.evaluateAll(elements => elements.map(element => element.getAttribute('data-site-image-id')))).toEqual(entries.map(image => image.id));
    const sources = await cards.locator('img').evaluateAll(images => images.map(image => ({
      src: image.getAttribute('src'), alt: image.getAttribute('alt')
    })));
    expect(sources).toEqual(entries.map(image => ({ src: displayedSource(image), alt: image.alt[locale] })));
    await expect(page.locator('[id^="photo-"], [data-company-gallery], img[src*="company-gallery"], source[srcset*="company-gallery"]')).toHaveCount(0);
    expect(await page.locator('html').getAttribute('dir')).toBe(locale === 'ar' ? 'rtl' : 'ltr');
    for (const route of ['contact', 'services', 'maid-services-ajman']) {
      await expect(page.locator(`main a[href="/${locale}/${route}/"]`).first()).toBeVisible();
    }
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
    expect(overflow).toBe(false);
    for (const route of ['about', 'maid-services-ajman']) {
      const response = await page.goto(`/${locale}/${route}/`);
      expect(response?.status()).toBe(200);
      await expect(page.locator('main').first()).toContainText(locale === 'en' ? 'Grand Mall' : 'جراند مول');
      await expect(page.locator('img[src*="company-gallery"], source[srcset*="company-gallery"]')).toHaveCount(0);
    }
    for (const source of ['/images/company-gallery/inaya-office-003.jpg', '/images/company-gallery/thumbs/inaya-office-003.jpg', '/images/company-gallery/inaya-home-support-079.jpg']) {
      expect((await request.get(source)).status()).toBe(404);
    }
  });

  test(`${locale}: category and search filters combine, show no results and reset to the complete catalog`, async ({ page }) => {
    await page.goto(`/${locale}/gallery/`);
    const cards = page.locator('[data-site-image-id]');
    const result = page.locator('[data-gallery-results]');
    const category = page.locator('[data-gallery-category="inaya"]');
    const all = page.locator('[data-gallery-category="all"]');
    const search = page.getByRole('searchbox', { name: locale === 'ar' ? 'ابحث في الصور' : 'Search photos', exact: true });
    const reset = page.getByRole('button', { name: locale === 'ar' ? 'إعادة ضبط الفلاتر' : 'Reset filters', exact: true });
    await expect(result).toHaveAttribute('role', 'status');
    await expect(all).toHaveAttribute('aria-pressed', 'true');
    await expect(cards).toHaveCount(111);
    await category.click();
    await expect(category).toHaveAttribute('aria-pressed', 'true');
    await expect(all).toHaveAttribute('aria-pressed', 'false');
    await expect(cards).toHaveCount(7);
    expect(await cards.evaluateAll(elements => elements.map(element => element.getAttribute('data-category')))).toEqual(Array(7).fill('inaya'));

    const guide = entries.find(image => image.id === 'site-image-guide-ajman-maid-recruitment-agreement-receipts-evidence')!;
    await search.fill(guide.title[locale]);
    await expect(cards).toHaveCount(0); // A guide does not belong to the INAYA group category.
    await reset.click();
    await expect(search).toHaveValue('');
    await expect(all).toHaveAttribute('aria-pressed', 'true');
    await expect(cards).toHaveCount(111);

    await search.fill(guide.title[locale]);
    await expect(cards).toHaveCount(1);
    await expect(cards).toHaveAttribute('data-site-image-id', guide.id);
    await expect(cards).toContainText(guide.title[locale]);
    await search.fill('no-matching-inaya-gallery-photo-20261025');
    await expect(cards).toHaveCount(0);
    await expect(result).toBeVisible();
    await expect(result).toContainText(/0|٠/);
    await reset.click();
    await expect(cards).toHaveCount(111);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
  });

  test(`${locale}: keyboard opens the native photo dialog, navigation keeps exact images and Escape restores focus`, async ({ page }) => {
    await page.goto(`/${locale}/gallery/`);
    const opener = page.locator(`[data-gallery-open="${entries[0].id}"]`);
    await opener.scrollIntoViewIfNeeded();
    await opener.focus();
    await expect(opener).toBeFocused();
    await opener.press('Enter');
    const dialog = page.getByRole('dialog', { name: locale === 'ar' ? 'معاينة الصورة' : 'Photo preview', exact: true });
    await expect(dialog).toBeVisible();
    expect(await dialog.evaluate(element => element.contains(document.activeElement))).toBe(true);
    await expect(dialog.locator('img')).toHaveAttribute('src', displayedSource(entries[0]));
    await expect(dialog.locator('img')).toHaveAttribute('alt', entries[0].alt[locale]);
    const next = dialog.getByRole('button', { name: locale === 'ar' ? 'الصورة التالية' : 'Next photo', exact: true });
    const previous = dialog.getByRole('button', { name: locale === 'ar' ? 'الصورة السابقة' : 'Previous photo', exact: true });
    await next.click();
    await expect(dialog.locator('img')).toHaveAttribute('src', displayedSource(entries[1]));
    await previous.click();
    await expect(dialog.locator('img')).toHaveAttribute('src', displayedSource(entries[0]));
    await page.keyboard.press('Escape');
    await expect(dialog).not.toBeVisible();
    await expect(opener).toBeFocused();
    await opener.press('Enter');
    await expect(dialog).toBeVisible();
    await dialog.getByRole('button', { name: locale === 'ar' ? 'إغلاق الصورة' : 'Close photo', exact: true }).click();
    await expect(dialog).not.toBeVisible();
    await expect(opener).toBeFocused();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
  });
}
