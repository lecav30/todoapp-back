import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { createProject } from "../controllers/ProjectController";

const router = Router();

router.post("/createProject", authMiddleware, createProject);

export default router;
