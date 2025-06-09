import { request } from "@/lib/request";

type TLoginInfo = {
  username: string;
  password: string;
};

export const loginUser = async (loginInfo: TLoginInfo) => {
  return request<TLoginInfo>({
    method: "POST",
    url: "login",
    data: loginInfo,
  });
};
