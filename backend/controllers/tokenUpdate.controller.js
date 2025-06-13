import { tokenDB } from "../config/tokenDb.js";
import jwt from "jsonwebtoken";
export const tokenUpdate = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.status(401).send("refresh token is not found");

  let tokenDb;

  try {
    tokenDb = await tokenDB.findOne({ token: refreshToken });
  } catch (error) {
    return res.status(500).send({ error: "Internal server error" });
  }

  if (!tokenDb) return res.status(403).send("cant find token from db ");

  try {
    const userData = jwt.verify(refreshToken, process.env.REFRESH_SECRET);

    const newAccessToken = jwt.sign(
      { id: userData.id, email: userData.email },
      process.env.ACCESS_SECRET,
      { expiresIn: "15m" }
    );

    res
      .status(201)
      .send({ message: "New accessToken is created", newAccessToken });
  } catch (error) {
    console.error("Server can't create newAccessToken", error);
  }
};
