import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-twilight";

import { FunctionComponent } from "preact";
import AceEditor from "react-ace";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const Editor: FunctionComponent<Props> = ({ value, onChange }) => {
  return (
    <AceEditor
      className="editor"
      mode="javascript"
      theme="twilight"
      width="100%"
      height="500px"
      value={value}
      onChange={onChange}
      fontSize={15}
    />
  );
};

export default Editor;
