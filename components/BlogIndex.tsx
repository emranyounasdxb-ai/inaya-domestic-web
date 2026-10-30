import Link from 'next/link';
import BlogImage from '@/components/BlogImage';
import { blogPageRoute, getBlogPage } from '@/lib/blog-pagination';
import { domesticWorkerGuides, type DomesticWorkerGuide } from '@/lib/domestic-worker-guides';
import { blogCategories, blogCategory, type BlogCategory } from '@/lib/blog-categories';

export default function BlogIndex({ locale, page = 1 }: { locale: string; page?: number }) {
  const archive = getBlogPage(page);
  if (!archive) return null;
  const isArabic = locale === 'ar';
  const lang = isArabic ? 'ar' : 'en';
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
  const card = (guide: DomesticWorkerGuide) => (
    <article key={guide.slug} data-blog-guide={guide.slug} className="blog-index-card glass-panel row-span-4 grid grid-rows-subgrid rounded-[24px] transition hover:-translate-y-1 hover:border-accent-500/40">
      <Link href={`/${locale}/blog/${guide.slug}/`} className="row-span-4 grid grid-rows-subgrid rounded-[24px] p-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-700">
        <BlogImage slug={guide.slug} locale={locale} className="rounded-[18px]" />
        <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-xl font-bold leading-8 text-primary-900 sm:text-[22px]`}>{guide[lang].title}</h2>
        <p className={`text-sm leading-6 text-primary-900/80 ${isArabic ? 'font-arabic' : ''}`}>{guide[lang].description}</p>
        <span className="text-sm font-bold text-primary-900">{copy.read} <span className="ms-2 text-xs font-normal text-primary-900/70">· {blogCategories[blogCategory(guide.slug)][lang]}</span></span>
      </Link>
    </article>
  );

  return (
    <section className="container-x pb-16 sm:pb-20" data-blog-page={page}>
      <nav aria-label={isArabic ? 'الأدلة حسب الموضوع' : 'Guides by topic'} className="mx-auto mb-8 max-w-6xl rounded-2xl border border-primary-900/10 bg-white p-5">
        <h2 className="text-lg font-bold">{isArabic ? 'تصفح حسب الموضوع' : 'Browse by topic'}</h2>
        <p className="mt-2 text-sm leading-6 text-primary-900/75">{isArabic ? 'تضم كل فئة روابط الأدلة الموجودة في جميع صفحات الأرشيف. وظائف المكتب منفصلة عن أدلة العملاء.' : 'Each category links to existing guides across the archive. Office careers are separate from customer guides.'}</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{(Object.keys(blogCategories) as BlogCategory[]).map(category => <details key={category} className="rounded-xl border border-primary-900/10 p-4"><summary className="cursor-pointer text-sm font-semibold">{blogCategories[category][lang]} ({domesticWorkerGuides.filter(g => blogCategory(g.slug) === category).length})</summary><ul className="mt-4 space-y-3 text-sm leading-6">{domesticWorkerGuides.filter(g => blogCategory(g.slug) === category).map(g => <li key={g.slug}><Link href={`/${locale}/blog/${g.slug}/`} className="underline decoration-accent-500 underline-offset-4">{g[lang].title}</Link></li>)}</ul></details>)}</div>
      </nav>
      <p className="mx-auto mb-5 max-w-6xl text-sm text-primary-900/75">{copy.range}</p>
      <div className="mx-auto grid max-w-6xl gap-x-5 gap-y-4 md:grid-cols-3">
        {archive.guides.filter(guide => blogCategory(guide.slug) !== 'careers').map(card)}
      </div>
      {archive.guides.some(guide => blogCategory(guide.slug) === 'careers') ? <section className="mx-auto mt-10 max-w-6xl border-t border-accent-500/40 pt-8"><h2 className="text-2xl font-bold">{blogCategories.careers[lang]}</h2><p className="mt-3 text-sm leading-7">{isArabic ? 'معلومات التقديم لوظائف فريق المكتب؛ وليست طلبات خدمة منزلية.' : 'Applications for the office team, separate from household service enquiries.'}</p><div className="mt-5 grid gap-x-5 gap-y-4 md:grid-cols-3">{archive.guides.filter(guide => blogCategory(guide.slug) === 'careers').map(card)}</div></section> : null}
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
