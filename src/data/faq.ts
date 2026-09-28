// FAQ: add a question by adding an object to this array. Rendered in order.
export type FaqItem = { question: string; answer: string };

export const faq: FaqItem[] = [
  {
    question: 'What does it cost?',
    answer:
      "Rates start at $50 an hour. The exact amount depends on your family's needs, and we will give you a figure on the call.",
  },
  {
    question: "My parent says they don't need help.",
    answer:
      "This is very common. Many parents accept help more readily as a visit than as a service, so we begin with chai and conversation. Errands and outings usually follow once they are comfortable.",
  },
  {
    question: 'I live out of state. Can I arrange this from here?',
    answer:
      'Yes, many families do. You arrange the visits and receive a written note after each one. If anything needs your attention, we will contact you directly.',
  },
  {
    question: 'My parent uses a wheelchair. Can you help?',
    answer:
      'We can assist only if your parent is able to get in and out of a car independently or with a family member\'s help, as we do not lift, carry or transfer anyone. If that is needed, we are unfortunately unable to help at this time.',
  },
  {
    question: 'What if my parents speak a different language?',
    answer:
      'We currently offer Urdu, Hindi, Memoni and English. If your parent speaks another language, please tell us on the call and we will let you know whether we can accommodate it.',
  },
  {
    question: 'What hours can you visit?',
    answer:
      'Visits take place on weekends. Tell us what your weekend looks like and we will find a time that suits.',
  },
  {
    question: 'Do we have to be Muslim?',
    answer:
      'No. We began with our own community because that is where we saw the need, and families of any faith are welcome. If we are not the right fit, we will tell you.',
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
      'If we are unable to make a visit, we will let you know as early as possible and arrange another time with you.',
  },
  {
    question: 'How is Apna different from an agency?',
    answer:
      'Apna is a personal service rather than a staffing agency. Families have one point of contact, and visits are made by the same companion wherever possible.',
  },
  {
    question: 'What if we need to pause or stop?',
    answer:
      'Please let us know and we will work with you. The details are set out in the written agreement.',
  },
];
