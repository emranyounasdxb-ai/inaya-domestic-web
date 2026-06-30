'use client';

import { useEffect } from 'react';

const fallbackReviewUrl = 'https://search.google.com/local/writereview?placeid=ChIJxzRGAUJZXz4R8zN5ye8vn_M';

const styles = `.google-reviews-section{position:relative;overflow:hidden;padding:6rem 1.5rem;background:linear-gradient(180deg,#fbfaf7,#f5efe6);color:#07164a}.google-reviews-section:before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 14% 20%,rgba(191,164,106,.15),transparent 27rem),radial-gradient(circle at 88% 70%,rgba(7,22,74,.08),transparent 30rem);pointer-events:none}.google-reviews-shell{position:relative;z-index:1;display:grid;grid-template-columns:.9fr 1.1fr;gap:1.4rem;max-width:76rem;margin:0 auto;align-items:stretch}.google-reviews-copy,.google-reviews-stage{border:1px solid rgba(255,255,255,.82);border-radius:2rem;background:rgba(255,255,255,.72);box-shadow:0 26px 80px rgba(7,22,74,.09),inset 0 1px 0 rgba(255,255,255,.9);backdrop-filter:blur(18px)}.google-reviews-copy{display:flex;flex-direction:column;justify-content:center;padding:2.5rem}.google-reviews-eyebrow{font-size:.68rem;font-weight:800;letter-spacing:.28em;text-transform:uppercase;color:#9a7930}.google-reviews-copy h2{margin-top:1rem!important;color:#07164a!important;font-size:clamp(2.15rem,3.4vw,3.4rem)!important;line-height:1.02!important;letter-spacing:-.06em!important}.google-reviews-intro{margin-top:1rem;max-width:31rem;color:rgba(7,22,74,.68);font-size:1rem;line-height:1.75}.google-rating-panel{display:flex;align-items:center;gap:1rem;margin-top:1.8rem;border:1px solid rgba(191,164,106,.2);border-radius:1.35rem;background:rgba(255,255,255,.72);padding:1rem}.google-rating-score{display:flex;width:4.7rem;height:4.7rem;align-items:center;justify-content:center;border-radius:1.2rem;background:#07164a;color:#fff;font-size:1.45rem;font-weight:800;box-shadow:0 18px 38px rgba(7,22,74,.16)}.google-rating-stars,.google-review-stars{color:#c9961a;letter-spacing:.08em}.google-rating-panel p{margin-top:.25rem;color:rgba(7,22,74,.58);font-size:.82rem;font-weight:700}.google-review-cta{display:inline-flex;width:max-content;margin-top:1.4rem;align-items:center;justify-content:center;border:1px solid rgba(191,164,106,.42);border-radius:999px;background:#07164a;padding:.9rem 1.35rem;color:#fff;font-size:.76rem;font-weight:800;letter-spacing:.13em;text-transform:uppercase;box-shadow:0 18px 42px rgba(7,22,74,.16);transition:transform .25s ease,background .25s ease}.google-review-cta:hover{transform:translateY(-2px);background:#0b1d55}.google-reviews-stage{position:relative;min-height:29rem;padding:1.6rem;overflow:hidden}.google-reviews-stage:before{content:'';position:absolute;right:-6rem;top:-6rem;width:17rem;height:17rem;border-radius:999px;background:radial-gradient(circle,rgba(191,164,106,.22),transparent 66%);filter:blur(10px)}.google-review-stage-head{position:relative;z-index:3;display:flex;align-items:center;justify-content:space-between;gap:1rem}.google-review-badge,.google-live-pill{display:inline-flex;align-items:center;gap:.55rem;border-radius:999px;background:rgba(255,255,255,.76);font-size:.68rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase}.google-review-badge{border:1px solid rgba(191,164,106,.28);padding:.56rem .9rem}.google-live-pill{border:1px solid rgba(24,128,72,.16);padding:.52rem .78rem;color:#145a37}.google-live-dot{width:.48rem;height:.48rem;border-radius:999px;background:#22c55e;box-shadow:0 0 0 .28rem rgba(34,197,94,.12)}.google-review-badge span,.google-review-source span{display:inline-flex;align-items:center;justify-content:center;border-radius:999px;background:#fff;color:#4285f4;font-weight:900}.google-review-badge span{width:1.35rem;height:1.35rem}.google-review-track{position:relative;z-index:2;min-height:18.5rem;margin-top:1.35rem}.google-review-card{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;border:1px solid rgba(255,255,255,.8);border-radius:1.7rem;background:linear-gradient(145deg,rgba(255,255,255,.86),rgba(248,246,240,.7));padding:2rem;opacity:0;transform:translateY(1rem) scale(.985);pointer-events:none;box-shadow:0 22px 65px rgba(7,22,74,.075),inset 0 1px 0 rgba(255,255,255,.9);transition:opacity .48s ease,transform .48s ease}.google-review-card.is-active{opacity:1;transform:translateY(0) scale(1);pointer-events:auto}.google-review-card__top{display:flex;align-items:center;gap:.85rem}.google-review-avatar{display:flex;width:3.3rem;height:3.3rem;align-items:center;justify-content:center;border-radius:999px;background:linear-gradient(135deg,#07164a,#10276c);color:#fff;font-size:.84rem;font-weight:800;box-shadow:0 14px 32px rgba(7,22,74,.18)}.google-review-avatar img{width:100%;height:100%;border-radius:999px;object-fit:cover}.google-review-card h3{color:#07164a!important;font-size:1.1rem!important;line-height:1.1!important;margin:0!important;letter-spacing:-.02em!important}.google-review-card__top p{margin-top:.22rem;color:rgba(7,22,74,.48);font-size:.78rem;font-weight:700}.google-review-stars{margin-top:1.15rem;font-size:1.12rem}.google-review-text{margin-top:.95rem;color:rgba(7,22,74,.78);font-size:1.15rem;line-height:1.68}.google-review-source{display:flex;align-items:center;gap:.45rem;margin-top:1.2rem;color:rgba(7,22,74,.52);font-size:.76rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase}.google-review-source span{width:1.25rem;height:1.25rem}.google-review-controls{position:relative;z-index:3;display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-top:1.1rem}.google-review-dots{display:flex;gap:.45rem}.google-review-dot{width:.55rem;height:.55rem;border-radius:999px;border:0;background:rgba(7,22,74,.18);cursor:pointer;transition:width .25s ease,background .25s ease}.google-review-dot.is-active{width:2rem;background:#bfa46a}.google-review-controls a{color:#07164a;font-size:.72rem;font-weight:800;letter-spacing:.13em;text-transform:uppercase;border-bottom:1px solid rgba(191,164,106,.66);padding-bottom:.2rem}.google-review-progress{position:absolute;left:1.6rem;right:1.6rem;bottom:1rem;height:2px;background:rgba(7,22,74,.08);overflow:hidden;border-radius:999px}.google-review-progress span{display:block;width:45%;height:100%;background:linear-gradient(90deg,#bfa46a,#e0c27d);animation:googleReviewProgress 5.2s linear infinite}@keyframes googleReviewProgress{0%{transform:translateX(-110%)}100%{transform:translateX(245%)}}@media(max-width:980px){.google-reviews-shell{grid-template-columns:1fr}.google-reviews-stage{min-height:31rem}.google-review-track{min-height:20rem}}@media(max-width:640px){.google-reviews-section{padding:4.6rem 1rem}.google-reviews-copy,.google-reviews-stage{border-radius:1.55rem;padding:1.35rem}.google-review-stage-head,.google-review-controls{align-items:flex-start;flex-direction:column}.google-review-card{padding:1.35rem}.google-review-text{font-size:1rem;line-height:1.65}}`;

