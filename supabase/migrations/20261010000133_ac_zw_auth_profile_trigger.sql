-- Ensure every newly registered Supabase user has the base profile row required by learner profiles and enrolments.
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function private.handle_new_auth_user();
