# Form CRO

## Core Principles

1. **Every field has a cost** - 3 fields: baseline. 4-6: 10-25% reduction. 7+: 25-50%+ reduction.
   For each field: need before we can help? get another way? ask later?

2. **Value must exceed effort** - clear value prop above form, make what they get obvious

3. **Reduce cognitive load** - one question per field, conversational labels, logical grouping, smart defaults

## Field-by-Field Optimization

- **Email** - single field, no confirmation, inline validation, typo detection, proper mobile keyboard
- **Name** - single "Name" vs First/Last (test this), split only if personalization requires
- **Phone** - make optional, explain why if required, auto-format, country code handling
- **Company** - auto-suggest, enrich post-submission (Clearbit etc), infer from email domain
- **Job title/role** - dropdown if categories matter, free text if wide variation, consider optional
- **Message/comments** - make optional, reasonable character guidance, expand on focus
- **Dropdowns** - "Select one..." placeholder, searchable if many, radio buttons if <5, "Other" option
- **Checkboxes** - clear parallel labels, reasonable option count, "Select all that apply"

## Layout Optimization

**Field order:** easiest first (name, email) -> build commitment -> sensitive last (phone, company size)

**Labels/placeholders:** labels always visible (not placeholder-only), placeholders for examples, help text only when helpful

**Visual:** sufficient spacing, clear hierarchy, CTA stands out, 44px+ tap targets

**Columns:** single column default (higher completion, mobile-friendly). Multi-column only for short related fields (First/Last)

## Multi-Step Forms

**When:** 5+ fields, logically distinct sections, conditional paths, complex forms (applications, quotes)

**Best practices:**
- Progress indicator (step X of Y)
- Easy start, sensitive end, one topic per step
- Back nav, save progress, clear required vs optional

**Progressive commitment:** 1) just email -> 2) name + company -> 3) qualifying questions -> 4) contact preferences

## Error Handling

- Validate on field blur, not while typing
- Green check / red border indicators
- Specific messages near field: "Please enter valid email (e.g., name@company.com)" not "Invalid input"
- On submit: focus first error, summarize if multiple, preserve all input, never clear form

## Submit Button Optimization

**Copy:** "[Action] + [What they get]" - "Get My Free Quote", "Download the Guide", "Request Demo" (not "Submit"/"Send")

**Placement:** immediately after last field, left-aligned, sufficient size/contrast. Mobile: sticky or visible

**States:** loading (disable + spinner), success (clear next steps), error (message + focus)

## Trust & Friction Reduction

- "We'll never share your info", security badges, testimonial, expected response time
- "Takes 30 seconds", field count indicator, remove clutter, generous whitespace
- "No spam, unsubscribe anytime", "We won't share your number", "No credit card required"

## Form Type-Specific Guidance

- **Lead capture** - minimum fields (often just email), clear value prop, enrichment questions post-download
- **Contact** - email/name + message, phone optional, set response time, offer alternatives (chat, phone)
- **Demo request** - name/email/company required, phone optional with "preferred contact", use case question, calendar embed
- **Quote/estimate** - multi-step works well, easy questions first, save progress
- **Survey** - progress bar essential, one question per screen, skip logic, consider incentive

## Experiment Ideas

**Structure** - single vs multi-step, 1 vs 2 columns, embedded vs separate page, above fold vs after content

**Fields** - reduce to minimum, add/remove phone, add/remove company, required vs optional balance, field enrichment, hide fields for returning visitors, conditional fields, auto-suggest company names

**Copy/design** - label clarity/length, placeholder optimization, help text show/hide/hover, error tone, button text variations, button color/size, trust badges, testimonial, response time display

**Form type-specific** - demo: phone requirement, calendar embed vs form. Lead capture: email-only vs email+name, gated vs ungated. Contact: department routing, message requirement, alternative methods

**Mobile** - larger targets, keyboard types, sticky submit, auto-focus first field, container styling
