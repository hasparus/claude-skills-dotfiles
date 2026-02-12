# Pricing Strategy

## Three Pricing Axes

1. **Packaging** - what's included at each tier (features, limits, support)
2. **Pricing Metric** - what you charge for (per user, usage, flat fee)
3. **Price Point** - how much (perceived value vs cost)

## Value-Based Pricing

Price between next best alternative (floor) and customer's perceived value (ceiling). Cost to serve is a baseline, not the basis.

## Value Metrics

The value metric = what you charge for. Should scale with value delivered.

| Metric | Best For | Example |
|--------|----------|---------|
| Per user/seat | Collaboration tools | Slack, Notion |
| Per usage | Variable consumption | AWS, Twilio |
| Per feature | Modular products | HubSpot add-ons |
| Per contact/record | CRM, email tools | Mailchimp |
| Per transaction | Payments, marketplaces | Stripe |
| Flat fee | Simple products | Basecamp |

Test: "As customer uses more [metric], do they get more value?" If yes = good metric.

## Tier Structure: Good-Better-Best

- **Good** (entry): core features, limited usage, low price
- **Better** (recommended): full features, reasonable limits, anchor price
- **Best** (premium): everything + advanced, 2-3x Better price

**Differentiate by**: feature gating, usage limits, support level (email -> priority -> dedicated), access (API, SSO, custom branding)

Details: [references/tier-structure.md](references/tier-structure.md)

## Pricing Research

### Van Westendorp
Four questions identifying acceptable price range:
1. Too expensive (wouldn't consider)
2. Too cheap (question quality)
3. Expensive but might consider
4. A bargain

Plot intersections to find optimal zone.

### MaxDiff Analysis
Show feature sets, ask most/least important. Results inform tier packaging.

Details: [references/research-methods.md](references/research-methods.md)

## When to Raise Prices

**Market signals**: competitors raised, prospects don't flinch, "it's so cheap!" feedback
**Business signals**: conversion >40%, churn <3% monthly, strong unit economics
**Product signals**: significant value added, product more mature

### Strategies
1. **Grandfather existing** - new price for new customers only
2. **Delayed increase** - announce 3-6 months out
3. **Tied to value** - raise price but add features
4. **Plan restructure** - change plans entirely

## Pricing Page Best Practices

**Above fold**: clear tier comparison, recommended tier highlighted, monthly/annual toggle, primary CTA per tier

**Elements**: feature comparison table, who each tier is for, FAQ, annual discount (17-20%), money-back guarantee, customer logos

**Psychology**:
- **Anchoring** - show higher-priced option first
- **Decoy effect** - middle tier = best value
- **Charm pricing** - $49 vs $50 for value-focused
- **Round pricing** - $50 vs $49 for premium
