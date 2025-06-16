import { createReason } from "@/services/api/reasonApi/indexReason";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function usePostReason() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createReason,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["paginateReason"],
      });
      toast.success("Reason add successfully");
    },
    onError: (error) => {
      console.error("Delete reason failed:", error);
    },
  });
}
