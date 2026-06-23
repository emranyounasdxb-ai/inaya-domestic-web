import type { MetadataRoute } from 'next';
import { services } from '@/lib/services';

const base = 'https://inayadomestic.ae';
const staticPaths = ['', '/about', '/services', '/booking', '/contact', '/faq', '/reviews', '/pricing', '/how-it-works', '/service-areas', '/blog', '/careers', '/privacy-policy', '/terms', '/refund-policy'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of ['en', 'ar']) {
    for (const p of staticPaths) {
      entries.push({ url: `${base}/${locale}${p}`, lastModified: new Date() });
    }
    for (const s of services) {
      entries.push({ url: `${base}/${locale}/services/${s.slug}`, lastModified: new Date() });
    }
  }
  return entries;
}
