// "What we do" — service descriptions. Add or edit a card by editing this
// array; the page renders whatever is here, in this order.
export type Service = { title: string; body: string };

export const services: Service[] = [
  {
    title: 'Weekend prayers and gatherings',
    body: 'The masjid on a Saturday or Sunday, or a janazah or walima, with a stop at the bakery on the way home.',
  },
  {
    title: 'Halal market and groceries',
    body: "The halal butcher across town, if that is where your parent prefers to shop. We carry the bags in and put the cold things away.",
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
    body: "Mail read and explained in Urdu, and phones and WhatsApp set up to reach family abroad.",
  },
  {
    title: 'Getting out of the house',
    body: "Outings to the park, the senior centre, a friend's home or a family wedding. We go along and stay for the visit.",
  },
];
