import moment from "moment";
import { Job } from "../entities/Job";
import { splitIntoBatches } from "./splitIntoBatches";

describe('run job forecats', () => {
  test('must divide jobs into batches correctly', () => {
    const jobs: Job[] = [
      {
        ID: 1,
        description: 'Job 1',
        maxDate: moment().add(1, 'd').format('YYYY-MM-DDTHH:MM:SSZ'),
        estimatedTime: 4,
      },
      {
        ID: 2,
        description: 'Job 2',
        maxDate: moment().add(1, 'd').format('YYYY-MM-DDTHH:MM:SSZ'),
        estimatedTime: 2,
      },
    ];

    const batches = splitIntoBatches(jobs)
    expect(batches).toHaveLength(1);
  });

  test('must divide jobs into batches two', () => {
    const jobs: Job[] = [
      {
        ID: 1,
        description: 'Job 1',
        maxDate: moment().add(1, 'd').format('YYYY-MM-DDTHH:mm:ssZ'),
        estimatedTime: 4,
      },
      {
        ID: 2,
        description: 'Job 2',
        maxDate: moment().add(1, 'd').format('YYYY-MM-DDTHH:mm:ssZ'),
        estimatedTime: 4,
      },
      {
        ID: 3,
        description: 'Job 2',
        maxDate: moment().add(3, 'd').format('YYYY-MM-DDTHH:mm:ssZ'),
        estimatedTime: 7,
      }
    ];
    console.log(jobs);
    const batches = splitIntoBatches(jobs)

    expect(batches).toHaveLength(2);
  });
  
  test('not even one job was passed', () => {
    const jobs: Job[] | null = null;

    const batches = splitIntoBatches(jobs)
    expect(batches).toHaveLength(0);
  });
});