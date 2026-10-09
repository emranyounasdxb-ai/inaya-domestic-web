const assert = require('node:assert/strict');

// Preserve the historical source checkpoints byte for byte apart from these
// reviewed bilingual corrections to existing roles and their scope descriptions.
const replacements = {
  'lib/services.ts': [
    ["short: { en: 'Full-time maids living at your home.', ar: 'خادمات بدوام كامل يقمن في منزلك.' }", "short: { en: 'Residential maid support with agreed duties and schedule.', ar: 'دعم منزلي مع الإقامة وفق مهام وجدول متفق عليهما.' }"],
    ["icon: '🏥'", "icon: '🏠'"],
    ["name: { en: 'Home Care / Patient Care Services', ar: 'خدمات الرعاية المنزلية / رعاية المرضى' }", "name: { en: 'Non-clinical Home Support', ar: 'دعم منزلي غير طبي' }"],
    ["short: { en: 'Professional patient care at home.', ar: 'رعاية احترافية للمرضى في المنزل.' }", "short: { en: 'Practical daily help and companionship at home.', ar: 'مساعدة يومية ومرافقة داخل المنزل دون رعاية طبية.' }"],
    ["description: { en: 'Patient care enquiries concern practical daily living and hygiene assistance at home. Discuss the support needed and each profile’s experience; clinical responsibilities need separate clarification.', ar: 'تتعلق طلبات رعاية المرضى بالمساعدة العملية للحياة اليومية والنظافة في المنزل. ناقش الدعم المطلوب وخبرة كل ملف؛ وتحتاج المسؤوليات الطبية إلى توضيح منفصل.' }", "description: { en: 'Discuss practical help with daily routines, hygiene and companionship at home. INAYA does not provide medical treatment, nursing or medication management.', ar: 'ناقش المساعدة العملية في الروتين اليومي والنظافة والمرافقة داخل المنزل. لا تقدم عناية العلاج الطبي أو التمريض أو إدارة الأدوية.' }"]
  ],
  'lib/service-content-briefs.ts': [
    ['Compare companion care when company is the main purpose and patient care for a different daily-support enquiry.', 'Compare companion care when company is the main purpose and non-clinical home support for a different daily-support enquiry.'],
    ['قارن رعاية المرافقة عندما تكون الرفقة هي الغرض الأساسي ورعاية المرضى لاحتياج يومي مختلف.', 'قارن خدمة المرافقة عندما تكون الرفقة هي الغرض الأساسي، والدعم المنزلي غير الطبي لاحتياج يومي مختلف.'],
    ['Home patient-support enquiries focus on practical daily living and hygiene assistance around the family’s instructions. The existing care category is non-clinical; this page does not promise nursing, treatment or a medical qualification.', 'Non-clinical home support covers practical help with daily routines, hygiene and companionship according to the family’s instructions. It does not include medical treatment, nursing or medication management.'],
    ['تركز طلبات دعم المرضى في المنزل على المساعدة العملية في الحياة اليومية والنظافة وفق تعليمات الأسرة. فئة الرعاية الحالية غير طبية؛ ولا تعد هذه الصفحة بالتمريض أو العلاج أو مؤهل طبي.', 'يشمل الدعم المنزلي غير الطبي المساعدة العملية في الروتين اليومي والنظافة والمرافقة وفق تعليمات الأسرة. ولا يشمل العلاج الطبي أو التمريض أو إدارة الأدوية.'],
    ['Specify the daily living tasks and family instructions that need practical support. Clarify the limits of the role before comparing patient support with elder care or companionship.', 'Describe the practical duties, household routine, schedule and location. Discuss medical needs with a healthcare provider; compare elder or companion support if those roles fit better.'],
    ['حدد مهام الحياة اليومية وتعليمات الأسرة التي تحتاج دعماً عملياً. وضح حدود الدور قبل مقارنة دعم المرضى برعاية كبار السن أو المرافقة.', 'وضح المهام العملية وروتين المنزل والجدول والمنطقة. ناقش الاحتياجات الطبية مع مقدم رعاية صحية، وقارن دعم كبار السن أو المرافقة إذا كان أحدهما أنسب.'],
    ['Review elder care or patient support separately if your enquiry includes more than companionship.', 'Review elder care or non-clinical home support separately if your enquiry includes more than companionship.'],
    ['راجع رعاية كبار السن أو دعم المرضى بشكل منفصل إذا تجاوز الطلب المرافقة.', 'راجع دعم كبار السن أو الدعم المنزلي غير الطبي بشكل منفصل إذا تجاوز الطلب المرافقة.']
  ]
};

function approvedCorePageCopy(file, source) {
  for (const [before, after] of replacements[file] ?? []) {
    assert.equal(source.split(before).length, 2, `${file}: expected exactly one original phrase`);
    source = source.replace(before, after);
  }
  return source;
}

module.exports = { approvedCorePageCopy };
