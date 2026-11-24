import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Say What Actually Broke — make.fun bounty entry.
// The program writes one brutally honest error line to the entry file.
const line =
  `We lost your file. Not "something went wrong" — we, the software, lost it, and the backup was a screenshot.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
