'use client';

import { useEffect } from 'react';

const countries = [
  { flag: '🇱🇰', en: 'Sri Lanka', ar: 'سريلانكا' },
  { flag: '🇳🇵', en: 'Nepal', ar: 'نيبال' },
  { flag: '🇲🇲', en: 'Myanmar', ar: 'ميانمار' },
  { flag: '🇵🇭', en: 'Philippines', ar: 'الفلبين' },
  { flag: '🇮🇳', en: 'India', ar: 'الهند' },
  { flag: '🇧🇩', en: 'Bangladesh', ar: 'بنغلاديش' },
  { flag: '🇪🇹', en: 'Ethiopia', ar: 'إثيوبيا' },
  { flag: '🇰🇪', en: 'Kenya', ar: 'كينيا' },
  { flag: '🇬🇭', en: 'Ghana', ar: 'غانا' },
  { flag: '🇺🇬', en: 'Uganda', ar: 'أوغندا' },
  { flag: '🇸🇱', en: 'Sierra Leone', ar: 'سيراليون' },
  { flag: '🇮🇩', en: 'Indonesia', ar: 'إندونيسيا' }
];

const copy = {
  en: {
    eyebrow: 'Available Nationalities',
    title: 'Countries We Source Domestic Workers From',
    text: 'INAYA provides domestic worker profiles from trusted source countries based on availability, experience, documents, language preference and family needs across the UAE.',
    note: 'Profiles are subject to current availability, documentation and service requirements.',
    cta: 'Explore Countries',
    tag: 'Available profiles'
  },
  ar: {
    eyebrow: 'الجنسيات المتوفرة',
    title: 'الدول التي نوفر منها العمالة المنزلية',
    text: 'توفر عناية ملفات عمالة منزلية من عدة دول حسب التوفر والخبرة والمستندات واللغة واحتياج الأسرة داخل الإمارات.',
    note: 'تخضع الملفات للتوفر الحالي والمستندات ومتطلبات الخدمة.',
    cta: 'استكشف الدول',
    tag: 'ملفات متاحة'
  }
};

function countryCards(lang: 'en' | 'ar') {
  const c = copy[lang];
  return countries
    .map((country) => {
      const name = lang === 'ar' ? country.ar : country.en;
      return `
        <article class="home-country-card">
          <div class="home-country-flag" aria-hidden="true">${country.flag}</div>
          <div class="home-country-content">
            <h3>${name}</h3>
            <p>${c.tag}</p>
          </div>
        </article>
      `;
    })
    .join('');
}

export default function HomeCountryAvailability() {
  useEffect(() => {
    const path = window.location.pathname.replace(/\/$/, '');
    if (path !== '/en' && path !== '/ar') return;
    if (document.querySelector('[data-home-country-availability="true"]')) return;

    const lang = document.documentElement.lang === 'ar' ? 'ar' : 'en';
    const t = copy[lang];
    const anchor = document.querySelector('main > div > section:nth-of-type(2)');
    if (!anchor?.parentElement) return;

    const section = document.createElement('section');
    section.dataset.homeCountryAvailability = 'true';
    section.className = 'home-country-section';
    section.innerHTML = `
      <div class="home-country-shell">
        <div class="home-country-heading">
          <p>${t.eyebrow}</p>
          <h2>${t.title}</h2>
          <span></span>
          <div>${t.text}</div>
        </div>
        <div class="home-country-scroll" dir="ltr">
          ${countryCards(lang)}
        </div>
        <div class="home-country-footer">
          <p>${t.note}</p>
          <a href="/${lang}/services/countries-we-source-from">${t.cta}</a>
        </div>
      </div>
    `;

    anchor.parentElement.insertBefore(section, anchor.nextSibling);
  }, []);

  return null;
}
