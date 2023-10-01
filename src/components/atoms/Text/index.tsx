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
      secondary: 'text-gray-500'
    }
  }
})


type TextProps = {
  children: JSX.Element | string;
  size?: 'small'  | 'medium' | 'large'
  color?: 'primary' | 'secondary'
}


export const Text = (props: TextProps) => (
  <span className={textCSS({...props})} {...props} />
);