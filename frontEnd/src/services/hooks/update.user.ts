import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../api/userApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  return useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["paginateUsers"],
      }); // Refresh user list
      toast.success("User update successfully!");
      navigate("/userlist"); // Redirect to user list
      // Success toast
    },
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
