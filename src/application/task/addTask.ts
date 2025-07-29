import { TaskRepository } from "../../infrastructure/repositories/TaskRepository";

const taskRepo = new TaskRepository();

export async function addTask(
  name: string,
  description: string,
  deadline: Date,
  groupId: number,
) {
  const task = await taskRepo.createTask(name, description, deadline, groupId);

  return task;
}
