'use client';

import { useId, useState } from 'react';
import LocalFormConfirmation from './LocalFormConfirmation';
import { useTranslations } from 'next-intl';
import { services } from '@/lib/services';

type ContactFormProps = {
  locale?: string;
  variant?: 'default' | 'floating';
};

export default function ContactForm({ locale = 'en', variant = 'default' }: ContactFormProps) {
  const t = useTranslations('contact');
  const tb = useTranslations('booking');
  const isArabic = locale === 'ar';
  const lang = isArabic ? 'ar' : 'en';
  const isFloating = variant === 'floating';
  const formId = useId();
  const fieldId = (name: string) => `${formId}-${name}`;
  const fieldA11y = (name: string) => ({
    id: fieldId(name),
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `${fieldId(name)}-error` : undefined
  });
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const labels = {
    service: isArabic ? 'الخدمة المطلوبة' : 'Select Service',
    nationality: isArabic ? 'الجنسية المفضلة' : 'Nationality Preference',
    area: isArabic ? 'الإمارة / المنطقة' : 'Emirate / Area',
    chooseService: isArabic ? 'اختر الخدمة' : 'Choose a service',
    chooseArea: isArabic ? 'مثال: دبي، أبوظبي، الشارقة، عجمان' : 'Example: Dubai, Abu Dhabi, Sharjah, Ajman',
    submit: isArabic ? 'مراجعة بيانات الاستفسار' : 'Check Enquiry Details',
    privacy: isArabic ? 'لا يرسل هذا النموذج بياناتك إلى المكتب. تواصل بالهاتف أو واتساب لمشاركة الاستفسار وتجنب إدخال مستندات حساسة هنا.' : 'This form does not send your details to the office. Contact us by phone or WhatsApp to share the enquiry; do not enter sensitive documents here.'
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    if (!data.get('name')) next.name = tb('required');
    const email = String(data.get('email') || '');
    if (!email) next.email = tb('required');
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) next.email = tb('invalidEmail');
    if (!data.get('phone')) next.phone = tb('required');
    if (!data.get('service')) next.service = tb('required');
    if (!data.get('message')) next.message = tb('required');
    setErrors(next);
    if (Object.keys(next).length === 0) setDone(true);
  }

  if (done) {
    return (
      <LocalFormConfirmation message={t('success')} symbol="✓" />
    );
  }

  if (isFloating) {
    const floatingInputClass = 'peer w-full rounded-2xl border border-primary-700/10 bg-ivory-100/70 px-4 pb-3 pt-6 text-sm text-ink shadow-sm outline-none transition placeholder:text-transparent focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30';
    const floatingLabelClass = 'pointer-events-none absolute start-4 top-4 text-sm text-primary-900/75 transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent-700 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs';

    return (
      <form aria-describedby={`${formId}-help`} onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <div className="relative">
              <input {...fieldA11y('name')} name="name" placeholder=" " className={floatingInputClass} />
              <label htmlFor={fieldId('name')} className={floatingLabelClass}>{t('name')} *</label>
            </div>
            {errors.name && <p id={`${fieldId('name')}-error`} className="mt-1 text-xs text-red-600">{errors.name}</p>}
          </div>
          <div>
            <div className="relative">
              <input {...fieldA11y('phone')} name="phone" placeholder=" " className={floatingInputClass} dir="ltr" />
              <label htmlFor={fieldId('phone')} className={floatingLabelClass}>{t('phone')} *</label>
            </div>
            {errors.phone && <p id={`${fieldId('phone')}-error`} className="mt-1 text-xs text-red-600">{errors.phone}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <div className="relative">
              <input {...fieldA11y('email')} name="email" type="email" placeholder=" " className={floatingInputClass} dir="ltr" />
              <label htmlFor={fieldId('email')} className={floatingLabelClass}>{t('email')} *</label>
            </div>
            {errors.email && <p id={`${fieldId('email')}-error`} className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor={fieldId('service')} className="sr-only">{labels.service}</label>
            <select {...fieldA11y('service')} name="service" className="w-full rounded-2xl border border-primary-700/10 bg-ivory-100/70 px-4 py-4 text-sm text-ink/70 shadow-sm outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30" defaultValue="">
              <option value="" disabled>{labels.service}</option>
              {services.slice(0, 12).map((service) => (
                <option key={service.slug} value={service.slug}>{service.name[lang]}</option>
              ))}
            </select>
            {errors.service && <p id={`${fieldId('service')}-error`} className="mt-1 text-xs text-red-600">{errors.service}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="relative">
            <input {...fieldA11y('nationality')} name="nationality" placeholder=" " className={floatingInputClass} />
            <label htmlFor={fieldId('nationality')} className={floatingLabelClass}>{labels.nationality}</label>
          </div>
          <div className="relative">
            <input {...fieldA11y('area')} name="area" placeholder=" " className={floatingInputClass} />
            <label htmlFor={fieldId('area')} className={floatingLabelClass}>{labels.area}</label>
          </div>
        </div>

        <div>
          <div className="relative">
            <textarea {...fieldA11y('message')} name="message" placeholder=" " rows={4} className={`${floatingInputClass} min-h-28 resize-y`} />
            <label htmlFor={fieldId('message')} className={floatingLabelClass}>{t('message')} *</label>
          </div>
          {errors.message && <p id={`${fieldId('message')}-error`} className="mt-1 text-xs text-red-600">{errors.message}</p>}
        </div>

        <button type="submit" className="w-full rounded-full bg-primary-900 px-6 py-4 text-base font-bold text-white shadow-premium transition hover:-translate-y-0.5 hover:bg-primary-800 active:scale-[0.99]">{labels.submit}</button>
        <p id={`${formId}-help`} className="text-center text-xs text-primary-900/75">{labels.privacy}</p>
      </form>
    );
  }

  return (
    <form aria-describedby={`${formId}-help`} onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
        <label htmlFor={fieldId('email')} className="label">{t('email')} *</label>
        <input {...fieldA11y('email')} name="email" type="email" className="field" dir="ltr" />
        {errors.email && <p id={`${fieldId('email')}-error`} className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor={fieldId('service')} className="label">{labels.service} *</label>
        <select {...fieldA11y('service')} name="service" className="field" defaultValue="">
          <option value="" disabled>{labels.chooseService}</option>
          {services.slice(0, 12).map((service) => (
            <option key={service.slug} value={service.slug}>{service.name[lang]}</option>
          ))}
        </select>
        {errors.service && <p id={`${fieldId('service')}-error`} className="mt-1 text-xs text-red-600">{errors.service}</p>}
      </div>
      <div>
        <label htmlFor={fieldId('nationality')} className="label">{labels.nationality}</label>
        <input {...fieldA11y('nationality')} name="nationality" className="field" />
      </div>
      <div>
        <label htmlFor={fieldId('area')} className="label">{labels.area}</label>
        <input {...fieldA11y('area')} name="area" className="field" placeholder={labels.chooseArea} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor={fieldId('message')} className="label">{t('message')} *</label>
        <textarea {...fieldA11y('message')} name="message" rows={5} className="field" />
        {errors.message && <p id={`${fieldId('message')}-error`} className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className="btn-primary w-full">{labels.submit}</button>
        <p id={`${formId}-help`} className="mt-3 text-center text-xs text-primary-900/75">{labels.privacy}</p>
      </div>
    </form>
  );
}
