import type { APIRoute } from 'astro';
import { stripe } from '../../../lib/stripe';
import { supabaseAdmin } from '../../../lib/supabase';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const sig = request.headers.get('stripe-signature');
  const body = await request.text();

  let event;
  try {
    event = stripe().webhooks.constructEvent(
      body,
      sig!,
      import.meta.env.STRIPE_WEBHOOK_SECRET
    );
  } catch {
    return new Response('Invalid signature', { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as any;
    const invoiceId = session.metadata?.invoice_id;
    if (invoiceId) {
      await supabaseAdmin()
        .from('invoices')
        .update({
          status: 'paid',
          date_paid: new Date().toISOString().slice(0, 10),
          stripe_checkout_id: session.id,
          stripe_payment_intent: session.payment_intent,
        })
        .eq('id', invoiceId);
    }
  }

  return new Response('OK', { status: 200 });
};
