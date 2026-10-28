import { defineConfig, devices } from '@playwright/test';

// Release behaviour comes from the exact export built in Linux CI. Next's HMR
// metadata streaming is not the production static-host navigation protocol.
const port = process.env.PLAYWRIGHT_STATIC_PORT || '8765';
const baseURL = `http://127.0.0.1:${port}`;

export default defineConfig({
  testDir: './tests/e2e-static',
  timeout: 60_000,
  expect: { timeout: 8_000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : 2,
  reporter: 'list',
  use: { baseURL, trace: 'on-first-retry', screenshot: 'only-on-failure' },
  webServer: {
    command: `python3 -m http.server ${port} --bind 127.0.0.1 --directory out`,
    url: `${baseURL}/en/`,
    reuseExistingServer: false,
    timeout: 30_000
  },
  projects: [
    { name: 'static-chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'static-mobile-chrome', use: { ...devices['Pixel 5'] } }
  ]
});
