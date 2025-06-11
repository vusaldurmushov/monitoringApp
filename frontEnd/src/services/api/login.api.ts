import { request } from "@/lib/request";

export type TLoginInfo = {
  accessToken: string;
  user: {
    id: string;
    email: string;
    name: string;
    username: string;
  };
};

export const loginUser = async (loginInfo: TLoginInfo) => {
  return request<TLoginInfo>({
    method: "POST",
    url: "login",
    data: loginInfo,
  });
};
