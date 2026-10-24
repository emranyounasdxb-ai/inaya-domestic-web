import data from '@/content/keyword-articles-20261024.json';
import type { KeywordArticle } from './keyword-article-types';

// Imported only by the server route, never by the guide-index client bundle.
export const keywordArticles = data as KeywordArticle[];
export function getKeywordArticle(slug: string) {
  return keywordArticles.find(article => article.slug === slug);
}
