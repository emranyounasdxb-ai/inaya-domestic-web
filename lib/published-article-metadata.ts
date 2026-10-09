type PublishedArticleMetadata = {
  slug: string;
  published: string;
  updated: string;
  en: { title: string; description: string; citations: string[] };
  ar: { title: string; description: string; citations: string[] };
};

// Shared guide metadata excludes full manuscripts from unrelated client bundles.
export const publishedArticleMetadata: PublishedArticleMetadata[] = [
  {
    "slug": "choosing-domestic-worker-agency-ajman",
    "published": "2026-10-09",
    "updated": "2026-10-09",
    "en": {
      "title": "How to choose a domestic-worker agency in Ajman",
      "description": "Choose an agency by checking its current recruitment licence, the legal arrangement it offers, the worker's suitability and the written contract. A low monthly…",
      "citations": [
        "https://uaelegislation.gov.ae/en/legislations/1593#item21138",
        "https://u.ae/en/information-and-services/jobs/Workplace-regulations/domestic-helpers",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21135",
        "https://uaelegislation.gov.ae/en/legislations/1620#item23227",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21140",
        "https://uaelegislation.gov.ae/en/legislations/1620#item23228"
      ]
    },
    "ar": {
      "title": "كيف تختار مكتب استقدام عمالة مساعدة في عجمان؟",
      "description": "اختر المكتب بعد التحقق من ترخيصه الحالي، ونوع التعاقد الذي يقدمه، وملاءمة العامل لاحتياجات أسرتك، وشروط العقد المكتوبة. فالسعر الشهري المنخفض أو الملف التعريفي…",
      "citations": [
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21138",
        "https://u.ae/en/information-and-services/jobs/Workplace-regulations/domestic-helpers",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21135",
        "https://uaelegislation.gov.ae/ar/legislations/1620#item23227",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21140",
        "https://uaelegislation.gov.ae/ar/legislations/1620#item23228"
      ]
    }
  },
  {
    "slug": "domestic-worker-hiring-costs-uae",
    "published": "2026-10-09",
    "updated": "2026-10-09",
    "en": {
      "title": "What is the total cost of hiring a domestic worker in Ajman?",
      "description": "The total depends on whether you recruit a worker onto your own employer file or buy services from an agency that employs the worker. Build your budget from…",
      "citations": [
        "https://uaelegislation.gov.ae/en/legislations/1593#item21140",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21141",
        "https://www.mohre.gov.ae/en/services/issuance-of-a-new-work-permit-domestic-workers-2022",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21145",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21148",
        "https://www.mohre.gov.ae/assets/download/22d1c7aa/Ministerial%20Resolution%20No.%20504%20of%202026%20Concerning%20the%20Procedures%20or%20Subscribing%20to%20Health%20Insurance%20for%20Workers%20Employed%20by%20Private%20Sector%20Establishments%20and%20Domestic%20Workers.pdf.aspx#page=1",
        "https://uaelegislation.gov.ae/en/legislations/1620#item23230"
      ]
    },
    "ar": {
      "title": "ما التكلفة الإجمالية لتوظيف عامل مساعد في عجمان؟",
      "description": "تعتمد التكلفة الإجمالية على ما إذا كنت تستقدم عاملاً على ملفك بوصفك صاحب العمل، أو تشتري خدمة من مكتب يوظف العامل. ابنِ ميزانيتك على بنود منفصلة، بدلاً من ضرب…",
      "citations": [
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21140",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21141",
        "https://www.mohre.gov.ae/ar/services/issuance-of-a-new-work-permit-domestic-workers-2022",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21145",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21148",
        "https://www.mohre.gov.ae/assets/download/ae31d28a/%D9%82%D8%B1%D8%A7%D8%B1%20%D9%88%D8%B2%D8%A7%D8%B1%D9%8A%20%D8%B1%D9%82%D9%85%20504%20%D9%84%D8%B3%D9%86%D8%A9%202026%20%D8%A8%D8%B4%D8%A3%D9%86%20%D8%A7%D8%AC%D8%B1%D8%A7%D8%A1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%D9%83%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AA%D8%A3%D9%85%D9%8A%D9%86%20%D8%A7%D9%84%D8%B5%D8%AD%D9%8A%20%D9%84%D9%84%D8%B9%D8%A7%D9%85%D9%84%D9%8A%D9%86%20%D9%81%D9%8A%20%D9%85%D9%86%D8%B4%D8%A2%D8%AA%20%D8%A7%D9%84%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%20%D9%88%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9.pdf.aspx#page=1",
        "https://uaelegislation.gov.ae/ar/legislations/1620#item23230"
      ]
    }
  },
  {
    "slug": "domestic-worker-employment-arrangements-uae",
    "published": "2026-10-09",
    "updated": "2026-10-09",
    "en": {
      "title": "Live-in, live-out or temporary domestic help: which arrangement fits your household?",
      "description": "Choose by considering your household's duties, accommodation and schedule, then confirm the legal employment model. “Live-in” describes residence; “live-out”…",
      "citations": [
        "https://uaelegislation.gov.ae/en/legislations/1593#item21135",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21148",
        "https://www.mohre.gov.ae/assets/download/b361586d/%D9%82%D8%B1%D8%A7%D8%B1%20%D8%A5%D8%AF%D8%A7%D8%B1%D9%8A%20%D8%B1%D9%82%D9%85%205%20%D9%84%D8%B3%D9%86%D8%A9%202024%20%D8%A8%D8%A5%D8%B5%D8%AF%D8%A7%D8%B1%20%D8%AF%D9%84%D9%8A%D9%84%20%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%D9%8A%20%D9%84%D8%AA%D9%86%D9%81%D9%8A%D8%B0%20%D8%A3%D8%AD%D9%83%D8%A7%D9%85%20%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D8%B1%20%D8%A7%D9%84%D9%88%D8%B2%D8%A7%D8%B1%D9%8A%20%D8%B1%D9%82%D9%85%20676%20%D9%84%D8%B3%D9%86%D8%A9%202022%20%20%D8%A8%D8%B4%D8%A3%D9%86%20%D8%AA%D9%86%D8%B8%D9%8A%D9%85%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%20%D9%85%D9%83%D8%A7%D8%AA%D8%A8%20%D8%A7%D8%B3%D8%AA%D9%82%D8%AF%D8%A7%D9%85%20%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9_638944174363309813.pdf.aspx#page=9",
        "https://www.mohre.gov.ae/assets/download/b361586d/%D9%82%D8%B1%D8%A7%D8%B1%20%D8%A5%D8%AF%D8%A7%D8%B1%D9%8A%20%D8%B1%D9%82%D9%85%205%20%D9%84%D8%B3%D9%86%D8%A9%202024%20%D8%A8%D8%A5%D8%B5%D8%AF%D8%A7%D8%B1%20%D8%AF%D9%84%D9%8A%D9%84%20%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%D9%8A%20%D9%84%D8%AA%D9%86%D9%81%D9%8A%D8%B0%20%D8%A3%D8%AD%D9%83%D8%A7%D9%85%20%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D8%B1%20%D8%A7%D9%84%D9%88%D8%B2%D8%A7%D8%B1%D9%8A%20%D8%B1%D9%82%D9%85%20676%20%D9%84%D8%B3%D9%86%D8%A9%202022%20%20%D8%A8%D8%B4%D8%A3%D9%86%20%D8%AA%D9%86%D8%B8%D9%8A%D9%85%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%20%D9%85%D9%83%D8%A7%D8%AA%D8%A8%20%D8%A7%D8%B3%D8%AA%D9%82%D8%AF%D8%A7%D9%85%20%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9_638944174363309813.pdf.aspx#page=11",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21143",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21146",
        "https://uaelegislation.gov.ae/en/legislations/1620#item23235",
        "https://uaelegislation.gov.ae/en/legislations/1620#item23233"
      ]
    },
    "ar": {
      "title": "عمالة مقيمة أم غير مقيمة أم مؤقتة: أي ترتيب يناسب أسرتك؟",
      "description": "اختر وفق مهام أسرتك والسكن والجدول المطلوب، ثم تحقق من نموذج التوظيف القانوني. فعبارة «مقيمة» تصف مكان الإقامة، و«غير مقيمة» تعني الإقامة في مكان آخر؛ ولا تحدد…",
      "citations": [
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21135",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21148",
        "https://www.mohre.gov.ae/assets/download/b361586d/%D9%82%D8%B1%D8%A7%D8%B1%20%D8%A5%D8%AF%D8%A7%D8%B1%D9%8A%20%D8%B1%D9%82%D9%85%205%20%D9%84%D8%B3%D9%86%D8%A9%202024%20%D8%A8%D8%A5%D8%B5%D8%AF%D8%A7%D8%B1%20%D8%AF%D9%84%D9%8A%D9%84%20%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%D9%8A%20%D9%84%D8%AA%D9%86%D9%81%D9%8A%D8%B0%20%D8%A3%D8%AD%D9%83%D8%A7%D9%85%20%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D8%B1%20%D8%A7%D9%84%D9%88%D8%B2%D8%A7%D8%B1%D9%8A%20%D8%B1%D9%82%D9%85%20676%20%D9%84%D8%B3%D9%86%D8%A9%202022%20%20%D8%A8%D8%B4%D8%A3%D9%86%20%D8%AA%D9%86%D8%B8%D9%8A%D9%85%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%20%D9%85%D9%83%D8%A7%D8%AA%D8%A8%20%D8%A7%D8%B3%D8%AA%D9%82%D8%AF%D8%A7%D9%85%20%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9_638944174363309813.pdf.aspx#page=9",
        "https://www.mohre.gov.ae/assets/download/b361586d/%D9%82%D8%B1%D8%A7%D8%B1%20%D8%A5%D8%AF%D8%A7%D8%B1%D9%8A%20%D8%B1%D9%82%D9%85%205%20%D9%84%D8%B3%D9%86%D8%A9%202024%20%D8%A8%D8%A5%D8%B5%D8%AF%D8%A7%D8%B1%20%D8%AF%D9%84%D9%8A%D9%84%20%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%D9%8A%20%D9%84%D8%AA%D9%86%D9%81%D9%8A%D8%B0%20%D8%A3%D8%AD%D9%83%D8%A7%D9%85%20%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D8%B1%20%D8%A7%D9%84%D9%88%D8%B2%D8%A7%D8%B1%D9%8A%20%D8%B1%D9%82%D9%85%20676%20%D9%84%D8%B3%D9%86%D8%A9%202022%20%20%D8%A8%D8%B4%D8%A3%D9%86%20%D8%AA%D9%86%D8%B8%D9%8A%D9%85%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%20%D9%85%D9%83%D8%A7%D8%AA%D8%A8%20%D8%A7%D8%B3%D8%AA%D9%82%D8%AF%D8%A7%D9%85%20%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9_638944174363309813.pdf.aspx#page=11",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21143",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21146",
        "https://uaelegislation.gov.ae/ar/legislations/1620#item23235",
        "https://uaelegislation.gov.ae/ar/legislations/1620#item23233"
      ]
    }
  },
  {
    "slug": "all-inclusive-domestic-worker-packages",
    "published": "2026-10-09",
    "updated": "2026-10-09",
    "en": {
      "title": "What should an all-inclusive domestic-worker package include in writing?",
      "description": "An all-inclusive label is useful only when the written quotation explains which costs and services it includes, the period covered and any exclusions. Do not…",
      "citations": [
        "https://uaelegislation.gov.ae/en/legislations/1593#item21140",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21141",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21145",
        "https://www.mohre.gov.ae/assets/download/22d1c7aa/Ministerial%20Resolution%20No.%20504%20of%202026%20Concerning%20the%20Procedures%20or%20Subscribing%20to%20Health%20Insurance%20for%20Workers%20Employed%20by%20Private%20Sector%20Establishments%20and%20Domestic%20Workers.pdf.aspx#page=1",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21135",
        "https://uaelegislation.gov.ae/en/legislations/1620#item23230"
      ]
    },
    "ar": {
      "title": "ما الذي ينبغي توضيحه كتابةً في باقة عمالة مساعدة شاملة؟",
      "description": "لا تكون عبارة «شاملة» مفيدة إلا عندما يوضح عرض السعر المكتوب التكاليف والخدمات المشمولة، والفترة التي يغطيها، وأي استثناءات. ولا تستنتج من هذه العبارة وحدها مهام…",
      "citations": [
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21140",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21141",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21145",
        "https://www.mohre.gov.ae/assets/download/ae31d28a/%D9%82%D8%B1%D8%A7%D8%B1%20%D9%88%D8%B2%D8%A7%D8%B1%D9%8A%20%D8%B1%D9%82%D9%85%20504%20%D9%84%D8%B3%D9%86%D8%A9%202026%20%D8%A8%D8%B4%D8%A3%D9%86%20%D8%A7%D8%AC%D8%B1%D8%A7%D8%A1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%D9%83%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AA%D8%A3%D9%85%D9%8A%D9%86%20%D8%A7%D9%84%D8%B5%D8%AD%D9%8A%20%D9%84%D9%84%D8%B9%D8%A7%D9%85%D9%84%D9%8A%D9%86%20%D9%81%D9%8A%20%D9%85%D9%86%D8%B4%D8%A2%D8%AA%20%D8%A7%D9%84%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%20%D9%88%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9.pdf.aspx#page=1",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21135",
        "https://uaelegislation.gov.ae/ar/legislations/1620#item23230"
      ]
    }
  },
  {
    "slug": "domestic-worker-sponsorship-responsibilities",
    "published": "2026-10-09",
    "updated": "2026-10-09",
    "en": {
      "title": "Who is responsible for a domestic worker's sponsorship and employment?",
      "description": "Identify the employer named in the approved employment arrangement before deciding who handles permits, wages, accommodation and termination. “The agency…",
      "citations": [
        "https://uaelegislation.gov.ae/en/legislations/1593#item21135",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21148",
        "https://uaelegislation.gov.ae/en/legislations/1620#item23233",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21145",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21146",
        "https://uaelegislation.gov.ae/en/legislations/1620#item23235",
        "https://www.mohre.gov.ae/en/services/issuance-of-a-new-work-permit-domestic-workers-2022",
        "https://www.mohre.gov.ae/assets/download/22d1c7aa/Ministerial%20Resolution%20No.%20504%20of%202026%20Concerning%20the%20Procedures%20or%20Subscribing%20to%20Health%20Insurance%20for%20Workers%20Employed%20by%20Private%20Sector%20Establishments%20and%20Domestic%20Workers.pdf.aspx#page=1",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21157"
      ]
    },
    "ar": {
      "title": "من المسؤول عن كفالة العامل المساعد وتوظيفه؟",
      "description": "حدد صاحب العمل في ترتيب التوظيف المعتمد قبل تحديد المسؤول عن التصاريح والأجور والسكن وإنهاء العلاقة. فعبارة «المكتب رتب الإقامة» لا تثبت بقاء المكتب صاحب العمل،…",
      "citations": [
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21135",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21148",
        "https://uaelegislation.gov.ae/ar/legislations/1620#item23233",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21145",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21146",
        "https://uaelegislation.gov.ae/ar/legislations/1620#item23235",
        "https://www.mohre.gov.ae/ar/services/issuance-of-a-new-work-permit-domestic-workers-2022",
        "https://www.mohre.gov.ae/assets/download/ae31d28a/%D9%82%D8%B1%D8%A7%D8%B1%20%D9%88%D8%B2%D8%A7%D8%B1%D9%8A%20%D8%B1%D9%82%D9%85%20504%20%D9%84%D8%B3%D9%86%D8%A9%202026%20%D8%A8%D8%B4%D8%A3%D9%86%20%D8%A7%D8%AC%D8%B1%D8%A7%D8%A1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%D9%83%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AA%D8%A3%D9%85%D9%8A%D9%86%20%D8%A7%D9%84%D8%B5%D8%AD%D9%8A%20%D9%84%D9%84%D8%B9%D8%A7%D9%85%D9%84%D9%8A%D9%86%20%D9%81%D9%8A%20%D9%85%D9%86%D8%B4%D8%A2%D8%AA%20%D8%A7%D9%84%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%20%D9%88%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9.pdf.aspx#page=1",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21157"
      ]
    }
  },
  {
    "slug": "domestic-worker-employer-eligibility-documents",
    "published": "2026-10-09",
    "updated": "2026-10-09",
    "en": {
      "title": "Who can apply for a domestic-worker permit, and which documents are needed?",
      "description": "Eligibility depends on the applicant category and the permit route. For a domestic worker recruited onto a household employer's file, follow MOHRE's current…",
      "citations": [
        "https://uaelegislation.gov.ae/en/legislations/1620#item23246",
        "https://www.mohre.gov.ae/en/services/issuance-of-a-new-work-permit-domestic-workers-2022",
        "https://mohre.gov.ae/en/services/issuance-of-a-new-employment-contract-domestic-worker-2022",
        "https://www.mohre.gov.ae/assets/download/22d1c7aa/Ministerial%20Resolution%20No.%20504%20of%202026%20Concerning%20the%20Procedures%20or%20Subscribing%20to%20Health%20Insurance%20for%20Workers%20Employed%20by%20Private%20Sector%20Establishments%20and%20Domestic%20Workers.pdf.aspx#page=1",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21135",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21148"
      ]
    },
    "ar": {
      "title": "من يمكنه طلب تصريح عامل مساعد، وما المستندات المطلوبة؟",
      "description": "تختلف الأهلية بحسب فئة مقدم الطلب ومسار التصريح. وعند استقدام عامل على ملف صاحب العمل المنزلي، اتبع متطلبات الوزارة الحالية لإصدار التصريح الجديد لهذا المسار.…",
      "citations": [
        "https://uaelegislation.gov.ae/ar/legislations/1620#item23246",
        "https://www.mohre.gov.ae/ar/services/issuance-of-a-new-work-permit-domestic-workers-2022",
        "https://mohre.gov.ae/en/services/issuance-of-a-new-employment-contract-domestic-worker-2022",
        "https://www.mohre.gov.ae/assets/download/ae31d28a/%D9%82%D8%B1%D8%A7%D8%B1%20%D9%88%D8%B2%D8%A7%D8%B1%D9%8A%20%D8%B1%D9%82%D9%85%20504%20%D9%84%D8%B3%D9%86%D8%A9%202026%20%D8%A8%D8%B4%D8%A3%D9%86%20%D8%A7%D8%AC%D8%B1%D8%A7%D8%A1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%D9%83%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AA%D8%A3%D9%85%D9%8A%D9%86%20%D8%A7%D9%84%D8%B5%D8%AD%D9%8A%20%D9%84%D9%84%D8%B9%D8%A7%D9%85%D9%84%D9%8A%D9%86%20%D9%81%D9%8A%20%D9%85%D9%86%D8%B4%D8%A2%D8%AA%20%D8%A7%D9%84%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%20%D9%88%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9.pdf.aspx#page=1",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21135",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21148"
      ]
    }
  },
  {
    "slug": "domestic-worker-hiring-stages-timelines",
    "published": "2026-10-09",
    "updated": "2026-10-09",
    "en": {
      "title": "What happens during domestic-worker hiring, and how long does it take?",
      "description": "Hiring has several stages: define the job, identify the employment model, select a suitable worker, sign the relevant agreements and complete the required…",
      "citations": [
        "https://uaelegislation.gov.ae/en/legislations/1593#item21140",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21135",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21148",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21139",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21138",
        "https://uaelegislation.gov.ae/en/legislations/1620#item23228",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21141",
        "https://uaelegislation.gov.ae/en/legislations/1620#item23233",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21146",
        "https://www.mohre.gov.ae/en/services/issuance-of-a-new-work-permit-domestic-workers-2022",
        "https://mohre.gov.ae/en/services/issuance-of-a-new-employment-contract-domestic-worker-2022"
      ]
    },
    "ar": {
      "title": "ما مراحل توظيف العامل المساعد، وكم تستغرق؟",
      "description": "يمر التوظيف بمراحل تشمل تحديد العمل، واختيار نموذج التوظيف، وانتقاء عامل مناسب، وتوقيع الاتفاقات ذات الصلة، واستكمال الإجراءات الرسمية المطلوبة. وتعتمد المدة…",
      "citations": [
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21140",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21135",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21148",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21139",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21138",
        "https://uaelegislation.gov.ae/ar/legislations/1620#item23228",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21141",
        "https://uaelegislation.gov.ae/ar/legislations/1620#item23233",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21146",
        "https://www.mohre.gov.ae/ar/services/issuance-of-a-new-work-permit-domestic-workers-2022",
        "https://mohre.gov.ae/en/services/issuance-of-a-new-employment-contract-domestic-worker-2022"
      ]
    }
  },
  {
    "slug": "domestic-worker-skills-language-assessment",
    "published": "2026-10-09",
    "updated": "2026-10-09",
    "en": {
      "title": "How to select a domestic worker's skills and language for your household",
      "description": "Select against the tasks and communication your home needs, then check the individual candidate's evidence. Nationality, a job label or a brief profile does not…",
      "citations": [
        "https://uaelegislation.gov.ae/en/legislations/1593#item21140",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21139",
        "https://uaelegislation.gov.ae/en/legislations/1620#item23228",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21138",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21165",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21145",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21146"
      ]
    },
    "ar": {
      "title": "كيف تختار مهارات العامل المساعد ولغته بما يناسب أسرتك؟",
      "description": "اختر وفق المهام واحتياجات التواصل في منزلك، ثم تحقق من الأدلة الخاصة بالمرشح نفسه. فلا تثبت الجنسية أو المسمى الوظيفي أو المعلومات المختصرة في الملف القدرة على…",
      "citations": [
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21140",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21139",
        "https://uaelegislation.gov.ae/ar/legislations/1620#item23228",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21138",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21165",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21145",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21146"
      ]
    }
  },
  {
    "slug": "choosing-nanny-newborn-support",
    "published": "2026-10-09",
    "updated": "2026-10-09",
    "en": {
      "title": "How to assess a nanny for a baby or newborn",
      "description": "Assess the individual person's relevant experience, communication and evidenced training, then agree the duties and supervision your family needs. A…",
      "citations": [
        "https://uaelegislation.gov.ae/en/legislations/1593#item21140",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21141",
        "https://uaelegislation.gov.ae/en/legislations/1620#item23228",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21138",
        "https://mohap.gov.ae/documents/20117/1212145/26_License%2Bfor%2BNursing%2Band%2BMedical%2BProfessionals.pdf/996f30e8-c687-871f-014c-079f5567892e?t=1739154916843#page=1",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21143",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21145",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21146"
      ]
    },
    "ar": {
      "title": "كيف تقيّم ملاءمة مربية لرعاية رضيع أو مولود جديد؟",
      "description": "قيّم خبرة الشخص ذات الصلة، وقدرته على التواصل، والتدريب الذي يمكن إثباته، ثم اتفق على المهام والإشراف اللذين تحتاجهما أسرتك. فلا يثبت المسمى المنزلي أو خبرة عامة…",
      "citations": [
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21140",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21141",
        "https://uaelegislation.gov.ae/ar/legislations/1620#item23228",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21138",
        "https://mohap.gov.ae/documents/20117/1212145/26_License%2Bfor%2BNursing%2Band%2BMedical%2BProfessionals.pdf/996f30e8-c687-871f-014c-079f5567892e?t=1739154916843#page=1",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21143",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21145",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21146"
      ]
    }
  },
  {
    "slug": "caregiver-versus-licensed-nurse",
    "published": "2026-10-09",
    "updated": "2026-10-09",
    "en": {
      "title": "Caregiver or licensed nurse: which kind of home support do you need?",
      "description": "Choose according to the tasks, not the job label. Help with companionship and everyday household routines is different from professional clinical care. A…",
      "citations": [
        "https://uaelegislation.gov.ae/en/legislations/1593#item21138",
        "https://mohap.gov.ae/documents/20117/1212145/26_License%2Bfor%2BNursing%2Band%2BMedical%2BProfessionals.pdf/996f30e8-c687-871f-014c-079f5567892e?t=1739154916843#page=1",
        "https://uaelegislation.gov.ae/en/legislations/1620#item23228",
        "https://www.mohre.gov.ae/assets/download/d85c5019/%D9%82%D8%B1%D8%A7%D8%B1%20%D9%88%D8%B2%D8%A7%D8%B1%D9%8A%20%D8%B1%D9%82%D9%85%20675%20%D9%84%D8%B3%D9%86%D8%A9%202022%20%D8%A8%D8%B4%D8%A3%D9%86%20%D8%B3%D8%AF%D8%A7%D8%AF%20%D8%A3%D8%AC%D9%88%D8%B1%20%D8%A8%D8%B9%D8%B6%20%D9%85%D9%87%D9%86%20%D8%B9%D9%85%D8%A7%D9%84%20%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A9%20%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9%20%D8%B9%D8%A8%D8%B1%20%D9%86%D8%B8%D8%A7%D9%85%20%D8%AD%D9%85%D8%A7%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A3%D8%AC%D9%88%D8%B1_638944177858469656.pdf.aspx#page=2",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21146",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21143",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21145"
      ]
    },
    "ar": {
      "title": "مقدم رعاية أم ممرض مرخص: ما نوع الدعم المنزلي الذي تحتاجه؟",
      "description": "اختر بحسب المهام، لا المسمى الوظيفي. فالمساعدة في الصحبة والروتين المنزلي اليومي تختلف عن الرعاية الطبية المهنية. ولا يثبت تصريح العامل المساعد أو تأشيرة إقامته…",
      "citations": [
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21138",
        "https://mohap.gov.ae/documents/20117/1212145/26_License%2Bfor%2BNursing%2Band%2BMedical%2BProfessionals.pdf/996f30e8-c687-871f-014c-079f5567892e?t=1739154916843#page=1",
        "https://uaelegislation.gov.ae/ar/legislations/1620#item23228",
        "https://www.mohre.gov.ae/assets/download/d85c5019/%D9%82%D8%B1%D8%A7%D8%B1%20%D9%88%D8%B2%D8%A7%D8%B1%D9%8A%20%D8%B1%D9%82%D9%85%20675%20%D9%84%D8%B3%D9%86%D8%A9%202022%20%D8%A8%D8%B4%D8%A3%D9%86%20%D8%B3%D8%AF%D8%A7%D8%AF%20%D8%A3%D8%AC%D9%88%D8%B1%20%D8%A8%D8%B9%D8%B6%20%D9%85%D9%87%D9%86%20%D8%B9%D9%85%D8%A7%D9%84%20%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A9%20%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9%20%D8%B9%D8%A8%D8%B1%20%D9%86%D8%B8%D8%A7%D9%85%20%D8%AD%D9%85%D8%A7%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A3%D8%AC%D9%88%D8%B1_638944177858469656.pdf.aspx#page=2",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21146",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21143",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21145"
      ]
    }
  },
  {
    "slug": "agreeing-domestic-worker-household-duties",
    "published": "2026-10-09",
    "updated": "2026-10-09",
    "en": {
      "title": "Can one domestic worker handle cleaning, cooking and childcare?",
      "description": "One person may be able to perform more than one agreed household task, but the scope must match their skills, lawful occupation and a realistic schedule. Do not…",
      "citations": [
        "https://uaelegislation.gov.ae/en/legislations/1593#item21141",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21145",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21146",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21140",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21138",
        "https://mohap.gov.ae/documents/20117/1212145/26_License%2Bfor%2BNursing%2Band%2BMedical%2BProfessionals.pdf/996f30e8-c687-871f-014c-079f5567892e?t=1739154916843#page=1",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21143",
        "https://uaelegislation.gov.ae/en/legislations/1620#item23236",
        "https://www.mohre.gov.ae/assets/download/b361586d/%D9%82%D8%B1%D8%A7%D8%B1%20%D8%A5%D8%AF%D8%A7%D8%B1%D9%8A%20%D8%B1%D9%82%D9%85%205%20%D9%84%D8%B3%D9%86%D8%A9%202024%20%D8%A8%D8%A5%D8%B5%D8%AF%D8%A7%D8%B1%20%D8%AF%D9%84%D9%8A%D9%84%20%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%D9%8A%20%D9%84%D8%AA%D9%86%D9%81%D9%8A%D8%B0%20%D8%A3%D8%AD%D9%83%D8%A7%D9%85%20%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D8%B1%20%D8%A7%D9%84%D9%88%D8%B2%D8%A7%D8%B1%D9%8A%20%D8%B1%D9%82%D9%85%20676%20%D9%84%D8%B3%D9%86%D8%A9%202022%20%20%D8%A8%D8%B4%D8%A3%D9%86%20%D8%AA%D9%86%D8%B8%D9%8A%D9%85%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%20%D9%85%D9%83%D8%A7%D8%AA%D8%A8%20%D8%A7%D8%B3%D8%AA%D9%82%D8%AF%D8%A7%D9%85%20%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9_638944174363309813.pdf.aspx#page=11"
      ]
    },
    "ar": {
      "title": "هل يستطيع عامل مساعد واحد الجمع بين التنظيف والطهي ورعاية الأطفال؟",
      "description": "قد يستطيع شخص واحد تنفيذ أكثر من مهمة منزلية متفق عليها، لكن يجب أن يتناسب نطاق العمل مع مهاراته ومهنته القانونية وجدول واقعي. ولا تفترض أن مسمى «عامل مساعد»…",
      "citations": [
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21141",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21145",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21146",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21140",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21138",
        "https://mohap.gov.ae/documents/20117/1212145/26_License%2Bfor%2BNursing%2Band%2BMedical%2BProfessionals.pdf/996f30e8-c687-871f-014c-079f5567892e?t=1739154916843#page=1",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21143",
        "https://uaelegislation.gov.ae/ar/legislations/1620#item23236",
        "https://www.mohre.gov.ae/assets/download/b361586d/%D9%82%D8%B1%D8%A7%D8%B1%20%D8%A5%D8%AF%D8%A7%D8%B1%D9%8A%20%D8%B1%D9%82%D9%85%205%20%D9%84%D8%B3%D9%86%D8%A9%202024%20%D8%A8%D8%A5%D8%B5%D8%AF%D8%A7%D8%B1%20%D8%AF%D9%84%D9%8A%D9%84%20%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%D9%8A%20%D9%84%D8%AA%D9%86%D9%81%D9%8A%D8%B0%20%D8%A3%D8%AD%D9%83%D8%A7%D9%85%20%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D8%B1%20%D8%A7%D9%84%D9%88%D8%B2%D8%A7%D8%B1%D9%8A%20%D8%B1%D9%82%D9%85%20676%20%D9%84%D8%B3%D9%86%D8%A9%202022%20%20%D8%A8%D8%B4%D8%A3%D9%86%20%D8%AA%D9%86%D8%B8%D9%8A%D9%85%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%20%D9%85%D9%83%D8%A7%D8%AA%D8%A8%20%D8%A7%D8%B3%D8%AA%D9%82%D8%AF%D8%A7%D9%85%20%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9_638944174363309813.pdf.aspx#page=11"
      ]
    }
  },
  {
    "slug": "domestic-worker-verification-checks",
    "published": "2026-10-09",
    "updated": "2026-10-09",
    "en": {
      "title": "What should “verified domestic worker” mean?",
      "description": "“Verified” should identify a specific check, its date, who performed it and what the evidence establishes. The word alone does not mean that every background,…",
      "citations": [
        "https://uaelegislation.gov.ae/en/legislations/1620#item23228",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21139",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21146",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21138",
        "https://mohap.gov.ae/documents/20117/1212145/26_License%2Bfor%2BNursing%2Band%2BMedical%2BProfessionals.pdf/996f30e8-c687-871f-014c-079f5567892e?t=1739154916843#page=1"
      ]
    },
    "ar": {
      "title": "ماذا ينبغي أن تعني عبارة «عامل مساعد تم التحقق منه»؟",
      "description": "ينبغي أن تحدد عبارة «تم التحقق» فحصاً معيناً وتاريخه والجهة التي أجرته وما يثبته الدليل. ولا تعني العبارة وحدها اكتمال جميع فحوص الخلفية والطب والخبرة واللغة…",
      "citations": [
        "https://uaelegislation.gov.ae/ar/legislations/1620#item23228",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21139",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21146",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21138",
        "https://mohap.gov.ae/documents/20117/1212145/26_License%2Bfor%2BNursing%2Band%2BMedical%2BProfessionals.pdf/996f30e8-c687-871f-014c-079f5567892e?t=1739154916843#page=1"
      ]
    }
  },
  {
    "slug": "domestic-worker-interview-trial-probation",
    "published": "2026-10-09",
    "updated": "2026-10-09",
    "en": {
      "title": "Interview, trial and probation: what is the difference when hiring a domestic worker?",
      "description": "An interview assesses suitability before an agreement. A commercial trial is a separately defined service or arrangement whose terms must be confirmed. Statutory…",
      "citations": [
        "https://uaelegislation.gov.ae/en/legislations/1593#item21142",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21140",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21139",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21146",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21141",
        "https://uaelegislation.gov.ae/en/legislations/1620#item23230",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21143",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21145",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21150"
      ]
    },
    "ar": {
      "title": "المقابلة والتجربة التجارية وفترة التجربة القانونية: ما الفرق عند توظيف عامل مساعد؟",
      "description": "تُستخدم المقابلة لتقييم الملاءمة قبل الاتفاق. والتجربة التجارية خدمة أو ترتيب مستقل يجب تأكيد شروطه. أما فترة التجربة القانونية فهي جزء من علاقة العمل، ولا يجوز…",
      "citations": [
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21142",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21140",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21139",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21146",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21141",
        "https://uaelegislation.gov.ae/ar/legislations/1620#item23230",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21143",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21145",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21150"
      ]
    }
  },
  {
    "slug": "domestic-worker-replacement-eligibility",
    "published": "2026-10-09",
    "updated": "2026-10-09",
    "en": {
      "title": "When can you request a replacement domestic worker?",
      "description": "A replacement request should be assessed against the employment model, the agreed recruitment conditions and the reason for the request. There is no basis to…",
      "citations": [
        "https://uaelegislation.gov.ae/en/legislations/1593#item21140",
        "https://www.mohre.gov.ae/assets/download/b361586d/%D9%82%D8%B1%D8%A7%D8%B1%20%D8%A5%D8%AF%D8%A7%D8%B1%D9%8A%20%D8%B1%D9%82%D9%85%205%20%D9%84%D8%B3%D9%86%D8%A9%202024%20%D8%A8%D8%A5%D8%B5%D8%AF%D8%A7%D8%B1%20%D8%AF%D9%84%D9%8A%D9%84%20%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%D9%8A%20%D9%84%D8%AA%D9%86%D9%81%D9%8A%D8%B0%20%D8%A3%D8%AD%D9%83%D8%A7%D9%85%20%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D8%B1%20%D8%A7%D9%84%D9%88%D8%B2%D8%A7%D8%B1%D9%8A%20%D8%B1%D9%82%D9%85%20676%20%D9%84%D8%B3%D9%86%D8%A9%202022%20%20%D8%A8%D8%B4%D8%A3%D9%86%20%D8%AA%D9%86%D8%B8%D9%8A%D9%85%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%20%D9%85%D9%83%D8%A7%D8%AA%D8%A8%20%D8%A7%D8%B3%D8%AA%D9%82%D8%AF%D8%A7%D9%85%20%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9_638944174363309813.pdf.aspx#page=9",
        "https://uaelegislation.gov.ae/en/legislations/1620#item23230",
        "https://uaelegislation.gov.ae/en/legislations/1620#item23234",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21145",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21157"
      ]
    },
    "ar": {
      "title": "متى يمكنك طلب استبدال العامل المساعد؟",
      "description": "يُقيّم طلب الاستبدال بحسب نموذج التوظيف وشروط الاستقدام المتفق عليها وسبب الطلب. ولا يوجد ما يبرر افتراض أن كل باقة توفر استبدالات غير محدودة أو بديلاً فورياً أو…",
      "citations": [
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21140",
        "https://www.mohre.gov.ae/assets/download/b361586d/%D9%82%D8%B1%D8%A7%D8%B1%20%D8%A5%D8%AF%D8%A7%D8%B1%D9%8A%20%D8%B1%D9%82%D9%85%205%20%D9%84%D8%B3%D9%86%D8%A9%202024%20%D8%A8%D8%A5%D8%B5%D8%AF%D8%A7%D8%B1%20%D8%AF%D9%84%D9%8A%D9%84%20%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%D9%8A%20%D9%84%D8%AA%D9%86%D9%81%D9%8A%D8%B0%20%D8%A3%D8%AD%D9%83%D8%A7%D9%85%20%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D8%B1%20%D8%A7%D9%84%D9%88%D8%B2%D8%A7%D8%B1%D9%8A%20%D8%B1%D9%82%D9%85%20676%20%D9%84%D8%B3%D9%86%D8%A9%202022%20%20%D8%A8%D8%B4%D8%A3%D9%86%20%D8%AA%D9%86%D8%B8%D9%8A%D9%85%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%20%D9%85%D9%83%D8%A7%D8%AA%D8%A8%20%D8%A7%D8%B3%D8%AA%D9%82%D8%AF%D8%A7%D9%85%20%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9_638944174363309813.pdf.aspx#page=9",
        "https://uaelegislation.gov.ae/ar/legislations/1620#item23230",
        "https://uaelegislation.gov.ae/ar/legislations/1620#item23234",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21145",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21157"
      ]
    }
  },
  {
    "slug": "domestic-worker-recruitment-refund-rules",
    "published": "2026-10-09",
    "updated": "2026-10-09",
    "en": {
      "title": "When are domestic-worker recruitment fees refundable?",
      "description": "Recruitment-fee refunds depend on the recruitment model, a qualifying event and the applicable calculation. They are not an automatic refund of wages, every…",
      "citations": [
        "https://uaelegislation.gov.ae/en/legislations/1620#item23230",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21135",
        "https://uaelegislation.gov.ae/en/legislations/1620#item23234",
        "https://www.mohre.gov.ae/assets/download/b361586d/%D9%82%D8%B1%D8%A7%D8%B1%20%D8%A5%D8%AF%D8%A7%D8%B1%D9%8A%20%D8%B1%D9%82%D9%85%205%20%D9%84%D8%B3%D9%86%D8%A9%202024%20%D8%A8%D8%A5%D8%B5%D8%AF%D8%A7%D8%B1%20%D8%AF%D9%84%D9%8A%D9%84%20%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%D9%8A%20%D9%84%D8%AA%D9%86%D9%81%D9%8A%D8%B0%20%D8%A3%D8%AD%D9%83%D8%A7%D9%85%20%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D8%B1%20%D8%A7%D9%84%D9%88%D8%B2%D8%A7%D8%B1%D9%8A%20%D8%B1%D9%82%D9%85%20676%20%D9%84%D8%B3%D9%86%D8%A9%202022%20%20%D8%A8%D8%B4%D8%A3%D9%86%20%D8%AA%D9%86%D8%B8%D9%8A%D9%85%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%20%D9%85%D9%83%D8%A7%D8%AA%D8%A8%20%D8%A7%D8%B3%D8%AA%D9%82%D8%AF%D8%A7%D9%85%20%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9_638944174363309813.pdf.aspx#page=11",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item32836"
      ]
    },
    "ar": {
      "title": "متى تُرد رسوم استقدام العامل المساعد؟",
      "description": "يرتبط رد رسوم الاستقدام بنموذج الاستقدام وواقعة تستوفي الشروط وطريقة الحساب المطبقة. وليس رداً تلقائياً للأجور أو جميع الرسوم الحكومية أو اشتراك شهري عادي. حدد…",
      "citations": [
        "https://uaelegislation.gov.ae/ar/legislations/1620#item23230",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21135",
        "https://uaelegislation.gov.ae/ar/legislations/1620#item23234",
        "https://www.mohre.gov.ae/assets/download/b361586d/%D9%82%D8%B1%D8%A7%D8%B1%20%D8%A5%D8%AF%D8%A7%D8%B1%D9%8A%20%D8%B1%D9%82%D9%85%205%20%D9%84%D8%B3%D9%86%D8%A9%202024%20%D8%A8%D8%A5%D8%B5%D8%AF%D8%A7%D8%B1%20%D8%AF%D9%84%D9%8A%D9%84%20%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%D9%8A%20%D9%84%D8%AA%D9%86%D9%81%D9%8A%D8%B0%20%D8%A3%D8%AD%D9%83%D8%A7%D9%85%20%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D8%B1%20%D8%A7%D9%84%D9%88%D8%B2%D8%A7%D8%B1%D9%8A%20%D8%B1%D9%82%D9%85%20676%20%D9%84%D8%B3%D9%86%D8%A9%202022%20%20%D8%A8%D8%B4%D8%A3%D9%86%20%D8%AA%D9%86%D8%B8%D9%8A%D9%85%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%20%D9%85%D9%83%D8%A7%D8%AA%D8%A8%20%D8%A7%D8%B3%D8%AA%D9%82%D8%AF%D8%A7%D9%85%20%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9_638944174363309813.pdf.aspx#page=11",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item32836"
      ]
    }
  },
  {
    "slug": "domestic-worker-contracts-renewal",
    "published": "2026-10-09",
    "updated": "2026-10-09",
    "en": {
      "title": "Which domestic-worker contracts should you read, and how does renewal work?",
      "description": "Read the agreement for each relationship: the agency's recruitment or service agreement, the worker's employment contract and, for temporary employment, the…",
      "citations": [
        "https://uaelegislation.gov.ae/en/legislations/1593#item21141",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21140",
        "https://uaelegislation.gov.ae/en/legislations/1620#item23233",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21165",
        "https://mohre.gov.ae/en/services/renewal-of-a-domestic-workers-employment-contract-2022",
        "https://www.mohre.gov.ae/assets/download/22d1c7aa/Ministerial%20Resolution%20No.%20504%20of%202026%20Concerning%20the%20Procedures%20or%20Subscribing%20to%20Health%20Insurance%20for%20Workers%20Employed%20by%20Private%20Sector%20Establishments%20and%20Domestic%20Workers.pdf.aspx#page=1",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21155",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21156",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21157"
      ]
    },
    "ar": {
      "title": "ما عقود العمالة المساعدة التي يجب قراءتها، وكيف يجري التجديد؟",
      "description": "اقرأ الاتفاق الخاص بكل علاقة: عقد الاستقدام أو الخدمة مع المكتب، وعقد عمل العامل، واتفاق المكتب مع المستفيد في التشغيل المؤقت. ولا تحل الفاتورة الشهرية محل هذه…",
      "citations": [
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21141",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21140",
        "https://uaelegislation.gov.ae/ar/legislations/1620#item23233",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21165",
        "https://mohre.gov.ae/en/services/renewal-of-a-domestic-workers-employment-contract-2022",
        "https://www.mohre.gov.ae/assets/download/ae31d28a/%D9%82%D8%B1%D8%A7%D8%B1%20%D9%88%D8%B2%D8%A7%D8%B1%D9%8A%20%D8%B1%D9%82%D9%85%20504%20%D9%84%D8%B3%D9%86%D8%A9%202026%20%D8%A8%D8%B4%D8%A3%D9%86%20%D8%A7%D8%AC%D8%B1%D8%A7%D8%A1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%D9%83%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AA%D8%A3%D9%85%D9%8A%D9%86%20%D8%A7%D9%84%D8%B5%D8%AD%D9%8A%20%D9%84%D9%84%D8%B9%D8%A7%D9%85%D9%84%D9%8A%D9%86%20%D9%81%D9%8A%20%D9%85%D9%86%D8%B4%D8%A2%D8%AA%20%D8%A7%D9%84%D9%82%D8%B7%D8%A7%D8%B9%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%20%D9%88%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9.pdf.aspx#page=1",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21155",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21156",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21157"
      ]
    }
  },
  {
    "slug": "domestic-worker-wages-rest-leave",
    "published": "2026-10-09",
    "updated": "2026-10-09",
    "en": {
      "title": "Domestic-worker wages, rest and leave: what must an employer plan for?",
      "description": "Build the employment plan around the agreed wage, payment records, daily and weekly rest, and statutory leave. A worker's residence in your home or a household's…",
      "citations": [
        "https://uaelegislation.gov.ae/en/legislations/1593#item21150",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21141",
        "https://www.mohre.gov.ae/assets/download/d85c5019/%D9%82%D8%B1%D8%A7%D8%B1%20%D9%88%D8%B2%D8%A7%D8%B1%D9%8A%20%D8%B1%D9%82%D9%85%20675%20%D9%84%D8%B3%D9%86%D8%A9%202022%20%D8%A8%D8%B4%D8%A3%D9%86%20%D8%B3%D8%AF%D8%A7%D8%AF%20%D8%A3%D8%AC%D9%88%D8%B1%20%D8%A8%D8%B9%D8%B6%20%D9%85%D9%87%D9%86%20%D8%B9%D9%85%D8%A7%D9%84%20%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A9%20%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9%20%D8%B9%D8%A8%D8%B1%20%D9%86%D8%B8%D8%A7%D9%85%20%D8%AD%D9%85%D8%A7%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A3%D8%AC%D9%88%D8%B1_638944177858469656.pdf.aspx#page=2",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21143",
        "https://uaelegislation.gov.ae/en/legislations/1620#item23231",
        "https://uaelegislation.gov.ae/en/legislations/1620#item23232",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21144",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21152",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21145",
        "https://uaelegislation.gov.ae/en/legislations/1620#item23233"
      ]
    },
    "ar": {
      "title": "أجور العامل المساعد وراحته وإجازاته: ما الذي يجب أن يخطط له صاحب العمل؟",
      "description": "ضع خطة العمل على أساس الأجر المتفق عليه وسجلات السداد والراحة اليومية والأسبوعية والإجازات القانونية. ولا تلغي إقامة العامل في منزلك أو دفع الأسرة للمكتب هذه…",
      "citations": [
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21150",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21141",
        "https://www.mohre.gov.ae/assets/download/d85c5019/%D9%82%D8%B1%D8%A7%D8%B1%20%D9%88%D8%B2%D8%A7%D8%B1%D9%8A%20%D8%B1%D9%82%D9%85%20675%20%D9%84%D8%B3%D9%86%D8%A9%202022%20%D8%A8%D8%B4%D8%A3%D9%86%20%D8%B3%D8%AF%D8%A7%D8%AF%20%D8%A3%D8%AC%D9%88%D8%B1%20%D8%A8%D8%B9%D8%B6%20%D9%85%D9%87%D9%86%20%D8%B9%D9%85%D8%A7%D9%84%20%D8%A7%D9%84%D8%AE%D8%AF%D9%85%D8%A9%20%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9%20%D8%B9%D8%A8%D8%B1%20%D9%86%D8%B8%D8%A7%D9%85%20%D8%AD%D9%85%D8%A7%D9%8A%D8%A9%20%D8%A7%D9%84%D8%A3%D8%AC%D9%88%D8%B1_638944177858469656.pdf.aspx#page=2",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21143",
        "https://uaelegislation.gov.ae/ar/legislations/1620#item23231",
        "https://uaelegislation.gov.ae/ar/legislations/1620#item23232",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21144",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21152",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21145",
        "https://uaelegislation.gov.ae/ar/legislations/1620#item23233"
      ]
    }
  },
  {
    "slug": "own-visa-part-time-domestic-work",
    "published": "2026-10-09",
    "updated": "2026-10-09",
    "en": {
      "title": "Can you hire a domestic worker who has their own visa or works part-time?",
      "description": "A residence visa alone does not authorise a person to work for your household. Before hiring, confirm the valid work permit, the employer or licensed agency and…",
      "citations": [
        "https://uaelegislation.gov.ae/en/legislations/1593#item21146",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21145",
        "https://uaelegislation.gov.ae/en/legislations/1620#item23235",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21157",
        "https://www.mohre.gov.ae/en/services/issuance-of-a-new-work-permit-domestic-workers-2022",
        "https://www.mohre.gov.ae/assets/download/b361586d/%D9%82%D8%B1%D8%A7%D8%B1%20%D8%A5%D8%AF%D8%A7%D8%B1%D9%8A%20%D8%B1%D9%82%D9%85%205%20%D9%84%D8%B3%D9%86%D8%A9%202024%20%D8%A8%D8%A5%D8%B5%D8%AF%D8%A7%D8%B1%20%D8%AF%D9%84%D9%8A%D9%84%20%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%D9%8A%20%D9%84%D8%AA%D9%86%D9%81%D9%8A%D8%B0%20%D8%A3%D8%AD%D9%83%D8%A7%D9%85%20%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D8%B1%20%D8%A7%D9%84%D9%88%D8%B2%D8%A7%D8%B1%D9%8A%20%D8%B1%D9%82%D9%85%20676%20%D9%84%D8%B3%D9%86%D8%A9%202022%20%20%D8%A8%D8%B4%D8%A3%D9%86%20%D8%AA%D9%86%D8%B8%D9%8A%D9%85%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%20%D9%85%D9%83%D8%A7%D8%AA%D8%A8%20%D8%A7%D8%B3%D8%AA%D9%82%D8%AF%D8%A7%D9%85%20%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9_638944174363309813.pdf.aspx#page=11",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21148",
        "https://uaelegislation.gov.ae/en/legislations/1620#item23233",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21142"
      ]
    },
    "ar": {
      "title": "هل يمكنك توظيف عامل مساعد لديه إقامة خاصة أو يعمل بدوام جزئي؟",
      "description": "الإقامة وحدها لا تخول الشخص العمل لدى أسرتك. قبل التوظيف، تحقق من تصريح العمل الساري وصاحب العمل أو المكتب المرخص، ومن جواز العمل المقترح ضمن ذلك الترتيب.…",
      "citations": [
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21146",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21145",
        "https://uaelegislation.gov.ae/ar/legislations/1620#item23235",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21157",
        "https://www.mohre.gov.ae/ar/services/issuance-of-a-new-work-permit-domestic-workers-2022",
        "https://www.mohre.gov.ae/assets/download/b361586d/%D9%82%D8%B1%D8%A7%D8%B1%20%D8%A5%D8%AF%D8%A7%D8%B1%D9%8A%20%D8%B1%D9%82%D9%85%205%20%D9%84%D8%B3%D9%86%D8%A9%202024%20%D8%A8%D8%A5%D8%B5%D8%AF%D8%A7%D8%B1%20%D8%AF%D9%84%D9%8A%D9%84%20%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%D9%8A%20%D9%84%D8%AA%D9%86%D9%81%D9%8A%D8%B0%20%D8%A3%D8%AD%D9%83%D8%A7%D9%85%20%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D8%B1%20%D8%A7%D9%84%D9%88%D8%B2%D8%A7%D8%B1%D9%8A%20%D8%B1%D9%82%D9%85%20676%20%D9%84%D8%B3%D9%86%D8%A9%202022%20%20%D8%A8%D8%B4%D8%A3%D9%86%20%D8%AA%D9%86%D8%B8%D9%8A%D9%85%20%D8%B9%D9%85%D9%84%D9%8A%D8%A7%D8%AA%20%D8%AA%D8%B4%D8%BA%D9%8A%D9%84%20%D9%85%D9%83%D8%A7%D8%AA%D8%A8%20%D8%A7%D8%B3%D8%AA%D9%82%D8%AF%D8%A7%D9%85%20%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%84%D8%A9%20%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9_638944174363309813.pdf.aspx#page=11",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21148",
        "https://uaelegislation.gov.ae/ar/legislations/1620#item23233",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21142"
      ]
    }
  },
  {
    "slug": "domestic-worker-leave-travel-planning",
    "published": "2026-10-09",
    "updated": "2026-10-09",
    "en": {
      "title": "How should a household plan a domestic worker's annual leave and travel?",
      "description": "Plan leave dates, pay, cover and travel responsibility before booking. Annual leave, travel accompanying the employer and return travel after termination are…",
      "citations": [
        "https://uaelegislation.gov.ae/en/legislations/1593#item21144",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21156",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21157",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21137",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21145"
      ]
    },
    "ar": {
      "title": "كيف تخطط الأسرة لإجازة العامل المساعد السنوية وسفره؟",
      "description": "خطط لتواريخ الإجازة والأجر والتغطية ومسؤولية السفر قبل الحجز. فالإجازة السنوية والسفر مع صاحب العمل وسفر العودة بعد إنهاء العلاقة حالات مختلفة. ولا تفترض تطابق…",
      "citations": [
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21144",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21156",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21157",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21137",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21145"
      ]
    }
  },
  {
    "slug": "domestic-worker-complaints-disputes",
    "published": "2026-10-09",
    "updated": "2026-10-09",
    "en": {
      "title": "How do domestic-worker complaints and recruitment-agency disputes proceed?",
      "description": "Identify the parties, the contract and the remedy sought, then use the appropriate MOHRE channel. A worker–employer wage dispute and an employer–agency…",
      "citations": [
        "https://uaelegislation.gov.ae/ar/legislations/1593#item32836",
        "https://www.mohre.gov.ae/en/services/register-a-labor-complaint-domestic-workers",
        "https://www.mohre.gov.ae/assets/download/d5cf412d/domestic-workers-employers-guide-en_638924949072877160.pdf.aspx#page=17",
        "https://www.mohre.gov.ae/en/services/issuance-of-a-new-work-permit-domestic-workers-2022",
        "https://uaelegislation.gov.ae/en/legislations/1620#item23230",
        "https://uaelegislation.gov.ae/en/legislations/1593#item21162",
        "https://uaelegislation.gov.ae/en/legislations/1620#item23234"
      ]
    },
    "ar": {
      "title": "كيف تسير شكاوى العمالة المساعدة ومنازعات مكاتب الاستقدام؟",
      "description": "حدد الأطراف والعقد والمعالجة المطلوبة، ثم استخدم قناة الوزارة المناسبة. فنزاع الأجر بين العامل وصاحب العمل يختلف عن نزاع الاستقدام بين صاحب العمل والمكتب، مع أن…",
      "citations": [
        "https://uaelegislation.gov.ae/ar/legislations/1593#item32836",
        "https://www.mohre.gov.ae/en/services/register-a-labor-complaint-domestic-workers",
        "https://www.mohre.gov.ae/assets/download/d5cf412d/domestic-workers-employers-guide-en_638924949072877160.pdf.aspx#page=17",
        "https://www.mohre.gov.ae/ar/services/issuance-of-a-new-work-permit-domestic-workers-2022",
        "https://uaelegislation.gov.ae/ar/legislations/1620#item23230",
        "https://uaelegislation.gov.ae/ar/legislations/1593#item21162",
        "https://uaelegislation.gov.ae/ar/legislations/1620#item23234"
      ]
    }
  }
];
