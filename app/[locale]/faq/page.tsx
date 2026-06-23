import { useTranslations } from 'next-intl';
import FaqAccordion from '@/components/FaqAccordion';

export default function FaqPage() {
  const t = useTranslations('faq');
  const items = [1, 2, 3, 4, 5].map((n) => ({ q: t(`q${n}` as any), a: t(`a${n}` as any) }));
  return (
    <section className="section">
      <div className="container-x">
        <div className="mb-10 text-center">
          <h1 className="heading">{t('title')}</h1>
          <p className="mt-3 text-gray-600">{t('subtitle')}</p>
        </div>
        <FaqAccordion items={items} />
      </div>
    </section>
  );
}
