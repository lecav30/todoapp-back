import type { Request, Response } from "express";
import { registerUser } from "../../application/user/registerUser";
import { loginUser } from "../../application/user/loginUser";

// Register a new user
export async function register(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const newUser = await registerUser(email, password);
    res.status(201).json({ message: "User registered", user: newUser });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

// Login user
export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const token = await loginUser(email, password);
    res.status(200).json({ message: "Login succesful", token });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
