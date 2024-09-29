import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCafe, updateCafe, deleteCafe } from '../api/cafeApi.js';
import { toast } from 'react-hot-toast';

export const useCreateCafe = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newCafe) => createCafe(newCafe),
    onMutate: () => {},
    onError: (error) => {
      console.log(error);
      toast.error('Failed to create cafe.');
    },
    onSuccess: () => {
      toast.success('Cafe created successfully!');
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ['cafes'] });
    },
  });
};

export const useUpdateCafe = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (updatedCafe) => updateCafe(updatedCafe),
    onMutate: () => {},
    onError: (error) => {
      console.log(error);
      toast.error('Failed to update cafe.');
    },
    onSuccess: () => {
      toast.success('Cafe updated successfully!');
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ['cafes'] });
    },
  });
};

export const useDeleteCafe = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (cafeId) => deleteCafe(cafeId),
    onError: (error) => {
      console.log(error);
      toast.error('Failed to delete cafe.');
    },
    onSuccess: () => {
      toast.success('Cafe deleted successfully!');
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ['cafes'] });
    },
  });
};
