import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('about');
  return (
    <section className="section">
      <div className="container-x max-w-4xl">
        <h1 className="heading text-center">{t('title')}</h1>
        <p className="mt-3 text-center text-gray-600">{t('subtitle')}</p>
        <div className="mt-10 space-y-5 text-gray-700">
          <p>{t('p1')}</p>
          <p>{t('p2')}</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold text-primary-700">{t('missionTitle')}</h3>
            <p className="text-sm text-gray-600">{t('mission')}</p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold text-primary-700">{t('visionTitle')}</h3>
            <p className="text-sm text-gray-600">{t('vision')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
