import { Text } from "../../components/atoms/Text";
import { Batches } from "../../components/molecules/Batches";
import { useBatches } from "../../provider/BatchesProvider";



export const Dashboard = () => {
  const {batches} = useBatches();
  return (
    <div className="flex justify-center h-screen overflow-hidden overflow-y-auto">
      <div className="w-full max-w-[1200px] py-24 flex flex-col">
        <Text size="large">Hi,</Text>
        <Text size="small" color="secondary">bem-vindo de volta ao espaço de trabalho. nós sentimos saudades de você</Text>
        <div className="mt-12 flex items-center">
          <Text size="medium">Lista de lotes</Text>
          <span className="ml-2">
            <Text size="medium" color="secondary">({`${batches.length}`})</Text>
          </span>
        </div>
        <div>
          <Batches data={batches}/>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  )
}