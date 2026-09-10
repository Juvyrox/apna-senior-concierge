import type { APIRoute } from 'astro';
import { site } from '../lib/site';

// Dynamic so this can never drift out of sync with site.ts again — the
// static robots.txt file used to hardcode a different domain than the
// site actually lived at.
export const GET: APIRoute = () => {
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap-index.xml\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
};
