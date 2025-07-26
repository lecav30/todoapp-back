import jwt, { type SignOptions } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "default_secret";

export function generateToken(
  payload: object,
  expiresIn: string | number = "15m",
) {
  const options: SignOptions = { expiresIn: expiresIn as any };
  return jwt.sign(payload, JWT_SECRET as jwt.Secret, options);
}

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET);
}
