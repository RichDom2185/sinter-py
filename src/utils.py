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
