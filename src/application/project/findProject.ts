import { ProjectRepository } from "../../infrastructure/repositories/ProjectRepository";

const projectRepo = new ProjectRepository();

export async function findProject(id: number, userId: number) {
  const project = await projectRepo.findById(id, userId);
  return project;
}
