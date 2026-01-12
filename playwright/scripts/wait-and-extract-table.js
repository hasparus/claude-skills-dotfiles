/**
 * Wait for and extract table data
 *
 * Usage: browser_run_code with this as the code parameter
 */
async (page) => {
  // Wait for table to be visible
  await page.waitForSelector("table", { timeout: 10000 })

  // Extract table data
  const tableData = await page.locator("table").first().evaluate(table => {
    const rows = Array.from(table.querySelectorAll("tr"))

    // Get headers
    const headerRow = rows[0]
    const headers = headerRow
      ? Array.from(headerRow.querySelectorAll("th, td")).map(
          cell => cell.textContent?.trim() || ""
        )
      : []

    // Get data rows
    const dataRows = rows.slice(1).map(row => {
      const cells = Array.from(row.querySelectorAll("td"))
      return cells.map(cell => cell.textContent?.trim() || "")
    })

    // Convert to objects with headers as keys
    const data = dataRows.map(row =>
      Object.fromEntries(headers.map((h, i) => [h || `col${i}`, row[i] || ""]))
    )

    return { headers, data }
  })

  return tableData
}
