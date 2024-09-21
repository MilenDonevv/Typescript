import { useEffect, useState, useCallback, MouseEvent, KeyboardEvent, useMemo, useRef } from "react"

// useCallback --> memoizes a FUNCTION so that it is not always re-created over and over
// it also has a dependency array 

// useMemo --> memoizes a VALUE --> usually used for EXPENSIVE calculations, such as FIBONACCI
// also has e dependency array


interface User {
  id: number,
  username: string,
}


type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
  if (n < 2) return n

  return fib(n - 1) + fib(n - 2) 
}

const myNum: number = 25


function App() {

  // const [count, setCount ] = useState<User[] | null>(0)
  const [count, setCount ] = useState<number>(0)
  const [users, setUsers ] = useState<User[] | null>(null)

  // const inputRef = useRef(null)
  const inputRef = useRef<HTMLInputElement>(null!) // non-null assertion !! 

  // if (!inputRef.current)   // one way to check it
  if (!inputRef.current)

  
  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);  // changing the 
  
  

  // useEffects deals with side effects
  useEffect(() => {
    console.log('mounting');
    console.log('Users: ', users);
    

    return () => console.log('unmounting');
    
    
  }, [users])

  // passing an event is options.. of course
  const addOne = useCallback(()  => setCount(prev => prev + 1), [])

  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) : void  => setCount(prev => prev + 2), [])

  const subtractOne = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) : void => setCount(prev => prev - 1), [])

  const result = useMemo<number>(() => fib(myNum), [myNum])

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <button onClick={subtractOne}>Subtract</button>
      <h2>{result}</h2>
      <input ref={inputRef} type="text" />
    </div>
  )
}

export default App

// when using strict mode --> this is when we are in development mode
// it 
// 1 - mounts the component
// 2 - then it unmounts it
// 3 - Then it Re-mounts it

// useEffect does return a CLEAN-up function
