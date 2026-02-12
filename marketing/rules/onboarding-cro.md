# Onboarding CRO

## Core Principles

1. **Time-to-value is everything** - remove every step between signup and core value
2. **One goal per session** - first session = one successful outcome. Advanced features later
3. **Do, don't show** - interactive > tutorial. Doing the thing > learning about it
4. **Progress creates motivation** - show advancement, celebrate completions, make path visible

## Defining Activation

Find the action most correlated with retention - what do retained users do that churned users don't?

**Examples:** project mgmt: create project + add member. Analytics: install tracking + see first report. Design tool: create + export/share. Marketplace: first transaction.

**Metrics:** % signups reaching activation, time to activation, steps to activation, activation by cohort/source

## Onboarding Flow Design

### Immediate Post-Signup (First 30s)

| Approach | Best For | Risk |
|----------|----------|------|
| Product-first | Simple products, B2C, mobile | Blank slate overwhelm |
| Guided setup | Products needing personalization | Friction before value |
| Value-first | Products with demo data | May not feel "real" |

Always: clear single next action, no dead ends, progress indication if multi-step

### Checklist Pattern
Use when: multiple setup steps, several features to discover, self-serve B2B

- 3-7 items, ordered by value (most impactful first)
- Start with quick wins
- Progress bar/completion %, celebration on completion
- Dismiss option (don't trap)

### Empty States
Empty states = onboarding opportunities, not dead ends.
- Explain what this area is for
- Show what it looks like with data
- Clear primary action to add first item
- Optional: pre-populate with example data

### Tooltips/Guided Tours
Use for complex UI, non-obvious features, power features users might miss.
Max 3-5 steps, dismissable, don't repeat for returning users.

## Multi-Channel Coordination

**Trigger-based emails:** welcome (immediate), incomplete onboarding (24h, 72h), activation achieved (celebration + next step), feature discovery (days 3, 7, 14)

Emails should reinforce in-app actions (not duplicate), drive back to product with specific CTA, personalize based on actions taken.

### Stalled Users
Define "stalled" (X days inactive, incomplete setup). Re-engage via: email sequence (value + address blockers + offer help), in-app recovery (welcome back, pick up where left off), human touch for high-value accounts.

## Measurement

| Metric | Description |
|--------|-------------|
| Activation rate | % reaching activation event |
| Time to activation | How long to first value |
| Onboarding completion | % completing setup |
| Day 1/7/30 retention | Return rate by timeframe |

Track drop-off at each step: Signup->Step1->Step2->Activation->Retention. Focus on biggest drops.

### Common Patterns by Product Type

| Type | Key Steps |
|------|-----------|
| B2B SaaS | Setup wizard -> first value action -> team invite -> deep setup |
| Marketplace | Complete profile -> browse -> first transaction -> repeat loop |
| Mobile App | Permissions -> quick win -> push setup -> habit loop |
| Content Platform | Follow/customize -> consume -> create -> engage |

## Experiments

Test: flow simplification (step count, ordering), progress/motivation mechanics, personalization by role/goal, support availability

See [references/onboarding-cro-experiments.md](references/onboarding-cro-experiments.md) for experiment ideas.
