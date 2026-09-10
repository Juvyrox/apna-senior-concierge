/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type CloudflareEnv = {
  SUPABASE_URL: string;
  SUPABASE_ANON_KEY: string;
  SUPABASE_SERVICE_ROLE_KEY: string;
  STRIPE_SECRET_KEY: string;
  STRIPE_WEBHOOK_SECRET: string;
  STRIPE_PUBLISHABLE_KEY: string;
};

declare namespace App {
  interface Locals {
    // Injected by @astrojs/cloudflare — this is how Cloudflare Worker
    // secrets/vars reach the app at runtime (NOT import.meta.env, which
    // only holds build-time values).
    runtime: {
      env: CloudflareEnv;
    };
    supabase: import('@supabase/supabase-js').SupabaseClient;
    user: import('@supabase/supabase-js').User | null;
  }
}
