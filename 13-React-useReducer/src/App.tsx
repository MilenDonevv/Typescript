import Counter from './Counter'


function App() {

  return (
    <div className="App">
      <Counter>
        {(count: number) => <>Count is {count}</>}
      </Counter>
    </div>
  )
}

export default App


