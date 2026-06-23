import { useTranslations } from 'next-intl';

export default function PrivacyPage() {
  const t = useTranslations('legal');
  return (
    <section className="section">
      <div className="container-x max-w-3xl">
        <h1 className="heading">{t('privacyTitle')}</h1>
        <p className="mt-2 text-sm text-gray-500">{t('lastUpdated')}: 2026</p>
        <div className="mt-6 space-y-4 text-gray-700">
          <p>We respect your privacy. Any personal information you provide through our forms (name, phone, email) is used only to process your service request and contact you. We do not sell or share your data with third parties except as required to deliver our services.</p>
          <p>By using this website you consent to the collection and use of information in accordance with this policy. For any privacy concerns, contact us anytime.</p>
        </div>
      </div>
    </section>
  );
}
