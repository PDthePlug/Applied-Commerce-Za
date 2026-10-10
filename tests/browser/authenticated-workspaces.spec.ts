import { expect, test, type Page } from "@playwright/test";

type Role = "learner" | "facilitator" | "institution-admin" | "platform-admin";

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
