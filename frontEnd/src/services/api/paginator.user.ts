import axios from "axios";

export const paginateUsers = async (page: number, limit: number) => {
  if (page < 1 || limit < 1) {
    throw new Error("Page and limit must be greater than 0");
  }

  try {
    const response = await axios(
      `http://localhost:3000/users?page=${page}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
  }
};
