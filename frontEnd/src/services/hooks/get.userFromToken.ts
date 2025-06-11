import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { getUserByToken } from "@/services/api/userApi/getUserByToken";
import { userKeys } from "@/services/queries/user.queryKeys";
import type { TUser } from "@/types";

export const GetUserFromToken = (): UseQueryResult<TUser> => {
  return useQuery({
    queryKey: userKeys.byToken,
    queryFn: () => getUserByToken(),
  });
};
