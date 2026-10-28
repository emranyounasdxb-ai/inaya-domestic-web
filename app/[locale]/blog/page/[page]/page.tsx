import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogIndex from '@/components/BlogIndex';
import PageBreadcrumbs from '@/components/PageBreadcrumbs';
import RouteSeo from '@/components/RouteSeo';
import { blogArchiveRoutes, getBlogPageNumber } from '@/lib/blog-pagination';
import { pageMetadata } from '@/lib/page-seo';

type Props = { params: Promise<{ locale: string; page: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return blogArchiveRoutes.map(route => ({ page: route.split('/').at(-1)! }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, page } = await params;
  const route = `blog/page/${page}`;
  if (!getBlogPageNumber(route)) notFound();
  return pageMetadata(locale, route);
}

export default async function BlogArchivePage({ params }: Props) {
  const { locale, page } = await params;
  const route = `blog/page/${page}`;
  const pageNumber = getBlogPageNumber(route);
  if (!pageNumber) notFound();
  const isArabic = locale === 'ar';

  return (
    <div className="overflow-hidden bg-ivory text-ink">
      <RouteSeo locale={locale} route={route} />
      <section className="relative overflow-hidden pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(191,164,106,0.20),transparent_28rem),radial-gradient(circle_at_10%_48%,rgba(7,22,74,0.10),transparent_26rem)]" />
        <div className="container-x relative">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-700/10 bg-white/65 px-4 py-2 text-xs font-semibold text-primary-900 shadow-sm backdrop-blur-xl sm:text-sm"><span className="h-2 w-2 rounded-full bg-accent-500" />{isArabic ? 'دليل العائلات' : 'Family guide'}</span>
            <h1 className={`mx-auto mt-6 max-w-4xl ${isArabic ? 'font-arabic text-4xl font-bold leading-[1.32] text-primary-900 sm:text-5xl lg:text-6xl' : 'font-heading text-4xl font-bold leading-[1.05] text-primary-900 sm:text-5xl lg:text-6xl'}`}>{isArabic ? `أدلة الخدمات المنزلية — الصفحة ${pageNumber}` : `Domestic service guides — Page ${pageNumber}`}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-ink/75 sm:text-lg sm:leading-8">{isArabic ? 'تابع تصفح الأدلة العملية حول الاستقدام والأسعار والمستندات للأسر في الإمارات.' : 'Continue browsing practical guides to hiring, package pricing and documents for UAE households.'}</p>
          </div>
        </div>
      </section>
      <PageBreadcrumbs locale={locale} route={route} />
      <BlogIndex locale={locale} page={pageNumber} />
    </div>
  );
}
