import { useQuery } from "@tanstack/react-query";
import { userKeys } from "../queries/user.queryKeys";
import { getUserById } from "../api/userApi";

export const GetUser = (id: string) => {
  return useQuery({
    queryKey: userKeys.byId(id),
    queryFn: () => getUserById(id),
    enabled: !!id, // only runs if id is truthy
  });
};
