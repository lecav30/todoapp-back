import bcrypt from "bcrypt";
import { UserRepository } from "../../infrastructure/repositories/UserRepository";

const userRepo = new UserRepository();

export async function registerUser(email: string, password: string) {
  // Check if user already exists
  const existingUser = await userRepo.findByEmail(email);
  if (existingUser) {
    throw new Error("User already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Add new user
  const user = await userRepo.createUser(email, hashedPassword);

  return user;
}
