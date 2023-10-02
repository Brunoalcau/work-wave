import { render } from '@testing-library/react';
import { Text } from '../index';

describe('Text Component', () => {
  test('Should render based on the provided properties', () => {
    const { getByText } = render(
      <Text size="small" color="primary">
        Example Text
      </Text>
    );

    const textElement = getByText('Example Text');
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveClass('text-white text-sm');
  });

  test('Should render correctly with different sizes', () => {
    const { getByText } = render(
      <>
        <Text size="small">Small</Text>
        <Text size="medium">Medium</Text>
        <Text size="large">Large</Text>
      </>
    );

    const smallText = getByText('Small');
    const mediumText = getByText('Medium');
    const largeText = getByText('Large');

    expect(smallText).toHaveClass('text-sm');
    expect(mediumText).toHaveClass('text-md');
    expect(largeText).toHaveClass('text-3xl');
  });

  test('Should render correctly with different colors', () => {
    const { getByText } = render(
      <>
        <Text color="primary">Primary</Text>
        <Text color="secondary">Secondary</Text>
        <Text color="invited">Invited</Text>
      </>
    );

    const primaryText = getByText('Primary');
    const secondaryText = getByText('Secondary');
    const invitedText = getByText('Invited');

    expect(primaryText).toHaveClass('text-white');
    expect(secondaryText).toHaveClass('text-gray-500');
    expect(invitedText).toHaveClass('text-back');
  });
});