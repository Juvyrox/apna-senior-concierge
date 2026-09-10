-- Apna Senior Concierge — Phase 1+2 schema
-- Run this once in the Supabase SQL editor (Project → SQL Editor → New query).
-- Mirrors the Business Operations workbook: Client Roster, Visit Log, Invoicing.

create extension if not exists "pgcrypto";

-- ── Clients ─────────────────────────────────────────────────────
-- One row per client. auth_user_id is null until they log into the portal
-- for the first time via magic link matching their email.
create table clients (
  id uuid primary key default gen_random_uuid(),
  auth_user_id uuid unique references auth.users(id) on delete set null,
  name text not null,
  email text not null,
  phone text,
  for_relation text,            -- "Mother", "Father", etc.
  plan_tier text check (plan_tier in ('chai','dawat','ghar')),
  hourly_rate numeric not null default 50,
  status text not null default 'active' check (status in ('active','paused','ended')),
  notes text,
  created_at timestamptz not null default now()
);

-- ── Booking requests ────────────────────────────────────────────
-- Public intake form (replaces the mailto fallback). Pre-client — no auth.
create table booking_requests (
  id uuid primary key default gen_random_uuid(),
  name text, phone text, email text,
  relationship text, age text, city text, mobility text, companion text,
  days text, hours text, need text, experience text,
  best_time text, heard text, language text,
  status text not null default 'new' check (status in ('new','contacted','converted','declined')),
  created_at timestamptz not null default now()
);

-- ── Visit requests ──────────────────────────────────────────────
-- A logged-in client requesting a new/changed recurring slot.
create table visit_requests (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references clients(id) on delete cascade,
  requested_day text not null,
  requested_start text not null,   -- "4:30 PM" — free text to match the intake style
  requested_end text not null,
  notes text,
  status text not null default 'pending' check (status in ('pending','confirmed','declined')),
  created_at timestamptz not null default now()
);

-- ── Visits (actuals) ────────────────────────────────────────────
-- Mirrors the Visit Log tab. Written by you (service role), read by the client.
create table visits (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references clients(id) on delete cascade,
  visit_date date not null,
  hours numeric not null,
  companion text,
  notes text,
  created_at timestamptz not null default now()
);

-- ── Invoices ────────────────────────────────────────────────────
-- Mirrors the Invoicing tab. amount is computed, never entered directly.
create table invoices (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references clients(id) on delete cascade,
  billing_period text not null,      -- 'YYYY-MM'
  hours_billed numeric not null,
  rate numeric not null,
  amount numeric generated always as (hours_billed * rate) stored,
  status text not null default 'unpaid' check (status in ('unpaid','paid','overdue')),
  stripe_checkout_id text,
  stripe_payment_intent text,
  date_sent date,
  date_paid date,
  created_at timestamptz not null default now()
);

-- ── Row Level Security ──────────────────────────────────────────
alter table clients enable row level security;
alter table booking_requests enable row level security;
alter table visit_requests enable row level security;
alter table visits enable row level security;
alter table invoices enable row level security;

-- Clients can read only their own row.
create policy "clients read own" on clients
  for select using (auth_user_id = auth.uid());

-- Anyone (anonymous) can submit a booking request; nobody can read them
-- back except via the service-role key (you, in the Supabase table editor).
create policy "public insert booking_requests" on booking_requests
  for insert with check (true);

-- Clients can read + create their own visit requests.
create policy "client read own visit_requests" on visit_requests
  for select using (
    client_id in (select id from clients where auth_user_id = auth.uid())
  );
create policy "client insert own visit_requests" on visit_requests
  for insert with check (
    client_id in (select id from clients where auth_user_id = auth.uid())
  );

-- Clients can read their own logged visits.
create policy "client read own visits" on visits
  for select using (
    client_id in (select id from clients where auth_user_id = auth.uid())
  );

-- Clients can read their own invoices.
create policy "client read own invoices" on invoices
  for select using (
    client_id in (select id from clients where auth_user_id = auth.uid())
  );

-- Note: all writes to clients/visits/invoices happen via the service-role
-- key (server-side only, e.g. Supabase table editor or a future admin
-- panel) — RLS above only grants clients read access to their own rows.
