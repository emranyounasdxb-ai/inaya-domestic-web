import { useTranslations } from 'next-intl';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/lib/services';

export default function ServicesPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('services');
  return (
    <section className="section">
      <div className="container-x">
        <div className="mb-12 text-center">
          <h1 className="heading">{t('title')}</h1>
          <p className="mt-3 text-gray-600">{t('subtitle')}</p>
        </div>
        <h2 className="mb-6 text-xl font-semibold text-primary-700">{t('categoryDomestic')}</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} locale={locale} cta={t('learnMore')} />
          ))}
        </div>
      </div>
    </section>
  );
}
