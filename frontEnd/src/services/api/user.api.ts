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


// Make sure to import your TUser type if not already

export const getUserById = async (id: string): Promise<TUser> => {
  try {
    const response = await axios.get<TUser>(`http://localhost:3000/users/${id}/edit`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "User not found");
    }
    throw new Error("An unknown error occurred");
  }
};



export const createUser = async (data: TUser) => {
  try {
    const response = await axios.post("http://localhost:3000/createUser", data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || error.message || "An unknown error occurred";
      throw new Error(message); // now the message can be used in `onError`
    }

    // fallback for non-Axios errors
    throw new Error("An unknown error occurred");
  }
};

export const deleteUser = async (id: string) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/users/${id}/deleteUser`
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
  }
};

export const updateUser = async (data: TUser) => {
  console.log(data, "data in updateUser function");

  if (!data._id) throw new Error("User ID is required to update");
  try {
    const response = await axios.patch(
      `http://localhost:3000/users/${data._id}/update`,
      data
    );
    console.log(response.data, "response.data in updateUser");
    return response.data;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
  }
};
