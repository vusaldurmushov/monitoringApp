import { findReasonDb } from "../../models/reason.model.js";

export const getReason = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).send("Id is required");
  }

  try {
    const reason = await findReasonDb(id);

    if (!reason) {
      return res.status(400).send("Can't find user");
    }

    res.status(200).send(reason);
  } catch (error) {
    console.error("Error updating user:", error);
    res
      .status(500)
      .json({ message: "Server error. Failed to find user", error });
  }
};
