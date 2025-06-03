import axios, { AxiosError } from "axios";

type TLoginInfo = {
  username: string;
  password: string;
};

export const loginUser = async (loginInfo: TLoginInfo) => {
  console.log(loginInfo);
  if (!loginInfo) throw new Error("Login info is required");

  try {
    const response = await axios.post("http://localhost:3000/login", loginInfo);
    return response;
  } catch (error) {
    const axiosError = error as AxiosError;

    const message =
      axiosError.response?.data && typeof axiosError.response.data === "string"
        ? axiosError.response.data
        : "An unknown error occurred";

    throw new Error(message);
  }
};
