import GeneratorPassword from "./components/GeneratorPassword"
import GlobalState from "./context/GlobalState"

function App() {

  return (
    <GlobalState>
      <GeneratorPassword />
    </GlobalState>
  )
}

export default App
