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
4. Class component
5. Pure functions are the functions whose returned values solely depends on their arguments. They do not have any side effects.
6. Impure
7. Stateful vs Stateless components
8. JSX
9. Higher Order Components(HOCs) - it is an advanced technique for re-using component logic. A HOC is a function that takes components & return a new component. A component transforms props into UI, a HOC transforms component into another component.
10. React Hooks -
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
11. Custom Hooks -
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