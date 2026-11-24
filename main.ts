import { mkdirSync, writeFileSync } from "node:fs";

// One original one-line joke about office life.
const entry =
  "I told my boss I thrive under pressure, so he moved every deadline to yesterday and called it a growth opportunity.";

// The bounty allows one line of at most 200 characters. Count Unicode code
// points so multi-byte characters count once, and fail loudly instead of
// writing an out-of-range entry.
const length = [...entry].length;
if (length < 1 || length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
process.stdout.write(entry);
