import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from '../api/employeeApi';
import { toast } from 'react-hot-toast';

export const useCreateEmployee = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newEmployee) => createEmployee(newEmployee),
    onMutate: () => {},
    onError: (error) => {
      console.log(error);
      toast.error('Failed to create employee.');
    },
    onSuccess: () => {
      toast.success('Employee created successfully!');
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ['employees'] });
    },
  });
};

export const useUpdateEmployee = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (updatedEmployee) => updateEmployee(updatedEmployee),
    onMutate: () => {},
    onError: (error) => {
      console.log(error);
      toast.error('Failed to update employee.');
    },
    onSuccess: () => {
      toast.success('Employee updated successfully!');
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ['employees'] });
    },
  });
};

export const useDeleteEmployee = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (employeeId) => deleteEmployee(employeeId),
    onError: (error) => {
      console.log(error);
      toast.error('Failed to delete employee.');
    },
    onSuccess: () => {
      toast.success('Employee deleted successfully!');
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ['employees'] });
    },
  });
};
