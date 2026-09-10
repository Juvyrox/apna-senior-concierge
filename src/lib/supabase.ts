import { createServerClient } from '@supabase/ssr';
import { createClient } from '@supabase/supabase-js';
import type { AstroCookies } from 'astro';

type SupabaseEnv = {
  SUPABASE_URL: string;
  SUPABASE_ANON_KEY: string;
  SUPABASE_SERVICE_ROLE_KEY: string;
};

// Session-aware client — reads/writes the auth cookie on each request.
// Use this in pages and API routes that act as the logged-in client.
export function supabaseServer(cookies: AstroCookies, env: SupabaseEnv) {
  return createServerClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY, {
    cookies: {
      get: (key) => cookies.get(key)?.value,
      set: (key, value, options) => cookies.set(key, value, options),
      remove: (key, options) => cookies.delete(key, options),
    },
  });
}

// Service-role client — bypasses RLS. Server-only, never expose to the
// browser. Used for admin writes (e.g. marking an invoice paid).
export function supabaseAdmin(env: SupabaseEnv) {
  return createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
}
