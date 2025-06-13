import express from "express";
import userRoutes from "./routes/user.routes.js";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { db } from "./config/userDb.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // your frontend's origin
    credentials: true, // allow cookies to be sent
  })
);
// app.use(cors());
dotenv.config();
app.options(
  "*",
  cors({
    origin: "http://localhost:5173", // your frontend's origin
    credentials: true, // allow cookies to be sent
  })
);

app.use(userRoutes);

const PORT = process.env.PORT || 3000;

// app.get("/users", async (req, res) => {
//   const allUsers = await db.find({});

//   const page = parseInt(req.query.page) || 1; // Default to page 1
//   const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page

//   const startIndex = (page - 1) * limit;
//   const endIndex = page * limit;
//   const paginatedUsers = allUsers.slice(startIndex, endIndex);

//   const result = {
//     page,
//     limit,
//     totalUsers: allUsers.length,
//     totalPages: Math.ceil(allUsers.length / limit),
//     data: paginatedUsers,
//   };

//   res.send(result);
// });

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`);
});
