import projectModel from "../models/projects.models.js";

export const createProject = async ({
  projectName,
  userIds,
  projectOwnerId,
}) => {
  const response = await projectModel.create({
    name: projectName,
    users: userIds,
    projectOwnerId,
  });
  if (!response) throw Error("Invalid credentials");
  return response;
};
