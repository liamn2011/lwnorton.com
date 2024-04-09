import { test, expect } from "@playwright/test";

test("has hero content", async ({ page }) => {
	await page.goto("http://localhost:8000/");

	await expect(page.locator("h1")).toContainText("Hey, I'm");
	await expect(page.locator("h2")).toContainText("Liam Norton,");
	await expect(page.locator("#gatsby-focus-wrapper")).toContainText(
		"a tech pro engineering impactful solutions. Let's delve into the realm where technology meets efficiency, where my passion for innovation thrives."
	);
	await expect(page.getByRole("img", { name: "svg of Liam Norton" })).toBeVisible();
});
