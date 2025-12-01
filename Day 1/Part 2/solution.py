from pathlib import Path


def count_zero_hits(instructions: str, start: int = 50) -> int:
    """Return how many clicks land on zero while following the rotation list."""
    pos = start
    hits = 0
    for raw in instructions.splitlines():
        line = raw.strip()
        if not line:
            continue
        direction = line[0]
        distance = int(line[1:])
        step = 1 if direction == "R" else -1
        for _ in range(distance):
            pos = (pos + step) % 100
            if pos == 0:
                hits += 1
    return hits


def main() -> None:
    rotations_path = Path("../Part 1/rotations.txt").resolve()
    data = rotations_path.read_text()
    total = count_zero_hits(data)
    print(total)


if __name__ == "__main__":
    main()
