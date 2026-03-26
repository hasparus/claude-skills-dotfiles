---
name: write-music
description: >
  Apply Gary Provost's "write music" principle — vary sentence length to create
  rhythm in prose. Use when writing or reviewing docs, blog posts, READMEs,
  explanations, or any user-facing text. Triggers on: "make this flow better",
  "improve the rhythm", "write music", "vary sentence length", "this reads flat",
  "sounds monotonous", or when you notice five+ consecutive sentences of similar
  length in text you're writing or editing.
---

# Write Music

Five same-length sentences in a row drone. The ear demands variety. Mix short,
medium, and long sentences so prose has rhythm — a lilt, a harmony.

## The principle

Short sentences punch. Medium ones carry explanation with a comfortable pace.
Long sentences — used sparingly, when the reader is rested — build momentum,
layer ideas, and create the crescendo that says *listen to this, it is
important*.

Monotony comes from repetition of any single length. Five short sentences bore.
Five long ones exhaust. The music comes from the *mix*.

## How to apply

1. After drafting a paragraph, scan sentence lengths. If 3+ consecutive
   sentences share roughly the same word count, rewrite to vary them.
2. Follow a long sentence with a short one. Or a fragment. Then ease back into
   medium length.
3. One-word or two-word sentences are valid. "Music." "Now listen." They create
   emphasis through contrast.
4. Read the text aloud in your head. If the rhythm feels flat, it probably is.

## When reviewing existing text

Point out passages where sentence length is monotonous. Quote the passage, then
show a revised version with varied rhythm. Explain what changed and why it reads
better.

## Checking rhythm with a script

Run `scripts/check-rhythm.ts` (in this skill's directory) to visualize sentence
lengths and detect monotonous runs:

```bash
bun run <skill-dir>/scripts/check-rhythm.ts <file>
echo "your text here" | bun run <skill-dir>/scripts/check-rhythm.ts
```

It prints a bar chart of word counts per sentence and flags 3+ consecutive
sentences within 3 words of each other. Use it to back up your intuition with
data before suggesting edits.

## Scope

This is about rhythm, not content. Don't change meaning, tone, or technical
accuracy to chase sentence variety. When writing technical docs where precision
matters, rhythm still helps — but clarity wins every conflict.
