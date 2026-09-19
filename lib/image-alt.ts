import { getServiceWithExtras } from './service-helpers';
import { getServiceImage, serviceFallbackImage } from './service-presentation';

export function serviceImageAlt(locale: string, slug: string) {
  if (getServiceImage(slug) === serviceFallbackImage) return locale === 'ar'
    ? 'صورة توضيحية لعاملة منزلية تقدم الشاي لأسرة في غرفة المعيشة'
    : 'Illustration of a domestic worker serving tea to a family in a living room';
  const service = getServiceWithExtras(slug);
  return locale === 'ar' ? `صورة توضيحية لخدمة ${service?.name.ar ?? 'العمالة المنزلية'}`
    : `Household service illustration: ${service?.name.en ?? 'domestic worker support'}`;
}
