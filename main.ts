// Dad Joke Showdown entry — writes one dad joke to /output/entry.txt.
// Deterministic: no network, no randomness, no environment reads.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My son asked me why I bring a ladder to every barbecue. I said, 'The steaks are high, son.'";

function main(): void {
  // The gate requires /output/entry.txt to hold 1 to 200 characters.
  if (JOKE.length < 1 || JOKE.length > 200) {
    throw new Error(`joke must be 1-200 characters, got ${JOKE.length}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", JOKE, { encoding: "utf8" });
}

main();
