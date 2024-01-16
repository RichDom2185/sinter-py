from instructions.handlers import *

# Must match the order of the instructions in the wiki
# https://github.com/source-academy/js-slang/wiki/SVML-Instruction-Set#machine-parseable-instruction-set
INSTRUCTIONS = [
    'nop',
    'ldc.i',
    'lgc.i',
    'ldc.f32',
    'lgc.f32',
    'ldc.f64',
    'lgc.f64',
    'ldc.b.0',
    'ldc.b.1',
    'lgc.b.0',
    'lgc.b.1',
    'lgc.u',
    'lgc.n',
    'lgc.s',
    'pop.g',
    'pop.b',
    'pop.f',
    'add.g',
    'add.f',
    'sub.g',
    'sub.f',
    'mul.g',
    'mul.f',
    'div.g',
    'div.f',
    'mod.g',
    'mod.f',
    'not.g',
    'not.b',
    'lt.g',
    'lt.f',
    'gt.g',
    'gt.f',
    'le.g',
    'le.f',
    'ge.g',
    'ge.f',
    'eq.g',
    'eq.f',
    'eq.b',
    'new.c',
    'new.a',
    'ldl.g',
    'ldl.f',
    'ldl.b',
    'stl.g',
    'stl.b',
    'stl.f',
    'ldp.g',
    'ldp.f',
    'ldp.b',
    'stp.g',
    'stp.b',
    'stp.f',
    'lda.g',
    'lda.b',
    'lda.f',
    'sta.g',
    'sta.b',
    'sta.f',
    'br.t',
    'br.f',
    'br',
    'jmp',
    'call',
    'call.t',
    'call.p',
    'call.t.p',
    'call.v',
    'call.t.v',
    'ret.g',
    'ret.f',
    'ret.b',
    'ret.u',
    'ret.n',
    'dup',
    'newenv',
    'popenv',
    'new.c.p',
    'new.c.v',
    'neg.g',
    'neg.f',
    'neq.g',
    'neq.f',
    'neq.b',
]


def _handle_notimplemented(reader, stack, env, constants):
    raise NotImplementedError()


# TODO: Implement the rest of the instructions
INSTRUCTIONS_HANDLERS = {
    'nop': handle_noop,
    'ldc.i': handle_ldc_i,
    'lgc.i': handle_lgc_i,
    'ldc.f32': handle_ldc_f32,
    'lgc.f32': handle_lgc_f32,
    'ldc.f64': handle_ldc_f64,
    'lgc.f64': handle_lgc_f64,
    'lgc.s': handle_lgc_s,
    'add.g': handle_add_g,
    'add.f': handle_add_f,
    'sub.g': handle_sub_g,
    'sub.f': handle_sub_f,
    'mul.g': handle_mul_g,
    'mul.f': handle_mul_f,
    'div.g': handle_div_g,
    'div.f': handle_div_f,
    'mod.g': handle_mod_g,
    'mod.f': handle_mod_f,
    'call.p': handle_call_p,
    'ret.g': handle_ret_g,
}


def get_and_execute(opcode, reader, stack, env, constants):
    ins_name = INSTRUCTIONS[opcode]
    handler = INSTRUCTIONS_HANDLERS.get(ins_name, _handle_notimplemented)
    handler(reader, stack, env, constants)
