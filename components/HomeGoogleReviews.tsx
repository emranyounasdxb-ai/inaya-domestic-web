'use client';

import { useEffect } from 'react';

const reviewLink = 'https://search.google.com/local/writereview?placeid=ChIJxzRGAUJZXz4R8zN5ye8vn_M';

const reviews = [
  {
    name: 'Frasha Zlwa',
    time: '19 hours ago',
    text: 'تعامل الموظفات جيد راقي خصوصاً فراولة ومهري',
    initials: 'FZ'
  },
  {
    name: 'Ekram Abdu Ekuti',
    time: '20 hours ago',
    text: 'Rated INAYA Domestic Workers Ajman 5 stars on Google.',
    initials: 'EA'
  },
  {
    name: 'Wine su Chit',
    time: '21 hours ago',
    text: 'Rated INAYA Domestic Workers Ajman 5 stars on Google.',
    initials: 'WC'
  },
  {
    name: 'Yehya Shawky',
    time: '12 weeks ago',
    text: 'Rated INAYA Domestic Workers Ajman 5 stars on Google.',
    initials: 'YS'
  },
  {
    name: 'Sara El alaoui',
    time: '12 weeks ago',
    text: 'Rated INAYA Domestic Workers Ajman 5 stars on Google.',
    initials: 'SA'
  },
  {
    name: 'Chrizanne',
    time: '12 weeks ago',
    text: 'Rated INAYA Domestic Workers Ajman 5 stars on Google.',
    initials: 'CH'
  },
  {
    name: 'Olive raj Singh',
    time: '12 weeks ago',
    text: 'Rated INAYA Domestic Workers Ajman 5 stars on Google.',
    initials: 'OS'
  }
];

const copy = {
  en: {
    eyebrow: 'Client Perspectives',
    title: 'Google 5-Star Highlights',
    intro: 'Real Google ratings shared by clients for INAYA Domestic Workers Ajman.',
    badge: 'Verified Google Reviews',
    rating: 'Selected 5-star reviews',
    write: 'Write a Google Review',
    view: 'Open Google Review Form',
    source: 'Google rating highlight'
  },
  ar: {
    eyebrow: 'آراء العملاء',
    title: 'تقييمات Google بخمس نجوم',
    intro: 'تقييمات حقيقية شاركها العملاء على Google لعناية للعمالة المنزلية عجمان.',
    badge: 'تقييمات Google',
    rating: 'مختارات من تقييمات 5 نجوم',
    write: 'اكتب تقييماً على Google',
    view: 'افتح نموذج التقييم',
    source: 'تقييم Google'
  }
};

function cardMarkup(review: typeof reviews[number], index: number) {
  return `
    <article class="google-review-card ${index === 0 ? 'is-active' : ''}" data-google-review-card="${index}">
      <div class="google-review-card__top">
        <div class="google-review-avatar">${review.initials}</div>
        <div>
          <h3>${review.name}</h3>
          <p>${review.time}</p>
        </div>
      </div>
      <div class="google-review-stars" aria-label="5 stars">★★★★★</div>
      <p class="google-review-text">${review.text}</p>
      <div class="google-review-source"><span>G</span> Google Review</div>
    </article>
  `;
}

function dotsMarkup() {
  return reviews
    .map((_, index) => `<button class="google-review-dot ${index === 0 ? 'is-active' : ''}" data-google-review-dot="${index}" aria-label="Review ${index + 1}"></button>`)
    .join('');
}

function findTestimonialsSection() {
  const sections = Array.from(document.querySelectorAll<HTMLElement>('main > div > section'));
  return (
    sections.find((section) => section.textContent?.includes('Whispers of Satisfaction')) ||
    sections.find((section) => section.textContent?.includes('ثقة ورضا العملاء')) ||
    sections.find((section) => section.dataset.googleReviews === 'true')
  );
}

export default function HomeGoogleReviews() {
  useEffect(() => {
    const path = window.location.pathname.replace(/\/$/, '');
    if (path !== '/en' && path !== '/ar') return;

    const section = findTestimonialsSection();
    if (!section || section.dataset.googleReviews === 'true') return;

    const lang = document.documentElement.lang === 'ar' ? 'ar' : 'en';
    const t = copy[lang];
    section.dataset.googleReviews = 'true';
    section.className = 'google-reviews-section';
    section.innerHTML = `
      <div class="google-reviews-shell">
        <div class="google-reviews-copy">
          <p class="google-reviews-eyebrow">${t.eyebrow}</p>
          <h2>${t.title}</h2>
          <p class="google-reviews-intro">${t.intro}</p>
          <div class="google-rating-panel">
            <div class="google-rating-score">5.0</div>
            <div>
              <div class="google-rating-stars">★★★★★</div>
              <p>${t.rating}</p>
            </div>
          </div>
          <a class="google-review-cta" href="${reviewLink}" target="_blank" rel="noopener noreferrer">${t.write}</a>
        </div>
        <div class="google-reviews-stage">
          <div class="google-review-badge"><span>G</span>${t.badge}</div>
          <div class="google-review-track">
            ${reviews.map(cardMarkup).join('')}
          </div>
          <div class="google-review-controls">
            <div class="google-review-dots">${dotsMarkup()}</div>
            <a href="${reviewLink}" target="_blank" rel="noopener noreferrer">${t.view}</a>
          </div>
          <div class="google-review-progress"><span></span></div>
        </div>
      </div>
    `;

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
