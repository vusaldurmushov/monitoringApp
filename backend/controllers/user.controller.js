import db from "../config/db.js";
import { addUserDb, deleteDb, findUserDb } from "../models/user.model.js";

// add user to db
export const createUser = async (req, res) => {
  try {
    const newUser = await addUserDb(req.body);
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    if (error.errorType === "uniqueViolated") {
      return res.status(400).json({ error: "Username already exists" });
    }
    console.error("Create user failed:", error);
    res.status(500).json({ error: "Failed to connect user" });
  }
};

// findUser with id

export const findUserfromDb = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send("User ID is required");
  }

  try {
    const user = await findUserDb(id);

    if (!user) {
      return res.status(404).send("User not found!");
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).send("Internal server error");
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await db.find({}); // 👈 get ALL documents from the DB
    res.status(200).json(allUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Something went wrong!");
  }
};

// PATCH
export const changeData = async (req, res) => {
  const { id } = req.params;
  const usersUpdateInfo = req.body;

  if (!id) {
    return res.status(400).send("User ID not provided");
  }

  try {
    // Check for conflict with existing user (excluding current one)

    const conflictUser = await db.findOne({
      _id: { $ne: id },
      $or: [
        { username: usersUpdateInfo.username },
        { email: usersUpdateInfo.email },
      ],
    });

    if (conflictUser) {
      return res
        .status(400)
        .send("This username or email is already in use by another user");
    }

    // Update user
    const result = await db.update({ _id: id }, { $set: usersUpdateInfo });

    if (result === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    // Fetch updated user
    const updatedUser = await db.findOne({ _id: id });

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Failed to update user", error });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).send("User ID not provided");

  try {
    const numRemoved = deleteDb(id);
    if (numRemoved === 0) {
      return res.status(404).send("User not found");
    }

    res.status(200).send("User deleted successfully");
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send("Server error while deleting user");
  }
};
