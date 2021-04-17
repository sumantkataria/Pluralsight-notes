Javascript -

Javascript is weakly typed, prototype-based language with first-class functions.
Javascript is dynamic. Compilation & execution happens together.
JS is weakly typed. Type associated with value, not variable.

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

Javascript Arrays =>
1. Array shift() & unshift()
2. Slice(creates a sub-array) & splice(for inserting/deleting)
3. filter(used for searching & creating new array), find(checks & return true/false), forEach(), indexOf
4. Array.isArray(arr) // true

Javascript Modules =>
1. type="module" in importing JS from HTML(<script type="module">)
2. default import
3. named import

Javascript functions =>
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

Javascript Asynchronous =>
1. Promise(object that represents the eventual completion(or failure) of an asychronous operation & its resulting value)
    - then
    - catch
    - finally
2. Promise states -
    - Pending
    - Fulfilled
    - Rejected
3. Custom promises
    const wait = new Promise((resolve) => {
        setTimeout(() => {
            resolve("timeout");
        }, 1500)
    })
    wait.then(text => setText(text));
4. Multiple promise responses fulfilled returns still show only first response received.
5. XMLHTTPRequest = open, onload, onerror, send
6. Promise.all([promise1, promise2, promise3]).then([a,b,c])=> {}
7. Promise.all([promise1, promise2, promise3]).then(values) => {
    let results = values.map(v => {
        if(v.status === 'fulfilled')
        else if(v.status === 'rejected')
    })
}
- If 1 fails, it will proceed all after getting response now
- Check for FULFILLED or REJECTED
8. Promise.race([users, backup]).then().catch
    - It will check for any 1 response settled & proceed
9. Async/Await used for methods returning a promise & does the same thing as promises
10. 2 await calls
    - let {data} = await axios.get('URL')
    - let {data:address} = await axios.get('URL2')
11. Concurrent await calls -
    - let data = axios.get('URL')
    - let data2 = axios.get('URL2')
    - let resp1 = await data
    - let resp2 = await data2
12. Parallel await calls -
    await Promise.all([
        (async () => {
            const {data} = await axios.get('URL1')
        })()
        (async () => {
            const {data2} = await axios.get('URL2')
        })()
    ])

Javascript Objects =>
1. Objects literals, constructor functions & classes
2. for...in loop
3. Object.is(person1, person2)
4. Object.assign()
5. Object.create(
    Object.prototype, {
        firstName: {value: 'Sumant', enumerable: true, writable: true, configurable: true},
        lastName: {value: 'Kataria', enumerable: true, writable: true, configurable: true},
        age: {value: 28, enumerable: true, writable: true, configurable: true}
    }
)
6. Object.defineProperty(person, 'firstName', {writable: false})
    - We can't change the property value but we can change the child properties
7. Object.getOwnPropertyDescriptor()
8. Object.freeze(person.name)
9. Enumerable, writable & configurable
10. getters & setters
11. math, date & regex
    - let date1 = new Date(2005, 3, 12, 13, 1, 30, 50);
    - let date1 = new Date(2005, 3, 12, 13, 1, 30, 55);
    - log(date2 - date1);
    - let regex = new RegExp('[A-Z]');
    - regex.test('scadhgd')
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