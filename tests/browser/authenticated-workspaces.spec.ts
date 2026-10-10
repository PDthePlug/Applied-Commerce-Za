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
  const initial = await response.json() as {
    schools: Array<{ id: string }>;
    cohorts: Array<{ id: string; school_id: string }>;
    memberships: Array<{ id: string; school_id: string; user_id: string; role: string; status: string }>;
  };
  expect(initial.schools).toBeInstanceOf(Array);
  expect(initial.schools.length).toBeGreaterThan(0);
  const schoolId = initial.schools[0].id;
  const { createClient } = await import("@supabase/supabase-js");
  const cleanup = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  });
  const signedIn = await cleanup.auth.signInWithPassword({
    email: credentials["institution-admin"].email!, password: credentials["institution-admin"].password!,
  });
  expect(signedIn.error).toBeNull();
  let cohortId: string | undefined;
  let facilitatorUserId: string | undefined;
  let originalMembership: { id: string; role: string; status: string } | undefined;
  try {
    const cohortWrite = await page.request.post("/api/institution-admin", {
      data: { action: "create-cohort", schoolId, name: `Browser acceptance ${Date.now()}`, form: 2, academicYear: 2026 },
    });
    expect(cohortWrite.status()).toBe(200);
    const cohortBody = await cohortWrite.json();
    cohortId = cohortBody.cohort.id as string;
    expect(cohortBody.cohort.zimbabwe_form).toBe(2);
    expect(cohortBody.cohort.grade).toBe(9);

    const memberWrite = await page.request.post("/api/institution-admin", {
      data: { action: "add-member", schoolId, email: credentials.facilitator.email, role: "educator" },
    });
    expect(memberWrite.status()).toBe(200);
    facilitatorUserId = (await memberWrite.json()).userId as string;
    originalMembership = initial.memberships.find(row => row.school_id === schoolId && row.user_id === facilitatorUserId);

    const staffWrite = await page.request.post("/api/institution-admin", {
      data: { action: "add-cohort-staff", cohortId, email: credentials.facilitator.email, role: "educator" },
    });
    expect(staffWrite.status()).toBe(200);

    const enrolmentWrite = await page.request.post("/api/institution-admin", {
      data: { action: "enrol-learner", cohortId, email: credentials.learner.email },
    });
    expect(enrolmentWrite.status()).toBe(200);

    const after = await page.request.get("/api/institution-admin");
    expect(after.status()).toBe(200);
    const data = await after.json();
    expect(data.cohorts.some((row: { id: string }) => row.id === cohortId)).toBe(true);
    expect(data.staff.some((row: { cohort_id: string; user_id: string }) => row.cohort_id === cohortId && row.user_id === facilitatorUserId)).toBe(true);
    expect(data.enrolments.some((row: { cohort_id: string }) => row.cohort_id === cohortId)).toBe(true);
  } finally {
    if (cohortId) {
      const removed = await cleanup.from("cohorts").delete().eq("id", cohortId);
      expect(removed.error, "Temporary cohort and its staff/enrolment rows must be cleaned up").toBeNull();
    }
    if (facilitatorUserId) {
      if (originalMembership) {
        const restored = await cleanup.from("school_memberships").update({ role: originalMembership.role, status: originalMembership.status })
          .eq("id", originalMembership.id);
        expect(restored.error, "Pre-existing facilitator membership must be restored").toBeNull();
      } else {
        const removed = await cleanup.from("school_memberships").delete().eq("school_id", schoolId).eq("user_id", facilitatorUserId);
        expect(removed.error, "Temporary facilitator membership must be cleaned up").toBeNull();
      }
    }
    await cleanup.auth.signOut();
  }

  const crossInstitutionWrite = await page.request.post("/api/institution-admin", {
    data: { action: "create-cohort", schoolId: "a1000000-0000-4000-8000-000000000002", name: `Forbidden cross-institution cohort ${Date.now()}`, form: 2, academicYear: 2026 },
  });
  expect(crossInstitutionWrite.status()).toBe(403);
});

