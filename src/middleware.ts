import { defineMiddleware } from 'astro:middleware';
import { supabaseServer, supabaseAdmin } from './lib/supabase';

const PUBLIC_PORTAL_PATHS = ['/portal/login', '/portal/auth/callback'];

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  if (!pathname.startsWith('/portal')) return next();

  let user = null;
  try {
    const supabase = supabaseServer(context.cookies, context.locals.runtime.env);
    const {
      data: { user: sessionUser },
    } = await supabase.auth.getUser();
    context.locals.supabase = supabase;
    context.locals.user = sessionUser;
    user = sessionUser;

    // First login: link this auth account to a client row that matches
    // their email but isn't linked to anyone yet. Cheap no-op on every
    // later request once the link exists (the .is() filter finds nothing).
    if (user?.email) {
      const admin = supabaseAdmin(context.locals.runtime.env);
      const { data: unlinked } = await admin
        .from('clients')
        .select('id')
        .eq('email', user.email)
        .is('auth_user_id', null)
        .maybeSingle();
      if (unlinked) {
        await admin.from('clients').update({ auth_user_id: user.id }).eq('id', unlinked.id);
      }
    }
  } catch (err) {
    // TEMPORARY — surfaces the real error instead of a blank 500 while we
    // debug the first deploy. Status forced to 200 so the browser actually
    // displays this instead of substituting its own generic error page.
    // Remove this whole catch block once /portal works.
    const message = err instanceof Error ? err.stack || err.message : String(err);
    return new Response(`PORTAL DEBUG ERROR (this is not a real page):\n\n${message}`, {
      status: 200,
      headers: { 'Content-Type': 'text/plain' },
    });
  }

  const isPublic = PUBLIC_PORTAL_PATHS.some((p) => pathname.startsWith(p));
  if (!user && !isPublic) {
    return context.redirect('/portal/login');
  }
  return next();
});
