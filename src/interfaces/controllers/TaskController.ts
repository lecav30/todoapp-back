import type { Request, Response } from "express";
import { addTask } from "../../application/task/addTask";
import { listTasksByGroup } from "../../application/task/listTasksByGroup";
import { findTask } from "../../application/task/findTask";
import { updateTask } from "../../application/task/updateTask";

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

export async function updateTaskById(req: Request, res: Response) {
  try {
    const { taskId } = req.params;

    const haveBeenUpdated = await updateTask(Number(taskId), req.body);

    if (haveBeenUpdated === 0) {
      return res.status(404).json({ error: "Task not found" });
    }

    const updatedTask = await findTask(Number(taskId));

    res.status(200).json({
      message: "Task updated",
      task: updatedTask,
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

export async function toggleTaskCompletion(req: Request, res: Response) {
  try {
    const { taskId } = req.params;

    const task = await findTask(Number(taskId));
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    const haveBeenUpdated = await updateTask(Number(taskId), {
      completed: !task.completed,
    });

    if (haveBeenUpdated === 0) {
      return res.status(404).json({ error: "Task not found" });
    }

    const updatedTask = await findTask(Number(taskId));

    res.status(200).json({
      message: "Task updated",
      task: updatedTask,
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
