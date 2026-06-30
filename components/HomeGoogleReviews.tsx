'use client';

import { useEffect } from 'react';

const reviewLink = 'https://search.google.com/local/writereview?placeid=ChIJxzRGAUJZXz4R8zN5ye8vn_M';

const styles = `.google-reviews-section{position:relative;overflow:hidden;padding:6rem 1.5rem;background:linear-gradient(180deg,#fbfaf7,#f6f0e7);color:#07164a}.google-reviews-section:before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 18% 24%,rgba(191,164,106,.14),transparent 25rem),radial-gradient(circle at 86% 72%,rgba(7,22,74,.06),transparent 28rem)}.google-reviews-shell{position:relative;z-index:1;display:grid;grid-template-columns:.86fr 1.14fr;gap:2rem;max-width:72rem;margin:0 auto;align-items:center}.google-reviews-copy,.google-reviews-stage{border:1px solid rgba(255,255,255,.8);border-radius:2rem;background:rgba(255,255,255,.68);box-shadow:0 24px 75px rgba(7,22,74,.08),inset 0 1px 0 rgba(255,255,255,.9);backdrop-filter:blur(18px)}.google-reviews-copy{padding:2.2rem}.google-reviews-eyebrow{font-size:.68rem;font-weight:800;letter-spacing:.26em;text-transform:uppercase;color:#9a7930}.google-reviews-copy h2{margin-top:1rem!important;color:#07164a!important;font-size:clamp(2rem,3.2vw,3.15rem)!important;line-height:1.05!important;letter-spacing:-.055em!important}.google-reviews-intro{margin-top:1rem;max-width:31rem;color:rgba(7,22,74,.68);font-size:.98rem;line-height:1.75}.google-rating-panel{display:flex;gap:1rem;align-items:center;margin-top:1.8rem;border:1px solid rgba(191,164,106,.18);border-radius:1.35rem;background:rgba(255,255,255,.66);padding:1rem}.google-rating-score{display:flex;width:4.6rem;height:4.6rem;align-items:center;justify-content:center;border-radius:1.2rem;background:#07164a;color:#fff;font-size:1.45rem;font-weight:800}.google-rating-stars,.google-review-stars{color:#c9961a;letter-spacing:.08em}.google-review-cta{display:inline-flex;margin-top:1.5rem;border:1px solid rgba(191,164,106,.42);border-radius:999px;background:#07164a;padding:.9rem 1.35rem;color:#fff;font-size:.76rem;font-weight:800;letter-spacing:.13em;text-transform:uppercase}.google-reviews-stage{position:relative;min-height:30rem;padding:2rem;overflow:hidden}.google-review-badge{display:inline-flex;align-items:center;gap:.55rem;border:1px solid rgba(191,164,106,.24);border-radius:999px;background:rgba(255,255,255,.72);padding:.55rem .85rem;font-size:.68rem;font-weight:800;letter-spacing:.15em;text-transform:uppercase}.google-review-badge span,.google-review-source span{display:inline-flex;align-items:center;justify-content:center;border-radius:999px;background:#fff;color:#4285f4;font-weight:900}.google-review-badge span{width:1.35rem;height:1.35rem}.google-review-track{position:relative;min-height:19rem;margin-top:2rem}.google-review-card{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;border:1px solid rgba(255,255,255,.78);border-radius:1.7rem;background:rgba(255,255,255,.76);padding:2rem;opacity:0;transform:translateY(1rem) scale(.985);pointer-events:none;box-shadow:0 22px 65px rgba(7,22,74,.075);transition:opacity .48s ease,transform .48s ease}.google-review-card.is-active{opacity:1;transform:translateY(0) scale(1);pointer-events:auto}.google-review-card__top{display:flex;align-items:center;gap:.85rem}.google-review-avatar{display:flex;width:3.2rem;height:3.2rem;align-items:center;justify-content:center;border-radius:999px;background:linear-gradient(135deg,#07164a,#10276c);color:#fff;font-size:.84rem;font-weight:800}.google-review-card h3{color:#07164a!important;font-size:1.1rem!important;line-height:1.1!important;margin:0!important}.google-review-card__top p{margin-top:.22rem;color:rgba(7,22,74,.48);font-size:.78rem;font-weight:700}.google-review-stars{margin-top:1.2rem;font-size:1.15rem}.google-review-text{margin-top:1rem;color:rgba(7,22,74,.78);font-size:1.2rem;line-height:1.7}.google-review-source{display:flex;align-items:center;gap:.45rem;margin-top:1.4rem;color:rgba(7,22,74,.52);font-size:.78rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase}.google-review-source span{width:1.25rem;height:1.25rem}.google-review-controls{display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-top:1.25rem}.google-review-dots{display:flex;gap:.45rem}.google-review-dot{width:.55rem;height:.55rem;border-radius:999px;border:0;background:rgba(7,22,74,.18);cursor:pointer}.google-review-dot.is-active{width:2rem;background:#bfa46a}.google-review-controls a{color:#07164a;font-size:.72rem;font-weight:800;letter-spacing:.13em;text-transform:uppercase;border-bottom:1px solid rgba(191,164,106,.66);padding-bottom:.2rem}.google-review-progress{position:absolute;left:2rem;right:2rem;bottom:1.15rem;height:2px;background:rgba(7,22,74,.08);overflow:hidden;border-radius:999px}.google-review-progress span{display:block;width:45%;height:100%;background:linear-gradient(90deg,#bfa46a,#e0c27d);animation:googleReviewProgress 5.2s linear infinite}@keyframes googleReviewProgress{0%{transform:translateX(-110%)}100%{transform:translateX(245%)}}@media(max-width:980px){.google-reviews-shell{grid-template-columns:1fr}.google-reviews-stage{min-height:31rem}.google-review-track{min-height:20rem}}@media(max-width:640px){.google-reviews-section{padding:4.6rem 1rem}.google-reviews-copy,.google-reviews-stage{border-radius:1.55rem;padding:1.35rem}.google-review-card{padding:1.35rem}.google-review-text{font-size:1rem}}`;

