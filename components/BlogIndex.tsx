import Link from 'next/link';
import BlogImage from '@/components/BlogImage';
import { blogPageRoute, getBlogPage } from '@/lib/blog-pagination';

export default function BlogIndex({ locale, page = 1 }: { locale: string; page?: number }) {
  const archive = getBlogPage(page);
  if (!archive) return null;
  const isArabic = locale === 'ar';
  const copy = {
    read: isArabic ? 'اقرأ الدليل' : 'Read guide',
    pagination: isArabic ? 'صفحات الأدلة' : 'Guide pages',
    previous: isArabic ? 'الصفحة السابقة' : 'Previous page',
    next: isArabic ? 'الصفحة التالية' : 'Next page',
    range: isArabic
      ? `الأدلة ${archive.first}–${archive.last} من ${archive.total}`
      : `Guides ${archive.first}–${archive.last} of ${archive.total}`,
  };
  const linkClass = 'inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-accent-500/25 bg-white px-4 py-2 text-sm font-semibold text-primary-900 hover:border-accent-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-700';

  return (
    <section className="container-x pb-16 sm:pb-20" data-blog-page={page}>
      <p className="mx-auto mb-5 max-w-6xl text-sm text-primary-900/75">{copy.range}</p>
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
        {archive.guides.map((guide) => (
          <article key={guide.slug} data-blog-guide={guide.slug} className="glass-panel rounded-[24px] transition hover:-translate-y-1 hover:border-accent-500/40">
            <Link href={`/${locale}/blog/${guide.slug}/`} className="flex min-h-[240px] flex-col rounded-[24px] p-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-700">
              <BlogImage slug={guide.slug} locale={locale} className="mb-5 rounded-[18px]" />
              <h2 className={`${isArabic ? 'font-arabic text-xl leading-snug' : 'font-heading text-2xl'} font-bold text-primary-900`}>{guide[isArabic ? 'ar' : 'en'].title}</h2>
              <p className="mt-2 flex-1 text-sm leading-6 text-primary-900/80">{guide[isArabic ? 'ar' : 'en'].description}</p>
              <span className="mt-5 text-sm font-bold text-primary-900">{copy.read}</span>
            </Link>
          </article>
        ))}
      </div>
      <nav aria-label={copy.pagination} className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-center gap-2">
        {page > 1 ? <Link rel="prev" href={`/${locale}/${blogPageRoute(page - 1)}/`} className={linkClass}>{copy.previous}</Link> : null}
        {Array.from({ length: archive.count }, (_, index) => index + 1).map(number => number === page
          ? <span key={number} aria-current="page" aria-label={isArabic ? `الصفحة ${number}` : `Page ${number}`} className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl bg-primary-900 px-4 py-2 text-sm font-bold text-white">{number}</span>
          : <Link key={number} href={`/${locale}/${blogPageRoute(number)}/`} aria-label={isArabic ? `الصفحة ${number}` : `Page ${number}`} className={linkClass}>{number}</Link>)}
        {page < archive.count ? <Link rel="next" href={`/${locale}/${blogPageRoute(page + 1)}/`} className={linkClass}>{copy.next}</Link> : null}
      </nav>
    </section>
  );
}
