const assert = require('node:assert/strict');
// Exact owner-authorized form delivery copy; all other snapshot guards remain.
const patches = {
  "app/[locale]/contact/page.tsx": [
    [
      "'راجع بيانات الاستفسار' : 'Check Enquiry Details'",
      "'إرسال الاستفسار' : 'Send Enquiry'"
    ],
    [
      "'جهز بيانات استفسارك محلياً' : 'Prepare your enquiry details locally'",
      "'أرسل استفسارك إلى عناية' : 'Send your enquiry to INAYA'"
    ],
    [
      "النموذج يراجع البيانات محلياً ولا يرسل رسالة. تواصل بالهاتف أو واتساب لمشاركة الخدمة والإمارة ومناقشة الخطوات التالية.",
      "أرسل الخدمة والإمارة والتفاصيل إلى فريق عناية عبر هذا النموذج. سيتواصل الفريق معك لمناقشة الخطوات التالية؛ لا يتم تأكيد خدمة بمجرد الإرسال."
    ],
    [
      "This form checks details locally and does not send a message. Contact us by phone or WhatsApp to share the service and emirate and discuss next steps.",
      "Send your service, emirate and enquiry details to the INAYA team using this form. The team will follow up to discuss next steps; submitting does not confirm a service."
    ]
  ],
  "app/[locale]/booking/page.tsx": [
    [
      "هذا النموذج يراجع البيانات محلياً ولا يرسلها إلى المكتب. تواصل مع عناية بالهاتف أو واتساب لمشاركة احتياجك ومناقشة الخطوة التالية.",
      "أرسل احتياجك إلى فريق عناية عبر النموذج. سيتواصل الفريق معك لمناقشة التوفر والخطوات التالية؛ لا يتم تأكيد حجز بمجرد الإرسال."
    ],
    [
      "This form checks details locally and does not send them to the office. Contact INAYA by phone or WhatsApp to share your requirement and discuss the next step.",
      "Send your requirements to the INAYA team using this form. The team will follow up about availability and next steps; submitting does not confirm a booking."
    ],
    [
      "'قبل مراجعة البيانات' : 'Before checking your details'",
      "'قبل إرسال استفسارك' : 'Before sending your enquiry'"
    ]
  ],
  "app/[locale]/careers/page.tsx": [
    [
      "هذا النموذج لا يرسل طلباً. تواصل مع عناية بالهاتف أو واتساب لمناقشة طريقة مشاركة خبرتك واهتمامك. الاستفسار لا يؤكد وظيفة أو مقابلة.",
      "أرسل خبرتك واهتمامك إلى فريق عناية عبر هذا النموذج. سيتولى الفريق مراجعة الاستفسار؛ لا يؤكد الإرسال وظيفة أو مقابلة."
    ],
    [
      "This form does not send an application. Contact INAYA by phone or WhatsApp to discuss how to share your experience and interest. An enquiry does not confirm a job or interview.",
      "Send your experience and interest to the INAYA team using this form. The team will review your enquiry; submitting does not confirm a job or interview."
    ]
  ],
  "components/PhaseOneSeoSection.tsx": [
    [
      "Review enquiry details locally. This form does not send them to the office.",
      "Send your enquiry to the INAYA team. The team will review your requirements before any service is confirmed."
    ],
    [
      "راجع بيانات الاستفسار محلياً. لا يرسل هذا النموذج البيانات إلى المكتب.",
      "أرسل استفسارك إلى فريق عناية لمراجعة احتياجك قبل تأكيد أي خدمة."
    ],
    [
      "Check Enquiry Details",
      "Send Enquiry"
    ],
    [
      "راجع بيانات الاستفسار",
      "إرسال الاستفسار"
    ]
  ]
};
const messages = {
  "en": [
    [
      [
        "booking",
        "subtitle"
      ],
      "Prepare your details here, then contact the office by phone or WhatsApp to send your enquiry.",
      "Send your requirements to INAYA using this form. The team will contact you to discuss next steps."
    ],
    [
      [
        "booking",
        "submit"
      ],
      "Check Enquiry Details",
      "Send Enquiry"
    ],
    [
      [
        "booking",
        "success"
      ],
      "Your details were checked on this page only, not sent to the office. Please contact INAYA by phone or WhatsApp to share your request. No booking is confirmed.",
      "Your enquiry has been submitted to INAYA for review. This does not confirm a booking, job or interview."
    ],
    [
      [
        "contact",
        "success"
      ],
      "Your details were checked on this page only. This form has not sent a message. Please contact INAYA by phone or WhatsApp to share your enquiry.",
      "Your enquiry has been submitted to INAYA for review. This does not confirm a booking, job or interview."
    ],
    [
      [
        "careers",
        "submit"
      ],
      "Check Career Enquiry Details",
      "Send Career Enquiry"
    ],
    [
      [
        "careers",
        "success"
      ],
      "This form has not sent your application. Please contact INAYA by phone or WhatsApp to discuss how to share your details. No job or placement is confirmed.",
      "Your enquiry has been submitted to INAYA for review. This does not confirm a booking, job or interview."
    ]
  ],
  "ar": [
    [
      [
        "booking",
        "subtitle"
      ],
      "جهز بياناتك هنا ثم تواصل مع المكتب بالهاتف أو واتساب لإرسال استفسارك.",
      "أرسل احتياجك إلى عناية عبر هذا النموذج وسيتواصل الفريق معك لمناقشة الخطوات التالية."
    ],
    [
      [
        "booking",
        "submit"
      ],
      "مراجعة بيانات الاستفسار",
      "إرسال الاستفسار"
    ],
    [
      [
        "booking",
        "success"
      ],
      "تمت مراجعة البيانات على هذه الصفحة فقط ولم ترسل إلى المكتب. تواصل مع عناية بالهاتف أو واتساب لمشاركة طلبك. لم يتم تأكيد أي حجز.",
      "تم إرسال استفسارك إلى عناية للمراجعة. لا يؤكد هذا الإرسال حجزاً أو وظيفة أو مقابلة."
    ],
    [
      [
        "contact",
        "success"
      ],
      "تمت مراجعة البيانات على هذه الصفحة فقط. لم يرسل النموذج رسالة. تواصل مع عناية بالهاتف أو واتساب لمشاركة استفسارك.",
      "تم إرسال استفسارك إلى عناية للمراجعة. لا يؤكد هذا الإرسال حجزاً أو وظيفة أو مقابلة."
    ],
    [
      [
        "careers",
        "submit"
      ],
      "مراجعة بيانات استفسار العمل",
      "إرسال استفسار العمل"
    ],
    [
      [
        "careers",
        "success"
      ],
      "لم يرسل هذا النموذج طلبك. تواصل مع عناية بالهاتف أو واتساب لمناقشة طريقة مشاركة بياناتك. لم يتم تأكيد وظيفة أو توظيف.",
      "تم إرسال استفسارك إلى عناية للمراجعة. لا يؤكد هذا الإرسال حجزاً أو وظيفة أو مقابلة."
    ]
  ]
};
function approvedDeliverySource(file, source) {
 for (const [before, after] of patches[file] ?? []) {
  assert.ok(source.includes(before), file + ': reviewed delivery copy anchor');
  source = source.replaceAll(before, after);
 }
 return source;
}
function approvedDeliveryMessages(locale, data) {
 for (const [[section,key],before,after] of messages[locale]) {
  assert.equal(data[section][key], before, section+'.'+key+': reviewed delivery copy');
  data[section][key] = after;
 }
 return data;
}
module.exports = { approvedDeliverySource, approvedDeliveryMessages };
