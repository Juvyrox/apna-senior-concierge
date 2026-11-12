// Service levels. priceMonthly follows the Master Doc at the public $60 rate
// (weekly hours x 60 x 52 / 12, rounded to $5). Update it if site.rateHourly changes.
export type Plan = {
  slug: string;
  name: string;
  hoursLabel: string;
  priceMonthly: string;
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
    hoursLabel: '2 hours a week',
    priceMonthly: '$520',
    description: 'A weekly visit for company and the small things that pile up.',
    featuresHeader: 'Includes',
    features: [
      { text: 'The same day and time every weekend' },
      { text: 'Mail, phone help and calls made together' },
      { text: 'A note to you after every visit' },
    ],
    ctaLabel: 'Ask about Chai',
  },
  {
    slug: 'dawat',
    name: 'Dawat',
    hoursLabel: '4 hours a week',
    priceMonthly: '$1,040',
    badge: 'Most families',
    highlighted: true,
    description: 'A longer visit, with time for errands and a meal as well as company.',
    featuresHeader: 'Everything in Chai, plus',
    features: [
      { text: 'One long visit or two shorter ones' },
      { text: 'Groceries and errands picked up for them' },
      { text: 'Cooking and a meal together' },
    ],
    ctaLabel: 'Ask about Dawat',
  },
  {
    slug: 'ghar',
    name: 'Ghar',
    hoursLabel: '8 hours a week',
    priceMonthly: '$2,080',
    description: 'For families far away, or when one person has been carrying all of it alone.',
    featuresHeader: 'Everything in Dawat, plus',
    features: [
      { text: 'A full day each weekend, in one visit or two' },
      { text: 'Room for last-minute changes' },
      { text: 'A monthly call with you about how things are going' },
    ],
    ctaLabel: 'Ask about Ghar',
  },
];
