import { TaskRepository } from "../../infrastructure/repositories/TaskRepository";

const taskRepo = new TaskRepository();

export async function updateTask(
  id: number,
  updates: {
    name?: string;
    description?: string;
    completed?: boolean;
    deadline?: Date;
  },
) {
  return taskRepo.updateTask(id, updates);
}
