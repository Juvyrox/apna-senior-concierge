// Team — currently just the founder. Add a companion here once the
// business is registered as a home care organization and hiring begins.
export type TeamMember = {
  name: string;
  role: string;
  bioParagraphs: string[];
  headline: string; // the big quote-style line above the bio, e.g. "I started this for my grandparents."
};

export const team: TeamMember[] = [
  {
    name: 'Juveriyah Salat',
    role: 'Founder, Apna Senior Concierge',
    headline: 'I started this for my grandparents.',
    bioParagraphs: [
      'There was no one to help the elders in our community who spoke the language. Most of my grandparents have passed now. They needed support, and asking for it was the hardest part for them. I didn\'t want that to be the reality for anyone else\'s grandparents here.',
      'I\'ve been in Southern California since 2016. My husband grew up here and has been part of IOK and ICSGV for more than twenty-five years. My family is part of the MCC Community in San Diego. My mother and mother-in-law both work in childcare, so looking after people is not new in our family.',
    ],
  },
];
