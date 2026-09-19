// Locations served — add a new service area by adding an entry here.
export type LocationArea = { name: string; cadence: string; description: string };

export const locations: LocationArea[] = [
  {
    name: 'San Gabriel Valley',
    cadence: 'Regular weekly visits',
    description:
      'Monrovia, Arcadia, Duarte, Pasadena, Temple City, Rosemead, San Gabriel, Alhambra, Covina, West Covina, Azusa, Glendora, and more.',
  },
  {
    name: 'Orange County',
    cadence: 'By request',
    description: 'As far as Irvine, booked ahead as one longer visit instead of a weekly slot.',
  },
];
