1. JEST - Unit test, component test, snapshot test
2. End to end test, performance test & coverage test
3. Jest is built on top of Jasmine & Mocha
4. React-test-renderer is required for Snapshot testing.
5. Jest(test runner) & React Testing Library is testing library.
6. queryBy* -> for checking non-existence of an element.
7. getBy* -> for all the normal behavior(returns an error if element is not found)
8. findBy* -> for waiting for some elements to be available(this will remove the need for waitFor method)
9. getBy ->
    - getByLabelText <label for="search" />
    - getByPlaceholderText <input placeholder="search" />
    - getByAltText <img alt="profile" />
    - getByDisplayValue <input value="javascript" />
    - getByText
    - getByRole
10. toThrow() -> throws error