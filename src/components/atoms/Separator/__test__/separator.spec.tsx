import { render } from '@testing-library/react';
import { Separator } from '../index';

test('renders Separator component', () => {
  const { container } = render(<Separator />);
  const separator = container.firstChild as HTMLElement;

  expect(separator).toBeInTheDocument();

  expect(separator).toHaveClass('bg-gray-200 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mt-2');
});