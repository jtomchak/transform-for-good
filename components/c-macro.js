import { CodeBlock } from "./code-block";

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

export const CMacro = () => {
  return (
    <div>
      <CodeBlock language="c" code={cMacro} />
    </div>
  );
};
