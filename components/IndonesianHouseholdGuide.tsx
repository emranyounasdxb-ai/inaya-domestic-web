import Link from 'next/link';

type GuideSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  table?: { columns: string[]; rows: string[][] };
  links?: { label: string; href: string }[];
};

const introduction = "If you are considering an Indonesian housemaid in Dubai, use this household brief to explain the help you need. INAYA reviews individual profile options against duties, communication needs, documents and current availability.";

const sections: GuideSection[] = [
  {
    "id": "indonesian-dubai-household",
    "heading": "Describe your Dubai household",
    "paragraphs": [
      "Start with the work your home needs. Share these details so the team can review the role and current options:"
    ],
    "bullets": [
      "Your Dubai area, home size and building access arrangements.",
      "The cleaning, laundry, meal preparation or childcare tasks you want to discuss.",
      "Your preferred days, hours, start date and live-in or live-out arrangement.",
      "The language you use for instructions and any experience relevant to your household."
    ],
    "links": [
      {
        "label": "Dubai service enquiry guide",
        "href": "/en/maid-services-dubai/"
      }
    ]
  },
  {
    "id": "indonesian-experience",
    "heading": "Compare cleaning and cooking experience",
    "paragraphs": [
      "Discuss cleaning and cooking as separate parts of the role. Ask for examples relevant to your home."
    ],
    "table": {
      "columns": [
        "Area to discuss",
        "Questions for the individual profile"
      ],
      "rows": [
        [
          "Cleaning",
          "Which rooms, surfaces and products has the person used before? Explain your priorities and any equipment that needs an introduction."
        ],
        [
          "Cooking",
          "Which meals can the person prepare? Discuss ingredients, dietary needs, food storage and the appliances used in your kitchen."
        ],
        [
          "Daily communication",
          "Agree on a language you both understand for instructions, task updates and questions."
        ],
        [
          "Childcare, when requested",
          "Ask about experience with your child's age group. Agree on supervision and handover responsibilities before adding childcare to household duties."
        ]
      ]
    },
    "links": [
      {
        "label": "Home cooking role guide",
        "href": "/en/services/home-cooking/"
      }
    ]
  },
  {
    "id": "indonesian-profile-trust",
    "heading": "Looking for a trusted Indonesian housemaid?",
    "paragraphs": [
      "Assess the proposed person's relevant experience, communication and available references. Ask which documents and experience details can be reviewed, what each check covers and what remains unconfirmed. Agree on duties, costs and support terms in writing. A country preference does not establish someone's skills or reliability."
    ],
    "links": [
      {
        "label": "Questions about profile and document checks",
        "href": "/en/services/background-verification/"
      }
    ]
  },
  {
    "id": "indonesian-dubai-routine",
    "heading": "Preparing for daily life in Dubai",
    "paragraphs": [
      "A clear introduction helps any worker joining a new household. Walk through the cleaning equipment, kitchen, building access and emergency contacts. Explain the daily routine and agree on working hours, breaks, privacy, transport responsibilities and how to raise concerns. Review the plan together after the first few days."
    ]
  },
  {
    "id": "indonesian-enquiry-areas",
    "heading": "Dubai, Abu Dhabi and other UAE enquiries",
    "paragraphs": [
      "INAYA is based in Ajman and supports Dubai enquiries subject to availability. Abu Dhabi enquiries depend on the service type, location, documents and current options. Share your exact area and preferred start date so the team can review your household request. Profile availability and a start date must be confirmed with the team."
    ],
    "links": [
      {
        "label": "Abu Dhabi service enquiry guide",
        "href": "/en/maid-services-abu-dhabi/"
      }
    ]
  }
];

export default function IndonesianHouseholdGuide() {
  return (
    <section aria-label="Indonesian household planning" className="px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-6xl rounded-[26px] border border-white/80 bg-white/78 p-5 shadow-[0_18px_55px_rgba(7,22,74,0.06)] sm:p-7">
        <p className="max-w-3xl text-sm leading-7 text-primary-900/75">{introduction}</p>
        <div className="mt-8 space-y-8">
          {sections.map((section) => (
            <section key={section.id} aria-labelledby={section.id}>
              <h2 id={section.id} className="font-heading text-2xl font-bold tracking-[-0.035em] text-primary-900">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 max-w-3xl text-sm leading-7 text-primary-900/75">{paragraph}</p>)}
              {section.bullets ? (
                <ul className="mt-4 grid list-disc gap-2 ps-5 text-sm leading-7 text-primary-900/75 sm:grid-cols-2 sm:gap-x-8">
                  {section.bullets.map((item) => <li key={item}>{item}</li>)}
                </ul>
              ) : null}
              {section.table ? (
                <div className="mt-5 overflow-x-auto rounded-2xl border border-primary-900/10">
                  <table aria-labelledby={section.id} className="w-full table-fixed text-left text-sm leading-6">
                    <colgroup><col className="w-[34%]" /><col /></colgroup>
                    <thead className="bg-[#f8f6f0] text-primary-900">
                      <tr>{section.table.columns.map((column) => <th key={column} scope="col" className="break-words px-3 py-3 font-semibold sm:px-4">{column}</th>)}</tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map(([topic, questions]) => (
                        <tr key={topic} className="border-t border-primary-900/10">
                          <th scope="row" className="break-words px-3 py-3 align-top font-semibold text-primary-900 sm:px-4">{topic}</th>
                          <td className="break-words px-3 py-3 align-top text-primary-900/75 sm:px-4">{questions}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}
              {section.links ? (
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  {section.links.map((link) => <li key={link.href} className="max-w-full"><Link href={link.href} className="text-sm font-semibold leading-7 text-accent-700 underline underline-offset-4">{link.label}</Link></li>)}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
