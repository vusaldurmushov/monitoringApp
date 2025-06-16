import express from "express";
import router from "./routes/index.route.js";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // your frontend's origin
    credentials: true, // allow cookies to be sent
  })
);
dotenv.config();
app.options(
  "*",
  cors({
    origin: "http://localhost:5173", // your frontend's origin
    credentials: true, // allow cookies to be sent
  })
);

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port`);
});
