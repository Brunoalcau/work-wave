import { FileUpload } from "./components/atoms/fileUpload"

function App() {
  return (
    <div className="w-screen h-screen bg-gray-800 flex justify-center items-center " >
      <FileUpload onChange={console.log} name="file" description="JSON (MAX. 200mb)" label='Clique para upload do arquivo.' />
    </div>
  )
}

export default App
