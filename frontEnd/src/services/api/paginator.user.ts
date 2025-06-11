import { request } from "@/lib/request";

export const paginateUsers = async (page: number, limit: number) => {
  return request({
    method: "GET",
    url: `users?page=${page}&limit=${limit}`,
  });
};
