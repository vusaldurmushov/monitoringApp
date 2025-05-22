import { addUserDb } from "../models/user.model.js";

const createUser = async (req, res) => {
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

export default createUser;
