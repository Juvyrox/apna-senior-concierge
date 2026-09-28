// FAQ — add a question by adding an object to this array. Rendered in order.
export type FaqItem = { question: string; answer: string };

export const faq: FaqItem[] = [
  {
    question: 'What does it cost?',
    answer:
      "It depends on your family's actual needs. We work that out together before anything's decided. Rates start at $50 an hour. Tell us your situation on the call and we'll give you a number on the spot. Nothing charged before the first visit.",
  },
  {
    question: "My parent says they don't need help.",
    answer:
      "That's the usual starting point. It tends to go better as a visit than as a service. Someone comes for chai and stays a while. The ride happens because they're already there. Most families start with Dawat, four hours over the weekend. It grows from there.",
  },
  {
    question: 'I live out of state. Can I arrange this from here?',
    answer:
      "Yes, a lot of families do. You book it, we visit. You get a written update every weekend, whichever plan you're on. If something seems off, you'll hear about it from us before you hear about it from your parent.",
  },
  {
    question: 'My parent uses a wheelchair. Can you help?',
    answer:
      "Only if they can get in and out of the car on their own or with family there to help. We don't lift, carry or transfer anyone. Our car has no lift. If that's what's needed, we unfortunately can't help with this one right now.",
  },
  {
    question: 'What if my parents speak a different language?',
    answer:
      "Urdu, Hindi, Memoni and English are covered today. Tell us your language on the call and we'll say straight away whether we can match it now or not yet.",
  },
  {
    question: 'What hours can you visit?',
    answer:
      "Weekends. That's when we can actually give your family real, unrushed time. Not an hour squeezed between other things. Tell us what your weekend looks like and we'll work out a time that fits.",
  },
  {
    question: 'Do we have to be Muslim?',
    answer:
      "No. We started with our own community because that's where the gap was. Anyone in the service area is welcome, whatever their faith or language. We'll tell you straight if we're the wrong fit.",
  },
  {
    // Keep in sync with src/data/locations.ts — same facts, this is just
    // the FAQ-format restatement.
    question: 'Where do you serve?',
    answer:
      "San Gabriel Valley, with regular weekly visits: Monrovia, Arcadia, Duarte, Pasadena, Temple City, Rosemead, San Gabriel, Alhambra, Covina, West Covina, Azusa, Glendora, and more. Orange County too, as far as Irvine, by request as one longer visit instead of a weekly slot.",
  },
  {
    question: "What if you're sick or can't make a visit?",
    answer:
      "Things come up. Since it's just me right now, if I can't make a visit you'll hear from me directly and as early as possible. We reschedule together. I don't send a substitute stranger. If a particular week matters more than most, tell us on the call and we'll be clear about that going in.",
  },
  {
    question: 'How is this different from an agency or a site like Care.com?',
    answer:
      "An agency sends whoever's available that day. A site like Care.com hands you a list of strangers to vet yourself. Here it's one person, the same one every time. I already know your parent's language, habits and week. You're not managing a rotating roster. You're calling one number.",
  },
  {
    question: 'What if we need to pause or stop?',
    answer:
      "Tell us and we'll work it out. No contract locking you in, and no penalty for pausing if your parent's needs change. The written agreement covers the standing arrangement, not a commitment you can't get out of.",
  },
];
