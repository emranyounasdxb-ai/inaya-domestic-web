import Link from 'next/link';
import { guideContent } from '@/lib/guide-content';

export default function GuideContent({ locale, route }: { locale: string; route: string }) {
  const guide = guideContent[route];
  if (!guide) return null;
  const lang = locale === 'ar' ? 'ar' : 'en';
  return <section data-content="practical-guide" className="mx-auto mt-10 max-w-6xl rounded-[26px] border border-white/80 bg-white/80 p-7 text-primary-900 shadow-[0_18px_55px_rgba(7,22,74,0.06)]">
    <h2 className="font-heading text-2xl font-bold">{guide.title[lang]}</h2>
    <div className="mt-6 grid gap-5 lg:grid-cols-3">
      {guide.sections.map((section) => <article key={section.route}>
        <h3 className="font-heading text-xl font-bold"><Link href={`/${locale}/${section.route}/`} className="underline decoration-accent-500/50 underline-offset-4">{section.title[lang]}</Link></h3>
        <p className="mt-3 text-sm leading-7 text-primary-900/75">{section.body[lang]}</p>
      </article>)}
    </div>
  </section>;
}
