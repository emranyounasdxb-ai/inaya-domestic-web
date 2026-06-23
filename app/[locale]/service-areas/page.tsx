import { useTranslations } from 'next-intl';

export default function ServiceAreasPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('serviceAreas');
  const areas = locale === 'ar'
    ? ['عجمان', 'الراشدية', 'النعيمية', 'الجرف', 'مدينة الإمارات', 'المويهات', 'الروضة', 'الحميدية']
    : ['Ajman City', 'Al Rashidiya', 'Al Nuaimiya', 'Al Jurf', 'Emirates City', 'Al Mowaihat', 'Al Rawda', 'Al Hamidiya'];
  return (
    <section className="section">
      <div className="container-x">
        <div className="mb-10 text-center">
          <h1 className="heading">{t('title')}</h1>
          <p className="mt-3 text-gray-600">{t('subtitle')}</p>
        </div>
        <p className="mx-auto mb-8 max-w-2xl text-center text-gray-700">{t('intro')}</p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {areas.map((a) => (
            <div key={a} className="rounded-xl border border-gray-100 bg-white p-5 text-center font-medium text-gray-800 shadow-sm">📍 {a}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
