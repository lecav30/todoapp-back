import type { Request, Response } from "express";
import { addGroup } from "../../application/group/addGroup";
import { listGroupsByProjectId } from "../../application/group/listGroupsByProjectId";
import { findGroup } from "../../application/group/findGroup";
import { updateGroup } from "../../application/group/updateGroup";
import { deleteGroup } from "../../application/group/deleteGroup";

export async function createGroup(req: Request, res: Response) {
  try {
    const { name, description, projectId } = req.body;
    const newGroup = await addGroup(name, description, projectId);
    res.status(201).json({
      message: "Group created",
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

export async function updateGroupById(req: Request, res: Response) {
  try {
    const { groupId } = req.params; // get URL parameter

    const haveBeenUpdated = await updateGroup(Number(groupId), req.body);

    if (haveBeenUpdated === 0) {
      return res.status(404).json({ error: "Group not found" });
    }

    const updatedGroup = await findGroup(Number(groupId));

    res.status(200).json({
      message: "Group updated",
      group: updatedGroup,
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export async function deleteGroupById(req: Request, res: Response) {
  try {
    const { groupId } = req.params;

    const group = await findGroup(Number(groupId));
    if (!group) {
      return res.status(404).json({ error: "Group not found" });
    }

    const haveBeenDeleted = await deleteGroup(Number(groupId));

    if (haveBeenDeleted === 0) {
      return res.status(404).json({ error: "Group not found" });
    }

    res.status(200).json({
      message: "Group deleted",
      group: group,
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
