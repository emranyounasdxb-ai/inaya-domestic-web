import type { Lang } from './service-page-copy';

export type ServiceGroupKey =
  | 'core'
  | 'childcare'
  | 'household'
  | 'care'
  | 'support'
  | 'lifestyle';

export type ServiceGroup = {
  key: ServiceGroupKey;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  slugs: string[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    key: 'core',
    title: { en: 'Core Domestic Services', ar: 'الخدمات المنزلية الأساسية' },
    description: {
      en: 'Everyday cleaning, household support and flexible maid arrangements.',
      ar: 'خدمات التنظيف والدعم المنزلي وخيارات الخادمات المرنة.'
    },
    slugs: [
      'live-in-maid',
      'live-out-maid',
      'housemaid',
      'housekeeping',
      'full-time-maid',
      'part-time-maid',
      'monthly-maid-contract',
      'on-demand-domestic-help'
    ]
  },
  {
    key: 'childcare',
    title: { en: 'Childcare Services', ar: 'خدمات رعاية الأطفال' },
    description: {
      en: 'Nannies and carers matched to your children, routines and family expectations.',
      ar: 'مربيات ومقدمات رعاية تتم مطابقتهم مع أطفالك وروتين الأسرة وتوقعاتها.'
    },
    slugs: ['nanny', 'executive-nannies', 'babysitting', 'newborn-care']
  },
  {
    key: 'household',
    title: { en: 'Cooking & Household Management', ar: 'الطبخ وإدارة المنزل' },
    description: {
      en: 'Culinary support and experienced professionals for organized residential operations.',
      ar: 'دعم للطهي ومتخصصون ذوو خبرة لتنظيم عمليات المنزل.'
    },
    slugs: [
      'home-cooking',
      'private-chefs',
      'personal-chef',
      'kitchen-helper',
      'house-managers',
      'bespoke-household-management'
    ]
  },
  {
    key: 'care',
    title: { en: 'Elderly & Care Support', ar: 'دعم كبار السن والرعاية' },
    description: {
      en: 'Respectful non-clinical support focused on comfort, routine and companionship.',
      ar: 'دعم غير طبي محترم يركز على الراحة والروتين والمرافقة.'
    },
    slugs: ['elder-care', 'patient-care', 'companion-care']
  },
  {
    key: 'support',
    title: { en: 'Administrative & Support Services', ar: 'الخدمات الإدارية والدعم' },
    description: {
      en: 'Recruitment, documentation, verification and placement guidance with clear follow-up.',
      ar: 'إرشاد للتوظيف والمستندات والتحقق والتنسيق مع متابعة واضحة.'
    },
    slugs: [
      'recruitment',
      'maid-visa',
      'maid-replacement',
      'sponsorship-transfer',
      'experienced-maid',
      'background-verification',
      'countries-we-source-from'
    ]
  },
  {
    key: 'lifestyle',
    title: { en: 'Add-ons & Lifestyle Services', ar: 'الخدمات الإضافية ونمط الحياة' },
    description: {
      en: 'Specialist household support for moves, events, pets and refined home details.',
      ar: 'دعم منزلي متخصص للانتقال والمناسبات والحيوانات الأليفة وتفاصيل المنزل الراقية.'
    },
    slugs: ['floral-styling', 'relocation-support', 'pet-care-specialists', 'event-staffing']
  }
];

export const serviceImageBySlug: Partial<Record<string, string>> = {
  'live-in-maid': '/images/about/about-hero-domestic-service.webp',
  'live-out-maid': '/images/about/about-hero-domestic-service.webp',
  housemaid: '/images/about/about-hero-domestic-service.webp',
  housekeeping: '/images/about/about-hero-domestic-service.webp',
  'full-time-maid': '/images/about/about-hero-domestic-service.webp',
  'part-time-maid': '/images/about/about-hero-domestic-service.webp',
  'monthly-maid-contract': '/images/about/about-hero-domestic-service.webp',
  'on-demand-domestic-help': '/images/about/about-hero-domestic-service.webp',
  nanny: '/images/home/discipline-executive-nannies.webp',
  'executive-nannies': '/images/home/discipline-executive-nannies.webp',
  babysitting: '/images/home/discipline-executive-nannies.webp',
  'newborn-care': '/images/home/discipline-executive-nannies.webp',
  'home-cooking': '/images/home/discipline-private-chef.webp',
  'private-chefs': '/images/home/discipline-private-chef.webp',
  'personal-chef': '/images/home/discipline-private-chef.webp',
  'kitchen-helper': '/images/home/discipline-private-chef.webp',
  'house-managers': '/images/home/discipline-house-manager.webp',
  'bespoke-household-management': '/images/home/discipline-house-manager.webp',
  'experienced-maid': '/images/about/about-hero-domestic-service.webp',
  'background-verification': '/images/about/about-hero-domestic-service.webp'
};

export const countryProfiles = [
  {
    image: '/images/countries/maid-philippines.webp',
    title: { en: 'Philippines', ar: 'الفلبين' },
    tags: { en: ['English Speaking', 'Childcare', 'Housekeeping'], ar: ['تحدث الإنجليزية', 'رعاية الأطفال', 'تنظيم المنزل'] }
  },
  {
    image: '/images/countries/maid-indonesia.webp',
    title: { en: 'Indonesia', ar: 'إندونيسيا' },
    tags: { en: ['Cooking', 'Cleaning', 'Family Care'], ar: ['الطبخ', 'التنظيف', 'رعاية الأسرة'] }
  },
  {
    image: '/images/countries/maid-nepal.webp',
    title: { en: 'Nepal', ar: 'نيبال' },
    tags: { en: ['Cleaning', 'Laundry', 'Daily Support'], ar: ['التنظيف', 'الغسيل', 'الدعم اليومي'] }
  },
  {
    image: '/images/countries/maid-sri-lanka.webp',
    title: { en: 'Sri Lanka', ar: 'سريلانكا' },
    tags: { en: ['Cooking', 'Housekeeping', 'Laundry'], ar: ['الطبخ', 'تنظيم المنزل', 'الغسيل'] }
  },
  {
    image: '/images/countries/maid-india.webp',
    title: { en: 'India', ar: 'الهند' },
    tags: { en: ['Kitchen Support', 'Cleaning', 'Family Support'], ar: ['دعم المطبخ', 'التنظيف', 'دعم الأسرة'] }
  },
  {
    image: '/images/countries/maid-kenya-uganda.webp',
    title: { en: 'Kenya / Uganda', ar: 'كينيا / أوغندا' },
    tags: { en: ['English Speaking', 'Childcare', 'Elder Care'], ar: ['تحدث الإنجليزية', 'رعاية الأطفال', 'رعاية كبار السن'] }
  }
] as const;

const countryMatchingGroups = new Set<ServiceGroupKey>(['core', 'childcare', 'household', 'care']);

export function getServiceGroup(slug: string) {
  return serviceGroups.find((group) => group.slugs.includes(slug));
}

export function usesCountryMatching(slug: string) {
  const group = getServiceGroup(slug);
  return group ? countryMatchingGroups.has(group.key) : false;
}
