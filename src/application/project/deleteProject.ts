import { ProjectRepository } from "../../infrastructure/repositories/ProjectRepository";

const groupRepo = new ProjectRepository();

export async function deleteProject(id: number) {
  return groupRepo.deleteProject(id);
}
