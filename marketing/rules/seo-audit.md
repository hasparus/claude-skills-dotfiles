# SEO Audit

## Audit Priority Order
1. Crawlability & Indexation — can Google find/index it?
2. Technical Foundations — fast and functional?
3. On-Page Optimization — content optimized?
4. Content Quality — deserves to rank?
5. Authority & Links — has credibility?

## Technical SEO

### Crawlability
- **robots.txt** — no unintentional blocks, sitemap referenced
- **XML sitemap** — exists, submitted to Search Console, canonical/indexable URLs only, updated
- **Architecture** — important pages within 3 clicks, logical hierarchy, no orphans
- **Crawl budget** (large sites) — parameterized URLs controlled, faceted nav handled, pagination fallback for infinite scroll

### Indexation
- **Status** — site:domain.com check, Search Console coverage, indexed vs expected
- **Issues** — noindex on important pages, wrong canonicals, redirect chains/loops, soft 404s, uncanonicalized duplicates
- **Canonicalization** — all pages have canonical tags, self-referencing on unique pages, HTTP/HTTPS + www/non-www + trailing slash consistency

### Speed & Core Web Vitals
- LCP < 2.5s, INP < 200ms, CLS < 0.1
- Check: TTFB, image optimization, JS execution, CSS delivery, caching, CDN, font loading

### Mobile
- Responsive (not separate m. site), tap targets, viewport, no horizontal scroll, same content as desktop

### HTTPS
- Sitewide HTTPS, valid SSL, no mixed content, HTTP→HTTPS redirects

### URLs
- Readable, descriptive, keywords where natural, consistent, lowercase, hyphen-separated

## On-Page SEO

### Title Tags
- Unique per page, primary keyword near start, 50-60 chars, compelling, brand at end
- Issues: duplicates, truncated, too short, keyword stuffing, missing

### Meta Descriptions
- Unique per page, 150-160 chars, includes keyword, clear value prop, CTA
- Issues: duplicates, auto-generated, wrong length, not compelling

### Headings
- One H1 per page with primary keyword, logical H1→H2→H3 hierarchy
- Issues: multiple H1s, skipped levels, styling-only headings

### Content
- Keyword in first 100 words, related keywords natural, sufficient depth, answers intent, better than competitors
- Thin content: low unique value pages, empty tag/category pages, doorway pages, near-duplicates

### Images
- Descriptive filenames, alt text on all, compressed, WebP, lazy loading, responsive

### Internal Linking
- Important pages well-linked, descriptive anchors, no broken links, reasonable count
- Issues: orphan pages, over-optimized anchors, important pages buried

### Keyword Targeting
- Per page: clear primary keyword, title/H1/URL aligned, satisfies intent, no cannibalization
- Site-wide: keyword map, no gaps, topical clusters

## Content Quality — E-E-A-T

- **Experience** — first-hand experience, original data, real examples
- **Expertise** — author credentials visible, accurate/detailed, sourced claims
- **Authoritativeness** — recognized in space, cited by others
- **Trustworthiness** — accurate info, transparent, contact info, privacy policy, HTTPS

Content depth: comprehensive, answers follow-ups, better than competitors, current

## Common Issues by Site Type

**SaaS** — thin product pages, blog not linked to product, missing comparison/alternative pages, thin feature pages
**E-commerce** — thin category pages, duplicate descriptions, missing product schema, faceted nav duplicates, mishandled out-of-stock
**Content/Blog** — outdated content, keyword cannibalization, no topical clustering, poor internal linking, missing author pages
**Local** — inconsistent NAP, missing local schema, no GBP optimization, missing location pages

## Output Format

**Executive Summary** — overall health, top 3-5 priorities, quick wins

**Per Finding:**
- Issue → Impact (H/M/L) → Evidence → Fix → Priority

**Action Plan:**
1. Critical fixes (blocking indexation/ranking)
2. High-impact improvements
3. Quick wins
4. Long-term recommendations

## References
- [AEO & GEO Patterns](references/aeo-geo-patterns.md)
- [AI Writing Detection](references/ai-writing-detection.md)
