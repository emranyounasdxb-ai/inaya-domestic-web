const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  experimental: { inlineCss: false },
  images: {
    unoptimized: true
  }
};

module.exports = withNextIntl(nextConfig);
