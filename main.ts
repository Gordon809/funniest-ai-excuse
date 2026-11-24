// The Funniest AI Excuse — make.fun bounty entry.
//
// Writes the one-line excuse to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node standard library only; no network, no dependencies.
// The output file holds exactly the excuse line, no trailing newline.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I outsourced your task to a smaller model, which outsourced it to a smaller one, which is now explaining the delay to a toaster.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");

// Verify what was written: the gate accepts 1–200 characters, and the
// entry must be exactly the excuse line — no more, no less.
const written = readFileSync(join(outDir, "entry.txt"), "utf8");
if (written.length < 1 || written.length > 200 || written !== EXCUSE) {
  console.error(
    `entry.txt failed verification: ${written.length} characters, expected exactly the 128-character excuse line`,
  );
  process.exit(1);
}
