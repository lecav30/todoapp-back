import type { ITaskRepository } from "../../domain/repositories/ITaskRepository";
import Task from "../db/models/Task";

export class TaskRepository implements ITaskRepository {
  findByGroupId(groupId: number): Promise<Task[] | null> {
    return Task.findAll({
      where: { groupId },
      order: [
        ["completed", "ASC"],
        ["createdAt", "ASC"],
      ],
    });
  }
  findById(id: number): Promise<Task | null> {
    return Task.findOne({ where: { id } });
  }
  createTask(
    name: string,
    description: string,
    deadline: Date,
    groupId: number,
  ): Promise<Task> {
    return Task.create({ name, description, deadline, groupId });
  }
  async updateTask(
    id: number,
    updates: {
      name?: string;
      description?: string;
      completed?: boolean;
      deadline?: Date;
    },
  ): Promise<number> {
    const [affectedCount] = await Task.update(updates, { where: { id } });
    return affectedCount;
  }
  deleteTask(id: number): Promise<number> {
    return Task.destroy({ where: { id } });
  }
}
