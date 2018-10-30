const Context = React.createContext()
const { Provider, Consumer } = Context

const Counter = () => {
  const { count, inc } = useContext(Context)
  return (
    <>
      <p>{count}</p>
      <button onClick={inc}>inc</button>
    </>
  )
}

() => {
  const [count, setCount] = useState(0);
  return (
    <Provider value={{ count, inc: () => setCount(count + 1) }}>
      <Counter />
    </Provider>
  )
}
