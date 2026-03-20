import { compileFiles, createContext } from "js-slang";
import { Chapter } from "js-slang/dist/langs";
import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import Builtins from "./components/Builtins";
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";

const App: FunctionComponent = () => {
  const [code, setCode] = useState("");
  const [builtIns, setBuiltIns] = useState<string[]>([]);

  const handleCompile = async () => {
    return (await compileFiles(
      { "/main.js": code },
      "/main.js",
      createContext(Chapter.SOURCE_3),
      builtIns,
    ))!;
  };

  return (
    <div class="container">
      <section class="hero">
        <div class="hero-body">
          <h1 class="title">sinter-py Demo</h1>
          <p class="subtitle">js-slang &rarr; SVML &rarr; Python</p>
        </div>
      </section>
      <div class="columns">
        <div class="column">
          <Editor value={code} onChange={setCode} />
        </div>
        <div class="column">
          <Sidebar handleClickCompile={handleCompile} />
          <Builtins builtIns={builtIns} setBuiltIns={setBuiltIns} />
        </div>
      </div>
    </div>
  );
};

export default App;
