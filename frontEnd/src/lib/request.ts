import { toast } from "react-toastify";
import api from "./axios";
import axios, { type AxiosRequestConfig } from "axios";

export const request = async <T>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const response = await api.request<T>(config);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data || error.message || "An unknown error occurred";
      toast.error(message);

      throw new Error(message || "User not found");
    }
    throw new Error("An unknown error occurred");
  }
};
