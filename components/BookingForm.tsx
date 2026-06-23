'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { services } from '@/lib/services';

export default function BookingForm({ locale }: { locale: string }) {
  const t = useTranslations('booking');
  const lang = locale === 'ar' ? 'ar' : 'en';
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    if (!data.get('name')) next.name = t('required');
    const phone = String(data.get('phone') || '');
    if (!phone) next.phone = t('required');
    else if (!/^[+\d][\d\s-]{6,}$/.test(phone)) next.phone = t('invalidPhone');
    const email = String(data.get('email') || '');
    if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) next.email = t('invalidEmail');
    setErrors(next);
    if (Object.keys(next).length === 0) setDone(true);
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
        <input name="name" className="field" />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
      </div>
      <div>
        <label className="label">{t('phone')} *</label>
        <input name="phone" className="field" dir="ltr" />
        {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
      </div>
      <div>
        <label className="label">{t('email')}</label>
        <input name="email" type="email" className="field" dir="ltr" />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>
      <div>
        <label className="label">{t('area')}</label>
        <input name="area" className="field" />
      </div>
      <div>
        <label className="label">{t('service')}</label>
        <select name="service" className="field">
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>{s.name[lang]}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="label">{t('plan')}</label>
        <select name="plan" className="field">
          <option>{t('planHourly')}</option>
          <option>{t('planPartTime')}</option>
          <option>{t('planFullTime')}</option>
          <option>{t('planMonthly')}</option>
          <option>{t('planLiveIn')}</option>
        </select>
      </div>
      <div>
        <label className="label">{t('date')}</label>
        <input name="date" type="date" className="field" />
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
