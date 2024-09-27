import { useMutation } from '@tanstack/react-query';
import { createCafe } from './api.js';

export const useCreateCafe = () => {
  return useMutation({
    mutationFn: (newCafe) => createCafe(newCafe),
    onMutate: () => {},
    onError: () => {},
    onSettled: () => {},
  });
};
