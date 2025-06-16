import { reasonForNotUsingDb } from "../config/reasonForNotUsing.js";

// POST
export const addReasonForNotUsingDb = async (reason) => {
  return await reasonForNotUsingDb.insert(reason);
};

// UPDATE
export const updateReasonForNotUsingDb = async (id, reasonUpdateInfo) => {
  return await reasonForNotUsingDb.update(
    { _id: id },
    { $set: reasonUpdateInfo }
  );
};

// GET

export const findReasonDb = async (id) => {
  return await reasonForNotUsingDb.findOne({ _id: id });
};

// DELETE

export const deleteReasonDb = async (id) => {
  return await reasonForNotUsingDb.remove({ _id: id });
};
