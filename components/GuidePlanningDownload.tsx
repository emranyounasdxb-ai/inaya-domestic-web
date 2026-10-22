const worksheetGuides = new Set([
  'domestic-worker-hiring-costs-uae',
  'domestic-worker-skills-language-assessment',
  'agreeing-domestic-worker-household-duties',
  'domestic-worker-interview-trial-probation',
  'new-maid-first-week-checklist',
  'maid-daily-instructions-handover-template',
]);

export default function GuidePlanningDownload({ slug, locale }: { slug: string; locale: 'en' | 'ar' }) {
  if (!worksheetGuides.has(slug)) return null;
  const arabic = locale === 'ar';
  return (
    <section data-guide-worksheets="true" aria-labelledby="guide-worksheets-title" className="mt-10 rounded-2xl border border-accent-500/40 bg-ivory px-5 py-6 sm:px-7">
      <h2 id="guide-worksheets-title" className="text-xl font-bold text-primary-900">
        {arabic ? 'أوراق عمل لتخطيط احتياجات أسرتك' : 'Worksheets for your household planning'}
      </h2>
      <p className="mt-3 text-primary-900/85">
        {arabic
          ? 'حمّل ملف Excel قابلاً للتعديل، يتضمن أربع أوراق فارغة بالعربية والإنجليزية: مقارنة عروض الأسعار، ومناقشة المهارات والتواصل، وخطة الأسبوع الأول، وتسليم المهام اليومية.'
          : 'Download an editable Excel workbook with four blank English and Arabic worksheets: quote comparison, skills and communication discussion, first-week planning, and daily handover.'}
      </p>
      <p className="mt-3 text-sm text-primary-900/75">
        {arabic
          ? 'املأ الملف على جهازك؛ لا يرسل بياناتك إلى عناية تلقائياً. هو أداة للنقاش والتخطيط، ولا يمثل عقداً أو حجزاً مؤكداً أو نتيجة تقييم لعامل بعينه.'
          : 'Fill it in on your device; it does not automatically send your information to INAYA. It supports a planning discussion and is not a contract, confirmed booking or an individual worker’s assessment result.'}
      </p>
      <a href="/downloads/inaya-household-planning-worksheets.xlsx" download className="mt-5 inline-block rounded-full bg-primary-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-700">
        {arabic ? 'تحميل أوراق التخطيط (Excel)' : 'Download planning worksheets (Excel)'}
      </a>
    </section>
  );
}
