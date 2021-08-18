1. let keyword -> 
2. const keyword(means contact reference to a variable) ->
  - Variables defined with const cannot be Re-declared, re-assigned & have block scope.
  - Objects/Array defined with const can update the elements.
  - Objects/Array defined with const can update the properties.
3. Destructuring
    let x = 2,y = 3
    [x, y] = [y, x]
    console.log(x, y)
4. Default parameters
    - Always last formal parameter
    - function fullName(fName="Sumant", lName="Kataria") {}
5. Rest parameters
    - must be last formal parameter
    - function greet(...names) {
        names.forEach(name => console.log('Hi' + name))
    }
6. Spread operator
    - Opposite of rest parameter
    - function greet(name1, name2) {
        console.log(name1, name2)
    }
    let letters = ['sumant', 'kataria']
    greet(...letters)
7. Template literals
    - let url = `http://domain/${node}/${id}`
    - let result = `${x}+${y} = ${x+y}`
8. Classes
9. Constructor
10. get & set in class
11. Inheritance
    - class Employee extends person
12. super
    - constructor(name, title) {
        super(name);
    }
13. arrow function
14. Iterators & Generators(yield function)
    - let numbers = function*() {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
    } // Generator function
    let sum = 0;
    let iterator = numbers();
    let next = iterator.next();
    while(!next.done) {
      sum += next.value;
      next = iterator.next();
    }
15. Comprehensions
    - let numbers = [for (n of [1,2,3] n*n)] // [1,4,9]
16. Number
    - hexadecimal literal
    - binary literal
    - Number.parseInt
    - Number.parseFloat
    - Number.isFinite
    - Number.isNaN
    - Number.isInteger
    - Number.MAX_SAFE_INTEGER
    - Number.MIN_SAFE_INTEGER
    - Number.isSafeInteger
17. Math
    - Math.acosh(1) // 0
    - Math.asinh(0) // 0
    - Math.atanh(0) // 0
    - Math.cosh(0) // 1
    - Math.sinh(0) // 0
    - Math.tanh(0) // 0

    - Math.cbrt(27) // 3
    - Math.clz32(5) // 29
    - Math.log1p(35) // 3.583...
    - Math.log10(100) // 2
    - Math.log2(32) // 5
    - Math.expm1(35) // 1586013452313434.2
    - Math.hypot(3,4) // 5
    - Math.fround(2.888) // 2.888....

    - Math.sign(10) // 1
    - Math.trunc(-2.8) // -2
18. Array -
    - [1,5,10].find(item => item > 8); // 10
    - [1,8,10].findIndex(item => item > 3); // 1
    - [1,2,3,4,5].fill('a');
    - [1,2,3,4].copyWithin(2,0,2); //[1,2,1,2]
    - let ary = new Array(1,2,3) //[1,2,3]
    - let arrayLike = document.querySelectorAll('div') // Creates Array like object but can't be iterated
    - let fromArray = Array.from(arrayLike)
    - let a = ["Sumant", "Kataria", "Vishwas"]
      let entries = a.entries()
      let firstEntry = entries.next().value;
      console.log(firstEntry[0]) //key
      console.log(firstEntry[1]) //value
    - let a = ["Sumant", "Kataria", "Vishwas"]
      let keys = a.keys();
      let firstEntry = keys.next().value;
      console.log(firstEntry); //key
19. Array Comprehensions -
    - let ary = [for (i of [1,2,3]) i*i]; //[1,4,9]
    - let ary = [for (i of [1,2,3]) if(i<3)]; //[1,2]
