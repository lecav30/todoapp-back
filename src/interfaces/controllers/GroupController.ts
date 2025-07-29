import type { Request, Response } from "express";
import { addGroup } from "../../application/group/addGroup";
import { listGroupsByProjectId } from "../../application/group/listGroupsByProjectId";
import { findGroup } from "../../application/group/findGroup";

export async function createGroup(req: Request, res: Response) {
  try {
    const { name, description, projectId } = req.body;
    const newGroup = await addGroup(name, description, projectId);
    res.status(201).json({
      message: "Project created",
      project: newGroup,
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export async function getGroupsByProjectId(req: Request, res: Response) {
  try {
    const { projectId } = req.params; // get URL parameter

    const groups = await listGroupsByProjectId(Number(projectId));
    if (!groups) {
      return res.status(404).json({ error: "Groups not found" });
    }

    res.json(groups); // 200 by default
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export async function getGroupById(req: Request, res: Response) {
  try {
    const { groupId } = req.params; // get URL parameter

    const group = await findGroup(Number(groupId));
    if (!group) {
      return res.status(404).json({ error: "Group not found" });
    }

    res.json(group);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
