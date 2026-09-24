// Availability messaging — the "at a glance" stat row. Hour detail lives
// only in the FAQ (src/data/faq.ts) — don't duplicate it here.
export const availability = {
  stats: [
    { value: 'Weekends', label: 'Visits', accent: true, tabularNums: false },
    { value: 'Urdu, Hindi\nEnglish', label: 'Languages spoken', accent: false, tabularNums: false },
    { value: 'San Gabriel\nValley', label: 'Where we go', accent: false, tabularNums: false },
  ],
};
