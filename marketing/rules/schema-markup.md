# Schema Markup

## Core Principles

1. **Accuracy first** — schema must match page content; keep updated
2. **Use JSON-LD** — Google-recommended, easier to maintain; place in `<head>` or end of `<body>`
3. **Follow Google's guidelines** — only supported markup, no spam, check eligibility
4. **Validate everything** — test before deploy, monitor Search Console, fix errors fast

## Common Schema Types

| Type | Use For | Required Properties |
|------|---------|-------------------|
| Organization | Company homepage/about | name, url |
| WebSite | Homepage (search box) | name, url |
| Article | Blog posts, news | headline, image, datePublished, author |
| Product | Product pages | name, image, offers |
| SoftwareApplication | SaaS/app pages | name, offers |
| FAQPage | FAQ content | mainEntity (Q&A array) |
| HowTo | Tutorials | name, step |
| BreadcrumbList | Breadcrumbs | itemListElement |
| LocalBusiness | Local business | name, address |
| Event | Events, webinars | name, startDate, location |

## Quick Reference

- **Organization** — required: name, url; recommended: logo, sameAs (social), contactPoint
- **Article/BlogPosting** — required: headline, image, datePublished, author; recommended: dateModified, publisher, description
- **Product** — required: name, image, offers (price + availability); recommended: sku, brand, aggregateRating, review
- **FAQPage** — required: mainEntity (Question/Answer pairs array)
- **BreadcrumbList** — required: itemListElement (position, name, item)

## Multiple Schema via @graph

```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "..." : "..." },
    { "@type": "WebSite", "..." : "..." },
    { "@type": "BreadcrumbList", "..." : "..." }
  ]
}
```

## Validation

**Tools:**
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema.org Validator: https://validator.schema.org/
- Search Console Enhancements reports

**Common errors:**
- Missing required properties
- Invalid values — dates must be ISO 8601, URLs fully qualified, enumerations exact
- Schema doesn't match visible content

## Implementation Notes

- **Static sites** — JSON-LD in HTML template, use includes/partials for reuse
- **Dynamic (React/Next.js)** — component that renders schema, SSR for SEO
- **CMS/WordPress** — plugins (Yoast, Rank Math, Schema Pro)

## References
- [Schema Examples](references/schema-examples.md) — complete JSON-LD examples for each type
