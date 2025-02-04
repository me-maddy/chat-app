import * as userService from "../services/user.service.js";
import { setApiResponse } from "../utils/setApiResponse.js";

export async function registerUser(req, res) {
  try {
    const user = await userService.createUser(req.body);
    const { authtoken, refreshToken } = user.generateTokens();
    setApiResponse(202, true, false, { user, authtoken, refreshToken }, res);
  } catch (error) {
    setApiResponse(400, false, true, error.message, res);
  }
}

export async function loginUser(req, res) {
  try {
    const user = await userService.loginUser(req.body);
    const { authtoken, refreshToken } = user.generateTokens();
    setApiResponse(200, true, false, { user, authtoken, refreshToken }, res);
  } catch (error) {
    setApiResponse(400, false, true, error.message, res);
  }
}

export async function isValidUser(userId) {
  try {
    await userService.getUserDetails(userId);
    return true;
  } catch (error) {
    return false;
  }
}
