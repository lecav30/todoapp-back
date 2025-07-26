import type { IUserRepository } from "../../domain/repositories/IUserRepository";
import User from "../db/models/User";

export class UserRepository implements IUserRepository {
  findByEmail(email: string): Promise<User | null> {
    return User.findOne({ where: { email } });
  }
  createUser(email: string, password: string): Promise<User> {
    return User.create({ email, password });
  }
}
