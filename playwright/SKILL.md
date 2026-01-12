---
name: playwright
description: Browser automation using Playwright MCP. Use when users need to interact with web pages, take screenshots, fill forms, scrape data, or test web applications. Prefer Code Mode (browser_run_code) for multi-step operations.
allowed-tools: "mcp__playwright__*"
license: MIT
---

## Code Mode for Browser Automation

This skill uses **Code Mode**: instead of making individual tool calls, write TypeScript/JavaScript code that executes in the browser context. This is more efficient for multi-step operations.

### When to Use Code Mode vs Individual Tools

**Use `browser_run_code` (Code Mode)** for:
- Multi-step operations (navigate → click → fill → submit)
- Loops and conditional logic
- Data extraction and scraping
- Complex interactions that depend on page state

**Use individual tools** for:
- Single operations needing explicit user permission (clicks, typing)
- Taking screenshots (`browser_take_screenshot`)
- Getting page snapshots for element refs (`browser_snapshot`)

## Core Workflow

### 1. Get Page State with Snapshot

Always start by getting a snapshot to see the page structure and obtain element refs:

```
browser_snapshot()  → Returns accessibility tree with refs like "S1", "S2", etc.
```

### 2. Execute Code Mode Operations

Write async functions that receive `page` (Playwright Page object):

```javascript
// browser_run_code
async (page) => {
  // Navigate
  await page.goto('https://example.com');

  // Wait for content
  await page.waitForSelector('h1');

  // Click by role/text (preferred)
  await page.getByRole('button', { name: 'Submit' }).click();

  // Fill form
  await page.getByLabel('Email').fill('test@example.com');

  // Extract data
  const title = await page.title();
  const heading = await page.locator('h1').textContent();

  return { title, heading };
}
```

### 3. Use Individual Tools for Permission-Gated Actions

When user confirmation is needed, use specific tools with refs from snapshot:

```
browser_click({ element: "Submit button", ref: "S5" })
browser_type({ element: "Email input", ref: "S3", text: "test@example.com" })
```

## Common Patterns

### Form Filling

```javascript
// Code Mode - fast, no permission prompts per field
async (page) => {
  await page.getByLabel('Name').fill('John Doe');
  await page.getByLabel('Email').fill('john@example.com');
  await page.getByLabel('Password').fill('secure123');
  await page.getByRole('button', { name: 'Sign Up' }).click();
  await page.waitForURL('**/dashboard');
}
```

Or use `browser_fill_form` for explicit permission:

```
browser_fill_form({
  fields: [
    { name: "Name", ref: "S1", type: "textbox", value: "John Doe" },
    { name: "Email", ref: "S2", type: "textbox", value: "john@example.com" }
  ]
})
```

### Data Extraction / Scraping

```javascript
// Code Mode - ideal for scraping
async (page) => {
  await page.goto('https://example.com/products');

  const products = await page.locator('.product-card').evaluateAll(cards =>
    cards.map(card => ({
      title: card.querySelector('h2')?.textContent,
      price: card.querySelector('.price')?.textContent,
      link: card.querySelector('a')?.href
    }))
  );

  return products;
}
```

### Navigation with Assertions

```javascript
async (page) => {
  await page.goto('https://example.com/login');

  // Fill and submit
  await page.getByLabel('Email').fill('user@test.com');
  await page.getByLabel('Password').fill('password');
  await page.getByRole('button', { name: 'Log In' }).click();

  // Wait and verify
  await page.waitForURL('**/dashboard');
  const welcomeText = await page.locator('.welcome-message').textContent();

  return { success: true, message: welcomeText };
}
```

### Handling Dynamic Content

```javascript
async (page) => {
  await page.goto('https://example.com/search');

  // Type with debounce simulation
  await page.getByPlaceholder('Search...').fill('graphql');

  // Wait for results to load
  await page.waitForSelector('.search-results');

  // Or wait for network idle
  await page.waitForLoadState('networkidle');

  const results = await page.locator('.result-item').count();
  return { resultCount: results };
}
```

### Screenshots

Use the dedicated tool for screenshots:

```
browser_take_screenshot()                           // Viewport
browser_take_screenshot({ fullPage: true })         // Full page
browser_take_screenshot({ element: "Header", ref: "S1" })  // Element
```

### Multiple Tabs

```javascript
async (page) => {
  const context = page.context();

  // Open new tab
  const newPage = await context.newPage();
  await newPage.goto('https://example.com/other');

  // Get data from both
  const mainTitle = await page.title();
  const otherTitle = await newPage.title();

  await newPage.close();
  return { mainTitle, otherTitle };
}
```

## Playwright Locator Strategies

Prefer these in order:
1. **Role** - `page.getByRole('button', { name: 'Submit' })`
2. **Label** - `page.getByLabel('Email')`
3. **Placeholder** - `page.getByPlaceholder('Search...')`
4. **Text** - `page.getByText('Welcome')`
5. **Test ID** - `page.getByTestId('submit-btn')`
6. **CSS** - `page.locator('.class-name')` (last resort)

## Error Handling

```javascript
async (page) => {
  try {
    await page.goto('https://example.com', { timeout: 10000 });
    await page.getByRole('button', { name: 'Accept Cookies' }).click({ timeout: 3000 });
  } catch (e) {
    // Cookie banner might not exist, continue
  }

  // Main logic here
  return await page.title();
}
```

## Tips

- **Always snapshot first** to see the page and get element refs
- **Use Code Mode for efficiency** - one execution instead of many tool calls
- **Individual tools for permission** - when you need explicit user consent
- **Return data from Code Mode** - the return value comes back to the conversation
- **Handle timeouts** - web pages are slow, use appropriate waits
- **Prefer semantic locators** - getByRole, getByLabel over CSS selectors
