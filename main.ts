import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Say What Actually Broke — make.fun bounty entry.
// The program writes one brutally honest status line (120 chars) to the output entry file.
const line =
  "We deleted the production database. The 'backup' was a screenshot of the database from 2023. There's nothing to restore.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
