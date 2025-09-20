import { DataTypes, Model, type Optional } from "sequelize";
import sequelize from "../connection";

interface ProjectAttributes {
  id: number;
  name: string;
  description?: string;
  userId: number;
  updatedAt?: Date;
  createdAt?: Date;
}

interface ProjectCreationAttributes
  extends Optional<ProjectAttributes, "id" | "createdAt" | "updatedAt"> {}

class Project
  extends Model<ProjectAttributes, ProjectCreationAttributes>
  implements ProjectAttributes
{
  declare id: number;
  declare name: string;
  declare description: string;
  declare userId: number;
  declare readonly updatedAt: Date;
  declare readonly createdAt: Date;
}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      /* references: {
        model: "users",
        key: "id",
      },
      onDelete: "CASCADE", */
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: "projects",
    modelName: "Project",
  },
);

export default Project;
