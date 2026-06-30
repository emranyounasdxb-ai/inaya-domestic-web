import Link from 'next/link';
import { getServiceWithExtras } from '@/lib/service-helpers';
import { servicePageCopies, type Lang } from '@/lib/service-page-copy-all';

type Focus = {
  en: { keyword: string; audience: string; duties: string[] };
  ar: { keyword: string; audience: string; duties: string[] };
};

const focusMap: Record<string, Focus> = {
  'live-in-maid': {
    en: { keyword: 'live-in maid services in UAE', audience: 'families that need daily household support inside the home', duties: ['Daily cleaning and laundry', 'Kitchen and meal support', 'Family routine assistance', 'Long-term household consistency'] },
    ar: { keyword: 'خدمات الخادمة المقيمة في الإمارات', audience: 'الأسر التي تحتاج دعماً منزلياً يومياً داخل المنزل', duties: ['التنظيف والغسيل اليومي', 'المساعدة في المطبخ والوجبات', 'دعم روتين الأسرة', 'استقرار منزلي طويل المدى'] }
  },
  'live-out-maid': {
    en: { keyword: 'live-out maid services in UAE', audience: 'families that need scheduled help without accommodation', duties: ['Scheduled home cleaning', 'Laundry and ironing support', 'Flexible visit planning', 'Privacy-friendly arrangements'] },
    ar: { keyword: 'خدمات الخادمة غير المقيمة في الإمارات', audience: 'الأسر التي تحتاج دعماً بجدول واضح دون إقامة', duties: ['تنظيف منزلي مجدول', 'دعم الغسيل والكي', 'تخطيط زيارات مرن', 'ترتيب يحافظ على خصوصية المنزل'] }
  },
  'full-time-maid': {
    en: { keyword: 'full-time maid hiring in UAE', audience: 'busy households that need consistent daily help', duties: ['Full-day household support', 'Room and surface care', 'Routine task planning', 'Support for family schedules'] },
    ar: { keyword: 'توظيف خادمة بدوام كامل في الإمارات', audience: 'المنازل كثيرة الانشغال التي تحتاج مساعدة يومية مستمرة', duties: ['دعم منزلي طوال اليوم', 'العناية بالغرف والأسطح', 'تنظيم المهام الروتينية', 'دعم جدول الأسرة'] }
  },
  'part-time-maid': {
    en: { keyword: 'part-time maid services in UAE', audience: 'families needing flexible help by schedule or hours', duties: ['Flexible cleaning visits', 'Short-term household tasks', 'Move-in or event support', 'Regular weekly assistance'] },
    ar: { keyword: 'خدمات خادمة بدوام جزئي في الإمارات', audience: 'الأسر التي تحتاج مساعدة مرنة حسب الجدول أو الساعات', duties: ['زيارات تنظيف مرنة', 'مهام منزلية قصيرة', 'دعم الانتقال أو المناسبات', 'مساعدة أسبوعية منتظمة'] }
  },
  'monthly-maid-contract': {
    en: { keyword: 'monthly maid contract in UAE', audience: 'homes that prefer predictable monthly support', duties: ['Regular monthly schedule', 'Repeated cleaning plan', 'Priority follow-up', 'Clear scope of duties'] },
    ar: { keyword: 'عقد خادمة شهري في الإمارات', audience: 'المنازل التي تفضل دعماً شهرياً منظماً', duties: ['جدول شهري منتظم', 'خطة تنظيف متكررة', 'متابعة ذات أولوية', 'نطاق مهام واضح'] }
  },
  nanny: {
    en: { keyword: 'nanny services in UAE', audience: 'parents looking for calm childcare support', duties: ['Child routine support', 'Supervised play and activities', 'School and daily schedule help', 'Family communication'] },
    ar: { keyword: 'خدمات المربيات في الإمارات', audience: 'الآباء الذين يبحثون عن دعم هادئ لرعاية الأطفال', duties: ['دعم روتين الطفل', 'أنشطة ولعب تحت إشراف', 'مساعدة في جدول المدرسة واليوم', 'تواصل واضح مع الأسرة'] }
  },
  babysitting: {
    en: { keyword: 'babysitting services in UAE', audience: 'families needing short-term or occasional childcare', duties: ['Occasional child supervision', 'Evening or event support', 'Safe play time', 'Routine care while parents are busy'] },
    ar: { keyword: 'خدمات جليسات الأطفال في الإمارات', audience: 'الأسر التي تحتاج رعاية أطفال مؤقتة أو عند الحاجة', duties: ['إشراف مؤقت على الأطفال', 'دعم مسائي أو أثناء المناسبات', 'وقت لعب آمن', 'رعاية روتينية عند انشغال الوالدين'] }
  },
  'newborn-care': {
    en: { keyword: 'newborn care services in UAE', audience: 'new parents needing early-month support', duties: ['Newborn routine assistance', 'Feeding and sleep support guidance', 'Mother and baby comfort', 'Calm household support'] },
    ar: { keyword: 'خدمات رعاية المواليد في الإمارات', audience: 'الآباء الجدد الذين يحتاجون دعماً في الأشهر الأولى', duties: ['مساعدة في روتين المولود', 'إرشاد لدعم الرضاعة والنوم', 'راحة الأم والطفل', 'دعم هادئ للمنزل'] }
  },
  'home-cooking': {
    en: { keyword: 'home cooking services in UAE', audience: 'families that need regular meals prepared at home', duties: ['Daily meal preparation', 'Kitchen organization', 'Family taste preferences', 'Healthy home dining support'] },
    ar: { keyword: 'خدمات الطبخ المنزلي في الإمارات', audience: 'الأسر التي تحتاج إعداد وجبات منتظمة داخل المنزل', duties: ['إعداد وجبات يومية', 'تنظيم المطبخ', 'مراعاة ذوق الأسرة', 'دعم وجبات منزلية صحية'] }
  },
  'personal-chef': {
    en: { keyword: 'private chef and personal cook in UAE', audience: 'homes that want tailored meal support', duties: ['Private meal planning', 'Special occasion cooking', 'Diet preference coordination', 'Premium kitchen support'] },
    ar: { keyword: 'شيف خاص وطباخ منزلي في الإمارات', audience: 'المنازل التي تريد دعماً غذائياً مخصصاً', duties: ['تخطيط وجبات خاصة', 'طبخ للمناسبات', 'تنسيق التفضيلات الغذائية', 'دعم مطبخ راق'] }
  },
  'kitchen-helper': {
    en: { keyword: 'kitchen helper services in UAE', audience: 'families needing support with preparation and cleaning', duties: ['Food preparation help', 'Dish and counter care', 'Kitchen storage support', 'Meal routine assistance'] },
    ar: { keyword: 'خدمات مساعد المطبخ في الإمارات', audience: 'الأسر التي تحتاج مساعدة في التحضير والتنظيف', duties: ['مساعدة في تحضير الطعام', 'العناية بالأطباق والأسطح', 'تنظيم تخزين المطبخ', 'دعم روتين الوجبات'] }
  },
  'elder-care': {
    en: { keyword: 'elder care services in UAE', audience: 'families needing respectful senior support at home', duties: ['Daily companionship', 'Mobility and routine assistance', 'Comfort-focused support', 'Family update communication'] },
    ar: { keyword: 'خدمات رعاية كبار السن في الإمارات', audience: 'الأسر التي تحتاج دعماً محترماً لكبار السن في المنزل', duties: ['مرافقة يومية', 'مساعدة في الحركة والروتين', 'دعم يركز على الراحة', 'تواصل مع الأسرة للتحديثات'] }
  },
  'patient-care': {
    en: { keyword: 'patient care services at home in UAE', audience: 'families needing non-hospital daily care support', duties: ['Daily living assistance', 'Comfort and routine support', 'Coordination with family instructions', 'Respectful home care'] },
    ar: { keyword: 'خدمات رعاية المرضى في المنزل في الإمارات', audience: 'الأسر التي تحتاج دعماً يومياً خارج المستشفى', duties: ['مساعدة في الحياة اليومية', 'دعم الراحة والروتين', 'التنسيق مع تعليمات الأسرة', 'رعاية منزلية محترمة'] }
  },
  'companion-care': {
    en: { keyword: 'companion care services in UAE', audience: 'families seeking friendly presence and support', duties: ['Conversation and companionship', 'Light routine help', 'Emotional comfort', 'Daily family updates'] },
    ar: { keyword: 'خدمات رعاية المرافقة في الإمارات', audience: 'الأسر التي تبحث عن حضور ودعم ودي', duties: ['المحادثة والمرافقة', 'مساعدة روتينية خفيفة', 'راحة نفسية', 'تحديثات يومية للأسرة'] }
  },
  recruitment: {
    en: { keyword: 'domestic worker recruitment in UAE', audience: 'families hiring household workers through a guided process', duties: ['Requirement review', 'Profile matching', 'Document guidance', 'Placement coordination'] },
    ar: { keyword: 'توظيف العمالة المنزلية في الإمارات', audience: 'الأسر التي توظف عاملة منزلية بإجراء موجه', duties: ['مراجعة الاحتياج', 'مطابقة الملفات', 'إرشاد المستندات', 'تنسيق التوظيف'] }
  },
  'maid-visa': {
    en: { keyword: 'maid visa assistance in UAE', audience: 'families needing guidance for maid visa documents and steps', duties: ['Document checklist guidance', 'Application step support', 'Renewal and process clarity', 'Family responsibility explanation'] },
    ar: { keyword: 'مساعدة تأشيرة الخادمة في الإمارات', audience: 'الأسر التي تحتاج إرشاداً لمستندات وخطوات تأشيرة الخادمة', duties: ['إرشاد قائمة المستندات', 'دعم خطوات الطلب', 'وضوح التجديد والإجراءات', 'شرح مسؤوليات الأسرة'] }
  },
  'maid-replacement': {
    en: { keyword: 'maid replacement services in UAE', audience: 'families needing a clear replacement process', duties: ['Issue review', 'Policy explanation', 'Replacement coordination', 'Follow-up support'] },
    ar: { keyword: 'خدمات استبدال الخادمة في الإمارات', audience: 'الأسر التي تحتاج عملية استبدال واضحة', duties: ['مراجعة المشكلة', 'شرح السياسة', 'تنسيق الاستبدال', 'دعم المتابعة'] }
  },
  'sponsorship-transfer': {
    en: { keyword: 'maid sponsorship transfer in UAE', audience: 'families needing transfer guidance and documentation support', duties: ['Transfer step guidance', 'Document review support', 'Sponsor responsibility clarity', 'Process follow-up'] },
    ar: { keyword: 'نقل كفالة الخادمة في الإمارات', audience: 'الأسر التي تحتاج إرشاداً لنقل الكفالة والمستندات', duties: ['إرشاد خطوات النقل', 'دعم مراجعة المستندات', 'توضيح مسؤولية الكفيل', 'متابعة الإجراء'] }
  },
  'experienced-maid': {
    en: { keyword: 'experienced maid hiring in UAE', audience: 'families preferring trained or experienced home support', duties: ['Experience review', 'Cleaning and cooking skill matching', 'Childcare exposure check', 'Home routine alignment'] },
    ar: { keyword: 'توظيف خادمة ذات خبرة في الإمارات', audience: 'الأسر التي تفضل دعماً منزلياً مدرباً أو ذا خبرة', duties: ['مراجعة الخبرة', 'مطابقة مهارات التنظيف والطبخ', 'مراجعة خبرة رعاية الأطفال', 'مواءمة روتين المنزل'] }
  },
  'background-verification': {
    en: { keyword: 'maid background verification in UAE', audience: 'families wanting safer domestic worker decisions', duties: ['Identity detail review', 'Document check guidance', 'Experience note review', 'Clear risk discussion'] },
    ar: { keyword: 'التحقق من خلفية الخادمة في الإمارات', audience: 'الأسر التي تريد قراراً أكثر أماناً عند اختيار عاملة منزلية', duties: ['مراجعة بيانات الهوية', 'إرشاد فحص المستندات', 'مراجعة ملاحظات الخبرة', 'نقاش واضح للمخاطر'] }
  }
};

