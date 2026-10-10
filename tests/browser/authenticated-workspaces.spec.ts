import { expect, test, type Page } from "@playwright/test";

type Role = "learner" | "facilitator" | "institution-admin" | "platform-admin" | "platform-admin-2";

const credentials: Record<Role, { email: string | undefined; password: string | undefined }> = {
  learner: {
    email: process.env.AC_ZW_TEST_LEARNER_EMAIL,
    password: process.env.AC_ZW_TEST_LEARNER_PASSWORD,
  },
  facilitator: {
    email: process.env.AC_ZW_TEST_FACILITATOR_EMAIL,
    password: process.env.AC_ZW_TEST_FACILITATOR_PASSWORD,
  },
  "institution-admin": {
    email: process.env.AC_ZW_TEST_INSTITUTION_ADMIN_EMAIL,
    password: process.env.AC_ZW_TEST_INSTITUTION_ADMIN_PASSWORD,
  },
  "platform-admin": {
    email: "pdmpofu@gmail.com",
    password: process.env.AC_ZW_PLATFORM_ADMIN_PASSWORD,
  },
  "platform-admin-2": {
    email: "pdmpofu1@gmail.com",
    password: process.env.AC_ZW_PLATFORM_ADMIN_2_PASSWORD,
  },
};

async function signIn(page: Page, role: Role, target: string) {
  const account = credentials[role];
  expect(account.email, `Missing email secret for ${role}`).toBeTruthy();
  expect(account.password, `Missing password secret for ${role}`).toBeTruthy();

  await page.goto(`/auth?next=${encodeURIComponent(target)}`);
  await page.getByLabel("Email address").fill(account.email!);
  await page.getByLabel("Password").fill(account.password!);
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await page.waitForURL(url => url.pathname === target, { timeout: 30_000 });
}

