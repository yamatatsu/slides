const memoKey = 'hoge';
() => {
  const [count, setCount] = useState(0)
  const sayHi = useCallback(
    () => console.log('Hi!!'),
    [memoKey],
  );
  // const sayHi = () => console.log('Hi!!');
  useEffect(sayHi);
  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </>
  )
}
