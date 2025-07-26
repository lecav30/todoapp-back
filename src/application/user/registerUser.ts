import bcrypt from "bcrypt";
import User from "../../infrastructure/db/models/User";

export async function registerUser(email: string, password: string) {
  // Check if user already exists
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    throw new Error("User already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Add new user
  const user = await User.create({
    email,
    password: hashedPassword,
  });

  return user;
}
