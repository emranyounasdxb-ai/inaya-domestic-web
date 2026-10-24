import { getPageSeo, pageBreadcrumbs } from './page-seo';
import { localizedUrl } from './seo';
import { siteConfig } from './site-config';
import { faqEntity } from './json-ld';
import { getDomesticWorkerGuide, guideAuthor } from './domestic-worker-guides';
import { packageQuestions } from './package-content';
import { organizationEntity, organizationId } from './organization';
import { companyInformation } from './company-information';

export function pageStructuredData(locale: string, route: string) {
  const page = getPageSeo(locale, route);
  if (!page) return undefined;
  const url = localizedUrl(locale, route);
  const home = localizedUrl('en');
  const websiteId = `${siteConfig.url}/#website`;
  const graph: Record<string, unknown>[] = [
    organizationEntity(locale),
    {
      '@type': 'WebSite', '@id': websiteId, url: home,
      name: locale === 'ar' ? 'عناية للعمالة المنزلية' : siteConfig.name,
      inLanguage: ['en', 'ar'], publisher: { '@id': organizationId }
    },
    {
      '@type': 'WebPage', '@id': `${url}#webpage`, url,
      name: page.name, description: page.description, inLanguage: locale,
      isPartOf: { '@id': websiteId }, about: { '@id': organizationId },
      ...(route === companyInformation.route ? {
        mainEntity: { '@id': organizationId },
        dateModified: companyInformation.updated,
        lastReviewed: companyInformation.reviewed
      } : {}),
      ...(page.image ? { primaryImageOfPage: { '@id': `${url}#primaryimage` } } : {}),
      ...(route ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {}),
      ...(page.service ? { mainEntity: { '@id': `${url}#service` } } : {}),
      ...(route.startsWith('blog/') ? { mainEntity: { '@id': `${url}#article` } } : {})
    }
  ];
  if (page.image) graph.push({
    '@type': 'ImageObject', '@id': `${url}#primaryimage`,
    contentUrl: `${siteConfig.url}${page.image}`,
    caption: page.imageAlt ?? page.name, inLanguage: locale,
    representativeOfPage: true
  });
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
    ...(page.image ? { image: { '@id': `${url}#primaryimage` } } : {}),
    ...(page.service.area ? { areaServed: { '@type': 'AdministrativeArea', name: page.service.area } } : {})
  });
  const guide = route.startsWith('blog/') ? getDomesticWorkerGuide(route.slice('blog/'.length)) : undefined;
  if (guide) graph.push({
    '@type': 'Article', '@id': `${url}#article`, url,
    headline: page.name, description: page.description, inLanguage: locale,
    ...(page.image ? { image: `${siteConfig.url}${page.image}` } : {}),
    mainEntityOfPage: { '@id': `${url}#webpage` },
    author: { '@type': 'Organization', name: guide.author?.[locale === 'ar' ? 'ar' : 'en'] ?? guideAuthor }, publisher: { '@id': organizationId },
    datePublished: guide.published, dateModified: guide.updated,
    citation: guide[locale === 'ar' ? 'ar' : 'en'].citations ?? guide.sources.map((source) => source.url)
  });
  // Questions are reused from the exact data rendered by the corresponding page.
  if (route === 'pricing') {
    const lang = locale === 'ar' ? 'ar' : 'en';
    graph.push(faqEntity(locale, route, packageQuestions.map(({ question, answer }) => ({
      question: question[lang], answer: answer[lang]
    }))));
  }
  if (page.faqs?.length) graph.push(faqEntity(locale, route, page.faqs));
  return { '@context': 'https://schema.org', '@graph': graph };
}
