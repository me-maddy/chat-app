import { setApiResponse } from "../utils/setApiResponse.js";
import * as projectService from "../services/project.service.js";
import * as userService from "../services/user.service.js";

export const createProject = async (req, res) => {
  try {
    const { userIds, projectName } = req.body;
    userIds.push(req.userId);
    const allUsersExist = await userService.allUsersExist(userIds);
    if (!allUsersExist)
      return setApiResponse(400, false, true, "Invalid users", res);
    const project = await projectService.createProject({
      projectName,
      userIds,
      projectOwnerId: req.userId,
    });
    return setApiResponse(200, true, false, project, res);
  } catch (error) {
    setApiResponse(400, false, true, error.message, res);
  }
};
