import { siteConfig } from './site-config';

// cPanel serves exported directory indexes and redirects slashless requests.
export function localizedUrl(locale: string, path = ''): string {
  return `${siteConfig.url}/${locale}/${path ? `${path}/` : ''}`;
}

export function localeAlternates(locale: string, path = '') {
  return {
    canonical: localizedUrl(locale, path),
    languages: {
      en: localizedUrl('en', path),
      ar: localizedUrl('ar', path),
      // English is the site's default locale; the root is a language redirect.
      'x-default': localizedUrl('en', path)
    }
  };
}
