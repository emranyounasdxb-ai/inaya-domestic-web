'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { services } from '@/lib/services';

type ContactFormProps = {
  locale?: string;
};

export default function ContactForm({ locale = 'en' }: ContactFormProps) {
  const t = useTranslations('contact');
  const tb = useTranslations('booking');
  const isArabic = locale === 'ar';
  const lang = isArabic ? 'ar' : 'en';
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const labels = {
    service: isArabic ? 'الخدمة المطلوبة' : 'Select Service',
    nationality: isArabic ? 'الجنسية المفضلة' : 'Nationality Preference',
    area: isArabic ? 'المنطقة داخل عجمان' : 'Area in Ajman',
    chooseService: isArabic ? 'اختر الخدمة' : 'Choose a service',
    chooseArea: isArabic ? 'مثال: الراشدية، النعيمية، الجرف' : 'Example: Al Rashidiya, Al Nuaimiya, Al Jurf',
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

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div>
        <label className="label">{t('name')} *</label>
        <input name="name" className="field bg-gray-50" />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
      </div>
      <div>
        <label className="label">{t('phone')} *</label>
        <input name="phone" className="field bg-gray-50" dir="ltr" />
        {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
      </div>
      <div>
        <label className="label">{t('email')} *</label>
        <input name="email" type="email" className="field bg-gray-50" dir="ltr" />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
      </div>
      <div>
        <label className="label">{labels.service} *</label>
        <select name="service" className="field bg-gray-50" defaultValue="">
          <option value="" disabled>{labels.chooseService}</option>
          {services.slice(0, 12).map((service) => (
            <option key={service.slug} value={service.slug}>{service.name[lang]}</option>
          ))}
        </select>
        {errors.service && <p className="mt-1 text-xs text-red-600">{errors.service}</p>}
      </div>
      <div>
        <label className="label">{labels.nationality}</label>
        <input name="nationality" className="field bg-gray-50" />
      </div>
      <div>
        <label className="label">{labels.area}</label>
        <input name="area" className="field bg-gray-50" placeholder={labels.chooseArea} />
      </div>
      <div className="sm:col-span-2">
        <label className="label">{t('message')} *</label>
        <textarea name="message" rows={5} className="field bg-gray-50" />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className="btn-primary w-full">{labels.submit}</button>
        <p className="mt-3 text-center text-xs text-gray-500">{labels.privacy}</p>
      </div>
    </form>
  );
}
