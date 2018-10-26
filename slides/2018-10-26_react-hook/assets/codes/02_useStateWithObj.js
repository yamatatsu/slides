() => {
  const createState = n => ({
    count: n,
    even: n % 2 === 0
  })

  const [{count,even}, setCount] =
    useState(createState(0));

  return (
    <div>
      <p>You clicked {count} times. even? {String(even)}</p>
      <button onClick={() => (
        setCount(createState(count + 1))
      )}>
        Click me
      </button>
    </div>
  );
}
