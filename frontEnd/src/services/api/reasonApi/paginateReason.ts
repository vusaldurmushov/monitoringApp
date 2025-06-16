import type { TPaginateData } from "@/components/MonitoringApp/Pages/Users/List/data-table";
import { request } from "@/lib/request";
import type { TReason } from "@/types";

export const paginateReason = async (
  page: number,
  limit: number
): Promise<TPaginateData<TReason>> => {
  return request({
    method: "GET",
    url: `reason?page=${page}&limit=${limit}`,
  });
};
