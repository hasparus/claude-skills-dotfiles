/**
 * Check sentence length rhythm in prose text.
 * Flags runs of 3+ consecutive sentences with similar word counts.
 *
 * Usage: bun run check-rhythm.ts <file>
 *    or: echo "text" | bun run check-rhythm.ts
 */

import { readFileSync } from "node:fs";

const SIMILAR_THRESHOLD = 3; // words difference to count as "similar length"
const MIN_RUN = 3; // consecutive similar-length sentences to flag

function splitSentences(text: string): string[] {
  return text
    .replace(/\n+/g, " ")
    .split(/(?<=[.!?…])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function wordCount(sentence: string): number {
  return sentence.split(/\s+/).filter(Boolean).length;
}

interface Sentence {
  text: string;
  words: number;
}

function findMonotonousRuns(sentences: Sentence[]): Sentence[][] {
  const runs: Sentence[][] = [];
  let current: Sentence[] = [sentences[0]];

  for (let i = 1; i < sentences.length; i++) {
    const prev = sentences[i - 1];
    const curr = sentences[i];
    if (Math.abs(prev.words - curr.words) <= SIMILAR_THRESHOLD) {
      current.push(curr);
    } else {
      if (current.length >= MIN_RUN) runs.push(current);
      current = [curr];
    }
  }
  if (current.length >= MIN_RUN) runs.push(current);
  return runs;
}

// --- main ---

const file = process.argv[2];
const text = file ? readFileSync(file, "utf8") : readFileSync(0, "utf8");

const sentences = splitSentences(text).map((t) => ({
  text: t,
  words: wordCount(t),
}));

if (sentences.length === 0) {
  console.log("No sentences found.");
  process.exit(0);
}

// Stats
const lengths = sentences.map((s) => s.words);
const avg = lengths.reduce((a, b) => a + b, 0) / lengths.length;
const min = Math.min(...lengths);
const max = Math.max(...lengths);

console.log(`Sentences: ${sentences.length}`);
console.log(
  `Word counts — avg: ${avg.toFixed(1)}, min: ${min}, max: ${max}, range: ${max - min}`
);
console.log(`Length sequence: [${lengths.join(", ")}]`);
console.log();

// Visualize
for (const s of sentences) {
  const bar = "█".repeat(Math.min(s.words, 60));
  const preview =
    s.text.length > 50 ? s.text.slice(0, 47) + "..." : s.text;
  console.log(`${String(s.words).padStart(3)} ${bar} ${preview}`);
}
console.log();

// Flag monotonous runs
const runs = findMonotonousRuns(sentences);
if (runs.length === 0) {
  console.log("Rhythm looks good — no monotonous runs detected.");
} else {
  console.log(`Found ${runs.length} monotonous run(s):\n`);
  for (const run of runs) {
    const wordCounts = run.map((s) => s.words).join(", ");
    console.log(`  ${run.length} sentences, word counts: [${wordCounts}]`);
    for (const s of run) {
      const preview =
        s.text.length > 70 ? s.text.slice(0, 67) + "..." : s.text;
      console.log(`    → ${preview}`);
    }
    console.log();
  }
}
