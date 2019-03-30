import React from "react";

import { UnControlled as CodeMirror } from "react-codemirror2";
require("codemirror/mode/xml/xml");
require("codemirror/mode/javascript/javascript");

export const CodeBlock = ({
  code,
  language,
  style = {},
  options = {},
  ...props
}) => {
  return (
    <div style={{ fontSize: 18, ...style }}>
      <CodeMirror
        value={code}
        options={{
          mode: "c",
          lineNumbers: false,
          readOnly: "nocursor",
          ...options
        }}
        {...props}
      />
    </div>
  );
};
