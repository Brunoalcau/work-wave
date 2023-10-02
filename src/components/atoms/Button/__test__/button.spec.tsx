import { render } from '@testing-library/react';
import { Button } from '../ index';

describe('Button Component', () => {
  test('Should render with correct styles based on color property', () => {
    const { container } = render(<Button color="success">Success Button</Button>);
    const button = container.firstChild as HTMLElement;

    expect(button).toHaveClass('h-[38px] p-2 rounded-full px-6');

    expect(button).toHaveClass('bg-green-500/40 text-green-800');
  });

  test('Should render with correct styles for info color variant', () => {
    const { container } = render(<Button color="info">Info Button</Button>);
    const button = container.firstChild as HTMLElement;

    expect(button).toHaveClass('h-[38px] p-2 rounded-full px-6');

    expect(button).toHaveClass('bg-blue-500/40 text-blue-800');
  });
});