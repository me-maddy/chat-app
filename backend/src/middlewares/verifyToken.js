import { AUTH_TOKEN_SECRET } from "../constants/config.js";
import { isValidUser } from "../controllers/user.controller.js";
import { setApiResponse } from "../utils/setApiResponse.js";
import jwt from "jsonwebtoken";

export const verifyAuthToken = (req, res, next) => {
  try {
    const token =
      req.headers.authorization?.split(" ")?.[1] ||
      req.headers.Authorization?.split(" ")?.[1];
    if (!token)
      return setApiResponse(401, false, true, "Unauthorized access", res);
    const tokenResponse = jwt.verify(token, AUTH_TOKEN_SECRET);
    if (!tokenResponse)
      return setApiResponse(401, false, true, "Unauthorized access", res);
    req["userId"] = tokenResponse.id;
    next();
  } catch (error) {
    setApiResponse(401, false, true, "Unauthorized access", res);
  }
};

export const authenticatedUser = async (req, res, next) => {
  console.log(req.userId);
  try {
    if (!req.userId || !(await isValidUser(req.userId))) {
      return setApiResponse(403, false, true, "Forbiddenn", res);
    }
    next();
  } catch (error) {
    setApiResponse(403, false, true, "Forbidden", res);
  }
};
