import { request } from "@/lib/request";
import type { TUser } from "@/types";

export const updateUser = async (data: TUser) => {
  return request<TUser>({
    method: "PATCH",
    url: `users/${data._id}/update`,
    data,
  });
};
