 import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';


type SideSheetContentProps = {
  children:  JSX.Element | JSX.Element[]
}

export const SideSheetContent = ({children}: SideSheetContentProps) => {
  return (
    <Dialog.Portal>
         <Dialog.Overlay className="bg-gray-800/80 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow top-0 bottom-0 m-1 fixed h-[calc(100vh-10px)] right-[1%]  w-[40vw] rounded-[6px] bg-white p-[32px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        {children}
        <Dialog.Close asChild>
          <button
            className="text-violet11 hover:bg-violet-100 focus:shadow-violet-700 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  )
}

type SideSheetTitleProps = {
  title: string;
}

export const SideSheetTitle = ({ title }: SideSheetTitleProps) => (
  <Dialog.Title className="text-back m-0 text-3xl font-medium">
    #{title}
  </Dialog.Title>
);


type SideSheetDescriptionProps = {
  description: string;
}

export const SideSheetDescription = ({ description }: SideSheetDescriptionProps) => (
  <Dialog.Description className="text-gray-400 m-0 text-sm">
    {description}
  </Dialog.Description>
);


type SideSheetTriggerProps = {
  children: JSX.Element | JSX.Element[];
  asChild: boolean;
};
export const SideSheetTrigger = (props: SideSheetTriggerProps) => (
  <Dialog.Trigger asChild {...props} />
)

export const SideSheet = Dialog.Root;
