import express from "express";
import { userLogin, tokenUpdate } from "../controllers/main.controller.js";
import { getInfoToken } from "../controllers/getInfoToken.controller.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/login", userLogin);
router.post("/token", tokenUpdate);
router.get("/users/token", authenticateToken, getInfoToken);

export default router;
