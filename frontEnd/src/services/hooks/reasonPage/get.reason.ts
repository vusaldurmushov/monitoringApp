import { getReason } from "@/services/api/reasonApi/indexReason.js";
import { reasonKeys } from "@/services/queries/reason.queryKey";
import { useQuery } from "@tanstack/react-query";

export const useGetReason = (id: string) => {
  return useQuery({
    queryKey: reasonKeys.byId(id),
    queryFn: () => getReason(id),
    enabled: !!id,
  });
};
