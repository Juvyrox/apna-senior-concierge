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
    description: "A good starting point if your parent mostly needs company and a hand with small errands.",
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
    description: "The one most families land on, once driving and a longer visit come into the picture.",
    featuresHeader: 'Everything in Chai, plus',
    features: [
      { text: 'Driving included, in our own car' },
      { text: 'One visit or two, as you prefer' },
      { text: 'We stay with them throughout' },
    ],
    ctaLabel: 'Ask about Dawat',
  },
  {
    slug: 'ghar',
    name: 'Ghar',
    hoursLabel: '6 hours in a day',
    description: "Built for families farther away, or when one person has been carrying all of it alone.",
    featuresHeader: 'Everything in Dawat, plus',
    features: [
      { text: 'One full day, in one visit or two' },
      { text: 'We make room for last-minute changes' },
      { text: 'A regular outing during the day, such as the masjid or a park' },
    ],
    ctaLabel: 'Ask about Ghar',
  },
];
