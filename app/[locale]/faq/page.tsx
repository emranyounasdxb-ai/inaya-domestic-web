'use client';
import PageBreadcrumbs from "@/components/PageBreadcrumbs";

import { use, useState } from 'react';
import Link from 'next/link';
import { faqEntity, serializeJsonLd } from '@/lib/json-ld';

type IconName = 'service' | 'price' | 'booking' | 'support' | 'shield' | 'arrow' | 'message';
type FaqItem = { question: string; answer: string };
type FaqCategory = { id: string; title: string; eyebrow: string; icon: IconName; items: FaqItem[] };

function LineIcon({ name, className = '' }: { name: IconName; className?: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const paths = {
    service: <><path {...common} d="M4 19h16" /><path {...common} d="M6 19V9l6-4 6 4v10" /><path {...common} d="M10 19v-6h4v6" /></>,
    price: <><path {...common} d="M12 3v18" /><path {...common} d="M17 7.5c-.9-1.1-2.5-1.8-4.6-1.8-2.5 0-4.2 1-4.2 2.7 0 4.1 8.8 1.9 8.8 6.4 0 1.9-1.8 3.2-4.8 3.2-2.1 0-3.8-.7-5-1.8" /></>,
    booking: <><path {...common} d="M5 5h14v15H5V5Z" /><path {...common} d="M8 3v4M16 3v4M5 9h14" /><path {...common} d="m8.5 14 2 2 4-4" /></>,
    support: <><path {...common} d="M4 12a8 8 0 1 1 16 0" /><path {...common} d="M4 12v3a2 2 0 0 0 2 2h1v-5H4ZM20 12v3a2 2 0 0 1-2 2h-1v-5h3Z" /><path {...common} d="M9 20h3a4 4 0 0 0 4-4" /></>,
    shield: <><path {...common} d="M12 3 19 6v5c0 4.6-3 7.7-7 10-4-2.3-7-5.4-7-10V6l7-3Z" /><path {...common} d="m9.2 11.8 1.9 1.9 3.8-4" /></>,
    arrow: <><path {...common} d="M5 12h14" /><path {...common} d="m13 6 6 6-6 6" /></>,
    message: <path {...common} d="M5 6.8A3.8 3.8 0 0 1 8.8 3h6.4A3.8 3.8 0 0 1 19 6.8v3.8a3.8 3.8 0 0 1-3.8 3.8H10l-4.5 3.2.9-4A3.8 3.8 0 0 1 5 10.6V6.8Z" />
  };

  return <svg viewBox="0 0 24 24" className={className} aria-hidden="true">{paths[name]}</svg>;
}

export default function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const isArabic = locale === 'ar';
  const headingClass = isArabic
    ? 'font-arabic text-4xl font-bold leading-[1.32] text-primary-900 sm:text-5xl lg:text-6xl'
    : 'font-heading text-4xl font-bold leading-[1.05] text-primary-900 sm:text-5xl lg:text-6xl';
  const categories: FaqCategory[] = isArabic ? [
    {
      id: 'services',
      title: 'الخدمات والتوفر',
      eyebrow: 'خدمات العمالة المنزلية في الإمارات',
      icon: 'service',
      items: [
        { question: 'ما الخدمات التي تقدمها عناية للعمالة المنزلية؟', answer: 'تقدم عناية خدمات الخادمات المنزليات، المربيات، جليسات الأطفال، مقدمي الرعاية، الطهاة، والمساعدة بدوام جزئي حسب نوع الطلب والتوفر.' },
        { question: 'هل تخدمون جميع إمارات الدولة؟', answer: 'نعم، نقدم خدماتنا في جميع إمارات الدولة، ويتم تأكيد التوفر حسب الإمارة والمنطقة ونوع الخدمة والمدة المطلوبة.' },
        { question: 'هل يمكن طلب خادمة أو مربية حسب الخبرة أو الجنسية؟', answer: 'يمكنك مشاركة تفضيلاتك بوضوح، وسيقوم الفريق بمراجعة الخيارات المتاحة التي تناسب احتياج الأسرة.' },
        { question: 'هل التوفر مضمون فوراً؟', answer: 'الاستفسار لا يضمن التوفر. اطلب من الفريق مراجعة خيارات الدور والمنطقة قبل الحجز.' },
        { question: 'هل توفرون خادمات مقيمات داخل المنزل؟', answer: "نعم. الخدمة الشهرية المدارة القياسية المعلنة مقيمة وتشمل الراتب. تبدأ Essential من 2,500 درهم شهرياً وSignature من 3,000 درهم شهرياً؛ وتسجل المهام والساعات والراحة والسكن والطعام في الاتفاق." },
        { question: 'هل توفرون خدمات خارجية أو غير مقيمة؟', answer: "تتطلب الخدمة غير المقيمة عرضاً خاصاً يفصل السكن والنقل. الأسعار الشهرية المبدئية المعلنة للخدمة المقيمة القياسية؛ ولا تشمل تلقائياً الزيارات الجزئية المجدولة منفصلة." },
        { question: 'هل يمكن طلب مربية أطفال؟', answer: "تتيح Signature خيارات للمربية بحسب الدور المتفق عليه والتوفر، مع تقييم إضافي للخبرة الفردية والتواصل ومنسق مخصص وإرشاد مفصل عند بدء الخدمة. شارك أعمار الأطفال وروتينهم والمهام المتفق عليها." },
        { question: 'هل تقدمون رعاية لكبار السن؟', answer: "تتيح Signature خيارات لمقدمة رعاية غير سريرية بحسب الدور المتفق عليه والتوفر. حدد المرافقة والمساعدة المنزلية بصورة فردية؛ فالرعاية السريرية المتخصصة خارج النطاق القياسي إلا بترتيب منفصل ونظامي." },
        { question: 'هل توفرون طهاة أو مساعدين للمطبخ؟', answer: 'يمكننا مراجعة طلبات الطهاة أو المساعدة في المطبخ حسب نوع المطبخ، عدد أفراد الأسرة، والتوفر.' },
        { question: 'هل يمكن طلب خدمة بدوام جزئي؟', answer: "تعرض الزيارات المجدولة بدوام جزئي بصورة منفصلة بحسب المهام والتوقيت والمنطقة والتوفر. ولا يشملها تلقائياً السعر الشهري المعلن للدوام الكامل." },
        { question: 'هل تقدمون خدمة عاجلة أو في نفس اليوم؟', answer: "تراجع الطلبات العاجلة بحسب التوفر والتصاريح النظامية المطلوبة. لا تعد عناية ببدء الخدمة في اليوم نفسه أو بمدة ثابتة للموافقة الحكومية." },
        { question: 'هل يمكن ترتيب خدمة شهرية؟', answer: "نعم. تبدأ Essential من 2,500 درهم شهرياً للدعم المنزلي الاعتيادي؛ وتبدأ Signature من 3,000 درهم شهرياً مع تقييم للخبرة الفردية وتنسيق مخصص. Black بعرض سعر مخصص. الخدمة الشهرية القياسية مقيمة وتديرها الوكالة وتشمل الراتب ضمن النطاق والاستثناءات المنشورة." },
        { question: 'هل تقدمون خدمات تنظيف فقط؟', answer: 'يمكن مراجعة طلب التنظيف المنزلي ضمن خدمات المساعدة المنزلية حسب المنطقة والمدة المطلوبة.' },
        { question: 'هل الخدمة مناسبة للشقق والفلل؟', answer: 'نعم، نخدم الشقق والفلل. نحتاج فقط معرفة حجم المنزل وعدد الغرف وطبيعة العمل المطلوب.' },
        { question: 'هل يمكن طلب مساعدة لرعاية الأطفال حديثي الولادة؟', answer: 'يمكنك توضيح عمر الطفل ونوع المساعدة المطلوبة، وسيقوم الفريق بمراجعة الخيار المناسب حسب التوفر.' },
        { question: 'هل يمكن تغيير نوع الخدمة بعد الطلب؟', answer: 'نعم، يمكن تعديل نوع الخدمة قبل التأكيد النهائي إذا كان ذلك مناسباً ومتوفراً.' },
        { question: 'هل تخدمون العائلات فقط؟', answer: 'تركز خدماتنا على احتياجات الأسر والمنازل، ويتم تقييم كل طلب حسب نوع الخدمة والتفاصيل المقدمة.' },
        { question: 'هل يمكن طلب أكثر من عاملة منزلية؟', answer: "تقدم INAYA Black تخطيطاً مخصصاً للاحتياجات متعددة العاملين أو المتخصصة أو المعقدة بعرض سعر مخصص. يتفق كتابةً على الأدوار الفردية والتوفر والتهيئة وجدول المراجعة." },
        { question: 'هل تقدمون استشارة قبل اختيار الخدمة؟', answer: 'نعم، يساعدك الفريق في فهم الخيارات المناسبة قبل تحديد الخدمة أو الباقة.' },
        { question: 'هل يمكن زيارة المكتب لمعرفة الخدمات؟', answer: 'نعم، يمكن زيارة مكتب عجمان بعد تأكيد التوقيت المناسب مع فريق عناية.' }
      ]
    },
    {
      id: 'pricing',
      title: 'الأسعار والباقات',
      eyebrow: 'وضوح في التكلفة قبل القرار',
      icon: 'price',
      items: [
        { question: 'هل الأسعار ثابتة؟', answer: "لـEssential وSignature أسعار شهرية مبدئية قدرها 2,500 و3,000 درهم للعرض المقيم القياسي. ولـBlack عرض سعر مخصص. يؤكد العرض المكتوب الدور الفردي والتوفر والعناصر المشمولة والاستثناءات والضريبة المنطبقة والمبلغ النهائي المستحق." },
        { question: 'ماذا تشمل الباقة؟', answer: "راتب العاملة المنزلية المتفق عليه. إدارة موثقة لسداد الراتب عبر الآلية المعتمدة المنطبقة. الكفالة لدى الوكالة وإجراءات تصريح العمل والإقامة المنطبقة. إجراءات الهوية الإماراتية وفحص اللياقة الطبية المطلوب. قسط التأمين الصحي المنطبق؛ وتحدد الوثيقة الصادرة والمسؤوليات القانونية المنافع والاستثناءات والمساهمات في الدفع. تقييم المرشحة والتوجيه الأولي والتهيئة المتفق عليها لبدء الخدمة. النقل الاعتيادي عند بدء الخدمة ضمن منطقة الخدمة المبينة في العرض. التنسيق مع العميل وإدارة طلبات الاستبدال المؤهلة. التزامات الوكالة المتعلقة بالتوظيف والمنطبقة على الترتيب، محسوبة ضمن رسوم الخدمة الشهرية. تخص الأسعار الشهرية المعلنة الخدمة المقيمة داخل المنزل. وتتطلب الخدمة غير المقيمة عرضاً منفصلاً ومفصلاً يبين السكن والنقل. أما الزيارات المجدولة بدوام جزئي فلها عرض مستقل ولا يشملها تلقائياً السعر الشهري للدوام الكامل. تسجل المهام الفردية وساعات العمل والراحة الأسبوعية وأي عمل إضافي في الاتفاق بحسب الدور المختار." },
        { question: 'هل الرسوم الحكومية مشمولة؟', answer: "تشمل الخدمة الشهرية المدارة الكفالة لدى الوكالة وإجراءات تصريح العمل والإقامة والهوية الإماراتية وفحص اللياقة الطبية المطلوب. وللاستقدام أو خدمات التأشيرة المتعاقد عليها منفصلة عرض مفصل مستقل؛ وتوضح الضريبة المنطبقة والمبلغ النهائي قبل التأكيد." },
        { question: 'ما المقصود بعرض السعر المخصص؟', answer: "توفير عمالة ودعم منزلي حسب الطلب للاحتياجات المتخصصة أو متعددة العاملين أو المعقدة. يحدد عرض السعر المخصص المكتوب الأدوار ونطاق الخدمة والتكاليف وجدول المراجعة." },
        { question: 'لماذا تختلف الأسعار بين الخدمات؟', answer: 'تختلف الأسعار بسبب نوع الخدمة، ساعات العمل، مدة العقد، المتطلبات الخاصة، والتوفر في الإمارة أو المنطقة.' },
        { question: 'هل يتم تأكيد السعر قبل الحجز؟', answer: "قبل التأكيد، تسلم نطاق الخدمة المكتوب والسعر المفصل ومستندات السداد المنطبقة. يميز العرض الراتب وعناصر الوكالة المشمولة عن مسؤوليات المنزل والترتيبات المنفصلة والإضافات والضريبة المنطبقة." },
        { question: 'هل توجد رسوم مخفية؟', answer: "يبين العرض المكتوب العناصر المشمولة والاستثناءات والضريبة المنطبقة والمبلغ النهائي قبل التأكيد. تسعر الخدمات الإضافية المطلوبة والتغييرات الجوهرية في النطاق ويتفق عليها قبل قبولها. لا تفرض رسوم إلغاء غير مفصح عنها ولا خصومات غير متوقعة لتكاليف مشمولة أصلاً." },
        { question: 'هل يمكن الحصول على عرض سعر مكتوب؟', answer: "نعم. يتسلم العميل نطاق الخدمة المكتوب وتفصيل السعر ومستندات السداد المنطبقة قبل التأكيد." },
        { question: 'هل تختلف أسعار الخادمة المقيمة عن غير المقيمة؟', answer: "نعم، قارن الترتيب نفسه. تخص Essential من 2,500 درهم شهرياً وSignature من 3,000 درهم شهرياً الخدمة المقيمة. يفصل سكن الخدمة غير المقيمة ونقلها في عرضها؛ وتكون أسعار الزيارات الجزئية منفصلة أيضاً." },
        { question: 'كيف يتم حساب خدمة الدوام الجزئي؟', answer: "للزيارات المجدولة بدوام جزئي عرض مستقل للعمل والجدول والموقع والترتيب النظامي المتفق عليها. ولا يغطي السعر الشهري المبدئي المدار للدوام الكامل هذه الزيارات تلقائياً." },
        { question: 'هل توجد باقات شهرية؟', answer: "اختر Essential لمطابقة الاحتياجات المنزلية الاعتيادية والتنسيق القياسي، أو Signature لتقييم فردي إضافي ومنسق مخصص، أو Black للتخطيط حسب الطلب. السعران الشهريان المبدئيان 2,500 و3,000 درهم على الترتيب؛ وتبقى Black بعرض سعر مخصص. يشمل العرض القياسي الراتب ويخص الخدمة المقيمة." },
        { question: 'هل يوجد خصم للعقود الطويلة؟', answer: "تشمل INAYA Black تخطيطاً للترتيبات طويلة الأمد. يسجل العرض المكتوب الفترة وترتيبات التجديد والسعر المتفق عليها؛ ولا يوجد وعد بخصم عام للمدد الطويلة." },
        { question: 'هل رسوم الاستبدال مشمولة؟', answer: "تشمل كل باقة مراجعة طلبات الاستبدال المؤهلة وإدارة إجراءاتها. تستخدم Essential تنسيق المطابقة الاعتيادي وSignature المطابقة ذات الأولوية وBlack المطابقة بحسب الدور. تتبع الأهلية المهام المتفق عليها وترتيب التوظيف والالتزامات القانونية؛ ولا توجد ميزة استبدال غير محدود أو موعد إنجاز موعود." },
        { question: 'هل يجب الدفع مقدماً؟', answer: "يتطلب العرض الشهري القياسي المدار سداد الشهر الأول من الخدمة مقدماً؛ ثم تعتمد الدفعات تاريخ الفوترة الشهري المتفق عليه. لا يتطلب رسم استقدام أو تجهيز منفصلاً مقدماً ولا تأميناً نقدياً. ولخدمات الاستقدام فقط أو التأشيرة فقط شروطها في عروضها الخاصة." },
        { question: 'هل أستطيع مقارنة أكثر من باقة؟', answer: "تقدم Essential مطابقة للدعم المنزلي الاعتيادي ومسؤول تواصل ومتابعة في الأسبوع الأول ثم شهرياً. تضيف Signature تقييم الخبرة والتواصل ومنسقاً مخصصاً وأولوية في المطابقة ومتابعة في الأسبوع الأول ثم كل أسبوعين. تقدم Black تخطيطاً مخصصاً ومسؤولاً مسمى وجدول مراجعة متفقاً عليه." },
        { question: 'هل السعر يتغير حسب الإمارة؟', answer: 'قد يتغير السعر حسب الإمارة أو المنطقة بسبب التوفر والترتيبات التشغيلية.' },
        { question: 'هل يمكن اختيار باقة اقتصادية؟', answer: 'يمكنك مشاركة الميزانية المتوقعة، وسنوضح لك الخيارات الأقرب لاحتياجك حسب التوفر.' },
        { question: 'هل توجد رسوم لإلغاء الطلب؟', answer: "لا يوجد رسم إلغاء غير معلن في العرض الشهري المدار. ترد الدفعة غير المستخدمة قبل البدء؛ وبعد سريان الإلغاء عقب البدء تسترد الخدمة المدفوعة وغير المستخدمة بالتناسب. يشرح المبلغ والتواريخ، ولا يعاد تحميل تكاليف مشمولة كخصومات مفاجئة." },
        { question: 'هل تشمل الباقات المتابعة بعد الخدمة؟', answer: "تشمل Essential مراجعة في الأسبوع الأول ثم متابعة شهرية. وتشمل Signature مراجعة في الأسبوع الأول ثم متابعة كل أسبوعين مع منسق مخصص. ولـBlack تنسيق شخصي وجدول المراجعة الوارد في اتفاقها المخصص. يتبع الدعم البشري ساعات المكتب؛ واستقبال الرسالة ليس وعداً برد فوري." },
        { question: 'كيف أعرف أن السعر مناسب؟', answer: 'نشرح لك ما يشمله السعر، مدة الخدمة، والمتابعة المطلوبة حتى يكون القرار واضحاً قبل الحجز.' }
      ]
    },
    {
      id: 'booking',
      title: 'الحجز والخطوات',
      eyebrow: 'خطوات واضحة من أول تواصل',
      icon: 'booking',
      items: [
        { question: 'كيف أبدأ طلب الخدمة؟', answer: 'تواصل مع عناية هاتفياً أو عبر واتساب وشارك نوع الخدمة والإمارة والمنطقة والتوقيت المفضل. يجهز نموذج الموقع البيانات محلياً ولا يرسل طلباً.' },
        { question: 'ما التفاصيل التي يجب إرسالها أولاً؟', answer: 'نحتاج الاسم، رقم التواصل، نوع الخدمة، الإمارة أو المنطقة، مدة الخدمة، وأي ملاحظات مهمة عن احتياج الأسرة.' },
        { question: 'متى يتواصل معي الفريق؟', answer: "يعمل الدعم البشري من السبت إلى الخميس، من 9 صباحاً إلى 9 مساءً؛ الجمعة مغلق. يمكن استقبال رسائل واتساب خارج ساعات المكتب دون وعد برد بشري على مدار الساعة أو بوقت رد ثابت." },
        { question: 'متى يتم تأكيد الحجز؟', answer: "يأتي الحجز بعد مراجعة المتطلبات والملف الفردي المتاح وعرض السعر المكتوب. أكد المرشحة المختارة وترتيبات البدء كتابةً؛ ولا تبدأ الخدمة إلا بعد التصاريح النظامية المطلوبة. يتطلب اقتراح مرشحة مختلفة ملفاً معدلاً وموافقتك." },
        { question: 'هل يمكن الحجز عبر واتساب فقط؟', answer: 'نعم، يمكن بدء الطلب عبر واتساب، وسيطلب الفريق التفاصيل الأساسية لمراجعة التوفر.' },
        { question: 'هل يمكن زيارة المكتب للحجز؟', answer: 'نعم، يمكن زيارة مكتب عجمان بعد تأكيد التوقيت المناسب مع الفريق.' },
        { question: 'هل أحتاج إلى إرسال مستندات في البداية؟', answer: 'يعتمد ذلك على نوع الخدمة. في البداية نحتاج تفاصيل الطلب، ثم نوضح أي مستندات مطلوبة.' },
        { question: 'هل يمكن اختيار وقت بداية الخدمة؟', answer: 'يمكنك تحديد الوقت المفضل، وسيقوم الفريق بتأكيد ما إذا كان مناسباً ومتاحاً.' },
        { question: 'هل يمكن تغيير موعد الحجز؟', answer: 'يمكن طلب تغيير الموعد قبل التأكيد النهائي، ويعتمد ذلك على التوفر والجدول.' },
        { question: 'هل يمكن مقابلة المرشحة قبل القرار؟', answer: 'حسب نوع الخدمة والتوفر، يمكن توضيح خيارات المراجعة أو المقابلة قبل التأكيد.' },
        { question: 'هل ترسلون تفاصيل المرشحة؟', answer: "تؤكد المرشحة المختارة وترتيبات البدء المتفق عليها. إذا اقترحت مرشحة مختلفة، تقدم عناية الملف المعدل وتحصل على موافقة العميل. توضح التغييرات الجوهرية والبدائل المتفق عليها كتابةً مع احترام الخصوصية." },
        { question: 'هل يمكن طلب خدمة لعائلة خارج عجمان؟', answer: 'نعم، نخدم جميع إمارات الدولة، ويتم تأكيد التوفر حسب الإمارة والمنطقة.' },
        { question: 'هل يمكن حجز أكثر من خدمة في نفس الطلب؟', answer: 'نعم، يمكن ذكر كل الخدمات المطلوبة، وسيقوم الفريق بتنظيم الطلب وتوضيح الخيارات.' },
        { question: 'ما الذي يحدث بعد إرسال النموذج؟', answer: 'يراجع النموذج البيانات محلياً فقط؛ ولا يرسلها إلى عناية أو يؤكد موعداً. تواصل مع الفريق هاتفياً أو عبر واتساب لمشاركة استفسارك وتأكيد الخطوات التالية.' },
        { question: 'هل يتم إرسال تأكيد للحجز؟', answer: "تتسلم تأكيداً مكتوباً للمرشحة المختارة والنطاق المتفق عليه وترتيب البدء. احتفظ به مع العرض وسجلات السداد. يظل العمل مشروطاً بالتصاريح النظامية المنطبقة، وتتطلب التغييرات الجوهرية أو المرشحات البديلات توضيحاً مكتوباً وموافقة." },
        { question: 'هل يمكن إلغاء الطلب قبل التأكيد؟', answer: "في الخدمة الشهرية المدارة، تعاد دفعة الخدمة الشهرية غير المستخدمة قبل البدء. وبعد البدء، ترد قيمة الفترة المدفوعة وغير المستخدمة بعد سريان الإلغاء بالتناسب. وتبقى للخدمات المتعاقد عليها منفصلة شروطها المنطبقة وحقوقها القانونية." },
        { question: 'هل يتم شرح الخطوات قبل الدفع؟', answer: "نعم. راجع نطاق الخدمة وتفصيل السعر والمستندات والاستثناءات والمبلغ النهائي قبل التأكيد. يسدد الشهر الأول مقدماً للخدمة الشهرية القياسية المدارة دون رسم تجهيز أو استقدام منفصل أو تأمين نقدي؛ ثم تتبع الدفعات تاريخ الفوترة المتفق عليه." },
        { question: 'هل يمكن طلب خدمة عاجلة؟', answer: "شارك الاحتياج العاجل ليراجع الفريق التوفر الحالي ومتطلبات البدء النظامي. لا يثبت الاستفسار بدء الخدمة فوراً أو موعداً للموافقة الحكومية." },
        { question: 'هل يتوفر دعم باللغة العربية والإنجليزية؟', answer: 'نعم، يمكن التواصل مع الفريق بالعربية أو الإنجليزية لتوضيح تفاصيل الطلب.' },
        { question: 'ما أفضل طريقة لتسريع الطلب؟', answer: 'إرسال تفاصيل واضحة من البداية يساعد الفريق على مراجعة التوفر وتأكيد الخطوة المناسبة بسرعة.' }
      ]
    },
    {
      id: 'support',
      title: 'الاستبدال والمتابعة',
      eyebrow: 'دعم بعد الحجز',
      icon: 'support',
      items: [
        { question: 'هل توفرون دعم الاستبدال؟', answer: "نعم، تشمل كل باقة مراجعة الاستبدال المؤهل والمطابقة وإدارة الإجراءات. صف الملاحظة وفق المهام المتفق عليها وترتيب التوظيف. راجع البديل المقترح ووافق عليه؛ وينطبق التنسيق الاعتيادي وذو الأولوية وبحسب الدور على Essential وSignature وBlack على الترتيب." },
        { question: 'ماذا إذا لم تكن الخدمة مناسبة؟', answer: "شارك المهام المتفق عليها والملاحظة المحددة مع مسؤول الحجز والدعم. تراجع عناية طلبات الاستبدال المؤهلة وتنسق الخيارات بحسب الباقة. وإذا سري الإلغاء، تعالج الخدمة المدفوعة وغير المستخدمة وفق شروط الاسترداد الشهري التناسبي." },
        { question: 'هل توجد متابعة بعد بدء الخدمة؟', answer: "بعد التسليم العملي لاحتياجات المنزل، تتابع Essential في الأسبوع الأول ثم شهرياً؛ وSignature في الأسبوع الأول ثم كل أسبوعين. تتبع Black جدول المراجعة المتفق عليه مع تنسيق شخصي. استخدم مسؤول التواصل لملاحظات المهام أو الخدمة." },
        { question: 'ما أسرع طريقة للحصول على الدعم؟', answer: "تواصل مع المكتب على +971 6 740 0128 أو واتساب +971 50 203 6767 أو info@inayadomestic.ae. الدعم البشري من السبت إلى الخميس، من 9 صباحاً إلى 9 مساءً؛ الجمعة مغلق. لا يعني استقبال الرسائل خارج هذه الساعات وعداً برد فوري." },
        { question: 'هل يمكن تقديم شكوى؟', answer: 'نعم، يمكن مشاركة الملاحظة مع الفريق، وسيتم مراجعتها والتعامل معها حسب طبيعة الحالة.' },
        { question: 'هل يوجد شخص محدد للمتابعة؟', answer: "لدى Essential مسؤول محدد للحجز والدعم، ولدى Signature منسق خدمة مخصص، ولدى INAYA Black مسؤول مسمى لحساب الأسرة مع تنسيق شخصي." },
        { question: 'هل يمكن تغيير الخدمة بعد البداية؟', answer: "تراجع الخدمات الإضافية والتغييرات الجوهرية في الدور المتفق عليه وتسعر ويتفق عليها قبل قبولها. لا تضف مهام بصورة غير رسمية ولا تفترض أن عاملة واحدة تؤدي جميع أدوار التنظيف والطبخ ورعاية الأطفال والرعاية المنزلية معاً." },
        { question: 'هل يمكن تمديد مدة الخدمة؟', answer: 'نعم، يمكن طلب التمديد، وسيتم تأكيده حسب التوفر ونوع الترتيب.' },
        { question: 'هل يمكن إيقاف الخدمة مؤقتاً؟', answer: 'يعتمد ذلك على نوع الخدمة والاتفاق. يرجى التواصل مع الفريق لتوضيح الحالة.' },
        { question: 'هل تتابعون جودة الخدمة؟', answer: "يوفر جدول مراجعة الباقة وسيلة لمناقشة سير المهام والتنسيق المتفق عليهما. تراجع Essential في الأسبوع الأول ثم شهرياً، وSignature في الأسبوع الأول ثم كل أسبوعين، وBlack بحسب الاتفاق. هذه إجراءات متابعة وليست ضماناً لنتيجة معينة." },
        { question: 'هل يمكن التواصل خارج أوقات العمل؟', answer: "يمكن استقبال رسائل واتساب خارج ساعات المكتب. يعمل الدعم البشري من السبت إلى الخميس، من 9 صباحاً إلى 9 مساءً؛ الجمعة مغلق، دون وعد بخط بشري يعمل على مدار الساعة أو بوقت رد مضمون." },
        { question: 'هل يتم حفظ الملاحظات السابقة؟', answer: 'نراجع الملاحظات المرتبطة بطلبك حتى تكون المتابعة أكثر وضوحاً وتنظيماً.' },
        { question: 'هل يمكن إرسال مستندات عبر واتساب؟', answer: 'نعم، يمكن إرسال التفاصيل أو المستندات المطلوبة عبر واتساب عند طلبها من الفريق.' },
        { question: 'هل تدعمون العائلات بعد الحجز؟', answer: 'نعم، يبقى الفريق متاحاً لتوضيح الخطوات التالية ومتابعة أي استفسار.' },
        { question: 'هل يمكن إعادة جدولة المتابعة؟', answer: 'يمكن ترتيب وقت مناسب للتواصل حسب توفر الفريق واحتياج العميل.' },
        { question: 'هل يوجد دعم للاستفسارات المالية؟', answer: 'نعم، يمكن للفريق توضيح تفاصيل السعر أو الباقة أو أي بند يحتاج شرحاً إضافياً.' },
        { question: 'هل يمكن تصعيد المشكلة؟', answer: 'احتفظ بالاتفاق والتواريخ والإيصالات وطلبك والردود، وحدد النقاط غير المحسومة في طلب مراجعة مكتوب إلى info@inayadomestic.ae. يحدد إرشاد الوزارة الموقع وتطبيق MOHRE UAE والرقم 80084 للشكوى المناسبة بشأن العمالة المساعدة أو مكتب الاستقدام. تشرح صفحة إجراءات الدعم المسارات؛ ولا تمنع المراجعة الداخلية التصعيد الرسمي.' },
        { question: 'هل يتم التواصل عبر الهاتف أيضاً؟', answer: 'نعم، يمكن التواصل عبر الهاتف أو واتساب أو البريد الإلكتروني حسب تفضيل العميل.' },
        { question: 'هل يمكن زيارة المكتب للدعم؟', answer: 'نعم، يمكن زيارة المكتب بعد تنسيق الموعد أو التوقيت المناسب مع الفريق.' },
        { question: 'هل تقدمون دعماً للعقود طويلة المدى؟', answer: "تشمل INAYA Black تخطيطاً للترتيبات طويلة الأمد وتنسيقاً شخصياً وجدول مراجعة متفقاً عليه. تتبع Essential وSignature مواعيد المتابعة المنشورة، ويسجل التجديد وأي تغيير في النطاق في الاتفاق المنطبق." }
      ]
    },
    {
      id: 'compliance',
      title: 'الإجراءات والالتزام',
      eyebrow: 'شفافية في المستندات والخطوات',
      icon: 'shield',
      items: [
        { question: 'هل تقدمون إرشاداً بخصوص المستندات؟', answer: 'نعم، نوضح المستندات والخطوات المطلوبة حسب نوع الخدمة والترتيب المناسب.' },
        { question: 'هل الخدمات متوافقة مع متطلبات الإمارات؟', answer: 'نحرص على تنظيم الخطوات وشرحها بوضوح بما يتوافق مع متطلبات خدمات العمالة المنزلية في الدولة.' },
        { question: 'هل تشرحون خطوات العقد أو الخدمة؟', answer: 'نعم، يتم شرح الخطوات والالتزامات الأساسية قبل تأكيد أي حجز أو ترتيب.' },
        { question: 'هل يمكن زيارة مكتب عجمان؟', answer: 'نعم، يمكن زيارة مكتبنا في جراند مول عجمان بعد تأكيد التوقيت المناسب مع الفريق.' },
        { question: 'هل يتم توضيح مسؤوليات العميل؟', answer: "يحدد الاتفاق الوكالة صاحبة العمل والكفيل والعاملة والأسرة المستفيدة. تدير عناية الراتب المشمول والتزامات التوظيف المنطبقة لدى الوكالة. يدفع العميل رسوم الخدمة ويلتزم بمسؤوليات السكن والطعام والمستلزمات والإشراف وغيرها من مسؤوليات المنزل المسندة كتابةً." },
        { question: 'هل يتم التعامل مع بياناتي بسرية؟', answer: 'نحرص على التعامل مع بيانات العميل ومستنداته بعناية واستخدامها فقط لمتابعة الطلب والخدمة.' },
        { question: 'هل يتم شرح شروط الاستبدال؟', answer: "تراجع أهلية الاستبدال وفق المهام المكتوبة وترتيب التوظيف والالتزامات القانونية ذات الصلة. تشمل جميع الباقات إدارة الإجراءات؛ ويكون تنسيق المطابقة اعتيادياً لـEssential وذا أولوية لـSignature وبحسب الدور لـBlack. يحتاج تغيير المرشحة موافقتك، وتبقى سبل الإنصاف القانونية متاحة." },
        { question: 'هل يتم إصدار إيصال أو تأكيد؟', answer: "يتسلم العميل نطاق الخدمة المكتوب وتفصيل السعر ومستندات السداد المنطبقة قبل التأكيد. احتفظ بها مع الاتفاق وسجلات السداد اللاحقة." },
        { question: 'هل يمكن توضيح خطوات التأشيرة إذا كانت مطلوبة؟', answer: "تشمل الخدمة الشهرية المدارة الكفالة لدى الوكالة وإجراءات تصريح العمل والإقامة والهوية الإماراتية وفحص اللياقة الطبية المطلوب وقسط التأمين الصحي المنطبق. ولخدمة التأشيرة وحدها المتعاقد عليها منفصلة عرض خاص ومتطلبات بحسب الحالة؛ وتبقى الموافقة الرسمية من اختصاص الجهة المعنية." },
        { question: 'هل يتم توضيح متطلبات الهوية أو جواز السفر؟', answer: 'نعم، إذا كانت المستندات مطلوبة، يتم شرحها حسب نوع الخدمة والترتيب.' },
        { question: 'هل تقدمون استشارة قانونية؟', answer: 'نقدم إرشاداً متعلقاً بخطوات الخدمة. أي قرارات أو متطلبات رسمية تكون حسب الجهات المختصة.' },
        { question: 'هل يمكن مراجعة العقد قبل التأكيد؟', answer: 'نعم، يمكن طلب توضيح البنود والخطوات قبل أي تأكيد نهائي.' },
        { question: 'هل يتم توضيح سياسة الإلغاء؟', answer: "لاتفاق الخدمة الشهرية المدار، سجل تاريخ سريان الإلغاء والفترة المدفوعة وغير المستخدمة. ترد الدفعة غير المستخدمة قبل البدء؛ وبعد البدء تسترد قيمة الفترة غير المستخدمة بالتناسب. لا ينطبق رسم إلغاء خفي أو خصم مفاجئ لتكاليف مشمولة؛ ولا تؤدي الراحة المعتادة المدفوعة والإجازة المحمية تلقائياً إلى الإلغاء." },
        { question: 'هل يتم توضيح سياسة الاسترداد؟', answer: "الاسترداد الشهري حساب لخدمة العميل: إعادة الدفعة غير المستخدمة قبل البدء، أو استرداد الخدمة المدفوعة وغير المستخدمة بالتناسب بعد سريان الإلغاء. مبلغه وتواريخه المكتوبة منفصلة عن استحقاقات أجور العاملة وأي سبيل إنصاف قانوني لرسم الاستقدام. راجع سياسة الاسترداد والاستبدال لهذه الفروق." },
        { question: 'هل العمالة يتم مراجعتها قبل الترشيح؟', answer: 'نراجع التفاصيل المتاحة وفق الإجراءات الداخلية قبل مشاركة الخيارات المناسبة مع العميل.' },
        { question: 'هل يمكن طلب نسخة من تفاصيل الخدمة؟', answer: 'يمكن مشاركة ملخص الخدمة أو التفاصيل الأساسية عبر واتساب أو البريد الإلكتروني بعد المراجعة.' },
        { question: 'هل تتغير الإجراءات حسب الإمارة؟', answer: 'قد تختلف بعض الخطوات حسب الإمارة أو نوع الخدمة، ويتم توضيح ذلك عند مراجعة الطلب.' },
        { question: 'هل يتم إعلامي بأي تغيير في الخطوات؟', answer: "توضح عناية التغييرات الجوهرية والبدائل المتفق عليها كتابةً. وإذا اقترحت مرشحة مختلفة، يقدم الملف المعدل وتؤخذ موافقة العميل قبل التأكيد." },
        { question: 'هل يوجد التزام واضح قبل الدفع؟', answer: "قبل القبول، احتفظ بالمهام المكتوبة وترتيب البدء وتفصيل السعر ومستندات السداد والاستثناءات والضريبة المنطبقة معاً. تشمل الشروط الشهرية القياسية شهراً أول مدفوعاً مقدماً وتاريخ فوترة لاحقاً متفقاً عليه، دون رسم تجهيز أو استقدام منفصل أو تأمين نقدي. تتطلب التغييرات الجوهرية توضيحاً مكتوباً قبل الاتفاق." },
        { question: 'كيف أتأكد أن الطلب منظم؟', answer: 'يتم جمع التفاصيل، مراجعتها، ثم شرح الخطوات والتوفر والسعر بوضوح قبل الحجز.' }
      ]
    }
  ] : [
    {
      id: 'services',
      title: 'Services & Availability',
      eyebrow: 'UAE domestic worker services',
      icon: 'service',
      items: [
        { question: 'What services does INAYA Domestic Workers provide?', answer: 'INAYA provides house maid, nanny, babysitter, caregiver, cook and part-time help services, subject to availability and service type.' },
        { question: 'Do you serve all UAE emirates?', answer: 'Yes. We serve all UAE emirates, with availability confirmed by emirate, area, service type and requested duration.' },
        { question: 'Can I request a maid or nanny by experience or nationality?', answer: 'You can share your preferences clearly, and our team will review suitable available options for your household requirement.' },
        { question: 'Is availability guaranteed immediately?', answer: 'An enquiry does not guarantee availability. Ask the team to review options for your role and area before booking.' },
        { question: 'Do you provide live-in maids?', answer: "Yes. The advertised standard managed monthly service is live-in and salary-included. Essential starts from AED 2,500/month and Signature from AED 3,000/month; household duties, hours/rest, accommodation and meals are recorded in the agreement." },
        { question: 'Do you provide live-out domestic workers?', answer: "Live-out support requires its own itemised accommodation and transport quotation. The advertised monthly starting prices are for standard live-in service; separately scheduled part-time visits are not included automatically." },
        { question: 'Can I request a nanny?', answer: "Signature offers nanny options according to the agreed role and availability, with additional assessment of individual experience and communication, a dedicated coordinator and detailed onboarding guidance. Share the children’s ages, routine and agreed duties." },
        { question: 'Do you provide elderly care support?', answer: "Signature offers non-clinical caregiver options according to the agreed role and availability. Define companionship and household assistance individually; specialist clinical care is outside the standard scope unless separately and lawfully arranged." },
        { question: 'Can I request a cook or kitchen helper?', answer: 'Cook and kitchen helper requests can be reviewed based on cuisine preference, family size and availability.' },
        { question: 'Do you offer part-time help?', answer: "Scheduled part-time visits are separately quoted by duties, timing, area and availability. They are not automatically covered by the advertised full-time monthly price." },
        { question: 'Can you arrange same-day service?', answer: "Urgent requests can be reviewed against availability and the required lawful authorisation. INAYA does not promise same-day placement or a fixed government approval time." },
        { question: 'Can I arrange monthly service?', answer: "Yes. Essential starts from AED 2,500/month for routine household support; Signature from AED 3,000/month adds individual experience assessment and dedicated coordination. Black is Custom Quote. Standard monthly service is agency-managed, live-in and salary-included within the published scope and exclusions." },
        { question: 'Do you provide cleaning-only help?', answer: 'Cleaning support can be reviewed as part of home help services depending on the area and required duration.' },
        { question: 'Can you support apartments and villas?', answer: 'Yes. We support apartments and villas. Please share home size, room count and the work required.' },
        { question: 'Can I request newborn care support?', answer: 'You can share the baby’s age and required support, and our team will review the suitable option based on availability.' },
        { question: 'Can I change the service type after submitting a request?', answer: 'Yes. The request can be adjusted before final confirmation if the revised service is suitable and available.' },
        { question: 'Do you serve families only?', answer: 'Our services are focused on household and family requirements. Each request is reviewed based on the provided details.' },
        { question: 'Can I request more than one domestic worker?', answer: "INAYA Black provides tailored planning for multiple-worker, specialist or complex household requirements on a Custom Quote. Individual roles, availability, onboarding and a review schedule are agreed in writing." },
        { question: 'Do you provide consultation before service selection?', answer: 'Yes. Our team can help you understand the best service type before choosing a package or arrangement.' },
        { question: 'Can I visit the office to discuss services?', answer: 'Yes. You can visit our Ajman office after confirming a suitable time with the INAYA team.' }
      ]
    },
    {
      id: 'pricing',
      title: 'Pricing & Packages',
      eyebrow: 'Clear cost guidance before you decide',
      icon: 'price',
      items: [
        { question: 'Are your prices fixed?', answer: "Essential and Signature have starting monthly prices of AED 2,500 and AED 3,000 for the standard live-in offer. Black uses a Custom Quote. The written quotation confirms the individual role, availability, inclusions, exclusions, applicable tax and final payable amount." },
        { question: 'What is included in the package?', answer: "The domestic worker’s agreed salary. Documented salary-payment administration through the applicable approved mechanism. Applicable agency sponsorship and work-permit/residence processing. Emirates ID and required medical-fitness processing. The applicable health-insurance premium; benefits, exclusions and co-payments follow the issued policy and lawful responsibilities. Candidate assessment, initial orientation and agreed onboarding. Standard placement transport within the quoted service area. Customer coordination and administration of eligible replacement requests. Applicable agency employment obligations budgeted within the monthly service charge. The advertised monthly prices concern live-in service. Live-out service requires a separate itemised quotation covering accommodation and transport. Scheduled part-time visits are quoted separately and are not automatically covered by the full-time monthly price. Individual duties, hours, weekly rest and any additional work are recorded in the agreement for the selected role." },
        { question: 'Are government fees included?', answer: "Applicable agency sponsorship and work-permit/residence processing, Emirates ID and required medical-fitness processing are included in the managed monthly service. Separately contracted recruitment or visa-only services have their own itemised quotation; applicable tax and the final payable amount are stated before confirmation." },
        { question: 'What is a custom quote?', answer: "Bespoke staffing and household support planned for specialist, multiple-worker or complex requirements. The written custom quotation defines the roles, service scope, costs and review schedule." },
        { question: 'Why do prices vary between services?', answer: 'Prices vary because of service type, working hours, contract duration, special requirements and availability in the selected emirate or area.' },
        { question: 'Is the price confirmed before booking?', answer: "Before you confirm, receive the written service scope, itemised price and applicable payment documentation. The quotation distinguishes included salary and agency components from household responsibilities, separate arrangements, extras and applicable tax." },
        { question: 'Are there hidden charges?', answer: "The written quotation identifies inclusions, exclusions, applicable tax and the final payable amount before confirmation. Additional requested services or material scope changes are priced and agreed before acceptance. No undisclosed cancellation charge or unexpected deduction of already-included costs is imposed." },
        { question: 'Can I receive a written quote?', answer: "Yes. Customers receive the written service scope, price breakdown and applicable payment documentation before confirmation." },
        { question: 'Do live-in and live-out services cost differently?', answer: "Yes, compare the same arrangement. Essential from AED 2,500/month and Signature from AED 3,000/month concern live-in service. Live-out accommodation and transport are separately itemised in its quotation; part-time visit prices are also separate." },
        { question: 'How is part-time service priced?', answer: "Scheduled part-time visits have a separate quotation for the agreed work, schedule, location and lawful arrangement. The full-time managed monthly starting price does not automatically cover these visits." },
        { question: 'Do you offer monthly packages?', answer: "Choose Essential for routine household matching and standard coordination, Signature for additional individual assessment and a dedicated coordinator, or Black for bespoke planning. The monthly starting prices are AED 2,500 and AED 3,000 respectively; Black remains Custom Quote. The standard offer includes salary and concerns live-in service." },
        { question: 'Do you offer discounts for long-term service?', answer: "INAYA Black includes long-term arrangement planning. The written quotation records the agreed period, renewal arrangements and price; no general long-term discount is promised." },
        { question: 'Is replacement cost included?', answer: "Every tier includes reviewing and administering eligible replacement requests. Essential uses standard matching coordination, Signature priority matching and Black role-specific matching. Eligibility follows the agreed duties, employment arrangement and legal obligations; no unlimited replacement benefit or completion deadline is promised." },
        { question: 'Is advance payment required?', answer: "The standard managed monthly offer requires the first service month in advance; later payments use the agreed monthly billing date. It requires neither a separate upfront recruitment/setup fee nor a security deposit. Recruitment-only or visa-only services have their own quoted terms." },
        { question: 'Can I compare multiple packages?', answer: "Essential provides routine household matching, an assigned contact and first-week then monthly follow-up. Signature adds experience/communication assessment, a dedicated coordinator, priority matching and first-week then fortnightly follow-up. Black provides bespoke planning, a named contact and an agreed review schedule." },
        { question: 'Does pricing change by emirate?', answer: 'Pricing may vary by emirate or area because of availability and operational arrangements.' },
        { question: 'Can you suggest an option within my budget?', answer: 'You can share your expected budget, and we will explain the closest suitable options based on availability.' },
        { question: 'Are there cancellation charges?', answer: "There is no undisclosed cancellation charge in the managed monthly offer. Before commencement, unused payment is returned; after effective cancellation following commencement, unused prepaid service is refunded pro rata. The amount and dates are explained, and included costs are not reintroduced as unexpected deductions." },
        { question: 'Do packages include follow-up?', answer: "Essential includes a first-week review, then monthly follow-up. Signature includes a first-week review, then follow-up every two weeks with a dedicated coordinator. Black has personalised coordination and the review schedule in its custom agreement. Human support follows office hours; receiving a message is not a promised immediate reply." },
        { question: 'How do I know the price is suitable?', answer: 'We explain what the price covers, service duration and required follow-up so you can decide clearly before booking.' }
      ]
    },
    {
      id: 'booking',
      title: 'Booking Process',
      eyebrow: 'Clear steps from first contact',
      icon: 'booking',
      items: [
        { question: 'How do I start a service request?', answer: 'Contact INAYA by phone or WhatsApp with the service type, emirate, area and preferred timing. The website form prepares details locally and does not send a request.' },
        { question: 'What details should I send first?', answer: 'Please share your name, contact number, service type, emirate or area, service duration and any important household notes.' },
        { question: 'How quickly will your team respond?', answer: "Human support operates Saturday–Thursday, 9 AM–9 PM; Friday closed. WhatsApp messages may be received outside office hours, but this does not promise a 24/7 human response or a fixed reply time." },
        { question: 'When is the booking confirmed?', answer: "Booking follows review of the requirements, available individual profile and written quotation. Confirm the selected candidate and start arrangements in writing; service starts only after required lawful authorisation. A different proposed candidate requires a revised profile and your consent." },
        { question: 'Can I book through WhatsApp only?', answer: 'Yes. You can start through WhatsApp, and our team will ask for the key details needed to review availability.' },
        { question: 'Can I visit the office to book?', answer: 'Yes. You can visit our Ajman office after confirming a suitable time with the team.' },
        { question: 'Do I need to send documents at the start?', answer: 'It depends on the service type. At first, we need request details, then we explain any required documents.' },
        { question: 'Can I choose the service start time?', answer: 'You can share your preferred start time, and our team will confirm whether it is suitable and available.' },
        { question: 'Can I change the booking date?', answer: 'You can request a date change before final confirmation, subject to availability and scheduling.' },
        { question: 'Can I meet or interview the candidate?', answer: 'Depending on service type and availability, we can explain the review or interview options before confirmation.' },
        { question: 'Do you share candidate details?', answer: "The selected candidate and agreed start arrangements are confirmed. If a different candidate is proposed, INAYA provides the revised profile and obtains customer consent. Material changes and agreed alternatives are explained in writing, with privacy respected." },
        { question: 'Can I request service outside Ajman?', answer: 'Yes. We serve all UAE emirates, with availability confirmed by emirate and area.' },
        { question: 'Can I book more than one service in one request?', answer: 'Yes. Mention all required services, and our team will organize the request and explain suitable options.' },
        { question: 'What happens after I submit the form?', answer: 'The form only checks details locally; it does not send them to INAYA or confirm an appointment. Contact the team by phone or WhatsApp to share your enquiry and confirm next steps.' },
        { question: 'Will I receive booking confirmation?', answer: "You receive written confirmation of the selected candidate, agreed scope and start arrangement. Keep it with the quotation and payment records. Work still requires the applicable lawful authorisation, and material changes or alternative candidates require written explanation and consent." },
        { question: 'Can I cancel before confirmation?', answer: "For the managed monthly service, the unused monthly service payment is returned before commencement. After commencement, the unused prepaid period following effective cancellation is refunded pro rata. Separately contracted services retain their own applicable terms and statutory rights." },
        { question: 'Are the steps explained before payment?', answer: "Yes. Review the service scope, price breakdown, documentation, exclusions and final amount before confirmation. Standard managed monthly service takes month one in advance with no separate setup/recruitment fee or deposit; later payments follow the agreed billing date." },
        { question: 'Can I request urgent service?', answer: "Share the urgent requirement and the team will review current availability and lawful start requirements. An enquiry does not establish immediate placement or a government approval deadline." },
        { question: 'Is support available in Arabic and English?', answer: 'Yes. You can communicate with the team in Arabic or English to clarify your request.' },
        { question: 'What is the best way to speed up my request?', answer: 'Send clear details from the start so the team can review availability and confirm the right next step quickly.' }
      ]
    },
    {
      id: 'support',
      title: 'Replacement & Support',
      eyebrow: 'Support after booking',
      icon: 'support',
      items: [
        { question: 'Do you offer replacement support?', answer: "Yes, eligible replacement review, matching and administration are included in every tier. Describe the concern against the agreed duties and employment arrangement. Review the proposed alternative and give consent; standard, priority and role-specific coordination apply to Essential, Signature and Black respectively." },
        { question: 'What if the service is not suitable?', answer: "Share the agreed duties and the specific concern with your booking/support contact. INAYA reviews eligible replacement requests and coordinates options according to the tier. If cancellation takes effect, unused prepaid service is handled under the monthly pro-rata refund terms." },
        { question: 'Do you follow up after service starts?', answer: "After the practical handover, Essential follows up in the first week and monthly thereafter; Signature in the first week and fortnightly thereafter. Black follows the agreed review schedule with personalised coordination. Use the assigned contact for duty or service concerns." },
        { question: 'What is the fastest way to get support?', answer: "Contact the office on +971 6 740 0128, WhatsApp +971 50 203 6767 or info@inayadomestic.ae. Human support is Saturday–Thursday, 9 AM–9 PM; Friday closed. Messages received outside these hours do not carry an immediate-response promise." },
        { question: 'Can I raise a complaint?', answer: 'Yes. You can share the concern with the team, and it will be reviewed according to the case.' },
        { question: 'Will I have a specific follow-up contact?', answer: "Essential has an assigned booking/support contact; Signature has a dedicated service coordinator; INAYA Black has a named household account contact with personalised coordination." },
        { question: 'Can I change the service after it starts?', answer: "Additional services or material changes to the agreed role are reviewed, priced and agreed before acceptance. Do not add duties informally or assume one worker will perform every cleaning, cooking, childcare and care role together." },
        { question: 'Can I extend the service period?', answer: 'Yes. Extension requests can be reviewed and confirmed based on availability and arrangement type.' },
        { question: 'Can I pause the service?', answer: 'This depends on service type and agreement. Please contact the team to explain the situation.' },
        { question: 'Do you monitor service quality?', answer: "The package review schedule provides a way to discuss how agreed duties and coordination are working. Essential reviews in week one then monthly, Signature in week one then every two weeks, and Black as agreed. This is a follow-up process, not a guarantee of a particular outcome." },
        { question: 'Can I contact you after working hours?', answer: "WhatsApp messages may be received outside office hours. Human support operates Saturday–Thursday, 9 AM–9 PM; Friday closed, without a 24/7 human-helpline or guaranteed-response-time promise." },
        { question: 'Do you keep previous notes on my request?', answer: 'Notes related to your request are reviewed so follow-up can remain clear and organized.' },
        { question: 'Can I send documents through WhatsApp?', answer: 'Yes. You can send requested details or documents through WhatsApp when the team asks for them.' },
        { question: 'Do you support families after booking?', answer: 'Yes. The team remains available to clarify next steps and answer questions.' },
        { question: 'Can I reschedule a follow-up call?', answer: 'A suitable follow-up time can be arranged depending on team availability and client need.' },
        { question: 'Can you help with pricing questions after booking?', answer: 'Yes. The team can explain package details, pricing items or any point that needs clarification.' },
        { question: 'Can an issue be escalated?', answer: 'Keep the agreement, dates, receipts, request and replies, and identify unresolved points in a written review request to info@inayadomestic.ae. MOHRE guidance identifies its website, MOHRE UAE app and 80084 for the appropriate domestic-worker or recruitment-office complaint. Support Process explains the routes; an internal review does not prevent official escalation.' },
        { question: 'Can support happen by phone?', answer: 'Yes. You can contact us by phone, WhatsApp or email depending on your preference.' },
        { question: 'Can I visit the office for support?', answer: 'Yes. Office visits are possible after coordinating a suitable time with the team.' },
        { question: 'Do you support long-term arrangements?', answer: "INAYA Black includes long-term arrangement planning, personalised coordination and an agreed review schedule. Essential and Signature follow their published schedules; renewal and any scope changes are recorded in the applicable agreement." }
      ]
    },
    {
      id: 'compliance',
      title: 'Process & Compliance',
      eyebrow: 'Transparent documents and service steps',
      icon: 'shield',
      items: [
        { question: 'Do you guide clients about documents?', answer: 'Yes. We explain the documents and steps required according to the service type and suitable arrangement.' },
        { question: 'Are your services aligned with UAE requirements?', answer: 'We focus on organized and transparent steps aligned with domestic worker service requirements in the UAE.' },
        { question: 'Do you explain contract or service steps?', answer: 'Yes. The main steps and responsibilities are explained before any booking or arrangement is confirmed.' },
        { question: 'Can I visit the Ajman office?', answer: 'Yes. You can visit our office at Grand Mall, Ajman after confirming the suitable timing with the team.' },
        { question: 'Do you explain client responsibilities?', answer: "The agreement identifies the agency employer/sponsor, worker and household beneficiary. INAYA administers the included salary and applicable agency employment obligations. The customer pays the service charge and fulfils the accommodation, meals, supplies, supervision and other household responsibilities assigned in writing." },
        { question: 'Is my personal information handled carefully?', answer: 'We handle client details and documents carefully and use them only for request follow-up and service coordination.' },
        { question: 'Are replacement terms explained?', answer: "Replacement eligibility is reviewed against the written duties, employment arrangement and relevant legal obligations. All tiers include administration; matching coordination is standard for Essential, priority for Signature and role-specific for Black. Candidate changes need your consent, and statutory remedies remain available." },
        { question: 'Will I receive a receipt or confirmation?', answer: "Customers receive the written service scope, price breakdown and applicable payment documentation before confirmation. Keep these with the agreement and later payment records." },
        { question: 'Can you explain visa steps if required?', answer: "Applicable agency sponsorship and work-permit/residence processing, Emirates ID, required medical-fitness processing and the health-insurance premium are included in the managed monthly service. A separately contracted visa-only service has its own quotation and case-specific requirements; official approval remains with the authority." },
        { question: 'Do you explain Emirates ID or passport requirements?', answer: 'Yes. If documents are required, they are explained based on service type and arrangement.' },
        { question: 'Do you provide legal advice?', answer: 'We provide guidance related to service steps. Official or legal decisions remain subject to the relevant authorities.' },
        { question: 'Can I review service terms before confirmation?', answer: 'Yes. You can request clarification of terms and steps before final confirmation.' },
        { question: 'Is the cancellation policy explained?', answer: "For the managed monthly agreement, record the effective cancellation date and unused prepaid period. Unused payment before commencement is returned; after commencement the unused period is refunded proportionately. No hidden cancellation charge or unexpected deduction of included costs applies; normal paid rest and protected leave do not automatically trigger cancellation." },
        { question: 'Is the refund policy explained?', answer: "The monthly refund is a customer-service calculation: return unused pre-start payment, or refund unused prepaid service pro rata after effective cancellation. Its written amount and dates are separate from worker wage entitlements and any statutory recruitment-fee remedy. Review the Refund & Replacement Policy for those distinctions." },
        { question: 'Are workers reviewed before recommendation?', answer: 'Available details are reviewed according to internal procedures before suitable options are shared with the client.' },
        { question: 'Can I request a copy of service details?', answer: 'A service summary or key details can be shared by WhatsApp or email after review.' },
        { question: 'Do procedures change by emirate?', answer: 'Some steps may vary by emirate or service type, and this is explained when the request is reviewed.' },
        { question: 'Will I be informed if steps change?', answer: "INAYA explains material changes and agreed alternatives in writing. If a different candidate is proposed, the revised profile is provided and customer consent obtained before confirmation." },
        { question: 'Is everything clear before payment?', answer: "Before acceptance, keep the written duties, start arrangement, price breakdown, payment documents, exclusions and applicable tax together. Standard monthly terms include a prepaid first month and later agreed billing date, with no separate setup/recruitment fee or deposit. Material changes require written explanation before agreement." },
        { question: 'How do I know my request is organized?', answer: 'Details are collected, reviewed and then explained clearly with availability, pricing and next steps before booking.' }
      ]
    }
  ];

  const [activeId, setActiveId] = useState(categories[0].id);
  const activeCategory = categories.find((category) => category.id === activeId) ?? categories[0];
  const totalFaqs = categories.reduce((total, category) => total + category.items.length, 0);
  const copy = {
    badge: isArabic ? 'مركز المساعدة' : 'Help Center',
    title: isArabic ? 'الأسئلة الشائعة' : 'Frequently Asked Questions',
    subtitle: isArabic
      ? 'كل ما تحتاج معرفته عن خدمات عناية للعمالة المنزلية، الحجز، الأسعار، الدعم، والإجراءات داخل الإمارات.'
      : 'Everything you need to know about INAYA Domestic Workers services, booking, pricing, support and UAE service steps.',
    ctaTitle: isArabic ? 'هل لديك سؤال آخر؟' : 'Still have questions?',
    ctaText: isArabic
      ? 'فريق عناية جاهز لتوضيح التفاصيل ومساعدتك في اختيار الخدمة المناسبة لأسرتك.'
      : 'Our team is available to clarify the details and help you choose the right service for your household.',
    ctaWhatsapp: isArabic ? 'تواصل عبر واتساب' : 'WhatsApp Us',
    ctaBooking: isArabic ? 'ابدأ طلبك' : 'Start a Request',
    showing: isArabic ? 'يعرض' : 'Showing'
  };

  return (
    <div className="overflow-hidden bg-ivory text-ink">
      <script type="application/ld+json" data-seo="visible-faq" dangerouslySetInnerHTML={{ __html: serializeJsonLd({ '@context': 'https://schema.org', ...faqEntity(locale, 'faq', activeCategory.items) }) }} />
      <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(191,164,106,0.20),transparent_28rem),radial-gradient(circle_at_12%_44%,rgba(7,22,74,0.10),transparent_25rem)]" />
        <div className="container-x relative">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-700/10 bg-white/65 px-4 py-2 text-xs font-semibold text-primary-900 shadow-sm backdrop-blur-xl sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-accent-500" />
              {copy.badge}
            </span>
            <h1 className={`mx-auto mt-6 max-w-3xl ${headingClass}`}>{copy.title}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-ink/75 sm:text-lg sm:leading-8">
              {copy.subtitle}
            </p>
          </div>
        </div>
      </section>
      <PageBreadcrumbs locale={locale} route="faq" className="mb-7" />

      <section className="container-x -mt-7 pb-24 sm:pb-28 lg:pb-36">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[18px] border border-primary-900/8 bg-white/82 p-2 shadow-[0_18px_55px_rgba(7,22,74,0.08)] backdrop-blur-xl">
            <div className="grid gap-2 md:grid-cols-5">
              {categories.map((category) => {
                const isActive = category.id === activeId;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveId(category.id)}
                    aria-controls={`faq-panel-${category.id}`}
                    aria-pressed={isActive}
                    className={`flex items-center justify-center gap-2 rounded-[13px] px-4 py-3 text-sm font-bold transition ${isActive ? 'bg-primary-900 text-white shadow-[0_12px_26px_rgba(7,22,74,0.2)]' : 'text-primary-900/75 hover:bg-accent-50 hover:text-primary-900'}`}
                  >
                    <LineIcon name={category.icon} className={`h-4 w-4 ${isActive ? 'text-accent-200' : 'text-accent-700'}`} />
                    <span>{category.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-5xl">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-accent-700">{activeCategory.eyebrow}</p>
                <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} mt-3 text-2xl font-bold tracking-[-0.015em] text-primary-900 sm:text-[2rem]`}>
                  {activeCategory.title}
                </h2>
              </div>
              <span className="w-fit rounded-full border border-accent-500/24 bg-white/74 px-4 py-2 text-xs font-bold text-primary-900 shadow-sm">
                {copy.showing} {activeCategory.items.length} / {totalFaqs}
              </span>
            </div>

            <div>
              {categories.map((category) => (
                <div
                  key={category.id}
                  id={`faq-panel-${category.id}`}
                  data-faq-panel={category.id}
                  hidden={category.id !== activeId}
                  className="space-y-4"
                >
                  {category.items.map((item, index) => (
                    <details
                      key={item.question}
                      open={index === 0}
                      className="group rounded-[16px] border border-primary-900/8 bg-white/86 shadow-[0_14px_42px_rgba(7,22,74,0.05)] backdrop-blur-xl transition hover:border-accent-500/28"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 text-start text-lg font-bold leading-snug text-primary-900 sm:px-8 sm:py-6 sm:text-xl">
                        <span>{item.question}</span>
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f1eee7] text-accent-700 transition group-open:rotate-180">⌄</span>
                      </summary>
                      <p className="border-t border-primary-900/8 px-6 pb-6 pt-4 text-sm leading-7 text-primary-900/80 sm:px-8 sm:text-[0.95rem]">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-28 max-w-5xl rounded-[18px] border border-accent-500/18 bg-[radial-gradient(circle_at_70%_15%,rgba(191,164,106,0.16),transparent_22rem),rgba(255,255,255,0.78)] px-6 py-14 text-center shadow-[0_18px_60px_rgba(7,22,74,0.05)] backdrop-blur-xl sm:mt-36 sm:px-10 sm:py-16">
          <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-[2rem] font-bold leading-tight tracking-[-0.02em] text-primary-900 sm:text-[2.45rem]`}>
            {copy.ctaTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-primary-900/80 sm:text-base">
            {copy.ctaText}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-primary-900/80">
            <Link href={`/${locale}/blog/live-in-live-out-part-time-maid-uae/`} className="font-semibold underline decoration-accent-500/70 underline-offset-4 hover:text-accent-700">{isArabic ? 'قارن الإقامة وجدول العمل' : 'Compare residence and work schedules'}</Link>
            {' · '}
            <Link href={`/${locale}/blog/monthly-maid-package-inclusions-checklist/`} className="font-semibold underline decoration-accent-500/70 underline-offset-4 hover:text-accent-700">{isArabic ? 'راجع أسئلة الباقة الشهرية' : 'Review monthly package questions'}</Link>
            {' · '}
            <Link href={`/${locale}/refund-policy/`} className="font-semibold underline decoration-accent-500/70 underline-offset-4 hover:text-accent-700">{isArabic ? 'الاسترداد والاستبدال' : 'Refund and replacement'}</Link>
            {' · '}
            <Link href={`/${locale}/support-process/`} className="font-semibold underline decoration-accent-500/70 underline-offset-4 hover:text-accent-700">{isArabic ? 'الدعم والتصعيد' : 'Support and escalation'}</Link>
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="https://wa.me/971502036767" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-accent-400 bg-primary-900 px-7 py-3 text-sm font-bold text-accent-100 shadow-[0_14px_30px_rgba(7,22,74,0.20)] transition hover:-translate-y-0.5 hover:bg-accent-500 hover:text-primary-900">
              <LineIcon name="message" className="h-4 w-4" />
              {copy.ctaWhatsapp}
            </a>
            <Link href={`/${locale}/booking`} className="inline-flex items-center justify-center gap-2 rounded-full border border-accent-500/55 bg-white px-7 py-3 text-sm font-bold text-primary-900 transition hover:-translate-y-0.5 hover:bg-accent-50">
              {copy.ctaBooking}
              <LineIcon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
