from primitives import call_primitive_function
from utils import read_i32, read_u8


# TODO: Implement the rest of the instructions
def _handle_notimplemented(reader, stack, env, constants):
    raise NotImplementedError()


def _handle_noop(reader, stack, env, constants):
    pass


def _handle_ldc_i(reader, stack, env, constants):
    stack.append(read_i32(reader))


def _handle_lgc_i(*args):
    _handle_ldc_i(*args)


def _handle_lgc_s(reader, stack, env, constants):
    stack.append(read_i32(reader))


def _handle_call_p(reader, stack, env, constants):
    f_id = read_u8(reader)
    n_args = read_u8(reader)

    args = stack[-n_args:]
    for _ in range(n_args):
        stack.pop()

    r = call_primitive_function(f_id, *args)
    stack.append(r)


def _handle_ret_g(reader, stack, env, constants):
    # TODO: Investigate correctness
    stack.pop()
