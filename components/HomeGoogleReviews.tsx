'use client';

import { useEffect } from 'react';

const fallbackReviewUrl = 'https://search.google.com/local/writereview?placeid=ChIJxzRGAUJZXz4R8zN5ye8vn_M';

const styles = `
.gbr-section,.gbr-section *{box-sizing:border-box}.gbr-section{position:relative;overflow:hidden;padding:6rem 1.25rem;background:radial-gradient(circle at 8% 12%,rgba(191,164,106,.16),transparent 26rem),radial-gradient(circle at 92% 88%,rgba(7,22,74,.08),transparent 30rem),linear-gradient(180deg,#fbfaf7,#f4eee4);color:#07164a}.gbr-shell{display:grid;grid-template-columns:minmax(0,.88fr) minmax(0,1.12fr);max-width:82rem;margin:0 auto;border:1px solid rgba(255,255,255,.86);border-radius:2rem;background:rgba(255,255,255,.52);box-shadow:0 34px 95px rgba(7,22,74,.11),inset 0 1px 0 rgba(255,255,255,.95);overflow:hidden;backdrop-filter:blur(18px)}.gbr-left{min-width:0;padding:clamp(2rem,4vw,3.4rem);background:linear-gradient(145deg,rgba(255,255,255,.86),rgba(255,255,255,.45));border-right:1px solid rgba(191,164,106,.18)}.gbr-eyebrow{margin:0;color:#9a7930;font-size:.72rem;font-weight:800;letter-spacing:.28em;text-transform:uppercase}.gbr-eyebrow:after{content:'';display:block;width:3rem;height:1px;margin-top:.7rem;background:#bfa46a}.gbr-title{margin:1.35rem 0 0!important;color:#07164a!important;font-family:var(--font-heading),Inter,sans-serif;font-size:clamp(2.5rem,4.7vw,4.85rem)!important;line-height:.96!important;letter-spacing:-.075em!important}.gbr-title span{display:block;color:#aa7a1e;font-family:Georgia,serif;font-style:italic;font-weight:500;letter-spacing:-.055em}.gbr-intro{max-width:34rem;margin:1.35rem 0 0;color:rgba(7,22,74,.68);font-size:1.06rem;line-height:1.75}.gbr-rating{display:flex;align-items:center;gap:1.35rem;width:min(100%,32rem);margin-top:2rem;padding:1rem 1.15rem;border:1px solid rgba(191,164,106,.24);border-radius:1.25rem;background:rgba(255,255,255,.76);box-shadow:0 18px 45px rgba(7,22,74,.055),inset 0 1px 0 rgba(255,255,255,.9)}.gbr-score{font-family:Georgia,serif;font-size:3rem;line-height:1;color:#07164a}.gbr-divider{width:1px;height:3rem;background:rgba(191,164,106,.28)}.gbr-stars{color:#c58d18;letter-spacing:.08em}.gbr-rating p{margin:.25rem 0 0;color:rgba(7,22,74,.62);font-size:.88rem;font-weight:700}.gbr-cta{display:inline-flex;align-items:center;gap:.85rem;width:max-content;margin-top:1.65rem;padding:1rem 1.45rem;border:1px solid rgba(191,164,106,.55);border-radius:999px;background:#07164a;color:#fff;text-decoration:none;font-size:.78rem;font-weight:800;letter-spacing:.15em;text-transform:uppercase;box-shadow:0 22px 50px rgba(7,22,74,.18);transition:transform .25s ease,background .25s ease}.gbr-cta:hover{transform:translateY(-2px);background:#0b1d55}.gbr-g{display:inline-flex;align-items:center;justify-content:center;width:1.55rem;height:1.55rem;border-radius:999px;background:#fff;color:#4285f4;font-weight:900;letter-spacing:0}.gbr-sync{display:flex;flex-wrap:wrap;gap:1rem;margin-top:2rem;color:rgba(7,22,74,.62);font-size:.92rem}.gbr-sync span{display:inline-flex;align-items:center;gap:.45rem}.gbr-dot{width:.48rem;height:.48rem;border-radius:999px;background:#22c55e;box-shadow:0 0 0 .28rem rgba(34,197,94,.12)}.gbr-right{min-width:0;padding:2.1rem;background:linear-gradient(145deg,rgba(255,255,255,.62),rgba(248,246,240,.45))}.gbr-card{position:relative;min-width:0;border:1px solid rgba(255,255,255,.88);border-radius:1.7rem;background:rgba(255,255,255,.76);padding:1.55rem;box-shadow:0 24px 70px rgba(7,22,74,.08),inset 0 1px 0 rgba(255,255,255,.95);overflow:hidden}.gbr-card:before{content:'';position:absolute;right:-6rem;top:-6rem;width:17rem;height:17rem;border-radius:999px;background:radial-gradient(circle,rgba(191,164,106,.18),transparent 68%);filter:blur(10px)}.gbr-head{position:relative;z-index:1;display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-bottom:1.35rem}.gbr-business{display:flex;align-items:center;gap:.8rem;color:#07164a;font-size:1.05rem;font-weight:800}.gbr-live{display:inline-flex;align-items:center;gap:.55rem;border:1px solid rgba(34,197,94,.24);border-radius:999px;background:rgba(230,255,240,.86);padding:.65rem .95rem;color:#087b3d;font-size:.82rem;font-weight:800}.gbr-feature{position:relative;z-index:1;display:none;min-height:15rem;border:1px solid rgba(191,164,106,.55);border-radius:1.35rem;background:linear-gradient(145deg,rgba(255,255,255,.94),rgba(255,255,255,.78));padding:1.8rem;box-shadow:0 20px 55px rgba(7,22,74,.08),inset 4px 0 0 rgba(191,164,106,.78)}.gbr-feature.is-active{display:block}.gbr-feature-head{display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:1rem;align-items:center}.gbr-avatar{position:relative;display:flex;align-items:center;justify-content:center;width:4rem;height:4rem;border-radius:999px;background:linear-gradient(135deg,#07164a,#0f2466);color:#fff;font-size:1.1rem;font-weight:900;box-shadow:0 14px 34px rgba(7,22,74,.18)}.gbr-avatar img{width:100%;height:100%;border-radius:999px;object-fit:cover}.gbr-check{position:absolute;right:-.15rem;bottom:-.15rem;display:flex;align-items:center;justify-content:center;width:1.25rem;height:1.25rem;border:2px solid #fff;border-radius:999px;background:#c99d35;color:#fff;font-size:.75rem}.gbr-name{margin:0;color:#07164a;font-size:1.12rem;font-weight:800}.gbr-time{margin:.2rem 0 0;color:rgba(7,22,74,.52);font-size:.84rem;font-weight:700}.gbr-feature-text{max-width:38rem;margin:1.15rem 0 0;color:rgba(16,24,39,.82);font-size:1.15rem;line-height:1.65}.gbr-verified{display:flex;align-items:center;gap:.55rem;margin-top:1.2rem;color:rgba(7,22,74,.5);font-size:.82rem;font-weight:700}.gbr-mini-wrap{position:relative;z-index:1;min-height:9rem;margin-top:1rem}.gbr-mini-set{display:none;grid-template-columns:repeat(3,minmax(0,1fr));gap:.85rem}.gbr-mini-set.is-active{display:grid}.gbr-mini{min-width:0;border:1px solid rgba(191,164,106,.18);border-radius:1.05rem;background:rgba(255,255,255,.82);padding:1rem;box-shadow:0 14px 36px rgba(7,22,74,.055)}.gbr-mini-top{display:flex;gap:.6rem;align-items:center}.gbr-mini-avatar{display:flex;align-items:center;justify-content:center;flex:0 0 2.15rem;width:2.15rem;height:2.15rem;border-radius:999px;background:#0f6b45;color:#fff;font-size:.72rem;font-weight:900}.gbr-mini h4{margin:0;color:#07164a;font-size:.78rem;font-weight:800}.gbr-mini small{color:rgba(7,22,74,.48);font-size:.68rem}.gbr-mini p{margin:.5rem 0 0;color:rgba(16,24,39,.72);font-size:.76rem;line-height:1.45}.gbr-bottom{position:relative;z-index:1;display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-top:1.25rem}.gbr-nav{display:flex;align-items:center;gap:.7rem}.gbr-btn{display:flex;align-items:center;justify-content:center;width:2.55rem;height:2.55rem;border:1px solid rgba(7,22,74,.12);border-radius:999px;background:rgba(255,255,255,.8);color:#07164a;font-size:1.25rem;cursor:pointer}.gbr-dots{display:flex;gap:.42rem}.gbr-dot-btn{width:.55rem;height:.55rem;border:0;border-radius:999px;background:rgba(7,22,74,.16);cursor:pointer;transition:width .25s ease,background .25s ease}.gbr-dot-btn.is-active{width:1.9rem;background:#bfa46a}.gbr-view{display:inline-flex;align-items:center;gap:.55rem;color:#07164a;text-decoration:none;font-size:.86rem;font-weight:800}.gbr-view span{display:flex;align-items:center;justify-content:center;width:1.9rem;height:1.9rem;border:1px solid rgba(191,164,106,.45);border-radius:.55rem;color:#b48724}.gbr-progress{height:2px;margin-top:1rem;background:rgba(7,22,74,.08);overflow:hidden;border-radius:999px}.gbr-progress span{display:block;width:35%;height:100%;background:linear-gradient(90deg,#bfa46a,#e0c27d);animation:gbrProgress 5.2s linear infinite}@keyframes gbrProgress{0%{transform:translateX(-110%)}100%{transform:translateX(330%)}}@media(max-width:1100px){.gbr-shell{grid-template-columns:1fr}.gbr-left{border-right:0;border-bottom:1px solid rgba(191,164,106,.16)}.gbr-title{font-size:clamp(2.4rem,8vw,4rem)!important}}@media(max-width:720px){.gbr-section{padding:4rem 1rem}.gbr-left,.gbr-right{padding:1.35rem}.gbr-head,.gbr-bottom{align-items:flex-start;flex-direction:column}.gbr-feature-head{grid-template-columns:auto minmax(0,1fr)}.gbr-feature-head .gbr-stars{grid-column:1/-1}.gbr-feature-text{font-size:1rem}.gbr-mini-set{grid-template-columns:1fr}.gbr-mini-wrap{min-height:23rem}.gbr-title{font-size:clamp(2.2rem,12vw,3.4rem)!important}.gbr-rating{align-items:flex-start;flex-direction:column}.gbr-divider{width:100%;height:1px}.gbr-cta{white-space:normal}}`;

