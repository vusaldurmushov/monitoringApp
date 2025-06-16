import { createReason } from "@/services/api/reasonApi/indexReason";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function usePostReason() {
  return useMutation({
    mutationFn: createReason,

    onSuccess: async () => {
      toast.success("Posted reason successfully!");
    },
  });
}
