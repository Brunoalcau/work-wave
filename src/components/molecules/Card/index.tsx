import { tv } from "tailwind-variants";
import { getRandomAlertType } from "../../../helper/getRandomAlertType";
import { Text } from "../../atoms/Text";

type CardProps = {
  text?: string;
  count?: number;
  color?: 'danger' | 'success' | 'warning' | 'info'
};



const cardCSS = tv({
  base: 'w-[90px] h-[90px] rounded-md flex justify-center items-center cursor-pointer relative', 
  variants: {
    color: {
      danger: "bg-red-400",
      success: "bg-green-400",
      warning: "bg-yellow-400",
      info: 'bg-blue-400'
    }
  }
});



export const Card = ({ text = '' ,count, ...props}: CardProps) => (
    <div className={cardCSS({...props, color: getRandomAlertType()})} {...props}>
        <Text size="medium" color="primary">
            {text}
        </Text>
        {!!count && <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">{count}</div>}
    </div>
)