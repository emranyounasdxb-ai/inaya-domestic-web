import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services, getService } from '@/lib/services';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

const liveIn = {
  en: {
    title: 'Live-in Maid Services in UAE',
    meta: 'Premium live-in maid services in UAE for families who need reliable full-time domestic help, cleaning, laundry, household support and documented hiring guidance.',
    badge: 'Premium Live-in Maid Hiring',
    lead: 'Hire a live-in maid in UAE through a clear, respectful and well-documented process designed for busy families, villas, apartments and households that need dependable daily support.',
    book: 'Book Consultation',
    whatsapp: 'WhatsApp Inquiry',
    whyTitle: 'Why Families Choose INAYA',
    whatTitle: 'What is a Live-in Maid Service?',
    whatText: 'A live-in maid is full-time domestic support who stays in the employer household and helps with day-to-day home management. INAYA supports families by understanding requirements, explaining options, coordinating documentation and guiding the hiring journey with privacy, clarity and professional follow-up.',
    includedTitle: 'Services Included',
    perfectTitle: 'Perfect For',
    imageNote: 'Image placeholders are ready. Upload service visuals later under /public/images/services/live-in/',
    why: ['Licensed UAE process guidance', 'Verified documentation support', 'Dedicated family coordinator', 'Clear replacement support policy', 'Privacy-first communication', 'Fast consultation and follow-up'],
    included: ['Daily cleaning and room care', 'Laundry and ironing support', 'Kitchen assistance and meal prep', 'Childcare support where suitable', 'Elderly household assistance', 'Pet-friendly home support', 'Villa and apartment routines', 'Organized daily task planning'],
    perfect: ['Working families', 'Large villas', 'New parents', 'Elderly households', 'Busy professionals', 'Families needing consistent help'],
    cards: [
      { title: 'Full-time household support', text: 'Ideal for families who need reliable help throughout the week with cleaning, laundry and home routines.' },
      { title: 'Clear hiring guidance', text: 'We explain the service options, expected duties, documentation and next steps before confirmation.' },
      { title: 'Premium family experience', text: 'Communication stays private, organized and focused on what your home actually needs.' }
    ]
  },
  ar: {
    title: 'خدمات الخادمات المقيمات في الإمارات',
    meta: 'خدمات خادمات مقيمات في الإمارات للأسر التي تحتاج إلى مساعدة منزلية بدوام كامل مع تنظيف وغسيل ودعم منزلي وإرشاد واضح للتوظيف.',
    badge: 'توظيف خادمة مقيمة بشكل منظم',
    lead: 'استعن بخادمة مقيمة في الإمارات من خلال عملية واضحة ومحترمة ومنظمة تناسب الأسر المشغولة والفلل والشقق والمنازل التي تحتاج إلى دعم يومي موثوق.',
    book: 'احجز استشارة',
    whatsapp: 'استفسار واتساب',
    whyTitle: 'لماذا تختار الأسر عناية؟',
    whatTitle: 'ما هي خدمة الخادمة المقيمة؟',
    whatText: 'الخادمة المقيمة هي دعم منزلي بدوام كامل تقيم في منزل صاحب العمل وتساعد في إدارة المهام اليومية. تدعم عناية الأسر من خلال فهم الاحتياجات، شرح الخيارات، تنسيق المستندات، وتوجيه رحلة التوظيف بخصوصية ووضوح ومتابعة احترافية.',
    includedTitle: 'الخدمات المشمولة',
    perfectTitle: 'مناسبة لـ',
    imageNote: 'أماكن الصور جاهزة. يمكن رفع صور الخدمة لاحقاً داخل /public/images/services/live-in/',
    why: ['إرشاد لعملية مرخصة في الإمارات', 'دعم التحقق من المستندات', 'منسق مخصص للأسرة', 'سياسة دعم للاستبدال بوضوح', 'تواصل يحافظ على الخصوصية', 'استشارة ومتابعة سريعة'],
    included: ['تنظيف يومي وترتيب الغرف', 'غسيل وكي الملابس', 'مساعدة في المطبخ والتحضير', 'دعم رعاية الأطفال عند المناسبة', 'مساعدة منزلية لكبار السن', 'دعم للمنازل التي لديها حيوانات أليفة', 'روتين للفلل والشقق', 'تنظيم المهام اليومية'],
    perfect: ['الأسر العاملة', 'الفلل الكبيرة', 'الآباء الجدد', 'منازل كبار السن', 'المهنيون المشغولون', 'الأسر التي تحتاج دعماً ثابتاً'],
    cards: [
      { title: 'دعم منزلي بدوام كامل', text: 'مناسب للأسر التي تحتاج إلى مساعدة موثوقة طوال الأسبوع في التنظيف والغسيل وروتين المنزل.' },
      { title: 'إرشاد واضح للتوظيف', text: 'نشرح خيارات الخدمة والمهام المتوقعة والمستندات والخطوات التالية قبل التأكيد.' },
      { title: 'تجربة أسرية مميزة', text: 'يبقى التواصل خاصاً ومنظماً ومركزاً على ما يحتاجه منزلك فعلاً.' }
    ]
  }
};

export async function generateMetadata({ params: { locale, slug } }: { params: { locale: string; slug: string } }): Promise<Metadata> {
  const service = getService(slug);
  if (!service) return {};
  const lang = locale === 'ar' ? 'ar' : 'en';
  const isLiveIn = slug === 'live-in-maid';
  return {
    title: isLiveIn ? liveIn[lang].title : service.name[lang],
    description: isLiveIn ? liveIn[lang].meta : service.short[lang]
  };
}

