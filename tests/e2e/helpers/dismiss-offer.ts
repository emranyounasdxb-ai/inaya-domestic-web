import { expect, type Page } from '@playwright/test';

export async function dismissOffer(page: Page) {
  const offer = page.getByTestId('sierra-leone-offer');
  const backdrop = page.getByTestId('sierra-leone-offer-backdrop');
  await expect(offer).toBeVisible();
  await expect(offer).toHaveAttribute('role', 'dialog');
  await expect(offer).toHaveAttribute('aria-modal', 'true');
  await expect(offer).toContainText('Candidate Profiles');
  await expect(backdrop).toBeVisible();
  await offer.getByRole('button', { name: 'Close Sierra Leone offer', exact: true }).click();
  await expect(offer).toHaveCount(0);
  await expect(backdrop).toHaveCount(0);
  // The close button overlays the carousel; leave it before testing unhovered autoplay.
  await page.mouse.move(1, 1);
}
