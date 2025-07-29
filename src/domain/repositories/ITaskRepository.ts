import type Task from "../../infrastructure/db/models/Task";

export interface ITaskRepository {
  findByGroupId(groupId: number): Promise<Task[] | null>;
  findById(id: number): Promise<Task | null>;
  createTask(
    name: string,
    description: string,
    deadline: Date,
    groupId: number,
  ): Promise<Task>;
}
