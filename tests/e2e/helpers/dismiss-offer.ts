import { expect, type Page } from '@playwright/test';

export async function dismissOffer(page: Page) {
  // Keep existing carousel setup calls compatible after retiring the promotion.
  await expect(page.getByTestId('sierra-leone-offer')).toHaveCount(0);
  await expect(page.getByTestId('sierra-leone-offer-backdrop')).toHaveCount(0);
  await page.mouse.move(1, 1);
}
