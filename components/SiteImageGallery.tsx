'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import type { GalleryCategory, GalleryImage } from '@/lib/site-image-gallery';

function searchable(value: string) {
  return value.toLocaleLowerCase().normalize('NFKD').replace(/[\u064b-\u065f]/g, '').replace(/[أإآ]/g, 'ا').replace(/ى/g, 'ي');
}

export default function SiteImageGallery({ locale, images, categories }: { locale: 'en' | 'ar'; images: GalleryImage[]; categories: GalleryCategory[] }) {
  const ar = locale === 'ar';
  const copy = ar ? {
    all: 'كل الصور', search: 'ابحث في الصور', placeholder: 'ابحث عن خدمة أو موضوع', reset: 'إعادة ضبط الفلاتر',
    count: 'صورة', none: 'لم نعثر على صور مطابقة. جرّب كلمة أخرى أو أعد ضبط الفلاتر.',
    view: 'عرض الصورة', preview: 'معاينة الصورة', close: 'إغلاق الصورة', previous: 'الصورة السابقة', next: 'الصورة التالية',
    related: 'استكشف الصفحة ذات الصلة', guide: 'اقرأ الدليل', categories: 'تصفية الصور حسب الفئة',
  } : {
    all: 'All photos', search: 'Search photos', placeholder: 'Search a service or topic', reset: 'Reset filters',
    count: 'photos', none: 'No matching photos. Try another word or reset the filters.',
    view: 'View photo', preview: 'Photo preview', close: 'Close photo', previous: 'Previous photo', next: 'Next photo',
    related: 'Explore related page', guide: 'Read the guide', categories: 'Filter photos by category',
  };
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<GalleryImage | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const categoryMap = new Map(categories.map(item => [item.id, item]));
  const term = searchable(query.trim());
  const filtered = images.filter(image => (category === 'all' || category === image.category)
    && (!term || searchable(`${image.title.en} ${image.title.ar} ${image.alt.en} ${image.alt.ar} ${categoryMap.get(image.category)?.label[locale]}`).includes(term)));
  const position = selected ? filtered.findIndex(image => image.id === selected.id) : -1;

  useEffect(() => {
    if (selected && dialog.current && !dialog.current.open) dialog.current.showModal();
    if (!selected && dialog.current?.open) dialog.current.close();
  }, [selected]);

  function move(amount: number) {
    if (filtered.length) setSelected(filtered[(position + amount + filtered.length) % filtered.length]);
  }
  const relatedHref = (image: GalleryImage) => `/${locale}/${image.relatedRoute ? `${image.relatedRoute}/` : ''}`;

  return (
    <section className="site-gallery" data-site-gallery dir={ar ? 'rtl' : 'ltr'} aria-label={ar ? 'صور خدمات عناية وأدلتها' : 'INAYA service and guide photos'}>
      <div className="site-gallery__tools">
        <form className="site-gallery__search" role="search" onSubmit={event => event.preventDefault()}>
          <label htmlFor="gallery-search">{copy.search}</label>
          <div className="site-gallery__search-row">
            <input id="gallery-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder={copy.placeholder} />
            <button type="button" onClick={() => { setCategory('all'); setQuery(''); }}>{copy.reset}</button>
          </div>
        </form>
        <div className="site-gallery__filters" role="group" aria-label={copy.categories}>
          {[{ id: 'all', label: { en: copy.all, ar: copy.all } }, ...categories].map(item => (
            <button type="button" key={item.id} data-gallery-category={item.id} aria-pressed={category === item.id} onClick={() => setCategory(item.id)}>
              <span>{item.label[locale]}</span>
              <span className="site-gallery__category-count">{item.id === 'all' ? images.length : images.filter(image => image.category === item.id).length}</span>
            </button>
          ))}
        </div>
      </div>
      <p className="site-gallery__results" role="status" aria-live="polite" data-gallery-results>{filtered.length} {copy.count}</p>
      {filtered.length ? <div className="site-gallery__grid">
        {filtered.map(image => (
          <figure key={image.id} id={image.id} data-site-image-id={image.id} data-category={image.category} className="site-gallery__card">
            <button className="site-gallery__open" type="button" data-gallery-open={image.id} onClick={() => setSelected(image)} aria-label={`${copy.view}: ${image.title[locale]}`}>
              <picture>
                {image.srcSet ? <source type="image/webp" srcSet={image.srcSet} sizes="(min-width: 1440px) 310px, (min-width: 1024px) 32vw, (min-width: 600px) 48vw, 100vw" /> : null}
                <img src={image.displaySrc} alt={image.alt[locale]} width={image.width} height={image.height} loading="lazy" decoding="async" />
              </picture>
              <span className="site-gallery__zoom" aria-hidden="true">＋</span>
            </button>
            <figcaption>
              <p className="site-gallery__category">{categoryMap.get(image.category)?.label[locale]}</p>
              <h2>{image.title[locale]}</h2>
              <Link href={relatedHref(image)}>{image.category === 'guides' ? copy.guide : copy.related}<span aria-hidden="true"> {ar ? '←' : '→'}</span></Link>
            </figcaption>
          </figure>
        ))}
      </div> : <p className="site-gallery__empty">{copy.none}</p>}

      <dialog ref={dialog} className="site-gallery__dialog" data-gallery-dialog aria-label={copy.preview}
        onCancel={event => { event.preventDefault(); setSelected(null); }}
        onClose={() => { if (!dialog.current?.open) setSelected(null); }}
        onClick={event => { if (event.target === event.currentTarget) setSelected(null); }}
        onKeyDown={event => {
          if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault();
            move(event.key === (ar ? 'ArrowLeft' : 'ArrowRight') ? 1 : -1);
          }
        }}>
        <div className="site-gallery__dialog-body">
          <div className="site-gallery__dialog-bar">
            <span dir="ltr">{position + 1} / {filtered.length}</span>
            <button type="button" onClick={() => setSelected(null)} aria-label={copy.close}>{copy.close} <span aria-hidden="true">×</span></button>
          </div>
          {selected ? <figure>
            <div className="site-gallery__dialog-media"><img src={selected.displaySrc} alt={selected.alt[locale]} width={selected.width} height={selected.height} /></div>
            <figcaption><h2>{selected.title[locale]}</h2><Link href={relatedHref(selected)}>{selected.category === 'guides' ? copy.guide : copy.related}</Link></figcaption>
          </figure> : null}
          <div className="site-gallery__dialog-nav">
            <button type="button" onClick={() => move(-1)}>{copy.previous}</button>
            <button type="button" onClick={() => move(1)}>{copy.next}</button>
          </div>
        </div>
      </dialog>
    </section>
  );
}
