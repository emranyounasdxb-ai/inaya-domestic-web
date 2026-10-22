// Curated public gallery. Source accounting and review evidence are kept privately.
// Captions describe visible subjects without identifying people or promising availability.
export type CompanyGalleryCategory = 'office' | 'home-support' | 'cooking' | 'childcare' | 'general' | 'design';
export type CompanyGalleryPhoto = {
  id: string;
  category: CompanyGalleryCategory;
  src: string;
  thumbnailSrc: string;
  width: number;
  height: number;
  thumbnailWidth: number;
  thumbnailHeight: number;
  caption: { en: string; ar: string };
  alt: { en: string; ar: string };
};

export const companyGalleryGroups: { id: CompanyGalleryCategory; title: { en: string; ar: string } }[] = [
  {
    "id": "office",
    "title": {
      "en": "Ajman office and reception",
      "ar": "مكتب عجمان والاستقبال"
    }
  },
  {
    "id": "home-support",
    "title": {
      "en": "Cleaning and home routines",
      "ar": "التنظيف والمهام المنزلية"
    }
  },
  {
    "id": "cooking",
    "title": {
      "en": "Cooking and kitchen preparation",
      "ar": "الطهي وتجهيز المطبخ"
    }
  },
  {
    "id": "childcare",
    "title": {
      "en": "Children’s routines and activities",
      "ar": "روتين الأطفال وأنشطتهم"
    }
  },
  {
    "id": "general",
    "title": {
      "en": "Household planning and support",
      "ar": "التخطيط والدعم المنزلي"
    }
  },
  {
    "id": "design",
    "title": {
      "en": "INAYA brand and planning designs",
      "ar": "تصاميم علامة عناية والتخطيط"
    }
  }
];

