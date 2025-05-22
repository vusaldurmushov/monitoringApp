import express from "express";

import { validate } from "../middlewares/validate.js";
import { findUserfromDb, createUser } from "../controllers/user.controller.js";
import { postSchema } from "../validation/user.validation.js";

const router = express.Router();
router.post("/createUser", validate(postSchema), createUser);

router.get("/users/:id/edit", findUserfromDb);

export default router;