type ReviewItem = { name: string; time?: string; text?: string; rating?: number; profilePhoto?: string };
type ReviewPayload = { live?: boolean; placeName?: string; rating?: number; totalReviews?: number | null; reviewUrl?: string; reviews?: ReviewItem[] };

const fallbackPayload: ReviewPayload = {
  live: false,
  placeName: 'INAYA Domestic Workers Ajman',
  rating: 5,
  totalReviews: null,
  reviewUrl: fallbackReviewUrl,
  reviews: [
    { name: 'Frasha Zlwa', time: '19 hours ago', text: 'تعامل الموظفات جيد راقي خصوصاً فراولة ومهري', rating: 5 },
    { name: 'Ekram Abdu Ekuti', time: '20 hours ago', text: 'Rated INAYA Domestic Workers Ajman 5 stars on Google. Highly professional, reliable, and caring team.', rating: 5 },
    { name: 'Wine su Chit', time: '21 hours ago', text: 'Rated INAYA Domestic Workers Ajman 5 stars on Google.', rating: 5 },
    { name: 'Yehya Shawky', time: '12 weeks ago', text: 'Rated INAYA Domestic Workers Ajman 5 stars on Google.', rating: 5 },
    { name: 'Sara El alaoui', time: '12 weeks ago', text: 'Rated INAYA Domestic Workers Ajman 5 stars on Google.', rating: 5 },
    { name: 'Chrizanne', time: '12 weeks ago', text: 'Rated INAYA Domestic Workers Ajman 5 stars on Google.', rating: 5 },
    { name: 'Olive raj Singh', time: '12 weeks ago', text: 'Rated INAYA Domestic Workers Ajman 5 stars on Google.', rating: 5 }
  ]
};

