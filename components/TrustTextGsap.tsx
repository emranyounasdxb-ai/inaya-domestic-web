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

function splitText(label: HTMLElement) {
  const original = label.textContent || '';
  const words = original.trim().split(/\s+/);
  label.textContent = '';

  words.forEach((word, wordIndex) => {
    const wordWrap = document.createElement('span');
    wordWrap.className = 'trust-gsap-word';

    Array.from(word).forEach((letter) => {
      const letterSpan = document.createElement('span');
      letterSpan.className = 'trust-gsap-letter';
      letterSpan.textContent = letter;
      wordWrap.appendChild(letterSpan);
    });

    label.appendChild(wordWrap);
    if (wordIndex < words.length - 1) label.appendChild(document.createTextNode(' '));
  });

  return original;
}

export default function TrustTextGsap() {
  useEffect(() => {
    let timeline: any;
    let active = true;
    let originalText = '';

    loadGsap().then((gsap) => {
      if (!active) return;
      const label = document.querySelector<HTMLElement>('main > div > section:nth-of-type(2) p:first-child');
      if (!label) return;

      originalText = splitText(label);
      const letters = label.querySelectorAll<HTMLElement>('.trust-gsap-letter');
      const words = label.querySelectorAll<HTMLElement>('.trust-gsap-word');

      timeline = gsap.timeline({ defaults: { ease: 'power4.out' } });

      gsap.set(label, { opacity: 1 });
      gsap.set(words, { perspective: 700 });
      gsap.set(letters, {
        yPercent: 130,
        opacity: 0,
        rotateX: -85,
        filter: 'blur(8px)',
        transformOrigin: '50% 100%'
      });

      timeline
        .to(letters, {
          yPercent: 0,
          opacity: 1,
          rotateX: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          stagger: { each: 0.018, from: 'start' }
        })
        .to(label, { '--trust-line-scale': 1, duration: 0.65, ease: 'power3.inOut' }, '-=0.35')
        .to(label, { '--trust-sheen-x': '150%', duration: 1.1, ease: 'power2.inOut' }, '-=0.45')
        .to(label, { y: -1, duration: 1.35, repeat: -1, yoyo: true, ease: 'sine.inOut' }, '-=0.15');
    });

    return () => {
      active = false;
      if (timeline) timeline.kill();
      const label = document.querySelector<HTMLElement>('main > div > section:nth-of-type(2) p:first-child');
      if (label && originalText) label.textContent = originalText;
    };
  }, []);

  return null;
}
