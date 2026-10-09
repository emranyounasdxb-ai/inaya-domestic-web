import GuideContent from '@/components/GuideContent';
import PageBreadcrumbs from '@/components/PageBreadcrumbs';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isArabic = locale === 'ar';
  const points = isArabic
    ? ['حدد الخدمة والاتفاق والتواريخ والمدفوعات ذات الصلة', 'صف الفرق بين المهام المتفق عليها والمشكلة الفعلية', 'حدد الإجراء المطلوب: توضيح أو استبدال أو استرداد', 'احتفظ بالطلب والردود وأي نتيجة مكتوبة']
    : ['Identify the service, agreement, dates and relevant payments', 'Describe the difference between agreed duties and the actual issue', 'State the remedy requested: clarification, replacement or refund', 'Keep the request, replies and any written outcome'];
  const steps = isArabic ? [
    { title: 'جهز الطلب والسجلات', text: 'شارك الاسم وبيانات التواصل ورقم الحجز أو الاتفاق إن وجد. أرفق النطاق المتفق عليه والإيصالات والتواريخ ووصفاً محدداً للملاحظة والإجراء المطلوب. أرسل السجلات ذات الصلة فقط، ولا ترسل معلومات عائلية أو مستندات هوية غير لازمة.' },
    { title: 'اطلب تأكيد الاستلام والمتابعة', text: 'اطلب تأكيد استلام الطلب ورقماً مرجعياً إن كان مستخدماً، واسم المسؤول عن المتابعة وموعد التحديث التالي المتوقع. احتفظ بهذه المعلومات مع الطلب الأصلي. استخدم السجل المؤرخ نفسه للطلب والردود اللاحقة.' },
    { title: 'راجع النتيجة كتابةً', text: 'اطلب بيان الأساس التعاقدي أو القانوني للنتيجة والخطوة التالية. إذا كان الاسترداد مستحقاً، يجب توضيح المبلغ وطريقة حسابه وأي خصومات مقترحة وأساسها. وللاستبدال، اطلب الشروط والنطاق والتوقيت المقترح. حدد النقاط التي بقيت دون حل واطلب مراجعتها عبر البريد الإلكتروني نفسه.' }
  ] : [
    { title: 'Prepare the request and records', text: 'Share your name, contact details and booking or agreement reference if available. Include the agreed scope, receipts, dates, a specific description of the concern and the remedy requested. Send relevant records only, without unnecessary family information or identity documents.' },
    { title: 'Request acknowledgement and follow-up', text: 'Ask for confirmation that the request was received, a reference if one is used, the person handling it and the expected next update. Keep this with the original request. Use the same dated record for the request and subsequent replies.' },
    { title: 'Review the outcome in writing', text: 'Ask for the contractual or legal basis for the outcome and the next action. If a refund is due, request the amount, calculation and any proposed deductions with their basis. For replacement, request the conditions, scope and proposed timing. Identify unresolved points and request further review through the same email channel.' }
  ];
  return (
    <main className="bg-[#fbfaf7] px-6 py-16 text-primary-900 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <p className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-accent-700">{isArabic ? 'إجراءات الدعم' : 'Support Process'}</p>
        <h1 className="mt-4 font-heading text-4xl font-bold tracking-[-0.05em] sm:text-5xl">{isArabic ? 'إجراءات الدعم لخدمات عناية' : 'Support Process for INAYA Services'}</h1>
        <p className="mt-5 max-w-3xl text-sm leading-8 text-primary-900/72">{isArabic ? 'توضح هذه الصفحة كيف تتم مراجعة الملاحظات وطلبات الدعم حسب الخدمة والتوفر والاتفاق المؤكد.' : 'This page explains how concerns and support requests are reviewed based on service type, availability and confirmed agreement.'}</p>
        <PageBreadcrumbs locale={locale} route="support-process" />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {points.map((item) => <div key={item} className="rounded-2xl bg-white p-5 shadow-[0_18px_55px_rgba(7,22,74,0.06)]">✓ {item}</div>)}
        </div>
        <section className="mt-10 rounded-[26px] bg-white p-7 shadow-[0_18px_55px_rgba(7,22,74,0.06)]">
          <h2 className="font-heading text-2xl font-bold">{isArabic ? 'وسائل دعم عناية' : 'INAYA support channels'}</h2>
          <p className="mt-4 text-sm leading-7 text-primary-900/75">{isArabic ? 'استخدم وسائل المكتب المعتمدة للاستفسار عن خدمة قائمة. إذا بدأت الملاحظة هاتفياً، احتفظ أيضاً بملخص مكتوب وتاريخه.' : 'Use the published office channels for an existing-service concern. If you begin by telephone, also keep a written summary and its date.'}</p>
          <ul className="mt-5 space-y-3 text-sm leading-7">
            <li>{isArabic ? 'هاتف المكتب: ' : 'Office telephone: '}<a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="underline"><bdi dir="ltr">{siteConfig.phone}</bdi></a></li>
            <li>{isArabic ? 'واتساب: ' : 'WhatsApp: '}<a href={`https://wa.me/${siteConfig.whatsapp}`} className="underline"><bdi dir="ltr">+971 50 203 6767</bdi></a></li>
            <li>{isArabic ? 'البريد الإلكتروني: ' : 'Email: '}<a href={`mailto:${siteConfig.email}`} className="underline"><bdi dir="ltr">{siteConfig.email}</bdi></a></li>
            <li>{isArabic ? 'المكتب: جراند مول، الطابق الأرضي، شارع الشيخ خليفة بن زايد، الراشدية 3، عجمان. نسق موعد الزيارة أولاً.' : 'Office: Grand Mall, ground floor, Sheikh Khalifa Bin Zayed Street, Al Rashidiya 3, Ajman. Arrange a visit first.'}</li>
            <li>{siteConfig.hours[isArabic ? 'ar' : 'en']}</li>
          </ul>
        </section>
        <section className="mt-10 grid gap-5 lg:grid-cols-3">
          {steps.map((step) => <article key={step.title} className="rounded-[26px] bg-white p-6 shadow-[0_18px_55px_rgba(7,22,74,0.06)]"><h2 className="font-heading text-xl font-bold">{step.title}</h2><p className="mt-4 text-sm leading-7 text-primary-900/75">{step.text}</p></article>)}
        </section>
        <section data-content="official-escalation" className="mt-10 rounded-[26px] bg-white p-7 shadow-[0_18px_55px_rgba(7,22,74,0.06)]">
          <h2 className="font-heading text-2xl font-bold">{isArabic ? 'التصعيد الرسمي لدى وزارة الموارد البشرية والتوطين' : 'Official escalation through MOHRE'}</h2>
          <p className="mt-4 text-sm leading-7 text-primary-900/75">{isArabic ? 'للخلاف مع مكتب استقدام العمالة المساعدة الذي لم يحل ودياً، يحدد دليل الوزارة لأصحاب العمل الموقع الإلكتروني وتطبيق MOHRE UAE ومركز الاستشارات والمطالبات العمالية على الرقم 80084 كقنوات للشكوى. ولنزاع بين صاحب العمل والعاملة، اطلب مسار شكوى العمالة المساعدة المناسب بدلاً من افتراض انطباق خدمة شكاوى موظفي القطاع الخاص. احتفظ بالاتفاق والإيصالات والسجل المؤرخ للتواصل وأي رقم مرجعي تصدره الوزارة.' : 'For a dispute with a domestic worker recruitment office that has not been resolved amicably, MOHRE’s employers guide identifies the ministry website, MOHRE UAE app and Labour Claims and Advisory Call Centre on 80084 as complaint channels. For an employer–worker dispute, ask for the appropriate domestic-worker complaint route rather than assuming the private-sector employee service applies. Keep the agreement, receipts, dated communication and any reference issued by MOHRE.'}</p>
          <p className="mt-4 text-sm leading-7 text-primary-900/75">{isArabic ? 'مراجعة عناية الداخلية لا تلغي الحقوق القانونية ولا تمنع استخدام القناة الرسمية المناسبة. تحدد الوزارة المتطلبات والإجراء المنطبق على الحالة؛ ولا يعد هذا القسم وعداً بموعد قرار حكومي.' : 'INAYA’s internal review does not remove statutory rights or prevent use of the appropriate official channel. MOHRE determines the requirements and procedure for the case; this section does not promise a government decision date.'}</p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
            <a href="tel:80084" className="underline">{isArabic ? 'اتصل بالوزارة: 80084' : 'Call MOHRE: 80084'}</a>
            <a href="https://www.mohre.gov.ae/assets/download/1f2ed6/domestic-workers-employers-guide-en_638924949072877160.pdf.aspx" className="underline">{isArabic ? 'دليل الوزارة لأصحاب العمل (بالإنجليزية)' : 'MOHRE employers guide (English)'}</a>
            <a href={`https://www.mohre.gov.ae/${isArabic ? 'ar' : 'en'}/services/services-directory`} className="underline">{isArabic ? 'دليل خدمات الوزارة' : 'MOHRE service directory'}</a>
            <Link href={`/${locale}/refund-policy/`} className="underline">{isArabic ? 'قواعد الاسترداد والاستبدال' : 'Refund and replacement rules'}</Link>
          </div>
        </section>
        <GuideContent locale={locale} route="support-process" />
      </div>
    </main>
  );
}
