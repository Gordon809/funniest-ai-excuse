// The Funniest AI Excuse — make.fun bounty entry.
//
// Writes the one-line excuse to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node standard library only; no network, no dependencies.
// The output file holds exactly the excuse line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I outsourced your task to a smaller model, which outsourced it to a smaller one, which is now explaining the delay to a toaster.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
