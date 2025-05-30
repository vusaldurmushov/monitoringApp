import express from "express";
import userRoutes from "./routes/user.routes.js";
import cors from "cors";
import jwt from "jsonwebtoken";
const app = express();
app.use(express.json());
app.use(cors());
app.options("*", cors());
app.use(userRoutes);

const users = [
  {
    id: 1,
    fullName: "Vusal Durmushov",
    username: "vusal.durmushov",
    password: "12345",
    admin: true,
  },
  {
    id: 2,
    fullName: "Abdul Kerim",
    username: "abdul.kerim",
    password: "1234",
    admin: true,
  },
];

const refreshTokens = [];

app.post("/api/refresh", (req, res) => {
  // take teh resfresh token from the user
  const refreshToken = req.body.token;
  // send error if there is no token or it's invalid

  if (!refreshToken) return res.status(402).send("You are not authenticated");
  if (!refreshTokens.includes(refreshToken)) {
    return res.status(403).send("Refresh token");
  }
  jwt.verify(refreshToken, "myRefreshSecretKey", (err, user) => {
    err && console.log(err);
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);
    refreshTokens.push(newRefreshToken);
    res
      .status(200)
      .json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
  });
  //  if everythig is ok , create new access token resfresh tokesn and send to user
});

const generateAccessToken = (user) => {
  return jwt.sign({ id: user.id, isAdmin: user.admin }, "mySecretKey", {
    expiresIn: "20s",
  });
};
const generateRefreshToken = (user) => {
  return jwt.sign({ id: user.id, isAdmin: user.admin }, "myRefreshSecretKey", {
    expiresIn: "7d",
  });
};

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    refreshTokens.push(refreshToken);

    res.json({
      username: user.username,
      admin: user.admin,
      accessToken,
      refreshToken
    });
  } else {
    res.status(400).send("User does not exist ");
  }
});

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, "mySecretKey", function (err, decoded) {
      if (err) {
        return res.status(403).send("Token is not valid");
      }
      req.user = decoded;
      console.log("🚀 ~ decoded:", decoded);
      next();
    });
  } else {
    res.status(401).send("You are not authenticated");
  }
};

app.delete("/api/users/:userId", verifyToken, (req, res) => {
  console.log("req.user", req.user);
  if (req.user.id === Number(req.params.userId) && req.user.isAdmin) {
    res.status(200).json("User has been deleted");
  } else {
    res.status(403).send("You are not allowed to delete");
  }
});

app.post("");

app.listen(3000, () => {
  console.log("Server is running on 3000 port");
});
