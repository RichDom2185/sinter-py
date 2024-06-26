import { compileFiles, createContext } from "js-slang";
import { Chapter } from "js-slang/dist/types";
import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";

const App: FunctionComponent = () => {
  const [code, setCode] = useState("");

  const handleCompile = () => {
    return compileFiles(
      { "/main.js": code },
      "/main.js",
      createContext(Chapter.SOURCE_3)
    );
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
          <Sidebar handleClickCompile={handleCompile} />
        </div>
      </div>
    </div>
  );
};

export default App;
