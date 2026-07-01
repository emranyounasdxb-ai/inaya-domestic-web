import type { Metadata } from 'next';
import Link from 'next/link';

export function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
  const isArabic = locale === 'ar';
  const title = isArabic ? 'سياسة الاسترداد والاستبدال | عناية للعمالة المنزلية' : 'Refund & Replacement Policy | INAYA Domestic Workers';
  const description = isArabic
    ? 'تفاصيل سياسة الاسترداد والاستبدال لخدمات عناية للعمالة المنزلية في الإمارات، مع خطوات المراجعة والأهلية والتواصل والدعم.'
    : 'Detailed refund and replacement policy for INAYA Domestic Workers services in the UAE, including review steps, eligibility, communication and support.';

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/refund-policy`,
      languages: { en: '/en/refund-policy', ar: '/ar/refund-policy' }
    },
    openGraph: { title, description, type: 'website', locale: isArabic ? 'ar_AE' : 'en_AE', url: `/${locale}/refund-policy` },
    twitter: { card: 'summary_large_image', title, description }
  };
}

export default function RefundPage({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === 'ar';
  const copy = isArabic ? {
    badge: 'سياسة الاسترداد والاستبدال',
    title: 'سياسة الاسترداد والاستبدال لخدمات عناية',
    lead: 'توضح هذه الصفحة طريقة مراجعة طلبات الاسترداد أو الاستبدال حسب نوع الخدمة، اتفاق العميل، التوقيت، التوفر، المستندات، ومرحلة الطلب.',
    updated: 'آخر تحديث: 2026',
    highlights: ['مراجعة كل حالة بشكل منفصل', 'الشروط تعتمد على اتفاق الخدمة', 'الاستبدال يخضع للتوفر', 'التواصل الواضح يسرع المراجعة'],
    sections: [
      ['متى تتم مراجعة الطلب؟', 'تتم مراجعة طلب الاسترداد أو الاستبدال عندما يشارك العميل تفاصيل واضحة عن الخدمة والملاحظة وتاريخ الطلب. يراجع فريق عناية اتفاق الخدمة، المرحلة التي وصل إليها الطلب، والعمل الذي تم إنجازه قبل شرح الخيارات المتاحة.', ['نوع الخدمة والباقة المختارة', 'تاريخ الطلب أو الحجز', 'تفاصيل الملاحظة أو سبب الطلب', 'أي رسائل أو مستندات داعمة']],
      ['أهلية الاسترداد', 'الاسترداد لا يتم بشكل تلقائي. تتم مراجعته حسب الاتفاق المؤكد، الرسوم التي تم دفعها، أي عمل تم إنجازه، تكاليف الجهات الخارجية أو الحكومية، ومرحلة الخدمة وقت تقديم الطلب.', ['الاسترداد يعتمد على شروط الاتفاق', 'قد توجد رسوم غير قابلة للاسترداد', 'العمل المنجز يؤثر على القرار', 'يتم شرح النتيجة للعميل بوضوح']],
      ['أهلية الاستبدال', 'قد يكون الاستبدال خياراً مناسباً في بعض الحالات حسب نوع الخدمة والباقة والتوفر. تستخدم عناية ملاحظات العميل لتحسين المطابقة التالية وتوضيح المهام والتوقعات بشكل أفضل.', ['الاستبدال يخضع للتوفر', 'يتم مراجعة سبب الطلب', 'قد تتغير الخيارات حسب المتطلبات الجديدة', 'المتابعة تساعد على تحسين التجربة']],
      ['كيفية تقديم الطلب', 'لرفع طلب مراجعة، يرجى التواصل مع فريق عناية عبر الهاتف أو واتساب أو البريد الإلكتروني مع ذكر الاسم، رقم التواصل، نوع الخدمة، تفاصيل الحجز، وسبب الطلب بوضوح.', ['اسم العميل ورقم الهاتف', 'نوع الخدمة وتفاصيل الحجز', 'سبب الطلب بشكل واضح', 'أي صور أو مستندات عند الحاجة']],
      ['التوقيت والمتابعة', 'مدة المراجعة تعتمد على وضوح التفاصيل، نوع الخدمة، توفر البدائل، والمستندات المطلوبة. يهدف فريق عناية إلى تقديم رد واضح وعادل ومنظم للعميل.', ['الطلبات الواضحة تتم مراجعتها أسرع', 'التوفر قد يؤثر على وقت الاستبدال', 'قد تتطلب بعض الحالات مستندات إضافية', 'يتم توضيح الخطوة التالية بعد المراجعة']],
      ['ملاحظات مهمة', 'تختلف شروط الاسترداد والاستبدال حسب نوع الخدمة أو الاتفاق أو الباقة. لذلك يجب دائماً الرجوع إلى التفاصيل المؤكدة مع فريق عناية قبل اتخاذ أي قرار نهائي.', ['هذه الصفحة إرشادية وليست بديلاً عن الاتفاق المؤكد', 'الرسوم الرسمية قد تكون منفصلة', 'احتفظ بالإيصالات ورسائل التأكيد', 'تواصل مبكراً عند وجود أي ملاحظة']]
    ],
    faqs: [
      ['هل الاسترداد مضمون دائماً؟', 'لا. يتم تقييم الاسترداد حسب اتفاق الخدمة ومرحلة الطلب والرسوم والعمل المنجز.'],
      ['هل يمكن طلب استبدال بدل الاسترداد؟', 'نعم، يمكن مناقشة الاستبدال عندما يكون مناسباً ويخضع للتوفر وشروط الاتفاق.'],
      ['ماذا أرسل عند رفع الطلب؟', 'أرسل الاسم ورقم التواصل ونوع الخدمة وتفاصيل الحجز وسبب الطلب وأي مستندات داعمة.'],
      ['كم يستغرق الرد؟', 'يعتمد التوقيت على وضوح التفاصيل ونوع الخدمة والتوفر، ويتم توضيح الخطوة التالية بعد المراجعة.']
    ],
    cta: 'تواصل مع عناية',
    ctaText: 'هل لديك طلب مراجعة متعلق بالخدمة؟ شارك التفاصيل مع فريق عناية ليتم فحص الحالة بوضوح.'
  } : {
    badge: 'Refund & Replacement Policy',
    title: 'Refund & Replacement Policy for INAYA Services',
    lead: 'This page explains how refund or replacement requests are reviewed based on service type, customer agreement, timing, availability, documents and request stage.',
    updated: 'Last updated: 2026',
    highlights: ['Every case is reviewed individually', 'Terms depend on the service agreement', 'Replacement is subject to availability', 'Clear communication speeds up review'],
    sections: [
      ['When a request is reviewed', 'A refund or replacement request is reviewed when the customer shares clear service details, concern notes and request timing. INAYA checks the confirmed agreement, request stage and work already completed before explaining available options.', ['Selected service type and package', 'Request or booking date', 'Clear reason for the request', 'Any supporting messages or documents']],
      ['Refund eligibility', 'Refunds are not automatic. Each request is reviewed according to the confirmed agreement, paid fees, work already completed, third-party or government costs and the service stage at the time of the request.', ['Eligibility depends on agreement terms', 'Some fees may be non-refundable', 'Completed work affects the decision', 'The outcome is explained clearly']],
      ['Replacement eligibility', 'Replacement may be a suitable option in selected cases depending on service type, package and availability. INAYA uses customer feedback to improve the next match and clarify duties and expectations.', ['Replacement depends on availability', 'The reason for request is reviewed', 'Options may change with new requirements', 'Follow-up helps improve the experience']],
      ['How to submit a request', 'To submit a review request, contact INAYA by phone, WhatsApp or email with your name, contact number, service type, booking details and a clear explanation of the request.', ['Customer name and mobile number', 'Service type and booking details', 'Clear reason for the request', 'Photos or documents where needed']],
      ['Timeline and follow-up', 'Review timing depends on the clarity of details, service type, availability of alternatives and required documents. INAYA aims to provide a clear, fair and organized response.', ['Clear requests are reviewed faster', 'Availability can affect replacement timing', 'Some cases may need more documents', 'Next steps are explained after review']],
      ['Important notes', 'Refund and replacement terms can vary by service type, agreement or package. Customers should always refer to the details confirmed by the INAYA team before making a final decision.', ['This page is general guidance', 'Official fees may be separate', 'Keep receipts and confirmations', 'Contact early when there is a concern']]
    ],
    faqs: [
      ['Are refunds always guaranteed?', 'No. Refunds are reviewed according to the service agreement, request stage, fees and completed work.'],
      ['Can I request replacement instead of refund?', 'Yes. Replacement can be discussed where suitable, subject to availability and agreement terms.'],
      ['What should I send with my request?', 'Send your name, contact number, service type, booking details, reason for the request and any supporting documents.'],
      ['How long does the review take?', 'Timing depends on the clarity of details, service type and availability. The next step is explained after review.']
    ],
    cta: 'Contact INAYA',
    ctaText: 'Have a service-related review request? Share the details with INAYA so the team can check your case clearly.'
  };

  return (
    <main className="overflow-hidden bg-[#fbfaf7] text-primary-900">
      <section className="relative px-6 py-16 lg:px-10 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(191,164,106,0.20),transparent_28rem),radial-gradient(circle_at_80%_28%,rgba(7,22,74,0.09),transparent_30rem)]" />
        <div className="relative mx-auto grid max-w-6xl gap-9 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div>
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-accent-700">{copy.badge}</p>
            <h1 className={`${isArabic ? 'font-arabic leading-[1.25]' : 'font-heading leading-[1.02]'} mt-4 max-w-4xl text-[2.35rem] font-bold tracking-[-0.055em] sm:text-[3.6rem]`}>{copy.title}</h1>
            <p className="mt-5 max-w-2xl text-[0.98rem] leading-8 text-primary-900/72">{copy.lead}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={`/${locale}/contact`} className="rounded-full bg-primary-900 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-[0_18px_45px_rgba(7,22,74,0.16)]">{copy.cta}</Link>
              <Link href={`/${locale}/service-guidelines`} className="rounded-full border border-accent-500/28 bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-primary-900">{isArabic ? 'سياسة الخدمة' : 'Service Guidelines'}</Link>
            </div>
          </div>
          <div className="rounded-[30px] border border-white/80 bg-white/78 p-6 shadow-[0_24px_70px_rgba(7,22,74,0.08)] ring-1 ring-accent-500/10">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-accent-700">{copy.updated}</p>
            <div className="mt-5 grid gap-3">
              {copy.highlights.map((item) => <div key={item} className="rounded-2xl border border-primary-900/8 bg-[#f8f6f0] px-4 py-3 text-sm font-semibold leading-6 text-primary-900/76">✓ {item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-2">
          {copy.sections.map(([title, text, points]) => (
            <article key={title as string} className="rounded-[26px] border border-white/80 bg-white/78 p-6 shadow-[0_18px_55px_rgba(7,22,74,0.06)]">
              <h2 className={`${isArabic ? 'font-arabic leading-[1.35]' : 'font-heading leading-tight'} text-2xl font-bold tracking-[-0.035em] text-primary-900`}>{title}</h2>
              <p className="mt-4 text-sm leading-7 text-primary-900/70">{text}</p>
              <div className="mt-5 grid gap-3">
                {(points as string[]).map((point) => <div key={point} className="rounded-2xl bg-[#fbfaf7] px-4 py-3 text-xs font-semibold leading-5 text-primary-900/72">✓ {point}</div>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f7f4ee] px-6 py-14 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[26px] border border-white/80 bg-white/82 p-7 shadow-[0_18px_55px_rgba(7,22,74,0.06)]">
            <h2 className="font-heading text-2xl font-bold tracking-[-0.035em] text-primary-900">{isArabic ? 'أسئلة شائعة' : 'Frequently asked questions'}</h2>
            <div className="mt-5 grid gap-3">
              {copy.faqs.map(([question, answer]) => <details key={question} className="rounded-2xl border border-primary-900/8 bg-white px-4 py-3"><summary className="cursor-pointer text-sm font-bold text-primary-900">{question}</summary><p className="mt-3 text-xs leading-6 text-primary-900/75">{answer}</p></details>)}
            </div>
          </div>
          <div className="rounded-[26px] bg-primary-900 p-7 text-white shadow-[0_24px_70px_rgba(7,22,74,0.18)]">
            <h2 className="font-heading text-2xl font-bold">{isArabic ? 'تحتاج مساعدة؟' : 'Need help?'}</h2>
            <p className="mt-4 text-sm leading-7 text-white/85">{copy.ctaText}</p>
            <Link href={`/${locale}/contact`} className="mt-6 inline-flex rounded-full bg-accent-500 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-primary-900 transition hover:bg-accent-300">{copy.cta}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
