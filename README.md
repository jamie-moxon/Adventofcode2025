# Advent of Code 2025

Personal solutions for [Advent of Code 2025](https://adventofcode.com/2025). Each day gets its own folder with puzzle statements, inputs, and any helper scripts I wrote while solving the challenges.

## Structure

- `Day 1/`
  - `Part 1/`
    - `puzzle.md` – original puzzle text for part one.
    - `rotations.txt` – official input for part one.
  - `Part 2/`
    - `part2.md` – extended puzzle description plus approach notes.
    - `solution.py` – simulation script that solves part two using the shared input.

Future days will follow the same layout: puzzle statement, puzzle input, and any scripts or notebooks used to reach the answers.

## Progress

| Day | Status |
| --- | ------ |
| 1 | ✅ Completed |
| 2 | ✅ Completed |
| 3 | ✅ Completed |
| 4 | ⬜ Pending |
| 5 | ⬜ Pending |
| 6 | ⬜ Pending |
| 7 | ⬜ Pending |
| 8 | ⬜ Pending |
| 9 | ⬜ Pending |
| 10 | ⬜ Pending |
| 11 | ⬜ Pending |
| 12 | ⬜ Pending |
| 13 | ⬜ Pending |
| 14 | ⬜ Pending |
| 15 | ⬜ Pending |
| 16 | ⬜ Pending |
| 17 | ⬜ Pending |
| 18 | ⬜ Pending |
| 19 | ⬜ Pending |
| 20 | ⬜ Pending |
| 21 | ⬜ Pending |
| 22 | ⬜ Pending |
| 23 | ⬜ Pending |
| 24 | ⬜ Pending |
| 25 | ⬜ Pending |

## Running the Solutions

This repository targets Python 3.11+, but the existing code has no third-party dependencies. A lightweight virtual environment lives in `Day 1/.venv/`; feel free to reuse it or create your own:

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -U pip
```

To run the Day 1 part two Python solution:

```bash
python3 "Day 1/Part 2/solution.py"
```

The script reads `Day 1/Part 1/rotations.txt`, simulates the dial one click at a time, and counts how many times it rests on zero, matching the method described in `part2.md`.

For a Node.js version of the same simulation (no dependencies required):

```bash
node "Day 1/Part 2/solution.js"
```

## Notes

- Inputs are saved unmodified so solutions remain reproducible.
- I keep short approach summaries next to each solution to capture the reasoning used to solve the puzzle.
- Unless otherwise noted, all code is written to be run directly from the repository root.
