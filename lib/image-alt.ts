import { getServiceImage } from './service-presentation';
import catalog from '../content/site-image-gallery.json';

export function serviceImageAlt(locale: string, slug: string) {
  const image = catalog.images.find(image => image.src === getServiceImage(slug));
  if (!image) throw new Error(`Missing approved service image description: ${slug}`);
  return image.alt[locale === 'ar' ? 'ar' : 'en'];
}
