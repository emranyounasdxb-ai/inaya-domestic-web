import type { Metadata } from 'next';
import Link from 'next/link';
import CompanyGallery from '@/components/CompanyGallery';
import PageBreadcrumbs from '@/components/PageBreadcrumbs';
import RouteSeo from '@/components/RouteSeo';
import { pageMetadata } from '@/lib/page-seo';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, 'gallery');
}

export default async function GalleryPage({ params }: Props) {
  const { locale } = await params;
  const ar = locale === 'ar';

  return (
    <div className="bg-[#fbfaf7] text-primary-900">
      <RouteSeo locale={locale} route="gallery" />
      <section className="border-b border-primary-900/10 bg-white px-6 py-12 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <h1 className={`${ar ? 'font-arabic' : 'font-heading'} text-4xl font-bold tracking-[-0.04em] sm:text-5xl`}>
            {ar ? 'معرض صور عناية' : 'INAYA photo gallery'}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-primary-900/80">
            {ar ? 'تصفح صور مكتب عناية في عجمان وصور الدعم المنزلي. اختر أي صورة لعرضها بالحجم الأكبر.' : 'Browse photos of INAYA’s Ajman office and household support. Select an image to see the larger version.'}
          </p>
        </div>
      </section>
      <PageBreadcrumbs locale={locale} route="gallery" />
      <CompanyGallery locale={locale} />
      <section className="border-t border-primary-900/10 bg-white px-6 py-10 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className={`${ar ? 'font-arabic' : 'font-heading'} text-2xl font-bold`}>
            {ar ? 'ناقش احتياج أسرتك مع عناية' : 'Discuss your household needs with INAYA'}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-primary-900/80">
            {ar ? 'شارك الدور والمهام والمنطقة والجدول المطلوب. يؤكد الفريق الخيارات والتوفر والشروط المناسبة لطلبك.' : 'Share the role, duties, location and schedule you need. The team confirms suitable options, availability and written terms for your enquiry.'}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href={`/${locale}/contact/`} className="rounded-full bg-primary-900 px-5 py-3 text-sm font-bold text-white">{ar ? 'تواصل مع عناية' : 'Contact INAYA'}</Link>
            <Link href={`/${locale}/maid-services-ajman/`} className="rounded-full border border-accent-500/40 px-5 py-3 text-sm font-bold text-primary-900">{ar ? 'زيارة مكتب عجمان والخدمات' : 'Ajman office and services'}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
