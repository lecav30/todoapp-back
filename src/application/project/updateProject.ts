import { ProjectRepository } from "../../infrastructure/repositories/ProjectRepository";

const projectRepo = new ProjectRepository();

export async function updateProject(
  id: number,
  updates: {
    name?: string;
    description?: string;
  },
) {
  return projectRepo.updateProject(id, updates);
}
