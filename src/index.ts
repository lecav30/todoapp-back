import express from "express";
import cors from "cors";
import authRoutes from "./interfaces/routes/auth.routes";
import sequelize from "./infrastructure/db/connection";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
dotenv.config();
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
