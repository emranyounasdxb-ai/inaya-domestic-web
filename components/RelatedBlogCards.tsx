import Link from 'next/link';
import BlogImage from './BlogImage';
import { domesticWorkerGuides } from '@/lib/domestic-worker-guides';
import map from '@/content/blog-related-guides-20261029.json';

export default function RelatedBlogCards({ slug, lang }: { slug: string; lang: 'en' | 'ar' }) {
  const related = (map as Record<string, string[]>)[slug];
  if (!related) throw new Error(`Missing reviewed related guides for ${slug}`);
  return <section data-related-blog-cards={slug} className="glass-panel rounded-[24px] p-5 lg:sticky lg:top-24">
    <h2 className={`text-lg font-bold leading-7 text-primary-900 ${lang === 'ar' ? 'font-arabic' : 'font-heading'}`}>{lang === 'ar' ? 'أدلة مرتبطة بهذا الموضوع' : 'Related guides'}</h2>
    <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
      {related.slice(0, 3).map(target => {
        const guide = domesticWorkerGuides.find(item => item.slug === target);
        if (!guide || target === slug) throw new Error(`Invalid related guide ${slug} → ${target}`);
        return <Link key={target} data-related-guide={target} href={`/${lang}/blog/${target}/`} className="grid min-h-20 grid-cols-[3.5rem_minmax(0,1fr)] items-start gap-3 rounded-2xl border border-primary-900/10 bg-white/80 p-3 transition hover:border-accent-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-700">
          <BlogImage slug={target} locale={lang} variant="sidebar" className="rounded-lg" />
          <span className={`break-words text-[13px] font-semibold leading-[1.6] text-primary-900 ${lang === 'ar' ? 'font-arabic' : ''}`}>{guide[lang].title}</span>
        </Link>;
      })}
    </div>
  </section>;
}
