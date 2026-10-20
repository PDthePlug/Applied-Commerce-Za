-- Supabase default privileges may grant RPC execute to anon; keep owner provisioning signed-in only.
revoke execute on function public.create_school_with_owner(text,text,text) from public, anon;
grant execute on function public.create_school_with_owner(text,text,text) to authenticated;
