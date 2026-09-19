'use client';

import { useEffect, useId, useState } from 'react';
import LocalFormConfirmation from './LocalFormConfirmation';
import { useTranslations } from 'next-intl';
import { services } from '@/lib/services';

export default function BookingForm({ locale }: { locale: string }) {
  const t = useTranslations('booking');
  const lang = locale === 'ar' ? 'ar' : 'en';
  const formId = useId();
  const fieldId = (name: string) => `${formId}-${name}`;
  const fieldA11y = (name: string) => ({
    id: fieldId(name),
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `${fieldId(name)}-error` : undefined
  });
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [selectedService, setSelectedService] = useState(services[0].slug);

  useEffect(() => {
    const syncServiceFromUrl = () => {
      const requested = new URLSearchParams(window.location.search).get('service');
      const selected = requested && services.some((service) => service.slug === requested)
        ? requested
        : services[0].slug;
      setSelectedService(selected);
    };

    syncServiceFromUrl();
    window.addEventListener('popstate', syncServiceFromUrl);
    window.addEventListener('pageshow', syncServiceFromUrl);
    return () => {
      window.removeEventListener('popstate', syncServiceFromUrl);
      window.removeEventListener('pageshow', syncServiceFromUrl);
    };
  }, []);

  function handleServiceChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedService(event.target.value);
  }

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
      <LocalFormConfirmation message={t('success')} symbol="✅" />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:grid-cols-2">
      <div>
        <label htmlFor={fieldId('name')} className="label">{t('name')} *</label>
        <input {...fieldA11y('name')} name="name" className="field" />
        {errors.name && <p id={`${fieldId('name')}-error`} className="mt-1 text-xs text-red-600">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor={fieldId('phone')} className="label">{t('phone')} *</label>
        <input {...fieldA11y('phone')} name="phone" className="field" dir="ltr" />
        {errors.phone && <p id={`${fieldId('phone')}-error`} className="mt-1 text-xs text-red-600">{errors.phone}</p>}
      </div>
      <div>
        <label htmlFor={fieldId('email')} className="label">{t('email')}</label>
        <input {...fieldA11y('email')} name="email" type="email" className="field" dir="ltr" />
        {errors.email && <p id={`${fieldId('email')}-error`} className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor={fieldId('area')} className="label">{t('area')}</label>
        <input {...fieldA11y('area')} name="area" className="field" />
      </div>
      <div>
        <label htmlFor={fieldId('service')} className="label">{t('service')}</label>
        <select {...fieldA11y('service')} name="service" className="field" value={selectedService} onChange={handleServiceChange}>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>{s.name[lang]}</option>
          ))}
        </select>
        <script dangerouslySetInnerHTML={{ __html: "(function(){var select=document.currentScript.previousElementSibling;var requested=new URLSearchParams(location.search).get('service');if(select&&requested&&Array.prototype.some.call(select.options,function(option){return option.value===requested;}))select.value=requested;})();" }} />
      </div>
      <div>
        <label htmlFor={fieldId('plan')} className="label">{t('plan')}</label>
        <select {...fieldA11y('plan')} name="plan" className="field">
          <option>{t('planHourly')}</option>
          <option>{t('planPartTime')}</option>
          <option>{t('planFullTime')}</option>
          <option>{t('planMonthly')}</option>
          <option>{t('planLiveIn')}</option>
        </select>
      </div>
      <div>
        <label htmlFor={fieldId('date')} className="label">{t('date')}</label>
        <input {...fieldA11y('date')} name="date" type="date" className="field" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor={fieldId('message')} className="label">{t('message')}</label>
        <textarea {...fieldA11y('message')} name="message" rows={4} className="field" />
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className="btn-primary w-full">{t('submit')}</button>
      </div>
    </form>
  );
}
