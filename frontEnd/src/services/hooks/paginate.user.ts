import { useQuery } from "@tanstack/react-query";
import { paginateUsers } from "../api/paginator.user.ts";
import type { TUser } from "@/types.ts";
import type { TPaginateData } from "@/components/MonitoringApp/Pages/Users/List/data-table.tsx";

export const usePaginateUser = (page = 1, limit = 5) => {
  return useQuery<TPaginateData<TUser>>({
    queryKey: ["paginateUsers", page, limit],
    queryFn: () => paginateUsers(page, limit),
  });
};
