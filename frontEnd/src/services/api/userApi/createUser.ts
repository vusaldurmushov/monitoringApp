import { request } from "@/lib/request";
import type { TUser } from "@/types";

export const createUser = async (data: TUser) => {
  return request<TUser>({
    method: "POST",
    url: "createUser",
    data,
  });
};
