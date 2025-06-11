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
import {
  paginationController,
  tokenCreate,
  userLogin,
} from "../controllers/main.controller.js";
import { paginationMiddlewares } from "../middlewares/userPagination/paginationMiddleware.js";
import { fetchUsersMiddleware } from "../middlewares/userPagination/fetchUsersMiddleware.js";
import { getInfoToken } from "../controllers/getInfoToken.controller.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/getAllUsers", authenticateToken, getAllUsers);

router.get("/users/:id/edit", findUserfromDb);

router.get("/users/token", getInfoToken);

// router.post("/createUser",  upload.single("profileImage"),validate(postSchema), createUser);

router.post("/login", userLogin);

router.post("/token", tokenCreate);

router.post("/createUser", validate(postSchema), createUser);

router.patch("/users/:id/update", changeData);

router.delete("/users/:id/deleteUser", deleteUser);

// for pagination
router.get(
  "/users",
  authenticateToken,
  fetchUsersMiddleware,
  paginationMiddlewares,
  paginationController
);

export default router;
