import jwt from "jsonwebtoken";

export function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).send("No token provided");
  }
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).send("Token is required");

  jwt.verify(token, process.env.ACCESS_SECRET, (err) => {
    if (err) return res.status(403);
    next();
  });
}
