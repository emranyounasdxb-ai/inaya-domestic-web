import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/lib/services';

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('home');
  const ts = useTranslations('services');

  return (
    <>
      <Hero locale={locale} />

      <section className="section">
        <div className="container-x">
          <div className="mb-12 text-center">
            <h2 className="heading">{t('servicesTitle')}</h2>
            <p className="mt-3 text-gray-600">{t('servicesSubtitle')}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s) => (
              <ServiceCard key={s.slug} service={s} locale={locale} cta={ts('learnMore')} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href={`/${locale}/services`} className="btn-outline">{t('viewAll')}</Link>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-x">
          <div className="mb-12 text-center">
            <h2 className="heading">{t('whyTitle')}</h2>
            <p className="mt-3 text-gray-600">{t('whySubtitle')}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: '✅', title: t('why1Title'), desc: t('why1Desc') },
              { icon: '🔄', title: t('why2Title'), desc: t('why2Desc') },
              { icon: '🛡️', title: t('why3Title'), desc: t('why3Desc') },
              { icon: '📄', title: t('why4Title'), desc: t('why4Desc') }
            ].map((w, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-3 text-3xl">{w.icon}</div>
                <h3 className="mb-2 font-semibold text-gray-900">{w.title}</h3>
                <p className="text-sm text-gray-600">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="rounded-3xl bg-gradient-to-r from-primary-700 to-primary-900 px-8 py-14 text-center text-white">
            <h2 className="text-3xl font-bold">{t('ctaTitle')}</h2>
            <p className="mx-auto mt-3 max-w-xl text-primary-100">{t('ctaSubtitle')}</p>
            <Link href={`/${locale}/booking`} className="btn-accent mt-6">{useTranslations('nav')('bookNow')}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
