import User from "../../infrastructure/db/models/User";
import { generateToken } from "../../infrastructure/security/jwt";
import bcrypt from "bcrypt";

export async function loginUser(email: string, password: string) {
  // Check email
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error("Invalid email or password");
  }

  // Check password
  const isPasswordValid = await bcrypt.compare(
    password,
    user.get("password") as string,
  );
  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  // Generate JWT token
  const token = generateToken({
    id: user.get("id"),
    email: user.get("email"),
  });

  return token;
}
