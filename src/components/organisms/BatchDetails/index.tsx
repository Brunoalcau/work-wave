import { Job } from "../../../entities/Job";
import { Separator } from "../../atoms/Separator";
import { Text } from "../../atoms/Text";
import { Job as JobComponent } from "../../molecules/Job";
import { SideSheet, SideSheetContent, SideSheetDescription, SideSheetTitle, SideSheetTrigger } from "../../molecules/SideSheet";

type BatchDetailsProps = {
  trigger: JSX.Element
  title?: string;
  data?: Job[]
}


export const BatchDetails = ({ trigger, data = [], title ='' }: BatchDetailsProps) => (
  <SideSheet>
  <SideSheetTrigger asChild>
    {trigger}
  </SideSheetTrigger>
  
    <SideSheetContent>
      <SideSheetTitle title={title} />
      <div className="mt-8">
        <SideSheetDescription description='Logo abaixo, você encontrará a lista dos jobs que estarão em execução dentro deste lote:' />
      </div>
        <div className="mt-12 w-full">
          <Text color="invited" size="medium">Hoje</Text>
          <Separator />
          {data.map(item =>  (
            <div key={item.ID}>
              <JobComponent  description={item.description} checked={false}/>
            </div>
          ))}
          
        </div>
    </SideSheetContent>
  </SideSheet>
)