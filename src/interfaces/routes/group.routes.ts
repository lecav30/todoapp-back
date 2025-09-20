import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import {
  createGroup,
  deleteGroupById,
  getGroupById,
  getGroupsByProjectId,
  updateGroupById,
} from "../controllers/GroupController";

const router = Router();

router.post("/create", authMiddleware, createGroup);
router.get("/getByProject/:projectId", authMiddleware, getGroupsByProjectId);
router.get("/:groupId", authMiddleware, getGroupById);
router.patch("/:groupId", authMiddleware, updateGroupById);
router.delete("/:groupId", authMiddleware, deleteGroupById);

export default router;
