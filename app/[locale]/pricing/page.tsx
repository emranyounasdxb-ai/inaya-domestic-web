import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function PricingPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('pricing');
  const plans = [
    { name: t('perHour'), price: 'AED 35', features: ['Part-time', 'Flexible hours', 'Verified staff'], popular: false },
    { name: t('perMonth'), price: 'AED 1500', features: ['Full-time', 'Replacement guarantee', 'Priority support'], popular: true },
    { name: t('perMonth'), price: 'AED 2500', features: ['Live-in maid', 'Visa assistance', '24/7 support'], popular: false }
  ];
  return (
    <section className="section">
      <div className="container-x">
        <div className="mb-10 text-center">
          <h1 className="heading">{t('title')}</h1>
          <p className="mt-3 text-gray-600">{t('subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <div key={i} className={`relative rounded-2xl border bg-white p-8 shadow-sm ${p.popular ? 'border-primary-600 ring-2 ring-primary-600' : 'border-gray-100'}`}>
              {p.popular && <span className="absolute -top-3 start-6 rounded-full bg-primary-600 px-3 py-1 text-xs font-semibold text-white">{t('popular')}</span>}
              <div className="text-3xl font-bold text-gray-900">{p.price}<span className="text-base font-normal text-gray-500"> {p.name}</span></div>
              <ul className="mt-6 space-y-3 text-sm text-gray-600">
                {p.features.map((f) => <li key={f}>✅ {f}</li>)}
              </ul>
              <Link href={`/${locale}/booking`} className="btn-primary mt-8 w-full">{t('choose')}</Link>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-gray-500">{t('note')}</p>
      </div>
    </section>
  );
}