type ReviewItem = {
  name: string;
  time?: string;
  text?: string;
  rating?: number;
  profilePhoto?: string;
};

type ReviewPayload = {
  live?: boolean;
  placeName?: string;
  rating?: number;
  totalReviews?: number | null;
  reviewUrl?: string;
  reviews?: ReviewItem[];
};

const fallbackPayload: ReviewPayload = {
  live: false,
  placeName: 'INAYA Domestic Workers Ajman',
  rating: 5,
  totalReviews: null,
  reviewUrl: fallbackReviewUrl,
  reviews: [
    { name: 'Frasha Zlwa', time: '19 hours ago', text: 'تعامل الموظفات جيد راقي خصوصاً فراولة ومهري', rating: 5 },
    { name: 'Ekram Abdu Ekuti', time: '20 hours ago', text: 'Rated INAYA Domestic Workers Ajman 5 stars on Google.', rating: 5 },
    { name: 'Wine su Chit', time: '21 hours ago', text: 'Rated INAYA Domestic Workers Ajman 5 stars on Google.', rating: 5 },
    { name: 'Yehya Shawky', time: '12 weeks ago', text: 'Rated INAYA Domestic Workers Ajman 5 stars on Google.', rating: 5 },
    { name: 'Sara El alaoui', time: '12 weeks ago', text: 'Rated INAYA Domestic Workers Ajman 5 stars on Google.', rating: 5 }
  ]
};

