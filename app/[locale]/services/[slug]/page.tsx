import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services, getService } from '@/lib/services';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

const pageCopy = {
  en: {
    title: 'Live-in Maid Services in UAE',
    meta: 'Premium live-in maid services in UAE with clear hiring guidance, verified documentation support and family-focused placement coordination.',
    badge: 'Premium Live-in Maid Services in UAE',
    lead: 'Hire a reliable live-in maid through a clear, documented and family-focused hiring process designed for homes across the UAE.',
    book: 'Book Consultation',
    whatsapp: 'WhatsApp Inquiry',
    whatTitle: 'What is a Live-in Maid Service?',
    whatText: 'A live-in maid provides full-time domestic support inside the household, helping with daily cleaning, laundry, home routines, meal support and family care where suitable.',
    whyTitle: 'Why Families Choose INAYA',
    includedTitle: 'Our Service Standards',
    perfectTitle: 'Perfect For',
    journeyTitle: 'Our 5-Step Vetting Matrix',
    journeyText: 'A complete evaluation framework designed to keep every service recommendation clear, trusted and suitable for your home.',
    vettingTitle: 'INAYA Vetting Matrix',
    vettingText: 'Every recommendation is supported by a structured review process designed to protect the household, clarify expectations and improve long-term suitability.',
    countriesTitle: 'Countries We Source From',
    countriesText: 'We match profiles by language, household experience, cooking style, childcare exposure and family requirements.',
    pricingTitle: 'Transparent Pricing Guidance',
    pricingText: 'Final pricing depends on service type, duration, documentation, visa status and family requirements. We explain all costs before confirmation.',
    faqTitle: 'Frequently Asked Questions',
    relatedTitle: 'Related Domestic Worker Services',
    compareTitle: 'Why INAYA is the Right Choice?',
    compareText: 'A structured, verified and transparent hiring experience that many traditional agencies simply do not offer.',
    finalTitle: 'Ready to hire a live-in maid?',
    finalText: 'Speak with INAYA today and get clear guidance for your family, documents and service plan.',
    cards: [
      ['Full-time Household Support', 'Reliable support for daily home routines, cleaning, laundry and household care.'],
      ['Clear Hiring Guidance', 'Step-by-step support with documents, options and joining requirements.'],
      ['Premium Family Experience', 'Private, organized communication focused on your household needs.']
    ],
    why: ['Licensed UAE process guidance', 'Verified documentation support', 'Dedicated family coordinator', 'Clear replacement support policy', 'Privacy-first communication', 'Fast consultation and follow-up'],
    included: ['Daily cleaning and room care', 'Laundry and ironing support', 'Kitchen assistance and meal prep', 'Childcare support where suitable', 'Elderly household assistance', 'Organized daily task planning'],
    perfect: ['Working families', 'Large villas', 'New parents', 'Elderly households', 'Busy professionals', 'Consistent household help'],
    journey: [
      ['Identity', 'Documentation and eligibility review before service coordination.'],
      ['Skill', 'Requirement matching based on household needs and service type.'],
      ['Behaviour', 'Communication style and suitability are considered carefully.'],
      ['Reference', 'Past experience and available background details are reviewed.'],
      ['Matching', 'Service recommendation is aligned with family expectations.']
    ],
    vetting: [
      ['Identity Review', 'Passport, identity details and basic eligibility are checked before moving forward.', '▣'],
      ['Skills Mapping', 'Cleaning, laundry, cooking, childcare and family routine requirements are matched carefully.', '☷'],
      ['Behaviour Fit', 'Communication style, attitude and household suitability are considered during review.', '✦'],
      ['Experience Check', 'Past household experience and practical strengths are reviewed for relevance.', '◈'],
      ['Family Matching', 'Recommendations are aligned with home size, emirate, timing and expectations.', '◎']
    ],
    countries: [
      ['Philippines', 'English communication, childcare and housekeeping.'],
      ['Indonesia', 'Housekeeping, cooking support and family care.'],
      ['Nepal', 'Reliable domestic support and cleaning routines.'],
      ['Sri Lanka', 'Experienced household help and meal support.'],
      ['India', 'Cooking, cleaning and family assistance.'],
      ['Kenya / Uganda', 'Housekeeping, childcare exposure and home support.']
    ],
    pricing: [
      ['Consultation', 'For families comparing live-in maid options.', ['Requirement review', 'Document guidance', 'Service scope clarity']],
      ['Live-in Placement', 'For families ready to proceed with matching.', ['Profile matching', 'Interview coordination', 'Joining support']],
      ['Visa Support Guidance', 'For families needing documentation guidance.', ['Document checklist', 'Process guidance', 'Follow-up support']]
    ],
    faqs: [
      ['How do I hire a live-in maid in UAE?', 'Share your household needs, emirate, duties and start date. INAYA then explains options and next steps.'],
      ['Can a live-in maid help with cleaning and laundry?', 'Yes, most live-in arrangements include cleaning, laundry, ironing and household support depending on scope.'],
      ['Can I request childcare experience?', 'Yes, you can request childcare exposure, language preference and family routine experience.'],
      ['Is pricing fixed for every family?', 'No. Pricing depends on service model, documentation, visa status, duration and requirements.'],
      ['Do you provide replacement support?', 'Replacement support depends on the selected package and policy explained before booking.'],
      ['Which emirates do you serve?', 'We support families across the UAE subject to availability and requirements.'],
      ['Can I interview the candidate?', 'Where applicable, profile review or interview is arranged before confirmation.'],
      ['What documents are required?', 'Documents vary by service type and visa status. Our coordinator gives a clear checklist.']
    ],
    comparison: [
      ['Requirement review & consultation', 'Included', 'Usually not provided'],
      ['Dedicated family coordinator', 'Included', 'Not available'],
      ['Verified experienced candidates', '100% verified', 'Not always verified'],
      ['Skill & background verification', 'Complete check', 'Rarely done'],
      ['Clear documents & transparent fees', 'Transparent', 'Hidden charges'],
      ['Matching by family lifestyle', 'Personalized', 'Limited matching'],
      ['Training & orientation', 'Provided', 'Not provided'],
      ['Post-arrival support', 'Ongoing', 'No follow up'],
      ['Replacement support as per policy', 'Package based', 'Not guaranteed'],
      ['Visa processing guidance', 'Guided support', 'Not included']
    ],
    related: ['live-out-maid', 'full-time-maid', 'part-time-maid', 'monthly-maid-contract', 'nanny', 'maid-visa', 'maid-replacement']
  },
  ar: {
    title: 'خدمات الخادمات المقيمات في الإمارات',
    meta: 'خدمات خادمة مقيمة في الإمارات مع إرشاد واضح للتوظيف ودعم المستندات وتنسيق مناسب للأسرة.',
    badge: 'خدمات خادمة مقيمة في الإمارات',
    lead: 'استعن بخادمة مقيمة من خلال عملية واضحة ومنظمة تناسب احتياجات الأسرة داخل الإمارات.',
    book: 'احجز استشارة',
    whatsapp: 'استفسار واتساب',
    whatTitle: 'ما هي خدمة الخادمة المقيمة؟',
    whatText: 'الخادمة المقيمة تقدم دعماً منزلياً بدوام كامل داخل المنزل يشمل التنظيف والغسيل وتنظيم المهام اليومية والمساعدة الأسرية عند الحاجة.',
    whyTitle: 'لماذا تختار الأسر عناية؟',
    includedTitle: 'معايير الخدمة',
    perfectTitle: 'مناسبة لـ',
    journeyTitle: 'مصفوفة التحقق من خمس خطوات',
    journeyText: 'إطار تقييم واضح يساعد على جعل كل ترشيح مناسباً وموثوقاً للأسرة.',
    vettingTitle: 'مصفوفة التحقق في عناية',
    vettingText: 'كل ترشيح يعتمد على مراجعة منظمة تساعد على حماية الأسرة وتوضيح التوقعات وتحسين الملاءمة.',
    countriesTitle: 'الدول التي نوفر منها العمالة',
    countriesText: 'نطابق الملفات حسب اللغة والخبرة المنزلية ونمط الطبخ ورعاية الأطفال واحتياج الأسرة.',
    pricingTitle: 'إرشاد واضح للأسعار',
    pricingText: 'تختلف التكلفة حسب نوع الخدمة والمدة والمستندات وحالة التأشيرة ومتطلبات الأسرة.',
    faqTitle: 'أسئلة شائعة',
    relatedTitle: 'خدمات منزلية ذات صلة',
    compareTitle: 'لماذا عناية هي الخيار الصحيح؟',
    compareText: 'تجربة توظيف منظمة وشفافة لا توفرها العديد من الشركات التقليدية.',
    finalTitle: 'هل أنت جاهز لتوظيف خادمة مقيمة؟',
    finalText: 'تواصل مع عناية اليوم للحصول على إرشاد واضح لأسرتك وخطة الخدمة.',
    cards: [['دعم منزلي بدوام كامل', 'دعم يومي موثوق للتنظيف والغسيل وروتين المنزل.'], ['إرشاد واضح للتوظيف', 'دعم خطوة بخطوة للمستندات والخيارات ومتطلبات الالتحاق.'], ['تجربة أسرية مميزة', 'تواصل خاص ومنظم يركز على احتياج المنزل.']],
    why: ['إرشاد لعملية مرخصة في الإمارات', 'دعم التحقق من المستندات', 'منسق مخصص للأسرة', 'سياسة دعم للاستبدال بوضوح', 'تواصل يحافظ على الخصوصية', 'استشارة ومتابعة سريعة'],
    included: ['تنظيف يومي وترتيب الغرف', 'غسيل وكي الملابس', 'مساعدة في المطبخ والتحضير', 'دعم رعاية الأطفال عند المناسبة', 'مساعدة منزلية لكبار السن', 'تنظيم المهام اليومية'],
    perfect: ['الأسر العاملة', 'الفلل الكبيرة', 'الآباء الجدد', 'منازل كبار السن', 'المهنيون المشغولون', 'دعم منزلي ثابت'],
    journey: [['الهوية', 'مراجعة المستندات والأهلية قبل تنسيق الخدمة.'], ['المهارة', 'مطابقة الاحتياج حسب المنزل ونوع الخدمة.'], ['السلوك', 'مراجعة أسلوب التواصل والملاءمة بعناية.'], ['المرجع', 'مراجعة الخبرة المتاحة والتفاصيل العملية.'], ['المطابقة', 'تتم مواءمة الترشيح مع توقعات الأسرة.']],
    vetting: [['مراجعة الهوية', 'يتم التحقق من جواز السفر وتفاصيل الهوية والأهلية.', '▣'], ['مطابقة المهارات', 'تتم مطابقة التنظيف والغسيل والطبخ وروتين الأسرة.', '☷'], ['الملاءمة السلوكية', 'يتم أخذ التواصل والالتزام والملاءمة بعين الاعتبار.', '✦'], ['مراجعة الخبرة', 'تتم مراجعة الخبرات المنزلية ونقاط القوة العملية.', '◈'], ['مطابقة الأسرة', 'تتم مواءمة الترشيح مع المنزل والإمارة والتوقيت.', '◎']],
    countries: [['الفلبين', 'تواصل إنجليزي ورعاية أطفال وتنظيم المنزل.'], ['إندونيسيا', 'تنظيف ودعم الطبخ ورعاية الأسرة.'], ['نيبال', 'دعم منزلي وروتين تنظيف منتظم.'], ['سريلانكا', 'خبرة منزلية ودعم في الوجبات.'], ['الهند', 'طبخ وتنظيف ومساعدة أسرية.'], ['كينيا / أوغندا', 'تنظيف ورعاية أطفال ودعم منزلي.']],
    pricing: [['استشارة', 'للأسر التي تقارن الخيارات.', ['مراجعة الاحتياج', 'إرشاد المستندات', 'توضيح الخدمة']], ['توظيف خادمة مقيمة', 'للأسر الجاهزة للمطابقة.', ['مطابقة الملفات', 'تنسيق المقابلة', 'دعم الالتحاق']], ['إرشاد التأشيرة', 'للأسر التي تحتاج فهم المستندات.', ['قائمة مستندات', 'إرشاد العملية', 'متابعة الدعم']]],
    faqs: [['كيف أوظف خادمة مقيمة في الإمارات؟', 'شارك احتياج المنزل والإمارة والمهام وتاريخ البدء وسنشرح الخيارات.'], ['هل تساعد الخادمة في التنظيف والغسيل؟', 'نعم، يشمل ذلك عادة التنظيف والغسيل والكي حسب نطاق الخدمة.'], ['هل يمكن طلب خبرة في رعاية الأطفال؟', 'نعم، يمكن طلب خبرة مناسبة ولغة مفضلة وروتين معين.'], ['هل السعر ثابت لكل أسرة؟', 'لا، يعتمد السعر على نوع الخدمة والمستندات والتأشيرة والمدة.'], ['هل يوجد دعم للاستبدال؟', 'يعتمد ذلك على الباقة والسياسة الموضحة قبل الحجز.'], ['ما الإمارات التي تخدمونها؟', 'نخدم الأسر داخل الإمارات حسب التوفر والمتطلبات.'], ['هل يمكن مقابلة المرشحة؟', 'عند الإمكانية يتم ترتيب مراجعة الملف أو المقابلة.'], ['ما المستندات المطلوبة؟', 'تختلف حسب نوع الخدمة وحالة التأشيرة. يقدم المنسق قائمة واضحة.']],
    comparison: [['مراجعة الاحتياج والاستشارة', 'مشمول', 'غير متوفر غالباً'], ['منسق مخصص للأسرة', 'مشمول', 'غير متاح'], ['مرشحات موثقات وذوات خبرة', 'تم التحقق', 'ليس دائماً'], ['تحقق من المهارات والخلفية', 'تحقق كامل', 'نادراً'], ['مستندات ورسوم واضحة', 'شفافية', 'رسوم مخفية'], ['مطابقة حسب نمط الأسرة', 'مطابقة شخصية', 'مطابقة محدودة'], ['توجيه قبل بدء الخدمة', 'متوفر', 'غير متوفر'], ['دعم بعد الالتحاق', 'مستمر', 'لا توجد متابعة'], ['استبدال حسب السياسة', 'حسب الباقة', 'غير مضمون'], ['إرشاد التأشيرة', 'دعم إرشادي', 'غير مشمول']],
    related: ['live-out-maid', 'full-time-maid', 'part-time-maid', 'monthly-maid-contract', 'nanny', 'maid-visa', 'maid-replacement']
  }
};

