import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

import { UnControlled as CodeMirror } from "react-codemirror2";
require("codemirror/mode/xml/xml");
require("codemirror/mode/javascript/javascript");

export const CodeBlock = ({ code, language, options = {}, ...props }) => {
  return (
    <div style={{ fontSize: 18, ...style }}>
      <CodeMirror
        value={code}
        options={{
          mode: "json",
          lineNumbers: false,
          readOnly: "nocursor",
          ...options
        }}
        {...props}
      />
    </div>
  );
};
