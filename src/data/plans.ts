// Service levels — each tier is framed as the previous one, plus what's
// added. Keep the "plus" list to genuinely NEW items only; don't repeat
// what a lower tier already includes.
export type Plan = {
  slug: string;
  name: string;
  hoursLabel: string;
  description: string;
  featuresHeader: string;
  features: { text: string; muted?: boolean }[];
  badge?: string;
  highlighted?: boolean;
  ctaLabel: string;
};

export const plans: Plan[] = [
  {
    slug: 'chai',
    name: 'Chai',
    hoursLabel: '2 hours a weekend',
    description:
      'Two hours over the weekend, without the car. Company, and a person who notices what has changed since the last visit.',
    featuresHeader: 'Includes',
    features: [
      { text: 'The same day and hour every weekend' },
      { text: 'Errands, mail, and household phone calls' },
      { text: 'Video calls set up with family abroad' },
    ],
    ctaLabel: 'Ask about Chai',
  },
  {
    slug: 'dawat',
    name: 'Dawat',
    hoursLabel: '4 hours a weekend',
    badge: 'Most families',
    highlighted: true,
    description:
      'Four hours split over two visits, with the car. Enough for errands and the grocery run over the same weekend.',
    featuresHeader: 'Everything in Chai, plus',
    features: [
      { text: 'Driving included, in our own car' },
      { text: 'Two visits each weekend, same days each time' },
      { text: 'We wait with them, whatever it is' },
      { text: 'A written note to the family each weekend' },
    ],
    ctaLabel: 'Ask about Dawat',
  },
  {
    slug: 'ghar',
    name: 'Ghar',
    hoursLabel: '6 hours in a day',
    description:
      "Six hours in a single day, with the car: one long visit, or two shorter ones with a break between, whatever the day calls for.",
    featuresHeader: 'Everything in Dawat, plus',
    features: [
      { text: 'One full day, start to finish, same day each weekend' },
      { text: 'Priority scheduling for last-minute changes' },
      { text: 'A standing outing built into the day, masjid or park' },
    ],
    ctaLabel: 'Ask about Ghar',
  },
];
