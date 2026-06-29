import type { Metadata } from 'next';
import Link from 'next/link';

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  return locale === 'ar'
    ? { title: 'عقد خادمة شهري في الإمارات | عناية', description: 'احصل على عقد خادمة شهري في الإمارات مع عناية للتنظيف المنتظم والغسيل والكي والمساعدة في المطبخ وتنظيم المنزل.' }
    : { title: 'Monthly Maid Contract in UAE | INAYA', description: 'Get a monthly maid contract in the UAE with INAYA for regular cleaning, laundry, ironing, kitchen assistance and household support.' };
}

const en = {
  badge: 'Monthly Maid Contract Services in UAE',
  title: 'Reliable monthly maid contracts for consistent home support',
  lead: 'Choose a monthly maid contract with INAYA for regular household support, planned cleaning visits, laundry assistance, kitchen help and organized home care.',
  what: 'A monthly maid contract gives your home scheduled domestic support for a fixed monthly period. Families can plan regular maid support based on home size, preferred days, required tasks and monthly routine.',
  why: ['Clear monthly service planning', 'Flexible visit frequency', 'Suitable for apartments and villas', 'Cleaning, laundry and ironing support', 'Kitchen assistance where required', 'Organized follow-up and coordination'],
  included: ['Regular home cleaning', 'Bathroom and kitchen cleaning', 'Bedroom and living area cleaning', 'Laundry and ironing support', 'Dusting, floor care and organizing', 'Light kitchen assistance'],
  process: ['Requirement review', 'Monthly plan setup', 'Duty confirmation', 'Service coordination', 'Follow-up support'],
  faq: ['Can I choose how many visits I need per month?', 'Is laundry and ironing included?', 'Can I request the same maid every month?', 'Is a monthly contract better than one-time booking?'],
  cta: 'Need regular maid support every month?'
};

const ar = {
  badge: 'خدمات عقد خادمة شهري في الإمارات',
  title: 'عقود خادمة شهرية لدعم منزلي ثابت ومنظم',
  lead: 'اختر عقد خادمة شهري مع عناية للحصول على دعم منزلي منتظم يشمل زيارات تنظيف مجدولة والغسيل والكي والمساعدة في المطبخ وتنظيم المنزل.',
  what: 'عقد الخادمة الشهري يمنح منزلك دعماً منزلياً مجدولاً لمدة شهرية ثابتة. يمكن للأسرة ترتيب دعم منتظم حسب حجم المنزل والأيام المفضلة والمهام المطلوبة وروتين الأسرة.',
  why: ['تخطيط واضح للخدمة الشهرية', 'مرونة في عدد الزيارات', 'مناسب للشقق والفلل', 'دعم التنظيف والغسيل والكي', 'مساعدة في المطبخ عند الحاجة', 'تنسيق ومتابعة منظمة'],
  included: ['تنظيف منزلي منتظم', 'تنظيف الحمامات والمطبخ', 'تنظيف غرف النوم والمعيشة', 'دعم الغسيل والكي', 'إزالة الغبار وتنظيف الأرضيات', 'مساعدة خفيفة في المطبخ'],
  process: ['مراجعة الاحتياج', 'إعداد الخطة الشهرية', 'تأكيد المهام', 'تنسيق الخدمة', 'المتابعة'],
  faq: ['هل يمكن اختيار عدد الزيارات شهرياً؟', 'هل يشمل العقد الغسيل والكي؟', 'هل يمكن طلب نفس الخادمة كل شهر؟', 'هل العقد الشهري أفضل من الحجز الفردي؟'],
  cta: 'هل تحتاج إلى دعم منزلي منتظم كل شهر؟'
};

export default function MonthlyMaidContractPage({ params: { locale } }: { params: { locale: string } }) {
  const t = locale === 'ar' ? ar : en;
  return <main className="bg-[#fbfaf7] px-6 py-14 text-primary-900 lg:px-10"><section className="mx-auto max-w-6xl"><span className="rounded-full border border-accent-500/25 bg-white px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent-700">{t.badge}</span><h1 className="mt-5 max-w-4xl font-heading text-[2.4rem] font-bold leading-[1.04] tracking-[-0.05em] sm:text-[3.4rem]">{t.title}</h1><p className="mt-4 max-w-3xl text-[0.95rem] leading-7 text-primary-900/75">{t.lead}</p><div className="mt-7 flex flex-wrap gap-3"><Link href={`/${locale}/booking?service=monthly-maid-contract`} className="rounded-full bg-primary-900 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white">{locale === 'ar' ? 'احجز الخدمة' : 'Book This Service'}</Link><Link href={`/${locale}/contact`} className="rounded-full border border-accent-500/30 bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.12em]">WhatsApp</Link></div></section><TextBlock title={locale === 'ar' ? 'ما هو عقد الخادمة الشهري؟' : 'What is a Monthly Maid Contract?'} text={t.what} /><Grid title={locale === 'ar' ? 'لماذا تختار الأسر عناية؟' : 'Why Families Choose INAYA'} items={t.why} /><Grid title={locale === 'ar' ? 'ما الذي يشمله العقد؟' : 'What is Included'} items={t.included} /><Grid title={locale === 'ar' ? 'خطوات العقد الشهري' : 'Monthly Contract Process'} items={t.process} /><Grid title={locale === 'ar' ? 'الأسئلة الشائعة' : 'FAQs'} items={t.faq} /><section className="mx-auto mt-10 max-w-3xl rounded-[24px] border border-white/80 bg-white/80 p-7 text-center shadow-[0_18px_55px_rgba(7,22,74,0.07)]"><h2 className="font-heading text-2xl font-bold">{t.cta}</h2><p className="mt-3 text-sm text-primary-900/70">{locale === 'ar' ? 'تواصل مع عناية اليوم واختر عقداً شهرياً يناسب منزلك.' : 'Speak with INAYA today and choose a monthly contract that fits your home.'}</p></section></main>;
}

function TextBlock({ title, text }: { title: string; text: string }) { return <section className="mx-auto mt-10 max-w-6xl rounded-2xl bg-white/80 p-6 shadow-[0_14px_38px_rgba(7,22,74,0.055)]"><h2 className="font-heading text-2xl font-bold">{title}</h2><p className="mt-3 text-sm leading-6 text-primary-900/72">{text}</p></section>; }
function Grid({ title, items }: { title: string; items: string[] }) { return <section className="mx-auto mt-10 max-w-6xl"><h2 className="text-center font-heading text-2xl font-bold">{title}</h2><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{items.map((x) => <div key={x} className="rounded-xl border border-accent-500/12 bg-white/80 px-3 py-2 text-sm font-semibold shadow-[0_10px_28px_rgba(7,22,74,0.04)]">✓ {x}</div>)}</div></section>; }
