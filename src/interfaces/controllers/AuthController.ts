import { Request, Response } from "express";
import User from "../../infrastructure/db/models/User";
import bcrypt from "bcrypt";

// Register a new user
export async function register(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Add new user
    const newUser = await User.create({
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User registered", user: newUser });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}

// Login user
export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    // Check email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(
      password,
      user.get("password") as string,
    );
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.status(200).json({ message: "Login succesful", user });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
