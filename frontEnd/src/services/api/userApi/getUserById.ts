import { request } from "@/lib/request";
import type { TUser } from "@/types";

export const getUserById = async (id: string): Promise<TUser> => {
  return request<TUser>({
    method: "GET",
    url: `users/${id}/edit`,
  });
};
