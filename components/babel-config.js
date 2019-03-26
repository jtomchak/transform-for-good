import { CodeBlock } from "./code-block";

const babelConfig = `
{
    "presets": ["react", "es2015", "stage-0"],
  
    "plugins": [
      "transform-runtime",
      "add-module-exports",
      "transform-decorators-legacy",
      "transform-react-display-name"
    ],
  
    "env": {
      "development": {
        "plugins": [
          "typecheck",
          ["react-transform", {
              "transforms": [{
                  "transform": "react-transform-catch-errors",
                  "imports": ["react", "redbox-react"]
                }
              ]
          }]
        ]
      }
    }
  }
`;

export const BabelConfig = () => {
  return (
    <div>
      <CodeBlock language="json" code={babelConfig} />
    </div>
  );
};
