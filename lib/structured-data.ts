import { getPageSeo, pageBreadcrumbs } from './page-seo';
import { localizedUrl } from './seo';
import { siteConfig } from './site-config';
import { faqEntity } from './json-ld';

export function pageStructuredData(locale: string, route: string) {
  const page = getPageSeo(locale, route);
  if (!page) return undefined;
  const url = localizedUrl(locale, route);
  const home = localizedUrl('en');
  const organizationId = `${siteConfig.url}/#organization`;
  const websiteId = `${siteConfig.url}/#website`;
  const graph: Record<string, unknown>[] = [
    {
      // One entity, two compatible types; details verified in site-config/contact.
      '@type': ['Organization', 'LocalBusiness'], '@id': organizationId,
      name: locale === 'ar' ? 'عناية للعمالة المنزلية' : siteConfig.name,
      url: home, telephone: siteConfig.phone, email: siteConfig.email,
      logo: `${siteConfig.url}/brand/inaya-domestic-workers-logo.webp`,
      address: { '@type': 'PostalAddress', streetAddress: siteConfig.address, addressLocality: 'Ajman', addressCountry: 'AE' }
    },
    {
      '@type': 'WebSite', '@id': websiteId, url: home,
      name: locale === 'ar' ? 'عناية للعمالة المنزلية' : siteConfig.name,
      inLanguage: ['en', 'ar'], publisher: { '@id': organizationId }
    },
    {
      '@type': 'WebPage', '@id': `${url}#webpage`, url,
      name: page.name, description: page.description, inLanguage: locale,
      isPartOf: { '@id': websiteId }, about: { '@id': organizationId },
      ...(route ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {}),
      ...(page.service ? { mainEntity: { '@id': `${url}#service` } } : {})
    }
  ];
  if (route) graph.push({
    '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`,
    itemListElement: pageBreadcrumbs(locale, route).map((crumb, index) => ({
      '@type': 'ListItem', position: index + 1, name: crumb.name, item: crumb.url
    }))
  });
  if (page.service) graph.push({
    '@type': 'Service', '@id': `${url}#service`, url,
    name: page.service.name, serviceType: page.service.name, description: page.service.description,
    provider: { '@id': organizationId }, mainEntityOfPage: { '@id': `${url}#webpage` },
    ...(page.service.area ? { areaServed: { '@type': 'AdministrativeArea', name: page.service.area } } : {})
  });
  // Questions are reused from the exact data rendered by the corresponding page.
  if (page.faqs?.length) graph.push(faqEntity(locale, route, page.faqs));
  return { '@context': 'https://schema.org', '@graph': graph };
}
