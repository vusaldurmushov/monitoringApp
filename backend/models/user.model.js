import db from "../config/db.js";

export const addUserDb = async (userData) => {
  return await db.insert(userData);
};
