// ─────────────────────────────────────────────────────────────
// Single source of truth for business facts + SEO defaults.
// Edit values here and every page updates.
// Figures below are the canonical facts (Reconciliation doc, 2026-09-08).
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Apna Senior Concierge',
  shortName: 'Apna',
  tagline: "Your parents shouldn't have to explain themselves in English.",
  description:
    'Apna Senior Concierge provides companions who speak your parents’ language — rides to appointments, the market run, errands and company — across the San Gabriel Valley. Non-medical senior concierge and companion support.',
  founder: 'Juveriyah Salat',

  // Canonical production domain (owned domain, not the host subdomain).
  url: 'https://apnaseniorconcierge.com',

  // Contact
  email: 'hello@apnaconcierge.com',
  phone: '(510) 437-0136',
  phoneHref: 'tel:+15104370136',
  officeHours: 'Mon to Sat, 9am to 7pm',

  // Service area
  region: 'San Gabriel Valley, California',
  cities: [
    'Monrovia', 'Arcadia', 'Duarte', 'Pasadena', 'Temple City', 'Rosemead',
    'San Gabriel', 'Alhambra', 'Covina', 'West Covina', 'Azusa', 'Glendora',
  ],

  // Plans — canonical: Chai 2h / Dawat 4h / Ghar 6h, flat $50/hr.
  rateHourly: '$50/hr',
  plans: {
    chai: { hours: '2 hours a week', monthly: '$430 / month' },
    dawat: { hours: '4 hours a week', monthly: '$865 / month' },
    ghar: { hours: '6 hours a week', monthly: '$1,300 / month' },
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
  lastUpdated: 'September 9, 2026',
} as const;

export type Site = typeof site;
