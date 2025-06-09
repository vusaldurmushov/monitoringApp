import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../api/userApi";

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["paginateUsers"],
      }); // refresh paginateUsers user list
    },
    onError: (error) => {
      console.error("Delete user failed:", error);
    },
  });
};
