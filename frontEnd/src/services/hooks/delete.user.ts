import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../api/userApi";
import { toast } from "react-toastify";

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["paginateUsers"],
      });
      toast.success("User remove successfully");
    },
    onError: (error) => {
      console.error("Delete user failed:", error);
    },
  });
};
