// 怖い！と感じたらブラウザ再描画！
() => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      console.log(count)
      setCount(count + 1)
    }, 1000)

    return () => clearInterval(id)
  })

  return <p>{count}</p>
}
