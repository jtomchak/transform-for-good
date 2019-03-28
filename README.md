# Transform for Good - Babel Plugin Macros

## Macros

- bit of history
  > Macros can be used to make tasks less repetitive by representing a complicated sequence of keystrokes, mouse movements, commands, or other types of input. In computer programming, macros are a tool that allows a developer to re-use code.
- best explianation I have found so far
  > Fundamentally, macros are a way of writing code that writes other code, which is known as metaprogramming.
  > [rust docs](https://doc.rust-lang.org/1.30.0/book/second-edition/appendix-04-macros.html?highlight=macros#the-future-of-macros)
- macro is going to happen at compile time, where a function is going to happen at run time.
- code that writes code. 🤔 This is less readable, understandable, and maintainable than general functions.

### Two types of macros

1. Declarative w/ general metaprogramming
   - Matching on patterns and replacing code
1. Procedural more like functions
   - given input -> producing output (pure)

- Problem babel macros sets to solve [solution](https://babeljs.io/blog/2017/09/11/zero-config-with-babel-macros)

  - They can lead to _confusion_ because when looking at code in a project, you might not know that there's a plugin transforming that code.
  - They have to be _globally configured_ or configured out-of-band (in a .babelrc or webpack config).
  - They can _conflict_ in very confusing ways due to the fact that all babel plugins run simultaneously (on a single walk of Babel's AST).

- Solution

  - transformations with:
    - zero config
    - importability

> Explicit is often a better pattern than implicit because it requires others to understand how things are globally configured. In this spirit are babel-plugin-macros designed. However, some things do need to be implicit, and those kinds of babel plugins can't be turned into macros.

- the idea of syntactic macro it's well suited for babel-plugin-macros

### What would it take to enable JS Macros to open stage proposals to actual implementations?

[TC-39 Proposals](https://github.com/tc39/proposals#stage-1)

### Possible JavaScript Language Extensions?

An extension language is a programming language interpreter offered by an application program, so that users can write macros or even full-fledged programs to extend the original application. Extension languages have a C interface (it is usually C, but it could be any other compiled language), and can be given access to the C data structures. Likewise, there are C routines to access the extension language data structures.
~ [GNU Language extensions](https://www.gnu.org/software/guile/docs/master/guile-tut.html/What-are-scripting-and-extension-languages.html)

This supports my idea of JavaScript at a Base level language, like C.
Most C compilers have one or more "extensions" to the standard C language, to do things that are inconvenient to do in standard, portable C.

Some examples of language extensions:

- in-line assembly language
- interrupt service routines
- variable-length data structure (a structure whose last item is a "zero-length array").[1]
- re-sizeable multidimensional arrays
- various "#pragma" settings to compile quickly, to generate fast code, or to generate compact code.
- bit manipulation, especially bit-rotations and things involving the "carry" bit
- storage alignment
- Arrays whose length is computed at run time.
  [Language Overloading](https://en.wikibooks.org/wiki/C_Programming/Language_overloading_and_extensions)

  So optional chaining exists as a babel plugin
  [babel merge request](https://github.com/babel/babel/pull/5813/files)

# Not all roses.

- The compiler has no way of checking that a macro is semantically closed, i.e. that it represents a “unit of meaning” like a function does. (Consider #define TWO 1+1 — what does TWO\*TWO equal? 3.)

- Macros are not typed like functions are. The compiler cannot check that the parameters and return type make sense. It can only check the expanded expression that uses the macro.

- If the code doesn’t compile, the compiler has no way of knowing whether the error is in the macro itself or the place where the macro is used. The compiler will either report the wrong place half of the time, or it has to report both even though one of them is probably fine. (Consider #define min(x,y) (((x)<(y))?(x):(y)): What should the compiler do if the types of x and y don’t match or don’t implement operator<?)

- Automated tools cannot work with them in semantically useful ways. In particular, you can’t have things like IntelliSense for macros that work like functions but expand to an expression. (Again, the min example.)

- The side-effects of a macro are not as explicit as they are with functions, causing potential confusion for the programmer. (Consider again the min example: in a function call, you know that the expression for x is evaluated only once, but here you can’t know without looking at the macro.)

## Building the Macro [docs](https://github.com/kentcdodds/babel-plugin-macros/blob/master/other/docs/author.md)

There are two parts to the babel-plugin-macros API:

- The filename convention
- The function you export

..adding the badge
[![Babel Macro](https://img.shields.io/badge/babel--macro-%F0%9F%8E%A3-f5da55.svg?style=flat-square)](https://github.com/kentcdodds/babel-plugin-macros)

- taking the plugin of optional chaining from plugin to macro
  [babel-macro](https://www.npmjs.com/package/@babel/plugin-proposal-optional-chaining)
