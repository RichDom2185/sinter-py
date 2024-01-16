import sys
from typing import Callable

from interpreter import HEADER_SIZE, parse_and_validate_header
from utils import State


def setup(filename: str | None) -> tuple[Callable[[int], bytes], Callable[[], None]]:
    if not filename:
        reader = sys.stdin.buffer.read1
        def cleanup(): return None
    else:
        f = open(filename, "rb")
        reader = f.read1
        cleanup = f.close

    return reader, cleanup


def main(args: list[str]) -> None:
    reader, cleanup = setup(args[0] if args else None)

    config: State = {}
    header = reader(HEADER_SIZE)
    ok = parse_and_validate_header(header, config)
    if not ok:
        cleanup()
        return

    while True:
        data = reader(1)
        if not data:
            break
        print(data)

    cleanup()


if __name__ == "__main__":
    main(sys.argv[1:])
