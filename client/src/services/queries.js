import { useQuery } from '@tanstack/react-query';
import { getCafesByLocation } from './api.js';

export const useGetCafesByLocation = () => {
  return useQuery({
    queryKey: ['cafes'], 
    queryFn: getCafesByLocation,
    refetchOnWindowFocus: false,
  });
};
