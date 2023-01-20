Redux -

1. Redux is a state management library that produces a global state for the entire app so that it can be accessed by all components.
2. Source of truth
3. Remains a great solution towards props drilling.
4. Thunk/Saga used for Asynchronous calls.
5. Maintains application level state.
6. Component level state.
7. Principles of Redux -
    a) 1st - Everything that changes in the application, including the data & the UI state, is contained in a single object, we call the state or state tree.
    b) 2nd - The State tree is read only. You cannot modify or write to it. Instead, anytime you want to change the state, you need to dispatch an action.
    c) 3rd - To describe state mutations, we need to write a function that takes the previous state of the app, the action being dispatched & returns the next state of the app. This function has to be pure & called "Reducer".
8. Only 1 store can be maintained per application.
9. Data flow is unidirectional.