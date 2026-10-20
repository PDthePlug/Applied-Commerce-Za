-- Keep the exposed RPC invoker-security; the privileged implementation lives in the non-exposed private schema.
create or replace function private.create_school_with_owner_impl(
  p_name text,
  p_slug text,
  p_owner_email text
) returns public.schools
language plpgsql
security definer
set search_path = ''
as $function$
declare
  v_school public.schools;
  v_actor uuid := (select auth.uid());
  v_owner uuid;
begin
  if v_actor is null or not private.is_platform_admin() then
    raise insufficient_privilege using message = 'Only platform administrators can create institutions';
  end if;
  if trim(coalesce(p_name,'')) = '' or trim(coalesce(p_slug,'')) = '' or trim(coalesce(p_owner_email,'')) = '' then
    raise invalid_parameter_value using message = 'Institution name, slug and owner email are required';
  end if;
  if lower(trim(p_slug)) !~ '^[a-z0-9]+(-[a-z0-9]+)*$' then
    raise invalid_parameter_value using message = 'Slug must use lowercase letters, numbers and hyphens';
  end if;
  select u.id into v_owner from auth.users u
    where lower(u.email) = lower(trim(p_owner_email))
      and coalesce(u.is_anonymous,false) = false
    limit 1;
  if v_owner is null then
    raise foreign_key_violation using message = 'No existing account matches the institution owner email';
  end if;
  if v_owner = v_actor then
    raise check_violation using message = 'Choose a separate institution owner account';
  end if;
  insert into public.schools(name,slug) values(trim(p_name),lower(trim(p_slug))) returning * into v_school;
  insert into public.school_memberships(school_id,user_id,role,status)
    values(v_school.id,v_owner,'owner','active');
  insert into public.audit_events(actor_user_id,school_id,event_type,entity_type,entity_id,metadata)
    values(v_actor,v_school.id,'school.created','school',v_school.id,
      jsonb_build_object('name',v_school.name,'owner_user_id',v_owner,'created_by_platform_admin',true));
  return v_school;
exception when unique_violation then
  raise unique_violation using message = 'A school with that slug already exists';
end;
$function$;

revoke execute on function private.create_school_with_owner_impl(text,text,text) from public, anon;
grant execute on function private.create_school_with_owner_impl(text,text,text) to authenticated;

create or replace function public.create_school_with_owner(
  p_name text,
  p_slug text,
  p_owner_email text
) returns public.schools
language sql
security invoker
set search_path = ''
as $function$
  select private.create_school_with_owner_impl(p_name,p_slug,p_owner_email);
$function$;

revoke execute on function public.create_school_with_owner(text,text,text) from public, anon;
grant execute on function public.create_school_with_owner(text,text,text) to authenticated;
