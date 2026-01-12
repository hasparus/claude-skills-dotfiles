/**
 * Scrape page content - extracts structured data from a web page
 *
 * Usage: browser_run_code with this as the code parameter
 */
async (page) => {
  // Get basic page info
  const title = await page.title()
  const url = page.url()

  // Extract all headings
  const headings = await page.locator("h1, h2, h3").allTextContents()

  // Extract all links
  const links = await page.locator("a[href]").evaluateAll(anchors =>
    anchors.map(a => ({
      text: a.textContent?.trim(),
      href: a.href,
    }))
  )

  // Extract meta description
  const metaDescription = await page
    .locator('meta[name="description"]')
    .getAttribute("content")
    .catch(() => null)

  // Extract main content text
  const mainContent = await page
    .locator("main, article, .content, #content")
    .first()
    .textContent()
    .catch(() => null)

  return {
    title,
    url,
    metaDescription,
    headings,
    links: links.slice(0, 50), // Limit links
    mainContent: mainContent?.slice(0, 5000), // Limit content length
  }
}
