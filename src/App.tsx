import { FileUpload } from "./components/atoms/fileUpload"
import { BatchesProvider } from "./provider"

function App() {

  return (
    <BatchesProvider>
      <div className="w-screen h-screen bg-gray-800 flex justify-center items-center " >
        <FileUpload onChange={console.log} name="file" description="JSON (MAX. 200mb)" label='Clique para upload do arquivo.' />
      </div>
    </BatchesProvider>
  )
}

export default App
