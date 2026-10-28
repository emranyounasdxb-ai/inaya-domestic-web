import catalog from '../content/site-image-gallery.json';

// Reuse the existing guide portraits; descriptions identify the scene, not a
// person's nationality or a currently available candidate.
const countryPhotoPaths: Record<string, string> = {
  ph: '/images/countries/maid-philippines.webp',
  lk: '/images/countries/maid-sri-lanka.webp',
  np: '/images/countries/maid-nepal.webp',
  in: '/images/countries/maid-india.webp',
  id: '/images/countries/maid-indonesia.webp',
  ke: '/images/countries/maid-kenya-uganda.webp',
  ug: '/images/countries/maid-kenya-uganda.webp',
};

export function getCountrySourceImage(code = '') {
  const src = countryPhotoPaths[code] ?? '/images/about/about-hero-domestic-service.webp';
  const image = catalog.images.find(image => image.src === src);
  if (!image) throw new Error(`Missing approved country-guide image: ${src}`);
  return image;
}
