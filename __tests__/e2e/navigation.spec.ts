import { test, expect } from '@playwright/test';

test.describe("Work links", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:3000");
    });

    [
        { name: "Verbit", href: "https://verbit.ai/" },
        { name: "Tecsys", href: "https://www.tecsys.com/" },
    ].forEach(({ name, href }) => {
        test(`${name} link`, async ({ page, context }) => {
            // Get the link
            const link = page.getByRole("link", { name: name });
            await expect(link).toHaveAttribute("href", href);

            // Listen for clicking it
            const [newPage] = await Promise.all([
                context.waitForEvent("page"),
                link.click(),
            ]);

            // Ensure new tab is correct
            expect(newPage.url()).toBe(href);
        });
    });
});

test.describe("Project links", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:3000");
    });

    [
        { name: "Textual System Monitor", href: "https://github.com/BlackSound1/textual-system-monitor" },
        { name: "Go B&B", href: "https://github.com/BlackSound1/Go-B-and-B" },
        { name: "This site", href: "https://github.com/BlackSound1/BlackSound1-portfolio" },
        { name: "Redis Clone", href: "https://github.com/BlackSound1/redis-clone" },
        { name: "Basic C++ Shell", href: "https://github.com/BlackSound1/Basic-CPP-Shell" },
        { name: "Go Microservices", href: "https://github.com/BlackSound1/go-microservices" },
    ].forEach(({ name, href }) => {
        test(`${name} link`, async ({ page, context }) => {

            const link = page.getByRole("link", { name: name });
            await expect(link).toHaveAttribute("href", href);

            const [newPage] = await Promise.all([
                context.waitForEvent("page"),
                link.click(),
            ]);

            expect(newPage.url()).toBe(href);
        });
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
            const link = page.getByRole("link", { name: role });
            await expect(link).toHaveAttribute("href", href);
            await link.click();
            await expect(page).toHaveURL(`http://localhost:3000${href}`);
        });
    });
});
