// "What I help with" — service cards. Add or edit a card by editing this
// array; the page renders whatever is here, in this order.
// Driving a client is NOT offered until coverage is confirmed (see Master Doc).
export type Service = { title: string; body: string };

export const services: Service[] = [
  {
    title: 'Chai and company',
    body: 'Some visits have no task at all. I put the kettle on and we spend the afternoon together.',
  },
  {
    title: 'Mail, forms and phone calls',
    body: 'I read and explain letters in Urdu or Hindi, and we make calls to the pharmacy or the bank together, so nothing gets lost.',
  },
  {
    title: 'Phones and video calls',
    body: 'I set up WhatsApp, photos and video calls and practise them with your parent, so family abroad are one tap away.',
  },
  {
    title: 'Groceries and errands, brought to the door',
    body: 'The halal butcher they have always used, the pharmacy, the post office. I pick things up and put the cold things away.',
  },
  {
    title: 'Cooking and a shared meal',
    body: 'Their recipes in their kitchen. I chop, they direct, and we sit down to eat together.',
  },
  {
    title: 'Meeting them at appointments and gatherings',
    body: 'I can meet your parent at the masjid, a family gathering or an appointment and stay with them. I do not drive clients for now.',
  },
];