type Lang = 'en' | 'ar';

export async function generateMetadata({ params: { locale, slug } }: { params: { locale: string; slug: string } }): Promise<Metadata> {
  const service = getService(slug);
  if (!service) return {};
  const lang = locale === 'ar' ? 'ar' : 'en';
  return { title: slug === 'live-in-maid' ? pageCopy[lang].title : service.name[lang], description: slug === 'live-in-maid' ? pageCopy[lang].meta : service.short[lang] };
}

function ImageBlock({ label }: { label: string }) {
  return <div aria-label={label} className="relative min-h-[320px] overflow-hidden rounded-[24px] border border-white/80 bg-[linear-gradient(135deg,#efe9de,#ffffff,#e7edf6)] shadow-[0_22px_60px_rgba(7,22,74,0.09)]"><div className="absolute inset-5 rounded-[18px] border border-white/80 bg-white/18" /></div>;
}

export default async function ServiceDetailPage({ params: { locale, slug } }: { params: { locale: string; slug: string } }) {
  const service = getService(slug);
  if (!service) notFound();
  const lang: Lang = locale === 'ar' ? 'ar' : 'en';
  const copy = slug === 'live-in-maid' ? pageCopy[lang] : null;
  if (!copy) return <div className="bg-ivory py-20 text-center"><h1 className="font-heading text-5xl font-bold text-primary-900">{service.name[lang]}</h1><p className="mx-auto mt-5 max-w-2xl text-ink/70">{service.description[lang]}</p><Link href={`/${locale}/booking`} className="btn-primary mt-8">{lang === 'ar' ? 'احجز الخدمة' : 'Book This Service'}</Link></div>;

  return <div className="overflow-hidden bg-[#fbfaf7] text-ink">
    <section className="px-6 py-14 lg:px-10"><div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-center"><div><span className="inline-flex rounded-full border border-accent-500/25 bg-white/80 px-4 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.20em] text-accent-700">{copy.badge}</span><h1 className="mt-5 font-heading text-[2.15rem] font-bold leading-[1.03] tracking-[-0.055em] text-primary-900 sm:text-[3.3rem]">{copy.title}</h1><p className="mt-4 max-w-xl text-[0.92rem] leading-7 text-primary-900/75">{copy.lead}</p><div className="mt-6 flex gap-3"><Link href={`/${locale}/booking?service=${slug}`} className="rounded-full bg-primary-900 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white">{copy.book}</Link><Link href={`/${locale}/contact`} className="rounded-full border border-accent-500/30 bg-white/70 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-primary-900">{copy.whatsapp}</Link></div></div><ImageBlock label="Live-in maid service hero image" /></div></section>
    <section className="px-6 py-8 lg:px-10"><div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">{copy.cards.map((card) => <Card key={card[0]} title={card[0]} text={card[1]} />)}</div></section>
    <section className="px-6 py-8 lg:px-10"><div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1fr] lg:items-center"><ImageBlock label="Live-in maid duties image" /><InfoBox title={copy.whatTitle} text={copy.whatText} /></div></section>
    <section className="px-6 py-8 lg:px-10"><div className="mx-auto max-w-6xl"><SectionTitle title={copy.whyTitle} /><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{copy.why.map((item) => <Mini key={item} text={item} />)}</div></div></section>
    <section className="px-6 py-8 lg:px-10"><div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-2"><ListBox title={copy.includedTitle} items={copy.included} /><ListBox title={copy.perfectTitle} items={copy.perfect} /></div></section>
    <section className="px-6 py-10 lg:px-10"><div className="mx-auto max-w-6xl"><SectionTitle title={copy.journeyTitle} text={copy.journeyText} /><div className="grid gap-4 md:grid-cols-5">{copy.journey.map((item, index) => <MatrixCard key={item[0]} n={index + 1} title={item[0]} text={item[1]} />)}</div></div></section>
    <VettingSection copy={copy} />
    <section className="px-6 py-10 lg:px-10"><div className="mx-auto max-w-6xl"><SectionTitle title={copy.countriesTitle} text={copy.countriesText} /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{copy.countries.map((item) => <CountryCard key={item[0]} title={item[0]} text={item[1]} />)}</div></div></section>
    <section className="px-6 py-9 lg:px-10"><div className="mx-auto max-w-6xl"><SectionTitle title={copy.pricingTitle} text={copy.pricingText} /><div className="grid gap-4 lg:grid-cols-3">{copy.pricing.map((item) => <PricingCard key={item[0]} title={item[0]} text={item[1]} points={item[2] as string[]} cta={copy.book} locale={locale} slug={slug} />)}</div></div></section>
    <FAQ title={copy.faqTitle} faqs={copy.faqs} />
    <Related title={copy.relatedTitle} items={copy.related} locale={locale} lang={lang} />
    <Comparison copy={copy} lang={lang} />
    <section className="px-6 py-10 lg:px-10"><div className="mx-auto max-w-3xl rounded-[24px] border border-white/80 bg-white/80 p-7 text-center shadow-[0_18px_55px_rgba(7,22,74,0.07)]"><h2 className="font-heading text-xl font-bold text-primary-900 sm:text-2xl">{copy.finalTitle}</h2><p className="mx-auto mt-3 max-w-xl text-xs leading-5 text-primary-900/72">{copy.finalText}</p><Link href={`/${locale}/booking?service=${slug}`} className="mt-5 inline-flex rounded-full bg-primary-900 px-7 py-3 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-white">{copy.book}</Link></div></section>
  </div>;
}

