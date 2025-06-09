import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { createUser } from "../api/userApi";
import type { FieldValues, UseFormReturn } from "react-hook-form";

interface UseCreateUserOptions<T extends FieldValues> {
  methods?: UseFormReturn<T>;
}

export const useCreateUser = <T extends FieldValues = FieldValues>(
  options?: UseCreateUserOptions<T>
) => {
  const { methods } = options || {};
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["paginateUsers"],
      });
      toast.success("User created successfully!");
      if (methods?.reset) {
        methods.reset();
      }
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
