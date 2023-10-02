import { FileUpload } from "../../components/atoms/FileUpload";
import { useBatches } from "../../provider/BatchesProvider";


export const Home = () => {
  const { updateJobs } = useBatches();
  return (
    <div className="w-full h-full flex p-4 justify-center items-center">
      <div className="max-w-[450px] p-4">
        <FileUpload 
          onChange={updateJobs} 
          name="file" 
          description="JSON (MAX. 200mb)" 
          label='Clique para upload do arquivo.' 
        />
      </div>
    </div>
  );
};