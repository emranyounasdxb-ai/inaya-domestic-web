import { expect, test } from '@playwright/test';

test('home page renders main sections', async ({ page }) => {
  await page.goto('/en');

  await expect(page.getByRole('heading', { name: /Elevating Domestic/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Google Reviews/i })).toBeVisible();
  await expect(page.getByText(/Google Business Profile/i)).toBeVisible();
});
