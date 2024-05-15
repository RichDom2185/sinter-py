import { PyodideInterface } from "pyodide";

import instructions_handlers from "./interpreter-src/instructions/handlers.py?raw";
import instructions_instructions from "./interpreter-src/instructions/instructions.py?raw";
import instructions_primitives from "./interpreter-src/instructions/primitives.py?raw";

import interpreter from "./interpreter-src/interpreter.py?raw";
import utils from "./interpreter-src/utils.py?raw";

import entrypoint from "./sinter-py.py?raw";

export const setupInterpreter = (pyodide: PyodideInterface) => {
  // TODO: Add type annotation
  const fs = pyodide.FS;

  fs.mkdir("instructions");
  fs.writeFile("instructions/handlers.py", instructions_handlers);
  fs.writeFile("instructions/instructions.py", instructions_instructions);
  fs.writeFile("instructions/primitives.py", instructions_primitives);
  fs.writeFile("interpreter.py", interpreter);
  fs.writeFile("utils.py", utils);
  fs.writeFile("main.py", entrypoint);

  pyodide.pyimport("interpreter");
  pyodide.pyimport("utils");
};
