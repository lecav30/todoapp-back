import type { IProjectRepository } from "../../domain/repositories/IProjectRepository";
import Project from "../db/models/Project";

export class ProjectRepository implements IProjectRepository {
  findByName(name: string, userId: number): Promise<Project | null> {
    return Project.findOne({ where: { name, userId } });
  }
  findByUserId(userId: number): Promise<Project[] | null> {
    return Project.findAll({
      where: { userId },
      order: [["createdAt", "ASC"]],
    });
  }
  findById(id: number): Promise<Project | null> {
    return Project.findOne({ where: { id } });
  }
  createProject(
    name: string,
    description: string,
    userId: number,
  ): Promise<Project> {
    return Project.create({ name, description, userId });
  }
  async updateProject(
    id: number,
    updates: {
      name?: string;
      description?: string;
    },
  ): Promise<number> {
    const [affectedCount] = await Project.update(updates, { where: { id } });
    return affectedCount;
  }
  deleteProject(id: number): Promise<number> {
    return Project.destroy({ where: { id } });
  }
}
