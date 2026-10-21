// Exact, hand-reviewed exceptions. Never regenerate a snapshot or discard a guard.
const corrections = [
  { route: '/en/booking/', before: 'Send INAYA your household service requirements, emirate, timing and contact details. The team will follow up to confirm options and next steps.', after: 'Send your household service enquiry to INAYA for review. Availability, written terms and booking require confirmation by the team.' },
  { route: '/ar/booking/', before: 'أرسل إلى عناية متطلبات الخدمة المنزلية والإمارة والموعد وبيانات التواصل. يتابع الفريق معك لتأكيد الخيارات والخطوات التالية.', after: 'أرسل استفسارك عن الخدمة المنزلية إلى عناية للمراجعة. يتطلب التوفر والشروط المكتوبة والحجز تأكيداً من الفريق.' },
  { route: '/en/careers/', before: 'Share your domestic service experience, preferred role, language and availability with INAYA. The team will contact you when a suitable opportunity is available.', after: 'Send a domestic-work career enquiry to INAYA for review. Share your experience and preferred role; submission does not confirm a job or interview.' },
  { route: '/ar/careers/', before: 'شارك عناية خبرتك في الخدمات المنزلية ونوع العمل المناسب واللغة والتوفر. يتواصل الفريق معك عند توفر فرصة مناسبة.', after: 'أرسل استفسار عمل في الخدمات المنزلية إلى عناية للمراجعة. شارك خبرتك والدور المفضل؛ ولا يؤكد الإرسال وظيفة أو مقابلة.' }
];
function approvedDescriptions(source) {
  for (const { before, after } of corrections) {
    if (source.split(before).length !== 2) throw new Error('Expected exactly one original description');
    source = source.replace(before, after);
  }
  return source;
}
function approvedHomeFlow(source) {
  const anchor = "import { CURATED_GOOGLE_REVIEWS } from '../../lib/curated-google-reviews';";
  if (!source.includes(anchor)) throw new Error('Missing original import');
  source = source.replace(anchor, `${anchor}\nimport { dismissOffer } from './helpers/dismiss-offer';`);
  for (const title of ['Google reviews carousel autoplay pauses for hover and focus, then resumes', 'Google reviews carousel controls, dots and seamless loop remain functional', 'Google reviews carousel disables autoplay and animation for reduced motion']) {
    const start = source.indexOf(`test('${title}'`);
    const scroll = '  await carousel.scrollIntoViewIfNeeded();';
    const index = source.indexOf(scroll, start);
    if (start < 0 || index < 0) throw new Error('Missing original carousel setup');
    const end = index + scroll.length;
    source = `${source.slice(0, end)}\n  await dismissOffer(page);${source.slice(end)}`;
  }
  return source;
}
module.exports = { corrections, approvedDescriptions, approvedHomeFlow };
