ReactJS -

1. Why React -
    - Flexibility
    - Developer experience
    - Corporate investment
    - Community support
    - Performance
    - Testability
1. What in React -
    - JS library for building UI
    - The "virtual" DOM
    - Just Javascript(need lots of learning in JS to be better in React)
    - Battle tested
    - Declarative language
2. Basic concepts -
    - Components
        a) Like functions
        b) Reusable & Composable
        c) Can manage a private state
    - Reactive updates
    - Virtual views in memory
3. Function component
4. Class component(rce for regular)(ronst for constructor) - does not implement shouldComponentUpdate method. It alwaysreturns true by default.
5. Pure Components(rpce for pure) - implements shouldComponentUpdate with shallow props & state comparison.
    - Means it compares prevState with currentState/prevPros with currentProps & only renders when it's modified.
    - Helps in performance boost in certain scenarios.
    - Pure components defined as function will always re-render.
6. Pure functions are the functions whose returned values solely depends on their arguments. They do not have any side effects.
7. Impure
8. Stateful vs Stateless components
9. JSX
10. Higher Order Components(HOCs) - it is an advanced technique for re-using component logic. A HOC is a function that takes components & return a new component. A component transforms props into UI, a HOC transforms component into another component.
11. React Hooks -
    - useEffect(() => {        
        document.title = name + " " + surname; // componentDidMount & componentDidUpdate
    })
    - useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth) // componentDidMount
        window.addEventListener('resize', handleResize) // componentDidMount
        return () => {
            window.removeEventListener('resize', handleResize) // componentWillUnmount
        }
    })
    - useEffect(() => {
        let x = window.matchMedia(query);
    }, [query]); // componentDidUpdate
12. Custom Hooks -
    - const name = useFormInput('Sumant')
      const surname = useFormInput('Kataria')
        function useFormInput(initialValue) { // custom hook
            const [value, setValue] = useState(initialValue)
            function handleChange(e) {
                setValue(e.target.value)
            }
            return {
                value,
                onChange: handleChange
            }
        }
    <input {...name} />
    <input {...surname} />
13. React component re-renders in following scenario -
    - setState is called
    - props are updated
    - this.forceUpdate() is called
14. React.memo() hook prevents re-rendering on React function components.