import React from "react";
import { CodeSurfer } from "mdx-deck-code-surfer";

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

export default () => {
  return (
    <CodeSurfer
      title="Babel Config ♥"
      code={babelConfig}
      lang="json"
      showNumbers={false}
      dark={false}
      steps={[
        { notes: "" },
        { lines: [3], notes: "" },
        { lines: [5], notes: "" },
        { lines: [12], notes: "" },
        { lines: [14], notes: "" },
        {}
      ]}
    />
  );
};
