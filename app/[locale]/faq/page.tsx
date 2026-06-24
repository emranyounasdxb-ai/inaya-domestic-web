'use client';

import { useState } from 'react';
import Link from 'next/link';

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

export default function FaqPage({ params: { locale } }: { params: { locale: string } }) {
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
        { question: 'هل التوفر مضمون فوراً؟', answer: 'التوفر لا يكون مضموناً إلا بعد مراجعة الطلب. نؤكد لك الخيارات المناسبة قبل أي حجز أو التزام.' },
        { question: 'هل توفرون خادمات مقيمات داخل المنزل؟', answer: 'يمكننا مراجعة طلب الخادمة المقيمة حسب الإمارة ونوع الخدمة والتوفر الحالي، ثم توضيح الخيارات المناسبة.' },
        { question: 'هل توفرون خدمات خارجية أو غير مقيمة؟', answer: 'نعم، يمكن ترتيب خدمات غير مقيمة أو بدوام جزئي حسب نوع الطلب والمنطقة والجدول المطلوب.' },
        { question: 'هل يمكن طلب مربية أطفال؟', answer: 'نعم، يمكن طلب مربية أو جليسة أطفال مع توضيح عمر الأطفال، ساعات الخدمة، وأي متطلبات خاصة للأسرة.' },
        { question: 'هل تقدمون رعاية لكبار السن؟', answer: 'نراجع طلبات رعاية كبار السن حسب طبيعة الحالة، ساعات الخدمة، ومستوى المساعدة المطلوبة داخل المنزل.' },
        { question: 'هل توفرون طهاة أو مساعدين للمطبخ؟', answer: 'يمكننا مراجعة طلبات الطهاة أو المساعدة في المطبخ حسب نوع المطبخ، عدد أفراد الأسرة، والتوفر.' },
        { question: 'هل يمكن طلب خدمة بدوام جزئي؟', answer: 'نعم، نوفر خيارات بدوام جزئي حسب المنطقة والوقت ونوع العمل المطلوب داخل المنزل.' },
        { question: 'هل تقدمون خدمة عاجلة أو في نفس اليوم؟', answer: 'نراجع الطلبات العاجلة فوراً، لكن التوفر في نفس اليوم يعتمد على المنطقة ونوع الخدمة والوقت المطلوب.' },
        { question: 'هل يمكن ترتيب خدمة شهرية؟', answer: 'نعم، يمكن مناقشة الترتيبات الشهرية أو طويلة المدى حسب احتياج الأسرة ونوع الخدمة.' },
        { question: 'هل تقدمون خدمات تنظيف فقط؟', answer: 'يمكن مراجعة طلب التنظيف المنزلي ضمن خدمات المساعدة المنزلية حسب المنطقة والمدة المطلوبة.' },
        { question: 'هل الخدمة مناسبة للشقق والفلل؟', answer: 'نعم، نخدم الشقق والفلل. نحتاج فقط معرفة حجم المنزل وعدد الغرف وطبيعة العمل المطلوب.' },
        { question: 'هل يمكن طلب مساعدة لرعاية الأطفال حديثي الولادة؟', answer: 'يمكنك توضيح عمر الطفل ونوع المساعدة المطلوبة، وسيقوم الفريق بمراجعة الخيار المناسب حسب التوفر.' },
        { question: 'هل يمكن تغيير نوع الخدمة بعد الطلب؟', answer: 'نعم، يمكن تعديل نوع الخدمة قبل التأكيد النهائي إذا كان ذلك مناسباً ومتوفراً.' },
        { question: 'هل تخدمون العائلات فقط؟', answer: 'تركز خدماتنا على احتياجات الأسر والمنازل، ويتم تقييم كل طلب حسب نوع الخدمة والتفاصيل المقدمة.' },
        { question: 'هل يمكن طلب أكثر من عاملة منزلية؟', answer: 'يمكن مراجعة الطلبات التي تحتاج أكثر من عاملة أو أكثر من نوع خدمة حسب التوفر والترتيب المطلوب.' },
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
        { question: 'هل الأسعار ثابتة؟', answer: 'الأسعار تختلف حسب نوع الخدمة، الإمارة، مدة الخدمة، والتوفر. يتم تأكيد السعر النهائي قبل الحجز.' },
        { question: 'ماذا تشمل الباقة؟', answer: 'تعتمد التفاصيل على نوع الخدمة أو الباقة. نوضح لك ما هو مشمول وما يحتاج إلى تأكيد إضافي قبل المتابعة.' },
        { question: 'هل الرسوم الحكومية مشمولة؟', answer: 'أي رسوم حكومية أو إجراءات رسمية يتم توضيحها بشكل منفصل حسب نوع الخدمة والحالة.' },
        { question: 'ما المقصود بعرض السعر المخصص؟', answer: 'عرض السعر المخصص يستخدم عندما يكون الطلب خاصاً، مثل ترتيب طويل المدى، أكثر من خدمة، أو متابعة إضافية للأسرة.' },
        { question: 'لماذا تختلف الأسعار بين الخدمات؟', answer: 'تختلف الأسعار بسبب نوع الخدمة، ساعات العمل، مدة العقد، المتطلبات الخاصة، والتوفر في الإمارة أو المنطقة.' },
        { question: 'هل يتم تأكيد السعر قبل الحجز؟', answer: 'نعم، يتم توضيح السعر والخطوات الأساسية قبل أي تأكيد نهائي.' },
        { question: 'هل توجد رسوم مخفية؟', answer: 'نوضح التكاليف المتوقعة قبل المتابعة، وأي رسوم إضافية يتم شرحها بشكل منفصل حسب الحالة.' },
        { question: 'هل يمكن الحصول على عرض سعر مكتوب؟', answer: 'يمكنك طلب ملخص واضح للتكلفة والخدمة عبر واتساب أو البريد الإلكتروني بعد مراجعة التفاصيل.' },
        { question: 'هل تختلف أسعار الخادمة المقيمة عن غير المقيمة؟', answer: 'نعم، تختلف حسب نوع الترتيب، مدة الخدمة، والمسؤوليات المطلوبة داخل المنزل.' },
        { question: 'كيف يتم حساب خدمة الدوام الجزئي؟', answer: 'يتم حسابها حسب عدد الساعات أو الأيام ونوع الخدمة والمنطقة، ثم يتم تأكيد السعر النهائي.' },
        { question: 'هل توجد باقات شهرية؟', answer: 'يمكن ترتيب باقات أو خدمات شهرية حسب احتياج الأسرة ونوع الخدمة والتوفر.' },
        { question: 'هل يوجد خصم للعقود الطويلة؟', answer: 'يمكن مراجعة الأسعار الخاصة للطلبات طويلة المدى حسب نوع الخدمة والمدة والتفاصيل.' },
        { question: 'هل رسوم الاستبدال مشمولة؟', answer: 'تعتمد شروط الاستبدال على نوع الباقة والاتفاق. يتم توضيحها قبل الحجز.' },
        { question: 'هل يجب الدفع مقدماً؟', answer: 'آلية الدفع والخطوات المالية يتم توضيحها قبل التأكيد، حسب نوع الخدمة أو الباقة.' },
        { question: 'هل أستطيع مقارنة أكثر من باقة؟', answer: 'نعم، يمكن للفريق شرح الفروقات بين الخيارات حتى تختار ما يناسب الأسرة.' },
        { question: 'هل السعر يتغير حسب الإمارة؟', answer: 'قد يتغير السعر حسب الإمارة أو المنطقة بسبب التوفر والترتيبات التشغيلية.' },
        { question: 'هل يمكن اختيار باقة اقتصادية؟', answer: 'يمكنك مشاركة الميزانية المتوقعة، وسنوضح لك الخيارات الأقرب لاحتياجك حسب التوفر.' },
        { question: 'هل توجد رسوم لإلغاء الطلب؟', answer: 'تختلف شروط الإلغاء حسب مرحلة الطلب ونوع الخدمة، ويتم توضيحها قبل المتابعة.' },
        { question: 'هل تشمل الباقات المتابعة بعد الخدمة؟', answer: 'تتضمن بعض الترتيبات متابعة من الفريق، ويتم توضيح مستوى المتابعة ضمن تفاصيل الخدمة.' },
        { question: 'كيف أعرف أن السعر مناسب؟', answer: 'نشرح لك ما يشمله السعر، مدة الخدمة، والمتابعة المطلوبة حتى يكون القرار واضحاً قبل الحجز.' }
      ]
    },
    {
      id: 'booking',
      title: 'الحجز والخطوات',
      eyebrow: 'خطوات واضحة من أول تواصل',
      icon: 'booking',
      items: [
        { question: 'كيف أبدأ طلب الخدمة؟', answer: 'يمكنك تعبئة نموذج الطلب أو التواصل عبر واتساب مع نوع الخدمة المطلوبة، الإمارة، المنطقة، والوقت المناسب.' },
        { question: 'ما التفاصيل التي يجب إرسالها أولاً؟', answer: 'نحتاج الاسم، رقم التواصل، نوع الخدمة، الإمارة أو المنطقة، مدة الخدمة، وأي ملاحظات مهمة عن احتياج الأسرة.' },
        { question: 'متى يتواصل معي الفريق؟', answer: 'بعد استلام الطلب، يتواصل الفريق لمراجعة التفاصيل وتأكيد التوفر والخطوة التالية.' },
        { question: 'متى يتم تأكيد الحجز؟', answer: 'يتم تأكيد الحجز بعد مراجعة التفاصيل، التوفر، نوع الخدمة، والسعر أو الخطوات المطلوبة.' },
        { question: 'هل يمكن الحجز عبر واتساب فقط؟', answer: 'نعم، يمكن بدء الطلب عبر واتساب، وسيطلب الفريق التفاصيل الأساسية لمراجعة التوفر.' },
        { question: 'هل يمكن زيارة المكتب للحجز؟', answer: 'نعم، يمكن زيارة مكتب عجمان بعد تأكيد التوقيت المناسب مع الفريق.' },
        { question: 'هل أحتاج إلى إرسال مستندات في البداية؟', answer: 'يعتمد ذلك على نوع الخدمة. في البداية نحتاج تفاصيل الطلب، ثم نوضح أي مستندات مطلوبة.' },
        { question: 'هل يمكن اختيار وقت بداية الخدمة؟', answer: 'يمكنك تحديد الوقت المفضل، وسيقوم الفريق بتأكيد ما إذا كان مناسباً ومتاحاً.' },
        { question: 'هل يمكن تغيير موعد الحجز؟', answer: 'يمكن طلب تغيير الموعد قبل التأكيد النهائي، ويعتمد ذلك على التوفر والجدول.' },
        { question: 'هل يمكن مقابلة المرشحة قبل القرار؟', answer: 'حسب نوع الخدمة والتوفر، يمكن توضيح خيارات المراجعة أو المقابلة قبل التأكيد.' },
        { question: 'هل ترسلون تفاصيل المرشحة؟', answer: 'نشارك التفاصيل المناسبة حسب الإجراء ونوع الخدمة، مع احترام الخصوصية والسياسات المعتمدة.' },
        { question: 'هل يمكن طلب خدمة لعائلة خارج عجمان؟', answer: 'نعم، نخدم جميع إمارات الدولة، ويتم تأكيد التوفر حسب الإمارة والمنطقة.' },
        { question: 'هل يمكن حجز أكثر من خدمة في نفس الطلب؟', answer: 'نعم، يمكن ذكر كل الخدمات المطلوبة، وسيقوم الفريق بتنظيم الطلب وتوضيح الخيارات.' },
        { question: 'ما الذي يحدث بعد إرسال النموذج؟', answer: 'يقوم الفريق بمراجعة الطلب ثم يتواصل معك لتأكيد المعلومات والتوفر والخطوة التالية.' },
        { question: 'هل يتم إرسال تأكيد للحجز؟', answer: 'نعم، بعد التأكيد النهائي يتم توضيح تفاصيل الخدمة والخطوات المتفق عليها.' },
        { question: 'هل يمكن إلغاء الطلب قبل التأكيد؟', answer: 'يمكنك إبلاغ الفريق قبل التأكيد النهائي، وسيتم إرشادك حسب مرحلة الطلب.' },
        { question: 'هل يتم شرح الخطوات قبل الدفع؟', answer: 'نعم، نوضح التفاصيل الأساسية والخطوات المطلوبة قبل أي إجراء نهائي.' },
        { question: 'هل يمكن طلب خدمة عاجلة؟', answer: 'يمكنك إرسال طلب عاجل، وسيتم مراجعة التوفر بأسرع وقت حسب المنطقة ونوع الخدمة.' },
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
        { question: 'هل توفرون دعم الاستبدال؟', answer: 'دعم الاستبدال يعتمد على نوع الباقة والاتفاق وفترة الخدمة والتوفر، ويتم توضيحه قبل الحجز.' },
        { question: 'ماذا إذا لم تكن الخدمة مناسبة؟', answer: 'يمكنك التواصل مع الفريق، وسيتم مراجعة الملاحظة وتوضيح الخيارات المتاحة حسب الحالة والاتفاق.' },
        { question: 'هل توجد متابعة بعد بدء الخدمة؟', answer: 'نعم، يتابع فريق عناية معك لتوضيح أي خطوة لاحقة ودعمك عند الحاجة.' },
        { question: 'ما أسرع طريقة للحصول على الدعم؟', answer: 'واتساب هو الأسرع لمشاركة التفاصيل ومتابعة التوفر والدعم. يمكنك أيضاً الاتصال أو إرسال بريد إلكتروني.' },
        { question: 'هل يمكن تقديم شكوى؟', answer: 'نعم، يمكن مشاركة الملاحظة مع الفريق، وسيتم مراجعتها والتعامل معها حسب طبيعة الحالة.' },
        { question: 'هل يوجد شخص محدد للمتابعة؟', answer: 'يقوم الفريق بتوجيه طلبك للمتابعة المناسبة حسب نوع الخدمة والتفاصيل.' },
        { question: 'هل يمكن تغيير الخدمة بعد البداية؟', answer: 'يمكن مراجعة طلب التغيير حسب نوع الخدمة، الاتفاق، والتوفر الحالي.' },
        { question: 'هل يمكن تمديد مدة الخدمة؟', answer: 'نعم، يمكن طلب التمديد، وسيتم تأكيده حسب التوفر ونوع الترتيب.' },
        { question: 'هل يمكن إيقاف الخدمة مؤقتاً؟', answer: 'يعتمد ذلك على نوع الخدمة والاتفاق. يرجى التواصل مع الفريق لتوضيح الحالة.' },
        { question: 'هل تتابعون جودة الخدمة؟', answer: 'نحرص على المتابعة الودية وفهم ملاحظات العميل لضمان وضوح الخطوات والدعم.' },
        { question: 'هل يمكن التواصل خارج أوقات العمل؟', answer: 'يمكن إرسال رسالة واتساب في أي وقت، وسيتم الرد حسب وقت العمل وتوفر الفريق.' },
        { question: 'هل يتم حفظ الملاحظات السابقة؟', answer: 'نراجع الملاحظات المرتبطة بطلبك حتى تكون المتابعة أكثر وضوحاً وتنظيماً.' },
        { question: 'هل يمكن إرسال مستندات عبر واتساب؟', answer: 'نعم، يمكن إرسال التفاصيل أو المستندات المطلوبة عبر واتساب عند طلبها من الفريق.' },
        { question: 'هل تدعمون العائلات بعد الحجز؟', answer: 'نعم، يبقى الفريق متاحاً لتوضيح الخطوات التالية ومتابعة أي استفسار.' },
        { question: 'هل يمكن إعادة جدولة المتابعة؟', answer: 'يمكن ترتيب وقت مناسب للتواصل حسب توفر الفريق واحتياج العميل.' },
        { question: 'هل يوجد دعم للاستفسارات المالية؟', answer: 'نعم، يمكن للفريق توضيح تفاصيل السعر أو الباقة أو أي بند يحتاج شرحاً إضافياً.' },
        { question: 'هل يمكن تصعيد المشكلة؟', answer: 'إذا احتاجت الملاحظة متابعة إضافية، يتم توجيهها داخلياً للفريق المناسب.' },
        { question: 'هل يتم التواصل عبر الهاتف أيضاً؟', answer: 'نعم، يمكن التواصل عبر الهاتف أو واتساب أو البريد الإلكتروني حسب تفضيل العميل.' },
        { question: 'هل يمكن زيارة المكتب للدعم؟', answer: 'نعم، يمكن زيارة المكتب بعد تنسيق الموعد أو التوقيت المناسب مع الفريق.' },
        { question: 'هل تقدمون دعماً للعقود طويلة المدى؟', answer: 'نعم، الطلبات طويلة المدى يمكن متابعتها بشكل منظم حسب نوع الخدمة والاتفاق.' }
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
        { question: 'هل يتم توضيح مسؤوليات العميل؟', answer: 'نعم، نوضح المسؤوليات الأساسية والخطوات المطلوبة حتى يكون الاتفاق واضحاً قبل المتابعة.' },
        { question: 'هل يتم التعامل مع بياناتي بسرية؟', answer: 'نحرص على التعامل مع بيانات العميل ومستنداته بعناية واستخدامها فقط لمتابعة الطلب والخدمة.' },
        { question: 'هل يتم شرح شروط الاستبدال؟', answer: 'نعم، يتم توضيح شروط الاستبدال حسب الباقة أو الاتفاق قبل الحجز.' },
        { question: 'هل يتم إصدار إيصال أو تأكيد؟', answer: 'يتم توضيح تفاصيل الخدمة والتأكيدات المناسبة حسب طريقة الحجز والإجراء المتبع.' },
        { question: 'هل يمكن توضيح خطوات التأشيرة إذا كانت مطلوبة؟', answer: 'إذا كان نوع الخدمة يتطلب إجراءات إضافية، يقوم الفريق بشرح الخطوات والمستندات المطلوبة.' },
        { question: 'هل يتم توضيح متطلبات الهوية أو جواز السفر؟', answer: 'نعم، إذا كانت المستندات مطلوبة، يتم شرحها حسب نوع الخدمة والترتيب.' },
        { question: 'هل تقدمون استشارة قانونية؟', answer: 'نقدم إرشاداً متعلقاً بخطوات الخدمة. أي قرارات أو متطلبات رسمية تكون حسب الجهات المختصة.' },
        { question: 'هل يمكن مراجعة العقد قبل التأكيد؟', answer: 'نعم، يمكن طلب توضيح البنود والخطوات قبل أي تأكيد نهائي.' },
        { question: 'هل يتم توضيح سياسة الإلغاء؟', answer: 'نوضح شروط الإلغاء أو التغيير حسب مرحلة الطلب ونوع الخدمة.' },
        { question: 'هل يتم توضيح سياسة الاسترداد؟', answer: 'أي تفاصيل متعلقة بالاسترداد يتم توضيحها حسب نوع الخدمة والاتفاق ومرحلة الطلب.' },
        { question: 'هل العمالة يتم مراجعتها قبل الترشيح؟', answer: 'نراجع التفاصيل المتاحة وفق الإجراءات الداخلية قبل مشاركة الخيارات المناسبة مع العميل.' },
        { question: 'هل يمكن طلب نسخة من تفاصيل الخدمة؟', answer: 'يمكن مشاركة ملخص الخدمة أو التفاصيل الأساسية عبر واتساب أو البريد الإلكتروني بعد المراجعة.' },
        { question: 'هل تتغير الإجراءات حسب الإمارة؟', answer: 'قد تختلف بعض الخطوات حسب الإمارة أو نوع الخدمة، ويتم توضيح ذلك عند مراجعة الطلب.' },
        { question: 'هل يتم إعلامي بأي تغيير في الخطوات؟', answer: 'نعم، إذا ظهرت أي تفاصيل جديدة أو تغيير في التوفر، يقوم الفريق بإبلاغك قبل المتابعة.' },
        { question: 'هل يوجد التزام واضح قبل الدفع؟', answer: 'نوضح الخدمة، السعر، والمتطلبات الأساسية قبل أي إجراء مالي أو تأكيد نهائي.' },
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
        { question: 'Is availability guaranteed immediately?', answer: 'Availability is confirmed only after we review the request. We share suitable options before any booking or commitment.' },
        { question: 'Do you provide live-in maids?', answer: 'Live-in maid requests can be reviewed by emirate, service type and current availability, then suitable options are explained.' },
        { question: 'Do you provide live-out domestic workers?', answer: 'Yes. Live-out or part-time arrangements can be discussed depending on the area, schedule and required service.' },
        { question: 'Can I request a nanny?', answer: 'Yes. Please share the children’s ages, required timings and any important family preferences so we can review suitable options.' },
        { question: 'Do you provide elderly care support?', answer: 'We review caregiver requests based on the care requirement, service hours and level of household assistance needed.' },
        { question: 'Can I request a cook or kitchen helper?', answer: 'Cook and kitchen helper requests can be reviewed based on cuisine preference, family size and availability.' },
        { question: 'Do you offer part-time help?', answer: 'Yes. Part-time help may be available depending on the area, timing and type of household work required.' },
        { question: 'Can you arrange same-day service?', answer: 'Urgent requests are reviewed quickly, but same-day availability depends on area, service type and requested timing.' },
        { question: 'Can I arrange monthly service?', answer: 'Yes. Monthly or long-term arrangements can be discussed according to your household requirement and service type.' },
        { question: 'Do you provide cleaning-only help?', answer: 'Cleaning support can be reviewed as part of home help services depending on the area and required duration.' },
        { question: 'Can you support apartments and villas?', answer: 'Yes. We support apartments and villas. Please share home size, room count and the work required.' },
        { question: 'Can I request newborn care support?', answer: 'You can share the baby’s age and required support, and our team will review the suitable option based on availability.' },
        { question: 'Can I change the service type after submitting a request?', answer: 'Yes. The request can be adjusted before final confirmation if the revised service is suitable and available.' },
        { question: 'Do you serve families only?', answer: 'Our services are focused on household and family requirements. Each request is reviewed based on the provided details.' },
        { question: 'Can I request more than one domestic worker?', answer: 'Requests for multiple workers or multiple service types can be reviewed based on availability and the required arrangement.' },
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
        { question: 'Are your prices fixed?', answer: 'Pricing varies by service type, emirate, service duration and availability. Final pricing is confirmed before booking.' },
        { question: 'What is included in the package?', answer: 'Package details depend on the selected service. We explain what is included and what needs separate confirmation before you proceed.' },
        { question: 'Are government fees included?', answer: 'Any government or official processing fees are clarified separately depending on the service type and case.' },
        { question: 'What is a custom quote?', answer: 'A custom quote is used when the requirement needs a tailored arrangement, such as long-term support, multiple services or extra household follow-up.' },
        { question: 'Why do prices vary between services?', answer: 'Prices vary because of service type, working hours, contract duration, special requirements and availability in the selected emirate or area.' },
        { question: 'Is the price confirmed before booking?', answer: 'Yes. The price and main service steps are clarified before any final confirmation.' },
        { question: 'Are there hidden charges?', answer: 'Expected costs are explained before you proceed. Any additional charges are clarified separately according to the case.' },
        { question: 'Can I receive a written quote?', answer: 'You can request a clear cost and service summary by WhatsApp or email after the details are reviewed.' },
        { question: 'Do live-in and live-out services cost differently?', answer: 'Yes. Pricing can differ by arrangement type, service duration and household responsibilities.' },
        { question: 'How is part-time service priced?', answer: 'Part-time pricing depends on hours or days, service type and area, then final pricing is confirmed.' },
        { question: 'Do you offer monthly packages?', answer: 'Monthly packages or recurring service arrangements can be reviewed based on household needs and availability.' },
        { question: 'Do you offer discounts for long-term service?', answer: 'Long-term requirements can be reviewed for suitable pricing based on service type, duration and details.' },
        { question: 'Is replacement cost included?', answer: 'Replacement terms depend on the selected package or agreement and are clarified before booking.' },
        { question: 'Is advance payment required?', answer: 'Payment steps and timing are explained before confirmation, depending on service type or package.' },
        { question: 'Can I compare multiple packages?', answer: 'Yes. Our team can explain the difference between options so you can choose what suits your household.' },
        { question: 'Does pricing change by emirate?', answer: 'Pricing may vary by emirate or area because of availability and operational arrangements.' },
        { question: 'Can you suggest an option within my budget?', answer: 'You can share your expected budget, and we will explain the closest suitable options based on availability.' },
        { question: 'Are there cancellation charges?', answer: 'Cancellation conditions depend on the request stage and service type and are explained before you proceed.' },
        { question: 'Do packages include follow-up?', answer: 'Some arrangements include follow-up support. The level of support is explained with the service details.' },
        { question: 'How do I know the price is suitable?', answer: 'We explain what the price covers, service duration and required follow-up so you can decide clearly before booking.' }
      ]
    },
    {
      id: 'booking',
      title: 'Booking Process',
      eyebrow: 'Clear steps from first contact',
      icon: 'booking',
      items: [
        { question: 'How do I start a service request?', answer: 'You can submit the request form or contact us on WhatsApp with the service type, emirate, area and preferred timing.' },
        { question: 'What details should I send first?', answer: 'Please share your name, contact number, service type, emirate or area, service duration and any important household notes.' },
        { question: 'How quickly will your team respond?', answer: 'After receiving your request, our team will review the details and contact you to confirm availability and next steps.' },
        { question: 'When is the booking confirmed?', answer: 'Booking is confirmed after the details, availability, service type and price or required steps are reviewed.' },
        { question: 'Can I book through WhatsApp only?', answer: 'Yes. You can start through WhatsApp, and our team will ask for the key details needed to review availability.' },
        { question: 'Can I visit the office to book?', answer: 'Yes. You can visit our Ajman office after confirming a suitable time with the team.' },
        { question: 'Do I need to send documents at the start?', answer: 'It depends on the service type. At first, we need request details, then we explain any required documents.' },
        { question: 'Can I choose the service start time?', answer: 'You can share your preferred start time, and our team will confirm whether it is suitable and available.' },
        { question: 'Can I change the booking date?', answer: 'You can request a date change before final confirmation, subject to availability and scheduling.' },
        { question: 'Can I meet or interview the candidate?', answer: 'Depending on service type and availability, we can explain the review or interview options before confirmation.' },
        { question: 'Do you share candidate details?', answer: 'Relevant details are shared according to the process and service type, while respecting privacy and applicable policies.' },
        { question: 'Can I request service outside Ajman?', answer: 'Yes. We serve all UAE emirates, with availability confirmed by emirate and area.' },
        { question: 'Can I book more than one service in one request?', answer: 'Yes. Mention all required services, and our team will organize the request and explain suitable options.' },
        { question: 'What happens after I submit the form?', answer: 'The team reviews your request, then contacts you to confirm information, availability and the next step.' },
        { question: 'Will I receive booking confirmation?', answer: 'Yes. After final confirmation, the agreed service details and next steps are explained.' },
        { question: 'Can I cancel before confirmation?', answer: 'You can inform the team before final confirmation, and they will guide you according to the request stage.' },
        { question: 'Are the steps explained before payment?', answer: 'Yes. The key details and required steps are explained before any final action.' },
        { question: 'Can I request urgent service?', answer: 'You can send an urgent request, and availability will be reviewed as quickly as possible by area and service type.' },
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
        { question: 'Do you offer replacement support?', answer: 'Replacement support depends on package type, agreement, service period and availability, and is explained before booking.' },
        { question: 'What if the service is not suitable?', answer: 'You can contact the team, and we will review the concern and explain available options based on the case and agreement.' },
        { question: 'Do you follow up after service starts?', answer: 'Yes. The INAYA team follows up to clarify next steps and support you when needed.' },
        { question: 'What is the fastest way to get support?', answer: 'WhatsApp is fastest for sharing details and following up on availability or support. You can also call or email us.' },
        { question: 'Can I raise a complaint?', answer: 'Yes. You can share the concern with the team, and it will be reviewed according to the case.' },
        { question: 'Will I have a specific follow-up contact?', answer: 'Your request will be directed to the right team member depending on service type and details.' },
        { question: 'Can I change the service after it starts?', answer: 'Change requests can be reviewed based on service type, agreement and current availability.' },
        { question: 'Can I extend the service period?', answer: 'Yes. Extension requests can be reviewed and confirmed based on availability and arrangement type.' },
        { question: 'Can I pause the service?', answer: 'This depends on service type and agreement. Please contact the team to explain the situation.' },
        { question: 'Do you monitor service quality?', answer: 'We follow up in a clear and friendly way to understand client feedback and support the service process.' },
        { question: 'Can I contact you after working hours?', answer: 'You can send WhatsApp messages anytime. Replies depend on working hours and team availability.' },
        { question: 'Do you keep previous notes on my request?', answer: 'Notes related to your request are reviewed so follow-up can remain clear and organized.' },
        { question: 'Can I send documents through WhatsApp?', answer: 'Yes. You can send requested details or documents through WhatsApp when the team asks for them.' },
        { question: 'Do you support families after booking?', answer: 'Yes. The team remains available to clarify next steps and answer questions.' },
        { question: 'Can I reschedule a follow-up call?', answer: 'A suitable follow-up time can be arranged depending on team availability and client need.' },
        { question: 'Can you help with pricing questions after booking?', answer: 'Yes. The team can explain package details, pricing items or any point that needs clarification.' },
        { question: 'Can an issue be escalated?', answer: 'If a concern needs additional attention, it is directed internally to the right team.' },
        { question: 'Can support happen by phone?', answer: 'Yes. You can contact us by phone, WhatsApp or email depending on your preference.' },
        { question: 'Can I visit the office for support?', answer: 'Yes. Office visits are possible after coordinating a suitable time with the team.' },
        { question: 'Do you support long-term arrangements?', answer: 'Yes. Long-term requests can be followed up in an organized way based on service type and agreement.' }
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
        { question: 'Do you explain client responsibilities?', answer: 'Yes. We explain the main responsibilities and required steps so the arrangement is clear before moving forward.' },
        { question: 'Is my personal information handled carefully?', answer: 'We handle client details and documents carefully and use them only for request follow-up and service coordination.' },
        { question: 'Are replacement terms explained?', answer: 'Yes. Replacement terms are explained according to the package or agreement before booking.' },
        { question: 'Will I receive a receipt or confirmation?', answer: 'Service details and relevant confirmations are provided according to the booking method and process followed.' },
        { question: 'Can you explain visa steps if required?', answer: 'If the service type requires additional procedures, the team explains the required steps and documents.' },
        { question: 'Do you explain Emirates ID or passport requirements?', answer: 'Yes. If documents are required, they are explained based on service type and arrangement.' },
        { question: 'Do you provide legal advice?', answer: 'We provide guidance related to service steps. Official or legal decisions remain subject to the relevant authorities.' },
        { question: 'Can I review service terms before confirmation?', answer: 'Yes. You can request clarification of terms and steps before final confirmation.' },
        { question: 'Is the cancellation policy explained?', answer: 'Cancellation or change conditions are explained depending on the request stage and service type.' },
        { question: 'Is the refund policy explained?', answer: 'Any refund-related details are clarified according to service type, agreement and request stage.' },
        { question: 'Are workers reviewed before recommendation?', answer: 'Available details are reviewed according to internal procedures before suitable options are shared with the client.' },
        { question: 'Can I request a copy of service details?', answer: 'A service summary or key details can be shared by WhatsApp or email after review.' },
        { question: 'Do procedures change by emirate?', answer: 'Some steps may vary by emirate or service type, and this is explained when the request is reviewed.' },
        { question: 'Will I be informed if steps change?', answer: 'Yes. If new details or availability changes appear, the team informs you before proceeding.' },
        { question: 'Is everything clear before payment?', answer: 'The service, pricing and main requirements are explained before any payment step or final confirmation.' },
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
                    className={`flex items-center justify-center gap-2 rounded-[13px] px-4 py-3 text-sm font-bold transition ${isActive ? 'bg-primary-900 text-white shadow-[0_12px_26px_rgba(7,22,74,0.2)]' : 'text-ink/58 hover:bg-accent-50 hover:text-primary-900'}`}
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

            <div className="space-y-4">
              {activeCategory.items.map((item, index) => (
                <details
                  key={item.question}
                  open={index === 0}
                  className="group rounded-[16px] border border-primary-900/8 bg-white/86 shadow-[0_14px_42px_rgba(7,22,74,0.05)] backdrop-blur-xl transition hover:border-accent-500/28"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 text-start text-lg font-bold leading-snug text-primary-900 sm:px-8 sm:py-6 sm:text-xl">
                    <span>{item.question}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f1eee7] text-accent-700 transition group-open:rotate-180">⌄</span>
                  </summary>
                  <p className="border-t border-primary-900/8 px-6 pb-6 pt-4 text-sm leading-7 text-ink/62 sm:px-8 sm:text-[0.95rem]">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-28 max-w-5xl rounded-[18px] border border-accent-500/18 bg-[radial-gradient(circle_at_70%_15%,rgba(191,164,106,0.16),transparent_22rem),rgba(255,255,255,0.78)] px-6 py-14 text-center shadow-[0_18px_60px_rgba(7,22,74,0.05)] backdrop-blur-xl sm:mt-36 sm:px-10 sm:py-16">
          <h2 className={`${isArabic ? 'font-arabic' : 'font-heading'} text-[2rem] font-bold leading-tight tracking-[-0.02em] text-primary-900 sm:text-[2.45rem]`}>
            {copy.ctaTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-ink/60 sm:text-base">
            {copy.ctaText}
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
