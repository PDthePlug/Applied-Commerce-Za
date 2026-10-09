import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const authContext=fs.readFileSync("lib/auth-context.tsx","utf8");
const browserClient=fs.readFileSync("lib/supabase/client.ts","utf8");
const serverClient=fs.readFileSync("lib/supabase/server.ts","utf8");
const proxy=fs.readFileSync("lib/supabase/proxy.ts","utf8");
const preferences=fs.readFileSync("app/api/preferences/route.ts","utf8");
const settings=fs.readFileSync("components/settings-dashboard.tsx","utf8");
const authPanel=fs.readFileSync("components/auth-panel.tsx","utf8");
const migration=fs.readFileSync("supabase/migrations/20261009232116_ac_zw_platform_foundation.sql","utf8");

test("auth integration uses only the dedicated publishable key and typed Supabase clients",()=>{
 assert.match(browserClient,/NEXT_PUBLIC_SUPABASE_URL/);
 assert.match(browserClient,/NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY/);
 assert.doesNotMatch(browserClient,/SERVICE_ROLE|service_role|secret/i);
 assert.match(serverClient,/createServerClient<Database>/);
 assert.match(proxy,/supabase\.auth\.getClaims\(\)/);
 assert.match(authContext,/onAuthStateChange/);
});

test("preference API requires the authenticated user and pins writes to that user",()=>{
 assert.match(preferences,/supabase\.auth\.getUser\(\)/);
 assert.match(preferences,/if \(error \|\| !data\.user\)/);
 assert.match(preferences,/eq\("user_id", auth\.user\.id\)/);
 assert.match(preferences,/x-ac-expected-user-id/);
 assert.match(preferences,/Object\.keys\(body\)\.some\(key => !ALLOWED_KEYS\.has\(key\)\)/);
 assert.match(migration,/account_preferences_select_own[\s\S]*?user_id = \(select auth\.uid\(\)\)/i);
 assert.match(migration,/account_preferences_update_own[\s\S]*?with check \(user_id = \(select auth\.uid\(\)\)\)/i);
});

test("account settings expose Zimbabwe Forms 1-4 and never allow self-assigned staff roles",()=>{
 assert.match(settings,/\[1,2,3,4\]/);
 assert.match(settings,/Current Form/);
 assert.match(settings,/staff access is assigned separately/i);
 assert.doesNotMatch(settings,/platform_admins|grant.*role|role selector/i);
 assert.match(authPanel,/Staff access is assigned separately/);
});

test("auth route stays separate from the learner shell and auth configuration remains opt-in",()=>{
 const env=fs.readFileSync(".env.example","utf8");
 const shell=fs.readFileSync("components/app-shell.tsx","utf8");
 assert.match(env,/NEXT_PUBLIC_APPLIED_COMMERCE_BACKEND_MODE=local/);
 assert.match(env,/NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=/);
 assert.match(shell,/const authPage=pathname==="\/auth"/);
 assert.match(shell,/!focusedReader && !authPage/);
});
