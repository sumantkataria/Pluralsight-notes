1. Asymptotic analysis of Algorithms
2. BIG-O is worst case scenario &  BIG-Omega is best case.
3. Simplified notation of an algorithm efficiency
4. Complexity in terms of input size, N
5. Machine independent
6. Time & Space
- O(1) < O(logn) < O(n) < O(nlogn) < O(n^2) < O(2^n) < O(n!)
7. O(1) = Constant time - function whose cost of the algo is unchanged by the iput size
8. O(n) = Linear time - function whose cost scales linearly with the size of the input
9. O(n^2) = Quadratic time - function that exibits quadratic growth relative to the input size
10. O(logn) = Logarithmic time - function whose cost scales logarithmically with the input size
11. O(2^n) = Exponential time
12. O(n!) = Factorial time
13. T = an + b => O(n)
14. T = an^2 + bn + c = O(n^2)
15. Arithmetic operations are constant
16. Variable assignment is constant
17. Accessing elements in an array is constant
18. In a loop, the complexity is length of the loop.
19. Rules for calculating -
    - Different steps get added -
    function something() {
        doStep1(); //O(a)
        doStep2(); //O(b)
    } // Output : O(a+b)

    - Drop constants -
    function minmax1(array) {
        min, max => null
        for each x in array {
            min = MIN(x, min) // O(n)
            max = MAX(x, max) // O(n)
        }
    } // Output : O(n) & not O(2n)

    function minmax2(array) {
        min, max => null
        for each x in array {
            min = MIN(x, min) // O(n)
        }
        for each y in array {
            max = MAX(x, max) // O(n)
        }
    } // Output : O(n) & not O(2n)
    
    - Different inputs => Different variables
    function intersectionSize(array A, array B) {
        let count = 0
        for a in array A { // O(a)
            for b in array B { // O(b)
                if(a==b) {
                    count = count+1
                }
            }
        }
        return count
    } // Output : O(a*b)

    - Drop non-dominate terms
    function whyWouldIDoThis(array) {
        max = null
        for each (a in array ) { // O(n)
            max = max(a, max)
        }
        print max
        for each(a in array) { // O(n)
            for each (b in array) { // O(n)
                print a, b
            }
        }
    } // Ouput : O(n + n^2) => O(n^2)
    
    => x= 5 + (4*7) = Independent of input size, N => O(1)