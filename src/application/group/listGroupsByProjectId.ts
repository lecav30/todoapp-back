import { GroupRepository } from "../../infrastructure/repositories/GroupRepository";

const groupRepo = new GroupRepository();

export async function listGroupsByProjectId(projectId: number) {
  const groupList = await groupRepo.findByProjectId(projectId);
  return groupList;
}
