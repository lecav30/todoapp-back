import { GroupRepository } from "../../infrastructure/repositories/GroupRepository";

const groupRepo = new GroupRepository();

export async function updateGroup(
  id: number,
  updates: {
    name?: string;
    description?: string;
  },
) {
  return groupRepo.updateGroup(id, updates);
}
