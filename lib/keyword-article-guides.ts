import { keywordArticleMetadata } from './keyword-article-metadata';
import type { DomesticWorkerGuide } from './domestic-worker-guides';

// Only this compact metadata reaches the guide index and shared SEO helpers.
// Full bilingual manuscripts remain in the server article module.
export const keywordArticleGuides: DomesticWorkerGuide[] = keywordArticleMetadata.map(article => ({
  slug: article.slug, published: article.published, updated: article.updated,
  author: { en: 'INAYA Domestic Workers Editorial Team', ar: 'فريق تحرير عناية للعمالة المنزلية' },
  en: { ...article.en, lead: '', sections: [], nextSteps: [], sourceIntro: 'Official sources', sourceNote: '' },
  ar: { ...article.ar, lead: '', sections: [], nextSteps: [], sourceIntro: 'المصادر الرسمية', sourceNote: '' },
  sources: []
}));

export const keywordArticleSlugs = new Set(keywordArticleMetadata.map(article => article.slug));
