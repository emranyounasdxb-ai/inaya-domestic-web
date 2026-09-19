import { localizedUrl } from './seo';
import type { VisibleFaq } from './page-seo';

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c').replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
}

export function faqEntity(locale: string, route: string, faqs: VisibleFaq[]) {
  const url = localizedUrl(locale, route);
  return {
    '@type': 'FAQPage', '@id': `${url}#faq`, url, inLanguage: locale,
    isPartOf: { '@id': `${url}#webpage` },
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question', name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer }
    }))
  };
}