const copy = {
  en: { eyebrow: 'Client Perspectives', titleA: 'Google Reviews', titleB: 'from Clients', intro: 'Real feedback from families and clients who trust INAYA Domestic Workers Ajman for professional service and peace of mind.', badge: 'Google Business Profile', live: 'Live Updates', ready: 'Live Sync Ready', rating: 'Google Business Profile highlights', write: 'Write a Google Review', view: 'View on Google', connected: 'Connected to Google Business Profile' },
  ar: { eyebrow: 'آراء العملاء', titleA: 'تقييمات Google', titleB: 'من العملاء', intro: 'آراء حقيقية من العملاء الذين يثقون بعناية للعمالة المنزلية عجمان للحصول على خدمة مهنية وراحة بال.', badge: 'ملف Google التجاري', live: 'تحديثات مباشرة', ready: 'جاهز للمزامنة', rating: 'مختارات من ملف Google التجاري', write: 'اكتب تقييماً على Google', view: 'عرض على Google', connected: 'متصل بملف Google التجاري' }
};

function esc(value = '') { return value.replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char] || char)); }
function initials(name: string) { return name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase() || 'G'; }
function stars(rating = 5) { return '★'.repeat(Math.round(rating)).padEnd(5, '☆'); }
function googleIcon(className = 'gbr-g') { return `<span class="${className}">G</span>`; }

