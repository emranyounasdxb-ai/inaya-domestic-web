import 'server-only';
import data from '@/content/new-articles-20261029.json';
import officeCareers from '@/content/office-careers-20261029.json';
import type { PublishedArticleContent } from './published-article-content';

// Full manuscripts belong only to the server article route, not the guide index.
export const newArticles = [...data, ...officeCareers] as (PublishedArticleContent & { id: string })[];
export function getNewArticle(slug: string) {
  return newArticles.find(article => article.slug === slug);
}
