import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
export const CodeDemo = ({ code, language, ...props }) => {
  return (
    <SyntaxHighlighter language="c" style={atomDark}>
      {`
#include <stdio.h>
#define PrintExpr(x) (printf("%s = %d", #x, (x)))

int main(int argc, char **argv)
{
    PrintExpr(2+2);
    return 0;
}`}
    </SyntaxHighlighter>
  );
};
