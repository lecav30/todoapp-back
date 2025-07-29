import type Group from "../../infrastructure/db/models/Group";

export interface IGroupRepository {
  findByName(name: string, projectId: number): Promise<Group | null>;
  findByProjectId(projectId: number): Promise<Group[] | null>;
  findById(id: number): Promise<Group | null>;
  createGroup(
    name: string,
    description: string,
    projectId: number,
  ): Promise<Group>;
}
