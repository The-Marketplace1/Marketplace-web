import { expect, test } from "@playwright/test";

test("homepage explains what is available without inventing live marketplace data", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: /every service you need\. one marketplace\./i })).toBeVisible();
  const search = page.getByRole("search", { name: "Search Marketplace" });
  await expect(search).toBeVisible();
  await expect(search.getByRole("searchbox")).toBeDisabled();
  await expect(search.getByRole("button", { name: "Search" })).toBeDisabled();
  await expect(page.getByRole("heading", { name: "Popular service categories" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Featured professionals" })).toBeVisible();
  await expect(page.getByText(/profiles and verification status will come from Marketplace services/i)).toBeVisible();
  await expect(page.getByText(/reviews follow completed bookings/i)).toBeVisible();
});

test("public discovery explains that real listings are not connected", async ({ page }) => {
  await page.goto("/");
  await page.locator('a[href="/explore"]').filter({ hasText: "Explore Marketplace" }).click();

  await expect(page).toHaveURL(/\/explore$/);
  await expect(page.getByText(/professional and service listings are not connected yet/i)).toBeVisible();
  await expect(page.getByText(/no sample professionals or services/i)).toBeVisible();
});

test("main and mobile navigation expose the required public destinations", async ({ page }) => {
  await page.goto("/");
  await page.setViewportSize({ width: 1280, height: 844 });
  const mainNavigation = page.getByRole("navigation", { name: "Main navigation" });
  await expect(mainNavigation.getByRole("link", { name: "Explore services" })).toBeVisible();
  await expect(mainNavigation.getByRole("link", { name: "Categories" })).toHaveAttribute("href", "/explore#categories");
  await expect(mainNavigation.getByRole("link", { name: "How it works" })).toHaveAttribute("href", "/#how-it-works");
  await expect(mainNavigation.getByRole("link", { name: "Become a professional" })).toHaveAttribute("href", "/signup/professional");

  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByText("Menu", { exact: true }).click();
  await expect(page.getByRole("navigation", { name: "More pages" }).getByRole("link", { name: "Help and support" })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "More pages" }).getByRole("link", { name: "Sign in" })).toBeVisible();
});

test("unpublished policy routes are discoverable and clearly marked", async ({ page }) => {
  await page.goto("/");
  const footer = page.getByRole("navigation", { name: "Footer navigation" });
  await expect(footer.getByRole("link", { name: "Refunds" })).toHaveAttribute("href", "/refunds");
  await expect(footer.getByRole("link", { name: "Escrow and payments" })).toHaveAttribute("href", "/escrow-and-payments");
  await footer.getByRole("link", { name: "Disputes" }).click();
  await expect(page).toHaveURL(/\/disputes$/);
  await expect(page.getByRole("heading", { name: "Dispute resolution" })).toBeVisible();
  await expect(page.getByText(/not a policy or legal guidance/i)).toBeVisible();
});

test("account entry remains explicitly unavailable", async ({ page }) => {
  await page.goto("/login");

  await expect(page.getByRole("heading", { name: /welcome back/i })).toBeVisible();
  await expect(page.getByText(/account services are not connected yet/i)).toBeVisible();
  await expect(page.getByRole("button", { name: /sign in/i })).toBeDisabled();
});

test("customer workspace exposes payment and verified-review states", async ({ page }) => {
  await page.goto("/customer/bookings");

  await page.getByRole("link", { name: "Payments" }).click();
  await expect(page).toHaveURL(/\/customer\/payments$/);
  await expect(page.getByText(/payment records are not connected/i)).toBeVisible();
  await expect(page.getByText(/no transactions, refunds, or escrow states/i)).toBeVisible();

  await page.getByRole("link", { name: "Reviews" }).click();
  await expect(page).toHaveURL(/\/customer\/reviews$/);
  await expect(page.getByText(/reviews are intended to be linked to a verified Marketplace experience/i)).toBeVisible();
});

test("professional onboarding stays honest before identity services exist", async ({ page }) => {
  await page.goto("/professional/onboarding");

  await expect(page.getByRole("heading", { name: /getting started/i })).toBeVisible();
  await expect(page.getByText(/professional setup is not connected/i)).toBeVisible();
  await expect(page.getByRole("button", { name: /save progress/i })).toBeDisabled();
});

test("mobile pages fit the viewport without horizontal overflow", async ({ page }) => {
  await page.goto("/");

  for (const width of [320, 390, 768, 1280]) {
    await page.setViewportSize({ width, height: 844 });
    const dimensions = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      content: document.documentElement.scrollWidth,
    }));

    expect(dimensions.content, `content should fit at ${width}px`).toBeLessThanOrEqual(dimensions.viewport);
  }
});

