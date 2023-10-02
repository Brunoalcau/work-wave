import { tv } from "tailwind-variants";

const buttonCss = tv({
  base: 'h-[38px] p-2 rounded-full px-6',
  variants: {
    color: {
      success: "bg-green-500/40 text-green-800",
      info: "bg-blue-500/40 text-blue-800"
    }
  }
})

type ButtonProps = {
  children: JSX.Element | JSX.Element [] | string
  color: 'success' | 'info'
};

export const Button = (props: ButtonProps) => (
  <button  className={buttonCss(props)} {...props} />
);