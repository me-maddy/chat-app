import { Router } from "express";
import { loginApiValidator } from "./validators/loginApiValidator.js";
import { requestParamsValidator } from "../../middlewares/requestParamsValidator.js";
import registerApiValidator from "./validators/registerApiValidator.js";
import { loginUser, registerUser } from "../../controllers/user.controller.js";
import {
  authenticatedUser,
  verifyAuthToken,
} from "../../middlewares/verifyToken.js";
import { createProject } from "../../controllers/project.controller.js";
import { createProjectApiValidator } from "./validators/createProjectApiValidator.js";

const router = Router();

router.post("/login", loginApiValidator, requestParamsValidator, loginUser);

router.post(
  "/register",
  registerApiValidator,
  requestParamsValidator,
  registerUser
);

router.post(
  "/create-project",
  verifyAuthToken,
  authenticatedUser,
  createProjectApiValidator,
  requestParamsValidator,
  createProject
);

export default router;
