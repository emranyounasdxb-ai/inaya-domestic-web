export type NationalityContractPrice = {
  nationality: { en: string; ar: string };
  role: { en: string; ar: string };
  range: string;
};

export const nationalityContractPrices: NationalityContractPrice[] = [
  { nationality: { en: 'Filipino', ar: 'الفلبين' }, role: { en: 'Maid / nanny', ar: 'خادمة / مربية' }, range: 'AED 15,000–22,000' },
  { nationality: { en: 'Ethiopian', ar: 'إثيوبيا' }, role: { en: 'Maid', ar: 'خادمة' }, range: 'AED 10,000–14,000' },
  { nationality: { en: 'Ugandan', ar: 'أوغندا' }, role: { en: 'Maid', ar: 'خادمة' }, range: 'AED 8,500–14,000' },
  { nationality: { en: 'Indian', ar: 'الهند' }, role: { en: 'Maid / nanny', ar: 'خادمة / مربية' }, range: 'AED 12,000–17,000' },
  { nationality: { en: 'Kenyan', ar: 'كينيا' }, role: { en: 'Caregiver', ar: 'مقدمة رعاية' }, range: 'AED 11,000–15,000' },
  { nationality: { en: 'Sri Lankan', ar: 'سريلانكا' }, role: { en: 'Maid / nanny', ar: 'خادمة / مربية' }, range: 'AED 12,000–17,000' },
  { nationality: { en: 'Nepali', ar: 'نيبال' }, role: { en: 'Maid', ar: 'خادمة' }, range: 'AED 15,000–22,000' },
  { nationality: { en: 'Bangladeshi', ar: 'بنغلاديش' }, role: { en: 'Maid', ar: 'خادمة' }, range: 'AED 15,000–22,000' },
  { nationality: { en: 'Ghanaian', ar: 'غانا' }, role: { en: 'Maid', ar: 'خادمة' }, range: 'AED 15,000–22,000' },
  { nationality: { en: 'Sierra Leonean', ar: 'سيراليون' }, role: { en: 'Maid', ar: 'خادمة' }, range: 'AED 15,000–22,000' },
  { nationality: { en: 'Indonesian', ar: 'إندونيسيا' }, role: { en: 'Maid', ar: 'خادمة' }, range: 'AED 15,000–22,000' },
  { nationality: { en: 'Myanmar', ar: 'ميانمار' }, role: { en: 'Maid', ar: 'خادمة' }, range: 'AED 15,000–22,000' }
];
