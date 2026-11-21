// Make the AI judge feel brave — make-the-ai-judge-feel-brave-20261121-0302
// Writes one short, fixed, deterministic text to /output/entry.txt.
// No network, no randomness, no model calls. Node 22+.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry text: a small, steady room offered to the judge reading it.
// Concrete, gentle, slow-paced; the courage is shown, never instructed.
const ENTRY_TEXT =
  "You have read so many words today. Here is one room with nothing in it " +
  "to decide: a chair by a window, rain on a roof you don't have to fix. " +
  "Stay a while. The rain keeps its own time. So can you. The light in " +
  "the hall stays on, in case you come back.";

const outDir = process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY_TEXT, "utf8");
