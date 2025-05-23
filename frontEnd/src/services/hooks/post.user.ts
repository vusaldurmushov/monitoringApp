import { createUser } from '@/services/api/user.api';
import { userKeys } from '@/services/queries/user.queryKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.all }); // Refresh user list
    },
    onError: (error) => {
      console.error("Create user failed:", error);
    }
  });
};