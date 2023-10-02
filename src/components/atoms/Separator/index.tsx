import * as SeparatorNative from '@radix-ui/react-separator';


export const Separator = () => (
  <SeparatorNative.Root
    className="bg-gray-200 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mt-2"
    decorative
    orientation="horizontal"
  />
)