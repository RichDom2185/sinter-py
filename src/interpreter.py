from typing import Callable

from utils import State, read_u16, read_u32

# SVML Specification Reference:
# https://github.com/source-academy/js-slang/wiki/SVML-Specification


# Header structure
# | Field               | Type          |
# | ------------------- | ------------- |
# | Magic	            | u32           |
# | Major version       | u16           |
# | Minor version       | u16           |
# | Entry point         | address (u32) |
# | Constant pool count	| u32           |
_HEADER_SIZE = 16  # 4 + 2 + 2 + 4 + 4


def read_header(reader: Callable[[int], bytes]) -> tuple[State, bool]:
    config: State = {}

    magic = read_u32(reader)
    major_version = read_u16(reader)
    minor_version = read_u16(reader)
    entry_point = read_u32(reader)
    constant_pool_count = read_u32(reader)

    if magic != 0x5005ACAD:
        return config, False

    config['entrypoint'] = entry_point
    return config, True
