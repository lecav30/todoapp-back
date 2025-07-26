import { Router } from "express";
import { login, register } from "../controllers/AuthController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.post("/register", register);
router.post("/login", login);

router.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: "Access granted", user: (req as any).user });
});

export default router;
