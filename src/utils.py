import struct
from typing import Callable, TypedDict


class State(TypedDict):
    entrypoint: int
    constant_pool_count: int


def _to_int(b: bytes, size: int, signed: bool = False) -> int:
    assert len(b) == size
    return int.from_bytes(b, "little", signed=signed)


def read_u8(reader: Callable[[int], bytes]) -> int:
    return _to_int(reader(1), 1)


def read_u16(reader: Callable[[int], bytes]) -> int:
    return _to_int(reader(2), 2)


def read_u32(reader: Callable[[int], bytes]) -> int:
    return _to_int(reader(4), 4)


def read_i8(reader: Callable[[int], bytes]) -> int:
    return _to_int(reader(1), 1, signed=True)


def read_i16(reader: Callable[[int], bytes]) -> int:
    return _to_int(reader(2), 2, signed=True)


def read_i32(reader: Callable[[int], bytes]) -> int:
    return _to_int(reader(4), 4, signed=True)


def _to_float(b: bytes, size: int, format: str) -> float:
    assert len(b) == size
    return struct.unpack(format, b)[0]


def read_f32(reader: Callable[[int], bytes]) -> float:
    return _to_float(reader(4), 4, '<f')


def read_f64(reader: Callable[[int], bytes]) -> float:
    return _to_float(reader(8), 8, '<d')
