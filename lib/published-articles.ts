import { publishedArticleMetadata } from './published-article-metadata';
import type { DomesticWorkerGuide } from './domestic-worker-guides';

export const publishedArticleGuides: DomesticWorkerGuide[] = publishedArticleMetadata.map((article) => ({
  slug: article.slug,
  published: article.published,
  updated: article.updated,
  publication: true,
  author: { en: 'INAYA Domestic Workers Editorial Team', ar: 'فريق تحرير عناية للعمالة المنزلية' },
  en: {
    ...article.en, lead: '', sections: [], nextSteps: [], sourceIntro: 'Official sources', sourceNote: ''
  },
  ar: {
    ...article.ar, lead: '', sections: [], nextSteps: [], sourceIntro: 'المصادر الرسمية', sourceNote: ''
  },
  sources: []
}));
