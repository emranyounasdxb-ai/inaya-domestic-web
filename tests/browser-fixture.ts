import { test as base } from '@playwright/test';

// Every browser suite uses the real initial-head integration without sending QA
// visits to Ahrefs. A dedicated test may replace this route with an observed stub.
export const test = base.extend({
  context: async ({ context }, run) => {
    await context.route('https://analytics.ahrefs.com/**', route => route.fulfill({
      status: 200,
      contentType: 'application/javascript',
      body: '',
    }));
    await run(context);
  },
});

export { expect, type Page } from '@playwright/test';
