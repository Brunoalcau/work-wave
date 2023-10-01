import { render } from '@testing-library/react';
import { Text } from '../index'; // Importe o componente Text

test('renderiza o componente Text com as classes CSS corretas', () => {
  const { getByText } = render(
    <>
      <Text size="small">Small Text</Text>
      <Text size="medium">Medium Text</Text>
      <Text size="large">Large Text</Text>
    </>
  );

  const smallText = getByText('Small Text');
  const mediumText = getByText('Medium Text');
  const largeText = getByText('Large Text');

  expect(smallText).toHaveClass('text-white text-sm');
  expect(mediumText).toHaveClass('text-white text-md');
  expect(largeText).toHaveClass('text-white text-xl');
});