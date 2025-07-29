import type { ITaskRepository } from "../../domain/repositories/ITaskRepository";
import Task from "../db/models/Task";

export class TaskRepository implements ITaskRepository {
  findByGroupId(groupId: number): Promise<Task[] | null> {
    return Task.findAll({ where: { groupId } });
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
}
