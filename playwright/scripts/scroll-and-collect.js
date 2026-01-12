/**
 * Scroll through a page and collect items (for infinite scroll or pagination)
 *
 * Customize the itemSelector and maxItems as needed.
 * Usage: browser_run_code with this as the code parameter
 */
async (page) => {
  const itemSelector = ".item, .card, article, [data-item]" // Customize this
  const maxItems = 50
  const maxScrolls = 10
  const collectedItems = []
  const seenIds = new Set()

  for (let i = 0; i < maxScrolls && collectedItems.length < maxItems; i++) {
    // Extract current items
    const items = await page.locator(itemSelector).evaluateAll(elements =>
      elements.map((el, idx) => ({
        id: el.id || el.dataset?.id || `item-${idx}`,
        text: el.textContent?.trim().slice(0, 500),
        html: el.innerHTML?.slice(0, 1000),
      }))
    )

    // Add new items
    for (const item of items) {
      if (!seenIds.has(item.id) && collectedItems.length < maxItems) {
        seenIds.add(item.id)
        collectedItems.push(item)
      }
    }

    // Scroll down
    await page.evaluate(() =>
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
    )

    // Wait for potential new content
    await page.waitForTimeout(1000)

    // Check if we've hit the bottom
    const atBottom = await page.evaluate(
      () =>
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 100
    )

    if (atBottom) {
      // Try to find and click "Load More" button
      const loadMore = page.getByRole("button", {
        name: /load more|show more|see more/i,
      })
      if ((await loadMore.count()) > 0) {
        await loadMore.click()
        await page.waitForTimeout(1500)
      } else {
        break
      }
    }
  }

  return {
    itemCount: collectedItems.length,
    items: collectedItems,
  }
}
