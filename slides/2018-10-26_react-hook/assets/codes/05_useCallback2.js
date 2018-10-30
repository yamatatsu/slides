const memoKey = 'hoge';
() => {
  const [count, setCount] = useState(0)
  useEffect(
    () => console.log('Hi!!'),
    [memoKey],
  );
  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </>
  )
}
