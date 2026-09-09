# Apna Senior Concierge — website

The Apna Senior Concierge site, built as a maintainable [Astro](https://astro.build) project and configured for launch. This replaces the earlier single-file Claude Design export with a real, editable codebase. It is **host-agnostic** — nothing is tied to a specific hosting provider.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static site to dist/
npm run preview  # preview the production build
```

Requires Node 20+.

## Project structure

```
src/
  layouts/Layout.astro   # <head>: SEO, Open Graph, favicon, fonts, analytics, cookie banner
  pages/
    index.astro          # the landing page + 3-step booking form
    privacy.astro        # Privacy Policy
    terms.astro          # Terms of Service
    thank-you.astro      # confirmation page
    404.astro            # custom not-found page
  styles/
    global.css           # design system ("Classical" tokens + components)
    fonts.css            # @font-face for the self-hosted fonts
  lib/site.ts            # ← EDIT HERE: contact, plans/pricing, form + analytics config
public/
  fonts/                 # self-hosted Cormorant Garamond, Lora, Noto Naskh Arabic (woff2)
  favicon.svg, apple-touch-icon.png, og-image.png, robots.txt
  _headers               # security + caching headers (portable static-host format)
astro.config.mjs         # site URL + sitemap
```

Everything you'd change day-to-day — email, phone, plans, prices, the form and analytics switches — lives in **`src/lib/site.ts`**.

## Deploy (any static host)

Build command `npm run build`, publish directory `dist/`. Astro outputs a plain static site, so it runs on any static host (Cloudflare Pages, Vercel, GitHub Pages, Netlify, S3, etc.). The `public/_headers` file carries the security + caching headers on hosts that read it; on others, set the equivalent headers in that host's config. HTTPS/HSTS is enforced at the host once the domain is connected.

### Domain

The canonical domain is **apnaseniorconcierge.com** (set in `astro.config.mjs` and `src/lib/site.ts`). Point the domain's DNS at your host, then redeploy — canonical tags, the sitemap, and Open Graph URLs all follow it.

### The booking form

The form is **not tied to any provider.** It works one of two ways, controlled by `formEndpoint` in `src/lib/site.ts`:

- **Blank (default):** the form opens the visitor's email app with a pre-filled message to your contact address. Works immediately, no backend.
- **Set to a POST endpoint:** the form sends the fields as JSON to that URL (e.g. a **Supabase** Edge Function — matches your planned backend — or any form API). If you use Supabase, add its host to `connect-src` in `public/_headers`.

Spam is handled with a hidden honeypot field, no third-party service required.

### Analytics (optional)

Set `plausibleDomain` in `src/lib/site.ts` to `apnaseniorconcierge.com` after creating a site at [plausible.io](https://plausible.io) (cookieless, no personal data). Leave blank for no analytics at all.

## Launch checklist — status

All 20 items done except analytics (a one-line switch): privacy & terms pages, no exposed secrets, HTTPS/HSTS, cookie banner, per-page meta + Open Graph image, favicon, sitemap + robots, alt/aria on art, self-hosted subset fonts, fast static output, contrast + focus rules, responsive/44px targets, custom 404, valid internal links, real form validation, honeypot spam protection, and one clear "Book a call" CTA (nav + hero + plan cards).

## Notes / decisions worth knowing

- **Plans and pricing are now the canonical figures** (Reconciliation doc, 2026-09-08): **Chai 2h/wk · Dawat 4h/wk · Ghar 6h/wk**, flat **$50/hr** — about **$430 / $865 / $1,300** per month. Driving included on Dawat and Ghar. The old Claude Design export still showed 1h/2h/4h and hid pricing; both are corrected here, and prices are now shown on the plan cards and the cost FAQ. (The Client Service Agreement §3 still lists the old 3/6/10 hours — Correction #1 in the reconciliation doc — update that document too before signing.)
- **Email standardized to `hello@apnaconcierge.com`** (the export displayed `salam@…` but linked to `hello@…`). Change `email` in `src/lib/site.ts` if `salam@` is preferred.
- **The booking form does not collect medical details** — the form and privacy policy both say so, matching the service agreement's §7 and Apna's non-medical boundaries.
- **Fonts are self-hosted** — no third-party font requests.
- **Legal pages are strong drafts, not final.** Per the Client Service Agreement's own header, have a California attorney review the Privacy Policy and Terms, and resolve the CDSS Home Care Organization (HCO) licensure question, before your first paying client.
