import { request } from "@/lib/request";

export const updateToken = async () => {
  return request({
    method: "POST",
    url: "token",
  });
};
