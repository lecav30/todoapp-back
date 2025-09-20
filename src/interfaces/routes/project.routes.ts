import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import {
  createProject,
  deleteProjectById,
  getProjectById,
  getProjectsByUser,
  updateProjectById,
} from "../controllers/ProjectController";

const router = Router();

router.post("/create", authMiddleware, createProject);
router.get("/getByUser", authMiddleware, getProjectsByUser);
router.get("/:projectId", authMiddleware, getProjectById);
router.patch("/:projectId", authMiddleware, updateProjectById);
router.delete("/:projectId", authMiddleware, deleteProjectById);

export default router;
