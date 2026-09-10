import type { APIRoute } from 'astro';
import { supabaseServer } from '../../../lib/supabase';

export const prerender = false;

export const POST: APIRoute = async ({ cookies, locals, redirect }) => {
  const supabase = supabaseServer(cookies, locals.runtime.env);
  await supabase.auth.signOut();
  return redirect('/portal/login');
};
