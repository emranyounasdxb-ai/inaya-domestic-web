import type { Metadata } from 'next';
import Link from 'next/link';

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  return locale === 'ar'
    ? { title: 'الدول التي نوفر منها العمالة المنزلية | عناية', description: 'تعرّف على الدول التي توفر منها عناية العمالة المنزلية مثل الفلبين وإندونيسيا ونيبال وسريلانكا والهند وكينيا وأوغندا.' }
    : { title: 'Countries We Source Domestic Workers From | INAYA', description: 'Explore the countries INAYA sources domestic workers from including the Philippines, Indonesia, Nepal, Sri Lanka, India, Kenya and Uganda.' };
}

const countriesEn = [
  ['Philippines', 'English communication, childcare exposure, housekeeping experience and organized home routines.'],
  ['Indonesia', 'Housekeeping, family care, kitchen support and calm household routines.'],
  ['Nepal', 'Reliable cleaning routines, home organization and general domestic assistance.'],
  ['Sri Lanka', 'Housekeeping, meal support, cleaning routines and family assistance.'],
  ['India', 'Cooking support, cleaning, family assistance, language flexibility and household routines.'],
  ['Kenya / Uganda', 'Housekeeping, childcare exposure, English communication and home support.']
];

const countriesAr = [
  ['الفلبين', 'تواصل باللغة الإنجليزية وخبرة في رعاية الأطفال والتنظيف وتنظيم روتين المنزل.'],
  ['إندونيسيا', 'تنظيف ورعاية أسرية ودعم المطبخ وروتين منزلي هادئ ومنظم.'],
  ['نيبال', 'روتين تنظيف موثوق وتنظيم المنزل والمساعدة المنزلية العامة.'],
  ['سريلانكا', 'تنظيف ودعم الوجبات وروتين المنزل والمساعدة الأسرية.'],
  ['الهند', 'دعم الطبخ والتنظيف والمساعدة الأسرية والمرونة اللغوية وروتين المنزل.'],
  ['كينيا / أوغندا', 'تنظيف وخبرة حول الأطفال وتواصل بالإنجليزية ودعم منزلي.']
];

const en = {
  badge: 'Domestic Worker Source Countries',
  title: 'Domestic worker profiles matched by experience, language and family needs',
  lead: 'INAYA helps UAE families explore domestic worker options from multiple countries based on individual experience, communication, household skills, preferred duties and legal availability.',
  whyTitle: 'Why Source Country Matters',
  whyText: 'Different families may have preferences for language, cooking style, childcare exposure, elderly support, housekeeping experience or previous UAE and GCC experience.',
  noteTitle: 'Important Matching Note',
  noteText: 'Source country is only one part of the selection process. The right domestic worker should be matched based on individual skills, experience, documents, attitude, availability and suitability for the family.',
  help: ['Reviews your home size and household routine', 'Understands preferred language and communication needs', 'Discusses cleaning, laundry, cooking and childcare duties', 'Explains live-in, live-out, full-time and part-time options', 'Guides documents, visa status and process steps', 'Matches the profile to your family expectations'],
  faq: ['Can I choose the nationality of a domestic worker?', 'Which country is best for a maid in the UAE?', 'Can I request English-speaking domestic workers?', 'Can I request cooking or childcare experience?'],
  cta: 'Not sure which profile is right for your family?'
};

const ar = {
  badge: 'الدول التي نوفر منها العمالة المنزلية',
  title: 'مطابقة العمالة المنزلية حسب الخبرة واللغة واحتياج الأسرة',
  lead: 'تساعد عناية الأسر في الإمارات على استكشاف خيارات العمالة المنزلية من عدة دول حسب الخبرة الفردية والتواصل والمهارات المنزلية والمهام المطلوبة والتوفر القانوني.',
  whyTitle: 'لماذا تعتبر دولة المصدر مهمة؟',
  whyText: 'قد تختلف تفضيلات الأسر حسب اللغة ونمط الطبخ وخبرة رعاية الأطفال ودعم كبار السن وخبرة التنظيف أو الخبرة السابقة في الإمارات والخليج.',
  noteTitle: 'ملاحظة مهمة عن المطابقة',
  noteText: 'دولة المصدر هي جزء واحد فقط من عملية الاختيار. يجب أن تتم مطابقة العامل المنزلي المناسب حسب المهارات الفردية والخبرة والمستندات والسلوك والتوفر ومدى الملاءمة للأسرة.',
  help: ['مراجعة حجم المنزل وروتين الأسرة', 'فهم اللغة المفضلة واحتياج التواصل', 'مناقشة التنظيف والغسيل والطبخ ورعاية الأطفال', 'توضيح خيارات المقيمة وغير المقيمة والدوام الكامل والجزئي', 'إرشاد المستندات وحالة التأشيرة والخطوات', 'مطابقة الملف مع توقعات الأسرة'],
  faq: ['هل يمكن اختيار جنسية العامل المنزلي؟', 'ما هي أفضل دولة لتوظيف خادمة في الإمارات؟', 'هل يمكن طلب عاملة تتحدث الإنجليزية؟', 'هل يمكن طلب خبرة في الطبخ أو رعاية الأطفال؟'],
  cta: 'لست متأكداً من الملف المناسب لأسرتك؟'
};

