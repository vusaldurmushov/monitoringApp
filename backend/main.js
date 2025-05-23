import express from "express";
import userRoutes from "./routes/user.routes.js";
import db from "./config/db.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.options("*", cors());
app.use(userRoutes);

app.listen(3000, () => {
  console.log("Server is running on 3000 port");
});
