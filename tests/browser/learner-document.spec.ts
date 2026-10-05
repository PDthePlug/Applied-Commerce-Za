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

      const learnerDocument=page.locator(".learner-document");
      await expect(learnerDocument).toBeVisible();
      await expect(learnerDocument.locator(".learner-document-header")).toBeVisible();
      await expect(learnerDocument.locator(".learner-document-body")).toBeVisible();
      await expect(learnerDocument.locator(".learner-document-footer")).toBeVisible();
      await expect(learnerDocument.getByText(new RegExp(`Form ${route.form} · Term `))).toBeVisible();

      const primary=learnerDocument.locator('[data-document-primary="true"]');
      await expect(primary).toBeVisible();

      const metrics=await page.evaluate(()=>({
        pageWidth:document.documentElement.scrollWidth,
        viewportWidth:window.innerWidth,
        documentWidth:(document.querySelector(".learner-document") as HTMLElement | null)?.getBoundingClientRect().width ?? 0,
      }));
      expect(metrics.pageWidth).toBeLessThanOrEqual(metrics.viewportWidth+1);
      expect(metrics.documentWidth).toBeGreaterThan(0);
      expect(metrics.documentWidth).toBeLessThanOrEqual(metrics.viewportWidth);

      // Assert the delivered CSS, including legacy important panel styles.
      // The page remains continuous; useful controls and equation panels may
      // have boundaries without becoming a card around every task.
      const surfaces=await learnerDocument.evaluate(element=>{
        return [element,...element.querySelectorAll(".response-surface,.answerable-block,.multi-field-answerable,.choice-answerable,.learning-notice,.deepening-insight,.home-alternative-path,.previous-combined-response")].map(surface=>{
          const style=getComputedStyle(surface);
          return {radius:style.borderTopLeftRadius,shadow:style.boxShadow,background:style.backgroundColor};
        });
      });
      for(const surface of surfaces){
        expect(surface.radius).toBe("0px");
        expect(surface.shadow).toBe("none");
        expect(surface.background).toBe("rgba(0, 0, 0, 0)");
      }

      const menu=page.getByRole("button",{name:"Open Applied Commerce menu",exact:true});
      const chrome=await menu.boundingBox();
      expect(chrome).not.toBeNull();
      expect(chrome!.x+chrome!.width/2).toBeCloseTo(viewport.width/2,0);
      expect(chrome!.y).toBeGreaterThan(viewport.height-100);
      expect(chrome!.y+chrome!.height).toBeLessThanOrEqual(viewport.height);
      await page.locator('.learner-document-footer').scrollIntoViewIfNeeded();
      const afterScroll=await menu.boundingBox();
      expect(afterScroll!.y).toBeCloseTo(chrome!.y,0);
      await menu.click();
      await expect(page.getByRole("dialog",{name:"Applied Commerce menu"})).toBeVisible();
      await page.keyboard.press("Escape");
      await expect(page.getByRole("dialog",{name:"Applied Commerce menu"})).not.toBeVisible();
    });
  }
}

test("Form 4 learner metadata does not leak the Grade 11 source bridge",async({page})=>{
  await page.goto("/learn/11/term/3/g11-t3-l41-041",{waitUntil:"networkidle"});
  await expect(page).toHaveTitle(/Form 4 · Term 1/);
  await expect(page).not.toHaveTitle(/Forms 3–4/);
});

for(const viewport of viewports){
  test(`${viewport.label} presents distinct readable choices and keeps selections`,async({page})=>{
    await page.setViewportSize({width:viewport.width,height:viewport.height});
    await page.goto('/learn/8/term/3/g8-t3-l54-053',{waitUntil:'networkidle'});
    const choice=page.locator('.choice-option').first();
    await expect(choice).toBeVisible();
    await choice.scrollIntoViewIfNeeded();
    const label=await choice.innerText();
    const styles=await choice.evaluate(element=>{
      const style=getComputedStyle(element);
      const text=getComputedStyle(element.querySelector('strong')!);
      return {radius:parseFloat(style.borderRadius),border:parseFloat(style.borderTopWidth),font:parseFloat(text.fontSize)};
    });
    expect(styles.radius).toBeGreaterThanOrEqual(12);
    expect(styles.border).toBeGreaterThanOrEqual(1);
    expect(styles.font).toBeGreaterThanOrEqual(16);
    await choice.click();
    await expect(choice).toHaveAttribute('aria-checked','true');
    await page.reload({waitUntil:'networkidle'});
    await expect(choice).toHaveAttribute('aria-checked','true');
    expect(await choice.innerText()).toContain(label.replace('✓','').trim());
    expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(viewport.width+1);
  });

  test(`${viewport.label} keeps workbook responses through refresh and browser Back`,async({page})=>{
    await page.setViewportSize({width:viewport.width,height:viewport.height});
    const path="/learn/8/term/1/g8-t1-l02-002";
    await page.goto(path,{waitUntil:"networkidle"});
    const table=page.locator(".workbook-table").first();
    const field=table.locator("textarea").first();
    await expect(field).toBeVisible();
    await field.scrollIntoViewIfNeeded();
    expect(await field.evaluate(element=>{
      const box=element.getBoundingClientRect();
      const hit=document.elementFromPoint(box.x+box.width/2,box.y+box.height/2);
      return hit===element;
    })).toBe(true);
    const tableText=await table.locator("table").innerText();
    const fieldLabel=await field.getAttribute("aria-label");
    await field.fill("I learned to plan before spending.");
    const notes=page.getByRole("textbox",{name:"Lesson notes",exact:true});
    await notes.fill("Ask about our household savings plan.");
    await page.getByRole("button",{name:"Mark complete",exact:true}).click();

    const saved=await page.evaluate(()=>JSON.parse(localStorage.getItem("applied-commerce-learning-state-v1")!));
    const entry=Object.entries(saved.promptResponses).find(([,value])=>value==="I learned to plan before spending.");
    expect(entry?.[0]).toMatch(/^g8-t1-l02-002::block-\d+::table-\d+-\d+$/);
    const promptKey=entry![0];
    await page.reload({waitUntil:"networkidle"});
    await expect(field).toHaveValue("I learned to plan before spending.");
    await expect(field).toHaveAttribute("aria-label",fieldLabel!);
    await expect(notes).toHaveValue("Ask about our household savings plan.");
    await expect(page.getByRole("button",{name:"Completed",exact:true})).toBeVisible();
    expect(await table.locator("table").innerText()).toContain(tableText.trim().split("\n")[0]);

    const overflow=await table.evaluate(element=>({
      overflow:getComputedStyle(element).overflowX,
      width:element.getBoundingClientRect().width,
      viewport:window.innerWidth,
      page:document.documentElement.scrollWidth,
    }));
    expect(overflow.overflow).toBe("auto");
    expect(overflow.width).toBeLessThanOrEqual(overflow.viewport);
    expect(overflow.page).toBeLessThanOrEqual(overflow.viewport+1);

    await page.locator('[data-document-primary="true"]').click();
    await expect(page).not.toHaveURL(new RegExp(path+"$"));
    await page.goBack({waitUntil:"networkidle"});
    await expect(page).toHaveURL(new RegExp(path+"$"));
    await expect(field).toHaveValue("I learned to plan before spending.");
    await expect(notes).toHaveValue("Ask about our household savings plan.");
    const restored=await page.evaluate(()=>JSON.parse(localStorage.getItem("applied-commerce-learning-state-v1")!));
    expect(restored.promptResponses[promptKey]).toBe("I learned to plan before spending.");
  });
}
