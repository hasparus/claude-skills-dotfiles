/**
 * Fill and submit a login form
 *
 * Customize the selectors and credentials as needed.
 * Usage: browser_run_code with this as the code parameter
 */
async (page) => {
  // Common login form patterns - try multiple strategies
  const emailSelectors = [
    page.getByLabel("Email"),
    page.getByLabel("Username"),
    page.getByPlaceholder(/email/i),
    page.getByPlaceholder(/username/i),
    page.locator('input[type="email"]'),
    page.locator('input[name="email"]'),
    page.locator('input[name="username"]'),
  ]

  const passwordSelectors = [
    page.getByLabel("Password"),
    page.getByPlaceholder(/password/i),
    page.locator('input[type="password"]'),
  ]

  const submitSelectors = [
    page.getByRole("button", { name: /log ?in|sign ?in|submit/i }),
    page.locator('button[type="submit"]'),
    page.locator('input[type="submit"]'),
  ]

  // Find and fill email/username
  for (const selector of emailSelectors) {
    if ((await selector.count()) > 0) {
      await selector.fill("YOUR_EMAIL_HERE")
      break
    }
  }

  // Find and fill password
  for (const selector of passwordSelectors) {
    if ((await selector.count()) > 0) {
      await selector.fill("YOUR_PASSWORD_HERE")
      break
    }
  }

  // Find and click submit
  for (const selector of submitSelectors) {
    if ((await selector.count()) > 0) {
      await selector.click()
      break
    }
  }

  // Wait for navigation
  await page.waitForLoadState("networkidle")

  return {
    success: true,
    currentUrl: page.url(),
    title: await page.title(),
  }
}
