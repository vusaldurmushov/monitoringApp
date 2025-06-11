import { request } from "@/lib/request";

export const paginateUsers = async (page: number, limit: number) => {
  const jwt = localStorage.getItem("accessToken");
  return request({
    method: "GET",
    url: `users?page=${page}&limit=${limit}`,
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};
