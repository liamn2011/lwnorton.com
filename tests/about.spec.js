import { test, expect } from "@playwright/test";

test("click About Link, check content", async ({ page }) => {
  await page.goto("http://localhost:8000/");
  await page.getByRole("link", { name: "About" }).click();
  await expect(page.getByRole("main")).toContainText("ABOUT ME");
  //   await expect(page.getByRole("button")).toContainText("Download CV");
  await expect(page.getByRole("main")).toContainText(
    "Hey, I'm Liam, a Manchester based Software Engineer. I'm driven by a passion for coding and a commitment to building innovative solutions. With a track record of delivering impactful projects, I thrive at the intersection of technology and problem-solving. Staying at the forefront of evolving advancements, I bring a dynamic approach to addressing challenges and driving positive change."
  );
  await expect(
    page.getByRole("main").getByRole("img", { name: "Liam Norton" })
  ).toBeVisible();
  await expect(page.getByRole("main")).toContainText("PROFESSIONAL SKILLS");
  await expect(page.getByRole("main")).toContainText("SKILLS");
  await expect(
    page.getByText("SKILLSBackend Development95%Full")
  ).toBeVisible();
  await expect(page.getByText("EXPERIENCESep 2024 to Present")).toBeVisible();
  //   await expect(
  //     page
  //       .locator("div")
  //       .filter({ hasText: "ABOUT MEDownload CVHey, I'm" })
  //       .nth(3)
  //   ).toBeVisible();
  await expect(
    page.getByText(
      "PROFESSIONAL SKILLSSKILLSBackend Development95%Fullstack Development93%Solution Design93%"
    )
  ).toBeVisible();
  //   await expect(page.getByText("ABOUT MEDownload CV")).toBeVisible();
  await expect(
    page.locator("section").filter({ hasText: "Hey, I'm Liam, a Manchester" })
  ).toBeVisible();
  await expect(page.getByRole("main")).toContainText("EXPERIENCE");
});

test("click About Link, click 'download cv' button", async ({ page }) => {
  await page.goto("http://localhost:8000/");
  await page.getByRole("link", { name: "About" }).click();

  // Prepare for the new tab (popup) that will open after clicking 'Download CV'
  //   const page1Promise = page.waitForEvent("popup");
  //   await page.getByRole("link", { name: "Download CV" }).click();

  // Wait for the new tab to open
  //   const pdfPage = await page1Promise;
});