function SectionTitle({ title, text }: { title: string; text?: string }) {
  return <div className="mb-6 text-center"><h2 className="font-heading text-[1.55rem] font-bold tracking-[-0.035em] text-primary-900 sm:text-[2rem]">{title}</h2>{text && <p className="mx-auto mt-2 max-w-2xl text-xs font-medium leading-5 text-primary-900/78">{text}</p>}<div className="mx-auto mt-3 h-px w-16 bg-gradient-to-r from-transparent via-[#c98700] to-transparent" /></div>;
}

function Card({ title, text }: { title: string; text: string }) {
  return <div className="rounded-2xl border border-white/80 bg-white/78 p-4 shadow-[0_14px_38px_rgba(7,22,74,0.055)]"><div className="mb-2 text-sm text-[#c98700]">✓</div><h2 className="font-heading text-base font-bold leading-tight text-primary-900">{title}</h2><p className="mt-2 text-[0.72rem] leading-5 text-primary-900/72">{text}</p></div>;
}

function InfoBox({ title, text }: { title: string; text: string }) {
  return <div className="rounded-2xl border border-white/80 bg-white/78 p-5 shadow-[0_16px_45px_rgba(7,22,74,0.06)]"><h2 className="font-heading text-lg font-bold text-primary-900">{title}</h2><p className="mt-3 text-xs leading-5 text-primary-900/76">{text}</p></div>;
}

