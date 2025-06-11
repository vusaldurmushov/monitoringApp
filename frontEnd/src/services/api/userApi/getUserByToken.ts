import { request } from "@/lib/request";
import type { TUser } from "@/types";

export const getUserByToken = async (): Promise<TUser> => {
  return request<TUser>({
    method: "GET",
    url: `users/token`,
  });
};
