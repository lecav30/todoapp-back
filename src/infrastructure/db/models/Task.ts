import { DataTypes, Model, type Optional } from "sequelize";
import sequelize from "../connection";

interface TaskAttributes {
  id: number;
  name: string;
  description: string;
  completed?: boolean;
  deadline?: Date;
  updatedAt?: Date;
  createdAt?: Date;
}

interface TaskCreationAttributes
  extends Optional<TaskAttributes, "id" | "createdAt" | "updatedAt"> {}

class Task
  extends Model<TaskAttributes, TaskCreationAttributes>
  implements TaskAttributes
{
  public id!: number;
  public name!: string;
  public description!: string;
  public completed!: boolean;
  public deadline!: Date;
  public readonly updatedAt!: Date;
  public readonly createdAt!: Date;
}

Task.init(
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
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: true,
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
    tableName: "tasks",
    modelName: "Task",
  },
);

export default Task;
