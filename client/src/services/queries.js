import { useQuery } from '@tanstack/react-query';
import { getCafesByLocation } from './api.js';

export const useGetCafesByLocation = (location = null) => {
  return useQuery({
    queryKey: ['cafes', location], 
    queryFn: () => getCafesByLocation(location),
    refetchOnWindowFocus: false,
  });
};
