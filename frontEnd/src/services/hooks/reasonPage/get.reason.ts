import { getReason } from "@/services/api/reasonApi/indexReason.js";
import { useQuery } from "@tanstack/react-query";

export const useGetReason = () => {
  return useQuery({
    queryKey: ["getReasons"],
    queryFn: getReason,
  });
};
