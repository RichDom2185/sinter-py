from instructions.primitives import call_primitive_function
from utils import read_i32, read_u8, read_u32


def handle_noop(reader, stack, env, constants):
    pass


def handle_ldc_i(reader, stack, env, constants):
    stack.append(read_i32(reader))


def handle_lgc_i(*args):
    handle_ldc_i(*args)


def handle_lgc_s(reader, stack, env, constants):
    addr = read_u32(reader)
    # FIXME: Abstraction violation
    stack.append(constants[addr][2].decode('utf-8'))


def handle_call_p(reader, stack, env, constants):
    f_id = read_u8(reader)
    n_args = read_u8(reader)

    args = stack[-n_args:]
    for _ in range(n_args):
        stack.pop()

    r = call_primitive_function(f_id, *args)
    stack.append(r)


def handle_ret_g(reader, stack, env, constants):
    # TODO: Investigate correctness
    stack.pop()