const copy = {
  en: { eyebrow: 'Client Perspectives', title: 'Google Reviews from Clients', intro: 'Recent rating highlights connected with the INAYA Domestic Workers Ajman Google profile.', badge: 'Google Business Profile', live: 'Live Review Feed', ready: 'Live Ready', rating: 'Google rating highlights', write: 'Write a Google Review', view: 'View on Google' },
  ar: { eyebrow: 'آراء العملاء', title: 'تقييمات العملاء على Google', intro: 'مختارات من التقييمات المرتبطة بملف عناية للعمالة المنزلية عجمان على Google.', badge: 'ملف Google التجاري', live: 'تقييمات مباشرة', ready: 'جاهز للتحديث المباشر', rating: 'مختارات تقييمات Google', write: 'اكتب تقييماً على Google', view: 'عرض على Google' }
};

function initials(name: string) {
  return name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase() || 'G';
}

function stars(rating = 5) {
  return '★'.repeat(Math.round(rating)).padEnd(5, '☆');
}

function cardMarkup(review: ReviewItem, index: number) {
  const avatar = review.profilePhoto ? `<img src="${review.profilePhoto}" alt="${review.name}" loading="lazy" />` : initials(review.name);
  const text = review.text || 'Rated INAYA Domestic Workers Ajman 5 stars on Google.';
  return `<article class="google-review-card ${index === 0 ? 'is-active' : ''}" data-google-review-card="${index}"><div class="google-review-card__top"><div class="google-review-avatar">${avatar}</div><div><h3>${review.name}</h3><p>${review.time || 'Google review'}</p></div></div><div class="google-review-stars">${stars(review.rating || 5)}</div><p class="google-review-text">${text}</p><div class="google-review-source"><span>G</span> Google Review</div></article>`;
}

function dotsMarkup(count: number) {
  return Array.from({ length: count }).map((_, index) => `<button class="google-review-dot ${index === 0 ? 'is-active' : ''}" data-google-review-dot="${index}" aria-label="Review ${index + 1}"></button>`).join('');
}

function findTestimonialsSection() {
  const sections = Array.from(document.querySelectorAll<HTMLElement>('main > div > section'));
  return sections.find((section) => section.textContent?.includes('Whispers of Satisfaction')) || sections.find((section) => section.textContent?.includes('ثقة ورضا العملاء')) || sections.find((section) => section.dataset.googleReviews === 'true');
}

function renderGoogleReviews(section: HTMLElement, payload: ReviewPayload) {
  const lang = document.documentElement.lang === 'ar' ? 'ar' : 'en';
  const t = copy[lang];
  const reviews = payload.reviews?.length ? payload.reviews : fallbackPayload.reviews || [];
  const rating = Number(payload.rating || 5).toFixed(1);
  const reviewUrl = payload.reviewUrl || fallbackReviewUrl;
  const total = payload.totalReviews ? ` • ${payload.totalReviews}+ reviews` : '';

  section.dataset.googleReviews = 'true';
  section.className = 'google-reviews-section';
  section.innerHTML = `<div class="google-reviews-shell"><div class="google-reviews-copy"><p class="google-reviews-eyebrow">${t.eyebrow}</p><h2>${t.title}</h2><p class="google-reviews-intro">${t.intro}</p><div class="google-rating-panel"><div class="google-rating-score">${rating}</div><div><div class="google-rating-stars">★★★★★</div><p>${t.rating}${total}</p></div></div><a class="google-review-cta" href="${reviewUrl}" target="_blank" rel="noopener noreferrer">${t.write}</a></div><div class="google-reviews-stage"><div class="google-review-stage-head"><div class="google-review-badge"><span>G</span>${t.badge}</div><div class="google-live-pill"><i class="google-live-dot"></i>${payload.live ? t.live : t.ready}</div></div><div class="google-review-track">${reviews.map(cardMarkup).join('')}</div><div class="google-review-controls"><div class="google-review-dots">${dotsMarkup(reviews.length)}</div><a href="${reviewUrl}" target="_blank" rel="noopener noreferrer">${t.view}</a></div><div class="google-review-progress"><span></span></div></div></div>`;

  let active = 0;
  const cards = Array.from(section.querySelectorAll<HTMLElement>('[data-google-review-card]'));
  const dots = Array.from(section.querySelectorAll<HTMLButtonElement>('[data-google-review-dot]'));
  const setActive = (next: number) => {
    active = next;
    cards.forEach((card, index) => card.classList.toggle('is-active', index === active));
    dots.forEach((dot, index) => dot.classList.toggle('is-active', index === active));
  };
  dots.forEach((dot, index) => dot.addEventListener('click', () => setActive(index)));
  return window.setInterval(() => setActive((active + 1) % reviews.length), 5200);
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

    let interval: number | undefined;
    fetch('/api/google-reviews', { cache: 'no-store' })
      .then((response) => response.json())
      .then((payload: ReviewPayload) => {
        interval = renderGoogleReviews(section, payload);
      })
      .catch(() => {
        interval = renderGoogleReviews(section, fallbackPayload);
      });

    return () => {
      if (interval) window.clearInterval(interval);
    };
  }, []);

  return null;
}
