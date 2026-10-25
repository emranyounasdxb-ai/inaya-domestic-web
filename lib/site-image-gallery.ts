import catalog from '../content/site-image-gallery.json';
import { withPageImageVersion } from './home-about-images';

export type GalleryCategoryId = 'inaya' | 'domestic' | 'childcare' | 'cooking' | 'care' | 'support' | 'lifestyle' | 'countries' | 'guides';
type LocalizedText = { en: string; ar: string };

export type GalleryCategory = { id: GalleryCategoryId; label: LocalizedText };
export type GalleryImage = {
  id: string;
  src: string;
  width: number;
  height: number;
  title: LocalizedText;
  alt: LocalizedText;
  category: GalleryCategoryId;
  relatedRoute: string;
  displaySrc: string;
  srcSet?: string;
  responsiveWidths?: number[];
};

type CatalogImage = Omit<GalleryImage, 'displaySrc' | 'srcSet'> & { cacheVersion: string; responsiveWidths: number[] };

/** Reuse approved page/service versions; other gallery-only requests use their current content version. */
function versionedDisplayPath(displaySrc: string, image: CatalogImage) {
  const approved = withPageImageVersion(displaySrc, image.src);
  return approved === displaySrc ? `${displaySrc}?v=${image.cacheVersion}` : approved;
}

export const siteGalleryCategories = catalog.categories as GalleryCategory[];

/** One entry per current canonical content photo, shared by both language versions. */
export const siteGalleryImages: GalleryImage[] = (catalog.images as CatalogImage[]).map(image => {
  const stem = image.src.replace(/^\//, '').replace(/\.[^.]+$/i, '');
  return {
    id: image.id,
    src: image.src,
    width: image.width,
    height: image.height,
    title: image.title,
    alt: image.alt,
    category: image.category,
    relatedRoute: image.relatedRoute,
    displaySrc: versionedDisplayPath(image.src, image),
    responsiveWidths: image.responsiveWidths,
    srcSet: process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true'
      ? image.responsiveWidths.map(width => `${versionedDisplayPath(`/optimized/${stem}-${width}.webp`, image)} ${width}w`).join(', ')
      : undefined,
  };
});