function featureCard(review: ReviewItem, index: number) {
  const avatar = review.profilePhoto ? `<img src="${esc(review.profilePhoto)}" alt="${esc(review.name)}" loading="lazy" />` : esc(initials(review.name));
  const text = review.text || 'Rated INAYA Domestic Workers Ajman 5 stars on Google.';
  return `<article class="gbr-feature ${index === 0 ? 'is-active' : ''}" data-gbr-card="${index}"><div class="gbr-feature-head"><div class="gbr-avatar">${avatar}<span class="gbr-check">✓</span></div><div><h3 class="gbr-name">${esc(review.name)}</h3><p class="gbr-time">${esc(review.time || 'Google review')}</p></div><div class="gbr-stars">${stars(review.rating || 5)}</div></div><p class="gbr-feature-text">${esc(text)}</p><div class="gbr-verified">${googleIcon()} Verified Google Review</div></article>`;
}

function miniCard(review: ReviewItem) {
  return `<article class="gbr-mini"><div class="gbr-mini-top"><div class="gbr-mini-avatar">${esc(initials(review.name))}</div><div><h4>${esc(review.name)}</h4><small>${esc(review.time || 'Google review')}</small></div></div><div class="gbr-stars" style="margin-top:.65rem;font-size:.82rem">${stars(review.rating || 5)}</div><p>${esc(review.text || 'Rated INAYA 5 stars on Google.')}</p></article>`;
}

function miniSet(reviews: ReviewItem[], activeIndex: number) {
  const picks = [1, 2, 3].map((offset) => reviews[(activeIndex + offset) % reviews.length]);
  return `<div class="gbr-mini-set ${activeIndex === 0 ? 'is-active' : ''}" data-gbr-set="${activeIndex}">${picks.map(miniCard).join('')}</div>`;
}

function dotsMarkup(count: number) { return Array.from({ length: count }).map((_, index) => `<button class="gbr-dot-btn ${index === 0 ? 'is-active' : ''}" data-gbr-dot="${index}" aria-label="Review ${index + 1}"></button>`).join(''); }
function findTestimonialsSection() { const sections = Array.from(document.querySelectorAll<HTMLElement>('main > div > section')); return sections.find((section) => section.textContent?.includes('Whispers of Satisfaction')) || sections.find((section) => section.textContent?.includes('ثقة ورضا العملاء')) || sections.find((section) => section.dataset.googleReviews === 'true'); }

