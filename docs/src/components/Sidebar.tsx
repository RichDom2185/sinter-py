import { saveAs } from "file-saver";
import { assemble } from "js-slang";
import { Program } from "js-slang/dist/vm/svml-compiler";
import { stringifyProgram } from "js-slang/dist/vm/util";
import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import interpreter from "../lib/sinter-py.py?raw";
import { usePyodide } from "../utils/python";
import Toolbar from "./Toolbar";

type Props = {
  handleClickCompile: () => Promise<Program>;
};

const Sidebar: FunctionComponent<Props> = ({ handleClickCompile }) => {
  const pyodide = usePyodide({
    redirectStdout: (v) => setPyOutput((prev) => (prev ? `${prev}\n${v}` : v)),
    redirectStderr: (v) => setPyOutput((prev) => (prev ? `${prev}\n${v}` : v)),
  });
  const [asmOutput, setAsmOutput] = useState<string | null>(null);
  const [pyOutput, setPyOutput] = useState<string | null>(null);

  const handleCompile = async () => {
    const asm = await handleClickCompile();
    setAsmOutput(stringifyProgram(asm).trim());
  };

  const handleCompileAndRun = async () => {
    const asm = await handleClickCompile();
    setAsmOutput(stringifyProgram(asm).trim());
    if (!pyodide) {
      return;
    }

    setPyOutput(null);
    pyodide.runPython(interpreter);
  };

  const handleSaveAs = async () => {
    const asm = await handleClickCompile();
    const bin = assemble(asm);
    const blob = new Blob([bin], { type: "application/octet-stream" });
    saveAs(blob, "program.svm");
  };

  return (
    <div>
      <Toolbar
        handleClickRun={handleCompileAndRun}
        handleClickCompile={handleCompile}
        handleClickSaveAs={handleSaveAs}
      />
      <div className="block">
        <p>
          <b>Step 1:</b> Compile to SVML using js-slang
        </p>
      </div>
      <div className="block">
        <pre>
          {asmOutput ? (
            <code>{asmOutput}</code>
          ) : (
            <i>Click "Run" to show SVML representation.</i>
          )}
        </pre>
      </div>
      <div className="block">
        <p>
          <b>Step 2:</b> Interpret compiled SVML in Python using sinter-py
        </p>
      </div>
      <div className="block">
        {pyodide ? (
          <pre>
            {pyOutput !== null ? (
              <code>{pyOutput}</code>
            ) : (
              <i>Click "Run" to show Python output.</i>
            )}
          </pre>
        ) : (
          <pre className="block">
            <span className="bulma-loader-mixin inline-block" />
            <span>&nbsp;&nbsp;Loading Python interpreter&hellip;</span>
          </pre>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
