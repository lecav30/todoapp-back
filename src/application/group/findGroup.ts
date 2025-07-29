import { GroupRepository } from "../../infrastructure/repositories/GroupRepository";

const groupRepo = new GroupRepository();

export async function findGroup(id: number) {
  const group = await groupRepo.findById(id);
  return group;
}