export default function CountriesWeSourceFromPage({ params: { locale } }: { params: { locale: string } }) {
  const t = locale === 'ar' ? ar : en;
  const countries = locale === 'ar' ? countriesAr : countriesEn;
  return <main className="bg-[#fbfaf7] px-6 py-14 text-primary-900 lg:px-10"><section className="mx-auto max-w-6xl"><span className="rounded-full border border-accent-500/25 bg-white px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent-700">{t.badge}</span><h1 className="mt-5 max-w-4xl font-heading text-[2.4rem] font-bold leading-[1.04] tracking-[-0.05em] sm:text-[3.4rem]">{t.title}</h1><p className="mt-4 max-w-3xl text-[0.95rem] leading-7 text-primary-900/75">{t.lead}</p><div className="mt-7 flex flex-wrap gap-3"><Link href={`/${locale}/booking`} className="rounded-full bg-primary-900 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white">{locale === 'ar' ? 'احجز استشارة' : 'Book Consultation'}</Link><Link href={`/${locale}/contact`} className="rounded-full border border-accent-500/30 bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.12em]">WhatsApp</Link></div></section><TextBlock title={t.whyTitle} text={t.whyText} /><TextBlock title={t.noteTitle} text={t.noteText} /><section className="mx-auto mt-10 max-w-6xl"><h2 className="text-center font-heading text-2xl font-bold">{locale === 'ar' ? 'الدول التي ندعمها عادة' : 'Countries We Commonly Support'}</h2><div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{countries.map(([name, text]) => <article key={name} className="rounded-2xl bg-white/80 p-5 shadow-[0_14px_38px_rgba(7,22,74,0.055)]"><h3 className="font-heading text-lg font-bold">{name}</h3><p className="mt-2 text-sm leading-6 text-primary-900/70">{text}</p></article>)}</div></section><Grid title={locale === 'ar' ? 'كيف تساعدك عناية في الاختيار؟' : 'How INAYA Helps You Choose'} items={t.help} /><Grid title={locale === 'ar' ? 'الأسئلة الشائعة' : 'FAQs'} items={t.faq} /><section className="mx-auto mt-10 max-w-3xl rounded-[24px] border border-white/80 bg-white/80 p-7 text-center shadow-[0_18px_55px_rgba(7,22,74,0.07)]"><h2 className="font-heading text-2xl font-bold">{t.cta}</h2><p className="mt-3 text-sm text-primary-900/70">{locale === 'ar' ? 'تواصل مع عناية للحصول على مطابقة حسب منزلك واللغة والمهام وروتين الأسرة.' : 'Speak with INAYA and get guided matching based on your home, language preference, duties and family routine.'}</p></section></main>;
}

function TextBlock({ title, text }: { title: string; text: string }) { return <section className="mx-auto mt-10 max-w-6xl rounded-2xl bg-white/80 p-6 shadow-[0_14px_38px_rgba(7,22,74,0.055)]"><h2 className="font-heading text-2xl font-bold">{title}</h2><p className="mt-3 text-sm leading-6 text-primary-900/72">{text}</p></section>; }
function Grid({ title, items }: { title: string; items: string[] }) { return <section className="mx-auto mt-10 max-w-6xl"><h2 className="text-center font-heading text-2xl font-bold">{title}</h2><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{items.map((x) => <div key={x} className="rounded-xl border border-accent-500/12 bg-white/80 px-3 py-2 text-sm font-semibold shadow-[0_10px_28px_rgba(7,22,74,0.04)]">✓ {x}</div>)}</div></section>; }
