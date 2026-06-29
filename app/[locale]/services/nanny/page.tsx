import type { Metadata } from 'next';
import Link from 'next/link';

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  return locale === 'ar'
    ? { title: 'خدمات مربية أطفال في الإمارات | عناية', description: 'وظّف مربية أطفال موثوقة في الإمارات مع عناية لدعم روتين الأطفال اليومي والتحضير للمدرسة والإشراف على اللعب.' }
    : { title: 'Nanny Services in UAE | INAYA', description: 'Hire trusted nanny services in the UAE with INAYA for childcare support, daily routines, playtime supervision and school preparation.' };
}

const en = {
  badge: 'Trusted Nanny Services in UAE',
  title: 'Reliable nanny services for safe and organized family routines',
  lead: 'Find a caring nanny through INAYA for childcare support, daily routines, school preparation, playtime supervision and family assistance.',
  what: 'Nanny services provide dedicated childcare support inside the home. A nanny may assist with children’s daily routines, supervised playtime, meal support, school preparation, basic organization and family schedule support depending on the agreed scope.',
  why: ['Family-focused childcare matching', 'Clear discussion of child age and routine', 'Full-time, part-time or live-in arrangements', 'Language and experience preferences considered', 'Documentation and process guidance', 'Organized communication and follow-up'],
  included: ['Child supervision during agreed hours', 'Daily routine assistance', 'School bag and uniform preparation', 'Feeding support where suitable', 'Playtime and activity supervision', 'Light child-related organization'],
  process: ['Childcare requirement review', 'Experience matching', 'Duty scope confirmation', 'Schedule and arrangement', 'Family follow-up'],
  faq: ['Can I hire a nanny in Dubai or Ajman?', 'Can I request childcare experience?', 'Can a nanny help with school preparation?', 'Can I choose live-in or live-out nanny service?', 'Is a nanny the same as a babysitter?'],
  note: 'Nanny services are for family support and childcare assistance. Medical care or specialist therapy should be arranged through qualified healthcare professionals where required.',
  cta: 'Looking for a caring nanny for your family?'
};

const ar = {
  badge: 'خدمات مربية أطفال موثوقة في الإمارات',
  title: 'خدمات مربية أطفال لدعم روتين الأسرة بأمان وتنظيم',
  lead: 'ابحث عن مربية أطفال مناسبة من خلال عناية لدعم رعاية الأطفال والروتين اليومي والتحضير للمدرسة والإشراف على اللعب ومساعدة الأسرة.',
  what: 'خدمات المربية توفر دعماً مخصصاً لرعاية الأطفال داخل المنزل. يمكن للمربية المساعدة في الروتين اليومي للأطفال والإشراف على اللعب ودعم الوجبات والتحضير للمدرسة والتنظيم البسيط حسب نطاق المهام.',
  why: ['مطابقة حسب احتياج الأسرة والأطفال', 'مناقشة واضحة لعمر الطفل وروتينه', 'خيارات بدوام كامل أو جزئي أو إقامة داخلية', 'مراعاة اللغة والخبرة عند التوفر', 'إرشاد المستندات والإجراءات', 'تواصل ومتابعة منظمة'],
  included: ['الإشراف على الأطفال خلال الساعات المتفق عليها', 'المساعدة في الروتين اليومي', 'تجهيز الحقيبة والزي المدرسي', 'دعم الوجبات عند المناسبة', 'الإشراف على اللعب والأنشطة', 'تنظيم بسيط متعلق بالأطفال'],
  process: ['مراجعة احتياج الطفل', 'مطابقة الخبرة', 'تأكيد نطاق المهام', 'الجدول والترتيب', 'متابعة الأسرة'],
  faq: ['هل يمكن توظيف مربية في دبي أو عجمان؟', 'هل يمكن طلب خبرة في رعاية الأطفال؟', 'هل تساعد المربية في التحضير للمدرسة؟', 'هل يمكن اختيار مربية مقيمة أو غير مقيمة؟', 'هل المربية مثل جليسة الأطفال؟'],
  note: 'خدمات المربية مخصصة لدعم الأسرة ورعاية الأطفال. الرعاية الطبية أو العلاج المتخصص يجب أن يتم من خلال مختصين صحيين مؤهلين عند الحاجة.',
  cta: 'هل تبحث عن مربية مناسبة لطفلك؟'
};

export default function NannyServicesPage({ params: { locale } }: { params: { locale: string } }) {
  const t = locale === 'ar' ? ar : en;
  return <main className="bg-[#fbfaf7] px-6 py-14 text-primary-900 lg:px-10"><section className="mx-auto max-w-6xl"><span className="rounded-full border border-accent-500/25 bg-white px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent-700">{t.badge}</span><h1 className="mt-5 max-w-4xl font-heading text-[2.4rem] font-bold leading-[1.04] tracking-[-0.05em] sm:text-[3.4rem]">{t.title}</h1><p className="mt-4 max-w-3xl text-[0.95rem] leading-7 text-primary-900/75">{t.lead}</p><div className="mt-7 flex flex-wrap gap-3"><Link href={`/${locale}/booking?service=nanny`} className="rounded-full bg-primary-900 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white">{locale === 'ar' ? 'احجز الخدمة' : 'Book This Service'}</Link><Link href={`/${locale}/contact`} className="rounded-full border border-accent-500/30 bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.12em]">WhatsApp</Link></div></section><TextBlock title={locale === 'ar' ? 'ما هي خدمات المربية؟' : 'What are Nanny Services?'} text={t.what} /><Grid title={locale === 'ar' ? 'لماذا تختار الأسر عناية؟' : 'Why Families Choose INAYA'} items={t.why} /><Grid title={locale === 'ar' ? 'ما الذي تشمل الخدمة؟' : 'What is Included'} items={t.included} /><Grid title={locale === 'ar' ? 'خطوات مطابقة المربية' : 'Nanny Matching Process'} items={t.process} /><TextBlock title={locale === 'ar' ? 'ملاحظة مهمة' : 'Important Note'} text={t.note} /><Grid title={locale === 'ar' ? 'الأسئلة الشائعة' : 'FAQs'} items={t.faq} /><section className="mx-auto mt-10 max-w-3xl rounded-[24px] border border-white/80 bg-white/80 p-7 text-center shadow-[0_18px_55px_rgba(7,22,74,0.07)]"><h2 className="font-heading text-2xl font-bold">{t.cta}</h2><p className="mt-3 text-sm text-primary-900/70">{locale === 'ar' ? 'تواصل مع عناية اليوم للحصول على إرشاد يناسب روتين طفلك.' : 'Speak with INAYA today and get guidance for nanny support that fits your child’s routine.'}</p></section></main>;
}

function TextBlock({ title, text }: { title: string; text: string }) { return <section className="mx-auto mt-10 max-w-6xl rounded-2xl bg-white/80 p-6 shadow-[0_14px_38px_rgba(7,22,74,0.055)]"><h2 className="font-heading text-2xl font-bold">{title}</h2><p className="mt-3 text-sm leading-6 text-primary-900/72">{text}</p></section>; }
function Grid({ title, items }: { title: string; items: string[] }) { return <section className="mx-auto mt-10 max-w-6xl"><h2 className="text-center font-heading text-2xl font-bold">{title}</h2><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{items.map((x) => <div key={x} className="rounded-xl border border-accent-500/12 bg-white/80 px-3 py-2 text-sm font-semibold shadow-[0_10px_28px_rgba(7,22,74,0.04)]">✓ {x}</div>)}</div></section>; }
