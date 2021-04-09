1. let, const keyword
2. Destructuring
    let x = 2,y = 3
    [x, y] = [y, x]
    console.log(x, y)
3. Default parameters
    - Always last formal parameter
4. Rest parameters
    - must be last formal parameter
    - function greet(...names) {
        names.forEach(name => console.log('Hi' + name))
    }
5. Spread operator
    - Opposite of rest parameter
    - function greet(name1, name2) {
        console.log(name1, name2)
    }
    let letters = ['sumant', 'kataria']
    greet(...letters)
6. Template literals
    - let url = `http://domain/${node}/${id}`
    - let result = `${x}+${y} = ${x+y}`
7. Classes
8. Constructor
9. get & set in class
10. Inheritance
    - class Employee extends person
11. super
    - constructor(name, title) {
        super(name);
    }
12. arrow function
13. Iterators & Generators(yield function)
14. comprehensions
15. Number
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
16. Math
    - Math.acosh
    - Math.asinh
    - Math.atanh
    - Math.cosh
    - Math.sinh
    - Math.tanh

    - Math.cbrt
    - Math.clz32
    - Math.log1p
    - Math.log10
    - Math.log2
    - Math.expm1
    - Math.hypot
    - Math.fround

    - Math.sign
    - Math.trunc
17. Array -
    - [1,5,10].find(item => item > 8);
    - [1,8,10].findIndex(item => item > 3);
    - [1,2,3,4,5].fill('a')
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
18. Array Comprehensions -
    - let ary = [for (i of [1,2,3]) i*i]; //[1,4,9]
    - let ary = [for (i of [1,2,3]) if(i<3)]; //[1,2]
19. Set -
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
      set.delete(1);
      console.log(set.size); // 1
    - let set = new Set(1,2,3);
      for(let item of set){
          console.log(item);
      }
    - let set = new Set()
      set.add(1)
      let entries = set.entries()
      var firstEntry = entries.next().value;
      console.log(firstEntry[0]); // 1
      console.log(firstEntry[1]); // 1
    - let set = new Set()
      set.add(1)
      let values = set.values()
      var firstEntry = values.next().value;
      console.log(firstEntry); // 1
    - var set = new Set()
      set.add(1)
      set.add(2)
      var set2 = new Set(set.values())
      console.log(set2.size); // 2
20. Map(no duplicates) -
    - var map = new Map();
      console.log(map.size); // 0
    - var map = new Map();
      map.set("age", 28)
    - var map = new Map()
      console.log(map.get("size")); //28
    - var map = new Map([["fName","Sumant"], ["lName","Kataria"], ["age","28"]]);
      console.log(map.has("age")); // true
    - var map = new Map();
      var key = {}
      map.set(key, "first");
      map.set(key, "second");
      console.log(map.get(key)); // "second"
    - var map = new Map()
      map.set(1, 'a');
      map.set(2, 'b');
      map.clear();
      console.log(map.size); // 0
      - var map = new Map()
      map.set(1, 'a');
      map.set(2, 'b');
      map.delete(1);
      console.log(map.size); // 1
    - var map = new Map([["fName","Sumant"], ["lName","Kataria"], ["age","28"]]);
      map.forEach((value, key) => {
          console.log(value)
      })
    - var map = new Map()
      map.set('name', 'sumant');
      var entries = map.entries();
      var firstEntry = entries.next().value;
      console.log(firstEntry[0]); //name
      console.log(firstEntry[1]); //sumant
    - var map = new Map()
      map.set('name', 'sumant');
      var values = map.values();
      var firstEntry = values.next().value;
      console.log(firstEntry); //"Sumant"
    - var map = new Map()
      map.set('name', 'sumant');
      var values = map.keys();
      var firstEntry = keys.next().value;
      console.log(firstEntry); //"name"
    - var map = new Map()
      map.set(1, 'a')
      map.set(2, 'b')
      var map2 = new Map(map.entries());
      console.log(map2.size); // 3
21. WeakMap & WeakSet(if a div element is removed from DOM& its corresponding item in set is still pointing at it, so that div element cannot be Garbage collected & its still stuck in memory, So, to solve it WeakMap & WeakSet are created. Their pointers are not strong pointers & therefore the GC can recycle the objects even if the WeakMap/WeakSet is still pointing at it.)
    - WeakSet -
        - var set = new WeakSet();
          console.log(set.size); // undefined
          console.log(set.entries); // undefined
          console.log(set.values); // undefined
          console.log(set.forEach); // undefined
        - var set = new WeakSet()
          var item = {name: "Sumant"};
          set.add(item)
          console.log(set.has(item)); // true
        - var set = new WeakSet()
          var item = {name: "Sumant"};
          set.add(item);
          set.delete(item);
          console.log(set.has(item)); // false
        - var set = new WeakSet()
          var item = {name: "Sumant"};
          set.add(item);
          set.clear(item);
          console.log(set.has(item)); // false
    - WeakMap -
        - var map = new WeakMap();
          console.log(map.size); // undefined
          console.log(map.entries); // undefined
          console.log(map.values); // undefined
          console.log(map.forEach); // undefined
        - var map = new WeakMap()
          var key = {};
          map.set(key, "a")
          console.log(map.has(key)); // true
        - var map = new WeakMap();
          var key = {};
          map.set(key, "a")
          map.delete(key);
          console.log(map.has(item)); // false
        - var map = new WeakMap()
          var key = {};
          map.set(key, "a")
          map.clear(key);
          console.log(map.has(item)); // false
22. Asynchronous programming
23. Object.is vs Object.assign
24. Proxy functions
25. Modules in JS