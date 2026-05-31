import { test, expect } from '@playwright/test';

test.describe("Work links", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:3000");
        await expect(page).toHaveTitle("BlackSound1");
    });

    test("Verbit link", async ({ page, context }) => {
        const targetURL = "https://verbit.ai/";

        // Get the link
        const link = page.getByRole("link", { name: "Verbit" });
        await expect(link).toHaveAttribute("href", targetURL);

        // Listen for clicking it
        const [newPage] = await Promise.all([
            context.waitForEvent("page"),
            link.click(),
        ]);

        // Ensure that the new tab is correct
        expect(newPage.url()).toBe(targetURL);
    });

    test("Tecsys link", async ({ page, context }) => {
        const targetURL = "https://www.tecsys.com/";

        // Get the link
        const link = page.getByRole("link", { name: "Tecsys" });
        await expect(link).toHaveAttribute("href", targetURL);

        // Listen for clicking it
        const [newPage] = await Promise.all([
            context.waitForEvent("page"),
            link.click(),
        ]);

        // Ensure that the new tab is correct
        expect(newPage.url()).toBe(targetURL);
    });
});

test.describe("Project links", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:3000");
        await expect(page).toHaveTitle("BlackSound1");
    });

    test("TSM link", async ({ page, context }) => {
        const targetURL = "https://github.com/BlackSound1/textual-system-monitor";

        const link = page.getByRole("link", { name: "Textual System Monitor" });
        await expect(link).toHaveAttribute("href", targetURL);

        const [newPage] = await Promise.all([
            context.waitForEvent("page"),
            link.click(),
        ]);

        expect(newPage.url()).toBe(targetURL);
    });

    test("Go B&B", async ({ page, context }) => {
        const targetURL = "https://github.com/BlackSound1/Go-B-and-B";

        const link = page.getByRole("link", { name: "Go B&B" });
        await expect(link).toHaveAttribute("href", targetURL);

        const [newPage] = await Promise.all([
            context.waitForEvent("page"),
            link.click(),
        ]);

        expect(newPage.url()).toBe(targetURL);
    });

    test("This site", async ({ page, context }) => {
        const targetURL = "https://github.com/BlackSound1/BlackSound1-portfolio";

        const link = page.getByRole("link", { name: "This site" });
        await expect(link).toHaveAttribute("href", targetURL);

        const [newPage] = await Promise.all([
            context.waitForEvent("page"),
            link.click(),
        ]);

        expect(newPage.url()).toBe(targetURL);
    });

    test("Redis Clone", async ({ page, context }) => {
        const targetURL = "https://github.com/BlackSound1/redis-clone";

        const link = page.getByRole("link", { name: "Redis Clone" });
        await expect(link).toHaveAttribute("href", targetURL);

        const [newPage] = await Promise.all([
            context.waitForEvent("page"),
            link.click(),
        ]);

        expect(newPage.url()).toBe(targetURL);
    });

    test("Basic C++ Shell", async ({ page, context }) => {
        const targetURL = "https://github.com/BlackSound1/Basic-CPP-Shell";

        const link = page.getByRole("link", { name: "Basic C++ Shell" });
        await expect(link).toHaveAttribute("href", targetURL);

        const [newPage] = await Promise.all([
            context.waitForEvent("page"),
            link.click(),
        ]);

        expect(newPage.url()).toBe(targetURL);
    });

    test("Go Microservices", async ({ page, context }) => {
        const targetURL = "https://github.com/BlackSound1/go-microservices";

        const link = page.getByRole("link", { name: "Go Microservices" });
        await expect(link).toHaveAttribute("href", targetURL);

        const [newPage] = await Promise.all([
            context.waitForEvent("page"),
            link.click(),
        ]);

        expect(newPage.url()).toBe(targetURL);
    });
});

test.describe("Navbar links", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:3000");
    });

    [
        {role: "Research", href: "/research"},
        {role: "Uses", href: "/uses"},
        {role: "Links", href: "/links"},
        {role: "~/_", href: "/"},
        {role: "BlackSound1", href: "/"},
    ].forEach(({ role, href }) => {
        test(`Navigate to ${role} page`, async ({ page }) => {
            const link = page.getByRole("link", { name: `${role}` });
            await expect(link).toHaveAttribute("href", `${href}`);
            await link.click();
            await expect(page).toHaveURL(`http://localhost:3000${href}`);
        });
    });
});
