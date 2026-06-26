'use client';

import { useEffect } from 'react';

const icons = ['⌁', '✣', '◈', '▣', '◎'];
const labels = ['01', '02', '03', '04', '05'];

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
        icon.className = 'vetting-icon';
        icon.innerHTML = `<span class="vetting-number">${labels[index] || ''}</span><span class="vetting-symbol">${icons[index] || '✦'}</span>`;
      }
    });
  }, []);

  return null;
}
