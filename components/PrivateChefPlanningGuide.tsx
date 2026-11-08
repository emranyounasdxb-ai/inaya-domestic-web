import Link from 'next/link';

const planningTopics = [
  {
    title: 'Describe the dining experience',
    paragraphs: [
      'Explain whether you need regular family meals, a weekly menu or cooking for a private gathering. Share the number of diners, preferred dishes, meal times and presentation you want.',
      'Review the proposed individual’s cooking experience against that menu. Agree which dishes and duties belong in the requested role before confirming a plan.'
    ]
  },
  {
    title: 'Discuss dietary requirements and ingredients',
    paragraphs: [
      'Explain dietary restrictions, allergies and ingredients to avoid before agreeing a menu. Ask what the proposed individual can accommodate and what still needs clarification. A menu preference alone does not confirm suitability for an allergy or clinical diet.',
      'If you prefer local ingredients, say so in the enquiry. Confirm who buys ingredients, how spending is agreed and who approves any substitutions.'
    ]
  },
  {
    title: 'Prepare the kitchen and schedule',
    paragraphs: [
      'Share the home location, kitchen equipment and available preparation space. Explain access arrangements and the time each meal should be ready.',
      'Agree preparation, cooking and kitchen clean-up duties separately. Discuss serving staff or other gathering support as separate responsibilities; do not assume they are included in the cooking role.'
    ]
  },
  {
    title: 'Request a written chef cost breakdown',
    paragraphs: [
      'Provide the proposed dates, hours, location, menu and duties so the team can discuss the chef cost for your request. Ask which charges are included and which need separate agreement, including ingredients and transport.',
      'Review the written scope, costs and availability before confirming. A routine maid package does not automatically include a private-chef role.'
    ]
  }
];

export default function PrivateChefPlanningGuide() {
  return (
    <section aria-labelledby="private-chef-planning-title" data-private-chef-planning-guide className="bg-[#fffdf8] px-6 py-14 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 id="private-chef-planning-title" className="font-heading text-[2rem] font-bold leading-tight text-primary-900 sm:text-[2.5rem]">Plan your private chef service at home</h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-primary-900/80">Use these questions to turn your meal ideas into a clear enquiry. Keep the menu, kitchen responsibilities and written quotation together.</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {planningTopics.map((topic) => (
            <article key={topic.title} className="rounded-[24px] border border-primary-900/10 bg-white p-6 sm:p-8">
              <h3 className="font-heading text-xl font-bold leading-snug text-primary-900">{topic.title}</h3>
              {topic.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 text-sm leading-7 text-primary-900/80">{paragraph}</p>)}
            </article>
          ))}
        </div>
        <p className="mt-7 max-w-3xl text-sm leading-7 text-primary-900/80">
          For ongoing meals, compare the <Link href="/en/services/personal-chef/" className="font-semibold underline decoration-accent-500/70 underline-offset-4 hover:text-accent-700">personal chef service</Link>. For non-cooking gathering support, discuss <Link href="/en/services/event-staffing/" className="font-semibold underline decoration-accent-500/70 underline-offset-4 hover:text-accent-700">event staffing</Link> separately.
        </p>
      </div>
    </section>
  );
}
