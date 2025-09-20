import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import {
  createTask,
  getTaskById,
  getTasksByGroup,
  toggleTaskCompletion,
  updateTaskById,
} from "../controllers/TaskController";

const router = Router();

router.post("/create", authMiddleware, createTask);
router.get("/getByGroup/:groupId", authMiddleware, getTasksByGroup);
router.get("/:taskId", authMiddleware, getTaskById);
router.patch("/:taskId", authMiddleware, updateTaskById);
router.patch("/:taskId/toggleCompletion", authMiddleware, toggleTaskCompletion);

export default router;
