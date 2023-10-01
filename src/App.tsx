import { BatchesProvider } from "./provider/BatchesProvider"
import Route from "./router"

function App() {

  return (
    <BatchesProvider>
      <div className="w-screen h-screen bg-gray-800" >
        <Route />
      </div>
    </BatchesProvider>
  )
}

export default App
