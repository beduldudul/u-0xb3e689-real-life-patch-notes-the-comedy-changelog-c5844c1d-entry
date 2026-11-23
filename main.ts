// Real-Life Patch Notes entry: one-line changelog for a human-biology bug.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "v1.9.3: fixed a bug where the brain replayed an embarrassing moment from 2014 at 3 a.m. instead of sleeping.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 160 characters.
if (line.length < 1 || line.length > 160) {
  throw new Error(`entry is ${line.length} chars, gate is 1-160`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
