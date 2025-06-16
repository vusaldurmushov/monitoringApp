import { db } from "../../config/userDb.js";

export const fetchUsersMiddleware = async (req, res, next) => {
  try {
    const allUsers = await db.find({});
    req.model = allUsers;

    next();
  } catch (err) {
    next(err);
  }
};

