import { defineMiddleware } from 'astro:middleware';
import { supabaseServer } from './lib/supabase';

const PUBLIC_PORTAL_PATHS = ['/portal/login', '/portal/auth/callback'];

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  if (!pathname.startsWith('/portal')) return next();

  const supabase = supabaseServer(context.cookies);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  context.locals.supabase = supabase;
  context.locals.user = user;

  const isPublic = PUBLIC_PORTAL_PATHS.some((p) => pathname.startsWith(p));
  if (!user && !isPublic) {
    return context.redirect('/portal/login');
  }
  return next();
});
