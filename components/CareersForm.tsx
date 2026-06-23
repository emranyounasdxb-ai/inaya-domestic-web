'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { services } from '@/lib/services';

export default function CareersForm({ locale }: { locale: string }) {
  const t = useTranslations('careers');
  const tb = useTranslations('booking');
  const lang = locale === 'ar' ? 'ar' : 'en';
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(true);
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center text-green-800">
        <div className="mb-2 text-4xl">✅</div>
        <p className="font-medium">{t('success')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:grid-cols-2">
      <div>
        <label className="label">{t('name')} *</label>
        <input name="name" required className="field" />
      </div>
      <div>
        <label className="label">{t('phone')} *</label>
        <input name="phone" required className="field" dir="ltr" />
      </div>
      <div>
        <label className="label">{t('email')}</label>
        <input name="email" type="email" className="field" dir="ltr" />
      </div>
      <div>
        <label className="label">{t('nationality')}</label>
        <input name="nationality" className="field" />
      </div>
      <div>
        <label className="label">{t('position')}</label>
        <select name="position" className="field">
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>{s.name[lang]}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="label">{t('experience')}</label>
        <input name="experience" type="number" min="0" className="field" />
      </div>
      <div className="sm:col-span-2">
        <label className="label">{t('message')}</label>
        <textarea name="message" rows={4} className="field" />
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className="btn-primary w-full">{t('submit')}</button>
      </div>
    </form>
  );
}
