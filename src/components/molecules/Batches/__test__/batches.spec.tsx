
import { render } from '@testing-library/react';
import { Batches } from '..';
import { splitIntoBatches } from '../../../../api/splitIntoBatches';
import { Batch } from '../../../../entities/Batch';
import { BatchDetails } from '../../../organisms/BatchDetails';


jest.mock('../../../organisms/BatchDetails', () => ({
  BatchDetails: jest.fn(() => null), // Mock BatchDetails component to avoid rendering in tests
}));

describe('Batches Component', () => {
  test('renders Batches component with correct data and triggers', () => {
    const mockData: Batch[] = splitIntoBatches([
      { ID: 1, description: 'Job 1', maxDate: '2023-10-03T00:00:01z', estimatedTime: 5 },
      { ID: 2, description: 'Job 2', maxDate: '2023-10-03T00:00:01z', estimatedTime: 5 },
      { ID: 3, description: 'Job 3', maxDate: '2023-10-03T00:00:01z', estimatedTime: 5 },
      { ID: 4, description: 'Job 4', maxDate: '2023-10-03T00:00:01z', estimatedTime: 5 },
      { ID: 5, description: 'Job 5', maxDate: '2023-10-03T00:00:01z', estimatedTime: 5 },
      { ID: 6, description: 'Job 6', maxDate: '2023-10-03T00:00:01z', estimatedTime: 5 },
  ]);

    render(<Batches data={mockData} />);

    // Check if BatchDetails component is called for each data item
    mockData.forEach((batch, index) => {
      expect(BatchDetails).toHaveBeenCalledWith(
        {
          data: batch,
          title: `###${index + 1}`,
          trigger: expect.any(Object), // You can further test properties of the trigger component if needed
        },
        {}
      );
    });
  });
});