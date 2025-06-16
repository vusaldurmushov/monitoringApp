import express from "express";
import { paginationController } from "../controllers/main.controller.js";
import { paginationMiddlewares } from "../middlewares/userPagination/paginationMiddleware.js";
import { fetchUsersMiddleware } from "../middlewares/userPagination/fetchUsersMiddleware.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get(
  "/users",
  authenticateToken,
  fetchUsersMiddleware,
  paginationMiddlewares,
  paginationController
);

export default router;
