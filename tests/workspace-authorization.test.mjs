import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const access=fs.readFileSync("lib/server/workspace-access.ts","utf8");
const facilitator=fs.readFileSync("app/facilitator/page.tsx","utf8");
const institution=fs.readFileSync("app/institution-admin/page.tsx","utf8");
const platform=fs.readFileSync("app/platform-admin/page.tsx","utf8");

test("workspace access is derived from the authenticated user and database assignments",()=>{
 assert.match(access,/supabase\.auth\.getUser\(\)/);
 assert.match(access,/rpc\("is_platform_admin"\)/);
 assert.match(access,/from\("school_memberships"\).*?eq\("user_id", user\.id\).*?eq\("status", "active"\)/);
 assert.match(access,/from\("cohort_staff"\).*?eq\("user_id", user\.id\).*?eq\("status", "active"\)/);
 assert.doesNotMatch(access,/user_metadata|app_metadata|localStorage|NEXT_PUBLIC_.*ROLE/i);
});

test("facilitator route rejects users without an assigned cohort or institution-admin scope",()=>{
 assert.match(access,/workspace === "facilitator" && access\.cohortIds\.length === 0 && access\.institutionAdminIds\.length === 0\) redirect\("\/"\)/);
 assert.match(facilitator,/requireWorkspaceAccess\("facilitator"\)/);
 assert.match(facilitator,/\.in\("id", access\.cohortIds\)/);
});

test("institution administration is limited to owner/admin memberships or platform-admin authority",()=>{
 assert.match(access,/row\.role === "owner" \|\| row\.role === "admin"/);
 assert.match(access,/workspace === "institution-admin" && access\.institutionAdminIds\.length === 0\) redirect\("\/"\)/);
 assert.match(institution,/requireWorkspaceAccess\("institution-admin"\)/);
 assert.match(institution,/\.in\("id", access\.institutionAdminIds\)/);
});

test("platform administration requires the trusted database registry check",()=>{
 assert.match(access,/workspace === "platform-admin"\) redirect\("\/"\)/);
 assert.match(platform,/requireWorkspaceAccess\("platform-admin"\)/);
 assert.match(platform,/private platform-admin registry/);
});
