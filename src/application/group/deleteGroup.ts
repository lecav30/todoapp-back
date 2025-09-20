import { GroupRepository } from "../../infrastructure/repositories/GroupRepository";

const groupRepo = new GroupRepository();

export async function deleteGroup(id: number) {
  return groupRepo.deleteGroup(id);
}
