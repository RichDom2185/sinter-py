import math
from random import random

# Must match the order of the functions in the wiki
# https://github.com/source-academy/js-slang/wiki/SVML-Instruction-Set#primitive-functions
PRIMITIVE_FUNCTIONS = [
    'accumulate',  # Source 2
    'append',  # Source 2
    'array_length',  # Source 3
    'build_list',  # Source 2
    'build_stream',  # Source 3
    'display',  # Source 1
    'draw_data',  # Source 2
    'enum_list',  # Source 2
    'enum_stream',  # Source 3
    'equal',  # Source 2
    'error',  # Source 1
    'eval_stream',  # Source 3
    'filter',  # Source 2
    'for_each',  # Source 2
    'head',  # Source 2
    'integers_from',  # Source 3
    'is_array',  # Source 3
    'is_boolean',  # Source 1
    'is_function',  # Source 1
    'is_list',  # Source 2
    'is_null',  # Source 2
    'is_number',  # Source 1
    'is_pair',  # Source 2
    'is_stream',  # Source 3
    'is_string',  # Source 1
    'is_undefined',  # Source 1
    'length',  # Source 2
    'list',  # Source 2
    'list_ref',  # Source 2
    'list_to_stream',  # Source 3
    'list_to_string',  # Source 2
    'map',  # Source 2
    'math_abs',  # Source 1
    'math_acos',  # Source 1
    'math_acosh',  # Source 1
    'math_asin',  # Source 1
    'math_asinh',  # Source 1
    'math_atan',  # Source 1
    'math_atan2',  # Source 1
    'math_atanh',  # Source 1
    'math_cbrt',  # Source 1
    'math_ceil',  # Source 1
    'math_clz32',  # Source 1
    'math_cos',  # Source 1
    'math_cosh',  # Source 1
    'math_exp',  # Source 1
    'math_expm1',  # Source 1
    'math_floor',  # Source 1
    'math_fround',  # Source 1
    'math_hypot',  # Source 1
    'math_imul',  # Source 1
    'math_log',  # Source 1
    'math_log1p',  # Source 1
    'math_log2',  # Source 1
    'math_log10',  # Source 1
    'math_max',  # Source 1
    'math_min',  # Source 1
    'math_pow',  # Source 1
    'math_random',  # Source 1
    'math_round',  # Source 1
    'math_sign',  # Source 1
    'math_sin',  # Source 1
    'math_sinh',  # Source 1
    'math_sqrt',  # Source 1
    'math_tan',  # Source 1
    'math_tanh',  # Source 1
    'math_trunc',  # Source 1
    'member',  # Source 2
    'pair',  # Source 2
    'parse_int',  # Source 1
    'remove',  # Source 2
    'remove_all',  # Source 2
    'reverse',  # Source 2
    'runtime',
    'set_head',  # Source 3
    'set_tail',  # Source 3
    'stream',  # Source 3
    'stream_append',  # Source 3
    'stream_filter',  # Source 3
    'stream_for_each',  # Source 3
    'stream_length',  # Source 3
    'stream_map',  # Source 3
    'stream_member',  # Source 3
    'stream_ref',  # Source 3
    'stream_remove',  # Source 3
    'stream_remove_all',  # Source 3
    'stream_reverse',  # Source 3
    'stream_tail',  # Source 3
    'stream_to_list',  # Source 3
    'tail',  # Source 2
    'stringify',  # Source 1
    'prompt',  # Source 1
]


def _handle_notimplemented(*args):
    raise NotImplementedError()


IMPLEMENTED_FUNCTIONS = {
    # TODO: Wrap with a lambda to ensure only correct arity
    'display': print,
    'is_array': lambda x: type(x) is list,
    'is_boolean': lambda x: type(x) is bool,
    'is_function': _handle_notimplemented,
    'is_list': _handle_notimplemented,
    'is_null': lambda x: x is None,
    'is_number': lambda x: type(x) is int or type(x) is float,
    'is_pair': lambda x: type(x) is list and len(x) == 2,
    'is_stream': _handle_notimplemented,
    'is_string': lambda x: type(x) is str,
    'is_undefined': _handle_notimplemented,
    'math_abs': abs,
    'math_acos': math.acos,
    'math_acosh': math.acosh,
    'math_asin': math.asin,
    'math_asinh': math.asinh,
    'math_atan': math.atan,
    'math_atan2': math.atan2,
    'math_atanh': math.atanh,
    'math_cbrt': lambda x: x ** (1 / 3),
    'math_ceil': math.ceil,
    'math_clz32': lambda x: 32 - int(x).bit_length() if x >= 0 else 0,
    'math_cos': math.cos,
    'math_cosh': math.cosh,
    'math_exp': math.exp,
    'math_expm1': math.expm1,
    'math_floor': math.floor,
    'math_fround': _handle_notimplemented,
    'math_hypot': math.hypot,
    'math_imul': _handle_notimplemented,
    # We wrap with a lambda to ensure only correct arity
    'math_log': lambda x: math.log(x),
    'math_log1p': math.log1p,
    'math_log2': math.log2,
    'math_log10': math.log10,
    'math_max': max,
    'math_min': min,
    'math_pow': math.pow,
    'math_random': random,
    'math_round': _handle_notimplemented,
    'math_sign': lambda x: 1 if x > 0 else -1 if x < 0 else 0,
    'math_sin': math.sin,
    'math_sinh': math.sinh,
    'math_sqrt': math.sqrt,
    'math_tan': math.tan,
    'math_tanh': math.tanh,
    'math_trunc': math.trunc,
}


def call_primitive_function(id: int, *args):
    func_name = PRIMITIVE_FUNCTIONS[id]
    f = IMPLEMENTED_FUNCTIONS.get(func_name, _handle_notimplemented)
    return f(*args)
