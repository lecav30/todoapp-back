import type Project from "../../infrastructure/db/models/Project";

export interface IProjectRepository {
  findByName(name: string, userId: number): Promise<Project | null>;
  findByUserId(userId: number): Promise<Project[] | null>;
  findById(id: number): Promise<Project | null>;
  createProject(
    name: string,
    description: string,
    userId: number,
  ): Promise<Project>;
}
