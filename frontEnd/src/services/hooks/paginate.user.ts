import { useQuery } from "@tanstack/react-query";
import { paginateUsers } from "../api/paginator.user.ts";

export const usePaginateUser = (page = 1, limit = 10) => {
  return useQuery({
    queryKey: ["paginateUsers", page, limit],
    queryFn: () => paginateUsers(page, limit),
  });
};
