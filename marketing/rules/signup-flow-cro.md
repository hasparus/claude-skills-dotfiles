# Signup Flow CRO

## Core Principles

1. **Minimize required fields** - every field reduces conversion. Ask: need before product use? collect later? infer from other data?
   - Essential: email/phone, password
   - Often needed: name
   - Usually deferrable: company, role, team size, phone, address

2. **Value before commitment** - show/give before requiring signup, let them experience product first

3. **Reduce perceived effort** - show progress, group related fields, smart defaults, pre-fill

4. **Remove uncertainty** - "Takes 30 seconds", show what happens after, no surprises

## Field-by-Field Optimization

- **Email** - single field (no confirmation), inline validation, typo detection (gmial->gmail), clear errors
- **Password** - show/hide toggle, requirements upfront not after failure, allow paste, strength meter > rigid rules, consider passwordless
- **Name** - single "Full name" vs First/Last (test this), only require if immediately used, consider optional
- **Social auth** - place prominently (often higher conversion), B2C: Google/Apple/Facebook, B2B: Google/Microsoft/SSO
- **Phone** - defer unless essential, explain why if required, proper input type + country code, format as typed
- **Company** - defer if possible, auto-suggest, infer from email domain
- **Use case/role** - defer to onboarding if possible, max one question at signup

## Single-Step vs Multi-Step

**Single-step when:** <=3 fields, simple B2C, high-intent visitors

**Multi-step when:** 4+ fields, complex B2B needing segmentation, different info types

**Multi-step best practices:**
- Progress indicator
- Easy questions first (name, email), harder later (after psychological commitment)
- Each step completable in seconds
- Allow back nav, save progress

**Progressive commitment:** 1) email only -> 2) password + name -> 3) customization (optional)

## Trust & Friction Reduction

- "No credit card required", "Free forever"/"14-day free trial"
- "We'll never share your email", security badges, testimonial near form
- Inline validation (not just on submit)
- Specific errors ("Email already registered" + recovery path)
- Don't clear form on error, focus problem field
- Placeholders for examples not labels, labels always visible

## Mobile Optimization

- 44px+ touch targets
- Appropriate keyboard types (email, tel)
- Autofill support, reduce typing (social auth, pre-fill)
- Single column, sticky CTA button

## Common Patterns

- **B2B SaaS Trial:** email+password (or Google) -> name+company -> onboarding
- **B2C App:** Google/Apple auth OR email -> product -> profile later
- **Waitlist:** email only -> optional role/use case -> confirmation
- **E-commerce:** guest checkout default -> account optional post-purchase

## Experiment Ideas

**Form design** - single vs multi-step, field count reduction, SSO prominent vs email prominent, SSO-only vs SSO+email

**Copy** - CTA text ("Create Account" vs "Start Free Trial" vs "Get Started"), headline variations, field labels minimal vs descriptive, password requirement display

**Trust** - social proof near form, trust badges, "No CC required", privacy copy

**Trial/commitment** - CC required vs not, trial length (7/14/30 days), freemium vs trial, email verification timing, CAPTCHA impact, terms checkbox vs implicit

**Post-submit** - instant product access vs email-first, auto-login vs require login, personalized welcome
