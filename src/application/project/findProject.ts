import { ProjectRepository } from "../../infrastructure/repositories/ProjectRepository";

const projectRepo = new ProjectRepository();

export async function findProject(id: number) {
  const project = await projectRepo.findById(id);
  return project;
}
