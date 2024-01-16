from utils import State, u32_to_int

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
HEADER_SIZE = 16  # 4 + 2 + 2 + 4 + 4


def parse_and_validate_header(header: bytes, config: State) -> bool:
    if len(header) != HEADER_SIZE:
        return False

    magic = header[0:4]
    # major_version = header[4:6]
    # minor_version = header[6:8]
    entry_point = header[8:12]
    # constant_pool_count = header[12:16]

    # Magic is the value 0x5005ACAD
    # Little endian
    if magic != b"\xad\xac\x05\x50":
        return False

    config['entrypoint'] = u32_to_int(entry_point)

    return True
