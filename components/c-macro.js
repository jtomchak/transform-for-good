import React from "react";
import { CodeSurfer } from "mdx-deck-code-surfer";

const cMacro = `
#include <stdio.h>
#define PrintExpr(x) (printf("%s = %d", #x, (x)))

int main(int argc, char **argv)
{
    PrintExpr(2+2);
    return 0;
}

/* Output 😱 2 + 2 = 4 */
`;

export default () => {
  return (
    <CodeSurfer
      title="C Macro Syntax"
      code={cMacro}
      lang="c"
      showNumbers={false}
      dark={false}
      steps={[
        { notes: "" },
        { range: [1, 3], notes: "import & function declaration" }
      ]}
    />
  );
};
