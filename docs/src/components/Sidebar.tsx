import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import { usePyodide } from "../utils/python";
import Toolbar from "./Toolbar";

type Props = {
  handleClickRun: () => void;
  handleClickCompile: () => void;
  output?: string;
};

const Sidebar: FunctionComponent<Props> = ({
  handleClickRun,
  handleClickCompile,
  output = "",
}) => {
  const pyodide = usePyodide();
  const [pyOutput, setPyOutput] = useState<string | null>(null);

  return (
    <div>
      <Toolbar
        handleClickRun={handleClickRun}
        handleClickCompile={handleClickCompile}
      />
      <div className="block">
        <p>
          <b>Step 1:</b> Compile to SVML using js-slang
        </p>
      </div>
      <div className="block">
        <pre>
          {output ? (
            <code>{output}</code>
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
