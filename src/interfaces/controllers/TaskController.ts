import type { Request, Response } from "express";
import { addTask } from "../../application/task/addTask";
import { listTasksByGroup } from "../../application/task/listTasksByGroup";
import { findTask } from "../../application/task/findTask";

export async function createTask(req: Request, res: Response) {
  try {
    const { name, description, deadline, groupId } = req.body;

    const newTask = await addTask(name, description, deadline, groupId);
    res.status(201).json({
      message: "Task created",
      project: newTask,
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export async function getTasksByGroup(req: Request, res: Response) {
  try {
    const { groupId } = req.params; // get URL parameter

    const tasks = await listTasksByGroup(Number(groupId));
    if (!tasks) {
      return res.status(404).json({ error: "Groups not found" });
    }

    res.json(tasks); // 200 by default
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export async function getTaskById(req: Request, res: Response) {
  try {
    const { taskId } = req.params; // get URL parameter

    const task = await findTask(Number(taskId));
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json(task);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
