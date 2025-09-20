import User from "./models/User";
import Task from "./models/Task";
import Project from "./models/Project";
import Group from "./models/Group";

export function setupAssociations() {
  User.hasMany(Project, { foreignKey: "userId", onDelete: "CASCADE" });
  Project.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE" });

  Project.hasMany(Group, { foreignKey: "projectId", onDelete: "CASCADE" });
  Group.belongsTo(Project, { foreignKey: "projectId", onDelete: "CASCADE" });

  Group.hasMany(Task, { foreignKey: "groupId", onDelete: "CASCADE" });
  Task.belongsTo(Group, { foreignKey: "groupId", onDelete: "CASCADE" });
}
