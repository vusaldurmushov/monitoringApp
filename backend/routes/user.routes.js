import express from "express";
import { validate } from "../middlewares/validate.js";
import {
  createUser,
  getAllUsers,
  changeData,
  deleteUser,
  findUserfromDb,
} from "../controllers/user.controller.js";
import { postSchema } from "../validation/user.validation.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/getAllUsers", authenticateToken, getAllUsers);
router.get("/users/:id/edit", authenticateToken, findUserfromDb);
router.post("/createUser", authenticateToken, validate(postSchema), createUser);
router.patch("/users/:id/update", authenticateToken, changeData);
router.delete("/users/:id/deleteUser", authenticateToken, deleteUser);

export default router;
