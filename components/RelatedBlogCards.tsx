import Link from 'next/link';
import BlogImage from './BlogImage';
import { domesticWorkerGuides } from '@/lib/domestic-worker-guides';
import map from '@/content/blog-related-guides-20261029.json';

export default function RelatedBlogCards({ slug, lang }: { slug: string; lang: 'en' | 'ar' }) {
  const related = (map as Record<string, string[]>)[slug];
  if (!related) throw new Error(`Missing reviewed related guides for ${slug}`);
  return <section data-related-blog-cards={slug} className="glass-panel rounded-2xl p-4">
    <h2 className={`text-lg font-bold leading-7 text-primary-900 ${lang === 'ar' ? 'font-arabic' : 'font-heading'}`}>{lang === 'ar' ? 'أدلة مرتبطة بهذا الموضوع' : 'Related guides'}</h2>
    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
      {related.slice(0, 3).map(target => {
        const guide = domesticWorkerGuides.find(item => item.slug === target);
        if (!guide || target === slug) throw new Error(`Invalid related guide ${slug} → ${target}`);
        return <Link key={target} data-related-guide={target} href={`/${lang}/blog/${target}/`} className="flex min-w-0 flex-col gap-3 rounded-xl border border-primary-900/10 bg-white/80 p-3 transition-colors duration-300 hover:border-accent-700 active:bg-ivory focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-700 motion-reduce:transition-none">
          <BlogImage slug={target} locale={lang} variant="sidebar" className="w-full rounded-lg" />
          <h3 className={`break-words text-base font-semibold text-primary-900 [text-wrap:balance] ${lang === 'ar' ? 'font-arabic' : 'font-heading'}`}>{guide[lang].title}</h3>
        </Link>;
      })}
    </div>
  </section>;
}
