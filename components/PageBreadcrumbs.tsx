import Link from 'next/link';
import { pageBreadcrumbs } from '@/lib/page-seo';

// Visible hierarchy belongs after the existing Hero, not in the metadata layout.
export default function PageBreadcrumbs({ locale, route, className = '' }: { locale: string; route: string; className?: string }) {
  if (!route) return null;
  const crumbs = pageBreadcrumbs(locale, route);
  return <nav aria-label={locale === 'ar' ? 'مسار الصفحة' : 'Breadcrumb'} dir={locale === 'ar' ? 'rtl' : 'ltr'} data-seo="breadcrumbs" className={`mx-auto flex max-w-6xl flex-wrap items-center gap-x-3 gap-y-1 px-6 py-3 text-start text-xs text-primary-900 ${className}`}>
    {crumbs.map((crumb, index) => <span key={crumb.url} className="inline-flex items-center gap-3">
      {index ? <span aria-hidden="true">/</span> : null}
      {index === crumbs.length - 1 ? <span aria-current="page">{crumb.name}</span> : <Link className="hover:underline" href={new URL(crumb.url).pathname}>{crumb.name}</Link>}
    </span>)}
  </nav>;
}
