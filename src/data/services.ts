// "What we do" — service descriptions. Add or edit a card by editing this
// array; the page renders whatever is here, in this order.
export type Service = { title: string; body: string };

export const services: Service[] = [
  {
    title: 'Weekend prayers and gatherings',
    body: 'The masjid on a Saturday or Sunday, a janazah, a walima, with a stop at the bakery on the way home.',
  },
  {
    title: 'Halal market and groceries',
    body: 'The good butcher, not the near one. We carry the bags in and put the cold things away.',
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
    title: 'Mail, forms and phone calls',
    body: 'Read out in Urdu, explained properly, and the call to the office made with your parent on the line rather than around them.',
  },
  {
    title: 'Phones and video calls',
    body: 'WhatsApp working again, the volume fixed, and a call to Karachi that connects on the first try.',
  },
  {
    title: 'Getting out of the house',
    body: "The park, the senior centre, a friend's house, the shaadi you'd otherwise miss. Company on both ends of the drive.",
  },
];
