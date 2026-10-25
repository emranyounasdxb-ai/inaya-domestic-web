import { homeAboutImages, mobileHeroImage, portraitSrcSet, withPageImageVersion } from '@/lib/home-about-images';

export default function HomeHeroImage({ isArabic }: { isArabic: boolean }) {
  const image = homeAboutImages.homeHero;

  return (
    <picture className="home-hero__picture">
      <source
        media="(max-width: 1279px)"
        type="image/webp"
        srcSet={process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true' ? portraitSrcSet(mobileHeroImage.src) : withPageImageVersion(mobileHeroImage.src)}
        sizes="calc(100vw - 48px)"
        width={mobileHeroImage.width}
        height={mobileHeroImage.height}
      />
      {process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true' ? <source media="(min-width: 1280px)" type="image/webp" srcSet={portraitSrcSet(image.src)} sizes="100vw" /> : null}
      <img
        data-home-hero-photo
        src={withPageImageVersion(image.src)}
        alt={image.alt[isArabic ? 'ar' : 'en']}
        width={image.width}
        height={image.height}
        loading="eager"
        fetchPriority="high"
        decoding="sync"
        className="home-hero__photo"
      />
    </picture>
  );
}
