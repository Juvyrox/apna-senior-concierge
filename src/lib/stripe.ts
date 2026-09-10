import Stripe from 'stripe';

export function stripe() {
  return new Stripe(import.meta.env.STRIPE_SECRET_KEY);
}