test("platform administrator can open institution provisioning and see the institution registry", async ({ page }) => {
  test.skip(!credentials["platform-admin"].password, "Requires authenticated platform-admin test secret.");
  await signIn(page, "platform-admin", "/platform-admin");
  await expect(page.getByRole("heading", { level: 1, name: "Platform administration" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Create institution and assign owner" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "Institutions", exact: true })).toBeVisible();
  const response = await page.request.get("/api/platform-admin/institutions");
  expect(response.status()).toBe(200);
  const initial = await response.json() as {
    schools: Array<{ id: string; name: string; slug: string }>;
    memberships: Array<{ school_id: string; role: string; status: string }>;
  };
  expect(initial.schools).toBeInstanceOf(Array);

  // One intentionally persistent, uniquely named staging fixture prevents CI from
  // creating a new institution on every run. The first run exercises the real
  // provisioning write; later runs verify its atomic owner assignment remains intact.
  const fixtureSlug = "ac-zw-ci-provisioning-fixture";
  let fixture = initial.schools.find(school => school.slug === fixtureSlug);
  if (!fixture) {
    const create = await page.request.post("/api/platform-admin/institutions", {
      data: {
        name: "AC Zimbabwe CI Provisioning Fixture",
        slug: fixtureSlug,
        ownerEmail: credentials["institution-admin"].email,
      },
    });
    expect(create.status()).toBe(200);
    const refreshed = await page.request.get("/api/platform-admin/institutions");
    expect(refreshed.status()).toBe(200);
    const data = await refreshed.json();
    fixture = data.schools.find((school: { slug: string }) => school.slug === fixtureSlug);
    expect(fixture, "Provisioning must create the staging fixture").toBeTruthy();
    expect(data.memberships.some((row: { school_id: string; role: string; status: string }) =>
      row.school_id === fixture!.id && row.role === "owner" && row.status === "active")).toBe(true);
  } else {
    expect(initial.memberships.some(row =>
      row.school_id === fixture!.id && row.role === "owner" && row.status === "active")).toBe(true);
  }
});

test("second platform administrator can independently open the institution registry", async ({ page }) => {
  expect(credentials["platform-admin-2"].password, "AC_ZW_PLATFORM_ADMIN_2_PASSWORD must be supplied; do not skip this authorization check").toBeTruthy();
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


test("learner activity responses persist and the assigned facilitator can save a review", async ({ page }) => {
  test.skip(!credentials.learner.email || !credentials.learner.password || !credentials.facilitator.email || !credentials.facilitator.password,
    "Requires the learner and assigned facilitator acceptance accounts.");
  await signIn(page, "learner", "/learn");
  const stateResponse = await page.request.get("/api/learning-state");
  expect(stateResponse.status()).toBe(200);
  const state = (await stateResponse.json()).state;
  const unitId = "ac-zw-browser-review-fixture";
  const responseKey = `${unitId}::response`;
  const responseValue = "Persistent browser acceptance response; this is a staging test fixture.";
  const saved = await page.request.post("/api/learning-state", {
    headers: { "content-type": "application/json" },
    data: {
      version: 1, activeGrade: state.activeGrade, activeForm: state.activeForm,
      completed: {}, responses: {}, promptResponses: { [responseKey]: responseValue },
      profile: state.profile ?? {}, progressRows: [], noteRows: [],
      promptRows: [{ key: responseKey, unitId, grade: 9, term: 1, value: responseValue }],
      artifactRows: [],
    },
  });
  expect(saved.status()).toBe(200);
  const reloaded = await page.request.get("/api/learning-state");
  expect(reloaded.status()).toBe(200);
  expect((await reloaded.json()).state.promptResponses[responseKey]).toBe(responseValue);

  await signIn(page, "facilitator", "/facilitator");
  const queue = await page.request.get("/api/facilitator/evidence");
  expect(queue.status()).toBe(200);
  const evidence = (await queue.json()).evidence as Array<{ id: string; response_key: string; status: string; reviews: Array<{ feedback: string }> }>;
  const fixture = evidence.find(item => item.response_key === responseKey);
  expect(fixture, "The assigned facilitator must see the learner's saved response").toBeTruthy();

  const review = await page.request.post("/api/facilitator/evidence", {
    data: { evidenceRecordId: fixture!.id, status: "accepted", feedback: "Automated acceptance review: response received and review persisted.", criteriaScores: {} },
  });
  expect(review.status()).toBe(200);
  const refreshed = await page.request.get("/api/facilitator/evidence");
  expect(refreshed.status()).toBe(200);
  const reviewed = (await refreshed.json()).evidence.find((item: { id: string }) => item.id === fixture!.id);
  expect(reviewed.status).toBe("accepted");
  expect(reviewed.reviews.some((item: { feedback: string }) => item.feedback === "Automated acceptance review: response received and review persisted.")).toBe(true);
});
