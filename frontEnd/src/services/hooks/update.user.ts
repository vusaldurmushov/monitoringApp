import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userKeys } from "../queries/user.queryKeys";
import { updateUser } from "../api/user.api";
import { toast } from "sonner";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUser,
   onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: userKeys.all }); // Refresh user list
    toast.success("User created successfully!"); // Success toast
  },
  onError: (error) => {
    console.error("Create user failed:", error);
    toast.error(`Create user failed: ${error instanceof Error ? error.message : 'Unknown error'}`); // Error toast
  }
  });
};
