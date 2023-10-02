import { faker } from '@faker-js/faker';
import { Job } from '../../entities/Job';


export function generateRandomJobs(): Job[] {
  const data: Job[] = [
      { ID: 1, description: 'Job 1', maxDate: '2023-10-03T00:00:01z', estimatedTime: 5 },
      { ID: 2, description: 'Job 2', maxDate: '2023-10-03T00:00:01z', estimatedTime: 5 },
      { ID: 3, description: 'Job 3', maxDate: '2023-10-03T00:00:01z', estimatedTime: 5 },
      { ID: 4, description: 'Job 4', maxDate: '2023-10-03T00:00:01z', estimatedTime: 5 },
      { ID: 5, description: 'Job 5', maxDate: '2023-10-03T00:00:01z', estimatedTime: 5 },
      { ID: 6, description: 'Job 6', maxDate: '2023-10-03T00:00:01z', estimatedTime: 5 },
  ];

  const randomData: Job[] = Array.from({ length: 100 }, (_, index) => ({
      ID: index + 7,
      description: faker.name.jobTitle(),
      maxDate: '2023-10-03T00:00:01z',
      estimatedTime: faker.number.int({ min:1, max:10 })
  }));

  const combinedData: Job[] = [...data, ...randomData];

  // Embaralhar os dados combinados
  for (let i = combinedData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [combinedData[i], combinedData[j]] = [combinedData[j], combinedData[i]];
  }

  return combinedData;
}