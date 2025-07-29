import type { IGroupRepository } from "../../domain/repositories/IGroupRepository";
import Group from "../db/models/Group";

export class GroupRepository implements IGroupRepository {
  findByName(name: string, projectId: number): Promise<Group | null> {
    return Group.findOne({ where: { name, projectId } });
  }
  findByProjectId(projectId: number): Promise<Group[] | null> {
    return Group.findAll({ where: { projectId } });
  }
  findById(id: number): Promise<Group | null> {
    return Group.findOne({ where: { id } });
  }
  createGroup(
    name: string,
    description: string,
    projectId: number,
  ): Promise<Group> {
    return Group.create({ name, description, projectId });
  }
}
