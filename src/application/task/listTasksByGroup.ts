import { TaskRepository } from "../../infrastructure/repositories/TaskRepository";

const taskRepo = new TaskRepository();

export async function listTasksByGroup(groupId: number) {
  const taskList = await taskRepo.findByGroupId(groupId);
  return taskList;
}
