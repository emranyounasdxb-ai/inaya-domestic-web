import { useTranslations } from 'next-intl';

export default function RefundPage() {
  const t = useTranslations('legal');
  return (
    <section className="section">
      <div className="container-x max-w-3xl">
        <h1 className="heading">{t('refundTitle')}</h1>
        <p className="mt-2 text-sm text-gray-500">{t('lastUpdated')}: 2026</p>
        <div className="mt-6 space-y-4 text-gray-700">
          <p>If you are not satisfied with the assigned worker, we offer a free replacement within the agreed contract period as per our replacement policy. Replacement requests should be raised within a reasonable time and are subject to availability.</p>
          <p>Refunds, where applicable, are processed according to the service agreement. Please contact our support team to discuss replacement or refund requests.</p>
        </div>
      </div>
    </section>
  );
}
