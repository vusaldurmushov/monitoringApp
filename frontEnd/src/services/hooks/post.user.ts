import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { createUser } from "../api/user.api";
import { userKeys } from "../queries/user.queryKeys";

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.all });
      toast.success("User created successfully!");
    },
    onError: (error) => {
      toast.error(
        `Create user failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    },
  });
};
