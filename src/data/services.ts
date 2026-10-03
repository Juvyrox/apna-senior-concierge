// "What we do" — service descriptions. Add or edit a card by editing this
// array; the page renders whatever is here, in this order.
export type Service = { title: string; body: string };

export const services: Service[] = [
  {
    title: 'Weekend prayers and gatherings',
    body: 'The masjid some Saturdays, a janazah or walima on others. We stop at the bakery on the way home.',
  },
  {
    title: 'Halal market and groceries',
    body: "The halal butcher across town, the one they've always used. We carry the bags in and put the cold things away.",
  },
  {
    title: 'Errands and the pharmacy',
    body: "Prescription pickups, the post office, the bank and the barber. Small tasks that pile up when no one has the time.",
  },
  {
    title: 'Chai and company',
    body: 'Some visits have no errand at all. We put the kettle on and spend the afternoon together.',
  },
  {
    title: 'Calls, mail and forms',
    body: "Mail read and explained in Urdu. Phones and WhatsApp set up so family abroad are one call away.",
  },
  {
    title: 'Getting out of the house',
    body: "The park, the senior centre, a friend's home, a family wedding. We stay for the visit, not just the ride.",
  },
];
