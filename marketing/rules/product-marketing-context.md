# Product Marketing Context

Creates `.claude/product-marketing-context.md` - foundational positioning doc that all marketing skills reference.

## Workflow

1. Check if `.claude/product-marketing-context.md` exists
2. **If exists**: read, summarize, ask which sections to update
3. **If not**: offer two options:
   - **Auto-draft** (recommended): study repo (README, landing pages, copy, package.json), draft V1, user reviews/corrects
   - **From scratch**: walk through sections conversationally, one at a time

Push for verbatim customer language. Exact phrases > polished descriptions.

## Sections to Capture

1. **Product Overview** - one-liner, what it does, category, type (SaaS/marketplace/etc), business model + pricing
2. **Target Audience** - company type, decision-makers, primary use case, jobs to be done, specific scenarios
3. **Personas** (B2B) - user/champion/decision-maker/financial-buyer/technical-influencer: what each cares about, their challenge, value promised
4. **Problems & Pain Points** - core challenge, why current solutions fall short, cost (time/money/opportunities), emotional tension
5. **Competitive Landscape** - direct competitors (same solution), secondary (different solution, same problem), indirect (conflicting approach), how each falls short
6. **Differentiation** - key differentiators, how you solve differently, why that's better, why customers choose you
7. **Objections & Anti-Personas** - top 3 objections + responses, who is NOT a good fit
8. **Switching Dynamics** (JTBD Four Forces) - push (frustrations with current), pull (attraction to you), habit (what keeps them stuck), anxiety (worries about switching)
9. **Customer Language** - how they describe problem (verbatim), how they describe you (verbatim), words to use/avoid, glossary
10. **Brand Voice** - tone, communication style, personality (3-5 adjectives)
11. **Proof Points** - metrics/results, notable customers/logos, testimonial snippets, value themes + evidence
12. **Goals** - primary business goal, key conversion action, current metrics

## Document Template

```markdown
# Product Marketing Context

*Last updated: [date]*

## Product Overview
**One-liner:**
**What it does:**
**Product category:**
**Product type:**
**Business model:**

## Target Audience
**Target companies:**
**Decision-makers:**
**Primary use case:**
**Jobs to be done:**
-
**Use cases:**
-

## Personas
| Persona | Cares about | Challenge | Value we promise |
|---------|-------------|-----------|------------------|
| | | | |

## Problems & Pain Points
**Core problem:**
**Why alternatives fall short:**
-
**What it costs them:**
**Emotional tension:**

## Competitive Landscape
**Direct:** [Competitor] - falls short because...
**Secondary:** [Approach] - falls short because...
**Indirect:** [Alternative] - falls short because...

## Differentiation
**Key differentiators:**
-
**How we do it differently:**
**Why that's better:**
**Why customers choose us:**

## Objections
| Objection | Response |
|-----------|----------|
| | |

**Anti-persona:**

## Switching Dynamics
**Push:**
**Pull:**
**Habit:**
**Anxiety:**

## Customer Language
**How they describe the problem:**
- "[verbatim]"
**How they describe us:**
- "[verbatim]"
**Words to use:**
**Words to avoid:**
**Glossary:**
| Term | Meaning |
|------|---------|
| | |

## Brand Voice
**Tone:**
**Style:**
**Personality:**

## Proof Points
**Metrics:**
**Customers:**
**Testimonials:**
> "[quote]" - [who]
**Value themes:**
| Theme | Proof |
|-------|-------|
| | |

## Goals
**Business goal:**
**Conversion action:**
**Current metrics:**
```

After saving, tell user: "Other marketing skills now use this context automatically. Run `/product-marketing-context` anytime to update."
