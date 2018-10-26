() => {
  const [{count,even}, setCount] =
    useState({ count: 0, even: false });
  const newCount = count + 1

  return (
    <div>
      <p>You clicked {count} times. even? {String(even)}</p>
      <button onClick={() => (
        setCount({
          count: newCount,
          even: newCount % 2 === 0
        })
      )}>
        Click me
      </button>
    </div>
  );
}
