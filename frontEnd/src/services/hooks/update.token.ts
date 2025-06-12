import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { updateToken } from "../api/updateToken";

export const useUpdateUser = () => {
  return useMutation({
    mutationFn: updateToken,

    onError: (error) => {
      console.error("Create user failed:", error);
      toast.error(
        `Create user failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      ); // Error toast
    },
  });
};
