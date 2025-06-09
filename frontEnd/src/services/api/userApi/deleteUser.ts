import { request } from "@/lib/request";
import type { TUser } from "@/types";

export const deleteUser = async (id: string) => {
  return request<TUser>({
    method: "DELETE",
    url: `users/${id}/deleteUser`,
  });
};
