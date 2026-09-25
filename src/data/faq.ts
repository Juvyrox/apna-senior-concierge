// FAQ — add a question by adding an object to this array. Rendered in order.
export type FaqItem = { question: string; answer: string };

export const faq: FaqItem[] = [
  {
    question: 'What does it cost?',
    answer:
      "It depends on your family's actual needs, and we work that out together before anything's decided. Rates start at $50 an hour, with driving included on Dawat and Ghar. Give us your situation on the call and you'll get a real number, not a guess. Nothing charged before the first visit.",
  },
  {
    question: "My parent says they don't need help.",
    answer:
      "That's the usual starting point. It tends to go better as a visit than as a service. Someone comes for chai, stays a while, and the ride happens because they're already there. Most families start with Dawat, four hours over the weekend, and let it grow from there.",
  },
  {
    question: 'I live out of state. Can I arrange this from here?',
    answer:
      "Yes, and a lot of families do. You book it, we visit, and you get a written update each weekend on the Dawat and Ghar plans. If something seems off, you'll hear about it from us before you hear about it from your mother.",
  },
  {
    question: 'My father uses a wheelchair. Can you help?',
    answer:
      "Only if he can get in and out of the car on his own or with family there to help. We don't lift, carry or transfer anyone, and our car has no lift. If that's what's needed, we unfortunately can't help with this one right now.",
  },
  {
    question: 'What if my parents speak a different language?',
    answer:
      "Urdu, Hindi, Memoni and English are covered today. Tell us your language on the call and we'll say straight away whether we can match it now or not yet. For a diagnosis or anything legal, ask the clinic for a certified interpreter. We'll make that call for you and sit in alongside them.",
  },
  {
    question: 'What hours can you visit?',
    answer:
      "Weekends. That's when we can actually give your family real, unrushed time, not an hour squeezed between other things. Tell us what your weekend looks like and we'll work out a time that fits.",
  },
  {
    question: 'Do we have to be Muslim?',
    answer:
      "No. We started with our own community because that's where the gap was. Anyone in the service area is welcome, whatever their faith or language, and we'll say plainly if we're the wrong fit.",
  },
];
