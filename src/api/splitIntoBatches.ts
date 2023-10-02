
import { Batch } from "../entities/Batch";
import { Job } from "../entities/Job";



function sortJobsByCompletionDate(jobs: Job[]): Job[] {
  return jobs.sort((a, b) => new Date(a.maxDate).getTime() - new Date(b.maxDate).getTime());
}

function splitIntoBatches(jobs: Job[] | null | undefined): Batch[] {
  if (!jobs || jobs.length === 0) {
    return []; 
  }

  const sortedJobs: Job[] = sortJobsByCompletionDate(jobs);
  const batches: Batch[] = [];
  let currentBatch: Batch = [];
  let totalDuration: number = 0;

  for (const job of sortedJobs) {
    if (new Date(job.maxDate) >= new Date()) {
      if (totalDuration + job.estimatedTime <= 8) {
        currentBatch.push(job);
        totalDuration += job.estimatedTime;
      } else {
        batches.push(currentBatch);
        currentBatch = [job];
        totalDuration = job.estimatedTime;
      }
    }
  }
  
  if (currentBatch.length > 0) {
    batches.push(currentBatch);
  }

  return batches;
}

export { splitIntoBatches, type Batch };

