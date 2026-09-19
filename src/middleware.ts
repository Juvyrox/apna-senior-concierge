import { defineMiddleware } from 'astro:middleware';
import { supabaseServer, supabaseAdmin } from './lib/supabase';
import { site } from './lib/site';

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

    const adminList = (context.locals.runtime.env.ADMIN_EMAILS || '')
      .split(',')
      .map((e) => e.trim().toLowerCase())
      .filter(Boolean);
    context.locals.isAdmin = !!user?.email && adminList.includes(user.email.toLowerCase());
  } catch {
    // A genuine unexpected failure (DB unreachable, etc). No internals
    // leaked to the visitor — Cloudflare's own logs still have the detail.
    return new Response(
      `Something went wrong loading the portal. Try refreshing, or reach us at ${site.email}.`,
      { status: 200, headers: { 'Content-Type': 'text/plain' } }
    );
  }

  const isPublic = PUBLIC_PORTAL_PATHS.some((p) => pathname.startsWith(p));
  if (!user && !isPublic) {
    return context.redirect('/portal/login');
  }
  if (pathname.startsWith('/portal/admin') && !context.locals.isAdmin) {
    return context.redirect('/portal');
  }
  return next();
});
