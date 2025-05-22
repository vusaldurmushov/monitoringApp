import express from "express";
import userRoutes from "./routes/user.routes.js";

const app = express();
app.use(express.json());
app.use(userRoutes);

app.get("/", (req, res) => {
  res.send("Get services is !");
});

app.listen(3000, () => {
  console.log("Server is running on 3000 port");
});
