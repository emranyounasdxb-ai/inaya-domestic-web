import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageBreadcrumbs from '@/components/PageBreadcrumbs';
import RouteSeo from '@/components/RouteSeo';
import { domesticWorkerGuides, getDomesticWorkerGuide, type GuideLanguage } from '@/lib/domestic-worker-guides';
import { pageMetadata } from '@/lib/page-seo';

type GuideParams = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return domesticWorkerGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: GuideParams }): Promise<Metadata> {
  const { locale, slug } = await params;
  return pageMetadata(locale, `blog/${slug}`);
}

export default async function DomesticWorkerGuidePage({ params }: { params: GuideParams }) {
  const { locale, slug } = await params;
  const guide = getDomesticWorkerGuide(slug);
  if (!guide) notFound();

  const lang: GuideLanguage = locale === 'ar' ? 'ar' : 'en';
  const isArabic = lang === 'ar';
  const copy = guide[lang];
  const route = `blog/${slug}`;

  return (
    <div className="overflow-hidden bg-ivory text-ink" dir={isArabic ? 'rtl' : 'ltr'}>
      <RouteSeo locale={locale} route={route} />
      <section className="relative overflow-hidden pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(191,164,106,0.20),transparent_28rem),radial-gradient(circle_at_10%_48%,rgba(7,22,74,0.10),transparent_26rem)]" />
        <div className="container-x relative">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-700/10 bg-white/65 px-4 py-2 text-xs font-semibold text-primary-900 shadow-sm backdrop-blur-xl sm:text-sm">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent-500" />
              {isArabic ? 'دليل العائلات' : 'Family guide'}
            </span>
            <h1 className={`mx-auto mt-6 max-w-4xl font-bold text-primary-900 ${isArabic ? 'font-arabic text-4xl leading-[1.32] sm:text-5xl' : 'font-heading text-4xl leading-[1.08] sm:text-5xl'}`}>
              {copy.title}
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-ink/75 sm:text-lg">{copy.lead}</p>
          </div>
        </div>
      </section>
      <PageBreadcrumbs locale={locale} route={route} />

      <div className="container-x grid max-w-6xl gap-10 pb-20 pt-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-14">
        <article className="space-y-12">
          {copy.sections.map((section) => (
            <section key={section.heading}>
              <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-2xl font-bold leading-snug text-primary-900 sm:text-3xl`}>{section.heading}</h2>
              <div className="mt-4 h-px w-16 bg-accent-500/70" />
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-5 text-base leading-8 text-primary-900/80">{paragraph}</p>
              ))}
              {section.points?.length ? (
                <ul className="mt-5 list-disc space-y-3 ps-6 text-base leading-8 text-primary-900/80">
                  {section.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              ) : null}
            </section>
          ))}
        </article>

        <aside className="space-y-7 lg:sticky lg:top-8 lg:self-start">
          <section className="glass-panel rounded-[24px] p-6">
            <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-xl font-bold text-primary-900`}>
              {isArabic ? 'خطوات ومعلومات مرتبطة' : 'Related next steps'}
            </h2>
            <ul className="mt-5 space-y-3">
              {copy.nextSteps.map((step) => (
                <li key={step.route}>
                  <Link className="font-semibold leading-7 text-primary-900 underline decoration-accent-500/70 underline-offset-4 hover:text-accent-700" href={`/${locale}/${step.route}/`}>
                    {step.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section className="glass-panel rounded-[24px] p-6">
            <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-xl font-bold text-primary-900`}>{copy.sourceIntro}</h2>
            <ul className="mt-5 space-y-3">
              {guide.sources.map((source) => (
                <li key={source.url}>
                  <a className="text-sm font-semibold leading-6 text-primary-900 underline decoration-accent-500/70 underline-offset-4 hover:text-accent-700" href={source.url} target="_blank" rel="noopener noreferrer">
                    {source[lang]}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-6 text-primary-900/70">
              {isArabic ? 'تحقق من المتطلبات الرسمية الحالية للحالة قبل تقديم الطلب.' : 'Check the current official requirements for your case before applying.'}
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
