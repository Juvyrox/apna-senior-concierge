// Service levels. hourly rate is intentionally not a fixed number — see
// rateNote below, shown once above the cards and echoed on each card.
export type Plan = {
  slug: string;
  name: string;
  hoursLabel: string;
  description: string;
  features: { text: string; muted?: boolean }[];
  badge?: string;
  highlighted?: boolean;
  ctaLabel: string;
};

export const rateNote = { main: 'Starts at $50', suffix: ' / hr — ask us' };

export const plans: Plan[] = [
  {
    slug: 'chai',
    name: 'Chai',
    hoursLabel: '2 hours a week',
    description:
      'Two hours a week, without the car. Company, errands within walking distance, and a person who notices what has changed since last week.',
    features: [
      { text: 'The same day and hour every week' },
      { text: 'Errands, mail, and household phone calls' },
      { text: 'Video calls set up with family abroad' },
      { text: 'Driving is not included at this level', muted: true },
    ],
    ctaLabel: 'Ask about Chai',
  },
  {
    slug: 'dawat',
    name: 'Dawat',
    hoursLabel: '4 hours a week',
    badge: 'Most families',
    highlighted: true,
    description:
      'Four hours split over two visits, with the car. Enough for appointments and the grocery run in the same week.',
    features: [
      { text: 'Two visits a week, same days each time' },
      { text: 'Driving included, in our own car' },
      { text: 'We wait through the appointment, not outside' },
      { text: 'A written note to the family each week' },
    ],
    ctaLabel: 'Ask about Dawat',
  },
  {
    slug: 'ghar',
    name: 'Ghar',
    hoursLabel: '6 hours a week',
    description:
      'Six hours over two or three visits. For families living far away, or when one person at home has been carrying all of it alone. Priority scheduling, and Ramadan and Eid hours arranged ahead.',
    features: [
      { text: 'Two longer visits instead of two short ones' },
      { text: 'Changes accommodated the same week' },
      { text: 'A standing weekend outing, masjid or park' },
      { text: 'Ramadan and Eid hours planned ahead' },
    ],
    ctaLabel: 'Ask about Ghar',
  },
];
