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
      const label = document.querySelector<HTMLElement>("main > div > section:nth-of-type(2) p:first-child");
      if (!label) return;

      timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

      gsap.set(label, { opacity: 0, y: 14, scale: 0.98, filter: 'blur(6px)' });

      timeline
        .to(label, { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', duration: 0.72 })
        .to(label, { '--trust-sheen-x': '145%', duration: 1.2, ease: 'power2.inOut' }, '-=0.2')
        .to(label, { y: -1, duration: 1.2, repeat: -1, yoyo: true, ease: 'sine.inOut' }, '-=0.05');
    });

    return () => {
      active = false;
      if (timeline) timeline.kill();
    };
  }, []);

  return null;
}
