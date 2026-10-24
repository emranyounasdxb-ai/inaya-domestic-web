import { siteConfig } from './site-config';
import { localizedUrl } from './seo';
import { organizationId } from './organization';

// Advance these dates only after a substantive edit or an actual factual review.
// They describe this public reference, not the company's founding date.
export const companyInformation = {
  route: 'company-information',
  dataPath: '/company-information.json',
  updated: '2026-10-24',
  reviewed: '2026-10-24',
  services: [
    {
      slug: 'recruitment',
      name: { en: 'Tadbeer and domestic-worker recruitment', ar: 'تدبير واستقدام العمالة المنزلية' },
      description: {
        en: 'Discuss domestic-worker recruitment, individual profiles and household requirements with INAYA’s Ajman Tadbeer centre. Confirm the role, current availability, employment arrangement and written terms.',
        ar: 'ناقش استقدام العمالة المنزلية والملفات الفردية واحتياجات المنزل مع مركز عناية تدبير في عجمان. أكد الدور والتوفر الحالي وترتيب التوظيف والشروط المكتوبة.'
      }
    },
    {
      slug: 'nanny',
      name: { en: 'Nanny and childcare support', ar: 'المربيات ودعم رعاية الأطفال' },
      description: {
        en: 'Explain your child’s age, routine and care needs. Review each candidate’s relevant experience and agree the duties and support needed by your family.',
        ar: 'وضح عمر الطفل وروتينه واحتياجات رعايته. راجع خبرة كل مرشحة ذات الصلة واتفق على المهام والدعم الذي تحتاجه أسرتك.'
      }
    },
    {
      slug: 'housekeeping',
      name: { en: 'Home cleaning and housekeeping', ar: 'تنظيف المنازل وترتيبها' },
      description: {
        en: 'Arrange household cleaning visits around agreed tasks, priorities and visit length. Confirm access, supplies, availability and written scope before booking.',
        ar: 'رتب زيارات تنظيف المنزل وفق المهام والأولويات ومدة الزيارة المتفق عليها. أكد الدخول والمستلزمات والتوفر والنطاق المكتوب قبل الحجز.'
      }
    },
    {
      slug: 'live-in-maid',
      name: { en: 'Live-in household support', ar: 'الدعم المنزلي مع الإقامة' },
      description: {
        en: 'Discuss the household role, daily duties, accommodation and working arrangement before choosing a domestic-worker profile. Review current packages and written terms with the team.',
        ar: 'ناقش الدور المنزلي والمهام اليومية والسكن وترتيب العمل قبل اختيار ملف عاملة منزلية. راجع الباقات الحالية والشروط المكتوبة مع الفريق.'
      }
    },
    {
      slug: 'maid-visa',
      name: { en: 'Domestic-worker visa typing and document processing', ar: 'طباعة معاملات تأشيرة العمالة المنزلية ومعالجة المستندات' },
      description: {
        en: 'Domestic-worker applications, renewal, cancellation, status and contract-related requests, with Emirates ID, medical coordination and insurance processing as applicable. Confirm the requirements, fees and scope for the case; decisions remain with the responsible authority.',
        ar: 'طلبات العمالة المنزلية والتجديد والإلغاء وتعديل الوضع ومعاملات العقد، مع إجراءات الهوية وتنسيق الفحص الطبي والتأمين بحسب الحالة. أكد المتطلبات والرسوم والنطاق المناسب للحالة؛ ويبقى القرار للجهة المختصة.'
      }
    }
  ]
};

export const companyInformationCopy = {
  en: {
    title: 'Official INAYA Company Information',
    description: 'Current INAYA Domestic Workers company details: legal name, Ajman office, telephone, WhatsApp, email, opening hours and domestic-worker services.',
    intro: 'Use this official reference to check INAYA’s business identity, contact channels, office hours and service scope, or to update a business listing accurately.',
    scope: 'INAYA provides domestic-worker services and related application typing and document processing. Discuss your selected service, current availability and written terms with the team.'
  },
  ar: {
    title: 'المعلومات الرسمية لشركة عناية',
    description: 'بيانات عناية للعمالة المنزلية الحالية: الاسم القانوني ومكتب عجمان والهاتف وواتساب والبريد الإلكتروني وساعات العمل وخدمات العمالة المنزلية.',
    intro: 'استخدم هذا المرجع الرسمي للتحقق من هوية عناية ووسائل التواصل وساعات المكتب ونطاق الخدمات، أو لتحديث دليل أعمال بدقة.',
    scope: 'تقدم عناية خدمات العمالة المنزلية والطباعة ومعالجة المستندات المرتبطة بها. ناقش الخدمة المختارة والتوفر الحالي والشروط المكتوبة مع الفريق.'
  }
};

// This endpoint is an alternate representation of the visible bilingual facts.
// It intentionally contains public business information only.
export function companyInformationRecord() {
  return {
    schemaVersion: 1,
    lastUpdated: companyInformation.updated,
    lastReviewed: companyInformation.reviewed,
    sourcePages: {
      en: localizedUrl('en', companyInformation.route),
      ar: localizedUrl('ar', companyInformation.route)
    },
    organization: {
      id: organizationId,
      name: { en: siteConfig.name, ar: siteConfig.nameAr },
      legalName: siteConfig.legalName,
      website: `${siteConfig.url}/`,
      officeTelephone: siteConfig.phone,
      whatsapp: { number: siteConfig.whatsappDisplay, url: `https://wa.me/${siteConfig.whatsapp}` },
      email: siteConfig.email,
      office: {
        count: 1,
        address: { en: siteConfig.address, ar: siteConfig.addressAr },
        city: 'Ajman', countryCode: 'AE',
        directionsUrl: siteConfig.directionsUrl
      },
      openingHours: siteConfig.officeHours,
      serviceScope: { en: companyInformationCopy.en.scope, ar: companyInformationCopy.ar.scope },
      services: companyInformation.services.map(({ slug, name, description }) => ({
        name, description,
        url: { en: localizedUrl('en', `services/${slug}`), ar: localizedUrl('ar', `services/${slug}`) }
      }))
    }
  };
}
