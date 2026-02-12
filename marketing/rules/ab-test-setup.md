# A/B Test Setup

## Hypothesis Framework

```
Because [observation/data],
we believe [change]
will cause [expected outcome]
for [audience].
We'll know when [metrics].
```

**Weak**: "Changing button color might increase clicks."
**Strong**: "Because users can't find CTA (per heatmaps), making button larger + contrasting color will increase CTR 15%+ for new visitors. Measure click-through to signup."

## Test Types

| Type | Description | Traffic Needed |
|------|-------------|----------------|
| A/B | Two versions, single change | Moderate |
| A/B/n | Multiple variants | Higher |
| MVT | Multiple changes in combinations | Very high |
| Split URL | Different URLs | Moderate |

## Sample Size Quick Reference

| Baseline | 10% Lift | 20% Lift | 50% Lift |
|----------|----------|----------|----------|
| 1% | 150k/var | 39k/var | 6k/var |
| 3% | 47k/var | 12k/var | 2k/var |
| 5% | 27k/var | 7k/var | 1.2k/var |
| 10% | 12k/var | 3k/var | 550/var |

Calculators: [Evan Miller](https://www.evanmiller.org/ab-testing/sample-size.html), [Optimizely](https://www.optimizely.com/sample-size-calculator/)

Details: [references/sample-size-guide.md](references/sample-size-guide.md)

## Metrics Selection

- **Primary**: single metric tied to hypothesis - what you call the test on
- **Secondary**: support interpretation, explain why/how change worked
- **Guardrail**: things that shouldn't get worse - stop if significantly negative

Example (pricing page): primary = plan selection rate, secondary = time on page + plan distribution, guardrail = support tickets + refund rate

## Designing Variants

| Category | Examples |
|----------|----------|
| Headlines/Copy | Message angle, value prop, specificity, tone |
| Visual Design | Layout, color, images, hierarchy |
| CTA | Button copy, size, placement, number |
| Content | Info included, order, amount, social proof |

Rules: single meaningful change, bold enough to matter, true to hypothesis

## Traffic Allocation

| Approach | Split | When |
|----------|-------|------|
| Standard | 50/50 | Default |
| Conservative | 90/10, 80/20 | Limit risk |
| Ramping | Start small, increase | Technical risk |

Ensure: user sees same variant on return, balanced exposure across time

## Running the Test

### Pre-Launch Checklist
- [ ] Hypothesis documented
- [ ] Primary metric defined
- [ ] Sample size calculated
- [ ] Variants implemented + QA'd
- [ ] Tracking verified

### During Test
**DO**: monitor technical issues, check segment quality, document external factors
**DON'T**: peek and stop early, change variants, add new traffic sources

### The Peeking Problem
Looking at results before sample size and stopping early = false positives. Pre-commit to sample size. Trust the process.

## Analyzing Results

**95% confidence** = p-value < 0.05 = <5% chance result is random

### Checklist
1. Reached sample size?
2. Statistically significant? Check confidence intervals
3. Effect size meaningful? Compare to MDE, project impact
4. Secondary metrics consistent?
5. Guardrail concerns?
6. Segment differences? Mobile vs desktop? New vs returning?

| Result | Action |
|--------|--------|
| Significant winner | Implement |
| Significant loser | Keep control, learn why |
| No difference | Need more traffic or bolder test |
| Mixed signals | Dig deeper, segment |

**Document every test**: hypothesis, variants (screenshots), results, decision + learnings

Details: [references/test-templates.md](references/test-templates.md)
