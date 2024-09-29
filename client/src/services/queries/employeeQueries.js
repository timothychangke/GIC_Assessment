import { useQuery } from '@tanstack/react-query';
import { getEmployeesByCafe } from '../api/employeeApi.js';

export const useGetEmployeesByCafe = (cafe = null) => {
  return useQuery({
    queryKey: ['employees', cafe],
    queryFn: () => getEmployeesByCafe(cafe),
    refetchOnWindowFocus: false,
  });
};