export const companyGalleryPhotos: CompanyGalleryPhoto[] = [
  {
    "id": "office-003",
    "category": "office",
    "src": "/images/company-gallery/inaya-office-003.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-office-003.jpg",
    "width": 1600,
    "height": 1200,
    "thumbnailWidth": 480,
    "thumbnailHeight": 360,
    "caption": {
      "en": "INAYA Ajman customer-service hall and numbered counters",
      "ar": "صالة خدمة العملاء والكاونترات المرقمة في عناية عجمان"
    },
    "alt": {
      "en": "INAYA Ajman customer-service hall and numbered counters",
      "ar": "صالة خدمة العملاء والكاونترات المرقمة في عناية عجمان"
    }
  },
  {
    "id": "office-009",
    "category": "office",
    "src": "/images/company-gallery/inaya-office-009.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-office-009.jpg",
    "width": 1280,
    "height": 720,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "INAYA Ajman storefront and entrance",
      "ar": "واجهة مكتب عناية عجمان ومدخله"
    },
    "alt": {
      "en": "INAYA Ajman storefront and entrance",
      "ar": "واجهة مكتب عناية عجمان ومدخله"
    }
  },
  {
    "id": "office-022",
    "category": "office",
    "src": "/images/company-gallery/inaya-office-022.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-office-022.jpg",
    "width": 1600,
    "height": 1200,
    "thumbnailWidth": 480,
    "thumbnailHeight": 360,
    "caption": {
      "en": "Numbered counters inside the INAYA Ajman office",
      "ar": "الكاونترات المرقمة داخل مكتب عناية عجمان"
    },
    "alt": {
      "en": "Numbered counters inside the INAYA Ajman office",
      "ar": "الكاونترات المرقمة داخل مكتب عناية عجمان"
    }
  },
  {
    "id": "office-028",
    "category": "office",
    "src": "/images/company-gallery/inaya-office-028.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-office-028.jpg",
    "width": 1280,
    "height": 720,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "INAYA Ajman office entrance and company signage",
      "ar": "مدخل مكتب عناية عجمان ولافتة الشركة"
    },
    "alt": {
      "en": "INAYA Ajman office entrance and company signage",
      "ar": "مدخل مكتب عناية عجمان ولافتة الشركة"
    }
  },
  {
    "id": "office-037",
    "category": "office",
    "src": "/images/company-gallery/inaya-office-037.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-office-037.jpg",
    "width": 1600,
    "height": 1200,
    "thumbnailWidth": 480,
    "thumbnailHeight": 360,
    "caption": {
      "en": "INAYA Ajman reception desk and waiting area",
      "ar": "مكتب الاستقبال ومنطقة الانتظار في عناية عجمان"
    },
    "alt": {
      "en": "INAYA Ajman reception desk and waiting area",
      "ar": "مكتب الاستقبال ومنطقة الانتظار في عناية عجمان"
    }
  },
  {
    "id": "office-039",
    "category": "office",
    "src": "/images/company-gallery/inaya-office-039.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-office-039.jpg",
    "width": 1600,
    "height": 1200,
    "thumbnailWidth": 480,
    "thumbnailHeight": 360,
    "caption": {
      "en": "Reception and seating inside INAYA Ajman",
      "ar": "الاستقبال ومقاعد الجلوس داخل عناية عجمان"
    },
    "alt": {
      "en": "Reception and seating inside INAYA Ajman",
      "ar": "الاستقبال ومقاعد الجلوس داخل عناية عجمان"
    }
  },
  {
    "id": "office-040",
    "category": "office",
    "src": "/images/company-gallery/inaya-office-040.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-office-040.jpg",
    "width": 1280,
    "height": 720,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "INAYA Ajman document-service counter",
      "ar": "كاونتر خدمة المستندات في عناية عجمان"
    },
    "alt": {
      "en": "INAYA Ajman document-service counter",
      "ar": "كاونتر خدمة المستندات في عناية عجمان"
    }
  },
  {
    "id": "office-042",
    "category": "office",
    "src": "/images/company-gallery/inaya-office-042.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-office-042.jpg",
    "width": 1600,
    "height": 1200,
    "thumbnailWidth": 480,
    "thumbnailHeight": 360,
    "caption": {
      "en": "Blue waiting benches and counters inside INAYA Ajman",
      "ar": "مقاعد الانتظار الزرقاء والكاونترات داخل عناية عجمان"
    },
    "alt": {
      "en": "Blue waiting benches and counters inside INAYA Ajman",
      "ar": "مقاعد الانتظار الزرقاء والكاونترات داخل عناية عجمان"
    }
  },
  {
    "id": "office-047",
    "category": "office",
    "src": "/images/company-gallery/inaya-office-047.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-office-047.jpg",
    "width": 720,
    "height": 1280,
    "thumbnailWidth": 270,
    "thumbnailHeight": 480,
    "caption": {
      "en": "Printed company display at the INAYA office entrance",
      "ar": "لوحة مطبوعة للشركة عند مدخل مكتب عناية"
    },
    "alt": {
      "en": "Printed company display at the INAYA office entrance",
      "ar": "لوحة مطبوعة للشركة عند مدخل مكتب عناية"
    }
  },
  {
    "id": "office-048",
    "category": "office",
    "src": "/images/company-gallery/inaya-office-048.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-office-048.jpg",
    "width": 1600,
    "height": 1200,
    "thumbnailWidth": 480,
    "thumbnailHeight": 360,
    "caption": {
      "en": "Glass-partitioned rooms inside the INAYA Ajman office",
      "ar": "غرف بفواصل زجاجية داخل مكتب عناية عجمان"
    },
    "alt": {
      "en": "Glass-partitioned rooms inside the INAYA Ajman office",
      "ar": "غرف بفواصل زجاجية داخل مكتب عناية عجمان"
    }
  },
  {
    "id": "office-050",
    "category": "office",
    "src": "/images/company-gallery/inaya-office-050.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-office-050.jpg",
    "width": 960,
    "height": 1280,
    "thumbnailWidth": 360,
    "thumbnailHeight": 480,
    "caption": {
      "en": "Customer seating beside INAYA Ajman service counters",
      "ar": "مقاعد العملاء بجوار كاونترات خدمة عناية عجمان"
    },
    "alt": {
      "en": "Customer seating beside INAYA Ajman service counters",
      "ar": "مقاعد العملاء بجوار كاونترات خدمة عناية عجمان"
    }
  },
  {
    "id": "office-052",
    "category": "office",
    "src": "/images/company-gallery/inaya-office-052.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-office-052.jpg",
    "width": 1600,
    "height": 1200,
    "thumbnailWidth": 480,
    "thumbnailHeight": 360,
    "caption": {
      "en": "INAYA Ajman reception desk and sofa seating",
      "ar": "مكتب الاستقبال والأرائك في عناية عجمان"
    },
    "alt": {
      "en": "INAYA Ajman reception desk and sofa seating",
      "ar": "مكتب الاستقبال والأرائك في عناية عجمان"
    }
  },
  {
    "id": "office-062",
    "category": "office",
    "src": "/images/company-gallery/inaya-office-062.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-office-062.jpg",
    "width": 960,
    "height": 1280,
    "thumbnailWidth": 360,
    "thumbnailHeight": 480,
    "caption": {
      "en": "INAYA Ajman counter number six and customer seating",
      "ar": "الكاونتر السادس ومقاعد العملاء في عناية عجمان"
    },
    "alt": {
      "en": "INAYA Ajman counter number six and customer seating",
      "ar": "الكاونتر السادس ومقاعد العملاء في عناية عجمان"
    }
  },
  {
    "id": "office-067",
    "category": "office",
    "src": "/images/company-gallery/inaya-office-067.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-office-067.jpg",
    "width": 720,
    "height": 1280,
    "thumbnailWidth": 270,
    "thumbnailHeight": 480,
    "caption": {
      "en": "Service information on an INAYA office display panel",
      "ar": "معلومات الخدمات على لوحة في مكتب عناية"
    },
    "alt": {
      "en": "Service information on an INAYA office display panel",
      "ar": "معلومات الخدمات على لوحة في مكتب عناية"
    }
  },
  {
    "id": "office-082",
    "category": "office",
    "src": "/images/company-gallery/inaya-office-082.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-office-082.jpg",
    "width": 960,
    "height": 1280,
    "thumbnailWidth": 360,
    "thumbnailHeight": 480,
    "caption": {
      "en": "INAYA Ajman customer-service hall and blue waiting benches",
      "ar": "صالة خدمة العملاء ومقاعد الانتظار الزرقاء في عناية عجمان"
    },
    "alt": {
      "en": "INAYA Ajman customer-service hall and blue waiting benches",
      "ar": "صالة خدمة العملاء ومقاعد الانتظار الزرقاء في عناية عجمان"
    }
  },
  {
    "id": "office-087",
    "category": "office",
    "src": "/images/company-gallery/inaya-office-087.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-office-087.jpg",
    "width": 1280,
    "height": 720,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "INAYA Ajman storefront signs and entrance displays",
      "ar": "لافتات واجهة عناية عجمان ولوحات المدخل"
    },
    "alt": {
      "en": "INAYA Ajman storefront signs and entrance displays",
      "ar": "لافتات واجهة عناية عجمان ولوحات المدخل"
    }
  },
  {
    "id": "office-102",
    "category": "office",
    "src": "/images/company-gallery/inaya-office-102.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-office-102.jpg",
    "width": 960,
    "height": 1280,
    "thumbnailWidth": 360,
    "thumbnailHeight": 480,
    "caption": {
      "en": "INAYA Ajman waiting benches and service counters",
      "ar": "مقاعد الانتظار وكاونترات الخدمة في عناية عجمان"
    },
    "alt": {
      "en": "INAYA Ajman waiting benches and service counters",
      "ar": "مقاعد الانتظار وكاونترات الخدمة في عناية عجمان"
    }
  },
  {
    "id": "office-107",
    "category": "office",
    "src": "/images/company-gallery/inaya-office-107.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-office-107.jpg",
    "width": 720,
    "height": 1280,
    "thumbnailWidth": 270,
    "thumbnailHeight": 480,
    "caption": {
      "en": "Printed nationality and service display at INAYA Ajman",
      "ar": "لوحة مطبوعة للجنسيات والخدمات في عناية عجمان"
    },
    "alt": {
      "en": "Printed nationality and service display at INAYA Ajman",
      "ar": "لوحة مطبوعة للجنسيات والخدمات في عناية عجمان"
    }
  },
  {
    "id": "office-109",
    "category": "office",
    "src": "/images/company-gallery/inaya-office-109.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-office-109.jpg",
    "width": 1280,
    "height": 720,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "INAYA Ajman numbered service counters and waiting seats",
      "ar": "كاونترات الخدمة المرقمة ومقاعد الانتظار في عناية عجمان"
    },
    "alt": {
      "en": "INAYA Ajman numbered service counters and waiting seats",
      "ar": "كاونترات الخدمة المرقمة ومقاعد الانتظار في عناية عجمان"
    }
  },
  {
    "id": "office-113",
    "category": "office",
    "src": "/images/company-gallery/inaya-office-113.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-office-113.jpg",
    "width": 1280,
    "height": 720,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Visitors at the INAYA Ajman reception desk",
      "ar": "زوار عند مكتب الاستقبال في عناية عجمان"
    },
    "alt": {
      "en": "Visitors at the INAYA Ajman reception desk",
      "ar": "زوار عند مكتب الاستقبال في عناية عجمان"
    }
  },
  {
    "id": "office-122",
    "category": "office",
    "src": "/images/company-gallery/inaya-office-122.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-office-122.jpg",
    "width": 1600,
    "height": 1200,
    "thumbnailWidth": 480,
    "thumbnailHeight": 360,
    "caption": {
      "en": "INAYA Ajman reception, waiting benches and service hall",
      "ar": "الاستقبال ومقاعد الانتظار وصالة الخدمة في عناية عجمان"
    },
    "alt": {
      "en": "INAYA Ajman reception, waiting benches and service hall",
      "ar": "الاستقبال ومقاعد الانتظار وصالة الخدمة في عناية عجمان"
    }
  },
  {
    "id": "office-131",
    "category": "office",
    "src": "/images/company-gallery/inaya-office-131.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-office-131.jpg",
    "width": 1280,
    "height": 720,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "INAYA Ajman blue waiting benches and service counters",
      "ar": "مقاعد انتظار زرقاء وكاونترات خدمة في عناية عجمان"
    },
    "alt": {
      "en": "INAYA Ajman blue waiting benches and service counters",
      "ar": "مقاعد انتظار زرقاء وكاونترات خدمة في عناية عجمان"
    }
  },
  {
    "id": "office-132",
    "category": "office",
    "src": "/images/company-gallery/inaya-office-132.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-office-132.jpg",
    "width": 1600,
    "height": 1200,
    "thumbnailWidth": 480,
    "thumbnailHeight": 360,
    "caption": {
      "en": "INAYA Ajman glass office partitions and numbered counters",
      "ar": "فواصل مكتبية زجاجية وكاونترات مرقمة في عناية عجمان"
    },
    "alt": {
      "en": "INAYA Ajman glass office partitions and numbered counters",
      "ar": "فواصل مكتبية زجاجية وكاونترات مرقمة في عناية عجمان"
    }
  },
  {
    "id": "office-139",
    "category": "office",
    "src": "/images/company-gallery/inaya-office-139.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-office-139.jpg",
    "width": 1280,
    "height": 720,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "INAYA Ajman customer-service hall and numbered desks",
      "ar": "صالة خدمة العملاء والمكاتب المرقمة في عناية عجمان"
    },
    "alt": {
      "en": "INAYA Ajman customer-service hall and numbered desks",
      "ar": "صالة خدمة العملاء والمكاتب المرقمة في عناية عجمان"
    }
  },
  {
    "id": "office-142",
    "category": "office",
    "src": "/images/company-gallery/inaya-office-142.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-office-142.jpg",
    "width": 960,
    "height": 1280,
    "thumbnailWidth": 360,
    "thumbnailHeight": 480,
    "caption": {
      "en": "Customer seating and numbered counters inside INAYA Ajman",
      "ar": "مقاعد العملاء والكاونترات المرقمة داخل عناية عجمان"
    },
    "alt": {
      "en": "Customer seating and numbered counters inside INAYA Ajman",
      "ar": "مقاعد العملاء والكاونترات المرقمة داخل عناية عجمان"
    }
  },
  {
    "id": "office-149",
    "category": "office",
    "src": "/images/company-gallery/inaya-office-149.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-office-149.jpg",
    "width": 1280,
    "height": 720,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "INAYA Ajman office walkway and rows of counters",
      "ar": "ممر المكتب وصفوف الكاونترات في عناية عجمان"
    },
    "alt": {
      "en": "INAYA Ajman office walkway and rows of counters",
      "ar": "ممر المكتب وصفوف الكاونترات في عناية عجمان"
    }
  },
  {
    "id": "office-156",
    "category": "office",
    "src": "/images/company-gallery/inaya-office-156.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-office-156.jpg",
    "width": 960,
    "height": 1280,
    "thumbnailWidth": 360,
    "thumbnailHeight": 480,
    "caption": {
      "en": "Visitors seated beside INAYA Ajman service counters",
      "ar": "زوار جالسون بجوار كاونترات خدمة عناية عجمان"
    },
    "alt": {
      "en": "Visitors seated beside INAYA Ajman service counters",
      "ar": "زوار جالسون بجوار كاونترات خدمة عناية عجمان"
    }
  },
  {
    "id": "office-162",
    "category": "office",
    "src": "/images/company-gallery/inaya-office-162.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-office-162.jpg",
    "width": 960,
    "height": 1280,
    "thumbnailWidth": 360,
    "thumbnailHeight": 480,
    "caption": {
      "en": "INAYA Ajman service counters and waiting visitors",
      "ar": "كاونترات الخدمة وزوار منتظرون في عناية عجمان"
    },
    "alt": {
      "en": "INAYA Ajman service counters and waiting visitors",
      "ar": "كاونترات الخدمة وزوار منتظرون في عناية عجمان"
    }
  },
  {
    "id": "office-173",
    "category": "office",
    "src": "/images/company-gallery/inaya-office-173.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-office-173.jpg",
    "width": 960,
    "height": 1280,
    "thumbnailWidth": 360,
    "thumbnailHeight": 480,
    "caption": {
      "en": "INAYA Ajman waiting benches and numbered counters",
      "ar": "مقاعد الانتظار والكاونترات المرقمة في عناية عجمان"
    },
    "alt": {
      "en": "INAYA Ajman waiting benches and numbered counters",
      "ar": "مقاعد الانتظار والكاونترات المرقمة في عناية عجمان"
    }
  },
  {
    "id": "office-184",
    "category": "office",
    "src": "/images/company-gallery/inaya-office-184.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-office-184.jpg",
    "width": 960,
    "height": 1280,
    "thumbnailWidth": 360,
    "thumbnailHeight": 480,
    "caption": {
      "en": "INAYA Ajman document-service counter and reception area",
      "ar": "كاونتر خدمة المستندات ومنطقة الاستقبال في عناية عجمان"
    },
    "alt": {
      "en": "INAYA Ajman document-service counter and reception area",
      "ar": "كاونتر خدمة المستندات ومنطقة الاستقبال في عناية عجمان"
    }
  },
  {
    "id": "home-support-004",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-004.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-004.jpg",
    "width": 1536,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 320,
    "caption": {
      "en": "Wiping a living-room table",
      "ar": "مسح طاولة في غرفة المعيشة"
    },
    "alt": {
      "en": "Wiping a living-room table",
      "ar": "مسح طاولة في غرفة المعيشة"
    }
  },
  {
    "id": "home-support-008",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-008.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-008.jpg",
    "width": 1024,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 480,
    "caption": {
      "en": "Mopping a kitchen floor",
      "ar": "مسح أرضية المطبخ"
    },
    "alt": {
      "en": "Mopping a kitchen floor",
      "ar": "مسح أرضية المطبخ"
    }
  },
  {
    "id": "home-support-010",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-010.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-010.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Ironing clothes in a laundry area",
      "ar": "كي الملابس في منطقة الغسيل"
    },
    "alt": {
      "en": "Ironing clothes in a laundry area",
      "ar": "كي الملابس في منطقة الغسيل"
    }
  },
  {
    "id": "home-support-012",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-012.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-012.jpg",
    "width": 1482,
    "height": 834,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Mopping a living-room floor",
      "ar": "مسح أرضية غرفة المعيشة"
    },
    "alt": {
      "en": "Mopping a living-room floor",
      "ar": "مسح أرضية غرفة المعيشة"
    }
  },
  {
    "id": "home-support-015",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-015.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-015.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "INAYA uniform with a bucket of cleaning supplies",
      "ar": "زي عناية مع دلو من مستلزمات التنظيف"
    },
    "alt": {
      "en": "INAYA uniform with a bucket of cleaning supplies",
      "ar": "زي عناية مع دلو من مستلزمات التنظيف"
    }
  },
  {
    "id": "home-support-026",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-026.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-026.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Ironing and folded laundry",
      "ar": "كي الملابس وترتيب الغسيل المطوي"
    },
    "alt": {
      "en": "Ironing and folded laundry",
      "ar": "كي الملابس وترتيب الغسيل المطوي"
    }
  },
  {
    "id": "home-support-027",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-027.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-027.jpg",
    "width": 1442,
    "height": 811,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Mopping a bright living-room floor",
      "ar": "مسح أرضية غرفة معيشة مضيئة"
    },
    "alt": {
      "en": "Mopping a bright living-room floor",
      "ar": "مسح أرضية غرفة معيشة مضيئة"
    }
  },
  {
    "id": "home-support-029",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-029.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-029.jpg",
    "width": 1600,
    "height": 911,
    "thumbnailWidth": 480,
    "thumbnailHeight": 273,
    "caption": {
      "en": "Vacuuming a living-room rug",
      "ar": "تنظيف سجادة غرفة المعيشة بالمكنسة الكهربائية"
    },
    "alt": {
      "en": "Vacuuming a living-room rug",
      "ar": "تنظيف سجادة غرفة المعيشة بالمكنسة الكهربائية"
    }
  },
  {
    "id": "home-support-031",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-031.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-031.jpg",
    "width": 1233,
    "height": 693,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Sorting items and clearing a kitchen floor",
      "ar": "فرز الأغراض وترتيب أرضية المطبخ"
    },
    "alt": {
      "en": "Sorting items and clearing a kitchen floor",
      "ar": "فرز الأغراض وترتيب أرضية المطبخ"
    }
  },
  {
    "id": "home-support-038",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-038.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-038.jpg",
    "width": 1600,
    "height": 901,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Window cleaning with household supplies",
      "ar": "تنظيف النوافذ بمستلزمات منزلية"
    },
    "alt": {
      "en": "Window cleaning with household supplies",
      "ar": "تنظيف النوافذ بمستلزمات منزلية"
    }
  },
  {
    "id": "home-support-043",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-043.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-043.jpg",
    "width": 1536,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 320,
    "caption": {
      "en": "Carrying a basket of folded household laundry",
      "ar": "حمل سلة من الغسيل المنزلي المطوي"
    },
    "alt": {
      "en": "Carrying a basket of folded household laundry",
      "ar": "حمل سلة من الغسيل المنزلي المطوي"
    }
  },
  {
    "id": "home-support-044",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-044.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-044.jpg",
    "width": 1440,
    "height": 810,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Wiping a kitchen floor by hand",
      "ar": "مسح أرضية المطبخ يدوياً"
    },
    "alt": {
      "en": "Wiping a kitchen floor by hand",
      "ar": "مسح أرضية المطبخ يدوياً"
    }
  },
  {
    "id": "home-support-046",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-046.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-046.jpg",
    "width": 1550,
    "height": 872,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "INAYA uniform with a floor-cleaning tool",
      "ar": "زي عناية مع أداة لتنظيف الأرضيات"
    },
    "alt": {
      "en": "INAYA uniform with a floor-cleaning tool",
      "ar": "زي عناية مع أداة لتنظيف الأرضيات"
    }
  },
  {
    "id": "home-support-049",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-049.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-049.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Tending flowers and plants in an INAYA uniform",
      "ar": "العناية بالزهور والنباتات بزي عناية"
    },
    "alt": {
      "en": "Tending flowers and plants in an INAYA uniform",
      "ar": "العناية بالزهور والنباتات بزي عناية"
    }
  },
  {
    "id": "home-support-051",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-051.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-051.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Wiping a dining table",
      "ar": "مسح طاولة الطعام"
    },
    "alt": {
      "en": "Wiping a dining table",
      "ar": "مسح طاولة الطعام"
    }
  },
  {
    "id": "home-support-053",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-053.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-053.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "INAYA uniform beside household plants and towels",
      "ar": "زي عناية بجوار نباتات منزلية ومناشف"
    },
    "alt": {
      "en": "INAYA uniform beside household plants and towels",
      "ar": "زي عناية بجوار نباتات منزلية ومناشف"
    }
  },
  {
    "id": "home-support-054",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-054.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-054.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Spraying and wiping a living-room table",
      "ar": "رش ومسح طاولة في غرفة المعيشة"
    },
    "alt": {
      "en": "Spraying and wiping a living-room table",
      "ar": "رش ومسح طاولة في غرفة المعيشة"
    }
  },
  {
    "id": "home-support-055",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-055.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-055.jpg",
    "width": 1567,
    "height": 881,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Laundry supplies beside washing machines",
      "ar": "مستلزمات الغسيل بجوار الغسالات"
    },
    "alt": {
      "en": "Laundry supplies beside washing machines",
      "ar": "مستلزمات الغسيل بجوار الغسالات"
    }
  },
  {
    "id": "home-support-058",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-058.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-058.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Cleaning a bathroom sink and tiled wall",
      "ar": "تنظيف حوض الحمام وجدار مبلط"
    },
    "alt": {
      "en": "Cleaning a bathroom sink and tiled wall",
      "ar": "تنظيف حوض الحمام وجدار مبلط"
    }
  },
  {
    "id": "home-support-059",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-059.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-059.jpg",
    "width": 1363,
    "height": 766,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Mopping a hallway floor",
      "ar": "مسح أرضية الممر"
    },
    "alt": {
      "en": "Mopping a hallway floor",
      "ar": "مسح أرضية الممر"
    }
  },
  {
    "id": "home-support-060",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-060.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-060.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Dusting upper shelves with a long-handled tool",
      "ar": "إزالة الغبار عن الرفوف العلوية بأداة طويلة المقبض"
    },
    "alt": {
      "en": "Dusting upper shelves with a long-handled tool",
      "ar": "إزالة الغبار عن الرفوف العلوية بأداة طويلة المقبض"
    }
  },
  {
    "id": "home-support-064",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-064.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-064.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Cleaning a bathroom wall and shower area",
      "ar": "تنظيف جدار الحمام ومنطقة الاستحمام"
    },
    "alt": {
      "en": "Cleaning a bathroom wall and shower area",
      "ar": "تنظيف جدار الحمام ومنطقة الاستحمام"
    }
  },
  {
    "id": "home-support-066",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-066.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-066.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "INAYA uniform beside household cleaning supplies",
      "ar": "زي عناية بجوار مستلزمات التنظيف المنزلي"
    },
    "alt": {
      "en": "INAYA uniform beside household cleaning supplies",
      "ar": "زي عناية بجوار مستلزمات التنظيف المنزلي"
    }
  },
  {
    "id": "home-support-069",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-069.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-069.jpg",
    "width": 1599,
    "height": 899,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Floor care in a storage and shelving area",
      "ar": "العناية بالأرضية في منطقة التخزين والرفوف"
    },
    "alt": {
      "en": "Floor care in a storage and shelving area",
      "ar": "العناية بالأرضية في منطقة التخزين والرفوف"
    }
  },
  {
    "id": "home-support-070",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-070.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-070.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Washing cookware at a kitchen sink",
      "ar": "غسل أواني الطهي في حوض المطبخ"
    },
    "alt": {
      "en": "Washing cookware at a kitchen sink",
      "ar": "غسل أواني الطهي في حوض المطبخ"
    }
  },
  {
    "id": "home-support-072",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-072.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-072.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "INAYA uniform with cleaning products",
      "ar": "زي عناية مع منتجات التنظيف"
    },
    "alt": {
      "en": "INAYA uniform with cleaning products",
      "ar": "زي عناية مع منتجات التنظيف"
    }
  },
  {
    "id": "home-support-077",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-077.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-077.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "INAYA uniform with a mop and cleaning supplies",
      "ar": "زي عناية مع ممسحة ومستلزمات التنظيف"
    },
    "alt": {
      "en": "INAYA uniform with a mop and cleaning supplies",
      "ar": "زي عناية مع ممسحة ومستلزمات التنظيف"
    }
  },
  {
    "id": "home-support-078",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-078.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-078.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Cleaning equipment and protective gloves",
      "ar": "معدات التنظيف وقفازات واقية"
    },
    "alt": {
      "en": "Cleaning equipment and protective gloves",
      "ar": "معدات التنظيف وقفازات واقية"
    }
  },
  {
    "id": "home-support-079",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-079.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-079.jpg",
    "width": 1597,
    "height": 899,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Vacuuming a living-room floor",
      "ar": "تنظيف أرضية غرفة المعيشة بالمكنسة الكهربائية"
    },
    "alt": {
      "en": "Vacuuming a living-room floor",
      "ar": "تنظيف أرضية غرفة المعيشة بالمكنسة الكهربائية"
    }
  },
  {
    "id": "home-support-086",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-086.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-086.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Folding and sorting household laundry",
      "ar": "طي الغسيل المنزلي وفرزه"
    },
    "alt": {
      "en": "Folding and sorting household laundry",
      "ar": "طي الغسيل المنزلي وفرزه"
    }
  },
  {
    "id": "home-support-093",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-093.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-093.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "INAYA uniform with gloves and a spray bottle",
      "ar": "زي عناية مع قفازات وعبوة رش"
    },
    "alt": {
      "en": "INAYA uniform with gloves and a spray bottle",
      "ar": "زي عناية مع قفازات وعبوة رش"
    }
  },
  {
    "id": "home-support-103",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-103.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-103.jpg",
    "width": 1586,
    "height": 992,
    "thumbnailWidth": 480,
    "thumbnailHeight": 300,
    "caption": {
      "en": "Planning wardrobe and linen organisation with a tablet",
      "ar": "تخطيط تنظيم الخزانة والمفروشات باستخدام جهاز لوحي"
    },
    "alt": {
      "en": "Planning wardrobe and linen organisation with a tablet",
      "ar": "تخطيط تنظيم الخزانة والمفروشات باستخدام جهاز لوحي"
    }
  },
  {
    "id": "home-support-104",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-104.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-104.jpg",
    "width": 1024,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 480,
    "caption": {
      "en": "INAYA uniform with a duster and cleaning bottle",
      "ar": "زي عناية مع منفضة غبار وعبوة تنظيف"
    },
    "alt": {
      "en": "INAYA uniform with a duster and cleaning bottle",
      "ar": "زي عناية مع منفضة غبار وعبوة تنظيف"
    }
  },
  {
    "id": "home-support-105",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-105.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-105.jpg",
    "width": 1502,
    "height": 845,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "INAYA uniform with a cleaning cloth",
      "ar": "زي عناية مع قطعة قماش للتنظيف"
    },
    "alt": {
      "en": "INAYA uniform with a cleaning cloth",
      "ar": "زي عناية مع قطعة قماش للتنظيف"
    }
  },
  {
    "id": "home-support-106",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-106.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-106.jpg",
    "width": 1540,
    "height": 866,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Floor cleaning with a mop and bucket",
      "ar": "تنظيف الأرضية بممسحة ودلو"
    },
    "alt": {
      "en": "Floor cleaning with a mop and bucket",
      "ar": "تنظيف الأرضية بممسحة ودلو"
    }
  },
  {
    "id": "home-support-110",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-110.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-110.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Washing dishes at a kitchen sink",
      "ar": "غسل الأطباق في حوض المطبخ"
    },
    "alt": {
      "en": "Washing dishes at a kitchen sink",
      "ar": "غسل الأطباق في حوض المطبخ"
    }
  },
  {
    "id": "home-support-112",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-112.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-112.jpg",
    "width": 1600,
    "height": 1600,
    "thumbnailWidth": 480,
    "thumbnailHeight": 480,
    "caption": {
      "en": "Cleaning bottles and gloves in an INAYA uniform",
      "ar": "عبوات تنظيف وقفازات مع زي عناية"
    },
    "alt": {
      "en": "Cleaning bottles and gloves in an INAYA uniform",
      "ar": "عبوات تنظيف وقفازات مع زي عناية"
    }
  },
  {
    "id": "home-support-114",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-114.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-114.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Wiping a kitchen counter beside a cleaning bucket",
      "ar": "مسح سطح المطبخ بجوار دلو تنظيف"
    },
    "alt": {
      "en": "Wiping a kitchen counter beside a cleaning bucket",
      "ar": "مسح سطح المطبخ بجوار دلو تنظيف"
    }
  },
  {
    "id": "home-support-115",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-115.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-115.jpg",
    "width": 1600,
    "height": 854,
    "thumbnailWidth": 480,
    "thumbnailHeight": 256,
    "caption": {
      "en": "Arranging cushions and tidying a living room",
      "ar": "ترتيب الوسائد وتنظيم غرفة المعيشة"
    },
    "alt": {
      "en": "Arranging cushions and tidying a living room",
      "ar": "ترتيب الوسائد وتنظيم غرفة المعيشة"
    }
  },
  {
    "id": "home-support-117",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-117.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-117.jpg",
    "width": 1024,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 480,
    "caption": {
      "en": "INAYA uniform with two cleaning spray bottles",
      "ar": "زي عناية مع عبوتي رش للتنظيف"
    },
    "alt": {
      "en": "INAYA uniform with two cleaning spray bottles",
      "ar": "زي عناية مع عبوتي رش للتنظيف"
    }
  },
  {
    "id": "home-support-123",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-123.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-123.jpg",
    "width": 1536,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 320,
    "caption": {
      "en": "Cleaning a table while children play nearby",
      "ar": "تنظيف طاولة بينما يلعب أطفال بالقرب منها"
    },
    "alt": {
      "en": "Cleaning a table while children play nearby",
      "ar": "تنظيف طاولة بينما يلعب أطفال بالقرب منها"
    }
  },
  {
    "id": "home-support-124",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-124.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-124.jpg",
    "width": 1024,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 480,
    "caption": {
      "en": "INAYA uniform beside laundry supplies and a washing machine",
      "ar": "زي عناية بجوار مستلزمات غسيل وغسالة"
    },
    "alt": {
      "en": "INAYA uniform beside laundry supplies and a washing machine",
      "ar": "زي عناية بجوار مستلزمات غسيل وغسالة"
    }
  },
  {
    "id": "home-support-125",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-125.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-125.jpg",
    "width": 1024,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 480,
    "caption": {
      "en": "Wiping a household appliance",
      "ar": "مسح جهاز منزلي"
    },
    "alt": {
      "en": "Wiping a household appliance",
      "ar": "مسح جهاز منزلي"
    }
  },
  {
    "id": "home-support-127",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-127.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-127.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "INAYA uniform and heart-shaped gloved hands",
      "ar": "زي عناية ويدان بقفازات على شكل قلب"
    },
    "alt": {
      "en": "INAYA uniform and heart-shaped gloved hands",
      "ar": "زي عناية ويدان بقفازات على شكل قلب"
    }
  },
  {
    "id": "home-support-128",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-128.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-128.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "INAYA uniform with protective gloves",
      "ar": "زي عناية مع قفازات واقية"
    },
    "alt": {
      "en": "INAYA uniform with protective gloves",
      "ar": "زي عناية مع قفازات واقية"
    }
  },
  {
    "id": "home-support-130",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-130.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-130.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Folding household laundry beside a sofa",
      "ar": "طي الغسيل المنزلي بجوار أريكة"
    },
    "alt": {
      "en": "Folding household laundry beside a sofa",
      "ar": "طي الغسيل المنزلي بجوار أريكة"
    }
  },
  {
    "id": "home-support-133",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-133.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-133.jpg",
    "width": 1248,
    "height": 702,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "INAYA uniform surrounded by household cleaning supplies",
      "ar": "زي عناية تحيط به مستلزمات التنظيف المنزلي"
    },
    "alt": {
      "en": "INAYA uniform surrounded by household cleaning supplies",
      "ar": "زي عناية تحيط به مستلزمات التنظيف المنزلي"
    }
  },
  {
    "id": "home-support-134",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-134.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-134.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Wiping a glass window with cleaning spray",
      "ar": "مسح نافذة زجاجية باستخدام بخاخ تنظيف"
    },
    "alt": {
      "en": "Wiping a glass window with cleaning spray",
      "ar": "مسح نافذة زجاجية باستخدام بخاخ تنظيف"
    }
  },
  {
    "id": "home-support-135",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-135.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-135.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Glass-door cleaning in an INAYA uniform",
      "ar": "تنظيف باب زجاجي بزي عناية"
    },
    "alt": {
      "en": "Glass-door cleaning in an INAYA uniform",
      "ar": "تنظيف باب زجاجي بزي عناية"
    }
  },
  {
    "id": "home-support-137",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-137.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-137.jpg",
    "width": 1024,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 480,
    "caption": {
      "en": "Dusting a doorway with cleaning tools",
      "ar": "إزالة الغبار عن مدخل بأدوات تنظيف"
    },
    "alt": {
      "en": "Dusting a doorway with cleaning tools",
      "ar": "إزالة الغبار عن مدخل بأدوات تنظيف"
    }
  },
  {
    "id": "home-support-140",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-140.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-140.jpg",
    "width": 1024,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 480,
    "caption": {
      "en": "Carrying folded household towels",
      "ar": "حمل مناشف منزلية مطوية"
    },
    "alt": {
      "en": "Carrying folded household towels",
      "ar": "حمل مناشف منزلية مطوية"
    }
  },
  {
    "id": "home-support-144",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-144.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-144.jpg",
    "width": 1433,
    "height": 806,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "INAYA uniform with a bucket of cleaning products",
      "ar": "زي عناية مع دلو من منتجات التنظيف"
    },
    "alt": {
      "en": "INAYA uniform with a bucket of cleaning products",
      "ar": "زي عناية مع دلو من منتجات التنظيف"
    }
  },
  {
    "id": "home-support-145",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-145.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-145.jpg",
    "width": 1024,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 480,
    "caption": {
      "en": "Dusting a home interior in an INAYA uniform",
      "ar": "إزالة الغبار داخل منزل بزي عناية"
    },
    "alt": {
      "en": "Dusting a home interior in an INAYA uniform",
      "ar": "إزالة الغبار داخل منزل بزي عناية"
    }
  },
  {
    "id": "home-support-146",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-146.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-146.jpg",
    "width": 1536,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 320,
    "caption": {
      "en": "Wardrobe and household organisation with a tablet",
      "ar": "تنظيم الخزانة والمنزل باستخدام جهاز لوحي"
    },
    "alt": {
      "en": "Wardrobe and household organisation with a tablet",
      "ar": "تنظيم الخزانة والمنزل باستخدام جهاز لوحي"
    }
  },
  {
    "id": "home-support-147",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-147.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-147.jpg",
    "width": 1024,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 480,
    "caption": {
      "en": "Wiping a kitchen worktop with a spray bottle",
      "ar": "مسح سطح عمل بالمطبخ باستخدام عبوة رش"
    },
    "alt": {
      "en": "Wiping a kitchen worktop with a spray bottle",
      "ar": "مسح سطح عمل بالمطبخ باستخدام عبوة رش"
    }
  },
  {
    "id": "home-support-152",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-152.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-152.jpg",
    "width": 1024,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 480,
    "caption": {
      "en": "INAYA uniform with cleaning spray bottles",
      "ar": "زي عناية مع عبوات رش للتنظيف"
    },
    "alt": {
      "en": "INAYA uniform with cleaning spray bottles",
      "ar": "زي عناية مع عبوات رش للتنظيف"
    }
  },
  {
    "id": "home-support-153",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-153.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-153.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Cleaning a glass partition in an INAYA uniform",
      "ar": "تنظيف فاصل زجاجي بزي عناية"
    },
    "alt": {
      "en": "Cleaning a glass partition in an INAYA uniform",
      "ar": "تنظيف فاصل زجاجي بزي عناية"
    }
  },
  {
    "id": "home-support-154",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-154.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-154.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "INAYA uniform beside a household dining area",
      "ar": "زي عناية بجوار منطقة طعام منزلية"
    },
    "alt": {
      "en": "INAYA uniform beside a household dining area",
      "ar": "زي عناية بجوار منطقة طعام منزلية"
    }
  },
  {
    "id": "home-support-159",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-159.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-159.jpg",
    "width": 1248,
    "height": 832,
    "thumbnailWidth": 480,
    "thumbnailHeight": 320,
    "caption": {
      "en": "INAYA uniform with protective gloves and cleaning supplies",
      "ar": "زي عناية مع قفازات واقية ومستلزمات تنظيف"
    },
    "alt": {
      "en": "INAYA uniform with protective gloves and cleaning supplies",
      "ar": "زي عناية مع قفازات واقية ومستلزمات تنظيف"
    }
  },
  {
    "id": "home-support-163",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-163.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-163.jpg",
    "width": 1380,
    "height": 863,
    "thumbnailWidth": 480,
    "thumbnailHeight": 300,
    "caption": {
      "en": "Arranging sofa cushions in a family living room",
      "ar": "ترتيب وسائد الأريكة في غرفة معيشة أسرية"
    },
    "alt": {
      "en": "Arranging sofa cushions in a family living room",
      "ar": "ترتيب وسائد الأريكة في غرفة معيشة أسرية"
    }
  },
  {
    "id": "home-support-164",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-164.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-164.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Wiping a kitchen worktop in an INAYA uniform",
      "ar": "مسح سطح المطبخ بزي عناية"
    },
    "alt": {
      "en": "Wiping a kitchen worktop in an INAYA uniform",
      "ar": "مسح سطح المطبخ بزي عناية"
    }
  },
  {
    "id": "home-support-165",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-165.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-165.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Folding household clothes",
      "ar": "طي الملابس المنزلية"
    },
    "alt": {
      "en": "Folding household clothes",
      "ar": "طي الملابس المنزلية"
    }
  },
  {
    "id": "home-support-166",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-166.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-166.jpg",
    "width": 1024,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 480,
    "caption": {
      "en": "Spraying and wiping a kitchen counter",
      "ar": "رش ومسح سطح المطبخ"
    },
    "alt": {
      "en": "Spraying and wiping a kitchen counter",
      "ar": "رش ومسح سطح المطبخ"
    }
  },
  {
    "id": "home-support-167",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-167.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-167.jpg",
    "width": 1224,
    "height": 689,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Household cleaning tools arranged beside an INAYA uniform",
      "ar": "أدوات التنظيف المنزلي مرتبة بجوار زي عناية"
    },
    "alt": {
      "en": "Household cleaning tools arranged beside an INAYA uniform",
      "ar": "أدوات التنظيف المنزلي مرتبة بجوار زي عناية"
    }
  },
  {
    "id": "home-support-176",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-176.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-176.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Wiping a shelf with household cleaning spray",
      "ar": "مسح رف باستخدام بخاخ تنظيف منزلي"
    },
    "alt": {
      "en": "Wiping a shelf with household cleaning spray",
      "ar": "مسح رف باستخدام بخاخ تنظيف منزلي"
    }
  },
  {
    "id": "home-support-177",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-177.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-177.jpg",
    "width": 1248,
    "height": 832,
    "thumbnailWidth": 480,
    "thumbnailHeight": 320,
    "caption": {
      "en": "Wiping a kitchen table in an INAYA uniform",
      "ar": "مسح طاولة المطبخ بزي عناية"
    },
    "alt": {
      "en": "Wiping a kitchen table in an INAYA uniform",
      "ar": "مسح طاولة المطبخ بزي عناية"
    }
  },
  {
    "id": "home-support-179",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-179.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-179.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Household cleaning supplies beside an INAYA uniform",
      "ar": "مستلزمات التنظيف المنزلي بجوار زي عناية"
    },
    "alt": {
      "en": "Household cleaning supplies beside an INAYA uniform",
      "ar": "مستلزمات التنظيف المنزلي بجوار زي عناية"
    }
  },
  {
    "id": "home-support-188",
    "category": "home-support",
    "src": "/images/company-gallery/inaya-home-support-188.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-home-support-188.jpg",
    "width": 1024,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 480,
    "caption": {
      "en": "Watering household plants in an INAYA uniform",
      "ar": "سقي النباتات المنزلية بزي عناية"
    },
    "alt": {
      "en": "Watering household plants in an INAYA uniform",
      "ar": "سقي النباتات المنزلية بزي عناية"
    }
  },
  {
    "id": "cooking-013",
    "category": "cooking",
    "src": "/images/company-gallery/inaya-cooking-013.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-cooking-013.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Mixing ingredients at a kitchen counter",
      "ar": "خلط المكونات على سطح المطبخ"
    },
    "alt": {
      "en": "Mixing ingredients at a kitchen counter",
      "ar": "خلط المكونات على سطح المطبخ"
    }
  },
  {
    "id": "cooking-014",
    "category": "cooking",
    "src": "/images/company-gallery/inaya-cooking-014.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-cooking-014.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Preparing a baking tray in a kitchen",
      "ar": "تجهيز صينية للخبز في المطبخ"
    },
    "alt": {
      "en": "Preparing a baking tray in a kitchen",
      "ar": "تجهيز صينية للخبز في المطبخ"
    }
  },
  {
    "id": "cooking-016",
    "category": "cooking",
    "src": "/images/company-gallery/inaya-cooking-016.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-cooking-016.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Measuring ingredients during food preparation",
      "ar": "قياس المكونات أثناء تحضير الطعام"
    },
    "alt": {
      "en": "Measuring ingredients during food preparation",
      "ar": "قياس المكونات أثناء تحضير الطعام"
    }
  },
  {
    "id": "cooking-017",
    "category": "cooking",
    "src": "/images/company-gallery/inaya-cooking-017.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-cooking-017.jpg",
    "width": 1390,
    "height": 782,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "INAYA uniform with kitchen storage jars",
      "ar": "زي عناية مع عبوات تخزين المطبخ"
    },
    "alt": {
      "en": "INAYA uniform with kitchen storage jars",
      "ar": "زي عناية مع عبوات تخزين المطبخ"
    }
  },
  {
    "id": "cooking-018",
    "category": "cooking",
    "src": "/images/company-gallery/inaya-cooking-018.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-cooking-018.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Kitchen worktop and small-appliance care",
      "ar": "العناية بسطح المطبخ والأجهزة الصغيرة"
    },
    "alt": {
      "en": "Kitchen worktop and small-appliance care",
      "ar": "العناية بسطح المطبخ والأجهزة الصغيرة"
    }
  },
  {
    "id": "cooking-019",
    "category": "cooking",
    "src": "/images/company-gallery/inaya-cooking-019.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-cooking-019.jpg",
    "width": 1422,
    "height": 800,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Fruit and vegetable preparation in a kitchen",
      "ar": "تحضير الفواكه والخضراوات في المطبخ"
    },
    "alt": {
      "en": "Fruit and vegetable preparation in a kitchen",
      "ar": "تحضير الفواكه والخضراوات في المطبخ"
    }
  },
  {
    "id": "cooking-024",
    "category": "cooking",
    "src": "/images/company-gallery/inaya-cooking-024.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-cooking-024.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Cake presentation at a kitchen counter",
      "ar": "تقديم كعكة على سطح المطبخ"
    },
    "alt": {
      "en": "Cake presentation at a kitchen counter",
      "ar": "تقديم كعكة على سطح المطبخ"
    }
  },
  {
    "id": "cooking-032",
    "category": "cooking",
    "src": "/images/company-gallery/inaya-cooking-032.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-cooking-032.jpg",
    "width": 1538,
    "height": 865,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Rinsing vegetables at a kitchen sink",
      "ar": "غسل الخضراوات في حوض المطبخ"
    },
    "alt": {
      "en": "Rinsing vegetables at a kitchen sink",
      "ar": "غسل الخضراوات في حوض المطبخ"
    }
  },
  {
    "id": "cooking-033",
    "category": "cooking",
    "src": "/images/company-gallery/inaya-cooking-033.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-cooking-033.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Organising a refrigerator",
      "ar": "تنظيم الثلاجة"
    },
    "alt": {
      "en": "Organising a refrigerator",
      "ar": "تنظيم الثلاجة"
    }
  },
  {
    "id": "cooking-034",
    "category": "cooking",
    "src": "/images/company-gallery/inaya-cooking-034.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-cooking-034.jpg",
    "width": 1480,
    "height": 832,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Vegetables and food preparation at a kitchen worktop",
      "ar": "خضراوات وتحضير الطعام على سطح المطبخ"
    },
    "alt": {
      "en": "Vegetables and food preparation at a kitchen worktop",
      "ar": "خضراوات وتحضير الطعام على سطح المطبخ"
    }
  },
  {
    "id": "cooking-035",
    "category": "cooking",
    "src": "/images/company-gallery/inaya-cooking-035.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-cooking-035.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Preparing a tray of food in a kitchen",
      "ar": "تجهيز صينية طعام في المطبخ"
    },
    "alt": {
      "en": "Preparing a tray of food in a kitchen",
      "ar": "تجهيز صينية طعام في المطبخ"
    }
  },
  {
    "id": "cooking-036",
    "category": "cooking",
    "src": "/images/company-gallery/inaya-cooking-036.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-cooking-036.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Baking preparation in an INAYA uniform",
      "ar": "تجهيز المخبوزات بزي عناية"
    },
    "alt": {
      "en": "Baking preparation in an INAYA uniform",
      "ar": "تجهيز المخبوزات بزي عناية"
    }
  },
  {
    "id": "cooking-045",
    "category": "cooking",
    "src": "/images/company-gallery/inaya-cooking-045.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-cooking-045.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "INAYA uniform with a baking tray",
      "ar": "زي عناية مع صينية للخبز"
    },
    "alt": {
      "en": "INAYA uniform with a baking tray",
      "ar": "زي عناية مع صينية للخبز"
    }
  },
  {
    "id": "cooking-076",
    "category": "cooking",
    "src": "/images/company-gallery/inaya-cooking-076.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-cooking-076.jpg",
    "width": 1554,
    "height": 874,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Mixing ingredients in a stainless-steel kitchen",
      "ar": "خلط المكونات في مطبخ من الفولاذ المقاوم للصدأ"
    },
    "alt": {
      "en": "Mixing ingredients in a stainless-steel kitchen",
      "ar": "خلط المكونات في مطبخ من الفولاذ المقاوم للصدأ"
    }
  },
  {
    "id": "cooking-080",
    "category": "cooking",
    "src": "/images/company-gallery/inaya-cooking-080.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-cooking-080.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Cooking vegetables at a kitchen hob",
      "ar": "طهي الخضراوات على موقد المطبخ"
    },
    "alt": {
      "en": "Cooking vegetables at a kitchen hob",
      "ar": "طهي الخضراوات على موقد المطبخ"
    }
  },
  {
    "id": "cooking-084",
    "category": "cooking",
    "src": "/images/company-gallery/inaya-cooking-084.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-cooking-084.jpg",
    "width": 1480,
    "height": 832,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Arranging flowers and kitchen produce",
      "ar": "تنسيق الزهور وترتيب منتجات المطبخ"
    },
    "alt": {
      "en": "Arranging flowers and kitchen produce",
      "ar": "تنسيق الزهور وترتيب منتجات المطبخ"
    }
  },
  {
    "id": "cooking-098",
    "category": "cooking",
    "src": "/images/company-gallery/inaya-cooking-098.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-cooking-098.jpg",
    "width": 1586,
    "height": 992,
    "thumbnailWidth": 480,
    "thumbnailHeight": 300,
    "caption": {
      "en": "Preparing vegetables at a kitchen counter",
      "ar": "تحضير الخضراوات على سطح المطبخ"
    },
    "alt": {
      "en": "Preparing vegetables at a kitchen counter",
      "ar": "تحضير الخضراوات على سطح المطبخ"
    }
  },
  {
    "id": "cooking-101",
    "category": "cooking",
    "src": "/images/company-gallery/inaya-cooking-101.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-cooking-101.jpg",
    "width": 1536,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 320,
    "caption": {
      "en": "Discussing food preparation at a kitchen hob",
      "ar": "مناقشة تحضير الطعام عند موقد المطبخ"
    },
    "alt": {
      "en": "Discussing food preparation at a kitchen hob",
      "ar": "مناقشة تحضير الطعام عند موقد المطبخ"
    }
  },
  {
    "id": "cooking-116",
    "category": "cooking",
    "src": "/images/company-gallery/inaya-cooking-116.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-cooking-116.jpg",
    "width": 1536,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 320,
    "caption": {
      "en": "Preparing a meal with vegetables in a kitchen",
      "ar": "تحضير وجبة بالخضراوات في المطبخ"
    },
    "alt": {
      "en": "Preparing a meal with vegetables in a kitchen",
      "ar": "تحضير وجبة بالخضراوات في المطبخ"
    }
  },
  {
    "id": "cooking-129",
    "category": "cooking",
    "src": "/images/company-gallery/inaya-cooking-129.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-cooking-129.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Kitchen preparation with jars and a table",
      "ar": "تجهيز المطبخ مع عبوات وطاولة"
    },
    "alt": {
      "en": "Kitchen preparation with jars and a table",
      "ar": "تجهيز المطبخ مع عبوات وطاولة"
    }
  },
  {
    "id": "childcare-023",
    "category": "childcare",
    "src": "/images/company-gallery/inaya-childcare-023.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-childcare-023.jpg",
    "width": 1536,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 320,
    "caption": {
      "en": "Organising toys in a living room",
      "ar": "ترتيب الألعاب في غرفة المعيشة"
    },
    "alt": {
      "en": "Organising toys in a living room",
      "ar": "ترتيب الألعاب في غرفة المعيشة"
    }
  },
  {
    "id": "childcare-030",
    "category": "childcare",
    "src": "/images/company-gallery/inaya-childcare-030.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-childcare-030.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Reading and play area with children",
      "ar": "منطقة قراءة ولعب مع أطفال"
    },
    "alt": {
      "en": "Reading and play area with children",
      "ar": "منطقة قراءة ولعب مع أطفال"
    }
  },
  {
    "id": "childcare-063",
    "category": "childcare",
    "src": "/images/company-gallery/inaya-childcare-063.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-childcare-063.jpg",
    "width": 1536,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 320,
    "caption": {
      "en": "Playing with building blocks in a living room",
      "ar": "اللعب بمكعبات البناء في غرفة المعيشة"
    },
    "alt": {
      "en": "Playing with building blocks in a living room",
      "ar": "اللعب بمكعبات البناء في غرفة المعيشة"
    }
  },
  {
    "id": "childcare-083",
    "category": "childcare",
    "src": "/images/company-gallery/inaya-childcare-083.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-childcare-083.jpg",
    "width": 1536,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 320,
    "caption": {
      "en": "Organising books and learning toys on a table",
      "ar": "تنظيم الكتب والألعاب التعليمية على طاولة"
    },
    "alt": {
      "en": "Organising books and learning toys on a table",
      "ar": "تنظيم الكتب والألعاب التعليمية على طاولة"
    }
  },
  {
    "id": "childcare-090",
    "category": "childcare",
    "src": "/images/company-gallery/inaya-childcare-090.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-childcare-090.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Bedtime reading beside a child",
      "ar": "القراءة بجوار طفل قبل النوم"
    },
    "alt": {
      "en": "Bedtime reading beside a child",
      "ar": "القراءة بجوار طفل قبل النوم"
    }
  },
  {
    "id": "childcare-118",
    "category": "childcare",
    "src": "/images/company-gallery/inaya-childcare-118.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-childcare-118.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Floor play with building blocks and children",
      "ar": "اللعب على الأرض بمكعبات البناء مع أطفال"
    },
    "alt": {
      "en": "Floor play with building blocks and children",
      "ar": "اللعب على الأرض بمكعبات البناء مع أطفال"
    }
  },
  {
    "id": "childcare-151",
    "category": "childcare",
    "src": "/images/company-gallery/inaya-childcare-151.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-childcare-151.jpg",
    "width": 1586,
    "height": 992,
    "thumbnailWidth": 480,
    "thumbnailHeight": 300,
    "caption": {
      "en": "Organising books and toys in a family living room",
      "ar": "تنظيم الكتب والألعاب في غرفة معيشة أسرية"
    },
    "alt": {
      "en": "Organising books and toys in a family living room",
      "ar": "تنظيم الكتب والألعاب في غرفة معيشة أسرية"
    }
  },
  {
    "id": "childcare-170",
    "category": "childcare",
    "src": "/images/company-gallery/inaya-childcare-170.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-childcare-170.jpg",
    "width": 1080,
    "height": 674,
    "thumbnailWidth": 480,
    "thumbnailHeight": 300,
    "caption": {
      "en": "Reading with a child in a living room",
      "ar": "القراءة مع طفل في غرفة المعيشة"
    },
    "alt": {
      "en": "Reading with a child in a living room",
      "ar": "القراءة مع طفل في غرفة المعيشة"
    }
  },
  {
    "id": "general-001",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-001.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-001.jpg",
    "width": 1024,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 480,
    "caption": {
      "en": "Group portrait with INAYA branded uniforms",
      "ar": "صورة جماعية مع أزياء تحمل علامة عناية"
    },
    "alt": {
      "en": "Group portrait with INAYA branded uniforms",
      "ar": "صورة جماعية مع أزياء تحمل علامة عناية"
    }
  },
  {
    "id": "general-002",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-002.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-002.jpg",
    "width": 1536,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 320,
    "caption": {
      "en": "Household-services consultation and document review",
      "ar": "مناقشة الخدمات المنزلية ومراجعة المستندات"
    },
    "alt": {
      "en": "Household-services consultation and document review",
      "ar": "مناقشة الخدمات المنزلية ومراجعة المستندات"
    }
  },
  {
    "id": "general-007",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-007.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-007.jpg",
    "width": 1024,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 480,
    "caption": {
      "en": "INAYA blue uniform portrait",
      "ar": "صورة بالزي الأزرق الذي يحمل علامة عناية"
    },
    "alt": {
      "en": "INAYA blue uniform portrait",
      "ar": "صورة بالزي الأزرق الذي يحمل علامة عناية"
    }
  },
  {
    "id": "general-020",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-020.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-020.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Walking support on an outdoor path",
      "ar": "المساعدة في المشي على ممر خارجي"
    },
    "alt": {
      "en": "Walking support on an outdoor path",
      "ar": "المساعدة في المشي على ممر خارجي"
    }
  },
  {
    "id": "general-021",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-021.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-021.jpg",
    "width": 1536,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 320,
    "caption": {
      "en": "Discussing household-services documents at a table",
      "ar": "مناقشة مستندات الخدمات المنزلية على طاولة"
    },
    "alt": {
      "en": "Discussing household-services documents at a table",
      "ar": "مناقشة مستندات الخدمات المنزلية على طاولة"
    }
  },
  {
    "id": "general-041",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-041.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-041.jpg",
    "width": 1536,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 320,
    "caption": {
      "en": "Household-services discussion with a tablet and documents",
      "ar": "مناقشة الخدمات المنزلية باستخدام جهاز لوحي ومستندات"
    },
    "alt": {
      "en": "Household-services discussion with a tablet and documents",
      "ar": "مناقشة الخدمات المنزلية باستخدام جهاز لوحي ومستندات"
    }
  },
  {
    "id": "general-056",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-056.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-056.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Gavel, desk and documents",
      "ar": "مطرقة ومكتب ومستندات"
    },
    "alt": {
      "en": "Gavel, desk and documents",
      "ar": "مطرقة ومكتب ومستندات"
    }
  },
  {
    "id": "general-057",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-057.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-057.jpg",
    "width": 1422,
    "height": 800,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "INAYA uniform beside a vehicle",
      "ar": "زي عناية بجوار مركبة"
    },
    "alt": {
      "en": "INAYA uniform beside a vehicle",
      "ar": "زي عناية بجوار مركبة"
    }
  },
  {
    "id": "general-061",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-061.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-061.jpg",
    "width": 1536,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 320,
    "caption": {
      "en": "Reviewing household-services paperwork at a desk",
      "ar": "مراجعة أوراق الخدمات المنزلية على مكتب"
    },
    "alt": {
      "en": "Reviewing household-services paperwork at a desk",
      "ar": "مراجعة أوراق الخدمات المنزلية على مكتب"
    }
  },
  {
    "id": "general-065",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-065.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-065.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "INAYA uniform with a tablet",
      "ar": "زي عناية مع جهاز لوحي"
    },
    "alt": {
      "en": "INAYA uniform with a tablet",
      "ar": "زي عناية مع جهاز لوحي"
    }
  },
  {
    "id": "general-068",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-068.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-068.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Meeting and handshake at a desk",
      "ar": "اجتماع ومصافحة على مكتب"
    },
    "alt": {
      "en": "Meeting and handshake at a desk",
      "ar": "اجتماع ومصافحة على مكتب"
    }
  },
  {
    "id": "general-071",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-071.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-071.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "INAYA uniform in a hallway",
      "ar": "زي عناية في ممر داخلي"
    },
    "alt": {
      "en": "INAYA uniform in a hallway",
      "ar": "زي عناية في ممر داخلي"
    }
  },
  {
    "id": "general-075",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-075.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-075.jpg",
    "width": 1586,
    "height": 992,
    "thumbnailWidth": 480,
    "thumbnailHeight": 300,
    "caption": {
      "en": "Beige and brown uniform portrait in a living room",
      "ar": "صورة بزي بيج وبني في غرفة معيشة"
    },
    "alt": {
      "en": "Beige and brown uniform portrait in a living room",
      "ar": "صورة بزي بيج وبني في غرفة معيشة"
    }
  },
  {
    "id": "general-081",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-081.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-081.jpg",
    "width": 1536,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 320,
    "caption": {
      "en": "Checking household-services paperwork together",
      "ar": "مراجعة أوراق الخدمات المنزلية معاً"
    },
    "alt": {
      "en": "Checking household-services paperwork together",
      "ar": "مراجعة أوراق الخدمات المنزلية معاً"
    }
  },
  {
    "id": "general-085",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-085.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-085.jpg",
    "width": 1024,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 480,
    "caption": {
      "en": "INAYA uniform portrait in a home interior",
      "ar": "صورة بزي عناية داخل منزل"
    },
    "alt": {
      "en": "INAYA uniform portrait in a home interior",
      "ar": "صورة بزي عناية داخل منزل"
    }
  },
  {
    "id": "general-088",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-088.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-088.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "INAYA blue uniform portrait against a light background",
      "ar": "صورة بزي عناية الأزرق أمام خلفية فاتحة"
    },
    "alt": {
      "en": "INAYA blue uniform portrait against a light background",
      "ar": "صورة بزي عناية الأزرق أمام خلفية فاتحة"
    }
  },
  {
    "id": "general-091",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-091.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-091.jpg",
    "width": 1583,
    "height": 890,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "INAYA uniform at a vehicle steering wheel",
      "ar": "زي عناية عند مقود مركبة"
    },
    "alt": {
      "en": "INAYA uniform at a vehicle steering wheel",
      "ar": "زي عناية عند مقود مركبة"
    }
  },
  {
    "id": "general-095",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-095.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-095.jpg",
    "width": 1586,
    "height": 992,
    "thumbnailWidth": 480,
    "thumbnailHeight": 300,
    "caption": {
      "en": "Beige and brown uniform portrait beside a sofa",
      "ar": "صورة بزي بيج وبني بجوار أريكة"
    },
    "alt": {
      "en": "Beige and brown uniform portrait beside a sofa",
      "ar": "صورة بزي بيج وبني بجوار أريكة"
    }
  },
  {
    "id": "general-096",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-096.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-096.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "INAYA uniform in an outdoor seating area",
      "ar": "زي عناية في منطقة جلوس خارجية"
    },
    "alt": {
      "en": "INAYA uniform in an outdoor seating area",
      "ar": "زي عناية في منطقة جلوس خارجية"
    }
  },
  {
    "id": "general-097",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-097.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-097.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Handshake during a household-services meeting",
      "ar": "مصافحة خلال اجتماع عن الخدمات المنزلية"
    },
    "alt": {
      "en": "Handshake during a household-services meeting",
      "ar": "مصافحة خلال اجتماع عن الخدمات المنزلية"
    }
  },
  {
    "id": "general-099",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-099.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-099.jpg",
    "width": 1374,
    "height": 773,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "INAYA uniform at a car steering wheel",
      "ar": "زي عناية عند مقود سيارة"
    },
    "alt": {
      "en": "INAYA uniform at a car steering wheel",
      "ar": "زي عناية عند مقود سيارة"
    }
  },
  {
    "id": "general-100",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-100.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-100.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Group portrait against a violet background",
      "ar": "صورة جماعية أمام خلفية بنفسجية"
    },
    "alt": {
      "en": "Group portrait against a violet background",
      "ar": "صورة جماعية أمام خلفية بنفسجية"
    }
  },
  {
    "id": "general-119",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-119.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-119.jpg",
    "width": 1536,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 320,
    "caption": {
      "en": "Household-help arrival and a family greeting at the door",
      "ar": "الوصول إلى المنزل واستقبال الأسرة عند الباب"
    },
    "alt": {
      "en": "Household-help arrival and a family greeting at the door",
      "ar": "الوصول إلى المنزل واستقبال الأسرة عند الباب"
    }
  },
  {
    "id": "general-121",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-121.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-121.jpg",
    "width": 1536,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 320,
    "caption": {
      "en": "Discussing household arrangements and documents together",
      "ar": "مناقشة ترتيبات المنزل والمستندات معاً"
    },
    "alt": {
      "en": "Discussing household arrangements and documents together",
      "ar": "مناقشة ترتيبات المنزل والمستندات معاً"
    }
  },
  {
    "id": "general-126",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-126.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-126.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Handshake at a household-services consultation",
      "ar": "مصافحة خلال استشارة للخدمات المنزلية"
    },
    "alt": {
      "en": "Handshake at a household-services consultation",
      "ar": "مصافحة خلال استشارة للخدمات المنزلية"
    }
  },
  {
    "id": "general-136",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-136.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-136.jpg",
    "width": 1513,
    "height": 851,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Home-support portrait on a terrace with a city view",
      "ar": "صورة للدعم المنزلي على شرفة مطلة على المدينة"
    },
    "alt": {
      "en": "Home-support portrait on a terrace with a city view",
      "ar": "صورة للدعم المنزلي على شرفة مطلة على المدينة"
    }
  },
  {
    "id": "general-138",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-138.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-138.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Household-support portrait by a home entrance",
      "ar": "صورة للدعم المنزلي عند مدخل منزل"
    },
    "alt": {
      "en": "Household-support portrait by a home entrance",
      "ar": "صورة للدعم المنزلي عند مدخل منزل"
    }
  },
  {
    "id": "general-141",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-141.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-141.jpg",
    "width": 1536,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 320,
    "caption": {
      "en": "Discussing a household plan with a folder",
      "ar": "مناقشة خطة منزلية باستخدام ملف"
    },
    "alt": {
      "en": "Discussing a household plan with a folder",
      "ar": "مناقشة خطة منزلية باستخدام ملف"
    }
  },
  {
    "id": "general-143",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-143.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-143.jpg",
    "width": 1536,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 320,
    "caption": {
      "en": "Household-help arrival and family greeting",
      "ar": "الوصول للمساعدة المنزلية واستقبال الأسرة"
    },
    "alt": {
      "en": "Household-help arrival and family greeting",
      "ar": "الوصول للمساعدة المنزلية واستقبال الأسرة"
    }
  },
  {
    "id": "general-150",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-150.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-150.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "INAYA uniform by a glass entrance",
      "ar": "زي عناية بجوار مدخل زجاجي"
    },
    "alt": {
      "en": "INAYA uniform by a glass entrance",
      "ar": "زي عناية بجوار مدخل زجاجي"
    }
  },
  {
    "id": "general-155",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-155.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-155.jpg",
    "width": 1024,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 480,
    "caption": {
      "en": "INAYA uniform seated in a bedroom",
      "ar": "زي عناية أثناء الجلوس في غرفة نوم"
    },
    "alt": {
      "en": "INAYA uniform seated in a bedroom",
      "ar": "زي عناية أثناء الجلوس في غرفة نوم"
    }
  },
  {
    "id": "general-157",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-157.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-157.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "Meeting about household-support arrangements",
      "ar": "اجتماع حول ترتيبات الدعم المنزلي"
    },
    "alt": {
      "en": "Meeting about household-support arrangements",
      "ar": "اجتماع حول ترتيبات الدعم المنزلي"
    }
  },
  {
    "id": "general-158",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-158.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-158.jpg",
    "width": 1600,
    "height": 900,
    "thumbnailWidth": 480,
    "thumbnailHeight": 270,
    "caption": {
      "en": "INAYA uniform with notebook and documents",
      "ar": "زي عناية مع دفتر ومستندات"
    },
    "alt": {
      "en": "INAYA uniform with notebook and documents",
      "ar": "زي عناية مع دفتر ومستندات"
    }
  },
  {
    "id": "general-160",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-160.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-160.jpg",
    "width": 1248,
    "height": 832,
    "thumbnailWidth": 480,
    "thumbnailHeight": 320,
    "caption": {
      "en": "INAYA uniform portrait beside household shelving",
      "ar": "صورة بزي عناية بجوار رفوف منزلية"
    },
    "alt": {
      "en": "INAYA uniform portrait beside household shelving",
      "ar": "صورة بزي عناية بجوار رفوف منزلية"
    }
  },
  {
    "id": "general-161",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-161.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-161.jpg",
    "width": 1536,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 320,
    "caption": {
      "en": "Discussing household-support arrangements in a living room",
      "ar": "مناقشة ترتيبات الدعم المنزلي في غرفة معيشة"
    },
    "alt": {
      "en": "Discussing household-support arrangements in a living room",
      "ar": "مناقشة ترتيبات الدعم المنزلي في غرفة معيشة"
    }
  },
  {
    "id": "general-168",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-168.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-168.jpg",
    "width": 1024,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 480,
    "caption": {
      "en": "INAYA uniform greeting beside a bed",
      "ar": "تحية بزي عناية بجوار سرير"
    },
    "alt": {
      "en": "INAYA uniform greeting beside a bed",
      "ar": "تحية بزي عناية بجوار سرير"
    }
  },
  {
    "id": "general-169",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-169.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-169.jpg",
    "width": 1024,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 480,
    "caption": {
      "en": "INAYA uniform portrait beside flowers",
      "ar": "صورة بزي عناية بجوار زهور"
    },
    "alt": {
      "en": "INAYA uniform portrait beside flowers",
      "ar": "صورة بزي عناية بجوار زهور"
    }
  },
  {
    "id": "general-172",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-172.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-172.jpg",
    "width": 1024,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 480,
    "caption": {
      "en": "INAYA uniform portrait beside a bed",
      "ar": "صورة بزي عناية بجوار سرير"
    },
    "alt": {
      "en": "INAYA uniform portrait beside a bed",
      "ar": "صورة بزي عناية بجوار سرير"
    }
  },
  {
    "id": "general-174",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-174.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-174.jpg",
    "width": 1024,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 480,
    "caption": {
      "en": "INAYA uniform portrait in a bright interior",
      "ar": "صورة بزي عناية داخل مكان مضيء"
    },
    "alt": {
      "en": "INAYA uniform portrait in a bright interior",
      "ar": "صورة بزي عناية داخل مكان مضيء"
    }
  },
  {
    "id": "general-180",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-180.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-180.jpg",
    "width": 1536,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 320,
    "caption": {
      "en": "Serving refreshments in a family living room",
      "ar": "تقديم مشروبات في غرفة معيشة أسرية"
    },
    "alt": {
      "en": "Serving refreshments in a family living room",
      "ar": "تقديم مشروبات في غرفة معيشة أسرية"
    }
  },
  {
    "id": "general-181",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-181.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-181.jpg",
    "width": 1536,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 320,
    "caption": {
      "en": "Discussing household arrangements with a folder and bags",
      "ar": "مناقشة ترتيبات منزلية باستخدام ملف وحقائب"
    },
    "alt": {
      "en": "Discussing household arrangements with a folder and bags",
      "ar": "مناقشة ترتيبات منزلية باستخدام ملف وحقائب"
    }
  },
  {
    "id": "general-182",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-182.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-182.jpg",
    "width": 1024,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 480,
    "caption": {
      "en": "INAYA uniform with a tea service",
      "ar": "زي عناية مع أدوات تقديم الشاي"
    },
    "alt": {
      "en": "INAYA uniform with a tea service",
      "ar": "زي عناية مع أدوات تقديم الشاي"
    }
  },
  {
    "id": "general-183",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-183.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-183.jpg",
    "width": 1536,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 320,
    "caption": {
      "en": "Writing a household task plan at a table",
      "ar": "كتابة خطة مهام منزلية على طاولة"
    },
    "alt": {
      "en": "Writing a household task plan at a table",
      "ar": "كتابة خطة مهام منزلية على طاولة"
    }
  },
  {
    "id": "general-185",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-185.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-185.jpg",
    "width": 1536,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 320,
    "caption": {
      "en": "Planning household tasks with a calendar and documents",
      "ar": "تخطيط المهام المنزلية باستخدام تقويم ومستندات"
    },
    "alt": {
      "en": "Planning household tasks with a calendar and documents",
      "ar": "تخطيط المهام المنزلية باستخدام تقويم ومستندات"
    }
  },
  {
    "id": "general-186",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-186.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-186.jpg",
    "width": 1536,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 320,
    "caption": {
      "en": "Discussing household support beside an older adult",
      "ar": "مناقشة الدعم المنزلي بجوار شخص مسن"
    },
    "alt": {
      "en": "Discussing household support beside an older adult",
      "ar": "مناقشة الدعم المنزلي بجوار شخص مسن"
    }
  },
  {
    "id": "general-187",
    "category": "general",
    "src": "/images/company-gallery/inaya-general-187.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-general-187.jpg",
    "width": 1536,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 320,
    "caption": {
      "en": "INAYA uniform with a notebook and cup",
      "ar": "زي عناية مع دفتر وكوب"
    },
    "alt": {
      "en": "INAYA uniform with a notebook and cup",
      "ar": "زي عناية مع دفتر وكوب"
    }
  },
  {
    "id": "design-005",
    "category": "design",
    "src": "/images/company-gallery/inaya-design-005.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-design-005.jpg",
    "width": 1536,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 320,
    "caption": {
      "en": "Household-help planning with checklist and calendar graphics",
      "ar": "تخطيط الدعم المنزلي مع قوائم مهام وتقويم"
    },
    "alt": {
      "en": "Household-help planning with checklist and calendar graphics",
      "ar": "تخطيط الدعم المنزلي مع قوائم مهام وتقويم"
    }
  },
  {
    "id": "design-025",
    "category": "design",
    "src": "/images/company-gallery/inaya-design-025.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-design-025.jpg",
    "width": 1536,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 320,
    "caption": {
      "en": "Cleaning and family-support scenes in a combined design",
      "ar": "مشاهد التنظيف ودعم الأسرة في تصميم مجمع"
    },
    "alt": {
      "en": "Cleaning and family-support scenes in a combined design",
      "ar": "مشاهد التنظيف ودعم الأسرة في تصميم مجمع"
    }
  },
  {
    "id": "design-074",
    "category": "design",
    "src": "/images/company-gallery/inaya-design-074.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-design-074.jpg",
    "width": 881,
    "height": 881,
    "thumbnailWidth": 480,
    "thumbnailHeight": 480,
    "caption": {
      "en": "INAYA branded blue uniform set",
      "ar": "طقم زي أزرق يحمل علامة عناية"
    },
    "alt": {
      "en": "INAYA branded blue uniform set",
      "ar": "طقم زي أزرق يحمل علامة عناية"
    }
  },
  {
    "id": "design-089",
    "category": "design",
    "src": "/images/company-gallery/inaya-design-089.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-design-089.jpg",
    "width": 1175,
    "height": 435,
    "thumbnailWidth": 480,
    "thumbnailHeight": 178,
    "caption": {
      "en": "INAYA Domestic Workers wordmark with flowers",
      "ar": "اسم عناية للعمالة المنزلية مع زهور"
    },
    "alt": {
      "en": "INAYA Domestic Workers wordmark with flowers",
      "ar": "اسم عناية للعمالة المنزلية مع زهور"
    }
  },
  {
    "id": "design-108",
    "category": "design",
    "src": "/images/company-gallery/inaya-design-108.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-design-108.jpg",
    "width": 1024,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 480,
    "caption": {
      "en": "INAYA leaf emblem and bilingual brand name",
      "ar": "شعار الورقة واسم عناية باللغتين العربية والإنجليزية"
    },
    "alt": {
      "en": "INAYA leaf emblem and bilingual brand name",
      "ar": "شعار الورقة واسم عناية باللغتين العربية والإنجليزية"
    }
  },
  {
    "id": "design-120",
    "category": "design",
    "src": "/images/company-gallery/inaya-design-120.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-design-120.jpg",
    "width": 1536,
    "height": 1024,
    "thumbnailWidth": 480,
    "thumbnailHeight": 320,
    "caption": {
      "en": "Home cleaning with a monthly-contract calendar graphic",
      "ar": "تنظيف المنزل مع رسم تقويم لعقد شهري"
    },
    "alt": {
      "en": "Home cleaning with a monthly-contract calendar graphic",
      "ar": "تنظيف المنزل مع رسم تقويم لعقد شهري"
    }
  },
  {
    "id": "design-175",
    "category": "design",
    "src": "/images/company-gallery/inaya-design-175.jpg",
    "thumbnailSrc": "/images/company-gallery/thumbs/inaya-design-175.jpg",
    "width": 1402,
    "height": 1122,
    "thumbnailWidth": 480,
    "thumbnailHeight": 384,
    "caption": {
      "en": "Household discussion with a monthly-contract calendar graphic",
      "ar": "نقاش منزلي مع رسم تقويم لعقد شهري"
    },
    "alt": {
      "en": "Household discussion with a monthly-contract calendar graphic",
      "ar": "نقاش منزلي مع رسم تقويم لعقد شهري"
    }
  }
];

export const companyGalleryHero = companyGalleryPhotos.find(photo => photo.id === 'office-003')!;
export const companyGalleryOfficePhotos = companyGalleryPhotos.filter(photo => photo.category === 'office');
