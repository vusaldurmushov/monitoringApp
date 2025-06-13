import type { TPaginateData } from "@/components/MonitoringApp/Pages/Users/List/data-table";
import { request } from "@/lib/request";
import type { TUser } from "@/types";

export const paginateUsers = async (
  page: number,
  limit: number
): Promise<TPaginateData<TUser>> => {
  return request({
    method: "GET",
    url: `users?page=${page}&limit=${limit}`,
  });
};
