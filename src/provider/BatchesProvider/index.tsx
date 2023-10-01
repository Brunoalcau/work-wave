import { Batch, splitIntoBatches } from '../../api/splitIntoBatches';
import { Job } from '../../entities/Job';

import { Dispatch, FC, ReactNode, createContext, useContext, useState } from 'react';
type BatchesContextProps = {
  jobs: Job[];
  batches: Batch[];
  updateJobs: Dispatch<Job[]>;
};

const BatchesContext = createContext<BatchesContextProps | undefined>(undefined);

type BatchesProviderProps = {
  children: ReactNode;
};

const BatchesProvider: FC<BatchesProviderProps> = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [batches, setBatches] = useState<Batch[]>([]);
  
  const updateJobs = (newJobs: Job[]) => {
    setJobs(newJobs);
    const newBatches = splitIntoBatches(newJobs); 
    setBatches(newBatches);
  };

  const contextValue: BatchesContextProps = {
    jobs,
    batches,
    updateJobs,
  };

  return <BatchesContext.Provider value={contextValue}>{children}</BatchesContext.Provider>;
};


const useBatches = (): BatchesContextProps => {
  const context = useContext(BatchesContext);
  if (!context) {
    throw new Error('useBatches must be used within a BatchesProvider');
  }
  return context;
};


export { BatchesProvider, useBatches };
