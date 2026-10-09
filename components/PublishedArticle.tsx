import Link from 'next/link';
import PageBreadcrumbs from './PageBreadcrumbs';
import RouteSeo from './RouteSeo';
import { articleBlocks, articleInline } from '@/lib/article-markdown';
import { guideAuthor, type DomesticWorkerGuide, type GuideLanguage } from '@/lib/domestic-worker-guides';
import { siteConfig } from '@/lib/site-config';

function Inline({ text }: { text: string }) {
  return articleInline(text).map((part, index) => part.type === 'link'
    ? <a key={index} href={part.href} className="font-medium text-primary-900 underline decoration-accent-600/70 decoration-1 underline-offset-4 transition hover:text-accent-700 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-700">{part.text}</a>
    : part.type === 'strong' ? <strong key={index} className="font-semibold text-primary-900">{part.text}</strong>
    : part.text);
}

export default function PublishedArticle({ guide, lang }: { guide: DomesticWorkerGuide; lang: GuideLanguage }) {
  const isArabic = lang === 'ar';
  const copy = guide[lang];
  const blocks = articleBlocks(copy.body!);
  const headings = blocks.filter((block) => block.type === 'heading');
  const route = `blog/${guide.slug}`;
  const formatDate = (value: string) => new Intl.DateTimeFormat(isArabic ? 'ar-AE' : 'en-AE', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'
  }).format(new Date(`${value}T00:00:00Z`));
  const headingFont = isArabic ? 'font-arabic' : 'font-heading';
  const contents = <ol className="mt-5 space-y-3 text-sm leading-7 text-primary-900/80">{headings.map((heading) => <li key={heading.id}><a href={`#${heading.id}`} className="block rounded-sm underline decoration-accent-500/50 underline-offset-4 transition hover:text-accent-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-700">{heading.text}</a></li>)}</ol>;

  return (
    <div className="bg-ivory text-ink" dir={isArabic ? 'rtl' : 'ltr'} lang={lang}>
      <RouteSeo locale={lang} route={route} />
      <section className="relative overflow-hidden pb-10 pt-12 sm:pb-14 sm:pt-16 lg:pt-20">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_74%_18%,rgba(191,164,106,0.20),transparent_28rem),radial-gradient(circle_at_10%_48%,rgba(7,22,74,0.10),transparent_26rem)]" />
        <div className="container-x relative">
          <div className="mx-auto max-w-4xl text-center">
            <Link href={`/${lang}/blog/`} className="inline-flex rounded-full border border-primary-700/10 bg-white/65 px-4 py-2 text-xs font-semibold text-primary-900 shadow-sm transition hover:border-accent-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-700 sm:text-sm">{isArabic ? 'أدلة العائلات' : 'Family guides'}</Link>
            <h1 className={`mt-6 text-3xl font-bold text-primary-900 sm:text-4xl lg:text-5xl ${headingFont} ${isArabic ? 'leading-[1.55]' : 'leading-[1.18]'}`}>{copy.title}</h1>
            <dl className="mt-7 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm leading-7 text-primary-900/75" data-guide="attribution">
              <div><dt className="font-semibold">{isArabic ? 'إعداد' : 'By'}</dt><dd>{guide.author?.[lang] ?? guideAuthor}</dd></div>
              <div><dt className="font-semibold">{isArabic ? 'تاريخ النشر' : 'Published'}</dt><dd><time dateTime={guide.published}>{formatDate(guide.published)}</time></dd></div>
              <div><dt className="font-semibold">{isArabic ? 'آخر تحديث' : 'Updated'}</dt><dd><time dateTime={guide.updated}>{formatDate(guide.updated)}</time></dd></div>
            </dl>
          </div>
        </div>
      </section>
      <PageBreadcrumbs locale={lang} route={route} />

      <div className="container-x grid max-w-6xl gap-7 pb-16 pt-6 sm:pb-20 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-10">
        <details className="glass-panel rounded-[24px] p-5 lg:hidden">
          <summary className={`cursor-pointer text-lg font-bold text-primary-900 ${headingFont}`}>{isArabic ? 'في هذا المقال' : 'In this article'}</summary>
          {contents}
        </details>
        <article data-published-article="content" className={`min-w-0 rounded-[24px] border border-primary-900/10 bg-white/85 px-5 pb-8 pt-7 shadow-[0_18px_55px_rgba(7,22,74,0.04)] [overflow-wrap:anywhere] sm:px-9 sm:pb-12 sm:pt-9 ${isArabic ? 'font-arabic text-[17px] leading-[2.1]' : 'text-base leading-8'}`}>
          {blocks.map((block, index) => {
            if (block.type === 'heading') return <h2 key={index} id={block.id} className={`mb-5 mt-10 scroll-mt-24 border-t border-accent-500/30 pt-8 text-2xl font-bold leading-snug text-primary-900 sm:text-[28px] ${headingFont}`}><Inline text={block.text} /></h2>;
            if (block.type === 'paragraph') return <p key={index} className={`mb-5 text-primary-900/85 ${index === 0 ? 'text-lg font-medium leading-[1.9]' : ''}`}><Inline text={block.text} /></p>;
            if (block.type === 'list') return <ul key={index} className="mb-6 list-disc space-y-3 ps-6 text-primary-900/85 marker:text-accent-700">{block.items.map((item, itemIndex) => <li key={itemIndex} className="ps-1"><Inline text={item} /></li>)}</ul>;
            return <div key={index} role="region" aria-labelledby={block.headingId} tabIndex={0} className="mb-7 max-w-full overflow-x-auto rounded-2xl border border-primary-900/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-700">
              <table aria-labelledby={block.headingId} className="w-full min-w-[36rem] border-collapse text-start text-sm leading-7 text-primary-900">
                <thead className="bg-primary-900/5"><tr>{block.columns.map((column, columnIndex) => <th key={columnIndex} scope="col" className="px-5 py-4 text-start align-top font-semibold"><Inline text={column} /></th>)}</tr></thead>
                <tbody>{block.rows.map((row, rowIndex) => <tr key={rowIndex} className="even:bg-ivory/45">{row.map((cell, columnIndex) => columnIndex === 0
                  ? <th key={columnIndex} scope="row" className="border-t border-primary-900/10 px-5 py-4 text-start align-top font-semibold"><Inline text={cell} /></th>
                  : <td key={columnIndex} className="border-t border-primary-900/10 px-5 py-4 align-top"><Inline text={cell} /></td>)}</tr>)}</tbody>
              </table>
            </div>;
          })}
        </article>

        <aside className="min-w-0 space-y-6 lg:sticky lg:top-20 lg:self-start">
          <nav aria-label={isArabic ? 'محتويات المقال' : 'Article contents'} className="glass-panel hidden rounded-[24px] p-6 lg:block">
            <h2 className={`text-xl font-bold text-primary-900 ${headingFont}`}>{isArabic ? 'في هذا المقال' : 'In this article'}</h2>
            {contents}
          </nav>
          <section className="glass-panel rounded-[24px] p-6">
            <h2 className={`text-xl font-bold text-primary-900 ${headingFont}`}>{isArabic ? 'تواصل مع عناية' : 'Contact INAYA'}</h2>
            <ul className="mt-5 space-y-4 text-sm font-semibold leading-7 text-primary-900">
              <li><Link href={`/${lang}/contact/`} className="underline decoration-accent-500/70 underline-offset-4">{isArabic ? 'ناقش احتياجات أسرتك' : 'Discuss your household needs'}</Link></li>
              <li><a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="underline decoration-accent-500/70 underline-offset-4">{isArabic ? 'اتصل بمكتب عناية' : 'Call INAYA’s office'}</a></li>
              <li><a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="underline decoration-accent-500/70 underline-offset-4">{isArabic ? 'تواصل عبر واتساب' : 'Enquire on WhatsApp'}</a></li>
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
}
