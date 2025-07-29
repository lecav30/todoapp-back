import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import {
  createTask,
  getTaskById,
  getTasksByGroup,
} from "../controllers/TaskController";

const router = Router();

router.post("/create", authMiddleware, createTask);
router.get("/getByGroup/:groupId", authMiddleware, getTasksByGroup);
router.get("/:taskId", authMiddleware, getTaskById);

export default router;
