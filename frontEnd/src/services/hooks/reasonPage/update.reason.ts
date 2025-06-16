import { updateReason } from "@/services/api/reasonApi/indexReason.js";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useUpdateReason = () => {
  return useMutation({
    mutationFn: updateReason,
    onSuccess: async () => {
      toast.success("Updated reason successfully!");
    }, 
    onError: (error) => {
      console.error("Update reason failed:", error);
      toast.error("Failed to update reason");
    },
  }); 
};
