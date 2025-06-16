import { deleteReasonDb } from "../../models/reason.model.js";

export const deleteReason = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send("Id is required");
  }

  try {
    const numRemoved = await deleteReasonDb(id);
    if (numRemoved === 0) {
      return res.status(404).send("User not found");
    }

    res.status(200).send("User deleted successfully");
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send("Server error while deleting user");
  }
};
