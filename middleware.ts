import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

const productionHosts = new Set(['inayadomestic.ae', 'www.inayadomestic.ae']);

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always'
});

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);
  const host = request.headers.get('host')?.split(':')[0].toLowerCase();

  if (host && !productionHosts.has(host)) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
