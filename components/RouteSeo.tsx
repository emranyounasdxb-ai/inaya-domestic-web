import Link from 'next/link';
import { pageBreadcrumbs } from '@/lib/page-seo';
import { pageStructuredData } from '@/lib/structured-data';
import { serializeJsonLd } from '@/lib/json-ld';
import { localizedUrl } from '@/lib/seo';

export default function RouteSeo({ locale, route }: { locale: string; route: string }) {
  const data = pageStructuredData(locale, route);
  if (!data) return null;
  const crumbs = pageBreadcrumbs(locale, route);
  const guides = route.startsWith('services/')
    ? ['service-areas', 'documents-required', 'faq']
    : ['services', 'service-areas', 'how-it-works'];
  const related = guides.filter((path) => path !== route);
  return <>
    <script type="application/ld+json" data-seo="route" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />
    {route ? <nav aria-label={locale === 'ar' ? 'مسار الصفحة' : 'Breadcrumb'} data-seo="breadcrumbs" className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-3 gap-y-2 px-6 pt-5 text-sm text-primary-900">
      {crumbs.map((crumb, index) => <span key={crumb.url} className="inline-flex items-center gap-3">
        {index ? <span aria-hidden="true">/</span> : null}
        {index === crumbs.length - 1 ? <span aria-current="page">{crumb.name}</span> : <Link href={new URL(crumb.url).pathname}>{crumb.name}</Link>}
      </span>)}
    </nav> : null}
    <nav aria-label={locale === 'ar' ? 'أدلة ذات صلة' : 'Related guides'} data-seo="related-guides" className="mx-auto flex max-w-6xl flex-wrap gap-x-5 gap-y-2 px-6 py-3 text-xs font-semibold text-primary-900">
      {related.map((path) => <Link key={path} href={new URL(localizedUrl(locale, path)).pathname}>{pageBreadcrumbs(locale, path).at(-1)!.name}</Link>)}
    </nav>
  </>;
}
