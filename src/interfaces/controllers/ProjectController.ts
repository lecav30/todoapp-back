import type { Request, Response } from "express";
import { addProject } from "../../application/project/addProject";
import { listProjects } from "../../application/project/listProjects";
import { findProject } from "../../application/project/findProject";

export async function createProject(req: Request, res: Response) {
  try {
    const { name, description } = req.body;
    const userId = (req as any).user.id; // from JWT
    const newProject = await addProject(name, description, userId);
    res.status(201).json({
      message: "Project created",
      project: newProject,
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export async function getAllProjects(req: Request, res: Response) {
  try {
    const userId = (req as any).user.id;
    const projects = await listProjects(userId);

    if (!projects) {
      return res.status(404).json({ error: "Projects not found" });
    }

    res.json(projects); // 200 by default
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export async function getProjectById(req: Request, res: Response) {
  try {
    const { projectId } = req.params; // get URL parameter
    const userId = (req as any).user.id;

    const project = await findProject(Number(projectId), userId);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.json(project);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
