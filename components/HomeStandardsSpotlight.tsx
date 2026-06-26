'use client';

import { useEffect } from 'react';

const content = {
  en: {
    title: 'Our Service Standards',
    subtitle: 'Every placement is guided by clear checks, careful matching and respectful household support.',
    cards: [
      { title: 'Verified & Documented', role: 'Identity, eligibility and document review', text: 'We review key records and service requirements before recommending a suitable household support option.', icon: '✓' },
      { title: 'Trained for Household Needs', role: 'Cleaning, care routine and service discipline', text: 'Service options are aligned with the practical expectations of each home, schedule and support type.', icon: '✦' },
      { title: 'Matched with Care', role: 'Family needs, emirate, timing and service type', text: 'We keep the process clear, private and organized so every recommendation feels relevant and respectful.', icon: '◌' }
    ]
  },
  ar: {
    title: 'معايير الخدمة لدينا',
    subtitle: 'كل خدمة تعتمد على تحقق واضح، مطابقة دقيقة، ودعم منزلي محترم يحافظ على خصوصية الأسرة.',
    cards: [
      { title: 'تحقق وتوثيق', role: 'مراجعة الهوية والأهلية والمتطلبات', text: 'نراجع السجلات الأساسية ومتطلبات الخدمة قبل اقتراح خيار دعم منزلي مناسب.', icon: '✓' },
      { title: 'تدريب يناسب احتياج المنزل', role: 'تنظيف، روتين رعاية، وانضباط في الخدمة', text: 'يتم اختيار الخدمة بما يتوافق مع توقعات المنزل والجدول ونوع الدعم المطلوب.', icon: '✦' },
      { title: 'مطابقة بعناية', role: 'احتياج الأسرة، الإمارة، التوقيت ونوع الخدمة', text: 'نحافظ على وضوح العملية وخصوصيتها وتنظيمها حتى تكون كل توصية مناسبة ومحترمة.', icon: '◌' }
    ]
  }
};

export default function HomeStandardsSpotlight() {
  useEffect(() => {
    const section = document.querySelector<HTMLElement>('main > div > section:nth-of-type(5)');
    if (!section) return;

    const lang = document.documentElement.lang === 'ar' ? 'ar' : 'en';
    const copy = content[lang];
    section.dataset.standardsSpotlight = 'true';

    const heading = section.querySelector('h2');
    const subtitle = section.querySelector('h2 + p');
    if (heading) heading.textContent = copy.title;
    if (subtitle) subtitle.textContent = copy.subtitle;

    const cards = Array.from(section.querySelectorAll<HTMLElement>('.grid.gap-6.md\\:grid-cols-3 > div'));
    cards.forEach((card, index) => {
      const item = copy.cards[index];
      if (!item) return;
      card.dataset.standardCard = 'true';

      const image = card.querySelector<HTMLElement>('[aria-label^="Candidate"]');
      if (image) {
        image.setAttribute('aria-label', item.title);
        image.innerHTML = `<div class="standard-icon-wrap"><span>${item.icon}</span></div>`;
      }

      const title = card.querySelector('h3');
      const role = card.querySelector('h3 + p');
      const text = card.querySelector('h3 + p + p');
      if (title) title.textContent = item.title;
      if (role) role.textContent = item.role;
      if (text) text.textContent = item.text;
    });
  }, []);

  return null;
}
