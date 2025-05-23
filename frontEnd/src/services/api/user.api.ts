import type { TUser } from "@/types";
import axios from "axios";

export const getAllUsers = async (): Promise<TUser[]> => {
  try {
    const response = await fetch("http://localhost:3000/getAllUsers");
    return await response.json();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
  }
};

export const createUser = async (data: TUser) => {
  const response = await axios.post("http://localhost:3000/createUser", data);
  return response.data;
};
