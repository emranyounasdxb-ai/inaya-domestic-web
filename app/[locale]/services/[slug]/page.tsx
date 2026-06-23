import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { services, getService } from '@/lib/services';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params: { locale, slug }
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const service = getService(slug);
  if (!service) return {};
  const lang = locale === 'ar' ? 'ar' : 'en';
  return { title: service.name[lang], description: service.short[lang] };
}

export default async function ServiceDetailPage({
  params: { locale, slug }
}: {
  params: { locale: string; slug: string };
}) {
  const service = getService(slug);
  if (!service) notFound();
  const lang = locale === 'ar' ? 'ar' : 'en';
  const t = await getTranslations('services');

  return (
    <section className="section">
      <div className="container-x max-w-3xl">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-4xl">
          {service.icon}
        </div>
        <h1 className="heading">{service.name[lang]}</h1>
        <p className="mt-5 text-lg leading-relaxed text-gray-700">{service.description[lang]}</p>
        <div className="mt-8 flex gap-4">
          <Link href={`/${locale}/booking`} className="btn-accent">{t('bookThis')}</Link>
          <Link href={`/${locale}/services`} className="btn-outline">{t('title')}</Link>
        </div>
      </div>
    </section>
  );
}
