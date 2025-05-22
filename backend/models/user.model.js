import db from "../config/db.js";

export const addUserDb = async (userData) => {
  return await db.insert(userData);
};

export const findUserDb = async (id) => {
  return await db.findOne({ _id:id });
};
