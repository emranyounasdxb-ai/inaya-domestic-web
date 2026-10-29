import { officeCareersMetadata } from './office-careers-metadata';

type NewArticleMetadata = {
  id: string; slug: string; published: string; updated: string;
  en: { title: string; description: string; searchTitle: string; citations: string[] };
  ar: { title: string; description: string; searchTitle: string; citations: string[] };
};

// Compact, reviewed metadata keeps the full new manuscripts out of client code.
export const newArticleMetadata: NewArticleMetadata[] = [
  {
    "id": "A03",
    "slug": "uae-domestic-worker-rights-employer-duties",
    "published": "2026-10-29",
    "updated": "2026-10-29",
    "en": {
      "title": "UAE domestic-worker rights and employer duties: a practical overview",
      "description": "Understand UAE domestic-worker rights and employer duties: contracts, wages, rest, documents, household responsibilities and appropriate official help.",
      "searchTitle": "UAE Domestic-Worker Rights & Employer Duties",
      "citations": [
        "https://www.wam.ae/en/article/hszrg382-new-domestic-worker-law-comes-into-force-tomorrow",
        "https://www.wam.ae/en/article/hszrfohb-uae-ministry-justice-highlights-countrys-progress",
        "https://www.adro.gov.ae/Living-in-Abu-Dhabi/Recruiting-Domestic-Help",
        "https://www.mofa.gov.ae/en/The-Ministry/The-Foreign-Policy/Labor-and-work-rights",
        "https://observatory.mohre.gov.ae/en/uae-labour-market-priorities/social-protection-and-well-being-assurance"
      ]
    },
    "ar": {
      "title": "حقوق العمالة المنزلية وواجبات صاحب العمل في الإمارات: دليل عملي",
      "description": "افهم حقوق العمالة المنزلية وواجبات صاحب العمل في الإمارات: العقود والأجور والراحة والوثائق ومسؤوليات المنزل والمساعدة الرسمية المناسبة.",
      "searchTitle": "حقوق العمالة المنزلية وواجبات صاحب العمل",
      "citations": [
        "https://www.wam.ae/en/article/hszrg382-new-domestic-worker-law-comes-into-force-tomorrow",
        "https://www.wam.ae/en/article/hszrfohb-uae-ministry-justice-highlights-countrys-progress",
        "https://www.adro.gov.ae/Living-in-Abu-Dhabi/Recruiting-Domestic-Help",
        "https://www.mofa.gov.ae/en/The-Ministry/The-Foreign-Policy/Labor-and-work-rights",
        "https://observatory.mohre.gov.ae/en/uae-labour-market-priorities/social-protection-and-well-being-assurance"
      ]
    }
  },
  {
    "id": "A07",
    "slug": "domestic-worker-centre-reviews-checklist",
    "published": "2026-10-29",
    "updated": "2026-10-29",
    "en": {
      "title": "How to evaluate domestic-worker service-centre reviews",
      "description": "Read domestic-worker centre reviews with a dated platform, rating and count worksheet, then check service relevance, replies, identity and written terms.",
      "searchTitle": "Domestic Worker Centre Reviews: What to Check",
      "citations": [
        "https://support.google.com/business/answer/4801187?hl=en",
        "https://support.google.com/business/answer/7400114?hl=en"
      ]
    },
    "ar": {
      "title": "كيف تقرأ تقييمات مراكز خدمات العمالة المنزلية؟",
      "description": "اقرأ تقييمات مراكز العمالة المنزلية بنموذج يسجل المنصة والتاريخ والدرجة والعدد، ثم راجع صلة الخدمة والردود والهوية والشروط المكتوبة.",
      "searchTitle": "تقييمات مراكز العمالة المنزلية: كيف تقرؤها؟",
      "citations": [
        "https://support.google.com/business/answer/4801187?hl=en",
        "https://support.google.com/business/answer/7400114?hl=en"
      ]
    }
  },
  {
    "id": "A08",
    "slug": "domestic-workers-meaning-roles-uae",
    "published": "2026-10-29",
    "updated": "2026-10-29",
    "en": {
      "title": "Domestic workers in the UAE: meaning, roles and household arrangements",
      "description": "What does domestic worker mean in the UAE? Compare household roles, employment, live-in arrangements and the boundary between support and licensed care.",
      "searchTitle": "Domestic Workers UAE: Meaning & Roles",
      "citations": [
        "https://www.wam.ae/en/article/hszrgad5-ministry-human-resources-and-emiratisation-calls",
        "https://mohap.gov.ae/documents/20117/1212145/Infographic%2B-%2BLicense%2Bfor%2BNursing%2Band%2BMedical%2BProfessionals%2B-%2B377KB.pdf/19c1bb78-1c11-9e70-51ef-2f101da7347f?t=1739129085179"
      ]
    },
    "ar": {
      "title": "ما معنى العمالة المنزلية في الإمارات؟ الأدوار والمهام وترتيبات العمل",
      "description": "تعرف إلى معنى العمالة المنزلية في الإمارات: الأدوار وترتيب التوظيف والسكن، والفرق بين الدعم المنزلي والرعاية الصحية المرخصة.",
      "searchTitle": "معنى العمالة المنزلية وأدوارها في الإمارات",
      "citations": [
        "https://www.wam.ae/en/article/hszrgad5-ministry-human-resources-and-emiratisation-calls",
        "https://mohap.gov.ae/documents/20117/1212145/Infographic%2B-%2BLicense%2Bfor%2BNursing%2Band%2BMedical%2BProfessionals%2B-%2B377KB.pdf/19c1bb78-1c11-9e70-51ef-2f101da7347f?t=1739129085179"
      ]
    }
  },
  {
    "id": "A14",
    "slug": "choosing-domestic-worker-centre-across-emirates",
    "published": "2026-10-29",
    "updated": "2026-10-29",
    "en": {
      "title": "Choosing a domestic-worker centre in Ajman or another emirate",
      "description": "Compare domestic-worker centres across emirates using the actual employer, case route, office visits, transport, full cost and household support responsibilities.",
      "searchTitle": "Choosing a Domestic Worker Centre Across Emirates",
      "citations": [
        "https://icp.gov.ae/en/faq/"
      ]
    },
    "ar": {
      "title": "اختيار مركز عمالة منزلية في عجمان أو إمارة أخرى",
      "description": "قارن مراكز العمالة المنزلية بين الإمارات حسب صاحب العمل ومسار الحالة وزيارات المكتب والتنقل والتكلفة الكاملة ومسؤوليات دعم الأسرة.",
      "searchTitle": "اختيار مركز عمالة منزلية بين الإمارات",
      "citations": [
        "https://icp.gov.ae/en/faq/"
      ]
    }
  },
  officeCareersMetadata
];
