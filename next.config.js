const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/images/home/candidate-executive-nanny.webp',
        destination: '/images/home/candidates/elite-candidate-nanny.webp'
      },
      {
        source: '/images/home/candidate-private-chef.webp',
        destination: '/images/home/candidates/elite-candidate-chef.webp'
      },
      {
        source: '/images/home/candidate-house-manager.webp',
        destination: '/images/home/candidates/elite-candidate-house-manager.webp'
      }
    ];
  }
};

module.exports = withNextIntl(nextConfig);
