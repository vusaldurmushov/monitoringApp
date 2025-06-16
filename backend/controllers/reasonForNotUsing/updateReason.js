import { updateReasonForNotUsingDb } from "../../models/reason.model.js";
import { DateForCreated } from "../../utils/dateForCreated.js";

export const updateReason = async (req, res) => {
  const { reason } = req.body;

  const { id } = req.params;

  if (!id) {
    return res.status(400).send("Id is required");
  }

  if (!reason) {
    return res.status(400).send("You must add the reason for not using");
  }

  const updateReason = {
    ...req.body,
    dateForUpdate: DateForCreated(),
  };

  try {
    const result = await updateReasonForNotUsingDb(id, updateReason);

    if (result === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).send("User update successfully");
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Failed to update user", error });
  }
};
