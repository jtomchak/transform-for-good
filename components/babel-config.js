import React from "react";
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
    <div style={{ fontSize: 16 }}>
      <h1>Babel Config ♥</h1>
      <CodeBlock language="json" code={babelConfig} />
    </div>
  );
};
