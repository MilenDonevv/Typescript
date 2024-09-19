import Counter from "./components/Counter"
import Heading from "./components/Heading"
import { Section } from "./components/Section"


function App() {

  return (
    <>
      <Heading title={"Hello"} />
      <Section title="Some different title">This is the section</Section>
      <Counter />
    </>
  )
}

export default App