test("learner can sign in, open the Zimbabwe Forms library and enter a lesson", async ({ page }) => {
  test.skip(!credentials.learner.email || !credentials.learner.password, "Requires authenticated learner test secrets.");
  await signIn(page, "learner", "/learn");
  const stateResponse = await page.request.get("/api/learning-state");
  expect(stateResponse.status()).toBe(200);
  expect((await stateResponse.json()).state.version).toBe(1);
  await expect(page.getByRole("heading", { name: /Four Forms\. Three terms each/i })).toBeVisible();
  await page.getByRole("link", { name: /^Form\s*2\b/i }).click();
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByText(/Form 2.*Term 1|Term 1/).first()).toBeVisible();
  await page.getByRole("link", { name: /Open Term 1/i }).click();
  await expect(page).toHaveURL(/\/learn\/9\/term\/\d+\//);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("facilitator can sign in and open the assigned-cohort evidence workspace", async ({ page }) => {
  test.skip(!credentials.facilitator.email || !credentials.facilitator.password, "Requires authenticated facilitator test secrets.");
  await signIn(page, "facilitator", "/facilitator");
  await expect(page.getByRole("heading", { level: 1, name: "Facilitator workspace" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Learner evidence and review" })).toBeVisible();
  await expect(page.getByText(/Loading assigned evidence|No learner evidence|No response text|Review status/).first()).toBeVisible();
  const response = await page.request.get("/api/facilitator/evidence");
  expect(response.status()).toBe(200);
  expect((await response.json()).evidence).toBeInstanceOf(Array);
});

test("institution administrator can open membership, cohort, facilitator and enrolment operations", async ({ page }) => {
  test.skip(!credentials["institution-admin"].email || !credentials["institution-admin"].password, "Requires authenticated institution-admin test secrets.");
  await signIn(page, "institution-admin", "/institution-admin");
  await expect(page.getByRole("heading", { level: 1, name: "Institution administration" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Create a cohort" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Add an institution member" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Assign facilitator" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Enrol a learner" })).toBeVisible();
  const response = await page.request.get("/api/institution-admin");
  expect(response.status()).toBe(200);
  expect((await response.json()).schools).toBeInstanceOf(Array);
});

test("platform administrator can open institution provisioning and see the institution registry", async ({ page }) => {
  test.skip(!credentials["platform-admin"].password, "Requires authenticated platform-admin test secret.");
  await signIn(page, "platform-admin", "/platform-admin");
  await expect(page.getByRole("heading", { level: 1, name: "Platform administration" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Create institution and assign owner" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "Institutions", exact: true })).toBeVisible();
  const response = await page.request.get("/api/platform-admin/institutions");
  expect(response.status()).toBe(200);
  expect((await response.json()).schools).toBeInstanceOf(Array);
});

test("second platform administrator can independently open the institution registry", async ({ page }) => {
  test.skip(!credentials["platform-admin-2"].password, "Requires the second authenticated platform-admin test secret.");
  await signIn(page, "platform-admin-2", "/platform-admin");
  await expect(page.getByRole("heading", { level: 1, name: "Platform administration" })).toBeVisible();
  const response = await page.request.get("/api/platform-admin/institutions");
  expect(response.status()).toBe(200);
  expect((await response.json()).schools).toBeInstanceOf(Array);
});


test("learner can persist and reload lesson progress and notes through the authenticated route", async ({ page }) => {
  test.skip(!credentials.learner.email || !credentials.learner.password, "Requires authenticated learner test secrets.");
  const { createClient } = await import("@supabase/supabase-js");
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  expect(supabaseUrl, "Missing staging Supabase URL").toBeTruthy();
  expect(publishableKey, "Missing staging Supabase publishable key").toBeTruthy();

  await signIn(page, "learner", "/learn");
  const originalResponse = await page.request.get("/api/learning-state");
  expect(originalResponse.status()).toBe(200);
  const original = (await originalResponse.json()).state as {
    version: 1; completed: Record<string,string>; responses: Record<string,string>;
    promptResponses: Record<string,string>; activeGrade?: number; activeForm?: 1|2|3|4;
    profile?: { displayName?: string; grade?: number; form?: 1|2|3|4 };
  };
  const suffix = `ac-zw-browser-${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
  const timestamp = new Date().toISOString();
  const note = "Authenticated browser acceptance note — temporary test data.";
  const snapshot = {
    version: 1 as const,
    activeGrade: original.activeGrade,
    activeForm: original.activeForm,
    completed: { [suffix]: timestamp },
    responses: { [suffix]: note },
    promptResponses: {},
    profile: original.profile ?? {},
    progressRows: [{ unitId: suffix, grade: 9, term: 1, completedAt: timestamp, lastOpenedAt: timestamp }],
    noteRows: [{ unitId: suffix, grade: 9, term: 1, note }],
    promptRows: [],
    artifactRows: [],
    // A hostile client-supplied owner field must never override the verified session identity.
    learner_id: "c7bd10bd-cfac-4b91-98fc-becb57f4d1da",
  };

  const cleanup = createClient(supabaseUrl!, publishableKey!, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  });
  const authResult = await cleanup.auth.signInWithPassword({
    email: credentials.learner.email!, password: credentials.learner.password!,
  });
  expect(authResult.error, "Cleanup identity must authenticate as the learner fixture").toBeNull();
  try {
    const wrongAccount = await page.request.post("/api/learning-state", {
      headers: { "content-type": "application/json", "x-ac-expected-user-id": "c7bd10bd-cfac-4b91-98fc-becb57f4d1da" },
      data: snapshot,
    });
    expect(wrongAccount.status()).toBe(409);

    const saved = await page.request.post("/api/learning-state", {
      headers: { "content-type": "application/json", "x-ac-expected-user-id": authResult.data.user!.id },
      data: snapshot,
    });
    expect(saved.status()).toBe(200);

    const reloaded = await page.request.get("/api/learning-state");
    expect(reloaded.status()).toBe(200);
    const state = (await reloaded.json()).state;
    expect(state.completed[suffix]).toBe(timestamp);
    expect(state.responses[suffix]).toBe(note);
  } finally {
    const userId = authResult.data.user!.id;
    const cleanupResults = await Promise.all([
      cleanup.from("portfolio_evidence").delete().eq("artifact_id", suffix),
      cleanup.from("prompt_responses").delete().eq("learner_id", userId).eq("unit_id", suffix),
      cleanup.from("lesson_notes").delete().eq("learner_id", userId).eq("unit_id", suffix),
      cleanup.from("lesson_progress").delete().eq("learner_id", userId).eq("unit_id", suffix),
    ]);
    for (const result of cleanupResults) expect(result.error, "Temporary browser acceptance data must be cleaned up").toBeNull();
    await cleanup.auth.signOut();
  }
});
