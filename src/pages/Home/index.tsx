import { FileUpload } from "../../components/atoms/fileUpload";
import { useBatches } from "../../provider/BatchesProvider";


export const Home = () => {
  const { updateJobs } = useBatches();
  return (
    <div className="w-full max-w-[400px] p-4 flex justify-center items-center ">
      <FileUpload 
        onChange={updateJobs} 
        name="file" 
        description="JSON (MAX. 200mb)" 
        label='Clique para upload do arquivo.' 
      />
    </div>
  );
};