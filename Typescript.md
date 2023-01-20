# Typescript

1. Created to solve shortcomings of Javascript. It is Javascript with type checking.
2. Advantages -
    - Static typing
    - Code completion
    - Refactoring
    - Shorthand notations
    - Cleaner & concise code
3. Drawbacks -
    - Compilation(transpilation)
    - Not good for simple projects
4. Configuring TS compiler -
    - tsconfig.json -> config file for TS
    - "compilerOptions": {
        "target" : "ES2016",               // tells target for compiler
        "outDir" : "dist",              // tells path for storing the compiled files
        "strictNullChecks" : true       // checks for any null pointer exception
    }
    - "include" : ["**/*.ts"]           // ** denotes any subfolder     // * denotes any file name
    - "target": "es6"   // version of ECMAScript you would like to compile your code to.
        // Common values: ES5, ES6/ES2015, ES2016, ES2017, ES2018, ES2019, ES2020, ESNext
    - "lib": ["dom", "dom.iterable", "esnext"]  // list of library files you would like to include during the compilation. Basically,   the library files tell the compiler which features we can use in our TypeScript code. For example, there is a library file called "DOM". This file tells the compiler how the DOM API looks. So when we use the DOM API in our TS code (e.g., document.querySelector("a")), compiler knows how to check it.
    - "strict": true    // Enables all strict type checking options, like noImplicitAny, noImplicitThis, alwaysStrict, strictBindCallApply, strictNullChecks, strictFunctionTypes, strictPropertyInitialization. I suggest to enable this option in order to improve the type safety of your code.
    - "esModuleInterop": true   // allows us to import default from commonjs modules which don’t have a default export (modules which didn’t export the "default" property), like React, as if they have it.
    - Older react import: import * as React from 'react' 
    - Having this option enabled, we can import React like this: import React from 'react'
    - "jsx": "preserve" // this option tells the compiler how to transform the JSX code. "preserve" leaves JSX as is in the compiled files, while the "react" option turns JSX into the React API calls (e.g., React.createElement('div')). Usually, we use preserve in order to leave the JSX transformation to a different tool in our build chain (e.g., Babel).
    - "skipLibCheck": true  // tells compiler whether to type check the declaration(*.d.ts) files (yours and the ones from the third party packages) in your project. The idea behind this option is to reduce the compile time of a project, by skipping the type checking of the declarations which are already tested by their authors and are known to work correctly. Also, it might happen that you use a few packages whose type definitions are incompatible. Or, you’re importing a package that was built using a tsconfig which is less strict than yours (e.g., your config has the "strict" option enabled, while the other config has it disabled). In these cases the compiler will produce errors while type checking those packages. With this option enabled the compiler won’t go deep into checking the types of the third party packages, but it will still check our code against the type definitions provided by these packages.
    - "include": ["src/**/*"]   // this option lists the files we’d like to be compiled. While the "files" option requires relative or absolute paths to the files, the "include" option allows glob-like patterns, like:
    "**" - any subdirectory
    "*" - any file name
    "?" - a character followed by the question mark becomes optional (e.g., "src/*.tsx?")
    - "exclude": ["node_modules", "**/*/*.test.ts"] // This option excludes the files from the compilation. It accepts the same patterns as the "include" option. You can use this option to filter the files specified using the "include" option. The "exclude" option doesn’t affect the "files" option. Usually, you’d like to exclude node_modules, test files, and the compilation output directory. If you omit this option, the compiler will exclude the folder specified using the "outDir" option. If you won’t specify both options, "files" and "include", the compiler will compile all the TS files from the root directory and any subdirectory excluding the files specified using the "exclude" option.
    - "module": "commonjs"  // This option sets the module system that will be used in the compiled (.JS) files. You should choose the module system that is supported by the environment where your code will run. For example, Node.js uses CommonJS.
5. TS Types ->
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
6. Interfaces
    - interface A {
        somePrep : number;
        newProp : string;
    }
    let a : A = {someProp : 1} // Error as 'newProp' property is missing
    - interface Profile {
        readonly name : string; // readonly attribute makes as assignable once object is created
        age? : number; // ? makes property as optional
    }
    let profile : Profile { name : 'John'} // No Error as age is optional property
    profile.name = 'Sumant' // Error as name property is readonly
7. Index Signature
    - interface A {
        someProp : string;
        [key : string] : number | string;
    }
    const a : A = {someProp : 'some property' };
    a.x = 1
    a.y = 2
8. Call Signature
    - interface Sum {
        (a: number, b: number) : number;
        prop1: string;
    }
    const sum : Sum = (a, b) => sum
    sum.prop1 = 'some string';
9. Extending Interfaces
    - interface Parent {
        x: string;
    }
    interface Parent2 {
        y: string;
    }
    interface Parent3 {
        z: string;
    }
    interface Child extends Parent, Parent2, Parent3 {}
    let child : Child = {x: 'some prop', y : 'y prop', z : 'z prop'}
18. Functions
    - function sum(a : number, b : number = 0) : number {
        return a + b
    }
    // Assigning default value
    - type MyFunc = (a : number, b : number) => number;
      const sum2 = MyFunc = (a, b) => a + b
    - function sumAll(...number: number[]) : number {
        return numbers.reduce((result, num) => result + num, 0)
    }
19. Classes
    - class FyingRobot {
        public | protected | private jetpackSize : number; // Scope can be added for property
        constructor(name: string, jetpackSize : number) {
            super(name);
            this.jetpackSize = jetpackSize;
        }
        move(distance : number) {
            console.log(`${this.name} is flying`)
            super.move(distance)
        }
    }
    - class Person {
        constructor(
            public name: string,
            protected email: string,
            private salary: number
        ) {}
        } 
        class Employee extends Person {
            getEmployeeInfo() {
                return `${this.name} ${this.email} ${this.salary}`;
            }
        }
        const jack = new Employee('Jack', 'jack@example.com', 1000);
        console.log(jack.getEmployeeInfo()); // Error as salary is private property
20. Static side - The static side includes the static members of the class and the constructor.
21. Instance side - The non-static properties and methods belong to the instance side of a class.
22. Private Fields -
    - class Robot {
        #name : string
        constructor(name: string) {
            this.#name = name
        }
    }
    // name is a private field & can't be accessed outside its class scope
23. Generic functions
    - function genericFunction<T>(x: T): T {
        return x;
    }
    - function genericArrowFunction = <T>(x: T) : T => x;
24. Generic Interfaces
    - interface GenericInterface<T> {
        (a: T) : T;
        someProp : T;
    }
    - interface GenericInterface<T> {
        <U>(a: U) : U;
        someProp : T;
    }
25. Generic Classes
    - class GeneriClass<P> {
        constructor(public props : P) {}
        getProps() : P {
            return this.props;
        }
    }
26. Union type
    - function someFn(myArgument: number | string | boolean) {
        if(typeof myArgument === ''string') {
            let x = myArgument.toUpperCase();
        } else if(typeof myArgument === ''number') {
            myArgument.toFixed();
        } else {
            myArgument
        }
    }
27. Intersection type
    - interface IA {
        a : number;
    }
    - interface IB {
        b : number;
    }
    - interface IC {
        c : number;
    }
    function X(obj: IA & IB & IC) {
        return obj.a + obj.b + obj.c;
    }
28. Type Alias
    - type Alias1 = string | string[] | null;
    - type Alias2 = { a: number } & { b: number };
    - type Alias3<T> = T[];
    - type Alias2 = {
        a: number;
        b: number;
    }
29. .tsx extension is used when we want to embed JSX elements inside the file while .ts is used for plain Typescript files & does not support adding JSX elements.