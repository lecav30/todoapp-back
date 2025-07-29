import { TaskRepository } from "../../infrastructure/repositories/TaskRepository";

const taskRepo = new TaskRepository();

export async function findTask(id: number) {
  const task = await taskRepo.findById(id);

  return task;
}
