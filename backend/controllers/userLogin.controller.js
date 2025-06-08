import { db } from "../config/userDb.js";
import bcrypt from "bcrypt";
import { tokenDB } from "../config/tokenDb.js";
import jwt from "jsonwebtoken";

export const userLogin = async (req, res) => {
  const { username, password } = req.body;

  const user = await db.findOne({ username });

  if (!user) {
    return res.status(400).send("We can't find this user!");
  }

  if (!user.username || !(await bcrypt.compare(password, user.password)))
    return res.status(400).send({ error: "Invalid credentials" });

  const payload = { id: user._id, email: user.email };

  const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET, {
    expiresIn: "15s",
  });
  const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET, {
    expiresIn: "30d",
  });

  await tokenDB.insert({ token: refreshToken });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true, // true if using HTTPS
    sameSite: "Strict",
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });

  // 6. Send access token + user data in response
  res.json({
    accessToken,
    user: {
      id: user._id,
      email: user.email,
      name: user.name,
    },
  });
};
