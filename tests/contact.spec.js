import { test, expect } from "@playwright/test";

test("Contact page, header & description", async ({ page }) => {
	await page.goto("http://localhost:8000/");
	await page.getByRole("link", { name: "Contact" }).click();

	await expect(page.getByRole("heading", { name: "CONTACT ME" })).toBeVisible();
	await expect(page.getByRole("heading")).toContainText("CONTACT ME");
	await expect(page.locator(".h-3")).toBeVisible();
	await expect(page.getByText("If you wish to reach out to")).toBeVisible();
	await expect(page.locator("#gatsby-focus-wrapper")).toContainText(
		"If you wish to reach out to inquire more about me, share an exciting opportunity, or explore potential collaboration, kindly use the contact form below. I look forward to hearing from you."
	);
	await expect(page.getByText("CONTACT MEIf you wish to")).toBeVisible();
});

test("Contact page, contact form layout", async ({ page }) => {
	await page.goto("http://localhost:8000/");
	await page.getByRole("link", { name: "Contact" }).click();

	await expect(page.getByText("Name*Email*Message*Submit")).toBeVisible();

	await expect(page.getByText("Name*")).toBeVisible();
	await expect(page.locator("#gatsby-focus-wrapper")).toContainText("Name*");
	await expect(page.getByPlaceholder("Name")).toBeVisible();

	await expect(page.getByText("Email*")).toBeVisible();
	await expect(page.locator("#gatsby-focus-wrapper")).toContainText("Email*");
	await expect(page.getByPlaceholder("Email")).toBeVisible();

	await expect(page.getByText("Message*")).toBeVisible();
	await expect(page.locator("#gatsby-focus-wrapper")).toContainText("Message*");
	await expect(page.getByPlaceholder("Message")).toBeVisible();
});

test("Contact page, contact form userability & error handling", async ({ page }) => {
	await page.goto("http://localhost:8000/");
	await page.getByRole("link", { name: "Contact" }).click();

	//Contact form with submission error
	await page.getByPlaceholder("Name").click();
	await page.getByPlaceholder("Name").fill("Liam Norton");
	await expect(page.getByRole("button", { name: "Submit" })).toBeDisabled();
	await page.getByPlaceholder("Email").click();
	await page.getByPlaceholder("Email").fill("test@test");
	await expect(page.getByRole("button", { name: "Submit" })).toBeDisabled();
	await page.getByPlaceholder("Message").click();
	await page.getByPlaceholder("Message").fill("Hello World");
	await expect(page.getByRole("button", { name: "Submit" })).toBeEnabled();
	await expect(page.getByRole("button", { name: "Submit" })).toBeVisible();
	await expect(page.getByRole("button")).toContainText("Submit");
	await page.getByRole("button", { name: "Submit" }).click();
	await expect(page.getByText("Please enter a valid email")).toBeVisible();
	await expect(page.locator("#gatsby-focus-wrapper")).toContainText("Please enter a valid email address");

	//Contact form without submission error
	let requestUrl = null;
	page.on("request", (request) => {
		if (request.method() === "POST") {
			requestUrl = request.url();
		}
	});
	await page.getByPlaceholder("Email").fill("test@test.com");
	await page.getByRole("button", { name: "Submit" }).click();
	await expect(page.locator(".lds-roller")).toBeVisible();
	expect(requestUrl).toBe("https://formsubmit.co/ajax/eca91726ce0f1d7cd2a332b1b46d6c3a");
	page.removeListener("request", () => {});

	//Need to replace the email sender integration

	// await page
	// 	.locator("div", { hasText: /^Thank you for your email$/ })
	// 	.nth(2)
	// 	.waitFor({ timeout: 15000 });
	// await expect(page.getByText("Thank you for your email")).toBeVisible();
	// await expect(page.locator("#gatsby-focus-wrapper")).toContainText("Thank you for your email");
	// await expect(page.locator(".bg-white")).toBeVisible();
	// await expect(page.locator(".bg-white > .svg-inline--fa > path")).toBeVisible();
});
