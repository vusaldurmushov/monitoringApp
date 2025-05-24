import { userKeys } from '@/services/queries/user.queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser } from '../api/user.api';

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.all }); // refresh user list
    },
    onError: (error) => {
      console.error("Delete user failed:", error);
    }
  });
};