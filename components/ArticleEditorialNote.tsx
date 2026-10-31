import Link from 'next/link';

export const editorialScopeCopy = {
  en: {
    title: 'Content dates and scope',
    body: 'The dates above record publication and content updates. This INAYA guide provides general service information and practical preparation points. Use the cited official sources to check requirements for your case and confirm INAYA’s service details through the company’s official contacts.',
    careersBody: 'The dates above record publication and content updates. This company page provides recruitment information and application guidance. Confirm current vacancies, role requirements and application arrangements through INAYA’s official contacts.',
    link: 'Confirm INAYA service details',
    careersLink: 'Confirm current vacancies',
  },
  ar: {
    title: 'تواريخ المحتوى ونطاقه',
    body: 'توضح التواريخ أعلاه وقت النشر وتحديث المحتوى. يقدم دليل عناية معلومات عامة عن الخدمات ونقاطاً عملية للاستعداد. راجع المصادر الرسمية المذكورة للتحقق من متطلبات حالتك، وأكد تفاصيل خدمات عناية عبر وسائل التواصل الرسمية للشركة.',
    careersBody: 'توضح التواريخ أعلاه وقت النشر وتحديث المحتوى. تقدم هذه الصفحة معلومات عن التوظيف وإرشادات التقديم لدى عناية. أكد الشواغر الحالية ومتطلبات الدور وترتيبات التقديم عبر وسائل التواصل الرسمية لعناية.',
    link: 'أكد تفاصيل خدمات عناية',
    careersLink: 'تأكد من الشواغر الحالية',
  },
};

export default function ArticleEditorialNote({ lang, careers = false }: { lang: 'en' | 'ar'; careers?: boolean }) {
  const copy = editorialScopeCopy[lang];
  return <div role="note" data-editorial-scope="true" className="mx-auto mt-5 max-w-3xl border-t border-primary-900/10 pt-4 text-start text-sm leading-6 text-primary-900/75">
    <strong className="block font-semibold text-primary-900">{copy.title}</strong>
    <span className="mt-1 block">{careers ? copy.careersBody : copy.body}</span>
    <div className="mt-2 pr-20 lg:pr-0">
      <Link href={`/${lang}/contact/`} className="inline-flex min-h-11 max-w-full scroll-mb-24 items-center rounded-sm font-semibold underline decoration-accent-500/70 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-700">{careers ? copy.careersLink : copy.link}</Link>
    </div>
  </div>;
}
