import { useState } from "react"
import Counter from "./components/Counter"
import Heading from "./components/Heading"
import { Section } from "./components/Section"
import List from "./components/List"



function App() {

  const [count, setCount] = useState<number>(1)

  return (
    <>
      <Heading title={"Hello"} />
      <Section title="Title --> this is PROPS">This is CHILDREN</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List items={["Coffee", "Training", "Coding"]} 
      render={(item: string) => <span className="gold">{item}</span>} />
    </>
  )
}

export default App