function renderGoogleReviews(section: HTMLElement, payload: ReviewPayload) {
  const lang = document.documentElement.lang === 'ar' ? 'ar' : 'en';
  const t = copy[lang];
  const reviews = payload.reviews?.length ? payload.reviews : fallbackPayload.reviews || [];
  const rating = Number(payload.rating || 5).toFixed(1);
  const reviewUrl = payload.reviewUrl || fallbackReviewUrl;
  const total = payload.totalReviews ? ` • ${payload.totalReviews}+ reviews` : '';
  section.dataset.googleReviews = 'true';
  section.className = 'gbr-section';
  section.innerHTML = `<div class="gbr-shell"><div class="gbr-left"><p class="gbr-eyebrow">${t.eyebrow}</p><h2 class="gbr-title">${t.titleA}<span>${t.titleB}</span></h2><p class="gbr-intro">${t.intro}</p><div class="gbr-rating"><div class="gbr-score">${rating}</div><div class="gbr-divider"></div><div><div class="gbr-stars">★★★★★</div><p>${t.rating}${total}</p></div></div><a class="gbr-cta" href="${reviewUrl}" target="_blank" rel="noopener noreferrer">${googleIcon()}${t.write}<span>→</span></a><div class="gbr-sync"><span>◇ ${t.connected}</span><span><i class="gbr-dot"></i>${payload.live ? t.live : t.ready}</span></div></div><div class="gbr-right"><div class="gbr-card"><div class="gbr-head"><div class="gbr-business">${googleIcon('gbr-g')}${t.badge}</div><div class="gbr-live"><i class="gbr-dot"></i>${payload.live ? t.live : t.ready}</div></div><div class="gbr-feature-wrap">${reviews.map(featureCard).join('')}</div><div class="gbr-mini-wrap">${reviews.map((_, index) => miniSet(reviews, index)).join('')}</div><div class="gbr-bottom"><div class="gbr-nav"><button class="gbr-btn" data-gbr-prev aria-label="Previous review">‹</button><div class="gbr-dots">${dotsMarkup(reviews.length)}</div><button class="gbr-btn" data-gbr-next aria-label="Next review">›</button></div><a class="gbr-view" href="${reviewUrl}" target="_blank" rel="noopener noreferrer">${t.view}<span>↗</span></a></div><div class="gbr-progress"><span></span></div></div></div></div>`;
  let active = 0;
  const cards = Array.from(section.querySelectorAll<HTMLElement>('[data-gbr-card]'));
  const sets = Array.from(section.querySelectorAll<HTMLElement>('[data-gbr-set]'));
  const dots = Array.from(section.querySelectorAll<HTMLButtonElement>('[data-gbr-dot]'));
  const setActive = (next: number) => { active = (next + reviews.length) % reviews.length; cards.forEach((card, index) => card.classList.toggle('is-active', index === active)); sets.forEach((set, index) => set.classList.toggle('is-active', index === active)); dots.forEach((dot, index) => dot.classList.toggle('is-active', index === active)); };
  dots.forEach((dot, index) => dot.addEventListener('click', () => setActive(index)));
  section.querySelector('[data-gbr-prev]')?.addEventListener('click', () => setActive(active - 1));
  section.querySelector('[data-gbr-next]')?.addEventListener('click', () => setActive(active + 1));
  return window.setInterval(() => setActive(active + 1), 5200);
}

export default function HomeGoogleReviews() {
  useEffect(() => {
    const path = window.location.pathname.replace(/\/$/, '');
    if (path !== '/en' && path !== '/ar') return;
    if (!document.getElementById('gbr-styles')) { const style = document.createElement('style'); style.id = 'gbr-styles'; style.textContent = styles; document.head.appendChild(style); }
    const section = findTestimonialsSection();
    if (!section || section.dataset.googleReviews === 'true') return;
    let interval: number | undefined;
    fetch('/api/google-reviews', { cache: 'no-store' }).then((response) => response.json()).then((payload: ReviewPayload) => { interval = renderGoogleReviews(section, payload); }).catch(() => { interval = renderGoogleReviews(section, fallbackPayload); });
    return () => { if (interval) window.clearInterval(interval); };
  }, []);
  return null;
}
