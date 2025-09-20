import { DataTypes, Model, type Optional } from "sequelize";
import sequelize from "../connection";

interface TaskAttributes {
  id: number;
  name: string;
  description: string;
  completed?: boolean;
  deadline?: Date;
  groupId: number;
  updatedAt?: Date;
  createdAt?: Date;
}

interface TaskCreationAttributes
  extends Optional<TaskAttributes, "id" | "createdAt" | "updatedAt"> {}

class Task
  extends Model<TaskAttributes, TaskCreationAttributes>
  implements TaskAttributes
{
  declare id: number;
  declare name: string;
  declare description: string;
  declare completed: boolean;
  declare deadline: Date;
  declare groupId: number;
  declare readonly updatedAt: Date;
  declare readonly createdAt: Date;
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
      defaultValue: false,
      allowNull: false,
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      /* references: {
        model: "group",
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
    tableName: "tasks",
    modelName: "Task",
  },
);

export default Task;
