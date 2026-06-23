import { useTranslations } from 'next-intl';
import ReviewCard from '@/components/ReviewCard';

export default function ReviewsPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('reviews');
  const reviews = locale === 'ar'
    ? [
        { name: 'فاطمة', text: 'خدمة ممتازة وعمالة محترفة. أنصح بها بشدة.', rating: 5 },
        { name: 'أحمد', text: 'الخادمة مدربة جداً والتعامل رائع.', rating: 5 },
        { name: 'سارة', text: 'سريعون وموثوقون. تجربة رائعة.', rating: 4 }
      ]
    : [
        { name: 'Fatima', text: 'Excellent service and professional staff. Highly recommend.', rating: 5 },
        { name: 'Ahmed', text: 'The maid was very well trained and the process was smooth.', rating: 5 },
        { name: 'Sara', text: 'Fast and reliable. A great experience overall.', rating: 4 }
      ];
  return (
    <section className="section">
      <div className="container-x">
        <div className="mb-10 text-center">
          <h1 className="heading">{t('title')}</h1>
          <p className="mt-3 text-gray-600">{t('subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => <ReviewCard key={i} review={r} />)}
        </div>
      </div>
    </section>
  );
}
