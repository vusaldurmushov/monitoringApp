import express from "express";
import {
  addReason,
  deleteReason,
  getReason,
  updateReason,
} from "../controllers/reasonForNotUsing/index.js";
import { getReasonPaginationInfo } from "../controllers/reasonForNotUsing/getPagination.controller.js";
import { paginationMiddlewares } from "../middlewares/userPagination/paginationMiddleware.js";
import { paginationController } from "../controllers/paginator.controller.js";

const router = express.Router();

router.get("/getReasonForNotUsing/:id", getReason);
router.delete("/deleteReasonForNotUsing/:id", deleteReason);
router.patch("/reasonForNotUsing/update/:id", updateReason);
router.post("/reasonForNotUsing", addReason);

router.get(
  "/reason",
  getReasonPaginationInfo,
  paginationMiddlewares,
  paginationController
);

export default router;
