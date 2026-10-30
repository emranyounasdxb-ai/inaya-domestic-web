import {
  CURATED_GOOGLE_REVIEWS,
  GOOGLE_REVIEWS_VIEW_URL,
  GOOGLE_REVIEWS_WRITE_URL,
} from '@/lib/curated-google-reviews';

const copy = {
  en: {
    title: 'Selected reviews from INAYA on Google',
    selection: 'These six written five-star reviews are selected from INAYA’s Google listing. They include customer and applicant feedback; they are not the complete review history, a live feed or an overall rating.',
    context: 'Read the full listing for other experiences and current ratings. Each review describes the writer’s own experience and does not promise the same outcome for another service.',
    view: 'Read reviews on Google',
    write: 'Write an honest Google review',
    source: 'Source: INAYA’s Google listing',
    stars: '5 out of 5 stars — this individual review',
    translation: 'Arabic translation by INAYA; the original English is available below.',
    original: 'Read the original English review',
  },
  ar: {
    title: 'تقييمات مختارة من ملف عناية على Google',
    selection: 'هذه ستة تقييمات مكتوبة من فئة خمس نجوم مختارة من ملف عناية على Google. وتشمل آراء عملاء ومتقدمين للعمل؛ وليست سجل التقييمات الكامل أو عرضاً مباشراً أو تقييماً إجمالياً.',
    context: 'راجع الملف الكامل للاطلاع على تجارب أخرى والتقييمات الحالية. يصف كل تقييم تجربة كاتبه ولا يضمن النتيجة نفسها لخدمة أخرى.',
    view: 'اقرأ التقييمات على Google',
    write: 'اكتب تقييماً صادقاً على Google',
    source: 'المصدر: ملف عناية على Google',
    stars: '5 من 5 نجوم — لهذا التقييم الفردي',
    translation: 'ترجمة عربية من عناية؛ النص الإنجليزي الأصلي متاح أدناه.',
    original: 'اقرأ التقييم الإنجليزي الأصلي',
  },
};

export default function GoogleReviewsHub({ locale }: { locale: string }) {
  const lang = locale === 'ar' ? 'ar' : 'en';
  const t = copy[lang];

  return (
    <section aria-labelledby="selected-google-reviews" className="mt-10 border-y border-primary-900/10 py-8" data-reviews-hub>
      <h2 id="selected-google-reviews" className={`${lang === 'ar' ? 'font-arabic' : 'font-heading'} text-2xl font-bold leading-snug sm:text-3xl`}>{t.title}</h2>
      <p className="mt-4 max-w-4xl text-base leading-7 text-primary-900/80">{t.selection}</p>
      <p className="mt-3 max-w-4xl text-sm leading-7 text-primary-900/70">{t.context}</p>
      <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
        <a href={GOOGLE_REVIEWS_VIEW_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-full bg-primary-900 px-5 py-3 text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-900">{t.view}</a>
        <a href={GOOGLE_REVIEWS_WRITE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center px-1 py-3 underline decoration-accent-500 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-900">{t.write}</a>
      </div>
      <div className="mt-8 grid items-start gap-5 md:grid-cols-2 xl:grid-cols-3">
        {CURATED_GOOGLE_REVIEWS.map(review => (
          <article key={review.id} data-review-id={review.id} className="min-w-0 rounded-2xl border border-primary-900/10 bg-white p-5 sm:p-6">
            <h3 className="text-base font-bold leading-6" dir="auto">{review.name}</h3>
            <p className="mt-2 text-sm tracking-wider text-[#8f681d]" aria-label={t.stars}><span aria-hidden="true">★★★★★</span></p>
            <blockquote className="mt-4 break-words text-base leading-7 text-primary-900/85" lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>{lang === 'ar' ? review.textAr : review.text}</blockquote>
            {lang === 'ar' && <>
              <p className="mt-4 text-sm leading-6 text-primary-900/65">{t.translation}</p>
              <details data-original-review="true" className="mt-3 text-sm leading-7">
                <summary className="cursor-pointer font-semibold underline decoration-accent-500 underline-offset-4">{t.original}</summary>
                <blockquote lang="en" dir="ltr" className="mt-3 break-words text-primary-900/80">{review.text}</blockquote>
              </details>
            </>}
            <p className="mt-5 text-xs leading-6 text-primary-900/65">{t.source}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
