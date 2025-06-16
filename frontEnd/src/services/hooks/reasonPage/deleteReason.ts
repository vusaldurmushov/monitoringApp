import { deleteReason } from "@/services/api/reasonApi/indexReason.js";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function useDeleteReason() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteReason,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["paginateReason"],
      });
      toast.success("Reason removed successfully");
    },
    onError: (error) => {
      console.error("Delete reason failed:", error);
    },
  });
}
