'use client';

import { useEffect } from 'react';
import gsap from 'gsap';

export default function TrustTextGsap() {
  useEffect(() => {
    const label = document.querySelector<HTMLElement>('[data-trust-label]');
    if (!label) return;

    const dots = label.querySelectorAll<HTMLElement>('[data-trust-dot]');
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    gsap.set(label, { opacity: 0, y: 10, scale: 0.98 });
    gsap.set(dots, { opacity: 0, scale: 0.45 });

    timeline
      .to(label, { opacity: 1, y: 0, scale: 1, duration: 0.65 })
      .to(dots, { opacity: 1, scale: 1, duration: 0.42, stagger: 0.1 }, '-=0.38')
      .to(label, { '--trust-sheen-x': '140%', duration: 1.35, ease: 'power2.inOut' }, '-=0.25')
      .to(dots, { scale: 1.22, duration: 0.75, repeat: -1, yoyo: true, ease: 'sine.inOut' }, '-=0.2');

    return () => timeline.kill();
  }, []);

  return null;
}
