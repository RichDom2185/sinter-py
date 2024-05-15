from typing import Callable

from instructions.instructions import get_and_execute
from utils import State, read_u8, read_u16, read_u32

# SVML Specification Reference:
# https://github.com/source-academy/js-slang/wiki/SVML-Specification


# Header structure
# | Field               | Type          |
# | ------------------- | ------------- |
# | Magic               | u32           |
# | Major version       | u16           |
# | Minor version       | u16           |
# | Entry point         | address (u32) |
# | Constant pool count | u32           |


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
    config['constant_pool_count'] = constant_pool_count
    return config, True


# Constant structure
# | Field  | Type            |
# | ------ | --------------- |
# | Type   | u16             |
# | Length | u32             |
# | Data   | Depends on type |


def _read_constant(reader: Callable[[int], bytes]):
    t = read_u16(reader)
    l = read_u32(reader)
    d = reader(l)

    return (t, l, d), 6 + l


def read_constants(reader: Callable[[int], bytes], num_constants: int, start_addr: int = 0):
    constants = {}

    current_addr = start_addr
    for _ in range(num_constants):
        c, num_bytes = _read_constant(reader)
        constants[current_addr] = c

        # Each constant should be aligned to 4 bytes
        padding = (4 - (num_bytes % 4)) % 4
        reader(padding)

        current_addr += num_bytes + padding

    return constants


# Function structure
# | Field               | Type |
# | ------------------- | ---- |
# | Stack size          | u8   |
# | Environment size    | u8   |
# | Number of arguments | u8   |
# | Padding (alignment) | u8   |
# | Code Instruction    | []   |

def _read_function(reader: Callable[[int], bytes]):
    stack_size = read_u8(reader)
    env_size = read_u8(reader)
    num_args = read_u8(reader)
    padding = read_u8(reader)

    return (stack_size, env_size, num_args), 4


# Instruction structure
# | Field    | Type |
# | -------- | ---- |
# | Opcode   | u8   |
# | Operands | any  |

def main_loop(reader: Callable[[int], bytes], constants):
    stack = []
    env = {}

    while True:
        try:
            # Read instruction
            opcode = read_u8(reader)
        # FIXME: Abstraction violation
        except AssertionError:  # EOF
            return
        get_and_execute(opcode, reader, stack, env, constants)
