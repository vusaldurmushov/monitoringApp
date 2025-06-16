import { reasonForNotUsingDb } from "../../config/reasonForNotUsing.js";

export const getReasonPaginationInfo = async (req, res, next) => {
  try {
    const allUsers = await reasonForNotUsingDb.find({});

    req.model = allUsers;
    next();
  } catch (error) {
    res.status(500).send("Server error");
    next(error);
  }
};
