1. tsconfig.json -> config file for TS
2. "compilerOptions": {
    "target" : "es5"
    "outDir" : "dist"
    "strictNullChecks" : true
}
- tells target for compiler
- outDir tells path for storing the compiled files
- strictNullChecks checks for any null pointer exception
3. "include" : ["**/*.ts"]
- ** denotes any subfolder
- * denotes any file name
4. "target": "es6"
- This is the version of ECMAScript you would like to compile your code to.
- Common values: ES5, ES6/ES2015, ES2016, ES2017, ES2018, ES2019, ES2020, ESNext
5. "lib": ["dom", "dom.iterable", "esnext"]
- This is the list of library files you would like to include during the compilation. Basically, the library files tell the compiler which features we can use in our TypeScript code. For example, there is a library file called "DOM". This file tells the compiler how the DOM API looks. So when we use the DOM API in our TS code (e.g., document.querySelector("a")), compiler knows how to check it.
6. "strict": true
- Enables all strict type checking options, like noImplicitAny, noImplicitThis, alwaysStrict, strictBindCallApply, strictNullChecks, strictFunctionTypes, strictPropertyInitialization. I suggest to enable this option in order to improve the type safety of your code.
7. "esModuleInterop": true
This option allows us to import default from commonjs modules which don’t have a default export (modules which didn’t export the "default" property), like React, as if they have it.
- For example, in TypeScript, before, we used to import React like this:
        import * as React from 'react'
    Having this option enabled, we can import React like this:
        import React from 'react'
8. "jsx": "preserve"
- We use this option to tell the compiler how to transform the JSX code. "preserve" leaves JSX as is in the compiled files, while the "react" option turns JSX into the React API calls (e.g., React.createElement('div')).
Usually, we use preserve in order to leave the JSX transformation to a different tool in our build chain (e.g., Babel).
9. "skipLibCheck": true
- This option tells the compiler whether to type check the declaration(*.d.ts) files (yours and the ones from the third party packages) in your project.
- The idea behind this option is to reduce the compile time of a project, by skipping the type checking of the declarations which are already tested by their authors and are known to work correctly.
- Also, it might happen that you use a few packages whose type definitions are incompatible. Or, you’re importing a package that was built using a tsconfig which is less strict than yours (e.g., your config has the "strict" option enabled, while the other config has it disabled). In these cases the compiler will produce errors while type checking those packages.
- With this option enabled the compiler won’t go deep into checking the types of the third party packages, but it will still check our code against the type definitions provided by these packages.
10. "include": ["src/**/*"]
- We use this option to list the files we’d like to be compiled. While the "files" option requires relative or absolute paths to the files, the "include" option allows glob-like patterns, like:
    "**" - any subdirectory
    "*" - any file name
    "?" - a character followed by the question mark becomes optional (e.g., "src/*.tsx?")
11. "exclude": ["node_modules", "**/*/*.test.ts"]
- This option excludes the files from the compilation. It accepts the same patterns as the "include" option. You can use this option to filter the files specified using the "include" option. The "exclude" option doesn’t affect the "files" option.
- Usually, you’d like to exclude node_modules, test files, and the compilation output directory.
- If you omit this option, the compiler will exclude the folder specified using the "outDir" option.
- If you won’t specify both options, "files" and "include", the compiler will compile all the TS files from the root directory and any subdirectory excluding the files specified using the "exclude" option.
12. "module": "commonjs"
- This option sets the module system that will be used in the compiled (.JS) files. You should choose the module system that is supported by the environment where your code will run. For example, Node.js uses CommonJS.
13. TS Types ->
    Primitives ->
    - Boolean
        - let b : boolean = false
    - Number
        - let num : number = 1
    - String
        - const hello : string = "Hello"
    - Null
        - let n : null = null
    - Undefined
        - let u : undefined = undefined
    Non-Primitives ->
    - Object
        - const myObj : object = {}
    - Void
        - function log(message: string): void {
            console.log(message)
        }
    - Array
        - let arr1 : string[] = ['a', 'b']
        - let arr2 : Array<string> = arr1
    - Tuple
        - let tuple : [string, number] = ['str', 1]
    - Enum
        - enum Color {
            Red = 2,
            Green = 5,
            Blue = 7
        }
        let myColor : Color = Color.Blue
        console.log(Color.Blue) // 7
        console.log(Color[7]) // Blue
    - Any
        - let ANY: any
        ANY = 'a string'
        ANY = 1
        ANY = true
    - Type Assertions
        - const email = document.getEmentById('email')
          if(email) {
              email.addEventListener('change', e => {
                  const input = <HTMLInputElement>e.currentElement;
                  console.log(input.value);
              });
          }
14. Interfaces
    - interface A {
        somePrep : number;
    }