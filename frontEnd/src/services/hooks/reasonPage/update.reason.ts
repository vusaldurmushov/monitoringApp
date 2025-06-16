import { updateReason } from "@/services/api/reasonApi/indexReason.js";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useUpdateReason = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: updateReason,

    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: ["paginateReason"],
      });
      navigate("/reasonForNotUsing");
      toast.success("Updated reason successfully!");
    },
    onError: (error) => {
      console.error("Update reason failed:", error);
      toast.error("Failed to update reason");
    },
  });
};
