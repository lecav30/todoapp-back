import express from "express";
import cors from "cors";
import authRoutes from "./interfaces/routes/auth.routes";
import projectRoutes from "./interfaces/routes/project.routes";
import groupRoutes from "./interfaces/routes/group.routes";
import taskRoutes from "./interfaces/routes/task.routes";
import sequelize from "./infrastructure/db/connection";
import dotenv from "dotenv";
import { setupAssociations } from "./infrastructure/db/associations";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // allow cookies/autorización
  }),
);
app.use(express.json());

// Routes
dotenv.config();
app.use("/auth", authRoutes);
app.use("/project", projectRoutes);
app.use("/group", groupRoutes);
app.use("/task", taskRoutes);

const PORT = process.env.PORT || 3000;

setupAssociations();

// sync force just to develop locally
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
