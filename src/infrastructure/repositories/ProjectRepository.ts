import type { IProjectRepository } from "../../domain/repositories/IProjectRepository";
import Project from "../db/models/Project";

export class ProjectRepository implements IProjectRepository {
  findByName(name: string, userId: number): Promise<Project | null> {
    return Project.findOne({ where: { name, userId } });
  }
  createProject(
    name: string,
    description: string,
    userId: number,
  ): Promise<Project> {
    return Project.create({ name, description, userId });
  }
}
