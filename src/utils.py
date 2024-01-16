from typing import TypedDict


class State(TypedDict):
    entrypoint: int


def u32_to_int(b: bytes) -> int:
    assert len(b) == 4
    return int.from_bytes(b, "little")
