import type { Metadata } from 'next';
import Link from 'next/link';

type PageProps = {
  params: {
    locale: string;
  };
};

type ServiceCard = {
  icon: string;
  slug: string;
  label: string;
  title: string;
  text: string;
  cta?: string;
};

export function generateMetadata({ params: { locale } }: PageProps): Metadata {
  const isArabic = locale === 'ar';
  const title = isArabic ? 'خدمات العمالة المنزلية في الإمارات | عناية' : 'Domestic Worker Services in UAE | INAYA';
  const description = isArabic
    ? 'استكشف خدمات عناية للعمالة المنزلية في الإمارات: خادمات، مربيات، جليسات أطفال، شيف خاص، مدير منزل، تأشيرة خادمة، استبدال ودعم إداري.'
    : 'Explore INAYA domestic worker services in UAE: live-in maids, live-out maids, nannies, babysitters, private chefs, house managers, maid visa assistance and replacement support.';

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/services`,
      languages: {
        en: '/en/services',
        ar: '/ar/services'
      }
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: isArabic ? 'ar_AE' : 'en_AE',
      url: `/${locale}/services`
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  };
}

export default function ServicesPage({ params: { locale } }: PageProps) {
  const isArabic = locale === 'ar';

  const copy = {
    badge: isArabic ? 'مرخص ومنظم في دولة الإمارات' : 'MOHRE Licensed & Regulated',
    title: isArabic ? 'إعادة تعريف التميز في الخدمات المنزلية' : 'Domestic Excellence Reimagined',
    subtitle: isArabic
      ? 'اختر الدعم المنزلي المناسب لأسرتك. تقدم عناية خدمات منزلية موثوقة ومنظمة للعائلات في جميع أنحاء الإمارات.'
      : 'Choose the right home support for your household. INAYA delivers trusted and organized domestic worker services for families across the UAE.',
    coreTitle: isArabic ? 'كل خدمات عناية المنزلية' : 'All INAYA Domestic Services',
    coreSub: isArabic ? 'خدمات أساسية ومميزة مصممة لتناسب أسلوب حياة الأسرة في الإمارات.' : 'Essential and premium domestic staffing solutions designed around UAE family living.',
    supportTitle: isArabic ? 'الخدمات الإدارية والدعم' : 'Administrative & Support Services',
    supportSub: isArabic ? 'متابعة واضحة للإجراءات والمستندات والتحقق والاستبدال.' : 'Clear support for recruitment, documentation, verification and replacement needs.',
    standardTitle: isArabic ? 'معيار عناية' : 'The INAYA Standard',
    standardText: isArabic
      ? 'كل خدمة من عناية مبنية على تواصل واضح، متابعة منظمة، وتجربة مريحة للأسرة.'
      : 'Every INAYA service is built around clear communication, organized follow-up and a calmer household experience.',
    addTitle: isArabic ? 'خدمات مميزة وإضافات منزلية' : 'Premium Add-ons & Lifestyle Services',
    addSub: isArabic ? 'خدمات إضافية يمكن تنسيقها حول احتياجات المنزل ونمط حياة الأسرة.' : 'Additional services that can be coordinated around your household needs and family lifestyle.',
    bespokeLabel: isArabic ? 'الحل المتكامل' : 'The Ultimate Solution',
    bespokeTitle: isArabic ? 'إدارة منزلية مخصصة' : 'Bespoke Household Management',
    bespokeText: isArabic
      ? 'إلى جانب الخدمات الفردية، يمكن لعناية تنسيق باقات دعم منزلي متكاملة تشمل الخادمات والمربيات والطهاة ومديري المنازل وخدمات الدعم.'
      : 'Beyond individual services, INAYA can coordinate tailored household support packages including maids, nannies, chefs, house managers and support services.',
    consult: isArabic ? 'تحدث مع مستشار' : 'Consult an Advisor',
    learnMore: isArabic ? 'اعرف المزيد' : 'Learn More',
    explore: isArabic ? 'استكشف الخدمة' : 'Explore Service',
    viewAll: isArabic ? 'تواصل معنا' : 'Contact Us'
  };

  const stats = [
    { value: '2%', label: isArabic ? 'اختيار دقيق' : 'Rigorous Selection' },
    { value: '100%', label: isArabic ? 'تحقق من الخلفية' : 'Background Verified' },
    { value: '24/7', label: isArabic ? 'دعم ومتابعة' : 'Concierge Support' }
  ];

  const coreServices: ServiceCard[] = isArabic
    ? [
        { icon: '⌂', slug: 'live-in-maid', label: 'خادمة مقيمة', title: 'خدمات الخادمات المقيمات', text: 'دعم منزلي يومي داخل المنزل للتنظيف والغسيل والمطبخ وروتين الأسرة.' },
        { icon: '◷', slug: 'live-out-maid', label: 'خادمة غير مقيمة', title: 'خدمات الخادمات غير المقيمات', text: 'زيارات مجدولة للمنازل التي تحتاج دعماً مرناً دون إقامة داخلية.' },
        { icon: '✦', slug: 'housemaid', label: 'عاملات المنازل', title: 'خدمات عاملات المنازل', text: 'عاملات منزليات محترفات للمساعدة في التنظيف والترتيب والمهام اليومية.' },
        { icon: '▤', slug: 'housekeeping', label: 'تنظيف وترتيب', title: 'خدمات التنظيف وترتيب المنزل', text: 'خدمة منظمة للغرف والمعيشة والغسيل والمطبخ والحفاظ على منزل مرتب.' },
        { icon: '●', slug: 'full-time-maid', label: 'دوام كامل', title: 'توظيف خادمة بدوام كامل', text: 'مساعدة منزلية متفرغة للعائلات التي تحتاج دعماً ثابتاً طوال الأسبوع.' },
        { icon: '◌', slug: 'part-time-maid', label: 'دوام جزئي', title: 'توظيف خادمة بدوام جزئي', text: 'مساعدة مرنة بالساعة أو حسب الأيام للتنظيف والمهام المنزلية.' },
        { icon: '□', slug: 'monthly-maid-contract', label: 'عقد شهري', title: 'عقد خادمة شهري', text: 'خطط شهرية منتظمة للعائلات التي تحتاج خدمة مستمرة وبتنسيق واضح.' },
        { icon: '⚡', slug: 'on-demand-domestic-help', label: 'عند الطلب', title: 'مساعدة منزلية عند الطلب', text: 'دعم سريع للتنظيف العاجل وتجهيز الضيوف والانتقال والجداول المزدحمة.' },
        { icon: '♧', slug: 'nanny', label: 'رعاية الأطفال', title: 'خدمات المربيات', text: 'مربيات محترفات يقدمن رعاية آمنة ومنظمة للأطفال وروتينهم اليومي.' },
        { icon: '◇', slug: 'executive-nannies', label: 'مربيات تنفيذيات', title: 'Executive Nannies', text: 'رعاية أطفال راقية للأسر المشغولة مع دعم للروتين والتعلم والسفر.' },
        { icon: '☆', slug: 'babysitting', label: 'جليسات أطفال', title: 'خدمات جليسات الأطفال', text: 'رعاية قصيرة أو مسائية أو حسب الطلب للأطفال في بيئة آمنة ومريحة.' },
        { icon: '◍', slug: 'newborn-care', label: 'رعاية المواليد', title: 'خدمات رعاية المواليد', text: 'دعم متخصص للوالدين خلال الأشهر الأولى للطفل بروتين هادئ ومنظم.' },
        { icon: '♨', slug: 'home-cooking', label: 'طبخ منزلي', title: 'خدمات الطبخ المنزلي', text: 'طهاة منزليون لإعداد وجبات يومية طازجة تناسب ذوق الأسرة.' },
        { icon: '◈', slug: 'private-chefs', label: 'شيف خاص', title: 'Private Chefs', text: 'شيف خاص لتجربة طعام منزلية راقية، قوائم أسبوعية ومناسبات خاصة.' },
        { icon: '☷', slug: 'house-managers', label: 'إدارة المنزل', title: 'House Managers', text: 'تنسيق مهني للمنزل، جداول العاملين، المخزون، الخزائن وروتين التدبير.' },
        { icon: '♡', slug: 'elder-care', label: 'كبار السن', title: 'خدمات رعاية المسنين', text: 'رعاية محترمة ورفقة إنسانية لكبار السن مع التركيز على الراحة والسلامة.' },
        { icon: '＋', slug: 'patient-care', label: 'رعاية منزلية', title: 'خدمات الرعاية المنزلية / رعاية المرضى', text: 'مقدمو رعاية للمساعدة اليومية والنظافة والدعم داخل المنزل.' },
        { icon: '☉', slug: 'companion-care', label: 'مرافقة', title: 'خدمات رعاية المرافقة', text: 'رفقة ودعم عاطفي ومساعدة خفيفة لمن يحتاج إلى حضور يومي.' }
      ]
    : [
        { icon: '⌂', slug: 'live-in-maid', label: 'Resident Household Support', title: 'Live-in Maid Services', text: 'Full-time domestic support inside your home for cleaning, laundry, kitchen routines and everyday family comfort.' },
        { icon: '◷', slug: 'live-out-maid', label: 'Scheduled Household Support', title: 'Live-out Maid Services', text: 'Scheduled maid visits for families that need reliable home support without a live-in arrangement.' },
        { icon: '✦', slug: 'housemaid', label: 'Daily Home Assistance', title: 'Housemaid Services', text: 'Professional housemaids for cleaning, organizing, laundry and practical daily household routines.' },
        { icon: '▤', slug: 'housekeeping', label: 'Clean & Organized Living', title: 'Cleaning & Housekeeping Services', text: 'Detailed housekeeping for bedrooms, living areas, laundry, kitchen organization and a well-maintained home.' },
        { icon: '●', slug: 'full-time-maid', label: 'Dedicated Daily Help', title: 'Full-time Maid Hiring', text: 'Dedicated full-time household help for families needing consistent daily cleaning and home management.' },
        { icon: '◌', slug: 'part-time-maid', label: 'Flexible Hourly Help', title: 'Part-time Maid Hiring', text: 'Flexible hourly or scheduled support for cleaning, laundry, ironing and selected household tasks.' },
        { icon: '□', slug: 'monthly-maid-contract', label: 'Regular Monthly Support', title: 'Monthly Maid Contract', text: 'Cost-effective monthly maid plans with regular visits, defined duties and organized follow-up.' },
        { icon: '⚡', slug: 'on-demand-domestic-help', label: 'Fast Home Support', title: 'On-demand Domestic Help', text: 'Quick support for urgent cleaning, guest preparation, relocation days and busy family schedules.' },
        { icon: '♧', slug: 'nanny', label: 'Nurturing Childcare Experts', title: 'Nanny Services', text: 'Caring nannies for safe, structured and engaging childcare support at home.' },
        { icon: '◇', slug: 'executive-nannies', label: 'Premium Childcare', title: 'Executive Nannies', text: 'Premium childcare for executive households, structured routines, learning support and discreet family assistance.' },
        { icon: '☆', slug: 'babysitting', label: 'On-demand Childcare', title: 'Babysitting Services', text: 'Trusted babysitters for short-term, evening, weekend and occasional childcare needs.' },
        { icon: '◍', slug: 'newborn-care', label: 'Specialized Infant Support', title: 'Newborn Care Services', text: 'Specialist newborn support for new parents during the early months with calm and organized routines.' },
        { icon: '♨', slug: 'home-cooking', label: 'Sophisticated Home Dining', title: 'Home Cooking Services', text: 'Home cooks preparing fresh daily meals, family recipes and kitchen routines around your taste.' },
        { icon: '◈', slug: 'private-chefs', label: 'Luxury Home Dining', title: 'Private Chefs', text: 'Private chefs for weekly menus, dietary preferences, family meals and private gatherings at home.' },
        { icon: '☷', slug: 'house-managers', label: 'Executive Home Coordination', title: 'House Managers', text: 'Professional household coordination for staff schedules, wardrobe checks, inventory and home organization.' },
        { icon: '♡', slug: 'elder-care', label: 'Compassionate Senior Support', title: 'Elder Care Services', text: 'Respectful care and companionship for seniors, focused on comfort, safety and dignity.' },
        { icon: '＋', slug: 'patient-care', label: 'Home Care Support', title: 'Home Care / Patient Care Services', text: 'Trained caregivers for daily living support, hygiene assistance and family relief at home.' },
        { icon: '☉', slug: 'companion-care', label: 'Friendly Companionship', title: 'Companion Care Services', text: 'Companionship, conversation, light assistance and daily presence for those who need company.' }
      ];

  const supportServices: ServiceCard[] = isArabic
    ? [
        { icon: '▣', slug: 'recruitment', label: 'توظيف شامل', title: 'توظيف العمالة المنزلية', text: 'خدمة توظيف متكاملة لاختيار العمالة المنزلية المناسبة وفق احتياج الأسرة.' },
        { icon: '▤', slug: 'maid-visa', label: 'تأشيرة وكفالة', title: 'المساعدة في تأشيرة الخادمة', text: 'متابعة إجراءات التأشيرة والكفالة والمستندات وفق متطلبات الإمارات.' },
        { icon: '◇', slug: 'maid-replacement', label: 'استبدال', title: 'خدمات استبدال الخادمة', text: 'دعم استبدال منظم مع توضيح الأهلية والخطوات حسب سياسة الخدمة.' },
        { icon: '□', slug: 'sponsorship-transfer', label: 'نقل كفالة', title: 'نقل الخادمة / تغيير الكفالة', text: 'إرشاد منظم لنقل الخادمة أو تغيير الكفالة والمستندات المطلوبة.' },
        { icon: '★', slug: 'experienced-maid', label: 'خادمة مدربة', title: 'توظيف خادمة ذات خبرة / مدربة', text: 'خادمات بخبرة عملية في التنظيف والطبخ ورعاية الأطفال وروتين الأسرة.' },
        { icon: '⌕', slug: 'background-verification', label: 'تحقق', title: 'خدمات التحقق من الخلفية', text: 'تحقق شامل لتعزيز الثقة والسلامة قبل التوظيف أو تأكيد الخدمة.' }
      ]
    : [
        { icon: '▣', slug: 'recruitment', label: 'End-to-end Hiring', title: 'Domestic Worker Recruitment', text: 'Complete recruitment support for selecting the right domestic worker for your household.' },
        { icon: '▤', slug: 'maid-visa', label: 'Visa & Sponsorship', title: 'Maid Visa Assistance', text: 'Guidance for maid visa, sponsorship, renewal and documentation steps with clear follow-up.' },
        { icon: '◇', slug: 'maid-replacement', label: 'Replacement Support', title: 'Maid Replacement Services', text: 'Organized replacement support with eligibility review and next-step coordination as per policy.' },
        { icon: '□', slug: 'sponsorship-transfer', label: 'Transfer Guidance', title: 'Maid Transfer / Sponsorship Change', text: 'Clear guidance for maid transfer, sponsorship change and required UAE documentation.' },
        { icon: '★', slug: 'experienced-maid', label: 'Trained Profiles', title: 'Experienced / Trained Maid Hiring', text: 'Experienced maids with practical strengths in cleaning, cooking, childcare and home routines.' },
        { icon: '⌕', slug: 'background-verification', label: 'Trust & Safety', title: 'Background Verification Services', text: 'Verification support designed to improve trust, safety and reliability before placement.' }
      ];

  const addOns: ServiceCard[] = isArabic
    ? [
        { icon: '🏛', slug: 'bespoke-household-management', label: 'إدارة مخصصة', title: 'إدارة منزلية مخصصة', text: 'باقات متكاملة تنسق الخادمات والمربيات والطهاة ومديري المنازل حسب احتياج الأسرة.' },
        { icon: '✦', slug: 'floral-styling', label: 'تنسيق منزلي', title: 'تنسيق الزهور', text: 'تنسيقات زهور أسبوعية وراقية للمجلس وطاولة الطعام والمناسبات المنزلية.' },
        { icon: '▰', slug: 'relocation-support', label: 'انتقال', title: 'دعم الانتقال', text: 'مساعدة منظمة أثناء الانتقال، فك الأغراض، تجهيز المنزل وتنظيفه.' },
        { icon: '♢', slug: 'pet-care-specialists', label: 'حيوانات أليفة', title: 'متخصصو رعاية الحيوانات الأليفة', text: 'دعم روتين التغذية والمشي والعناية الخفيفة للحيوانات الأليفة في المنزل.' },
        { icon: '☆', slug: 'event-staffing', label: 'مناسبات خاصة', title: 'طاقم للمناسبات', text: 'طاقم خدمة للتجمعات المنزلية الخاصة، التقديم، التجهيز والترتيب بعد المناسبة.' }
      ]
    : [
        { icon: '🏛', slug: 'bespoke-household-management', label: 'Tailored Household Packages', title: 'Bespoke Household Management', text: 'Coordinated packages covering maids, nannies, chefs, house managers and support services.' },
        { icon: '✦', slug: 'floral-styling', label: 'Fresh Home Styling', title: 'Floral Styling', text: 'Weekly fresh arrangements for majlis styling, dining settings and private home events.' },
        { icon: '▰', slug: 'relocation-support', label: 'Moving Assistance', title: 'Relocation Support', text: 'Organized moving support for packing coordination, home setup, unpacking and cleaning preparation.' },
        { icon: '♢', slug: 'pet-care-specialists', label: 'Pet Wellbeing', title: 'Pet Care Specialists', text: 'Support for feeding routines, walking, light grooming coordination and pet care at home.' },
        { icon: '☆', slug: 'event-staffing', label: 'Private Events', title: 'Event Staffing', text: 'Waitstaff and home event support for serving, guest assistance, setup and post-event organization.' }
      ];

  const standards = isArabic
    ? ['دعم شامل', 'مدير حساب مخصص', 'تدريب ومتابعة']
    : ['Comprehensive Support', 'Dedicated Account Manager', 'Training & Follow-up'];

  return (
    <div className="overflow-hidden bg-ivory text-ink">
      <section className="relative bg-[linear-gradient(120deg,#EEF6FF_0%,#F8F6F0_58%,#F6EFD9_100%)] px-6 py-20 text-primary-900 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/25 bg-white/70 px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] shadow-sm backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-accent-500" />
            {copy.badge}
          </span>
          <h1 className={`${isArabic ? 'font-arabic leading-[1.22]' : 'font-heading leading-[1.03]'} mx-auto mt-7 max-w-3xl text-[2.65rem] font-bold tracking-[-0.045em] sm:text-[4.1rem]`}>
            {copy.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[0.98rem] leading-7 text-primary-900/62">{copy.subtitle}</p>
          <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.value} className="rounded-[18px] border border-accent-500/15 bg-white/78 px-6 py-5 shadow-[0_20px_55px_rgba(7,22,74,0.08)] backdrop-blur-xl">
                <div className="font-heading text-4xl font-bold text-primary-900">{item.value}</div>
                <div className="mt-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-primary-900/55">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.24em] text-accent-700">INAYA SERVICES</p>
            <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-3 text-[2.2rem] font-bold tracking-[-0.04em] text-primary-900 sm:text-[3rem]`}>{copy.coreTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-ink/62">{copy.coreSub}</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service) => (
              <ServiceLinkCard key={service.slug} service={service} locale={locale} cta={copy.explore} isArabic={isArabic} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f2f4] px-6 py-20 text-primary-900 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.24em] text-accent-700">INAYA SUPPORT</p>
            <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-3 text-[2.1rem] font-bold tracking-[-0.04em] sm:text-[3rem]`}>{copy.supportTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-primary-900/54">{copy.supportSub}</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {supportServices.map((service) => (
              <ServiceLinkCard key={service.slug} service={service} locale={locale} cta={copy.learnMore} isArabic={isArabic} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.24em] text-accent-700">INAYA STANDARD</p>
            <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-3 text-[2rem] font-bold tracking-[-0.04em] text-primary-900 sm:text-[2.7rem]`}>{copy.standardTitle}</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-ink/62">{copy.standardText}</p>
            <div className="mt-9 space-y-6">
              {standards.map((item) => (
                <div key={item} className="flex gap-4">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-500 text-sm font-bold text-primary-900">✓</span>
                  <div>
                    <h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-lg font-bold text-primary-900`}>{item}</h3>
                    <p className="mt-1 text-sm leading-6 text-ink/58">{isArabic ? 'تفاصيل واضحة ودعم منظم لكل أسرة.' : 'Clear guidance and organized support before and after confirmation.'}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[24px] border border-accent-500/20 bg-[#f8f6f0] p-7 text-primary-900 shadow-[0_25px_70px_rgba(7,22,74,0.10)]">
            <h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-2xl font-bold`}>{isArabic ? 'مستويات الخدمة' : 'Compare Placement Tiers'}</h3>
            <div className="mt-7 space-y-3 text-sm">
              <div className="grid grid-cols-2 rounded-xl bg-white px-4 py-3 shadow-sm"><span className="font-bold">{isArabic ? 'توظيف قياسي' : 'Standard Recruitment'}</span><span className="text-end text-primary-900/60">{isArabic ? 'اختيار أساسي' : 'Basic Vetting'}</span></div>
              <div className="grid grid-cols-2 rounded-xl bg-white px-4 py-3 shadow-sm"><span className="font-bold">{isArabic ? 'خدمة مميزة' : 'Premium Placement'}</span><span className="text-end text-primary-900/60">{isArabic ? 'تدريب متقدم' : 'Advanced Training'}</span></div>
              <div className="grid grid-cols-2 rounded-xl bg-primary-900 px-4 py-3 text-white"><span className="font-bold">{isArabic ? 'إدارة مخصصة' : 'Bespoke Management'}</span><span className="text-end text-accent-300">{isArabic ? 'كونسيرج منزلي' : 'Household Concierge'}</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#efe9de] px-6 py-20 text-primary-900 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[0.66rem] font-bold uppercase tracking-[0.24em] text-accent-700">INAYA ADD-ONS</p>
              <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-3 max-w-xl text-[2rem] font-bold leading-tight tracking-[-0.04em] sm:text-[2.75rem]`}>{copy.addTitle}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-primary-900/62">{copy.addSub}</p>
            </div>
            <Link href={`/${locale}/contact`} className="inline-flex w-fit items-center justify-center rounded-full border border-accent-500/35 bg-white/70 px-5 py-2.5 text-xs font-bold text-primary-900 shadow-sm hover:bg-white">{copy.viewAll}</Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {addOns.map((service) => (
              <Link key={service.slug} href={`/${locale}/services/${service.slug}`} className="group rounded-[20px] border border-accent-500/18 bg-white/72 p-6 shadow-[0_18px_55px_rgba(7,22,74,0.06)] transition hover:-translate-y-1 hover:border-accent-500/35">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-500/12 text-lg text-accent-700">{service.icon}</div>
                <p className="mt-5 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-accent-700">{service.label}</p>
                <h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-2 text-lg font-bold leading-tight`}>{service.title}</h3>
                <p className="mt-3 min-h-[5.2rem] text-sm leading-6 text-primary-900/60">{service.text}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-primary-900">{copy.learnMore} <span className="transition group-hover:translate-x-1 rtl:group-hover:-translate-x-1">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory px-6 py-20 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl rounded-[26px] border border-accent-500/22 bg-white/82 p-8 text-primary-900 shadow-[0_30px_90px_rgba(7,22,74,0.12)] backdrop-blur-xl sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-[0.66rem] font-bold uppercase tracking-[0.24em] text-accent-700">{copy.bespokeLabel}</p>
              <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-4 max-w-xl text-[2rem] font-bold leading-tight tracking-[-0.04em] sm:text-[2.8rem]`}>{copy.bespokeTitle}</h2>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-primary-900/62">{copy.bespokeText}</p>
            </div>
            <Link href={`/${locale}/services/bespoke-household-management`} className="inline-flex items-center justify-center rounded-full bg-primary-900 px-7 py-3 text-sm font-bold text-white shadow-[0_18px_45px_rgba(7,22,74,0.2)] transition hover:-translate-y-0.5">
              {copy.consult} <span className="ms-2">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceLinkCard({ service, locale, cta, isArabic, compact = false }: { service: ServiceCard; locale: string; cta: string; isArabic: boolean; compact?: boolean }) {
  return (
    <Link href={`/${locale}/services/${service.slug}`} className={`group rounded-[24px] border border-accent-500/16 bg-white/82 p-7 text-ink shadow-[0_22px_70px_rgba(7,22,74,0.07)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-accent-500/40 ${compact ? 'min-h-[255px]' : 'min-h-[292px]'}`}>
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/10 text-xl text-accent-700 ring-1 ring-accent-500/20">{service.icon}</div>
      <p className="mt-8 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent-700">{service.label}</p>
      <h3 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-2 text-[1.35rem] font-bold leading-tight tracking-[-0.035em] text-primary-900`}>{service.title}</h3>
      <p className="mt-4 text-sm leading-7 text-ink/62">{service.text}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-primary-900">{service.cta ?? cta} <span className="transition group-hover:translate-x-1 rtl:group-hover:-translate-x-1">→</span></span>
    </Link>
  );
}
