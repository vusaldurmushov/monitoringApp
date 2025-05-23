import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../api/user.api";
import { userKeys } from "../queries/user.queryKeys";

export const useUsers = () => {
  return useQuery({
    queryKey: userKeys.all,
    queryFn: getAllUsers,
  });
};
