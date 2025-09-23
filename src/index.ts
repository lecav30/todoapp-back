import express from "express";
import cors from "cors";
import helmet from "helmet";
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
    origin: process.env.CLIENT_URL,
    credentials: true, // allow cookies/autorización
  }),
);
app.use(
  helmet({
    contentSecurityPolicy: false, // desactivar CSP si no lo configuras aún
  }),
);
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/project", projectRoutes);
app.use("/group", groupRoutes);
app.use("/task", taskRoutes);

const PORT = process.env.PORT || 3000;

setupAssociations();

if (process.env.NODE_ENV === "development") {
  sequelize.sync(/* { force: true } */).then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  });
} else {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Database connected");
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => {
      console.error("DB connection error:", err);
      process.exit(1);
    });
}
