import { FunctionComponent } from "preact";
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
      <pre>
        <i>Coming soon!</i>
      </pre>
    </div>
  );
};

export default Sidebar;
