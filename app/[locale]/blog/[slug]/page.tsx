import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageBreadcrumbs from '@/components/PageBreadcrumbs';
import RouteSeo from '@/components/RouteSeo';
import PublishedArticle from '@/components/PublishedArticle';
import { publishedArticles } from '@/lib/published-article-content';
import { domesticWorkerGuides, getDomesticWorkerGuide, guideAuthor, type GuideLanguage } from '@/lib/domestic-worker-guides';
import { pageMetadata } from '@/lib/page-seo';
import { siteConfig } from '@/lib/site-config';

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
  if (guide.publication) {
    const article = publishedArticles.find((entry) => entry.slug === slug);
    if (!article) notFound();
    return <PublishedArticle guide={guide} body={article[lang].body} lang={lang} />;
  }
  const route = `blog/${slug}`;
  const formatDate = (value: string) => new Intl.DateTimeFormat(isArabic ? 'ar-AE' : 'en-AE', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'
  }).format(new Date(`${value}T00:00:00Z`));

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
            <dl className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm leading-6 text-primary-900/75" data-guide="attribution">
              <div><dt className="font-semibold">{isArabic ? 'إعداد' : 'By'}</dt><dd><bdi>{guideAuthor}</bdi></dd></div>
              <div><dt className="font-semibold">{isArabic ? 'تاريخ النشر' : 'Published'}</dt><dd><time dateTime={guide.published}>{formatDate(guide.published)}</time></dd></div>
              <div><dt className="font-semibold">{isArabic ? 'آخر تحديث' : 'Updated'}</dt><dd><time dateTime={guide.updated}>{formatDate(guide.updated)}</time></dd></div>
            </dl>
          </div>
        </div>
      </section>
      <PageBreadcrumbs locale={locale} route={route} />

      <div className="container-x grid max-w-6xl gap-10 pb-20 pt-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-14">
        <article className="min-w-0 space-y-12">
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
              {section.table ? (
                <div className="mt-6 overflow-x-auto rounded-2xl border border-primary-900/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-900" role="region" aria-label={section.table.caption} tabIndex={0}>
                  <table className="w-full min-w-[32rem] border-collapse text-start text-sm leading-7 text-primary-900">
                    <caption className="bg-white/60 px-5 py-4 text-start font-semibold">{section.table.caption}</caption>
                    <thead className="bg-primary-900/5"><tr>{section.table.columns.map((column) => <th key={column} scope="col" className="border-t border-primary-900/15 px-5 py-3 text-start font-semibold">{column}</th>)}</tr></thead>
                    <tbody>{section.table.rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0
                      ? <th key={index} scope="row" className="border-t border-primary-900/15 px-5 py-3 text-start align-top font-semibold">{cell}</th>
                      : <td key={index} className="border-t border-primary-900/15 px-5 py-3 align-top">{cell}</td>)}</tr>)}</tbody>
                  </table>
                </div>
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
              <li><a className="font-semibold leading-7 text-primary-900 underline decoration-accent-500/70 underline-offset-4 hover:text-accent-700" href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>{isArabic ? 'اتصل بمكتب عناية' : 'Call INAYA’s office'}</a></li>
              <li><a className="font-semibold leading-7 text-primary-900 underline decoration-accent-500/70 underline-offset-4 hover:text-accent-700" href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">{isArabic ? 'ناقش استفسارك عبر واتساب' : 'Discuss your enquiry on WhatsApp'}</a></li>
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
              {copy.sourceNote}
            </p>
          </section>
        </aside>
      </div>
    </div>
  );
}