const reviews = [
  { name: 'Frasha Zlwa', time: '19 hours ago', text: 'تعامل الموظفات جيد راقي خصوصاً فراولة ومهري', initials: 'FZ' },
  { name: 'Ekram Abdu Ekuti', time: '20 hours ago', text: 'Rated INAYA Domestic Workers Ajman 5 stars on Google.', initials: 'EA' },
  { name: 'Wine su Chit', time: '21 hours ago', text: 'Rated INAYA Domestic Workers Ajman 5 stars on Google.', initials: 'WC' },
  { name: 'Yehya Shawky', time: '12 weeks ago', text: 'Rated INAYA Domestic Workers Ajman 5 stars on Google.', initials: 'YS' },
  { name: 'Sara El alaoui', time: '12 weeks ago', text: 'Rated INAYA Domestic Workers Ajman 5 stars on Google.', initials: 'SA' },
  { name: 'Chrizanne', time: '12 weeks ago', text: 'Rated INAYA Domestic Workers Ajman 5 stars on Google.', initials: 'CH' },
  { name: 'Olive raj Singh', time: '12 weeks ago', text: 'Rated INAYA Domestic Workers Ajman 5 stars on Google.', initials: 'OS' }
];

const copy = {
  en: { eyebrow: 'Client Perspectives', title: 'Google 5-Star Highlights', intro: 'Real Google ratings shared by clients for INAYA Domestic Workers Ajman.', badge: 'Verified Google Reviews', rating: 'Selected 5-star reviews', write: 'Write a Google Review', view: 'Open Google Review Form' },
  ar: { eyebrow: 'آراء العملاء', title: 'تقييمات Google بخمس نجوم', intro: 'تقييمات حقيقية شاركها العملاء على Google لعناية للعمالة المنزلية عجمان.', badge: 'تقييمات Google', rating: 'مختارات من تقييمات 5 نجوم', write: 'اكتب تقييماً على Google', view: 'افتح نموذج التقييم' }
};

function cardMarkup(review: typeof reviews[number], index: number) {
  return `<article class="google-review-card ${index === 0 ? 'is-active' : ''}" data-google-review-card="${index}"><div class="google-review-card__top"><div class="google-review-avatar">${review.initials}</div><div><h3>${review.name}</h3><p>${review.time}</p></div></div><div class="google-review-stars">★★★★★</div><p class="google-review-text">${review.text}</p><div class="google-review-source"><span>G</span> Google Review</div></article>`;
}

function dotsMarkup() {
  return reviews.map((_, index) => `<button class="google-review-dot ${index === 0 ? 'is-active' : ''}" data-google-review-dot="${index}" aria-label="Review ${index + 1}"></button>`).join('');
}

function findTestimonialsSection() {
  const sections = Array.from(document.querySelectorAll<HTMLElement>('main > div > section'));
  return sections.find((section) => section.textContent?.includes('Whispers of Satisfaction')) || sections.find((section) => section.textContent?.includes('ثقة ورضا العملاء')) || sections.find((section) => section.dataset.googleReviews === 'true');
}

export default function HomeGoogleReviews() {
  useEffect(() => {
    const path = window.location.pathname.replace(/\/$/, '');
    if (path !== '/en' && path !== '/ar') return;
    if (!document.getElementById('google-reviews-styles')) {
      const style = document.createElement('style');
      style.id = 'google-reviews-styles';
      style.textContent = styles;
      document.head.appendChild(style);
    }

    const section = findTestimonialsSection();
    if (!section || section.dataset.googleReviews === 'true') return;

    const lang = document.documentElement.lang === 'ar' ? 'ar' : 'en';
    const t = copy[lang];
    section.dataset.googleReviews = 'true';
    section.className = 'google-reviews-section';
    section.innerHTML = `<div class="google-reviews-shell"><div class="google-reviews-copy"><p class="google-reviews-eyebrow">${t.eyebrow}</p><h2>${t.title}</h2><p class="google-reviews-intro">${t.intro}</p><div class="google-rating-panel"><div class="google-rating-score">5.0</div><div><div class="google-rating-stars">★★★★★</div><p>${t.rating}</p></div></div><a class="google-review-cta" href="${reviewLink}" target="_blank" rel="noopener noreferrer">${t.write}</a></div><div class="google-reviews-stage"><div class="google-review-badge"><span>G</span>${t.badge}</div><div class="google-review-track">${reviews.map(cardMarkup).join('')}</div><div class="google-review-controls"><div class="google-review-dots">${dotsMarkup()}</div><a href="${reviewLink}" target="_blank" rel="noopener noreferrer">${t.view}</a></div><div class="google-review-progress"><span></span></div></div></div>`;

    let active = 0;
    const cards = Array.from(section.querySelectorAll<HTMLElement>('[data-google-review-card]'));
    const dots = Array.from(section.querySelectorAll<HTMLButtonElement>('[data-google-review-dot]'));
    const setActive = (next: number) => {
      active = next;
      cards.forEach((card, index) => card.classList.toggle('is-active', index === active));
      dots.forEach((dot, index) => dot.classList.toggle('is-active', index === active));
    };
    dots.forEach((dot, index) => dot.addEventListener('click', () => setActive(index)));
    const interval = window.setInterval(() => setActive((active + 1) % reviews.length), 5200);
    return () => window.clearInterval(interval);
  }, []);

  return null;
}
