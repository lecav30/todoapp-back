import { DataTypes, Model, type Optional } from "sequelize";
import sequelize from "../connection";

// Attributes that matches database columns
interface UserAttributes {
  id: number;
  email: string;
  password: string;
  updatedAt?: Date;
  createdAt?: Date;
}

// Attributes required for creating a new user
interface UserCreationAttributes
  extends Optional<UserAttributes, "id" | "createdAt" | "updatedAt"> {}

// User model extending Sequelize's Model class
class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public email!: string;
  public password!: string;
  public readonly updatedAt!: Date;
  public readonly createdAt!: Date;
}

// Initialize the User model and define its columns

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
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
    tableName: "users",
    modelName: "User",
  },
);

export default User;
