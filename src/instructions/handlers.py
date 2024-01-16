from instructions.primitives import call_primitive_function
from utils import read_f32, read_f64, read_i32, read_u8, read_u32


def handle_noop(reader, stack, env, constants):
    '''Handles the 0x00 instruction.'''
    pass


def handle_ldc_i(reader, stack, env, constants):
    '''Handles the 0x01 instruction.'''
    stack.append(read_i32(reader))


def handle_lgc_i(*args):
    '''Handles the 0x02 instruction.'''
    handle_ldc_i(*args)


def handle_ldc_f32(reader, stack, env, constants):
    '''Handles the 0x03 instruction.'''
    stack.append(read_f32(reader))


def handle_lgc_f32(*args):
    '''Handles the 0x04 instruction.'''
    handle_ldc_f32(*args)


def handle_ldc_f64(reader, stack, env, constants):
    '''Handles the 0x05 instruction.'''
    stack.append(read_f64(reader))


def handle_lgc_f64(*args):
    '''Handles the 0x06 instruction.'''
    handle_ldc_f64(*args)


def handle_lgc_s(reader, stack, env, constants):
    '''Handles the 0x0D instruction.'''
    addr = read_u32(reader)
    # FIXME: Abstraction violation
    stack.append(constants[addr][2].decode('utf-8'))


def handle_add_g(*args):
    '''Handles the 0x11 instruction.'''
    handle_add_f(*args)


def handle_add_f(reader, stack, env, constants):
    '''Handles the 0x12 instruction.'''
    b = stack.pop()
    a = stack.pop()
    stack.append(a + b)


def handle_sub_g(*args):
    '''Handles the 0x13 instruction.'''
    handle_sub_f(*args)


def handle_sub_f(reader, stack, env, constants):
    '''Handles the 0x14 instruction.'''
    b = stack.pop()
    a = stack.pop()
    stack.append(a - b)


def handle_mul_g(*args):
    '''Handles the 0x15 instruction.'''
    handle_mul_f(*args)


def handle_mul_f(reader, stack, env, constants):
    '''Handles the 0x16 instruction.'''
    b = stack.pop()
    a = stack.pop()
    stack.append(a * b)


def handle_div_g(*args):
    '''Handles the 0x17 instruction.'''
    handle_div_f(*args)


def handle_div_f(reader, stack, env, constants):
    '''Handles the 0x18 instruction.'''
    b = stack.pop()
    a = stack.pop()
    stack.append(a / b)


def handle_mod_g(*args):
    '''Handles the 0x19 instruction.'''
    handle_mod_f(*args)


def handle_mod_f(reader, stack, env, constants):
    '''Handles the 0x1A instruction.'''
    b = stack.pop()
    a = stack.pop()
    stack.append(a % b)


def handle_call_p(reader, stack, env, constants):
    '''Handles the 0x42 instruction.'''
    f_id = read_u8(reader)
    n_args = read_u8(reader)

    args = stack[-n_args:]
    for _ in range(n_args):
        stack.pop()

    r = call_primitive_function(f_id, *args)
    stack.append(r)


def handle_ret_g(reader, stack, env, constants):
    '''Handles the 0x46 instruction.'''
    # TODO: Investigate correctness
    stack.pop()
