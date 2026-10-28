import { domesticWorkerGuides } from './domestic-worker-guides';

export const BLOG_PAGE_SIZE = 12;
const orderedGuides = [...domesticWorkerGuides].sort((a, b) => b.published.localeCompare(a.published));
export const blogPageCount = Math.ceil(orderedGuides.length / BLOG_PAGE_SIZE);

export function blogPageRoute(page: number): string {
  return page === 1 ? 'blog' : `blog/page/${page}`;
}

export const blogArchiveRoutes = Array.from({ length: blogPageCount - 1 }, (_, index) => blogPageRoute(index + 2));

export function getBlogPage(page: number) {
  if (!Number.isInteger(page) || page < 1 || page > blogPageCount) return undefined;
  const start = (page - 1) * BLOG_PAGE_SIZE;
  return {
    number: page,
    count: blogPageCount,
    total: orderedGuides.length,
    guides: orderedGuides.slice(start, start + BLOG_PAGE_SIZE),
    first: start + 1,
    last: Math.min(start + BLOG_PAGE_SIZE, orderedGuides.length),
  };
}

export function getBlogPageNumber(route: string): number | undefined {
  if (route === 'blog') return 1;
  const match = /^blog\/page\/([1-9]\d*)$/.exec(route);
  const page = match ? Number(match[1]) : 0;
  return page >= 2 && getBlogPage(page) ? page : undefined;
}
