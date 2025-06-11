import jwt from "jsonwebtoken";

export function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  console.log(authHeader, "authHeader");

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).send("No token provided");
  }
  const token = authHeader.split(" ")[1];
  console.log(token, "token");

  if (!token) return res.status(401).send("Token is required");

  jwt.verify(token, process.env.ACCESS_SECRET, (err) => {
    console.log(err);
    if (err) return res.status(401).send("Invalid or expired token");
    console.log("coorectWork");
    next();
  });
}
