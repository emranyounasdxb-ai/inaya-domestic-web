import Inline from './BlogInlineText';
import ArticleEditorialNote from './ArticleEditorialNote';
import RelatedBlogCards from './RelatedBlogCards';
import { createBlogInlineParser } from '@/lib/blog-context-links';
import Link from 'next/link';
import BlogImage from './BlogImage';
import PageBreadcrumbs from './PageBreadcrumbs';
import RouteSeo from './RouteSeo';
import KeywordArticleVisual from './KeywordArticleVisual';
import { keywordArticleBlocks } from '@/lib/keyword-article-markdown';
import type { KeywordArticle } from '@/lib/keyword-article-types';

export default function KeywordArticlePage({article,lang}:{article:KeywordArticle;lang:'en'|'ar'}) {
  const ar=lang==='ar',copy=article[lang],route=`blog/${article.slug}`;
  const blocks=keywordArticleBlocks(copy.body);
  const linkedInline=createBlogInlineParser(article.slug,lang,copy.body);
  const headings=blocks.filter(block=>block.type==='heading');
  const visuals=Object.fromEntries(copy.visuals.map(visual=>[visual.id,visual]));
  const font=ar?'font-arabic':'font-heading';
  const contents=<ol className="mt-4 space-y-3 text-sm leading-7">{headings.map(heading=><li key={heading.id}><a href={`#${heading.id}`} className="underline decoration-accent-500/60 underline-offset-4 hover:text-accent-700">{heading.text}</a></li>)}</ol>;
  return <div lang={lang} dir={ar?'rtl':'ltr'} className="bg-ivory text-primary-900">
    <RouteSeo locale={lang} route={route} />
    <section data-blog-hero="true" className="container-x pb-10 pt-12 sm:pt-16">
      <div className="mx-auto max-w-4xl text-center">
        <Link href={`/${lang}/blog/`} className="text-sm font-semibold underline decoration-accent-500/70 underline-offset-4">{ar?'أدلة العائلات':'Family guides'}</Link>
        <h1 className={`mt-6 text-3xl font-bold sm:text-4xl lg:text-5xl ${font} ${ar?'leading-[1.6]':'leading-[1.2]'}`}>{copy.title}</h1>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-primary-900/80">{copy.description}</p>
        <dl className="mt-6 flex flex-wrap justify-center gap-x-7 gap-y-2 text-sm leading-7" data-guide="attribution">
          <div><dt className="font-semibold">{ar?'إعداد':'By'}</dt><dd>{ar?'فريق تحرير عناية للعمالة المنزلية':'INAYA Domestic Workers Editorial Team'}</dd></div>
          <div><dt className="font-semibold">{ar?'تاريخ النشر':'Published'}</dt><dd><time dateTime={article.published}>{article.published}</time></dd></div>
          <div><dt className="font-semibold">{ar?'آخر تحديث':'Updated'}</dt><dd><time dateTime={article.updated}>{article.updated}</time></dd></div>
        </dl>
        <p className="mt-4"><Link href={`/${ar?'en':'ar'}/blog/${article.slug}/`} hrefLang={ar?'en':'ar'} className="text-sm font-semibold underline decoration-accent-500/70 underline-offset-4">{ar?'اقرأ هذا المقال بالإنجليزية':'Read this article in Arabic'}</Link></p>
        <BlogImage slug={article.slug} locale={lang} hero className="mt-8 rounded-3xl border border-primary-900/10" />
        <ArticleEditorialNote lang={lang} />
      </div>
    </section>
    <PageBreadcrumbs locale={lang} route={route} />
    <div data-blog-layout={article.slug} className="container-x grid max-w-6xl gap-7 pb-20 pt-6 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-10">
      <details className="rounded-2xl border border-primary-900/10 bg-white p-5 lg:hidden"><summary className="cursor-pointer font-semibold">{ar?'في هذا المقال':'In this article'}</summary>{contents}</details>
      <article data-keyword-article={article.id} className={`min-w-0 rounded-3xl border border-primary-900/10 bg-white/85 px-5 py-7 [overflow-wrap:anywhere] sm:px-9 sm:py-9 ${ar?'font-arabic text-[17px] leading-[2.1]':'text-base leading-8'}`}>
        {blocks.map((block,index)=>{
          if(block.type==='heading')return <h2 key={index} id={block.id} className={`mb-5 mt-10 scroll-mt-24 border-t border-accent-500/30 pt-7 text-2xl font-bold leading-snug ${font}`}><Inline text={block.text}/></h2>;
          if(block.type==='subheading')return <h3 key={index} id={block.id} className="mb-3 mt-7 scroll-mt-24 text-lg font-bold leading-8"><Inline text={block.text}/></h3>;
          if(block.type==='paragraph')return <p key={index} className="mb-5 text-primary-900/85"><Inline text={block.text} parse={linkedInline}/></p>;
          if(block.type==='list')return <ul key={index} className="mb-6 list-disc space-y-3 ps-6">{block.items.map((item,n)=><li key={n}><Inline text={item} parse={linkedInline}/></li>)}</ul>;
          if(block.type==='visual') {
            const visual=visuals[block.visualId];
            if(!visual)throw new Error(`Missing reviewed visual: ${article.id}/${lang}/${block.visualId}`);
            return <KeywordArticleVisual key={index} visual={visual} lang={lang} id={`${article.id}-${lang}-${visual.id}`}/>;
          }
          return <div key={index} role="region" aria-labelledby={block.headingId} tabIndex={0} className="mb-7 max-w-full overflow-x-auto rounded-2xl border border-primary-900/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-700"><table aria-labelledby={block.headingId} className="w-full min-w-[36rem] border-collapse text-start text-sm leading-7"><thead className="bg-primary-900/5"><tr>{block.columns.map((column,n)=><th key={n} scope="col" className="px-5 py-4 text-start align-top font-semibold"><Inline text={column}/></th>)}</tr></thead><tbody>{block.rows.map((row,n)=><tr key={n} className="even:bg-ivory/50">{row.map((cell,c)=>c===0?<th key={c} scope="row" className="border-t border-primary-900/10 px-5 py-4 text-start align-top font-semibold"><Inline text={cell}/></th>:<td key={c} className="border-t border-primary-900/10 px-5 py-4 align-top"><Inline text={cell}/></td>)}</tr>)}</tbody></table></div>;
        })}
        <section data-keyword-references="true" className="mt-8 border-t border-primary-900/10 pt-6"><h2 className="text-xl font-bold">{ar?'المراجع الرسمية':'Official references'}</h2><ul className="mt-4 list-disc space-y-3 ps-5 text-sm leading-7">{copy.references.map(reference=><li key={reference.url}><a href={reference.url} className="underline decoration-accent-500/70 underline-offset-4">{reference.title}</a></li>)}</ul></section>
      </article>
      <aside className="min-w-0 space-y-6 "><nav aria-label={ar?'محتويات المقال':'Article contents'} className="hidden rounded-2xl border border-primary-900/10 bg-white p-6 lg:block"><h2 className="text-lg font-bold">{ar?'في هذا المقال':'In this article'}</h2>{contents}</nav><section className="rounded-2xl border border-primary-900/10 bg-white p-6"><h2 className="text-lg font-bold">{ar?'ناقش احتياج أسرتك':'Discuss your household needs'}</h2><p className="mt-4 text-sm leading-7">{ar?'أكد النطاق والتوفر والشروط المكتوبة مع فريق عناية.':'Confirm the scope, availability and written terms with the INAYA team.'}</p><Link href={`/${lang}/contact/`} className="mt-4 inline-block font-semibold underline decoration-accent-500/70 underline-offset-4">{ar?'تواصل مع عناية':'Contact INAYA'}</Link></section><RelatedBlogCards slug={article.slug} lang={lang}/></aside>
    </div>
  </div>;
}
