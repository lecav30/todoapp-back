import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import {
  createGroup,
  getGroupById,
  getGroupsByProjectId,
} from "../controllers/GroupController";

const router = Router();

router.post("/create", authMiddleware, createGroup);
router.get("/getByProject/:projectId", authMiddleware, getGroupsByProjectId);
router.get("/:groupId", authMiddleware, getGroupById);

export default router;
