// ─────────────────────────────────────────────────────────────
// Single source of truth for business facts + SEO defaults.
// Edit values here and every page updates.
// Figures below follow the Apna Master Doc.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Apna Senior Concierge',
  shortName: 'Apna',
  tagline: "Your parents shouldn't have to explain themselves in English.",
  description:
    'Non-medical companionship, errands and transportation assistance for older adults in the San Gabriel Valley, with companions who speak your parents’ language.',
  founder: 'Juveriyah Salat',

  // Canonical production domain. Single source of truth for canonical tags,
  // sitemap, robots.txt, login and Stripe redirects.
  // TEMPORARY: the apnaseniorconcierge.com domain is not bought or connected yet,
  // so canonical tags and the sitemap point at the live address. Switch this to
  // 'https://apnaseniorconcierge.com' on the day the domain goes live.
  url: 'https://apna-senior-concierge.skyscaper1.workers.dev',

  // Contact
  email: 'info@apnaseniorconcierge.com',
  // Set true only once mail to the address above actually arrives. While false,
  // pages show the phone number instead of the email address.
  emailLive: false,
  phone: '(510) 437-0136',
  phoneHref: 'tel:+15104370136',
  whatsappHref: 'https://wa.me/15104370136',

  // Service area
  region: 'San Gabriel Valley, California',
  cities: [
    'Monrovia', 'Arcadia', 'Duarte', 'Pasadena', 'Temple City', 'Rosemead',
    'San Gabriel', 'Alhambra', 'Covina', 'West Covina', 'Azusa', 'Glendora',
  ],

  // Plans — Chai 2h / Dawat 4h / Ghar 8h a week. Hourly rate is the same
  // whatever the task; it is set in the written agreement.
  // Public rate. First five families are offered $50/hr for their first year;
  // remove foundingNote once those five places are taken. See Master Doc.
  rateHourly: '$60 an hour',
  // Estate Transition Concierge: public starting rate; total depends on project size.
  estateRate: 'From $100 an hour',
  foundingNote: 'Our first five families are offered $50 an hour for their first year.',
  plans: {
    chai: { hours: '2 hours a week' },
    dawat: { hours: '4 hours a week' },
    ghar: { hours: '8 hours a week' },
  },

  // ── Booking form delivery (host-agnostic — no Netlify Forms) ──
  // Leave blank to use the built-in mailto fallback: the form composes a
  // pre-filled email to the address above and opens the visitor's mail app.
  // To collect submissions automatically, set this to a POST endpoint that
  // accepts JSON — e.g. a Supabase Edge Function or a form API. The form
  // will POST the fields as JSON and show the confirmation on success.
  formEndpoint: '/api/booking',

  // ── Analytics (privacy-friendly, cookieless) ──
  // Leave blank to ship with NO analytics (no third-party script, no cookies).
  // To turn on Plausible: create a site at https://plausible.io (or self-hosted
  // Umami/Plausible), then set this to 'apnaseniorconcierge.com'.
  plausibleDomain: '',

  // Legal
  lastUpdated: 'November 7, 2026',
} as const;

export type Site = typeof site;
