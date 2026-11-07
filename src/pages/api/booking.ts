import type { APIRoute } from 'astro';
import { supabaseAdmin } from '../../lib/supabase';

export const prerender = false;

// Only these fields are saved, each trimmed and length-limited, so a bot
// cannot stuff the table with junk or very large payloads.
const FIELDS = [
  'name', 'phone', 'email', 'relationship', 'age', 'city', 'mobility',
  'companion', 'days', 'hours', 'need', 'experience', 'best_time', 'heard', 'language',
] as const;
const MAX_LEN: Record<string, number> = { need: 2000, email: 200 };
const DEFAULT_MAX = 300;

export const POST: APIRoute = async ({ request, locals }) => {
  // Only accept submissions that come from our own pages.
  const origin = request.headers.get('origin');
  if (origin) {
    let sameSite = false;
    try { sameSite = new URL(origin).host === new URL(request.url).host; } catch { /* bad origin */ }
    if (!sameSite) return new Response('Forbidden', { status: 403 });
  }

  const raw = await request.text();
  if (raw.length > 20000) return new Response('Too large', { status: 413 });

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(raw);
  } catch {
    return new Response('Bad request', { status: 400 });
  }
  if (!body || typeof body !== 'object') return new Response('Bad request', { status: 400 });

  const clean: Record<string, string | null> = {};
  for (const key of FIELDS) {
    const v = (body as Record<string, unknown>)[key];
    clean[key] = typeof v === 'string' && v.trim() ? v.trim().slice(0, MAX_LEN[key] ?? DEFAULT_MAX) : null;
  }
  if (!clean.name || !clean.phone) {
    return new Response('Missing required fields', { status: 400 });
  }

  const env = locals.runtime.env;
  const admin = supabaseAdmin(env);
  const { error } = await admin.from('booking_requests').insert(clean);
  if (error) return new Response('Could not save request', { status: 500 });

  // Optional email alert to the founder. Does nothing until two Cloudflare
  // secrets are set (RESEND_API_KEY and NOTIFY_EMAIL). Never blocks the family.
  if (env.RESEND_API_KEY && env.NOTIFY_EMAIL) {
    try {
      const estate = (clean.relationship || '').startsWith('Estate');
      const lines = [
        `Name: ${clean.name}`,
        `Phone: ${clean.phone}`,
        clean.email ? `Email: ${clean.email}` : '',
        clean.relationship ? `For: ${clean.relationship}` : '',
        clean.city ? `City: ${clean.city}` : '',
        clean.hours ? `Hours: ${clean.hours}` : '',
        clean.best_time ? `Best time: ${clean.best_time}` : '',
        clean.language ? `Language: ${clean.language}` : '',
        clean.need ? `\n${clean.need}` : '',
      ].filter(Boolean);
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: env.NOTIFY_FROM || 'Apna Inquiries <onboarding@resend.dev>',
          to: [env.NOTIFY_EMAIL],
          subject: `${estate ? 'Estate inquiry' : 'New inquiry'}: ${clean.name}`,
          text: lines.join('\n'),
        }),
      });
    } catch {
      /* the inquiry is already saved; an alert failure must not fail the request */
    }
  }

  return new Response('OK', { status: 200 });
};
