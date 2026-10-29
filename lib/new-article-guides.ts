import { newArticleMetadata } from './new-article-metadata';
import type { DomesticWorkerGuide } from './domestic-worker-guides';

export const newArticleSlugs = new Set(newArticleMetadata.map(article => article.slug));
export const newArticleGuides: DomesticWorkerGuide[] = newArticleMetadata.map(article => ({
  slug: article.slug, published: article.published, updated: article.updated, publication: true,
  author: { en: 'INAYA Domestic Workers Editorial Team', ar: 'فريق تحرير عناية للعمالة المنزلية' },
  en: { ...article.en, lead: '', sections: [], nextSteps: [], sourceIntro: 'Official sources', sourceNote: '' },
  ar: { ...article.ar, lead: '', sections: [], nextSteps: [], sourceIntro: 'المصادر الرسمية', sourceNote: '' },
  sources: [],
}));
