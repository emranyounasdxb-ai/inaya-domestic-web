import { useTranslations } from 'next-intl';
import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/lib/site-config';

export default function ContactPage() {
  const t = useTranslations('contact');
  return (
    <section className="section">
      <div className="container-x grid gap-10 lg:grid-cols-2">
        <div>
          <h1 className="heading">{t('title')}</h1>
          <p className="mt-3 text-gray-600">{t('subtitle')}</p>
          <div className="mt-8 space-y-5">
            <div><div className="font-semibold text-gray-900">{t('addressTitle')}</div><p className="text-gray-600">{t('address')}</p></div>
            <div><div className="font-semibold text-gray-900">{t('phoneTitle')}</div><p className="text-gray-600" dir="ltr">{siteConfig.phone}</p></div>
            <div><div className="font-semibold text-gray-900">{t('emailTitle')}</div><p className="text-gray-600">{siteConfig.email}</p></div>
            <div><div className="font-semibold text-gray-900">{t('hoursTitle')}</div><p className="text-gray-600">{t('hours')}</p></div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