20. Set(no duplicates) -
    - let set = new Set()
      console.log(set.size)
    - set.add("Sumant")
    - let set = new Set()
      let key = {}
      set.add(key)
      console.log(set.has(key)); //true
    - let set = new Set(1,2,3)
      console.log(set.has(1)); //true
    - let set = new Set()
      let key = {}
      set.add(key)
      set.add(key)
      console.log(set.size); // 1
    - let set = new Set()
      let key = {}
      set.add(1)
      set.add(2)
      set.clear();
      console.log(set.size); // 0
    - let set = new Set()
      let key = {}
      set.add(1)
      set.add(2)
      set.delete(1);
      console.log(set.size); // 1
    - let set = new Set(1,2,3);
      for(let item of set){
          console.log(item);
      }
    - let set = new Set()
      set.add(1)
      let entries = set.entries()
      let firstEntry = entries.next().value;
      console.log(firstEntry[0]); // 1
      console.log(firstEntry[1]); // 1
    - let set = new Set()
      set.add(1)
      let values = set.values()
      let firstEntry = values.next().value;
      console.log(firstEntry); // 1
    - let set = new Set()
      set.add(1)
      set.add(2)
      let set2 = new Set(set.values())
      console.log(set2.size); // 2
21. Map(no duplicate keys) -
    - let map = new Map();
      console.log(map.size); // 0
    - let map = new Map();
      map.set("age", 28)
    - let map = new Map()
      console.log(map.get("size")); //28
    - let map = new Map([["fName","Sumant"], ["lName","Kataria"], ["age","28"]]);
      console.log(map.has("age")); // true
    - let map = new Map();
      let key = {}
      map.set(key, "first");
      map.set(key, "second");
      console.log(map.get(key)); // "second"
    - let map = new Map()
      map.set(1, 'a');
      map.set(2, 'b');
      map.clear();
      console.log(map.size); // 0
    - let map = new Map()
      map.set(1, 'a');
      map.set(2, 'b');
      map.delete(1);
      console.log(map.size); // 1
    - let map = new Map([["fName","Sumant"], ["lName","Kataria"], ["age","28"]]);
      map.forEach((value, key) => {
          console.log(value)
      })
    - let map = new Map()
      map.set('name', 'sumant');
      let entries = map.entries();
      let firstEntry = entries.next().value;
      console.log(firstEntry[0]); //name
      console.log(firstEntry[1]); //sumant
    - let map = new Map()
      map.set('name', 'sumant');
      let values = map.values();
      let firstEntry = values.next().value;
      console.log(firstEntry); //"Sumant"
    - let map = new Map()
      map.set('name', 'sumant');
      let values = map.keys();
      let firstEntry = keys.next().value;
      console.log(firstEntry); //"name"
    - let map = new Map()
      map.set(1, 'a')
      map.set(2, 'b')
      let map2 = new Map(map.entries());
      console.log(map2.size); // 3
    - Faster searching than Objects
    - keys can be of any data type
22. WeakMap & WeakSet(if a div element is removed from DOM& its corresponding item in set is still pointing at it, so that div element cannot be Garbage collected & its still stuck in memory, So, to solve it WeakMap & WeakSet are created. Their pointers are not strong pointers & therefore the GC can recycle the objects even if the WeakMap/WeakSet is still pointing at it.)
    - WeakSet -
        - let set = new WeakSet();
          console.log(set.size); // undefined
          console.log(set.entries); // undefined
          console.log(set.values); // undefined
          console.log(set.forEach); // undefined
        - let set = new WeakSet()
          let item = {name: "Sumant"};
          set.add(item)
          console.log(set.has(item)); // true
        - let set = new WeakSet()
          let item = {name: "Sumant"};
          set.add(item);
          set.delete(item);
          console.log(set.has(item)); // false
        - let set = new WeakSet()
          let item = {name: "Sumant"};
          set.add(item);
          set.clear(item);
          console.log(set.has(item)); // false
    - WeakMap -
        - let map = new WeakMap();
          console.log(map.size); // undefined
          console.log(map.entries); // undefined
          console.log(map.keys); // undefined
          console.log(map.values); // undefined
          console.log(map.forEach); // undefined
        - let map = new WeakMap()
          let key = {};
          map.set(key, "a")
          console.log(map.has(key)); // true
        - let map = new WeakMap();
          let key = {};
          map.set(key, "a")
          map.delete(key);
          console.log(map.has(item)); // false
        - let map = new WeakMap()
          let key = {};
          map.set(key, "a")
          map.clear(key);
          console.log(map.has(item)); // false
23. Asynchronous programming
24. Object.is vs Object.assign
25. Proxy functions
26. Modules in JS