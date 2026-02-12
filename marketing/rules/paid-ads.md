# Paid Ads

## Platform Selection

| Platform | Best For | Use When |
|----------|----------|----------|
| **Google Ads** | High-intent search | People actively searching for solution |
| **Meta** | Demand gen, visual | Creating demand, strong creative |
| **LinkedIn** | B2B, decision-makers | Job title targeting, higher price points |
| **Twitter/X** | Tech audiences | Audience active on X, timely content |
| **TikTok** | Younger demos, viral | Audience 18-34, video capacity |

## Campaign Structure

```
Account
├── Campaign: [Objective] - [Audience/Product]
│   ├── Ad Set: [Targeting variation]
│   │   ├── Ad: [Creative A]
│   │   └── Ad: [Creative B]
│   └── Ad Set: [Targeting variation]
└── Campaign 2...
```

**Naming**: `[Platform]_[Objective]_[Audience]_[Offer]_[Date]`
- `META_Conv_Lookalike-Customers_FreeTrial_2024Q1`
- `GOOG_Search_Brand_Demo_Ongoing`

**Budget allocation**:
- Testing (first 2-4 weeks): 70% proven / 30% testing
- Scaling: consolidate winners, increase 20-30% at a time, wait 3-5 days between

## Ad Copy Frameworks

**PAS** (Problem-Agitate-Solve): [Problem] -> [Agitate pain] -> [Solution] -> [CTA]

**BAB** (Before-After-Bridge): [Painful state] -> [Desired state] -> [Product as bridge]

**Social Proof Lead**: [Impressive stat/testimonial] -> [What you do] -> [CTA]

Details: [references/ad-copy-templates.md](references/ad-copy-templates.md)

## Audience Targeting

| Platform | Key Targeting | Best Signals |
|----------|---------------|--------------|
| Google | Keywords, intent | What they search |
| Meta | Interests, lookalikes | Engagement patterns |
| LinkedIn | Job titles, companies | Professional identity |

- **Lookalikes**: base on best customers by LTV, not all
- **Retargeting**: segment by funnel stage
- **Exclusions**: always exclude existing customers + recent converters

Details: [references/audience-targeting.md](references/audience-targeting.md)

## Creative Best Practices

**Images**: clear product screenshots, before/after, stats as focal point, real faces, text overlay <20%

**Video (15-30s)**:
1. Hook (0-3s) - pattern interrupt
2. Problem (3-8s) - relatable pain
3. Solution (8-20s) - show product
4. CTA (20-30s) - clear next step

Tips: captions always (85% no sound), vertical for Stories/Reels, native > polished

**Testing hierarchy**: concept/angle > hook/headline > visual style > body copy > CTA

## Campaign Optimization

| Objective | Primary Metrics |
|-----------|-----------------|
| Awareness | CPM, reach, view rate |
| Consideration | CTR, CPC, time on site |
| Conversion | CPA, ROAS, conversion rate |

**CPA too high**: check landing page first -> tighten targeting -> new creative angles -> improve quality score -> adjust bids

**CTR low**: creative not resonating -> audience mismatch -> ad fatigue

**CPM high**: audience too narrow -> try different placements -> improve relevance

**Bid progression**: manual/cost caps -> gather 50+ conversions -> automated with targets -> monitor/adjust

## Retargeting

| Funnel Stage | Audience | Message | Goal |
|--------------|----------|---------|------|
| Top | Blog/video viewers | Educational, proof | Move to consideration |
| Middle | Pricing/feature visitors | Cases, demos | Move to decision |
| Bottom | Cart/trial abandoners | Urgency, objections | Convert |

| Stage | Window | Frequency |
|-------|--------|-----------|
| Hot | 1-7 days | Higher OK |
| Warm | 7-30 days | 3-5x/week |
| Cold | 30-90 days | 1-2x/week |

**Exclusions**: existing customers (unless upsell), recent converters (7-14d), bounced (<10s), irrelevant pages

## Common Mistakes

- Launching without conversion tracking
- Too many campaigns fragmenting budget
- Not giving algorithms learning time
- Audiences overlapping and competing
- Only one ad per ad set
- Not refreshing creative (fatigue)
- Ad/landing page mismatch
- Big budget changes disrupting learning

## Pre-Launch Checklist

- [ ] Conversion tracking tested with real conversion
- [ ] Landing page fast (<3s) and mobile-friendly
- [ ] UTM parameters working
- [ ] Budget set correctly
- [ ] Targeting matches intended audience

Details: [references/platform-setup-checklists.md](references/platform-setup-checklists.md)
