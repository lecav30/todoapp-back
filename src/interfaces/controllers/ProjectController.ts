import type { Request, Response } from "express";
import { addProject } from "../../application/project/addProject";
import { listProjectsByUser } from "../../application/project/listProjectsByUser";
import { findProject } from "../../application/project/findProject";
import { updateProject } from "../../application/project/updateProject";
import { deleteProject } from "../../application/project/deleteProject";

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

export async function getProjectsByUser(req: Request, res: Response) {
  try {
    const userId = (req as any).user.id;
    const projects = await listProjectsByUser(userId);

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

    const project = await findProject(Number(projectId));
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.json(project);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export async function updateProjectById(req: Request, res: Response) {
  try {
    const { projectId } = req.params; // get URL parameter

    const haveBeenUpdated = await updateProject(Number(projectId), req.body);

    if (haveBeenUpdated === 0) {
      return res.status(404).json({ error: "Project not found" });
    }

    const updatedProject = await findProject(Number(projectId));

    res.status(200).json({
      message: "Project updated",
      project: updatedProject,
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export async function deleteProjectById(req: Request, res: Response) {
  try {
    const { projectId } = req.params;

    const project = await findProject(Number(projectId));
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    const haveBeenDeleted = await deleteProject(Number(projectId));

    if (haveBeenDeleted === 0) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.status(200).json({
      message: "Project deleted",
      project: project,
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
