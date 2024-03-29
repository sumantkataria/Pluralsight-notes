# Javascript -

    - Javascript is weakly typed, prototype-based language with first-class functions.
    - Javascript is dynamic. Compilation & execution happens together.
    - JS is weakly typed. Type associated with value, not variable.

1. JS variables must start with _/$/letter only.
2. Operator precedence -> BODMAS
3. console.log("Hello \"World\"") // Output : Hello "World"
4. While parsing a number, first letter should be a number
5. falsy values -> false, 0, "", null, undefined, NaN
6. toFixed() is used to convert floating point to fixed number
7. symbol is used for some private information
8. JS built in objects
9. addEventListener
10. method has prototype & Object has __proto__
11. Strict mode
12. Call by value passes actual values & does not reflect changes to original values.
13. Call by reference passes reference values & does reflect changes to original values.

# Javascript Arrays =>
1. Array shift() & unshift()
2. Slice(creates a sub-array) & splice(for inserting/deleting)
3. filter(used for searching & creating new array), find(checks & return true/false), forEach(), indexOf
4. Array.isArray(arr) // true

# Javascript Modules =>
1. type="module" in importing JS from HTML(<script type="module">)
2. default import
3. named import

# Javascript functions =>
1. function is a block of organized, reusabe code that is used to perform a single, related action
2. arguments object
3. block scope
4. Arrow functions(anonymous functions with own unique syntax)
5. call(values of args) vs apply(array of args) vs bind(copy a fn)
    - function intro(name) {
        console.log(name)
    }
    intro.call(undefined, 'Sumant')
6. Built-in functions
    - eval
    - parseInt
    - parseFloat
    - escape
    - unescape

# Javascript Asynchronous =>
1. Promise(object that represents the eventual completion(or failure) of an asychronous operation & its resulting value)
    - then (fulfilled)
    - catch (rejected)
    - finally
2. Promise states -
    - Pending
    - Fulfilled(settled, resolved)
    - Rejected
3. Custom promises -
    - const wait = new Promise((resolve) => {
        setTimeout(() => {
            resolve("timeout");
        }, 1500)
    })
    wait.then(text => setText(text));
    - let request = new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://abc.xyz')
        xhr.onload = () => (xhr.status === 200) ? resolve() : reject()
        xhr.onerror = () => reject()
        xhr.send()
    });
4. Multiple promise responses fulfilled returns still show only first response received.
5. XMLHTTPRequest = open, onload, onerror, send
6. Promise.all([promise1, promise2, promise3]).then([a,b,c])=> {}
7. Promise.allSettled([promise1, promise2, promise3]).then(values) => {
        let results = values.map(v => {
            if(v.status === 'fulfilled')
            else if(v.status === 'rejected')
        })
    }
    - If 1 fails, it will proceed all after getting response now
    - Check for FULFILLED or REJECTED
    - Resolved or fulfilled returns status & value
    - Rejected returns status & reason
8. Promise.race([users, backup])
    .then(users => setData(users.data))
    .catch(reason => setData(reason))
    - It will check for any 1 response settled & proceed & stops execution
9. Async/Await used for methods returning a promise & does the same thing as promises
10. 2 async/await calls -
    async function chaining () {
        try {
            let {data} = await axios.get('URL')
            let {data:address} = await axios.get('URL2')
        } catch (error) {
            setError(error)
        }
    }
11. Concurrent await calls -
    Allows for concurrent requests running
    - let data = axios.get('URL')
      let data2 = axios.get('URL2')
      let resp1 = await data
      let resp2 = await data2
      setResp(resp1); setResp(resp2)
12. Parallel await calls(wait for all promises to be completed) -
    await Promise.all([
        (async () => {
            const {data} = await axios.get('URL1')
        })()
        (async () => {
            const {data2} = await axios.get('URL2')
        })()
    ])

# Javascript Objects =>
1. Objects literals, constructor functions & classes
2. for...in loop
3. ====                   |     Object.is(person1, person2)
   NaN not equal to NaN   |     NaN equals NaN
   -0 equals -0           |     +0 not equal -0
