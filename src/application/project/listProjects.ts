import { ProjectRepository } from "../../infrastructure/repositories/ProjectRepository";

const projectRepo = new ProjectRepository();

export async function listProjects(userId: number) {
  const projectList = await projectRepo.findByUserId(userId);
  return projectList;
}
