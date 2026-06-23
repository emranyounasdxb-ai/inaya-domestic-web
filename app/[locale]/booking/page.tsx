import { useTranslations } from 'next-intl';
import BookingForm from '@/components/BookingForm';

export default function BookingPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('booking');
  return (
    <section className="section">
      <div className="container-x max-w-3xl">
        <div className="mb-10 text-center">
          <h1 className="heading">{t('title')}</h1>
          <p className="mt-3 text-gray-600">{t('subtitle')}</p>
        </div>
        <BookingForm locale={locale} />
      </div>
    </section>
  );
}
