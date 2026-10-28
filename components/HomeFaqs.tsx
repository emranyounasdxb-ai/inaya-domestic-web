import Link from 'next/link';
import { getHomeFaqs } from '@/lib/home-faqs';

export default function HomeFaqs({ locale }: { locale: string }) {
  const ar = locale === 'ar';

  return (
    <section className="px-6 py-14 lg:px-10" aria-labelledby="home-faq-heading">
      <div className="mx-auto max-w-6xl">
        <h2 id="home-faq-heading" className={`${ar ? 'font-arabic' : 'font-heading'} text-2xl font-bold text-primary-900 sm:text-3xl`}>
          {ar ? 'أسئلة عن خدمات عناية في عجمان' : 'Questions about INAYA’s services in Ajman'}
        </h2>
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {getHomeFaqs(locale).map(({ question, answer }) => (
            <article key={question} className="rounded-2xl border border-primary-900/10 bg-white/75 p-6">
              <h3 className={`${ar ? 'font-arabic' : 'font-heading'} text-lg font-bold leading-7 text-primary-900`}>{question}</h3>
              <p className="mt-3 text-sm leading-7 text-primary-900/80">{answer}</p>
            </article>
          ))}
        </div>
        <Link href={`/${locale}/faq/`} className="mt-6 inline-flex min-h-11 items-center font-semibold text-primary-900 underline underline-offset-4">
          {ar ? 'جميع الأسئلة الشائعة' : 'All frequently asked questions'}
        </Link>
      </div>
    </section>
  );
}
