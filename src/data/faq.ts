import { site } from '../lib/site';

// FAQ: add a question by adding an object to this array. Rendered in order.
export type FaqItem = { question: string; answer: string };

export const faq: FaqItem[] = [
  {
    question: 'What does it cost?',
    answer:
      `Visits are ${site.rateHourly}, with a two-hour minimum. A weekly two-hour visit comes to $520 a month. ${site.foundingNote} Your rate is written in the agreement before visits begin, and any later change comes with at least 60 days' written notice.`,
  },
  {
    question: 'Are you taking families now?',
    answer:
      'Apna is opening to its first five families soon. Send the form and I will call you, and I will give you a start date as soon as I have one.',
  },
  {
    question: "My parent says they don't need help.",
    answer:
      "That is common. Most parents warm to a visitor faster than to a service, so I start with chai and conversation. The rest follows once they are comfortable.",
  },
  {
    question: 'I live out of state. Can I arrange this from here?',
    answer:
      "Yes, many families do. You arrange the visits and receive a written note after each one. If something needs your attention, I call you.",
  },
  {
    question: 'Do you drive my parent to places?',
    answer:
      'Not at the moment. Visits are at home or close by on foot, and I can meet your parent at the masjid, a gathering or an appointment and stay with them. I also pick up groceries and other errands for them.',
  },
  {
    question: 'My parent uses a wheelchair or a walker. Can you help?',
    answer:
      "Yes, for company and help around the home. I do not lift, carry or transfer anyone, so if that is what is needed, I am not the right help and I will tell you so.",
  },
  {
    question: 'What if my parents speak a different language?',
    answer:
      "I speak Urdu, Hindi and English, and I understand Memoni. If your parent speaks something else, mention it on the call and I will tell you straight away whether I can help.",
  },
  {
    question: 'What hours can you visit?',
    answer:
      'Saturdays and Sundays. Each family has the same day and time every week.',
  },
  {
    question: 'Do we have to be Muslim?',
    answer:
      "No. Apna started in my own community because that is where I saw the need, and families of any faith are welcome. I will tell you if I am not the right fit.",
  },
  {
    question: 'Where do you visit?',
    answer:
      'The San Gabriel Valley: Monrovia, Arcadia, Duarte, Pasadena, Temple City, Rosemead, San Gabriel, Alhambra, Covina, West Covina, Azusa and Glendora.',
  },
  {
    question: "What if you can't make a scheduled visit?",
    answer:
      "I let you know as early as I can and we find another time. I do not send someone else in my place.",
  },
  {
    question: 'How is Apna different from an agency?',
    answer:
      'An agency sends whoever is free that day, usually for three or four hours at a time. With Apna the same person visits every week, in your parent’s language, and a visit can be as short as two hours.',
  },
  {
    question: 'What does Apna not do?',
    answer:
      'No medical or nursing care, no giving of medication (reminders only), no lifting, bathing or dressing, and no legal, tax or money advice. If your parent needs those, I will say so on the first call.',
  },
  {
    question: 'What if we need to pause or stop?',
    answer:
      "Tell me and we work it out. The details are in the written agreement.",
  },
];
