import Image from 'next/image';
import { companyGalleryPhotos, companyGalleryGroups } from '@/lib/company-gallery';

export default function CompanyGallery({ locale }: { locale: string }) {
  const lang = locale === 'ar' ? 'ar' : 'en';
  const openImage = lang === 'ar' ? 'افتح الصورة بالحجم الأكبر' : 'Open the larger image';
  const sizes = '(min-width: 1280px) 280px, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw';

  return (
    <div className="mx-auto max-w-6xl px-6 pb-12 lg:px-10" data-company-gallery="true">
      <nav aria-label={lang === 'ar' ? 'أقسام الصور' : 'Photo sections'} className="flex flex-wrap gap-3 py-5">
        {companyGalleryGroups.map((group) => (
          <a key={group.id} href={`#gallery-${group.id}`} className="rounded-full border border-accent-500/30 bg-white px-4 py-2 text-sm font-semibold text-primary-900 hover:bg-accent-50">
            {group.title[lang]}
          </a>
        ))}
      </nav>
      {companyGalleryGroups.map((group) => (
        <section key={group.id} id={`gallery-${group.id}`} aria-labelledby={`gallery-${group.id}-heading`} className="scroll-mt-24 py-7">
          <h2 id={`gallery-${group.id}-heading`} className={`${lang === 'ar' ? 'font-arabic' : 'font-heading'} text-2xl font-bold tracking-[-0.025em] text-primary-900`}>
            {group.title[lang]}
          </h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {companyGalleryPhotos.filter((photo) => photo.category === group.id).map((photo) => (
              <figure key={photo.id} id={`photo-${photo.id}`} className="overflow-hidden rounded-2xl border border-primary-900/10 bg-white shadow-sm">
                <a href={photo.src} aria-label={`${openImage}: ${photo.alt[lang]}`} className="block rounded-t-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-900">
                  <picture>
                    <source type="image/jpeg" srcSet={`${photo.thumbnailSrc} ${photo.thumbnailWidth}w, ${photo.src} ${photo.width}w`} sizes={sizes} />
                    <Image
                      src={photo.src}
                      alt={photo.alt[lang]}
                      width={photo.width}
                      height={photo.height}
                      unoptimized
                      loading={photo.id === 'office-003' ? 'eager' : 'lazy'}
                      fetchPriority={photo.id === 'office-003' ? 'high' : undefined}
                      sizes={sizes}
                      className="aspect-[4/3] h-auto w-full bg-[#f7f8fa] object-contain"
                    />
                  </picture>
                </a>
                <figcaption className="px-4 py-4 text-sm leading-6 text-primary-900/85">{photo.caption[lang]}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
