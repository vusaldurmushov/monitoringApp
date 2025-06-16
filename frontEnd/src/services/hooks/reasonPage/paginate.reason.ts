import { useQuery } from "@tanstack/react-query";
import type { TReason } from "@/types.ts";
import type { TPaginateData } from "@/components/MonitoringApp/Pages/Users/List/data-table.tsx";
import { paginateReason } from "@/services/api/reasonApi/paginateReason";

export const usePaginateReason = (page = 1, limit = 5) => {
  return useQuery<TPaginateData<TReason>>({
    queryKey: ["paginateReason", page, limit],
    queryFn: () => paginateReason(page, limit),
  });
};
