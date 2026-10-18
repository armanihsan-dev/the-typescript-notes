# The Ultimate TypeScript Course

> A structured set of notes for learning TypeScript from the language fundamentals to advanced type-system concepts and real-world application development.

**24 sections · Beginner to advanced · Learn at your own pace**

The course starts with the basics and builds toward practical TypeScript in the browser, React, and Node.js. Along the way, it explores the type system in depth—including generics, type-level programming, runtime validation, and compiler behavior.

## Course progress

| Sections | Status | Topics |
| --- | --- | --- |
| [01–08](#course-outline) | Notes available | Fundamentals through type-level programming |
| [09–24](#course-outline) | Course roadmap | Utility types through compiler internals |

> **Note:** The repository currently contains notes for Sections 1–8. Sections 9–24 below document the planned course content; their notes have not been added yet.

## How to use these notes

1. Start with Section 1 and work through the sections in order; later topics build on earlier ones.
2. Open a section folder to read its HTML lessons. Some sections also include a `RoadMap.html` file.
3. Experiment with the examples in your own TypeScript project, and revisit difficult ideas as needed.

## Course outline

<details open>
<summary><strong>01 · Introduction to TypeScript</strong> — Meet the language and get ready to learn</summary>

**Notes:** [Open Section 1](./00_introcuction%20to%20typeScript/)

- Welcome to the course
- How to follow this course
- How to remember what you learn
- Prerequisites for learning TypeScript
- What TypeScript is and how it works
- History of TypeScript
</details>

<details open>
<summary><strong>02 · TypeScript Fundamentals and Compiler Configuration</strong> — Types, compilation, and project setup</summary>

**Notes:** [Open Section 2](./01_Ts%20fundementals%20and%20compiler%20configuration/)

- What types are
- Compiling TypeScript to JavaScript
- Configuring the TypeScript compiler and strict mode
- Debugging TypeScript applications
- Including and excluding files
- Initializing a project with `tsc --init`
- Statically vs. dynamically typed languages
- Strongly vs. weakly typed languages
- Top and bottom types in TypeScript
</details>

<details open>
<summary><strong>03 · Arrays and Tuples</strong> — Typed collections and fixed-shape sequences</summary>

**Notes:** [Open Section 3](./02_Arrays%20and%20Tuples/)

- Array typing and array methods
- Tuples
- Readonly arrays and tuples
</details>

<details open>
<summary><strong>04 · Type Aliases, Literal Types, and Type Assertions</strong> — Describing precise values and shapes</summary>

**Notes:** [Open Section 4](./03_Type%20Aliases,%20Literal%20Types,%20and%20Type%20Assertions/)

- Type aliases and literal types
- Template literal types
- Type assertions and non-null assertions
- Definite assignment assertions
</details>

<details open>
<summary><strong>05 · Objects and Function Types</strong> — Modeling data and callable behavior</summary>

**Notes:** [Open Section 5](./04_Objects%20and%20funtions%20types/)

- Object literal types and interfaces
- Types vs. interfaces, including benchmarking
- Module detection and declaration merging
- Object types from JavaScript
- Function types, reusable function types, and methods
- Optional and rest parameters
- Structural vs. nominal typing
</details>

<details open>
<summary><strong>06 · Sets, Unions, and Intersections</strong> — Understanding composition through set theory</summary>

**Notes:** [Open Section 6](./05_Sets,%20Unions%20and%20Intersections/)

- Set theory fundamentals
- Unions and intersections in set theory
- Value-based and property-based sets
- Unions and intersections of property-based sets
- Types as sets of JavaScript values
- Object and array unions and intersections
- Conflicting property types and the research behind the set model
- Installing TypeScript 7.0
</details>

<details open>
<summary><strong>07 · Mastering Generics</strong> — Reusable, type-safe abstractions</summary>

**Notes:** [Open Section 7](./06_Generics/)

- Generic interfaces and functions
- Different ways to create generic functions
- Multiple type parameters and practical use cases
- Default type parameters and constraints
- Generic methods and nested or recursive generics
- Built-in generics and `Promise<T>`
- Function overloading
- The `const` modifier in type parameters
</details>

<details open>
<summary><strong>08 · Type-Level Programming</strong> — Computing with types</summary>

**Notes:** [Open Section 8](./07_Type%20Level%20Programming/)

- The fundamentals of type-level programming
- Type-level `typeof`, `keyof`, and indexed access
- Vacuous truth and index signatures
- Mapped types, key remapping, and property modifiers
- Conditional types, possible outcomes, and distribution
- Nested conditionals and key removal
- `infer`, tuple pattern matching, and type-level recursion
- Type-level arithmetic and branded types
- Real-world use cases

</details>

<details>
<summary><strong>09 · Utility Types</strong> — Transforming and reusing types</summary>

- Union utilities: `Exclude`, `Extract`, and `NonNullable`
- Property modifiers: `Partial`, `Required`, and `Readonly`
- Property selection: `Pick` and `Omit`
- Object mapping: `Record`
- Function utilities: `Parameters` and `ReturnType`
- String manipulation utilities
- Promise utility: `Awaited`
- Inference control with `NoInfer`
- Combining utilities and creating custom utility types
- Third-party utility libraries, Type Challenges, and practice resources
</details>

<details>
<summary><strong>10 · Type Narrowing and Control Flow Analysis</strong> — Making broad types precise</summary>

- Control flow analysis, type widening, and narrowing
- `typeof`, `instanceof`, `in`, equality, and truthiness narrowing
- Assignment-based and discriminated union narrowing
- Predicates, user-defined type guards, and assertion functions
- Exhaustiveness checking
- Narrowing in generic functions and across function boundaries
- Aliased conditions and discriminants
- The `satisfies` operator
</details>

<details>
<summary><strong>11 · Understanding Modules</strong> — Organizing and resolving code</summary>

- Why modules matter; ES modules vs. CommonJS
- Importing, exporting, re-exporting, and choosing export styles
- Type-only imports and exports
- Module resolution, file extensions, and compiler options
- Package entry points, `exports`, and `imports`
- Import attributes and the `with` keyword
- Importing JavaScript into TypeScript
- How Node.js resolves modules
- Bare, relative, and absolute imports
- Debugging module resolution
</details>

<details>
<summary><strong>12 · Ambient Declarations and Declaration Files</strong> — Describing code beyond the type checker</summary>

- Ambient declarations and the `declare` keyword
- Declaring globals, functions, objects, and modules
- Global vs. module scope and wildcard module declarations
- What `.d.ts` files are and why TypeScript needs them
- How TypeScript finds types, including built-in library files
- Writing declarations for JavaScript libraries
- `@types`, DefinitelyTyped, and `@` directives
- Module and global augmentation
- Extending existing types safely and avoiding common mistakes
</details>

<details>
<summary><strong>13 · Runtime Type Safety with Zod</strong> — Validating data at runtime</summary>

- Why runtime validation matters, especially for JSON and API responses
- Creating schemas and validating with `parse`
- Object, array, nested, optional, nullable, default, union, and literal schemas
- Regular expressions, custom validation, and transformations
- Understanding errors and inferring types from schemas
- Schema composition and reusable validation
- Type-safe data fetching and reusable API clients
- Validating API requests and forms
- Alternatives including Valibot and ArkType
</details>

<details>
<summary><strong>14 · Building a Type-Safe Schema Validation Library</strong> — Learn validation by building it</summary>

- Designing a schema validation library
- String, number, boolean, object, and array validators
- A shared validator interface and `parse`
- Optional fields, custom rules, and method chaining
- Inferring static types and building an `Infer` utility
- Nested validators, useful errors, and a complete user schema
- Testing the library, understanding its limitations, and how production libraries work
</details>

<details>
<summary><strong>15 · TypeScript and the DOM</strong> — Safe browser programming</summary>

- DOM types and `lib.dom.d.ts`
- Safely using `document` and `window`
- Querying elements and handling `null`
- Narrowing and asserting specific element types
- Generic DOM APIs and common HTML element types
- Events, event targets, and typed event handlers
- Forms, inputs, `NodeList`, and `HTMLCollection`
- Type-safe DOM manipulation
</details>

<details>
<summary><strong>16 · TypeScript in React</strong> — Building type-safe user interfaces</summary>

- JSX, TSX, React type definitions, and function components
- Props, children, defaults, readonly props, and callback functions
- React events and typed state
- Modeling UI states and typing reducers
- Refs, effects, memoization, and custom hooks
- Context, forms, and runtime validation with Zod
- CSS, native HTML props, and reusable generic components
- Render props, compound and polymorphic components, and routing
- Common mistakes and refactoring unsafe components
</details>

<details>
<summary><strong>17 · TypeScript in Node.js</strong> — Safe, maintainable backend applications</summary>

- Node.js types, environment variables, and runtime boundaries
- Async code and Express requests, responses, handlers, and middleware
- Extending request types and modeling authentication and authorization
- Runtime validation with Zod and type-safe API contracts
- Mongoose, Prisma, and separating database, domain, and API types
- Error handling, external APIs, webhooks, files, and background jobs
- Advanced patterns and sharing types across the stack
- tRPC and common backend mistakes
</details>

<details>
<summary><strong>18 · Production-Grade TypeScript Setup</strong> — Reliable project configuration and workflows</summary>

- Modern TypeScript workflows: `tsc`, `ts-node`, `tsx`, and Node.js
- Development vs. production workflows and reusable `tsconfig` files
- Strict mode and safer indexed access, optional properties, and overrides
- Path aliases, runtime trade-offs, and alternatives
- ESLint, Prettier, VS Code, and CI/CD type checking
- Building a production-ready project
</details>

<details>
<summary><strong>19 · Understanding TypeScript Runtime Features</strong> — What the compiler erases and emits</summary>

- Runtime vs. compile-time features and `erasableSyntaxOnly`
- TypeScript code generation and what remains after compilation
- Enums: numeric, string, reverse mapping, and `const`
- Enums vs. union types and objects
- Namespaces, augmentation, modules, and runtime impact
- Node.js native TypeScript support
</details>

<details>
<summary><strong>20 · Object-Oriented Programming in TypeScript</strong> — Classes, contracts, and composition</summary>

- Interfaces, inheritance, and reuse
- Interfaces vs. type aliases
- Classes, initialization, and access modifiers
- Readonly and optional properties
- Inheritance, abstract classes, and implementing interfaces
- Composition vs. inheritance
- Parameter properties and their runtime behavior
</details>

<details>
<summary><strong>21 · Understanding Decorators</strong> — Metadata and behavior around declarations</summary>

- What decorators are and their execution model
- Class, method, property, accessor, and parameter decorators
- Reusable decorator factories
- Reflect Metadata and custom metadata
- Building validation with decorators
- Decorators in Angular, NestJS, and TypeORM
- Legacy decorators vs. standard ECMAScript decorators
</details>

<details>
<summary><strong>22 · Using JSDoc with TypeScript</strong> — Typed JavaScript and documentation</summary>

- JSDoc and type hints in JavaScript
- Configuring `checkJs` and `allowJs`
- `@param`, `@returns`, `@typedef`, and `@callback`
- Generics in JSDoc
- Mixing JavaScript and TypeScript in one project
- Generating documentation and migrating to TypeScript
</details>

<details>
<summary><strong>23 · Advanced TypeScript Concepts</strong> — Soundness and variance</summary>

- Why TypeScript is not fully sound
- Soundness and unsoundness
- Covariance, contravariance, and invariance
- Variance in function parameters, arrays, and collections
</details>

<details>
<summary><strong>24 · Hacking the TypeScript Compiler</strong> — Explore the compiler's internals</summary>

- A hands-on exploration of the TypeScript compiler
</details>

## Learning goals

By the end of the course, you will be able to:

- Read and write TypeScript with confidence, from everyday types to advanced generics.
- Design reusable types and understand how TypeScript evaluates them.
- Validate untrusted data at runtime instead of relying on compile-time types alone.
- Apply TypeScript effectively in browser, React, and Node.js projects.
- Configure projects for safer development and production workflows.

---

**Have fun learning TypeScript!** Work through the notes, try the examples, and use the roadmap to guide what you explore next.