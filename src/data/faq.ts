// FAQ: add a question by adding an object to this array. Rendered in order.
export type FaqItem = { question: string; answer: string };

export const faq: FaqItem[] = [
  {
    question: 'What does it cost?',
    answer:
      "Rates start at $50 an hour, and go up depending on what you need. Call us and we'll work out pricing together.",
  },
  {
    question: "My parent says they don't need help.",
    answer:
      "That's common. Most parents warm up to a visit faster than to a service, so we start with chai and conversation. Errands and outings usually follow once they're comfortable.",
  },
  {
    question: 'I live out of state. Can I arrange this from here?',
    answer:
      "Yes, many families do. You arrange the visits and get a written note after each one. If something needs your attention, we'll call you.",
  },
  {
    question: 'My parent uses a wheelchair. Can you help?',
    answer:
      "Only if they can get in and out of a car on their own or with a family member's help. We don't lift, carry or transfer anyone, so if that's what's needed, we can't take this on.",
  },
  {
    question: 'What if my parents speak a different language?',
    answer:
      "We speak Urdu, Hindi, Memoni and English. If your parent speaks something else, mention it on the call and we'll tell you straight away whether we can match it.",
  },
  {
    question: 'What hours can you visit?',
    answer:
      'Weekends only. If weekdays matter more for your family, say so on the call. It helps us know where to grow next.',
  },
  {
    question: 'Do we have to be Muslim?',
    answer:
      "No. We started with our own community because that's where we saw the need, and families of any faith are welcome. We'll tell you if we're not the right fit.",
  },
  {
    // Keep in sync with src/data/locations.ts (same facts, FAQ wording).
    question: 'Where do you serve?',
    answer:
      'The San Gabriel Valley, including Monrovia, Arcadia, Duarte, Pasadena, Temple City, Rosemead, San Gabriel, Alhambra, Covina, West Covina, Azusa and Glendora. Orange County is available by request.',
  },
  {
    question: "What if you can't make a scheduled visit?",
    answer:
      "If we can't make a visit, we'll let you know as early as possible and find another time with you.",
  },
  {
    question: 'How is Apna different from an agency?',
    answer:
      'An agency sends whoever is free that day. Here you have one point of contact, and the same companion visits each time.',
  },
  {
    question: 'What if we need to pause or stop?',
    answer:
      "Let us know and we'll work it out. The details are in the written agreement.",
  },
];
