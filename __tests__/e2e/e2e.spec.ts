import { test, expect } from '@playwright/test';

test.describe("work links", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:3000");
        await expect(page).toHaveTitle("BlackSound1");
    });

    test("Verbit link", async ({ page, context }) => {
        // Get the link
        const link = page.getByRole("link", { name: "Verbit" });
        await expect(link).toHaveAttribute("href", "https://verbit.ai/");

        // Listen for clicking it
        const [newPage] = await Promise.all([
            context.waitForEvent("page"),
            link.click(),
        ]);

        // Ensure that the new tab is correct
        expect(newPage.url()).toBe("https://verbit.ai/");
    });

    test("Tecsys link", async ({ page, context }) => {
        // Get the link
        const link = page.getByRole("link", { name: "Tecsys" });
        await expect(link).toHaveAttribute("href", "https://www.tecsys.com/");

        // Listen for clicking it
        const [newPage] = await Promise.all([
            context.waitForEvent("page"),
            link.click(),
        ]);

        // Ensure that the new tab is correct
        expect(newPage.url()).toBe("https://www.tecsys.com/");
    });
});
