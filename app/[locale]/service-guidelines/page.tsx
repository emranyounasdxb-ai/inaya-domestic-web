import GuideContent from '@/components/GuideContent';
import PageBreadcrumbs from '@/components/PageBreadcrumbs';
import Link from 'next/link';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isArabic = locale === 'ar';
  const preparation = isArabic ? [
    'حدد المهام الأساسية وأولوياتها وتكرارها؛ وافصل التنظيف ورعاية الأطفال والطبخ عند مناقشة النطاق.',
    'اتفق على أيام العمل والساعات والراحة وتسليم المهام. الإقامة داخل المنزل تصف السكن ولا تعني العمل طوال اليوم.',
    'وضح دخول المبنى ومواقف السيارات والمفاتيح وأي مناطق خاصة؛ وحدد شخصاً للتواصل عند الوصول.',
    'راجع مسؤولية توفير أدوات التنظيف والمعدات وتعليمات استخدامها قبل البدء؛ ولا تفترض شمولها في العرض.',
    'جهز تعليمات مكتوبة للروتين والحساسيات والتفضيلات ذات الصلة، وأرقام التواصل عند الطوارئ؛ واتفق على حدود أي دور للرعاية.',
    'راجع السكن والوجبات عند انطباقهما ومسؤولية كل طرف، وحدد طريقة رفع الملاحظات وتوثيق أي تغيير في المهام.'
  ] : [
    'List the essential duties, priorities and frequency; separate cleaning, childcare and cooking when discussing the scope.',
    'Agree work days, hours, rest and handovers. Living in describes accommodation and does not mean working throughout the day.',
    'Explain building access, parking, keys and private areas; identify a contact person for arrival.',
    'Review responsibility for cleaning supplies, equipment and safe-use instructions before the start; do not assume they are included in the quote.',
    'Prepare written routine instructions, relevant allergies or preferences and emergency contacts; agree the limits of any care role.',
    'Review accommodation and meals where applicable, each party’s responsibilities and how to raise concerns and record changes to duties.'
  ];
  return (
    <main className="bg-[#fbfaf7] px-6 py-16 text-primary-900 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <p className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-accent-700">{isArabic ? 'إرشادات الخدمة' : 'Service Guidelines'}</p>
        <h1 className="mt-4 font-heading text-4xl font-bold tracking-[-0.05em] sm:text-5xl">{isArabic ? 'إرشادات خدمات عناية للعمالة المنزلية' : 'INAYA Domestic Worker Service Guidelines'}</h1>
        <p className="mt-5 max-w-3xl text-sm leading-8 text-primary-900/72">{isArabic ? 'تشرح هذه الصفحة طريقة استقبال طلبات الخدمة ومراجعة المتطلبات وتأكيد التوفر والمتابعة قبل الحجز.' : 'This page explains how INAYA receives service requests, reviews requirements, confirms availability and supports families before booking.'}</p>
        <PageBreadcrumbs locale={locale} route="service-guidelines" />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {(isArabic ? ['مراجعة احتياج المنزل والأسرة قبل الترشيح', 'تأكيد التوفر حسب الإمارة ونوع الخدمة', 'توضيح السعر والنطاق قبل الحجز', 'متابعة الطلبات والملاحظات بوضوح'] : ['Review family and home requirements before recommendation', 'Confirm availability by emirate and service type', 'Clarify price and scope before booking', 'Follow up on requests and concerns clearly']).map((item) => <div key={item} className="rounded-2xl bg-white p-5 shadow-[0_18px_55px_rgba(7,22,74,0.06)]">✓ {item}</div>)}
        </div>
        <GuideContent locale={locale} route="service-guidelines" />
        <section data-content="household-preparation" className="mt-10 rounded-[26px] bg-white p-7 shadow-[0_18px_55px_rgba(7,22,74,0.06)]">
          <h2 className="font-heading text-2xl font-bold">{isArabic ? 'تجهيز المنزل قبل بدء الخدمة' : 'Prepare the household before service starts'}</h2>
          <p className="mt-4 text-sm leading-7 text-primary-900/75">{isArabic ? 'يمكن تجهيز المنزل بعد تأكيد الترتيب ببيان واضح للمهام وترتيبات الدخول وتعليمات السلامة. هذه قائمة استعداد للأسرة، وليست قائمة بمزايا باقة أو شرطاً موحداً لكل خدمة.' : 'Once an arrangement is confirmed, prepare a clear duty brief, access plan and safety instructions. This is a household preparation checklist, not a list of package benefits or a uniform requirement for every service.'}</p>
          <ul className="mt-5 list-inside list-disc space-y-4 text-sm leading-7 text-primary-900/75">{preparation.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
        <section data-content="contract-responsibilities" className="mt-10 rounded-[26px] bg-white p-7 shadow-[0_18px_55px_rgba(7,22,74,0.06)]">
          <h2 className="font-heading text-2xl font-bold">{isArabic ? 'الاتفاق والمسؤوليات وحقوق العاملة' : 'Agreements, responsibilities and worker rights'}</h2>
          <p className="mt-4 text-sm leading-7 text-primary-900/75">{isArabic ? 'حدد صاحب العمل والجهة المسؤولة عن كل دفعة وإجراء رسمي. اتفاق الاستقدام أو الخدمة وعقد العمل قد يحددان التزامات مختلفة. احتفظ بنسخ توضح الدور والمهام والأجر والمدة والجدول والراحة والتكاليف وشروط الإنهاء. إذا تغير النطاق، وثق التعديل وراجع أثره على الجدول والتكاليف قبل تطبيقه.' : 'Identify the employer and the party responsible for each payment and official step. A recruitment or service agreement and an employment contract may set different obligations. Keep copies recording the role, duties, wage, period, schedule, rest, costs and termination terms. If the scope changes, record the change and review its effect on the schedule and costs before applying it.'}</p>
          <p className="mt-4 text-sm leading-7 text-primary-900/75">{isArabic ? 'الإرشاد الحكومي الإماراتي بشأن العمالة المساعدة يوضح حقوقاً تشمل دفع الأجر والراحة والإجازات وظروف العمل الآمنة والاحترام وحيازة وثائق الهوية الشخصية. لا تلغي تسمية الباقة أو الإقامة داخل المنزل الحقوق المنطبقة. راجع المتطلبات الرسمية للترتيب الفعلي بدلاً من افتراض أن كل عاملة لدى الأسرة تعمل بالشروط نفسها.' : 'UAE Government domestic-worker guidance describes rights including wage payment, rest, leave, safe working conditions, respectful treatment and possession of personal identification documents. A package name or living in the household does not remove applicable rights. Review official requirements for the actual arrangement rather than assuming every worker in a household has the same terms.'}</p>
          <p className="mt-4 text-sm leading-7 text-primary-900/75">{isArabic ? 'عند وجود ملاحظة، استخدم وصف المهام والاتفاق والسجل المؤرخ. ميز طلب تغيير التفضيلات عن الإخلال بالاتفاق. الحقوق القانونية المنطبقة مستقلة عن أي مزايا إضافية للاسترداد أو الاستبدال لدى عناية.' : 'For a concern, use the duty brief, agreement and dated records. Distinguish a preference change from a breach of the agreement. Applicable statutory rights are separate from any additional INAYA refund or replacement benefits.'}</p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
            <a href={`https://u.ae/${isArabic ? 'ar' : 'en'}/information-and-services/jobs/employment-in-the-private-sector/domestic-helpers`} className="underline">{isArabic ? 'حكومة الإمارات: حقوق العمالة المساعدة' : 'UAE Government: domestic worker rights'}</a>
            <Link href={`/${locale}/refund-policy/`} className="underline">{isArabic ? 'الاسترداد والاستبدال' : 'Refunds and replacement'}</Link>
            <Link href={`/${locale}/support-process/`} className="underline">{isArabic ? 'الدعم والشكوى' : 'Support and complaints'}</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
