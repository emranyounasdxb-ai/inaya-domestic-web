type Props = { locale: string; alt: string; className: string; width: number };

// Local variants work in development and in the cPanel static export.
export default function BrandLogo({ locale, alt, className, width }: Props) {
  const arabic = locale === 'ar';
  const stem = arabic ? '/brand/inaya-arabic-logo' : '/brand/inaya-domestic-workers-logo';
  const ratio = arabic ? 598 / 1959 : 519 / 1692;
  const sourceWidth = process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true' ? 620 : arabic ? 1959 : 1692;
  const srcSet = `${stem}-160.webp 160w, ${stem}-320.webp 320w, ${stem}.webp ${sourceWidth}w`;
  const sizes = `${width === 156 ? 92 : 210}px`;
  return (
    <picture className="contents">
      <source type="image/webp" srcSet={srcSet} sizes={sizes} />
      <img
        src={`${stem}-320.webp`}
        width={width}
        height={Math.round(width * ratio)}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={className}
      />
    </picture>
  );
}
