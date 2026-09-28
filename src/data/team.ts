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
    headline: "Apna began with my grandparents.",
    bioParagraphs: [
      "My grandparents needed support in their own language, and there was no one in our community to give it. Asking for help was the hardest part for them. Most of them have passed now, and I wanted other families here to have something better.",
      "I have lived in Southern California since 2016. My husband grew up here and has been part of IOK and ICSGV for more than twenty-five years, while my own family is part of the MCC community in San Diego. My mother and mother-in-law both work in childcare, so caring for others has long been part of our family.",
    ],
  },
];
