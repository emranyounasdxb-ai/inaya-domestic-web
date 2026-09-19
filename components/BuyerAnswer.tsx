import Link from 'next/link';
import { buyerAnswers } from '@/lib/buyer-answers';
import { pageBreadcrumbs } from '@/lib/page-seo';
import { localizedUrl } from '@/lib/seo';

// Render after the existing page H1; never inject a heading before its hierarchy.
export default function BuyerAnswer({ locale, route }: { locale: string; route: string }) {
  const answer = buyerAnswers[route];
  if (!answer) return null;
  const lang = locale === 'ar' ? 'ar' : 'en';
  return <section data-content="buyer-answer" className="mx-auto max-w-6xl px-6 py-6 text-primary-900">
    <h2 className="font-heading text-xl font-bold">{answer.question[lang]}</h2>
    <p className="mt-2 text-sm leading-7">{answer.answer[lang]}</p>
    <Link className="text-sm underline" href={new URL(localizedUrl(locale, answer.detailRoute)).pathname}>{pageBreadcrumbs(locale, answer.detailRoute).at(-1)!.name}</Link>
  </section>;
}
