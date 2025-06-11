import { request } from "@/lib/request";
import type { TUser } from "@/types";

export const getUserByToken = async (jwt: string): Promise<TUser> => {
  
  return request<TUser>({
    method: "GET",
    url: `users/token`,
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
};
