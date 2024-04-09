import { test, expect } from "@playwright/test";

test("Layout, navbar testing", async ({ page }) => {
	await page.goto("http://localhost:8000/");

	//Link url testing
	await page.getByRole("link", { name: "About" }).click();
	await expect(page).toHaveURL("http://localhost:8000/about/");
	await page.getByRole("link", { name: "Projects" }).click();
	await expect(page).toHaveURL("http://localhost:8000/projects/");
	await page.getByRole("link", { name: "Contact" }).click();
	await expect(page).toHaveURL("http://localhost:8000/contact/");
	await page.getByRole("link", { name: "Home" }).click();
	await expect(page).toHaveURL("http://localhost:8000/");
	await page.getByRole("link", { name: "Contact" }).click();
	await expect(page).toHaveURL("http://localhost:8000/contact/");
	await page.getByRole("link", { name: "Liam Norton" }).click();
	await expect(page).toHaveURL("http://localhost:8000/");

	//Navbar layout testing
	await expect(page.locator("div").filter({ hasText: "HomeAboutProjectsContact" }).nth(3)).toBeVisible();
	await expect(page.getByRole("link", { name: "Liam Norton" })).toBeVisible();
	await expect(page.getByRole("link", { name: "Home" })).toBeVisible();
	await expect(page.getByRole("link", { name: "About" })).toBeVisible();
	await expect(page.getByRole("link", { name: "Projects" })).toBeVisible();
	await expect(page.getByRole("link", { name: "Contact" })).toBeVisible();
	await expect(page.getByText("HomeAboutProjectsContact")).toBeVisible();

	await expect(page.getByRole("navigation")).toContainText("Home");
	await expect(page.getByRole("navigation")).toContainText("About");
	await expect(page.getByRole("navigation")).toContainText("Projects");
	await expect(page.getByRole("navigation")).toContainText("Contact");
});

test("Layout, footer testing", async ({ page }) => {
	await page.goto("http://localhost:8000/");

	//Footer layout testing
	await expect(page.getByText("© Copyright 2024 Liam Norton.")).toBeVisible();
	await expect(page.getByLabel("Github")).toBeVisible();
	await expect(page.getByLabel("LinkedIn")).toBeVisible();
	await expect(page.locator("div").filter({ hasText: /^© Copyright 2024 Liam Norton\.$/ })).toBeVisible();
	await expect(page.getByRole("contentinfo")).toBeVisible();

	await expect(page.getByRole("contentinfo")).toContainText("© Copyright 2024 Liam Norton.");

	//Link url testing
	const page1Promise = page.waitForEvent("popup");
	await page.getByLabel("Github").click();
	const page1 = await page1Promise;
	expect(page1.url()).toEqual("https://github.com/liamn2011");

	const page2Promise = page.waitForEvent("popup");
	await page.getByLabel("LinkedIn").click();
	const page2 = await page2Promise;
	expect(page2.url()).toEqual("https://www.linkedin.com/in/liam-norton-335139b3/");
});
