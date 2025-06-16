import { db } from "../config/userDb.js";
import {
  addUserDb,
  conflictDb,
  deleteDb,
  findUserDb,
  updateUserDb,
} from "../models/user.model.js";
import bcrypt from "bcrypt";

// add user to db
export const createUser = async (req, res) => {
  const { password } = req.body;
  try {
    const now = new Date();

    const dateForCreated = now
      .toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
      .replace(/\//g, ".");

    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = {
      ...req.body,
      password: hashedPassword,
      dateForCreated,
    };
    delete userData.confirmPassword;

    let newUser;

    try {
      newUser = await addUserDb(userData);
    } catch (error) {
      return res.status(500).send("Server problem!");
    }

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    if (error.errorType === "uniqueViolated") {
      return res
        .status(400)
        .json({ success: false, message: "Username or email already exists" });
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

    res.status(200).send(user);
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
  const now = new Date();
  const { id } = req.params;
  const usersUpdateInfo = {
    ...req.body,
    dateForUpdate: now
      .toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
      .replace(/\//g, "."), // set updated timestamp
  };
  if (!id) {
    return res.status(400).send("User ID not provided");
  }

  try {
    // Update user
    const result = await updateUserDb(id, usersUpdateInfo);


    if (result === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    // Fetch updated user
    const updatedUser = await findUserDb(id);

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Failed to update user", error });
  }
};

// DeleteUser

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
