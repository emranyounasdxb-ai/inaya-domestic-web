import { expect, test } from '@playwright/test';

test('home page renders main sections', async ({ page }) => {
  await page.goto('/en');

  await expect(page.getByRole('heading', { name: /Elevating Domestic/i })).toBeVisible();
  await expect(page.getByText('Our 5-Step Vetting Matrix')).toBeVisible();
  await expect(page.getByRole('heading', { name: /Google Reviews/i })).toBeVisible();
  await expect(page.getByText('Google Business Profile', { exact: true })).toBeVisible();
});

test('vetting matrix is not rendered on internal pages', async ({ page }) => {
  for (const path of ['/en/service-areas', '/en/services/live-in-maid']) {
    await page.goto(path);
    await expect(page.getByText('Our 5-Step Vetting Matrix')).toHaveCount(0);
  }
});
