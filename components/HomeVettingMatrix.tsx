'use client';

import { useEffect } from 'react';

function identityPrototype() {
  return `
    <div class="identity-prototype" aria-hidden="true">
      <div class="identity-glow"></div>
      <div class="identity-ring"></div>
      <div class="identity-disc">
        <svg class="identity-fingerprint" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M38 76c0-18 10-34 25-34 13 0 22 10 22 24 0 16-7 26-7 36" />
          <path d="M48 83c0-13 6-25 17-25 8 0 13 6 13 15 0 11-5 18-5 28" />
          <path d="M57 94c0-8 2-17 9-17 5 0 7 4 7 9 0 7-3 11-3 16" />
          <path d="M31 63c2-21 15-39 34-39 18 0 32 14 32 34 0 8-1 14-3 20" />
          <path d="M28 85c4-8 5-16 5-24" />
          <path d="M91 91c4-9 8-19 8-34" />
          <path d="M42 35c6-7 14-11 24-11" />
        </svg>
        <span class="identity-check">✓</span>
      </div>
      <div class="identity-shadow"></div>
    </div>
  `;
}

export default function HomeVettingMatrix() {
  useEffect(() => {
    const section = document.querySelector<HTMLElement>('main > div > section:nth-of-type(6)');
    if (!section) return;

    section.dataset.vettingMatrix = 'true';

    const titleLine = section.querySelector<HTMLElement>('h2 + div');
    if (titleLine) titleLine.classList.add('vetting-title-line');

    const items = Array.from(section.querySelectorAll<HTMLElement>('.md\\:grid-cols-5 > div'));
    items.forEach((item, index) => {
      item.dataset.vettingTile = String(index + 1);
      const icon = item.querySelector<HTMLElement>('div:first-child');
      if (icon) {
        icon.className = index === 0 ? 'vetting-icon identity-prototype-holder' : 'vetting-icon';
        icon.innerHTML = index === 0 ? identityPrototype() : '';
      }
    });
  }, []);

  return null;
}
