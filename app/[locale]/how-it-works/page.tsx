import { useTranslations } from 'next-intl';

export default function HowItWorksPage() {
  const t = useTranslations('howItWorks');
  const steps = [1, 2, 3, 4].map((n) => ({ title: t(`step${n}Title` as any), desc: t(`step${n}Desc` as any) }));
  return (
    <section className="section">
      <div className="container-x">
        <div className="mb-12 text-center">
          <h1 className="heading">{t('title')}</h1>
          <p className="mt-3 text-gray-600">{t('subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-700 text-lg font-bold text-white">{i + 1}</div>
              <h3 className="mb-2 font-semibold text-gray-900">{s.title}</h3>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
