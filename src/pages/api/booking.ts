import type { APIRoute } from 'astro';
import { supabaseAdmin } from '../../lib/supabase';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return new Response('Bad request', { status: 400 });
  }

  // Honeypot already stripped client-side, but never trust the client.
  delete body.company;
  if (!body.name || !body.phone) {
    return new Response('Missing required fields', { status: 400 });
  }

  const admin = supabaseAdmin();
  const { error } = await admin.from('booking_requests').insert({
    name: body.name,
    phone: body.phone,
    email: body.email || null,
    relationship: body.relationship,
    age: body.age,
    city: body.city,
    mobility: body.mobility,
    companion: body.companion,
    days: body.days,
    hours: body.hours,
    need: body.need,
    experience: body.experience,
    best_time: body.best_time,
    heard: body.heard,
    language: body.language,
  });

  if (error) return new Response('Could not save request', { status: 500 });
  return new Response('OK', { status: 200 });
};