function CheckIcon({ className = '' }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} aria-hidden="true"><path d="m5 12 4 4L19 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function ImageBlock({ label }: { label: string }) {
  return (
    <div aria-label={label} className="relative min-h-[320px] overflow-hidden rounded-[28px] border border-white/75 bg-[linear-gradient(135deg,#efe9de,#ffffff,#e7edf6)] shadow-[0_28px_85px_rgba(7,22,74,0.10)] ring-1 ring-accent-500/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_20%,rgba(191,164,106,0.22),transparent_16rem),radial-gradient(circle_at_78%_76%,rgba(7,22,74,0.10),transparent_18rem)]" />
      <div className="absolute inset-6 rounded-[22px] border border-white/75 bg-white/20 backdrop-blur-sm" />
      <div className="absolute inset-x-10 bottom-10 h-px bg-gradient-to-r from-transparent via-accent-500 to-transparent" />
    </div>
  );
}

export default async function ServiceDetailPage({ params: { locale, slug } }: { params: { locale: string; slug: string } }) {
  const service = getService(slug);
  if (!service) notFound();
  const isArabic = locale === 'ar';
  const lang = isArabic ? 'ar' : 'en';
  const isLiveIn = slug === 'live-in-maid';
  const copy = isLiveIn ? liveIn[lang] : null;

  if (!copy) {
    return (
      <div className="overflow-hidden bg-ivory text-ink">
        <section className="relative overflow-hidden py-20">
          <div className="container-x text-center">
            <h1 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-4xl font-bold text-primary-900 sm:text-6xl`}>{service.name[lang]}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-ink/70">{service.description[lang]}</p>
            <Link href={`/${locale}/booking`} className="btn-primary mt-8">{isArabic ? 'احجز الخدمة' : 'Book This Service'}</Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="overflow-hidden bg-[linear-gradient(180deg,#fbfaf7,#f8f6f0_48%,#ffffff)] text-ink">
      <section className="relative px-6 py-20 lg:px-10 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(191,164,106,0.18),transparent_28rem),radial-gradient(circle_at_10%_50%,rgba(7,22,74,0.08),transparent_26rem)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-accent-500/25 bg-white/70 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-accent-700 shadow-sm backdrop-blur-xl">{copy.badge}</span>
            <h1 className={`${isArabic ? 'font-arabic leading-[1.28]' : 'font-heading leading-[1.03]'} mt-7 text-[2.7rem] font-bold tracking-[-0.055em] text-primary-900 sm:text-[4.5rem]`}>{copy.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-ink/68">{copy.lead}</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href={`/${locale}/booking?service=${slug}`} className="inline-flex items-center justify-center rounded-full bg-primary-900 px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[0_18px_45px_rgba(7,22,74,0.16)] transition hover:-translate-y-0.5">{copy.book}</Link>
              <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center rounded-full border border-accent-500/35 bg-white/60 px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-primary-900 shadow-[0_14px_35px_rgba(7,22,74,0.06)] backdrop-blur-xl transition hover:-translate-y-0.5">{copy.whatsapp}</Link>
            </div>
          </div>
          <ImageBlock label="Live-in maid service hero image" />
        </div>
      </section>

      <section className="px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            {copy.cards.map((card) => (
              <div key={card.title} className="rounded-[28px] border border-white/75 bg-white/62 p-7 shadow-[0_24px_75px_rgba(7,22,74,0.075)] ring-1 ring-accent-500/10 backdrop-blur-2xl transition hover:-translate-y-1 hover:bg-white/80">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-accent-500/14 text-accent-700 ring-1 ring-accent-500/22">✓</div>
                <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-2xl font-bold text-primary-900`}>{card.title}</h2>
                <p className="mt-4 text-sm leading-7 text-ink/64">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-18 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <ImageBlock label="Live-in maid duties image" />
          <div className="rounded-[30px] border border-white/75 bg-white/54 p-8 shadow-[0_28px_90px_rgba(7,22,74,0.08)] ring-1 ring-accent-500/10 backdrop-blur-2xl lg:p-11">
            <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-3xl font-bold tracking-[-0.04em] text-primary-900 sm:text-4xl`}>{copy.whatTitle}</h2>
            <p className="mt-6 text-base leading-9 text-ink/68">{copy.whatText}</p>
            <p className="mt-5 text-sm font-semibold text-accent-700">{copy.imageNote}</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-3xl font-bold tracking-[-0.04em] text-primary-900 sm:text-4xl`}>{copy.whyTitle}</h2>
            <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-accent-500 to-transparent" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {copy.why.map((item) => (
              <div key={item} className="flex items-start gap-4 rounded-[22px] border border-white/75 bg-white/58 p-5 shadow-[0_18px_55px_rgba(7,22,74,0.055)] ring-1 ring-accent-500/8 backdrop-blur-xl">
                <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-accent-700" />
                <p className="font-semibold text-primary-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-[30px] border border-white/75 bg-white/58 p-8 shadow-[0_24px_75px_rgba(7,22,74,0.07)] ring-1 ring-accent-500/10 backdrop-blur-2xl">
            <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-3xl font-bold text-primary-900`}>{copy.includedTitle}</h2>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {copy.included.map((item) => <div key={item} className="rounded-2xl border border-accent-500/12 bg-white/58 p-4 text-sm font-semibold text-ink/72">{item}</div>)}
            </div>
          </div>
          <div className="rounded-[30px] border border-white/75 bg-white/58 p-8 shadow-[0_24px_75px_rgba(7,22,74,0.07)] ring-1 ring-accent-500/10 backdrop-blur-2xl">
            <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-3xl font-bold text-primary-900`}>{copy.perfectTitle}</h2>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {copy.perfect.map((item) => <div key={item} className="rounded-2xl border border-accent-500/12 bg-white/58 p-4 text-sm font-semibold text-ink/72">{item}</div>)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
