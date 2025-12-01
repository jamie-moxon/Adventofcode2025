#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

function countZeroHits(lines, start = 50) {
  let pos = start;
  let hits = 0;

  for (const raw of lines) {
    const line = raw.trim();
    if (line.length === 0) {
      continue;
    }

    const direction = line[0];
    const distance = Number.parseInt(line.slice(1), 10);
    const step = direction === "R" ? 1 : -1;

    for (let clicks = 0; clicks < distance; clicks += 1) {
      pos = (pos + step + 100) % 100;
      if (pos === 0) {
        hits += 1;
      }
    }
  }

  return hits;
}

function main() {
  const inputPath = process.argv[2]
    ? path.resolve(process.argv[2])
    : path.resolve(__dirname, "../Part 1/rotations.txt");

  if (!fs.existsSync(inputPath)) {
    console.error(`Input file not found: ${inputPath}`);
    process.exit(1);
  }

  const lines = fs.readFileSync(inputPath, "utf8").split(/\r?\n/);
  const total = countZeroHits(lines);

  console.log(total);
}

if (require.main === module) {
  main();
}
