import { expect, test } from "@playwright/test";

for (const route of ["/facilitator", "/institution-admin", "/platform-admin"]) {
  test(`unauthenticated direct navigation to ${route} is denied`, async ({ page }) => {
    await page.goto(route, { waitUntil: "networkidle" });
    await expect(page).toHaveURL(/\/auth\?next=/);
    await expect(page.getByRole("heading", { name: /sign in|welcome back|account/i })).toBeVisible();
  });
}
