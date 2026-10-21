const assert = require('node:assert/strict');
// Exact owner-authorized form delivery copy; all other snapshot guards remain.
const patches = {
  "tests/fixtures/seo-phase03-baseline.json": [
    ["Prepare household service requirements with INAYA guidance. This form checks details locally only; contact the office by phone or WhatsApp to discuss your enquiry.", "Send your household service enquiry to INAYA for review. Availability, written terms and booking require confirmation by the team."],
    ["جهز متطلبات الخدمة المنزلية مع إرشادات عناية. يتحقق هذا النموذج من البيانات محلياً فقط؛ تواصل مع المكتب بالهاتف أو واتساب لمناقشة استفسارك.", "أرسل استفسارك عن الخدمة المنزلية إلى عناية للمراجعة. يتطلب التوفر والشروط المكتوبة والحجز تأكيداً من الفريق."],
    ["Prepare a domestic-work application with INAYA guidance. This form checks details locally only; contact the office by phone or WhatsApp to discuss your experience.", "Send a domestic-work career enquiry to INAYA for review. Share your experience and preferred role; submission does not confirm a job or interview."],
    ["جهز طلباً للعمل في الخدمات المنزلية مع إرشادات عناية. يتحقق هذا النموذج من البيانات محلياً فقط؛ تواصل مع المكتب بالهاتف أو واتساب لمناقشة خبرتك.", "أرسل استفسار عمل في الخدمات المنزلية إلى عناية للمراجعة. شارك خبرتك والدور المفضل؛ ولا يؤكد الإرسال وظيفة أو مقابلة."]
  ],
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
  ],
  "lib/buyer-answers.ts": [
    [
      "This form checks details locally and does not send a request.",
      "Submitting this form sends an enquiry to INAYA for review; it does not confirm a booking."
    ],
    [
      "يراجع هذا النموذج البيانات محلياً ولا يرسل طلباً.",
      "يرسل هذا النموذج استفساراً إلى عناية للمراجعة؛ ولا يؤكد حجزاً."
    ]
  ],
  "app/[locale]/faq/page.tsx": [
    [
      "The website form prepares details locally and does not send a request.",
      "You can also send these details to INAYA using the website enquiry form."
    ],
    [
      "The form only checks details locally; it does not send them to INAYA or confirm an appointment. Contact the team by phone or WhatsApp to share your enquiry and confirm next steps.",
      "After a successful submission, the form sends your details to info@inayadomestic.ae and displays a reference. The team will review the enquiry; submitting does not confirm an appointment. Contact the team by phone or WhatsApp for urgent enquiries."
    ],
    [
      "يجهز نموذج الموقع البيانات محلياً ولا يرسل طلباً.",
      "يمكنك أيضاً إرسال هذه البيانات إلى عناية عبر نموذج الاستفسار في الموقع."
    ],
    [
      "يراجع النموذج البيانات محلياً فقط؛ ولا يرسلها إلى عناية أو يؤكد موعداً. تواصل مع الفريق هاتفياً أو عبر واتساب لمشاركة استفسارك وتأكيد الخطوات التالية.",
      "بعد نجاح الإرسال، يرسل النموذج بياناتك إلى info@inayadomestic.ae ويعرض رقماً مرجعياً. سيراجع الفريق الاستفسار؛ ولا يؤكد الإرسال موعداً. للاستفسارات العاجلة تواصل هاتفياً أو عبر واتساب."
    ]
  ],
  "lib/trust-support-pages.ts": [
    [
      "The website enquiry forms prepare and check details locally; they do not send those details to INAYA.",
      "When you submit a website enquiry form, it sends your entered details to info@inayadomestic.ae for team follow-up."
    ],
    [
      "تجهز نماذج الاستفسار في الموقع البيانات وتراجعها محلياً؛ ولا ترسلها إلى عناية.",
      "عند إرسال نموذج استفسار في الموقع، ترسل البيانات المدخلة إلى info@inayadomestic.ae لمتابعة الفريق."
    ],
    [
      "checking them locally does not send them to INAYA",
      "submitting the form sends the entered details to INAYA"
    ],
    [
      "ولا ترسل مراجعتها محلياً هذه البيانات إلى عناية",
      "ويرسل إرسال النموذج البيانات المدخلة إلى عناية"
    ],
    [
      "Does checking a website form send my information?",
      "Does submitting a website form send my information?"
    ],
    [
      "هل ترسل مراجعة نموذج الموقع معلوماتي؟",
      "هل يرسل إرسال نموذج الموقع معلوماتي؟"
    ],
    [
      "No. Contact, booking and careers forms prepare and check details locally; they do not send an enquiry or upload documents. When you choose to contact INAYA through WhatsApp, email or another channel, the information you send is shared through that separate channel.",
      "Yes. Submitting a contact, booking or careers form sends the entered enquiry details to info@inayadomestic.ae. A successful submission displays a reference; it does not confirm a booking, job or interview. These forms do not upload documents. Information shared through WhatsApp or another channel is sent through that separate channel."
    ],
    [
      "لا. تجهز نماذج التواصل والحجز والوظائف البيانات وتراجعها محلياً؛ ولا ترسل استفساراً أو ترفع مستندات. عندما تختار التواصل مع عناية عبر واتساب أو البريد أو قناة أخرى، تتم مشاركة المعلومات التي ترسلها عبر تلك القناة المنفصلة.",
      "نعم. يرسل إرسال نموذج التواصل أو الحجز أو الوظائف بيانات الاستفسار المدخلة إلى info@inayadomestic.ae. يعرض الإرسال الناجح رقماً مرجعياً؛ ولا يؤكد حجزاً أو وظيفة أو مقابلة. لا ترفع هذه النماذج مستندات. ترسل المعلومات المشتركة عبر واتساب أو قناة أخرى من خلال تلك القناة المنفصلة."
    ],
    [
      "Website forms only prepare and validate details locally; they do not submit an enquiry or confirm an appointment. Contact INAYA to share your request and confirm availability.",
      "Website forms send the entered enquiry details to info@inayadomestic.ae when submitted successfully. This does not confirm an appointment or service; the INAYA team must confirm availability and the agreement."
    ],
    [
      "تجهز نماذج الموقع البيانات وتراجعها محلياً فقط؛ ولا ترسل استفساراً أو تؤكد موعداً. تواصل مع عناية لمشاركة طلبك وتأكيد التوفر.",
      "ترسل نماذج الموقع بيانات الاستفسار المدخلة إلى info@inayadomestic.ae عند نجاح الإرسال. لا يؤكد ذلك موعداً أو خدمة؛ ويجب أن يؤكد فريق عناية التوفر والاتفاق."
    ]
  ],
  "lib/domestic-worker-guides.ts": [
    [
      "the website’s booking form prepares details locally and does not send an application.",
      "the website’s booking form sends an enquiry to the INAYA team; it does not submit an official application."
    ],
    [
      "يساعد نموذج الحجز على تجهيز البيانات محلياً ولا يرسل طلباً.",
      "يرسل نموذج الحجز استفساراً إلى فريق عناية؛ ولا يقدم طلباً رسمياً."
    ],
    [
      "helps you organise details locally; it does not submit an application or upload documents.",
      "sends your enquiry details to the INAYA team; it does not submit an official application or upload documents."
    ],
    [
      "يساعدك نموذج الحجز في هذا الموقع على تنظيم البيانات محلياً؛ ولا يرسل طلباً أو يرفع مستندات.",
      "يرسل نموذج الحجز في هذا الموقع بيانات استفسارك إلى فريق عناية؛ ولا يقدم طلباً رسمياً أو يرفع مستندات."
    ],
    [
      "Preparing details in the website enquiry form does not send them or confirm an appointment.",
      "Submitting the website enquiry form sends your details to INAYA for review; it does not confirm an appointment."
    ],
    [
      "تجهيز التفاصيل في نموذج الاستفسار لا يرسلها إلى الفريق ولا يؤكد موعداً.",
      "يرسل إرسال نموذج الاستفسار بياناتك إلى عناية للمراجعة؛ ولا يؤكد موعداً."
    ],
    [
      "The website form prepares information locally and does not transmit a request, confirm an appointment or guarantee a suitable profile.",
      "Submitting the website form sends an enquiry to INAYA for review; it does not confirm an appointment or guarantee a suitable profile."
    ],
    [
      "يجهز نموذج الموقع البيانات محلياً فقط، ولا يرسل طلباً أو يؤكد موعداً أو يضمن ملفاً مناسباً.",
      "يرسل إرسال نموذج الموقع استفساراً إلى عناية للمراجعة؛ ولا يؤكد موعداً أو يضمن ملفاً مناسباً."
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
