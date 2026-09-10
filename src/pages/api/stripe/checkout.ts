import type { APIRoute } from 'astro';
import { stripe } from '../../../lib/stripe';
import { site } from '../../../lib/site';
import { supabaseServer } from '../../../lib/supabase';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, locals }) => {
  const supabase = supabaseServer(cookies, locals.runtime.env);
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return new Response('Unauthorized', { status: 401 });

  const { invoiceId } = await request.json();
  if (!invoiceId) return new Response('Missing invoiceId', { status: 400 });

  // RLS scopes this to the logged-in client's own invoice — no cross-client access.
  const { data: invoice } = await supabase
    .from('invoices')
    .select('id, amount, billing_period, status, client_id, clients!inner(auth_user_id)')
    .eq('id', invoiceId)
    .single();

  if (!invoice || invoice.status !== 'unpaid') {
    return new Response('Invoice not found or already paid', { status: 404 });
  }

  const session = await stripe(locals.runtime.env).checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: { name: `Apna Senior Concierge — ${invoice.billing_period}` },
          unit_amount: Math.round(Number(invoice.amount) * 100),
        },
        quantity: 1,
      },
    ],
    metadata: { invoice_id: invoice.id },
    success_url: `${site.url}/portal?paid=1`,
    cancel_url: `${site.url}/portal`,
  });

  return new Response(JSON.stringify({ url: session.url }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
