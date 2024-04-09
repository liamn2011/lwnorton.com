import { test, expect } from "@playwright/test";

test("About page, header & description testing", async ({ page }) => {
	await page.goto("http://localhost:8000/");
	await page.getByRole("link", { name: "Projects" }).click();

	// Header & descriptions
	await expect(page.locator("h1")).toContainText("PROJECTS");
	await expect(
		page
			.locator("div")
			.filter({ hasText: /^PROJECTS$/ })
			.locator("div")
	).toBeVisible();
	await expect(page.getByRole("main")).toContainText(
		"In this section, you can check out some of my side projects. Stay tuned, as there will be further projects added to this section, including both future developments and past projects that haven't been made public."
	);
	await expect(page.locator("section").filter({ hasText: /^PROJECTS$/ })).toBeVisible();
	await expect(page.getByText("In this section, you can")).toBeVisible();
});

test("About page, card 1 testing", async ({ page }) => {
	await page.goto("http://localhost:8000/");
	await page.getByRole("link", { name: "Projects" }).click();

	// Card 1
	await expect(page.getByText("Portfolio Website - lwnorton.comMy portfolio website serves as a comprehensive")).toBeVisible();
	await expect(page.getByRole("figure").first()).toBeVisible();
	await expect(page.getByRole("img", { name: "lwnorton" })).toBeVisible();
	await expect(page.getByRole("main")).toContainText("Portfolio Website - lwnorton.com");
	await expect(page.getByRole("main")).toContainText(
		"My portfolio website serves as a comprehensive showcase of my professional journey within the technology field. This project represents a presentation of my creative skills in highlighting my résumé. Featuring elements such as an animated background and a hand-drawn logo created using Inkscape, the website includes dedicated pages for 'About,' 'Projects,' and 'Contact Me.' Additionally, it incorporates meta tags for enhanced search engine optimisation. Powered by React, specifically Gatsby JS, and styled with Tailwind, the project utilises YAML for content management and is hosted on Vercel."
	);
	const page1Promise = page.waitForEvent("popup");
	await page.getByRole("button", { name: "View Project" }).click();
	const page1 = await page1Promise;
	expect(page1.url()).toEqual("https://www.lwnorton.com/");

	const page2Promise = page.waitForEvent("popup");
	await page.getByRole("button", { name: "View Source Code" }).first().click();
	const page2 = await page2Promise;
	expect(page2.url()).toEqual("https://github.com/liamn2011/lwnorton.com");
});

test("About page, card 2 testing", async ({ page }) => {
	await page.goto("http://localhost:8000/");
	await page.getByRole("link", { name: "Projects" }).click();

	// Card 2
	await expect(page.getByRole("figure").nth(2)).toBeVisible();
	await expect(page.getByRole("img", { name: "emailSubscriberAPI" })).toBeVisible();
	await expect(page.locator("section").filter({ hasText: "Portfolio Website - lwnorton." })).toBeVisible();
	await expect(page.getByText("Node JS (Express JS) - Email Subscriber APIDeveloped for a custom Shopify site")).toBeVisible();
	await expect(page.getByRole("main")).toContainText("Node JS (Express JS) - Email Subscriber API");
	await expect(page.getByRole("main")).toContainText(
		"Developed for a custom Shopify site, this project acts as a proxy to efficiently store customer email addresses via the server-side Shopify admin API, specifically catering to newsletter marketing needs.The API's primary role is to facilitate the storage of unverified email addresses in Shopify, initiate the generation of a verification email, and subsequently update the email status to 'verified' following user interaction. It also provides a user-friendly unsubscribe feature. Developed using Express JS, JSON Web Token (JWT), Nodemailer, and integrated with the Shopify Admin API, this project offers a robust solution for email management."
	);
	await expect(page.locator("div:nth-child(2) > .card-body > div").first()).toBeVisible();
	const page3Promise = page.waitForEvent("popup");
	await page
		.locator("div")
		.filter({ hasText: /^View Source Code$/ })
		.getByRole("button")
		.click();
	const page3 = await page3Promise;
	expect(page3.url()).toEqual("https://github.com/liamn2011/expressjs-email-subscription-api-with-verification-token");
	console.log(page3.url()); //test the url matches the expectation (this is printing correctly)
});
