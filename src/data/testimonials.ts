// Testimonials — empty until you have real ones from real clients. Add an
// object here when a family gives permission to quote them; the page will
// render a testimonials section automatically once this array is non-empty.
// Do not invent quotes — only add ones an actual client agreed to share.
export type Testimonial = {
  quote: string;
  name: string;
  relation?: string; // e.g. "Daughter of a Dawat client"
};

export const testimonials: Testimonial[] = [];
