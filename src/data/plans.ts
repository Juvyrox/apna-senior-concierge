// Service levels — each tier is framed as the previous one, plus what's
// added. description = who it's for (no facts restated there). features =
// every concrete fact, stated once. Don't let the two repeat each other.
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
    description: "For families who mostly need company and small errands close to home.",
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
    description: "For families who need more: appointments, groceries, someone behind the wheel.",
    featuresHeader: 'Everything in Chai, plus',
    features: [
      { text: 'Driving included, in our own car' },
      { text: 'One visit or two, whatever works best' },
      { text: 'We wait with them, whatever it is' },
    ],
    ctaLabel: 'Ask about Dawat',
  },
  {
    slug: 'ghar',
    name: 'Ghar',
    hoursLabel: '6 hours in a day',
    description: "For families further away, or carrying it all alone until now.",
    featuresHeader: 'Everything in Dawat, plus',
    features: [
      { text: 'One full day, one visit or two, whatever works best' },
      { text: 'Priority scheduling for last-minute changes' },
      { text: 'A standing outing built into the day, masjid or park' },
    ],
    ctaLabel: 'Ask about Ghar',
  },
];
