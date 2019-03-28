// @['optional-chaining']
import optionalChaining from "AnyNameThatEndsIn.macro";

const obj = {
  foo: {
    bar: {
      baz: 42
    }
  }
};

optionalChaining("Ted");

const foo = obj.foo.bar;

const baz = obj?.foo?.bar?.baz; // 42

// `createMacro` is simply a function that ensures your macro is only
// called in the context of a babel transpilation and will throw an
// error with a helpful message if someone does not have babel-plugin-macros
// configured correctly
module.exports = createMacro(optionalChaining);

function optionalChaining({ references, state, babel }) {
  // `state` is the second argument you're passed to a visitor in a
  // normal babel plugin. `babel` is the `@babel/core` module.
  // do whatever you like to the AST paths you find in `references`.
  // open up the console to see what's logged and start playing around!
  const defaultProgramBody = state.file.ast.program.body;
  console.log(defaultProgramBody);
  // Is there an @[] at the top of the file
  const macroLanguageExtentionList = [];
  const firstLineComment = state.file.ast.comments[0];
  const isDeclaredMacroLE =
    firstLineComment.value.trim().startsWith("@") &&
    firstLineComment.start === 0 &&
    firstLineComment.type === "CommentLine"
      ? true
      : false;
  if (isDeclaredMacroLE) {
    firstLineComment.value.replace(/\[(.+?)\]/g, function($0, macro) {
      macroLanguageExtentionList.push(macro.replace(/['"]+/g, ""));
    });
    //Look up declared Macro Here
    defaultProgramBody.forEach(node => {
      if (node.type === "VariableDeclaration") {
        console.log(node);
      }
    });
  } else {
    console.log("No declared macro Language Extension");
  }
  // references.default refers to the default import (`optionalChaining` above)
  // references.JSXMacro refers to the named import of `JSXMacro`
  const { default: defaultImport = [] } = references;
  defaultImport.forEach(referencePath => {
    console.log(referencePath);
    if (referencePath.parentPath.type === "TaggedTemplateExpression") {
      console.log(
        "template literal contents",
        referencePath.parentPath.get("quasi")
      );
    } else if (referencePath.parentPath.type === "CallExpression") {
      if (referencePath === referencePath.parentPath.get("callee")) {
        console.log(
          "function call arguments (as callee)",
          referencePath.parentPath.get("arguments")
        );
      } else if (
        referencePath.parentPath.get("arguments").includes(referencePath)
      ) {
        console.log(
          "function call arguments (as argument)",
          referencePath.parentPath.get("arguments")
        );
      }
    } else {
      // throw a helpful error message or something :)
    }
  });
}
