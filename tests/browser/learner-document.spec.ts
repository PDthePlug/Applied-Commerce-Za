import { expect, test } from "@playwright/test";

const routes=[
  {form:1,path:"/learn/8/term/1/g8-t1-l01-001"},
  {form:2,path:"/learn/9/term/1/g9-t1-l01-001"},
  {form:3,path:"/learn/10/term/1/g10-t1-l01-001"},
  {form:4,path:"/learn/11/term/3/g11-t3-l41-041"},
] as const;

const viewports=[
  {label:"mobile-360",width:360,height:800},
  {label:"mobile-430",width:430,height:860},
  {label:"desktop-1280",width:1280,height:900},
] as const;

for(const viewport of viewports){
  for(const route of routes){
    test(`${route.form} · ${viewport.label} uses the BIS learner document contract`,async({page})=>{
      await page.setViewportSize({width:viewport.width,height:viewport.height});
      await page.goto(route.path,{waitUntil:"networkidle"});

      const document=page.locator(".learner-document");
      await expect(document).toBeVisible();
      await expect(document.locator(".learner-document-header")).toBeVisible();
      await expect(document.locator(".learner-document-body")).toBeVisible();
      await expect(document.locator(".learner-document-footer")).toBeVisible();
      await expect(document.getByText(new RegExp(`Form ${route.form} · Term `))).toBeVisible();

      const primary=document.locator('[data-document-primary="true"]');
      await expect(primary).toBeVisible();

      const metrics=await page.evaluate(()=>({
        pageWidth:document.documentElement.scrollWidth,
        viewportWidth:window.innerWidth,
        documentWidth:(document.querySelector(".learner-document") as HTMLElement | null)?.getBoundingClientRect().width ?? 0,
      }));
      expect(metrics.pageWidth).toBeLessThanOrEqual(metrics.viewportWidth+1);
      expect(metrics.documentWidth).toBeGreaterThan(0);
      expect(metrics.documentWidth).toBeLessThanOrEqual(metrics.viewportWidth);
    });
  }
}

test("Form 4 learner metadata does not leak the Grade 11 source bridge",async({page})=>{
  await page.goto("/learn/11/term/3/g11-t3-l41-041",{waitUntil:"networkidle"});
  await expect(page).toHaveTitle(/Form 4 · Term 1/);
  await expect(page).not.toHaveTitle(/Forms 3–4/);
});
