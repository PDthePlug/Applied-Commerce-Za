-- Match AC account-preference vocabulary so the Zimbabwe settings port can share tested behaviour.
alter table public.account_preferences
  alter column appearance set default 'system',
  alter column accent set default 'commerce',
  alter column text_size set default 'standard',
  alter column reading_width set default 'standard';

alter table public.account_preferences
  drop constraint if exists account_preferences_appearance_check,
  drop constraint if exists account_preferences_accent_check,
  drop constraint if exists account_preferences_text_size_check,
  drop constraint if exists account_preferences_reading_width_check;

alter table public.account_preferences
  add constraint account_preferences_appearance_check
    check (appearance in ('system', 'light', 'warm', 'dark')),
  add constraint account_preferences_accent_check
    check (accent in ('commerce', 'blue', 'amber', 'sage')),
  add constraint account_preferences_text_size_check
    check (text_size in ('small', 'standard', 'large', 'extra_large')),
  add constraint account_preferences_reading_width_check
    check (reading_width in ('narrow', 'standard', 'wide'));
