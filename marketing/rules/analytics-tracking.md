# Analytics Tracking

## Core Principles

1. **Track for decisions, not data** - every event should inform a decision
2. **Start with questions** - what do you need to know? work backwards
3. **Name things consistently** - establish patterns before implementing
4. **Maintain data quality** - clean data > more data

## Tracking Plan Framework

```
Event Name | Category | Properties | Trigger | Notes
```

| Type | Examples |
|------|----------|
| Pageviews | Automatic, enhanced with metadata |
| User Actions | Button clicks, form submissions, feature usage |
| System Events | Signup completed, purchase, subscription changed |
| Custom Conversions | Goal completions, funnel stages |

Details: [references/event-library.md](references/event-library.md)

## Event Naming Conventions

Format: `object_action` (lowercase, underscores)

```
signup_completed
button_clicked
form_submitted
checkout_payment_completed
```

- Be specific: `cta_hero_clicked` not `button_clicked`
- Context goes in properties, not event name
- No spaces or special characters

## Essential Events

### Marketing Site

| Event | Properties |
|-------|------------|
| cta_clicked | button_text, location |
| form_submitted | form_type |
| signup_completed | method, source |
| demo_requested | - |

### Product/App

| Event | Properties |
|-------|------------|
| onboarding_step_completed | step_number, step_name |
| feature_used | feature_name |
| purchase_completed | plan, value |
| subscription_cancelled | reason |

## Event Properties

| Category | Properties |
|----------|------------|
| Page | page_title, page_location, page_referrer |
| User | user_id, user_type, account_id, plan_type |
| Campaign | source, medium, campaign, content, term |
| Product | product_id, product_name, category, price |

Rules: consistent names, include context, don't duplicate automatic props, no PII

## GA4 Quick Setup

1. Create GA4 property + data stream
2. Install gtag.js or GTM
3. Enable enhanced measurement
4. Configure custom events
5. Mark conversions in Admin

```javascript
gtag('event', 'signup_completed', {
  'method': 'email',
  'plan': 'free'
});
```

Details: [references/ga4-implementation.md](references/ga4-implementation.md)

## GTM Container Structure

| Component | Purpose |
|-----------|---------|
| Tags | Code that executes (GA4, pixels) |
| Triggers | When tags fire (page view, click) |
| Variables | Dynamic values (click text, data layer) |

```javascript
dataLayer.push({
  'event': 'form_submitted',
  'form_name': 'contact',
  'form_location': 'footer'
});
```

Details: [references/gtm-implementation.md](references/gtm-implementation.md)

## UTM Parameter Strategy

| Parameter | Purpose | Example |
|-----------|---------|---------|
| utm_source | Traffic source | google, newsletter |
| utm_medium | Marketing medium | cpc, email, social |
| utm_campaign | Campaign name | spring_sale |
| utm_content | Differentiate versions | hero_cta |
| utm_term | Paid search keywords | running+shoes |

Rules: lowercase everything, underscores or hyphens consistently, be specific (`blog_footer_cta` not `cta1`), document all UTMs

## Debugging Tools

| Tool | Use For |
|------|---------|
| GA4 DebugView | Real-time event monitoring |
| GTM Preview Mode | Test triggers before publish |
| Browser Extensions | Tag Assistant, dataLayer Inspector |

### Common Issues

| Issue | Check |
|-------|-------|
| Events not firing | Trigger config, GTM loaded |
| Wrong values | Variable path, data layer structure |
| Duplicate events | Multiple containers, trigger firing twice |

### Validation Checklist
- [ ] Events fire on correct triggers
- [ ] Properties populate correctly
- [ ] No duplicate events
- [ ] Works across browsers + mobile
- [ ] Conversions recorded correctly
- [ ] No PII leaking

## Privacy Considerations

- Cookie consent required in EU/UK/CA
- No PII in analytics properties
- Configure data retention settings
- Use consent mode (wait for consent)
- IP anonymization
- Only collect what you need
