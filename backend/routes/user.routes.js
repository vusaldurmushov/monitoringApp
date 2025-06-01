import express from "express";

import { validate } from "../middlewares/validate.js";
import {
  findUserfromDb,
  createUser,
  getAllUsers,
  changeData,
  deleteUser,
} from "../controllers/user.controller.js";
import { postSchema } from "../validation/user.validation.js";
import { tokenCreate, userLogin } from "../controllers/main.controller.js";

const router = express.Router();

router.get("/getAllUsers", getAllUsers);

router.get("/users/:id/edit", findUserfromDb);

// router.post("/createUser",  upload.single("profileImage"),validate(postSchema), createUser);

router.post("/login", userLogin);

router.post("/token", tokenCreate);

router.post("/createUser", validate(postSchema), createUser);

router.patch("/users/:id/update", changeData);

router.delete("/users/:id/deleteUser", deleteUser);

export default router;