function fallbackFocus(slug: string, lang: Lang): Focus[Lang] {
  const service = getServiceWithExtras(slug);
  return {
    keyword: service?.name[lang] || (lang === 'ar' ? 'خدمات العمالة المنزلية في الإمارات' : 'domestic worker services in UAE'),
    audience: lang === 'ar' ? 'الأسر التي تحتاج دعماً منزلياً واضحاً ومنظماً' : 'families that need clear and organized home support',
    duties: lang === 'ar' ? ['مراجعة الاحتياج', 'شرح الخيارات', 'إرشاد المستندات', 'المتابعة'] : ['Requirement review', 'Option explanation', 'Document guidance', 'Follow-up']
  };
}

export default function ServiceSeoBlock({ locale, slug }: { locale: string; slug: string }) {
  const lang: Lang = locale === 'ar' ? 'ar' : 'en';
  const service = getServiceWithExtras(slug);
  if (!service) return null;

  const copy = servicePageCopies[slug]?.[lang];
  const focus = focusMap[slug]?.[lang] || fallbackFocus(slug, lang);
  const related = (copy?.related || []).map((relatedSlug) => getServiceWithExtras(relatedSlug)).filter(Boolean).slice(0, 5);

  const text = lang === 'ar'
    ? {
        eyebrow: 'محتوى إرشادي للخدمة',
        title: `${service.name.ar} للأسر في الإمارات`,
        intro: `عند البحث عن ${focus.keyword}، تحتاج الأسرة إلى معلومات واضحة عن نطاق الخدمة والجدول والتوفر والمستندات والخطوات التالية. تساعد عناية في ترتيب هذه التفاصيل حتى يكون القرار مبنياً على احتياج المنزل وليس على وعود عامة.`,
        process: `هذه الخدمة مناسبة لـ ${focus.audience}. يراجع فريق عناية تفاصيل المنزل والإمارة والوقت المطلوب والمهام اليومية قبل شرح الخيارات المتاحة أو الملفات المناسبة.`,
        why: 'ما الذي يتم توضيحه قبل المتابعة؟',
        faqTitle: 'أسئلة إضافية عن هذه الخدمة',
        q1: `هل توفر عناية ${focus.keyword}؟`,
        a1: `نعم، يمكن لعناية شرح خيارات ${focus.keyword} حسب التوفر ونوع الخدمة والمنطقة ومتطلبات الأسرة.`,
        q2: 'هل يمكن تحديد المهام قبل الحجز؟',
        a2: 'نعم، يتم توضيح المهام المتوقعة والجدول والمسؤوليات قبل التأكيد حتى تكون الصورة واضحة للأسرة.',
        q3: 'هل تختلف التكلفة حسب الحالة؟',
        a3: 'نعم، تختلف التفاصيل حسب نوع الخدمة والمدة والمستندات وحالة التأشيرة ومتطلبات المنزل.',
        relatedTitle: 'روابط مفيدة ذات صلة',
        cta: 'اطلب استشارة واضحة'
      }
    : {
        eyebrow: 'Service SEO Guide',
        title: `${service.name.en} for UAE families`,
        intro: `When families search for ${focus.keyword}, they usually need clear guidance on service scope, schedule, availability, documents and next steps. INAYA helps organize these details so the decision is based on real household needs, not generic promises.`,
        process: `This service is useful for ${focus.audience}. The INAYA team reviews the home, emirate, timing and daily duties before explaining available options or suitable profiles.`,
        why: 'What is clarified before you proceed?',
        faqTitle: 'More questions about this service',
        q1: `Does INAYA provide ${focus.keyword}?`,
        a1: `Yes. INAYA can explain ${focus.keyword} options based on availability, service type, area and family requirements.`,
        q2: 'Can duties be discussed before booking?',
        a2: 'Yes. Expected duties, schedule and responsibilities are clarified before confirmation so the family understands the service scope.',
        q3: 'Does the cost vary by case?',
        a3: 'Yes. Details may vary by service model, duration, documents, visa status and household requirements.',
        relatedTitle: 'Useful related links',
        cta: 'Request clear guidance'
      };

  return (
    <section className="bg-[#f8f6f0] px-6 py-10 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-6xl rounded-[26px] border border-white/80 bg-white/78 p-6 shadow-[0_20px_60px_rgba(7,22,74,0.07)] ring-1 ring-accent-500/10 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.26em] text-accent-700">{text.eyebrow}</p>
            <h2 className={`${lang === 'ar' ? 'font-arabic leading-[1.35]' : 'font-heading leading-tight'} mt-4 text-[1.75rem] font-bold tracking-[-0.04em] text-primary-900 sm:text-[2.35rem]`}>{text.title}</h2>
            <p className="mt-4 text-sm leading-7 text-primary-900/72">{text.intro}</p>
            <p className="mt-4 text-sm leading-7 text-primary-900/72">{text.process}</p>
          </div>
          <div className="rounded-[22px] border border-accent-500/14 bg-[#fbfaf7] p-5">
            <h3 className="font-heading text-lg font-bold text-primary-900">{text.why}</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {focus.duties.map((item) => <div key={item} className="rounded-xl border border-primary-900/8 bg-white px-3 py-2 text-xs font-semibold leading-5 text-primary-900/76"><span className="me-2 text-accent-700">✓</span>{item}</div>)}
            </div>
          </div>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <h3 className="font-heading text-xl font-bold text-primary-900">{text.faqTitle}</h3>
            <div className="mt-4 grid gap-3">
              {[{ q: text.q1, a: text.a1 }, { q: text.q2, a: text.a2 }, { q: text.q3, a: text.a3 }].map((faq) => (
                <details key={faq.q} className="rounded-2xl border border-primary-900/8 bg-white p-4">
                  <summary className="cursor-pointer text-sm font-bold text-primary-900">{faq.q}</summary>
                  <p className="mt-3 text-xs leading-6 text-primary-900/68">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="rounded-[22px] bg-primary-900 p-6 text-white">
            <h3 className="font-heading text-xl font-bold">{text.relatedTitle}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {related.map((item) => item ? <Link key={item.slug} href={`/${locale}/services/${item.slug}`} className="rounded-full border border-white/14 bg-white/8 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/16">{item.name[lang]}</Link> : null)}
            </div>
            <Link href={`/${locale}/contact`} className="mt-6 inline-flex rounded-full bg-accent-500 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-primary-900 transition hover:bg-accent-300">{text.cta}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
