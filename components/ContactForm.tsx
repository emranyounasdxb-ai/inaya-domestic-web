'use client';

import { useState } from 'react';
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
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const labels = {
    service: isArabic ? 'الخدمة المطلوبة' : 'Select Service',
    nationality: isArabic ? 'الجنسية المفضلة' : 'Nationality Preference',
    area: isArabic ? 'الإمارة / المنطقة' : 'Emirate / Area',
    chooseService: isArabic ? 'اختر الخدمة' : 'Choose a service',
    chooseArea: isArabic ? 'مثال: دبي، أبوظبي، الشارقة، عجمان' : 'Example: Dubai, Abu Dhabi, Sharjah, Ajman',
    submit: isArabic ? 'إرسال الطلب' : 'Submit Request',
    privacy: isArabic ? 'سيتم استخدام بياناتك للتواصل معك بخصوص طلبك فقط.' : 'Your information will be used only to contact you about your request.'
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
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center text-green-800">
        <div className="mb-2 text-4xl">✓</div>
        <p className="font-medium">{t('success')}</p>
      </div>
    );
  }

  if (isFloating) {
    const floatingInputClass = 'peer w-full rounded-2xl border border-primary-700/10 bg-ivory-100/70 px-4 pb-3 pt-6 text-sm text-ink shadow-sm outline-none transition placeholder:text-transparent focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30';
    const floatingLabelClass = 'pointer-events-none absolute start-4 top-4 text-sm text-ink/55 transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs';

    return (
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <div className="relative">
              <input name="name" placeholder=" " className={floatingInputClass} />
              <label className={floatingLabelClass}>{t('name')} *</label>
            </div>
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
          </div>
          <div>
            <div className="relative">
              <input name="phone" placeholder=" " className={floatingInputClass} dir="ltr" />
              <label className={floatingLabelClass}>{t('phone')} *</label>
            </div>
            {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <div className="relative">
              <input name="email" type="email" placeholder=" " className={floatingInputClass} dir="ltr" />
              <label className={floatingLabelClass}>{t('email')} *</label>
            </div>
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>
          <div>
            <label className="sr-only">{labels.service}</label>
            <select name="service" className="w-full rounded-2xl border border-primary-700/10 bg-ivory-100/70 px-4 py-4 text-sm text-ink/70 shadow-sm outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30" defaultValue="">
              <option value="" disabled>{labels.service}</option>
              {services.slice(0, 12).map((service) => (
                <option key={service.slug} value={service.slug}>{service.name[lang]}</option>
              ))}
            </select>
            {errors.service && <p className="mt-1 text-xs text-red-600">{errors.service}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="relative">
            <input name="nationality" placeholder=" " className={floatingInputClass} />
            <label className={floatingLabelClass}>{labels.nationality}</label>
          </div>
          <div className="relative">
            <input name="area" placeholder=" " className={floatingInputClass} />
            <label className={floatingLabelClass}>{labels.area}</label>
          </div>
        </div>

        <div>
          <div className="relative">
            <textarea name="message" placeholder=" " rows={4} className={`${floatingInputClass} min-h-28 resize-y`} />
            <label className={floatingLabelClass}>{t('message')} *</label>
          </div>
          {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
        </div>

        <button type="submit" className="w-full rounded-full bg-primary-900 px-6 py-4 text-base font-bold text-white shadow-premium transition hover:-translate-y-0.5 hover:bg-primary-800 active:scale-[0.99]">{labels.submit}</button>
        <p className="text-center text-xs text-ink/55">{labels.privacy}</p>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
        <label className="label">{t('email')} *</label>
        <input name="email" type="email" className="field" dir="ltr" />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>
      <div>
        <label className="label">{labels.service} *</label>
        <select name="service" className="field" defaultValue="">
          <option value="" disabled>{labels.chooseService}</option>
          {services.slice(0, 12).map((service) => (
            <option key={service.slug} value={service.slug}>{service.name[lang]}</option>
          ))}
        </select>
        {errors.service && <p className="mt-1 text-xs text-red-600">{errors.service}</p>}
      </div>
      <div>
        <label className="label">{labels.nationality}</label>
        <input name="nationality" className="field" />
      </div>
      <div>
        <label className="label">{labels.area}</label>
        <input name="area" className="field" placeholder={labels.chooseArea} />
      </div>
      <div className="sm:col-span-2">
        <label className="label">{t('message')} *</label>
        <textarea name="message" rows={5} className="field" />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className="btn-primary w-full">{labels.submit}</button>
        <p className="mt-3 text-center text-xs text-ink/55">{labels.privacy}</p>
      </div>
    </form>
  );
}
