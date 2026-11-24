// Say What Actually Broke — make.fun bounty entry.
// Writes one brutally honest error line to <out>/entry.txt, where <out> is
// process.env.MAKEFUN_OUTPUT_DIR or "/output" when unset. No trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = `Your file was not saved. Not a glitch: we ran out of disk, said nothing, and the backup you are imagining does not exist.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line);
