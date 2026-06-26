'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gsap?: any;
  }
}

function loadGsap() {
  return new Promise<any>((resolve, reject) => {
    if (window.gsap) {
      resolve(window.gsap);
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>('script[data-gsap-loader]');
    if (existing) {
      existing.addEventListener('load', () => resolve(window.gsap));
      existing.addEventListener('error', reject);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js';
    script.async = true;
    script.dataset.gsapLoader = 'true';
    script.onload = () => resolve(window.gsap);
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

export default function TrustTextGsap() {
  useEffect(() => {
    let timeline: any;
    let active = true;

    loadGsap().then((gsap) => {
      if (!active) return;
      const label = document.querySelector<HTMLElement>('[data-trust-label]');
      if (!label) return;

      const dots = label.querySelectorAll<HTMLElement>('[data-trust-dot]');
      timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

      gsap.set(label, { opacity: 0, y: 12, scale: 0.98 });
      gsap.set(dots, { opacity: 0, scale: 0.45 });

      timeline
        .to(label, { opacity: 1, y: 0, scale: 1, duration: 0.65 })
        .to(dots, { opacity: 1, scale: 1, duration: 0.42, stagger: 0.1 }, '-=0.38')
        .to(label, { '--trust-sheen-x': '145%', duration: 1.35, ease: 'power2.inOut' }, '-=0.25')
        .to(dots, { scale: 1.2, duration: 0.75, repeat: -1, yoyo: true, ease: 'sine.inOut' }, '-=0.2');
    });

    return () => {
      active = false;
      if (timeline) timeline.kill();
    };
  }, []);

  return null;
}
