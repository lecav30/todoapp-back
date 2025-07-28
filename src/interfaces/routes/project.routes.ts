import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import {
  createProject,
  getAllProjects,
  getProjectById,
} from "../controllers/ProjectController";

const router = Router();

router.post("/create", authMiddleware, createProject);
router.get("/getAll", authMiddleware, getAllProjects);
router.get("/:projectId", authMiddleware, getProjectById);

export default router;
