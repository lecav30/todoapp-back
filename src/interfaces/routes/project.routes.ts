import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import {
  createProject,
  getProjectById,
  getProjectsByUser,
} from "../controllers/ProjectController";

const router = Router();

router.post("/create", authMiddleware, createProject);
router.get("/getByUser", authMiddleware, getProjectsByUser);
router.get("/:projectId", authMiddleware, getProjectById);

export default router;
