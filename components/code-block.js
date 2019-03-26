import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

export const CodeBlock = ({ code, language, ...props }) => {
  return (
    <SyntaxHighlighter language={language} style={solarizedlight}>
      {code}
    </SyntaxHighlighter>
  );
};
