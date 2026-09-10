// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import { site } from './src/lib/site.ts';

// Single source of truth: site.url in src/lib/site.ts. Canonical tags, the
// sitemap and Open Graph URLs all follow it automatically — change it in
// ONE place (site.ts) when the real domain goes live, not here too.
const SITE_URL = site.url;

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  // 'static' output (default): every page is prerendered EXCEPT ones that
  // opt out with `export const prerender = false` (the /portal/* and
  // /api/* routes) — those are rendered on-demand by this adapter.
  adapter: cloudflare({ imageService: 'passthrough' }),
  build: {
    // Emit clean, inlined output; small stylesheets are inlined for speed.
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
