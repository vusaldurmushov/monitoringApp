import { addUserDb, findUserDb } from "../models/user.model.js";

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
