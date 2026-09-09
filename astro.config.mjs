// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The canonical production URL — the owned domain. Canonical tags, the
// sitemap and Open Graph URLs all follow it. Point the domain's DNS at your
// host and redeploy; nothing here is tied to a specific hosting provider.
const SITE_URL = 'https://apnaseniorconcierge.com';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  build: {
    // Emit clean, inlined output; small stylesheets are inlined for speed.
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
