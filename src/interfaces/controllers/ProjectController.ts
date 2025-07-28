import type { Request, Response } from "express";
import { addProject } from "../../application/project/addProject";

export async function createProject(req: Request, res: Response) {
  try {
    const { name, description } = req.body;
    const userId = (req as any).user.id; // from JWT
    const newProject = await addProject(name, description, userId);
    res.status(201).json({ message: "Project created", project: newProject });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