function Mini({ text }: { text: string }) {
  return <div className="flex items-center gap-2 rounded-xl border border-accent-500/12 bg-white/72 px-3 py-2 text-[0.72rem] font-semibold text-primary-900"><span className="text-[#c98700]">✓</span><span>{text}</span></div>;
}

function ListBox({ title, items }: { title: string; items: string[] }) {
  return <div className="rounded-2xl border border-white/80 bg-white/78 p-5 shadow-[0_14px_38px_rgba(7,22,74,0.055)]"><h2 className="font-heading text-lg font-bold text-primary-900">{title}</h2><div className="mt-4 grid gap-2 sm:grid-cols-2">{items.map((item) => <Mini key={item} text={item} />)}</div></div>;
}

function MatrixCard({ n, title, text }: { n: number; title: string; text: string }) {
  return <div className="rounded-2xl border border-white/85 bg-white p-4 text-center shadow-[0_16px_45px_rgba(7,22,74,0.075)]"><div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-accent-500/35 text-xs font-bold text-[#c98700]">{String(n).padStart(2, '0')}</div><h3 className="font-heading text-sm font-bold text-primary-900">{title}</h3><p className="mt-2 text-[0.7rem] leading-5 text-primary-900/78">{text}</p></div>;
}

function VettingSection({ copy }: { copy: typeof pageCopy.en | typeof pageCopy.ar }) {
  return <section className="bg-white px-6 py-10 lg:px-10"><div className="mx-auto max-w-6xl"><SectionTitle title={copy.vettingTitle} text={copy.vettingText} /><div className="grid gap-4 md:grid-cols-5">{copy.vetting.map((item, index) => <VettingCard key={item[0]} n={index + 1} title={item[0]} text={item[1]} icon={item[2]} />)}</div></div></section>;
}

function VettingCard({ n, title, text, icon }: { n: number; title: string; text: string; icon: string }) {
  return <div className="relative rounded-[18px] border border-primary-900/8 bg-white p-4 text-center shadow-[0_18px_48px_rgba(7,22,74,0.095)]"><span className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#c98700] text-[0.68rem] font-bold text-white">{String(n).padStart(2, '0')}</span><div className="mx-auto mb-4 mt-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#c98700]/45 bg-white text-2xl text-[#c98700] shadow-[0_10px_24px_rgba(201,135,0,0.12)]">{icon}</div><h3 className="font-heading text-sm font-extrabold text-primary-900">{title}</h3><p className="mt-2 text-[0.72rem] font-medium leading-5 text-primary-900/86">{text}</p><div className="mx-auto mt-3 h-px w-8 bg-[#c98700]" /></div>;
}

function CountryCard({ title, text }: { title: string; text: string }) {
  return <div className="rounded-2xl border border-white/80 bg-white/72 p-4 shadow-[0_14px_38px_rgba(7,22,74,0.055)]"><div className="mb-4 h-24 rounded-xl bg-[linear-gradient(135deg,#f2eadc,#fff,#e7edf6)]" /><h3 className="font-heading text-sm font-bold text-primary-900">{title}</h3><p className="mt-2 text-[0.72rem] leading-5 text-primary-900/70">{text}</p></div>;
}

function PricingCard({ title, text, points, cta, locale, slug }: { title: string; text: string; points: string[]; cta: string; locale: string; slug: string }) {
  return <div className="rounded-2xl border border-white/80 bg-white/78 p-5 shadow-[0_14px_38px_rgba(7,22,74,0.055)]"><h3 className="font-heading text-base font-bold text-primary-900">{title}</h3><p className="mt-2 text-[0.72rem] leading-5 text-primary-900/70">{text}</p><div className="mt-4 space-y-2">{points.map((point) => <Mini key={point} text={point} />)}</div><Link href={`/${locale}/booking?service=${slug}`} className="mt-5 inline-flex rounded-full bg-primary-900 px-5 py-2.5 text-[0.68rem] font-bold text-white">{cta}</Link></div>;
}

function FAQ({ title, faqs }: { title: string; faqs: string[][] }) {
  return <section className="px-6 py-9 lg:px-10"><div className="mx-auto max-w-6xl rounded-2xl bg-white/84 p-5 shadow-[0_14px_38px_rgba(7,22,74,0.055)]"><SectionTitle title={title} /><div className="grid gap-2 md:grid-cols-2">{faqs.map((item) => <details key={item[0]} className="rounded-xl border border-primary-900/8 bg-white px-3 py-2.5"><summary className="cursor-pointer text-[0.72rem] font-bold text-primary-900"><span className="me-2 rounded-full bg-[#c98700] px-1.5 py-0.5 text-[9px] text-white">?</span>{item[0]}</summary><p className="mt-2 text-[0.72rem] leading-5 text-primary-900/72">{item[1]}</p></details>)}</div></div></section>;
}

function Related({ title, items, locale, lang }: { title: string; items: string[]; locale: string; lang: Lang }) {
  return <section className="px-6 py-9 lg:px-10"><div className="mx-auto max-w-6xl rounded-2xl bg-white/84 p-5 shadow-[0_14px_38px_rgba(7,22,74,0.055)]"><SectionTitle title={title} /><div className="flex overflow-x-auto">{items.map((slug) => { const service = getService(slug); return service ? <Link key={slug} href={`/${locale}/services/${slug}`} className="min-w-[132px] flex-1 border-s border-accent-500/20 px-3 py-2 text-center first:border-s-0"><div className="mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-full border border-[#c98700]/45 text-lg text-[#c98700]">{service.icon}</div><h3 className="font-heading text-[0.7rem] font-bold leading-tight text-primary-900">{service.name[lang]}</h3></Link> : null; })}</div></div></section>;
}

function Comparison({ copy, lang }: { copy: typeof pageCopy.en | typeof pageCopy.ar; lang: Lang }) {
  const offer = lang === 'ar' ? 'ما نقدمه' : 'What We Offer';
  const others = lang === 'ar' ? 'شركات أخرى' : 'Other Companies';
  return <section className="px-6 py-9 lg:px-10"><div className="mx-auto max-w-5xl"><SectionTitle title={copy.compareTitle} text={copy.compareText} /><div className="overflow-hidden rounded-[16px] border border-primary-900/10 bg-white shadow-[0_14px_38px_rgba(7,22,74,0.055)]"><div className="grid grid-cols-[1.35fr_0.85fr_0.85fr] text-center text-[0.62rem] font-bold uppercase tracking-[0.12em] text-primary-900"><div className="bg-primary-900/[0.04] px-3 py-2.5">{offer}</div><div className="bg-[#b99143] px-3 py-2.5 text-white">INAYA</div><div className="bg-primary-900/[0.04] px-3 py-2.5">{others}</div></div>{copy.comparison.map((row, index) => <div key={row[0]} className="grid grid-cols-[1.35fr_0.85fr_0.85fr] border-t border-primary-900/8 text-[0.68rem] font-semibold text-primary-900"><div className="flex items-center gap-2 px-3 py-1.5"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent-500/25 text-[0.62rem] text-accent-700">{index + 1}</span><span className="truncate">{row[0]}</span></div><div className="flex items-center justify-center gap-2 border-x border-primary-900/8 px-2 py-1.5"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#52ae5f] text-[0.65rem] text-white">✓</span><span className="truncate">{row[1]}</span></div><div className="flex items-center justify-center gap-2 px-2 py-1.5"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ef4444] text-[0.65rem] text-white">×</span><span className="truncate">{row[2]}</span></div></div>)}</div><div className="mt-3 grid gap-3 rounded-[14px] border border-accent-500/16 bg-white p-3 shadow-[0_10px_28px_rgba(7,22,74,0.04)] sm:grid-cols-2"><div className="text-[0.72rem] font-semibold text-primary-900">INAYA Promise: <span className="font-medium text-primary-900/72">We treat every family with responsibility.</span></div><div className="text-[0.72rem] font-semibold text-primary-900">Trust. Transparency. Care.</div></div></div></section>;
}
