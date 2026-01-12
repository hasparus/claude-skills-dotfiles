/**
 * Capture API calls made during a page interaction
 *
 * Useful for understanding what APIs a page calls.
 * Usage: browser_run_code with this as the code parameter
 */
async (page) => {
  const apiCalls = []

  // Listen for all requests
  page.on("request", request => {
    const url = request.url()
    // Filter for API calls (customize this filter)
    if (
      url.includes("/api/") ||
      url.includes("/graphql") ||
      url.includes("/v1/") ||
      url.includes("/v2/")
    ) {
      apiCalls.push({
        type: "request",
        method: request.method(),
        url: url,
        headers: request.headers(),
        postData: request.postData(),
        timestamp: Date.now(),
      })
    }
  })

  // Listen for responses
  page.on("response", async response => {
    const url = response.url()
    if (
      url.includes("/api/") ||
      url.includes("/graphql") ||
      url.includes("/v1/") ||
      url.includes("/v2/")
    ) {
      let body = null
      try {
        body = await response.json()
      } catch {
        try {
          body = await response.text()
        } catch {
          body = "[Could not read body]"
        }
      }

      apiCalls.push({
        type: "response",
        status: response.status(),
        url: url,
        body: typeof body === "string" ? body.slice(0, 2000) : body,
        timestamp: Date.now(),
      })
    }
  })

  // Perform some action (customize this)
  // Example: await page.getByRole('button', { name: 'Load Data' }).click();
  // Example: await page.reload();

  // Wait for network to settle
  await page.waitForLoadState("networkidle")

  // Remove listeners
  page.removeAllListeners("request")
  page.removeAllListeners("response")

  return {
    totalCalls: apiCalls.length,
    calls: apiCalls,
  }
}
