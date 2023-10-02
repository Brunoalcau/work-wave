import { Batch } from "../../../entities/Batch";
import { BatchDetails } from "../../organisms/BatchDetails";
import { Card } from "../Card";


type BatchesProps = {
  data: Batch[]
}


export const Batches = ({ data }: BatchesProps) => (
  <div className="container my-12 mx-auto px-4 md:px-12">
    <div className="flex flex-wrap -mx-1 lg:-mx-4 gap-4">
      {data?.map((item, index) => (
        <BatchDetails
          data={item}
          title={`###${index + 1 }`} 
          trigger={
            <Card count={item.length}  key={index} text={`#${index +1}`} />
          }
        />
      ))}
    </div>
  </div>
)