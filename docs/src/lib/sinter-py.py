print('Hello from sinter-py!')
print(f'Received program: {len(prgrm)} bytes')

# Adapted from interpreter-src/main.py
# to be used in the docs

from io import BytesIO

from interpreter import _read_function, main_loop, read_constants, read_header
from utils import State


def setup():
    f = BytesIO(bytes(prgrm))
    reader = f.read1
    cleanup = f.close

    return reader, cleanup


def main() -> None:
    reader, cleanup = setup()

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
    main()
