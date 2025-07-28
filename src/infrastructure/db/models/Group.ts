import { DataTypes, Model, type Optional } from "sequelize";
import sequelize from "../connection";

interface GroupAttributes {
  id: number;
  name: string;
  description?: string;
  projectId: number;
  updatedAt?: Date;
  createdAt?: Date;
}

interface GroupCreationAttributes
  extends Optional<GroupAttributes, "id" | "createdAt" | "updatedAt"> {}

class Group
  extends Model<GroupAttributes, GroupCreationAttributes>
  implements GroupAttributes
{
  public id!: number;
  public name!: string;
  public description!: string;
  public projectId!: number;
  public readonly updatedAt!: Date;
  public readonly createdAt!: Date;
}

Group.init(
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
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "project",
        key: "id",
      },
      onDelete: "CASCADE",
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
    tableName: "groups",
    modelName: "Group",
  },
);

export default Group;
