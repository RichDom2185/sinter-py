import sys
from typing import Callable

from interpreter import _read_function, main_loop, read_constants, read_header
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

    config, ok = read_header(reader)
    if not ok:
        cleanup()
        return

    # Header is 16 bytes
    constants = read_constants(reader, config['constant_pool_count'], 16)

    # FIXME: Implement
    _read_function(reader)

    main_loop(reader, constants)

    # while True:
    #     data = reader(1)
    #     if not data:
    #         break
    #     print(data)

    cleanup()


if __name__ == "__main__":
    main(sys.argv[1:])
