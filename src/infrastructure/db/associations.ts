import User from "./models/User";
import Task from "./models/Task";
import Project from "./models/Project";
import Group from "./models/Group";

export function setupAssociations() {
  User.hasMany(Project, { foreignKey: "userId" });
  Project.belongsTo(User, { foreignKey: "userId" });

  Project.hasMany(Group, { foreignKey: "projectId" });
  Group.belongsTo(Project, { foreignKey: "projectId" });

  Group.hasMany(Task, { foreignKey: "groupId" });
  Task.belongsTo(Group, { foreignKey: "groupId" });
}
