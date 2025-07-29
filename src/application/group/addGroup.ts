import { GroupRepository } from "../../infrastructure/repositories/GroupRepository";

const groupRepo = new GroupRepository();

export async function addGroup(
  name: string,
  description: string,
  projectId: number,
) {
  const existingGroup = await groupRepo.findByName(name, projectId);
  if (existingGroup) {
    throw new Error("A group with that name already exists");
  }

  const group = await groupRepo.createGroup(name, description, projectId);

  return group;
}
