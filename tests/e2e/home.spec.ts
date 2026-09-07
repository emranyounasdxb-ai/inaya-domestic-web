import { expect, test, type Page } from '@playwright/test';
import { CURATED_GOOGLE_REVIEWS } from '../../lib/curated-google-reviews';

const carouselSelector = '.google-review-carousel';

async function visibleReviewCardCount(page: Page) {
  return page.locator('.google-review-viewport').evaluate((viewport) => {
    const viewportRect = viewport.getBoundingClientRect();
    return Array.from(viewport.querySelectorAll<HTMLElement>('[data-review-card]')).filter((card) => {
      const cardRect = card.getBoundingClientRect();
      return cardRect.left >= viewportRect.left - 1 && cardRect.right <= viewportRect.right + 1;
    }).length;
  });
}

test('home page renders main sections', async ({ page }) => {
  await page.goto('/en');

  await expect(page.getByRole('heading', { name: /Elevating Domestic/i })).toBeVisible();
  await expect(page.getByText('Our 5-Step Vetting Matrix')).toBeVisible();
  await expect(page.getByRole('heading', { name: /Google Reviews/i })).toBeVisible();
  await expect(page.getByText('INAYA on Google', { exact: true })).toBeVisible();
});

test('curated Google reviews render static content on English homepage', async ({ page }) => {
  await page.goto('/en');

  await expect(page.getByRole('heading', { name: /Google Reviews/i })).toBeVisible();
  expect(CURATED_GOOGLE_REVIEWS).toHaveLength(6);
  expect(CURATED_GOOGLE_REVIEWS.every((review) => review.rating === 5 && review.text.trim().length > 0)).toBe(true);

  const originalCards = page.locator('[data-review-card][data-carousel-clone="false"]');
  await expect(originalCards).toHaveCount(6);
  for (const review of CURATED_GOOGLE_REVIEWS) {
    const card = page.locator(`[data-review-card][data-carousel-clone="false"][data-review-id="${review.id}"]`);
    await expect(card).toContainText(review.name);
    await expect(card).toContainText(review.text);
  }

  await expect(page.locator('.google-review-dots button')).toHaveCount(6);
  await expect(page.getByText('Verified Google Review', { exact: true })).toHaveCount(0);
  await expect(page.getByText('Google reviews are temporarily unavailable', { exact: true })).toHaveCount(0);
});

test('Google reviews carousel shows three, two and one cards responsively', async ({ page }) => {
  for (const viewport of [
    { width: 1440, height: 1000, expected: 3 },
    { width: 900, height: 900, expected: 2 },
    { width: 390, height: 844, expected: 1 }
  ]) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto('/en');
    const carousel = page.locator(carouselSelector);
    await carousel.scrollIntoViewIfNeeded();
    await expect(carousel).toHaveAttribute('data-visible-count', String(viewport.expected));
    await expect.poll(() => visibleReviewCardCount(page)).toBe(viewport.expected);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
  }
});

test('Google reviews carousel autoplay pauses for hover and focus, then resumes', async ({ page }) => {
  test.setTimeout(50_000);
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/en');
  const carousel = page.locator(carouselSelector);
  await carousel.scrollIntoViewIfNeeded();

  await expect(carousel).toHaveAttribute('data-active-index', '0');
  await expect.poll(async () => carousel.getAttribute('data-active-index'), { timeout: 7000 }).toBe('1');

  await carousel.hover();
  await expect(carousel).toHaveAttribute('data-autoplay-paused', 'true');
  const hoveredIndex = await carousel.getAttribute('data-active-index');
  await page.waitForTimeout(6000);
  await expect(carousel).toHaveAttribute('data-active-index', hoveredIndex || '1');

  await page.mouse.move(1, 1);
  await expect(carousel).toHaveAttribute('data-autoplay-paused', 'false');
  await expect.poll(async () => carousel.getAttribute('data-active-index'), { timeout: 7000 }).not.toBe(hoveredIndex);

  await carousel.focus();
  await expect(carousel).toHaveAttribute('data-autoplay-paused', 'true');
  const focusedIndex = await carousel.getAttribute('data-active-index');
  await page.waitForTimeout(6000);
  await expect(carousel).toHaveAttribute('data-active-index', focusedIndex || '2');

  await page.locator('.google-review-primary').focus();
  await expect(carousel).toHaveAttribute('data-autoplay-paused', 'false');
  await expect.poll(async () => carousel.getAttribute('data-active-index'), { timeout: 7000 }).not.toBe(focusedIndex);
});

test('Google reviews carousel controls, dots and seamless loop remain functional', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/en');
  const carousel = page.locator(carouselSelector);
  const track = page.locator('.google-review-track');
  const next = page.getByRole('button', { name: 'Next review' });
  await carousel.scrollIntoViewIfNeeded();
  await carousel.focus();

  for (let step = 1; step <= CURATED_GOOGLE_REVIEWS.length; step += 1) {
    await next.click();
    await expect(carousel).toHaveAttribute('data-active-index', String(step % CURATED_GOOGLE_REVIEWS.length));
    await expect(track).not.toHaveClass(/is-animating/);
  }
  await expect(track).toHaveAttribute('data-track-index', '0');

  await page.getByRole('button', { name: 'Show review from clarisa Delfin' }).click();
  await expect(carousel).toHaveAttribute('data-active-index', '3');
  await expect(track).not.toHaveClass(/is-animating/);

  await carousel.dispatchEvent('touchstart', { touches: [{ identifier: 0, clientX: 300, clientY: 200 }] });
  await carousel.dispatchEvent('touchend', { changedTouches: [{ identifier: 0, clientX: 200, clientY: 202 }] });
  await expect(carousel).toHaveAttribute('data-active-index', '4');
});

test('Google reviews carousel disables autoplay and animation for reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/en');
  const carousel = page.locator(carouselSelector);
  const track = page.locator('.google-review-track');
  await carousel.scrollIntoViewIfNeeded();

  await expect(carousel).toHaveAttribute('data-reduced-motion', 'true');
  await expect(carousel).toHaveAttribute('data-autoplay-paused', 'true');
  await page.waitForTimeout(6000);
  await expect(carousel).toHaveAttribute('data-active-index', '0');
  await expect(track).toHaveCSS('transition-duration', '0s');

  await page.getByRole('button', { name: 'Next review' }).click();
  await expect(carousel).toHaveAttribute('data-active-index', '1');
  await expect(track).not.toHaveClass(/is-animating/);
});

test('vetting matrix is not rendered on internal pages', async ({ page }) => {
  for (const path of ['/en/service-areas', '/en/services/live-in-maid']) {
    await page.goto(path);
    await expect(page.getByText('Our 5-Step Vetting Matrix')).toHaveCount(0);
  }
});

test('curated Google reviews remain static and preserve Arabic RTL', async ({ page }) => {
  await page.goto('/ar');

  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  await expect(page.getByRole('heading', { name: 'تقييمات Google' })).toBeVisible();
  await expect(page.locator('[data-review-card][data-carousel-clone="false"][data-review-id="hanan"]')).toContainText('Amazing service from INAYA Domestic Workers!');
  await expect(page.getByText('تقييمات Google غير متاحة مؤقتاً', { exact: true })).toHaveCount(0);

  const section = page.locator('.google-reviews-section');
  await expect(section).toHaveCSS('direction', 'rtl');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true);
});
