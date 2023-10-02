import { tv } from "tailwind-variants";


const textCSS = tv({
  base: "text-white",
  variants: {
    size: {
      small: 'text-sm',
      medium: 'text-md',
      large: "text-3xl"
    },
    color: {
      primary: 'text-white',
      secondary: 'text-gray-500',
      invited: 'text-back',
    }
  }
})


type TextProps = {
  children: JSX.Element[] | JSX.Element | string | string[];
  size?: 'small'  | 'medium' | 'large'
  color?: 'primary' | 'secondary' | 'invited'
}


export const Text = (props: TextProps) => (
  <span className={textCSS({...props})} {...props} />
);