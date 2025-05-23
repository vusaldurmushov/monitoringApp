import express from "express";

import { validate } from "../middlewares/validate.js";
import {
  findUserfromDb,
  createUser,
  getAllUsers,
  changeData,
} from "../controllers/user.controller.js";
import { postSchema } from "../validation/user.validation.js";

const router = express.Router();

router.get("/getAllUsers", getAllUsers);

router.get("/users/:id/edit", findUserfromDb);

router.post("/createUser", validate(postSchema), createUser);

router.patch("/users/:id/edit", changeData)

export default router;
