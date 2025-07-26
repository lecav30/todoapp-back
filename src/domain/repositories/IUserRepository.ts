import type User from "../../infrastructure/db/models/User";

export interface IUserRepository {
  findByEmail(email: string): Promise<User | null>;
  createUser(email: string, password: string): Promise<User>;
}
