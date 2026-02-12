# Paywall & Upgrade Screen CRO

## Core Principles

1. **Value before ask** - user experienced real value first, upgrade = natural next step, timing: after aha moment
2. **Show, don't tell** - demonstrate paid feature value, preview what they're missing, make upgrade tangible
3. **Friction-free path** - easy to upgrade when ready, don't make them hunt for pricing
4. **Respect the no** - don't trap/pressure, easy to continue free, maintain trust for future conversion

## Trigger Points

### Feature Gates
User clicks paid-only feature: clear explanation why paid, show what feature does, quick path to unlock, option to continue without

### Usage Limits
User hits limit: clear indication of limit reached, show what upgrading provides, don't block abruptly

### Trial Expiration
Trial ending: early warnings (7, 3, 1 day), clear "what happens" on expiration, summarize value received

### Time-Based Prompts
After X days of free use: gentle reminder, highlight unused paid features, easy to dismiss

## Paywall Screen Components

1. **Headline** - "Unlock [Feature] to [Benefit]"
2. **Value demonstration** - preview, before/after, "With Pro you could..."
3. **Feature comparison** - key differences, current plan marked
4. **Pricing** - clear, simple, annual vs monthly
5. **Social proof** - customer quotes, "X teams use this"
6. **CTA** - specific, value-oriented: "Start Getting [Benefit]"
7. **Escape hatch** - "Not now" or "Continue with Free"

## Specific Paywall Types

**Feature lock:**
```
[Lock Icon] This feature is available on Pro
[Feature preview/screenshot]
[Feature name] helps you [benefit]:
  - [Capability] - [Capability]
[Upgrade to Pro - $X/mo]  [Maybe Later]
```

**Usage limit:**
```
You've reached your free limit
[Progress bar at 100%]
Free: 3 projects | Pro: Unlimited
[Upgrade to Pro]  [Delete a project]
```

**Trial expiration:**
```
Your trial ends in 3 days
What you'll lose: [features used], [data created]
What you've accomplished: Created X projects
[Continue with Pro]  [Remind me later]  [Downgrade]
```

## Timing & Frequency

**Show:** after value moment (before frustration), after activation/aha, when hitting genuine limits

**Don't show:** during onboarding (too early), mid-flow, repeatedly after dismissal

**Rules:** limit per session, cool-down after dismiss (days not hours), track annoyance signals

## Upgrade Flow

- Minimize steps from paywall to payment
- Keep in-context if possible, pre-fill known info
- Post-upgrade: immediate feature access, confirmation + receipt, guide to new features

## Anti-Patterns

**Dark patterns:** hiding close button, confusing plan selection, guilt-trip copy

**Conversion killers:** asking before value delivered, too frequent prompts, blocking critical flows, complicated upgrade process

## Experiments

Test: trigger timing, headline/copy variations, price presentation, trial length, feature emphasis, design/layout

**Metrics:** paywall impression rate, click-through to upgrade, completion rate, revenue per user, churn rate post-upgrade

See [references/paywall-upgrade-cro-experiments.md](references/paywall-upgrade-cro-experiments.md) for experiment ideas.
