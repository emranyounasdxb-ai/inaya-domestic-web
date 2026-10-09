import { publishedArticles } from './published-article-content';
import type { DomesticWorkerGuide } from './domestic-worker-guides';
import { articleLinks } from './article-markdown';

export const publishedArticleGuides: DomesticWorkerGuide[] = publishedArticles.map((article) => ({
  slug: article.slug,
  published: article.published,
  updated: article.updated,
  author: { en: 'INAYA Domestic Workers Editorial Team', ar: 'فريق تحرير عناية للعمالة المنزلية' },
  en: {
    ...article.en, lead: '', sections: [], nextSteps: [], sourceIntro: 'Official sources', sourceNote: ''
  },
  ar: {
    ...article.ar, lead: '', sections: [], nextSteps: [], sourceIntro: 'المصادر الرسمية', sourceNote: ''
  },
  sources: []
}));

export function publishedArticleSources(body: string) {
  return articleLinks(body).filter((url) => new URL(url).hostname !== 'inayadomestic.ae');
}
