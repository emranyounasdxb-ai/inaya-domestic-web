import { getServiceWithExtras } from './service-helpers';
import { getServiceImage, serviceFallbackImage } from './service-presentation';

export function serviceImageAlt(locale: string, slug: string) {
  if (getServiceImage(slug) === serviceFallbackImage) return locale === 'ar'
    ? 'عاملة منزلية تقدم الشاي لأسرة في غرفة المعيشة'
    : 'A domestic worker serving tea to a family in a living room';
  const service = getServiceWithExtras(slug);
  return locale === 'ar' ? `خدمة ${service?.name.ar ?? 'العمالة المنزلية'}`
    : `Household service: ${service?.name.en ?? 'domestic worker support'}`;
}
