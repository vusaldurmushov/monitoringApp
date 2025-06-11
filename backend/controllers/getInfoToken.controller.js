import jwt from "jsonwebtoken";
import { db } from "../config/userDb.js";

export const getInfoToken = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    console.log(authHeader, "testAuth");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).send("No token provided");
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
    const userId = decoded.id;
    console.log(decoded, "decoded");
    let user;

    try {
      user = await db.findOne({ _id: userId });
      console.log(user);
    } catch (error) {
      return res.status(500).send("Server dont work correctly");
    }

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    delete user.password;

    res.status(200).send(user);
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Invalid token" });
  }
};
