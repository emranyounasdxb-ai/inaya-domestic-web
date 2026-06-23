import { useTranslations } from 'next-intl';

export default function BlogPage() {
  const t = useTranslations('blog');
  return (
    <section className="section">
      <div className="container-x text-center">
        <h1 className="heading">{t('title')}</h1>
        <p className="mt-3 text-gray-600">{t('subtitle')}</p>
        <div className="mt-12 rounded-2xl border border-dashed border-gray-300 p-16 text-gray-500">{t('comingSoon')}</div>
      </div>
    </section>
  );
}
