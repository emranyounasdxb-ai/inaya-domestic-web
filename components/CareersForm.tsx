'use client';

import { useId, useState } from 'react';
import LocalFormConfirmation from './LocalFormConfirmation';
import { useTranslations } from 'next-intl';
import { services } from '@/lib/services';

export default function CareersForm({ locale }: { locale: string }) {
  const t = useTranslations('careers');
  const tb = useTranslations('booking');
  const lang = locale === 'ar' ? 'ar' : 'en';
  const formId = useId();
  const fieldId = (name: string) => `${formId}-${name}`;
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(true);
  }

  if (done) {
    return (
      <LocalFormConfirmation message={t('success')} symbol="✅" />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:grid-cols-2">
      <div>
        <label htmlFor={fieldId('name')} className="label">{t('name')} *</label>
        <input id={fieldId('name')} name="name" required className="field" />
      </div>
      <div>
        <label htmlFor={fieldId('phone')} className="label">{t('phone')} *</label>
        <input id={fieldId('phone')} name="phone" required className="field" dir="ltr" />
      </div>
      <div>
        <label htmlFor={fieldId('email')} className="label">{t('email')}</label>
        <input id={fieldId('email')} name="email" type="email" className="field" dir="ltr" />
      </div>
      <div>
        <label htmlFor={fieldId('nationality')} className="label">{t('nationality')}</label>
        <input id={fieldId('nationality')} name="nationality" className="field" />
      </div>
      <div>
        <label htmlFor={fieldId('position')} className="label">{t('position')}</label>
        <select id={fieldId('position')} name="position" className="field">
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>{s.name[lang]}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor={fieldId('experience')} className="label">{t('experience')}</label>
        <input id={fieldId('experience')} name="experience" type="number" min="0" className="field" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor={fieldId('message')} className="label">{t('message')}</label>
        <textarea id={fieldId('message')} name="message" rows={4} className="field" />
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className="btn-primary w-full">{t('submit')}</button>
      </div>
    </form>
  );
}
