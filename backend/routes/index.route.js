import express from "express";
import userRoutes from "./user.routes.js";
import authRoutes from "./auth.routes.js";
import reasonRoutes from "./reason.routes.js";
import paginationRoutes from "./pagination.route.js";

const router = express.Router();

router.use(userRoutes);
router.use(authRoutes);
router.use(paginationRoutes);
router.use(reasonRoutes);

export default router;
