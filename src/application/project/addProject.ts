import { ProjectRepository } from "../../infrastructure/repositories/ProjectRepository";

const projectRepo = new ProjectRepository();

export async function addProject(
  name: string,
  description: string,
  userId: number,
) {
  const existingProject = await projectRepo.findByName(name, userId);
  if (existingProject) {
    throw new Error("A project with that name already exists");
  }

  const project = await projectRepo.createProject(name, description, userId);

  return project;
}
