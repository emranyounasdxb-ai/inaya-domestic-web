'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('contact');
  const tb = useTranslations('booking');
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    if (!data.get('name')) next.name = tb('required');
    const email = String(data.get('email') || '');
    if (!email) next.email = tb('required');
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) next.email = tb('invalidEmail');
    if (!data.get('message')) next.message = tb('required');
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
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <div>
        <label className="label">{t('name')} *</label>
        <input name="name" className="field" />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
      </div>
      <div>
        <label className="label">{t('email')} *</label>
        <input name="email" type="email" className="field" dir="ltr" />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>
      <div>
        <label className="label">{t('phone')}</label>
        <input name="phone" className="field" dir="ltr" />
      </div>
      <div>
        <label className="label">{t('message')} *</label>
        <textarea name="message" rows={5} className="field" />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>
      <button type="submit" className="btn-primary w-full">{t('submit')}</button>
    </form>
  );
}
