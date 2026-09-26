// "What we do" — service descriptions. Add or edit a card by editing this
// array; the page renders whatever is here, in this order.
export type Service = { title: string; body: string };

export const services: Service[] = [
  {
    title: 'Weekend prayers and gatherings',
    body: 'The masjid on a Saturday or Sunday. A janazah, a walima, a stop at the bakery on the way home.',
  },
  {
    title: 'Halal market and groceries',
    body: "The butcher two neighborhoods over, because the meat's better there. We carry the bags in and put the cold things away.",
  },
  {
    title: 'Errands and the pharmacy',
    body: "Refills picked up, the post office, the bank lobby, the barber. Small things that pile up when nobody's free.",
  },
  {
    title: 'Chai and company',
    body: 'Some visits have no errand in them at all. We put the kettle on and stay for the long part of the afternoon.',
  },
  {
    title: 'Calls, mail and forms',
    body: "Mail read and explained in Urdu. WhatsApp fixed when it stops working. A call to Karachi that connects on the first try.",
  },
  {
    title: 'Getting out of the house',
    body: "The park, the senior centre, a friend's house, the shaadi you'd otherwise miss. Company on both ends of the drive.",
  },
];
