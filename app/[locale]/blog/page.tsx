import type { Metadata } from 'next';
import BlogIndex from '@/components/BlogIndex';
import GuideContent from '@/components/GuideContent';
import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import RouteSeo from '@/components/RouteSeo';
import { pageMetadata } from '@/lib/page-seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, 'blog');
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isArabic = locale === 'ar';
  const headingClass = isArabic
    ? 'font-arabic text-4xl font-bold leading-[1.32] text-primary-900 sm:text-5xl lg:text-6xl'
    : 'font-heading text-4xl font-bold leading-[1.05] text-primary-900 sm:text-5xl lg:text-6xl';
  const copy = {
    badge: isArabic ? 'دليل العائلات' : 'Family guide',
    title: isArabic ? 'نصائح لاختيار الدعم المنزلي المناسب' : 'Guides for choosing the right home support',
    subtitle: isArabic ? 'أدلة عملية حول الاستقدام والأسعار والمستندات، مع روابط للمصادر الحكومية ذات الصلة.' : 'Practical guides to hiring, pricing and documents, with links to relevant official sources.',
    read: isArabic ? 'اقرأ الدليل' : 'Read guide'
  };

  return (
    <div className="overflow-hidden bg-ivory text-ink">
      <RouteSeo locale={locale} route="blog" />
      <section className="relative overflow-hidden pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(191,164,106,0.20),transparent_28rem),radial-gradient(circle_at_10%_48%,rgba(7,22,74,0.10),transparent_26rem)]" />
        <div className="container-x relative">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-700/10 bg-white/65 px-4 py-2 text-xs font-semibold text-primary-900 shadow-sm backdrop-blur-xl sm:text-sm"><span className="h-2 w-2 rounded-full bg-accent-500" />{copy.badge}</span>
            <h1 className={`mx-auto mt-6 max-w-4xl ${headingClass}`}>{copy.title}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-ink/75 sm:text-lg sm:leading-8">{copy.subtitle}</p>
          </div>
        </div>
      </section>
      <PageBreadcrumbs locale={locale} route="blog" />

      <BlogIndex locale={locale} />
      <div className="container-x pb-16"><GuideContent locale={locale} route="blog" /></div>
    </div>
  );
}
