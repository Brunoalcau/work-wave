import { Button } from "../../atoms/Button/ index";
import { Text } from "../../atoms/Text";


type JobProps = {
  checked: boolean;
  description: string;
}


export const Job = ({checked, description}: JobProps) => (
  <div className="flex py-5 justify-between">
    <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-full border-2"></div>
        <Text size="small" color="invited">{description}</Text>

    </div>
    <div>
      <Button color={checked  ? 'success' : 'info'}>{checked ? 'Em andamento' : 'Processado'}</Button>
    </div>
  </div>
);