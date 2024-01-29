import { compile, createContext } from "js-slang";
import { Chapter } from "js-slang/dist/types";
import { stringifyProgram } from "js-slang/dist/vm/util";
import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";

const App: FunctionComponent = () => {
  const [code, setCode] = useState("");
  const [asmOutput, setAsmOutput] = useState("");

  const handleCompile = () => {
    const asmOutput = stringifyProgram(
      compile(code, createContext(Chapter.SOURCE_3))
    );
    setAsmOutput(asmOutput.trim());
  };

  return (
    <div className="container">
      <section class="hero">
        <div class="hero-body">
          <p class="title">sinter-py Demo</p>
          <p class="subtitle">js-slang &rarr; SVML &rarr; Python</p>
        </div>
      </section>
      <div className="columns">
        <div className="column">
          <Editor value={code} onChange={setCode} />
        </div>
        <div className="column">
          <Sidebar
            output={asmOutput}
            handleClickRun={handleCompile}
            handleClickCompile={handleCompile}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
