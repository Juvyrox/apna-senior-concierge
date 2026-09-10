import Stripe from 'stripe';

export function stripe(env: { STRIPE_SECRET_KEY: string }) {
  return new Stripe(env.STRIPE_SECRET_KEY);
}