4. Object.assign(val2, val1) // Copies all properties of val1 to val2
5. Object.create(
    Object.prototype, {
        firstName: {value: 'Sumant', enumerable: true, writable: true, configurable: true},
        lastName: {value: 'Kataria', enumerable: true, writable: true, configurable: true},
        age: {value: 28, enumerable: true, writable: true, configurable: true}
    }
)
6. Object.defineProperty(person, 'firstName', {writable: false})
    Object.defineProperty(person, 'firstName', {enumerable: false})
    Object.defineProperty(person, 'firstName', {configurable: false})
    - We can't change the property value but we can change the child properties
7. Object.getOwnPropertyDescriptor()
8. Object.freeze(person.name)
9. Enumerable(not-visible while printing), writable(non-modifiable) & configurable(stop modifications)
10. getters & setters in JS
    - ES6 -> get methodName() {}
    - ES6 -> set methodName() {}
11. math, date & regex
    - Math.PI()
    - Math.max(1,2,3) // 3
    - let date1 = new Date(2005, 3, 12, 13, 1, 30, 50);
      let date1 = new Date(2005, 3, 12, 13, 1, 30, 55);
      log(date2 - date1);
    - let regex = new RegExp('[A-Z]');
      regex.test('scadhgd') // true
    - let regex = /ERROR.*?:/
    - regex.exec('string to search error') // true
12. ((new Date()).getTime()) -> returns current time in milliseconds
13. performance.now() -> more accurate way of measuring time difference
14. console.time('Here') & console.timeEnd('Here') -> non-standard way of measuring time difference
15. Object.seal -> can be used to fix length of JS array object
16. Array lookup
17. typeof -
    - Undefined -> "undefined"
    - Null -> "object"
    - Boolean -> "boolean"
    - Number -> "number"
    - NaN -> "number"
    - String -> string"
    - Function -> "function"
    - Array -> "object"
    - Any other object -> "object"

# Good parts of Javascript ->
1. return; //semicolon insertion 
   {
       ok
   }
2. Declare all variables at the top of the function.
3. Declare all functions before you call them.
4. Use least GLOBAL_VARIABLES.


# Javascript Extras ->
1. function fn(a=1, b=2, c=3) {
    console.log(`a=${a}, b=${b}, c=${c}`)
    console.log("arguments", arguments) // JS adds arguments where argments are actually passed
  }
  fn(4,6,8); // arguments object will have values
  fn(); // argemnts will not have any values
2. let stringNumber = "3";
    // Convert String to Number
    parseInt(stringNumber)
    Number(stringNumber)
    +(stringNumber)
3. const data = [[1], [[2,3]], [[[4]]]];
    // same as data.flat(1)
    console.log(data.flat()); // [1, [2, 3], [[4]]]
    console.log(data.flat(0)); // [[1], [[2, 3]], [[[4]]]]
    console.log(data.flat(2)); // [1, 2, 3, [4]]
4. [...Array(5).keys()]; // [0,1,2,3,4]
5. const arr = Array.from(new Set([2,3,4,2,3,5])); // [2,3,4,5]
6.  const obj1 = { z: { b: { c: { d: { d1: 1, d2: 3 } } } }, a: 8 };
    const obj2 = { z: { b: { c: { d: { d2: 3, d1: 1 } } } }, a: 8 };
    // Compare 2 objects
        1. JSON.stringify(obj1) === JSON.stringify(obj2)
        2. _.isEqual(obj1, obj2)
7. // Custom Map attached to Array prototype
    Array.prototype.customMap = function(callback) => {
        let newArr = [];
            for(let i=0; i < this.length; i++) {
                newArr.push(callback(this[i], i, this))
            }
            return newArr;
    }
8. Shallow Copy - A new copy created that has an exact copy of the values in the original object. E.g. if X is copied from Y, addresses of both will be same i.e. they will be pointing to same memory location.
    - let employeeDetailsOriginal = {  name: 'Sumant', age: 29, Profession: 'Software Engineer' };
      let employeeDetailsDuplicate = employeeDetailsOriginal; //Shallow copy!
9. Deep Copy - A new copy created that has exact copy of the values in the original object but allocates new memory location. E.g. if X is copied from Y, addresses of both will be different i.e. they will be pointing to different memory locations.
    - let employeeDetailsOriginal = {  name: 'Sumant', age: 29, Profession: 'Software Engineer' };
      let employeeDetailsDuplicate = { name: employeeDetailsOriginal.name, age: employeeDetailsOriginal.age, Profession: employeeDetailsOriginal.Profession}; //Deep copy!
    
# Compose function

# Pipe function