import React from "react";
import Prism from "prismjs;
import "../css/prism.css";
import { UnControlled as CodeMirror } from "react-codemirror2";

export const CodeBlock = ({ children, options = {}, style, ...props }) => (
  <div style={{ fontSize: 18, overflow: "scroll", ...style }}>
    <pre>
        <code>
            {children}
        </code>
    </pre>
  </div>
);
