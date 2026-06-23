import { useTranslations } from 'next-intl';

export default function TermsPage() {
  const t = useTranslations('legal');
  return (
    <section className="section">
      <div className="container-x max-w-3xl">
        <h1 className="heading">{t('termsTitle')}</h1>
        <p className="mt-2 text-sm text-gray-500">{t('lastUpdated')}: 2026</p>
        <div className="mt-6 space-y-4 text-gray-700">
          <p>By booking a service with Inaya Domestic, you agree to provide accurate information and to treat our staff with respect. Service fees, timings and terms are confirmed at the time of booking.</p>
          <p>Inaya Domestic reserves the right to refuse or cancel service in cases of unsafe conditions or policy violations. Continued use of our services constitutes acceptance of these terms.</p>
        </div>
      </div>
    </section>
  );
}
