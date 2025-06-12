import { tokenDB } from "../config/tokenDb.js";
import jwt from "jsonwebtoken";
export const tokenUpdate = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  console.log(refreshToken, "refreshToken Update");
  if (!refreshToken) return res.status(401).send("refresh token is not found");

  let tokenDb;

  try {
    tokenDb = await tokenDB.findOne({ token: refreshToken });
    console.log("🚀 ~ tokenUpdate ~ tokenDb:", tokenDb);
  } catch (error) {
    console.error("Database error:", error);
    return res.status(500).send({ error: "Internal server error" });
  }

  if (!tokenDb) return res.status(403).send("cant find token from db ");

  try {
    const userData = jwt.verify(refreshToken, process.env.REFRESH_SECRET);
    console.log("🚀 ~ tokenUpdate ~ userData:", userData)

    const newAccessToken = jwt.sign(
      { id: userData.id, email: userData.email },
      process.env.ACCESS_SECRET,
      { expiresIn: "15m" }
    );

    console.log(newAccessToken,'newAccessToken');
    res
      .status(201)
      .send({ message: "New accessToken is created", newAccessToken });
  } catch (error) {
    console.error("Server can't create newAccessToken", error);
  }
};
