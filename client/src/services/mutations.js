import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCafe } from './api.js';

export const useCreateCafe = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (newCafe) => createCafe(newCafe),
    onMutate: () => {},
    onError: () => {},
    onSettled: async (_, error) => {
      if (error) {
        console.log(error)
      } else {
        await queryClient.invalidateQueries({queryKey: ['cafes']})
      }
    },
  });
};
