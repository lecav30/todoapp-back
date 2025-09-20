import { TaskRepository } from "../../infrastructure/repositories/TaskRepository";

const taskRepo = new TaskRepository();

export async function deleteTask(id: number) {
  return taskRepo.deleteTask(id);
}
